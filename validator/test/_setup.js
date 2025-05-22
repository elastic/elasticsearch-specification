import * as test from 'node:test'
import { RuleTester } from '@typescript-eslint/rule-tester'

RuleTester.afterAll = test.after
RuleTester.describe = test.describe
RuleTester.it = test.it
RuleTester.itOnly = test.it.only
