# TypeScript Practice Sheet 2 (Modules, Config, Async & Advanced Types)

Continuation of sheet 1. This one covers the parts of the language you need before touching a framework: how modules and types move between files, what `tsconfig.json` actually does, async typing, and the type-system features that show up constantly in real code.

---

## 1. `import`/`export` basics with types

**Exercise:** Create a `types.ts` file that exports an interface `User` and a type `UserRole`. Then in `main.ts`, import and use them to type a function `greetUser`.

```ts
// types.ts

// main.ts
```

<details>
<summary>Solution</summary>

```ts
// types.ts
export interface User {
  id: number;
  name: string;
  role: UserRole;
}

export type UserRole = "admin" | "member";

// main.ts
import { User, UserRole } from "./types";

function greetUser(user: User): string {
  return `Hello, ${user.name} (${user.role})`;
}
```

Key idea: types are exported/imported exactly like values — no special syntax needed, though TS also gives you `import type` for clarity (next exercise).
</details>

---

## 2. `import type` — type-only imports

**Exercise:** Rewrite the import in `main.ts` above using `import type` instead of a regular `import`, and explain (in a comment) why this matters for compiled JS output.

```ts
// your code here
```

<details>
<summary>Solution</summary>

```ts
import type { User, UserRole } from "./types";

// `import type` tells TypeScript this import is ONLY used for types,
// not values. When the file is compiled to JS, this import line is
// completely erased — there's no runtime cost, and it avoids
// accidentally importing something that doesn't exist at runtime
// (e.g. if types.ts only has interfaces, it produces no JS at all).
```

Key idea: mixing `import type` for types and plain `import` for values keeps your compiled output clean, especially useful when a file exports both.
</details>

---

## 3. `tsconfig.json` — reading and setting key options

**Exercise:** Write a minimal `tsconfig.json` for a Node.js project that: compiles to ES2020, uses CommonJS modules, outputs to a `dist/` folder, reads source from `src/`, and enables strict type checking.

```json
// your code here
```

<details>
<summary>Solution</summary>

```json
{
  "compilerOptions": {
    "target": "ES2020",
    "module": "CommonJS",
    "outDir": "./dist",
    "rootDir": "./src",
    "strict": true,
    "esModuleInterop": true,
    "skipLibCheck": true,
    "forceConsistentCasingInFileNames": true
  },
  "include": ["src/**/*"],
  "exclude": ["node_modules", "dist"]
}
```

What each key does:
- `target` — which JS version the output uses
- `module` — module system for output (`CommonJS` for Node, `ESNext` for modern bundlers)
- `strict` — turns on all strict checks (`noImplicitAny`, `strictNullChecks`, etc.) — always use this
- `esModuleInterop` — lets you write `import express from "express"` instead of `import * as express`
- `skipLibCheck` — skips type-checking `.d.ts` files in `node_modules` (faster builds)
</details>

---

## 4. `strictNullChecks` in practice

**Exercise:** With `strict: true`, this function has a bug TypeScript will catch. Find it and fix it.

```ts
function findUser(id: number, users: { id: number; name: string }[]) {
  const user = users.find((u) => u.id === id);
  return user.name.toUpperCase();
}
```

<details>
<summary>Solution</summary>

```ts
function findUser(id: number, users: { id: number; name: string }[]): string {
  const user = users.find((u) => u.id === id);
  if (!user) {
    throw new Error(`User with id ${id} not found`);
  }
  return user.name.toUpperCase();
}
```

Key idea: `Array.prototype.find` returns `T | undefined`. Without `strictNullChecks` (part of `strict`), JS would let you access `.name` on `undefined` and crash at runtime. TS catches it at compile time instead — this is the single biggest bug class `strict` mode prevents.
</details>

---

## 5. Typing async functions & Promises

**Exercise:** Write an async function `fetchUserById(id: number): Promise<User>` that simulates an API call (use a fake `setTimeout`-based promise), and a caller that awaits it and handles a possible failure.

```ts
// your code here
```

<details>
<summary>Solution</summary>

```ts
interface User {
  id: number;
  name: string;
}

function fetchUserById(id: number): Promise<User> {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (id === 0) {
        reject(new Error("Invalid id"));
      } else {
        resolve({ id, name: "Sumit" });
      }
    }, 500);
  });
}

async function main() {
  try {
    const user = await fetchUserById(1);
    console.log(user.name);
  } catch (err) {
    console.error("Failed to fetch user:", err);
  }
}
```

Key idea: an `async` function's return type is always wrapped in `Promise<T>` — you write `Promise<User>`, not `User`, even though you `return` a plain `User` inside the function body.
</details>

---

## 6. `catch (err: unknown)` — typing caught errors

**Exercise:** TypeScript types caught errors as `unknown` by default in strict mode. Write a function that safely extracts a message string from a caught error, whether it's an `Error` instance or something else (string, object, etc).

```ts
try {
  // something that throws
} catch (err) {
  // your code here
}
```

<details>
<summary>Solution</summary>

```ts
function getErrorMessage(err: unknown): string {
  if (err instanceof Error) {
    return err.message;
  }
  if (typeof err === "string") {
    return err;
  }
  return "An unknown error occurred";
}

try {
  throw new Error("Something broke");
} catch (err) {
  console.error(getErrorMessage(err));
}
```

Key idea: `unknown` forces you to narrow before using the value — unlike `any`, which lets anything through unchecked. This is why `unknown` is the "safe" version of `any`.
</details>

---

## 7. `unknown` vs `any`

**Exercise:** Given a function `parseConfig(json: string)` that parses a JSON string, type its return value as `unknown` (not `any`), then write code that safely reads a `port` field off the result, checking that it's actually a number before using it.

```ts
// your code here
```

<details>
<summary>Solution</summary>

```ts
function parseConfig(json: string): unknown {
  return JSON.parse(json);
}

const config = parseConfig('{"port": 3000}');

if (
  typeof config === "object" &&
  config !== null &&
  "port" in config &&
  typeof (config as { port: unknown }).port === "number"
) {
  const port = (config as { port: number }).port;
  console.log(`Server running on port ${port}`);
}
```

Key idea: `JSON.parse` returning `any` is a common source of runtime bugs — casting it to `unknown` first and narrowing manually (or with a validation library like Zod later) is much safer.
</details>

---

## 8. Type assertions (`as`) — when it's OK, when it's a smell

**Exercise:** You're grabbing a DOM element you know is an `<input>`. Use a type assertion to type it correctly, then explain in a comment when `as` is appropriate vs risky.

```ts
// your code here
```

<details>
<summary>Solution</summary>

```ts
const input = document.getElementById("username") as HTMLInputElement;
input.value = "Sumit";

// `as` is appropriate here because YOU have information TypeScript
// can't infer — you know that element's id maps to an <input>.
// It's risky when used to silence a real type error instead of fixing
// it (e.g. `(response as any).data` to bypass a mismatched API type) —
// that just hides bugs instead of catching them.
```

Key idea: an assertion doesn't change runtime behavior at all — it only tells the compiler "trust me." If you're wrong, you get a runtime error instead of a compile-time one, which defeats the point of using TypeScript.
</details>

---

## 9. Non-null assertion (`!`)

**Exercise:** Given `document.querySelector(".app")` (which returns `Element | null`), use the non-null assertion operator to tell TypeScript it will never be null, and explain why this is different (and more dangerous) than a normal `if` check.

```ts
// your code here
```

<details>
<summary>Solution</summary>

```ts
const app = document.querySelector(".app")!;
app.classList.add("active");

// The `!` tells TS "I promise this isn't null," but TS does zero
// verification — if `.app` doesn't exist in the DOM, this crashes at
// runtime with "Cannot read properties of null." A normal `if (app)`
// check is safer because it actually handles the null case instead
// of just asserting it away.
```

Key idea: prefer explicit `if` / `??` checks over `!` wherever the null case is actually possible — save `!` for cases you're fully certain about (e.g. right after a check you already did).
</details>

---

## 10. Custom error classes

**Exercise:** Create a custom error class `ValidationError` that extends `Error` and carries an extra `field: string` property. Write a function that throws it, and a caller that catches and narrows to it specifically using `instanceof`.

```ts
// your code here
```

<details>
<summary>Solution</summary>

```ts
class ValidationError extends Error {
  field: string;

  constructor(message: string, field: string) {
    super(message);
    this.name = "ValidationError";
    this.field = field;
  }
}

function validateAge(age: number): void {
  if (age < 0) {
    throw new ValidationError("Age cannot be negative", "age");
  }
}

try {
  validateAge(-5);
} catch (err) {
  if (err instanceof ValidationError) {
    console.error(`Validation failed on field "${err.field}": ${err.message}`);
  } else {
    throw err; // re-throw anything unexpected
  }
}
```

Key idea: custom error classes plus `instanceof` narrowing let you handle different failure types differently — much more useful than generic `Error` objects everywhere.
</details>

---

## 11. `.d.ts` declaration files

**Exercise:** You're using a small JS library `leftpad` that has no types. Write a `leftpad.d.ts` declaration file that describes its single exported function `leftpad(str: string, len: number, char?: string): string`.

```ts
// leftpad.d.ts
```

<details>
<summary>Solution</summary>

```ts
// leftpad.d.ts
declare module "leftpad" {
  function leftpad(str: string, len: number, char?: string): string;
  export default leftpad;
}
```

```ts
// usage
import leftpad from "leftpad";
console.log(leftpad("5", 3, "0")); // "005"
```

Key idea: `.d.ts` files contain type information only — no implementation. They let you type-check against JS code (your own or a third-party library) that has no built-in types. Most popular libraries either ship their own `.d.ts` or have one available via `@types/<package>` on npm.
</details>

---

## 12. `keyof`, `typeof`, and a simple mapped type

**Exercise:** Given a `config` object (plain JS-style object literal), derive a `ConfigKey` type from its keys using `keyof typeof`, then write a `getConfigValue(key: ConfigKey)` function that returns the correctly-typed value for that key.

```ts
const config = {
  port: 3000,
  host: "localhost",
  debug: true,
};

// your code here
```

<details>
<summary>Solution</summary>

```ts
const config = {
  port: 3000,
  host: "localhost",
  debug: true,
};

type ConfigKey = keyof typeof config; // "port" | "host" | "debug"

function getConfigValue<K extends ConfigKey>(key: K): (typeof config)[K] {
  return config[key];
}

const port = getConfigValue("port"); // typed as number
const host = getConfigValue("host"); // typed as string
```

Key idea: `typeof config` gets the *type* of the value `config`, and `keyof` on that gets a union of its property names. This pattern — deriving types from real objects instead of hand-writing them — keeps types in sync automatically as the object changes.
</details>

---

## Suggested order
1–2 (modules) → 3–4 (tsconfig & strict mode — do this before writing any real project) → 5–6 (async & error typing) → 7–9 (unknown/any/assertions — know when each is safe) → 10 (error classes) → 11 (`.d.ts`) → 12 (`keyof`/`typeof`, optional but very common in real codebases).

After both sheets, you have enough TypeScript to start converting a real file — an Express route or a React component — and look up anything unfamiliar as it comes up.
