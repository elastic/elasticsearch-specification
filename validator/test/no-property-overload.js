/*
 * Licensed to Elasticsearch B.V. under one or more contributor
 * license agreements. See the NOTICE file distributed with
 * this work for additional information regarding copyright
 * ownership. Elasticsearch B.V. licenses this file to you under
 * the Apache License, Version 2.0 (the "License"); you may
 * not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *    http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing,
 * software distributed under the License is distributed on an
 * "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
 * KIND, either express or implied.  See the License for the
 * specific language governing permissions and limitations
 * under the License.
 */
import { RuleTester } from '@typescript-eslint/rule-tester'
import noPropertyOverload from '../rules/no-property-overload.js'

const ruleTester = new RuleTester({
  languageOptions: {
    parserOptions: {
      projectService: {
        allowDefaultProject: ['*.ts*']
      },
      tsconfigRootDir: import.meta.dirname
    }
  }
})

const rule = noPropertyOverload

ruleTester.run('no-property-overload', rule, {
  valid: [
    {
      name: 'interface without extension',
      code: `interface MyInterface { 
        prop1: string
      }`
    },
    {
      name: 'interface extending interface with different properties',
      code: `interface Base { 
        prop1: string
      }
      interface Child extends Base { 
        prop2: number
      }`
    },
    {
      name: 'interface extending class with different properties',
      code: `class Base { 
        prop1: string
      }
      interface Child extends Base { 
        prop2: number
      }`
    },
    {
      name: 'interface extending class that implements interface with different properties',
      code: `interface CommonProps { 
        prop1: string
      }
      class Base implements CommonProps { }
      interface Child extends Base { 
        prop2: number
      }`
    },
    {
      name: 'class extends class with different properties',
      code: `class Base { 
        prop1: string
      }
      class Child extends Base { 
        prop2: number
      }`
    },
    {
      name: 'interface extends class that extends another class with different properties',
      code: `class GrandParent { 
        prop1: string
      }
      class Parent extends GrandParent { 
        prop2: number
      }
      interface Child extends Parent { 
        prop3: boolean
      }`
    },
    {
      name: 'interface extends class that extends class implementing interface with different properties',
      code: `interface CommonProps { 
        prop1: string
      }
      class GrandParent implements CommonProps { }
      class Parent extends GrandParent { 
        prop2: number
      }
      interface Child extends Parent { 
        prop3: boolean
      }`
    },
    {
      name: 'deep inheritance chain with all different properties',
      code: `interface IBase { 
        prop1: string
      }
      class ClassA implements IBase { }
      class ClassB extends ClassA { 
        prop2: number
      }
      interface IChild extends ClassB { 
        prop3: boolean
      }`
    },
    {
      name: 'class implements multiple interfaces with different properties',
      code: `interface Props1 { 
        prop1: string
      }
      interface Props2 { 
        prop2: number
      }
      class Base implements Props1, Props2 { }
      interface Child extends Base { 
        prop3: boolean
      }`
    }
  ],
  invalid: [
    {
      name: 'interface extends interface with same property',
      code: `interface Base { 
        prop1: string
      }
      interface Child extends Base { 
        prop1: number
      }`,
      errors: [{ messageId: 'propertyOverload' }]
    },
    {
      name: 'interface extends class with same property',
      code: `class Base { 
        prop1: string
      }
      interface Child extends Base { 
        prop1: number
      }`,
      errors: [{ messageId: 'propertyOverload' }]
    },
    {
      name: 'interface extends class that implements interface with overloaded property',
      code: `interface CommonProps { 
        human?: boolean
        other?: string
      }
      class RequestBase implements CommonProps {
        human?: boolean;
        other?: string;
      }
      interface Request extends RequestBase { 
        human?: boolean
      }`,
      errors: [{ messageId: 'propertyOverload' }]
    },
    {
      name: 'interface extends empty class that implements interface with overloaded property',
      code: `interface CommonQueryParameters { 
        error_trace?: boolean
        filter_path?: string | string[]
        human?: boolean
        pretty?: boolean
      }
      class RequestBase implements CommonQueryParameters { }
      interface Request extends RequestBase { 
        human?: boolean
      }`,
      errors: [{ messageId: 'propertyOverload' }]
    },
    {
      name: 'interface extends class that implements multiple interfaces with overloaded properties',
      code: `interface Props1 { 
        prop1: string
      }
      interface Props2 { 
        prop2: number
      }
      class Base implements Props1, Props2 { }
      interface Child extends Base { 
        prop1: boolean
        prop2: string
      }`,
      errors: [
        { messageId: 'propertyOverload' },
        { messageId: 'propertyOverload' }
      ]
    },
    {
      name: 'interface extends multiple bases with overloaded property',
      code: `interface Base1 { 
        prop1: string
      }
      interface Base2 { 
        prop2: number
      }
      interface Child extends Base1, Base2 { 
        prop1: boolean
      }`,
      errors: [{ messageId: 'propertyOverload' }]
    },
    {
      name: 'interface extends class that extends another class with overloaded property from grandparent',
      code: `class GrandParent { 
        prop1: string
      }
      class Parent extends GrandParent { 
        prop2: number
      }
      interface Child extends Parent { 
        prop1: boolean
      }`,
      errors: [{ messageId: 'propertyOverload' }]
    },
    {
      name: 'interface extends class that extends another class with overloaded property from parent',
      code: `class GrandParent { 
        prop1: string
      }
      class Parent extends GrandParent { 
        prop2: number
      }
      interface Child extends Parent { 
        prop2: boolean
      }`,
      errors: [{ messageId: 'propertyOverload' }]
    },
    {
      name: 'interface extends class that extends class implementing interface with overloaded property from interface',
      code: `interface CommonProps { 
        prop1: string
        prop2: number
      }
      class GrandParent implements CommonProps { }
      class Parent extends GrandParent { 
        prop3: boolean
      }
      interface Child extends Parent { 
        prop1: string
      }`,
      errors: [{ messageId: 'propertyOverload' }]
    },
    {
      name: 'interface extends class that extends class implementing interface with multiple overloaded properties',
      code: `interface CommonProps { 
        prop1: string
        prop2: number
      }
      class GrandParent implements CommonProps { }
      class Parent extends GrandParent { 
        prop3: boolean
      }
      interface Child extends Parent { 
        prop1: string
        prop2: number
        prop3: boolean
      }`,
      errors: [
        { messageId: 'propertyOverload' },
        { messageId: 'propertyOverload' },
        { messageId: 'propertyOverload' }
      ]
    },
    {
      name: 'deep inheritance chain with overload at root interface level',
      code: `interface IBase { 
        prop1: string
      }
      class ClassA implements IBase { }
      class ClassB extends ClassA { 
        prop2: number
      }
      interface IChild extends ClassB { 
        prop1: boolean
      }`,
      errors: [{ messageId: 'propertyOverload' }]
    },
    {
      name: 'interface extends class implementing multiple interfaces with overload from first interface',
      code: `interface Props1 { 
        prop1: string
      }
      interface Props2 { 
        prop2: number
      }
      class Base implements Props1, Props2 { }
      interface Child extends Base { 
        prop1: boolean
      }`,
      errors: [{ messageId: 'propertyOverload' }]
    },
    {
      name: 'interface extends class implementing multiple interfaces with overload from second interface',
      code: `interface Props1 { 
        prop1: string
      }
      interface Props2 { 
        prop2: number
      }
      class Base implements Props1, Props2 { }
      interface Child extends Base { 
        prop2: boolean
      }`,
      errors: [{ messageId: 'propertyOverload' }]
    },
    {
      name: 'interface extends class implementing multiple interfaces with overloads from both',
      code: `interface Props1 { 
        prop1: string
      }
      interface Props2 { 
        prop2: number
      }
      class Base implements Props1, Props2 { }
      interface Child extends Base { 
        prop1: boolean
        prop2: string
      }`,
      errors: [
        { messageId: 'propertyOverload' },
        { messageId: 'propertyOverload' }
      ]
    },
    {
      name: 'real-world scenario: Request extends RequestBase with CommonQueryParameters overload',
      code: `interface CommonQueryParameters { 
        error_trace?: boolean
        filter_path?: string | string[]
        human?: boolean
        pretty?: boolean
      }
      class RequestBase implements CommonQueryParameters { }
      interface Request extends RequestBase { 
        urls: string[]
        human?: boolean
      }`,
      errors: [{ messageId: 'propertyOverload' }]
    },
    {
      name: 'complex chain with interface at root implementing and extending',
      code: `interface IBase1 { 
        prop1: string
      }
      interface IBase2 { 
        prop2: number
      }
      class ClassA implements IBase1, IBase2 { }
      class ClassB extends ClassA { 
        prop3: boolean
      }
      class ClassC extends ClassB { }
      interface IChild extends ClassC { 
        prop2: string
      }`,
      errors: [{ messageId: 'propertyOverload' }]
    },
    {
      name: 'class extends class with same property',
      code: `class Base { 
        prop1: string
      }
      class Child extends Base { 
        prop1: number
      }`,
      errors: [{ messageId: 'propertyOverload' }]
    },
    {
      name: 'class extends class with multiple overloaded properties',
      code: `class Base { 
        prop1: string
        prop2: number
      }
      class Child extends Base { 
        prop1: boolean
        prop2: string
      }`,
      errors: [
        { messageId: 'propertyOverload' },
        { messageId: 'propertyOverload' }
      ]
    },
    {
      name: 'class extends class that implements interface with overloaded property from interface',
      code: `interface CommonProps { 
        prop1: string
      }
      class Base implements CommonProps { }
      class Child extends Base { 
        prop1: boolean
      }`,
      errors: [{ messageId: 'propertyOverload' }]
    },
    {
      name: 'class extends class that extends class with overloaded property from grandparent',
      code: `class GrandParent { 
        prop1: string
      }
      class Parent extends GrandParent { 
        prop2: number
      }
      class Child extends Parent { 
        prop1: boolean
      }`,
      errors: [{ messageId: 'propertyOverload' }]
    },
    {
      name: 'class extends class implementing multiple interfaces with overload',
      code: `interface Props1 { 
        prop1: string
      }
      interface Props2 { 
        prop2: number
      }
      class Base implements Props1, Props2 { }
      class Child extends Base { 
        prop1: boolean
      }`,
      errors: [{ messageId: 'propertyOverload' }]
    },
    {
      name: 'deep class hierarchy with overload at root interface level',
      code: `interface IBase { 
        prop1: string
      }
      class ClassA implements IBase { }
      class ClassB extends ClassA { 
        prop2: number
      }
      class ClassC extends ClassB { 
        prop1: boolean
      }`,
      errors: [{ messageId: 'propertyOverload' }]
    },
    {
      name: 'class chain extending and implementing with multiple overloads',
      code: `interface CommonProps { 
        prop1: string
        prop2: number
      }
      class GrandParent implements CommonProps { }
      class Parent extends GrandParent { 
        prop3: boolean
      }
      class Child extends Parent { 
        prop1: string
        prop3: boolean
      }`,
      errors: [
        { messageId: 'propertyOverload' },
        { messageId: 'propertyOverload' }
      ]
    },
    {
      name: 'real-world scenario: class Request extends RequestBase with CommonQueryParameters overload',
      code: `interface CommonQueryParameters { 
        error_trace?: boolean
        filter_path?: string | string[]
        human?: boolean
        pretty?: boolean
      }
      class RequestBase implements CommonQueryParameters { }
      class Request extends RequestBase { 
        human?: boolean
      }`,
      errors: [{ messageId: 'propertyOverload' }]
    }
  ]
})
