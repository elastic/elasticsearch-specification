---
name: 🐛 Wrong type
about: A type definition is wrong for an API
labels: wrong type
---

**Please read this entire template before posting any issue. If you ignore these instructions
and post an issue here that does not follow the instructions, your issue might be closed,
locked, and assigned the `invalid` label.**

It's not uncommon that somebody already opened an issue or in the best case it's already fixed but not merged. That's the reason why you should [search](https://github.com/elastic/elastic-client-generator/labels/wrong%20type) at first before submitting a new one.

If you want to try fixing the type yourself, you are most welcome!
Take a look at [our documentation](https://github.com/elastic/elastic-client-generator#how-to-validate-the-specification) to see how to do it.

## 🐛 Wrong type

The name of the API that is currently wrong (for version 7.x), it can be a request, response or both.

## Definition

If possible provide a snippet with the fix.

```diff
 class SomeType {
   foo: string
+  bar: integer
 }
```