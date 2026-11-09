টাইপস্ক্রিপ্ট OOP-তে অ্যাক্সেস মডিফায়ার

 ভূমিকা

অ্যাক্সেস মডিফায়ার ঠিক করে দেয় ক্লাসের কোনো সদস্য (প্রপার্টি বা মেথড) কে দেখতে ও পরিবর্তন করতে পারবে। এটি এনক্যাপসুলেশন নিশ্চিত করে, অর্থাৎ ভেতরের বিষয়গুলো লুকিয়ে রেখে শুধু প্রয়োজনীয় অংশ বাইরে উন্মুক্ত করে।

 public ও private

কোনো মডিফায়ার না দিলে সদস্য ডিফল্টভাবে `public` হয় এবং যেকোনো জায়গা থেকে ব্যবহার করা যায়। `private` সদস্য শুধু নিজের ক্লাসের ভেতরেই ব্যবহার করা যায়।

```ts
class Account {
  public owner: string;
  private balance: number;

  constructor(owner: string, balance: number) {
    this.owner = owner;
    this.balance = balance;
  }

  public getBalance(): number {
    return this.balance;
  }
}
```

ক্লাসের বাইরে `account.balance` পড়তে গেলে কম্পাইল এরর হবে।

## protected

`protected` সদস্য নিজের ক্লাস এবং সাবক্লাসে ব্যবহার করা যায়, কিন্তু বাইরে নয়।

```ts
class Savings extends Account {
  public describe(): string {
    return `${this.owner} has savings`;
  }
}
```

## readonly

readonly প্রপার্টিতে মান শুধু ঘোষণার সময় অথবা কনস্ট্রাক্টরের ভেতরে দেওয়া যায়।

```ts
class User {
  readonly id: number;
  constructor(id: number) {
    this.id = id;
  }
}
```

উপসংহার

ভেতরের অবস্থার জন্য private ইনহেরিটেন্সের জন্য protected অপরিবর্তনীয় মানের জন্য readonly এবং বাইরের API-র জন্য public ব্যবহার করুন। মনে রাখা দরকার, এই নিয়মগুলো শুধু কম্পাইল-টাইমে কাজ করে এবং তৈরি হওয়া JavaScript-এ থাকে না।
