import { RuleTester } from '@typescript-eslint/rule-tester'
import rule from '../rules/invalid-node-types.js'

const ruleTester = new RuleTester({
  languageOptions: {
    parserOptions: {
      projectService: {
        allowDefaultProject: ['*.ts*'],
      },
      tsconfigRootDir: import.meta.dirname,
    },
  },
})

ruleTester.run('invalid-node-types', rule, {
  valid: [
    `type MyType = number`,
    `enum MyEnum { foo, bar, baz }`,
    `class MyClass {
       foo: boolean
       bar: object
       baz: any
    }`,
    `interface MyInterface {
  id: number
  data: object
  records: Record<string, number[]>[]
}`
  ],
  invalid: [
    {
      code: `type MyFn = (name: string) => boolean`,
      errors: [{ messageId: 'function' }]
    },
    {
      code: `function foo(bar: string): number { return 1 }`,
      errors: [{ messageId: 'function' }]
    },
    {
      code: `try {
  doThing()
} catch (err: any) {
  logError(err)
}`,
      errors: [
        // two messages because TryStatement and CatchClause get flagged separately
        { messageId: 'exception' },
        { messageId: 'exception' },
      ]
    },
    {
      code: `for (let i = 0; i++; i < 5) { console.log(i) }`,
      errors: [{ messageId: 'loop' }]
    },
    {
      code: `while (true) { console.log('hello') }`,
      errors: [{ messageId: 'loop' }]
    },
    {
      code: `for (const i of myArray) { console.log(i) }`,
      errors: [{ messageId: 'loop' }]
    },
    {
      code: `const val = await myFn()`,
      errors: [{ messageId: 'async' }]
    },
    {
      code: `if (true) console.log('true!')`,
      errors: [{ messageId: 'condition' }]
    },
    {
      code: 'const CondType = someCondition ? TypeOne : TypeTwo',
      errors: [{ messageId: 'condition' }]
    },
    {
      code: 'type Foo = undefined',
      errors: [{ messageId: 'undefined' }]
    },
    {
      code: 'type Foo = never',
      errors: [{ messageId: 'never' }]
    }
  ],
})
