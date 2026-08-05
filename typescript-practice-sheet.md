# TypeScript Practice Sheet (for JavaScript devs)

How to use this: try each exercise yourself first (in a `.ts` file or the [TS Playground](https://www.typescriptlang.org/play)), then check the solution. Exercises get progressively harder, moving from basic types to generics and utility types.

---

## 1. Basic types & inference

**Exercise:** Declare variables for a user's name (string), age (number), isActive (boolean), and a list of hobbies (array of strings). Let TypeScript infer where possible, but explicitly annotate at least one.

```ts
// your code here
```

<details>
<summary>Solution</summary>

```ts
let name: string = "Sumit";
let age = 24; // inferred as number
let isActive = true; // inferred as boolean
let hobbies: string[] = ["coding", "reading"];
```

Key idea: TypeScript infers types from the initial value, so annotations aren't always required — but they help for function params, empty arrays, and public APIs.
</details>

---

## 2. Function typing

**Exercise:** Write a function `calculateTotal(price: number, quantity: number)` that returns the total cost. Add a second optional parameter `discount` (a percentage, e.g. 10 for 10%) that defaults to 0.

```ts
// your code here
```

<details>
<summary>Solution</summary>

```ts
function calculateTotal(price: number, quantity: number, discount: number = 0): number {
  const subtotal = price * quantity;
  return subtotal - (subtotal * discount) / 100;
}

console.log(calculateTotal(100, 2)); // 200
console.log(calculateTotal(100, 2, 10)); // 180
```

Key idea: parameters with a default value don't need an explicit type — TS infers it from the default.
</details>

---

## 3. Interfaces vs type aliases

**Exercise:** Define a shape for a `Product` (id: number, name: string, price: number, tags: string[]) using an `interface`. Then define the same shape using `type`. Write a function `printProduct` that accepts either.

```ts
// your code here
```

<details>
<summary>Solution</summary>

```ts
interface ProductInterface {
  id: number;
  name: string;
  price: number;
  tags: string[];
}

type ProductType = {
  id: number;
  name: string;
  price: number;
  tags: string[];
};

function printProduct(product: ProductInterface): void {
  console.log(`${product.name} - ₹${product.price}`);
}
```

Key idea: `interface` and `type` are almost interchangeable for object shapes. Interfaces can be extended/merged (declaration merging); type aliases are more flexible for unions, tuples, and mapped types.
</details>

---

## 4. Optional & readonly properties

**Exercise:** Extend the `Product` interface with an optional `description` field and make `id` readonly. Try (mentally or in the playground) reassigning `product.id` after creation and note the error.

```ts
// your code here
```

<details>
<summary>Solution</summary>

```ts
interface Product {
  readonly id: number;
  name: string;
  price: number;
  tags: string[];
  description?: string; // optional
}

const product: Product = { id: 1, name: "Keyboard", price: 999, tags: ["electronics"] };
// product.id = 2; // ❌ Error: Cannot assign to 'id' because it is a read-only property.
```
</details>

---

## 5. Union types & literal types

**Exercise:** Write a function `formatStatus(status)` where `status` can only be `"pending" | "success" | "error"`. Return a formatted message for each case, and throw an error for anything else (TypeScript should make that last case unreachable).

```ts
// your code here
```

<details>
<summary>Solution</summary>

```ts
type Status = "pending" | "success" | "error";

function formatStatus(status: Status): string {
  switch (status) {
    case "pending":
      return "⏳ Waiting...";
    case "success":
      return "✅ Done!";
    case "error":
      return "❌ Failed.";
    default:
      const exhaustiveCheck: never = status;
      throw new Error(`Unhandled status: ${exhaustiveCheck}`);
  }
}
```

Key idea: the `never` type in the default case gives you a compile-time error if you add a new status but forget to handle it — this is called "exhaustiveness checking."
</details>

---

## 6. Type narrowing (guards)

**Exercise:** Write a function `getLength(value: string | string[])` that returns the length whether `value` is a string or an array, using type narrowing (no `any`, no type casting).

```ts
// your code here
```

<details>
<summary>Solution</summary>

```ts
function getLength(value: string | string[]): number {
  if (Array.isArray(value)) {
    return value.length; // TS knows it's string[] here
  }
  return value.length; // TS knows it's string here
}
```

Key idea: `typeof`, `Array.isArray`, `instanceof`, and `in` checks all narrow union types automatically inside the branch.
</details>

---

## 7. Classes with access modifiers

**Exercise:** Create a `BankAccount` class with a private `balance` (starts at 0), public methods `deposit(amount)` and `withdraw(amount)`, and a public getter `currentBalance`. `withdraw` should throw an error if funds are insufficient.

```ts
// your code here
```

<details>
<summary>Solution</summary>

```ts
class BankAccount {
  private balance: number = 0;

  deposit(amount: number): void {
    if (amount <= 0) throw new Error("Deposit must be positive");
    this.balance += amount;
  }

  withdraw(amount: number): void {
    if (amount > this.balance) throw new Error("Insufficient funds");
    this.balance -= amount;
  }

  get currentBalance(): number {
    return this.balance;
  }
}

const account = new BankAccount();
account.deposit(500);
account.withdraw(200);
console.log(account.currentBalance); // 300
// account.balance; // ❌ Error: 'balance' is private
```
</details>

---

## 8. Generics — the basics

**Exercise:** Write a generic function `getFirstItem<T>(arr: T[])` that returns the first item of any array, typed correctly no matter what type the array holds.

```ts
// your code here
```

<details>
<summary>Solution</summary>

```ts
function getFirstItem<T>(arr: T[]): T | undefined {
  return arr[0];
}

const firstNum = getFirstItem([1, 2, 3]); // number | undefined
const firstStr = getFirstItem(["a", "b"]); // string | undefined
```

Key idea: `T` is a placeholder decided at the call site — this is how you avoid `any` while still writing reusable code.
</details>

---

## 9. Generics with constraints

**Exercise:** Write a generic function `getProperty<T, K extends keyof T>(obj: T, key: K)` that returns the value of a given key on an object, with full type safety (no accessing keys that don't exist).

```ts
// your code here
```

<details>
<summary>Solution</summary>

```ts
function getProperty<T, K extends keyof T>(obj: T, key: K): T[K] {
  return obj[key];
}

const user = { name: "Sumit", age: 24 };
console.log(getProperty(user, "name")); // "Sumit"
// getProperty(user, "email"); // ❌ Error: 'email' doesn't exist on type
```
</details>

---

## 10. Utility types — `Partial`, `Pick`, `Omit`

**Exercise:** Given the `Product` interface from Exercise 4, write:
1. An `updateProduct` function that accepts a partial product (only the fields being changed).
2. A `ProductPreview` type with only `name` and `price`.
3. A `ProductWithoutTags` type that excludes `tags`.

```ts
// your code here
```

<details>
<summary>Solution</summary>

```ts
interface Product {
  readonly id: number;
  name: string;
  price: number;
  tags: string[];
  description?: string;
}

function updateProduct(id: number, updates: Partial<Product>): void {
  console.log(`Updating product ${id} with`, updates);
}
updateProduct(1, { price: 799 }); // only price needs to be passed

type ProductPreview = Pick<Product, "name" | "price">;

type ProductWithoutTags = Omit<Product, "tags">;
```

Key idea: `Partial<T>` makes every field optional, `Pick<T, K>` selects a subset of fields, `Omit<T, K>` removes fields. These are built from TypeScript's mapped types.
</details>

---

## 11. `Record` and enums

**Exercise:** Create an enum `Role` with `Admin`, `Editor`, `Viewer`. Then create a `permissions` object typed with `Record<Role, string[]>` mapping each role to an array of permission strings.

```ts
// your code here
```

<details>
<summary>Solution</summary>

```ts
enum Role {
  Admin = "ADMIN",
  Editor = "EDITOR",
  Viewer = "VIEWER",
}

const permissions: Record<Role, string[]> = {
  [Role.Admin]: ["create", "read", "update", "delete"],
  [Role.Editor]: ["create", "read", "update"],
  [Role.Viewer]: ["read"],
};

console.log(permissions[Role.Editor]); // ["create", "read", "update"]
```

Key idea: `Record<K, V>` is great for lookup objects where you want TypeScript to force you to cover every possible key.
</details>

---

## 12. Putting it together — typing an API response

**Exercise:** You call an API that returns either a success response `{ status: "success", data: T }` or an error response `{ status: "error", message: string }`. Model this as a generic discriminated union `ApiResponse<T>`, then write a function `handleResponse<T>(response: ApiResponse<T>)` that logs the data on success or the message on error, using narrowing on the `status` field.

```ts
// your code here
```

<details>
<summary>Solution</summary>

```ts
type ApiResponse<T> =
  | { status: "success"; data: T }
  | { status: "error"; message: string };

function handleResponse<T>(response: ApiResponse<T>): void {
  if (response.status === "success") {
    console.log("Data:", response.data); // TS knows `data` exists here
  } else {
    console.error("Error:", response.message); // TS knows `message` exists here
  }
}

handleResponse<{ id: number }>({ status: "success", data: { id: 1 } });
handleResponse({ status: "error", message: "Not found" });
```

Key idea: this "discriminated union" pattern (a shared literal field like `status` that TS uses to narrow) is the standard way to type API responses, Redux actions, and form states in real TypeScript codebases — including MERN-stack backends and React frontends.
</details>

---

## Suggested order to attempt these
1–4 (fundamentals) → 5–6 (unions & narrowing) → 7 (classes, if you're comfortable with OOP from JS) → 8–9 (generics) → 10–11 (utility types) → 12 (real-world pattern).

Once you're comfortable with all 12, a good next step is converting a small existing JS project (e.g. an Express route file or a React component) to TypeScript — that's where these concepts actually click.
