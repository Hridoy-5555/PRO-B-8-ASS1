টাইপস্ক্রিপ্টে টাইপ ন্যারোইং (Type Narrowing)

 ভূমিকা

টাইপ ন্যারোইং হলো এমন একটি প্রক্রিয়া, যার মাধ্যমে টাইপস্ক্রিপ্ট কোডের কোনো নির্দিষ্ট ব্লকের ভেতরে একটি বিস্তৃত টাইপকে আরও নির্দিষ্ট টাইপে পরিণত করে। এর ফলে ইউনিয়ন টাইপ নিয়ে কাজ করার সময় ঝুঁকিপূর্ণ টাইপ অ্যাসার্শন ছাড়াই নিরাপদে কোড লেখা যায়।

 typeof

প্রিমিটিভ টাইপ যাচাইয়ের জন্য typof ব্যবহার করা হয়। প্রতিটি শাখার ভেতরে টাইপস্ক্রিপ্ট সঠিক টাইপটি চিনতে পারে।

```ts
function double(value: string | number): string | number {
  if (typeof value === "string") {
    return value.repeat(2);
  }
  return value * 2;
}
```
 instanceof

ক্লাসের অবজেক্ট যাচাই করতে `instanceof` ব্যবহার করা হয়। এটি রানটাইমে প্রোটোটাইপ চেইন পরীক্ষা করে।

```ts
function describe(value: Error | Date): string {
  if (value instanceof Error) {
    return value.message;
  }
  return value.toISOString();
}
```

 in অপারেটর

কোনো অবজেক্টে নির্দিষ্ট প্রপার্টি আছে কি না তা `in` অপারেটর দিয়ে যাচাই করা যায়। এটি অবজেক্ট ইউনিয়নকে আলাদা করতে কাজে লাগে।

```ts
type Cat = { meow: () => string };
type Dog = { bark: () => string };

function speak(pet: Cat | Dog): string {
  return "meow" in pet ? pet.meow() : pet.bark();
}
```

 উপসংহার

টাইপ ন্যারোইং রানটাইম যাচাইয়ের সঙ্গে কম্পাইল-টাইম নিরাপত্তাকে যুক্ত করে। প্রিমিটিভের জন্য `typeof`, ক্লাসের জন্য `instanceof` এবং অবজেক্টের গঠন চেনার জন্য `in` ব্যবহার করা উচিত। এগুলো একসঙ্গে ব্যবহার করলে ইউনিয়ন টাইপ ব্যবহার সহজ ও নিরাপদ হয়।
