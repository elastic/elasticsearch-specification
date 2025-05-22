import { RuleTester } from '@typescript-eslint/rule-tester'
import rule from '../rules/single-key-dictionary-key-is-string.js'

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

ruleTester.run('single-key-dictionary-key-is-string', rule, {
  valid: [
    `type MyDict = SingleKeyDictionary<string, object>`,
    `type MyDict = SingleKeyDictionary<string, any>`,
    `type MyDict = SingleKeyDictionary<string, number>`,
    `enum MyEnum { foo, bar, baz }
     type MyDict = SingleKeyDictionary<MyEnum, object>`,
  ],
  invalid: [
    {
      code:
        `type MyKey = string | boolean
         type MyDict = SingleKeyDictionary<MyKey, any>`,
      errors: [{ messageId: 'stringKey' }]
    },
    {
      code: `type MyDict = SingleKeyDictionary<string | number, any>`,
      errors: [{ messageId: 'stringKey' }]
    },
    {
      code: `type MyDict = SingleKeyDictionary<boolean, any>`,
      errors: [{ messageId: 'stringKey' }]
    },
    {
      code: `type MyDict = SingleKeyDictionary<object, any>`,
      errors: [{ messageId: 'stringKey' }]
    }
  ],
})
