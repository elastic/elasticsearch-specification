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
import jsdocEndpointCheck from '../rules/jsdoc-endpoint-check.js'

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

const rule = jsdocEndpointCheck

ruleTester.run('jsdoc-endpoint-check', rule, {
    valid: [
        {
            name: 'valid',
            code: `/**
 * Get aliases.
 *
 * Get the cluster's index aliases, including filter and routing information.
 * This API does not return data stream aliases.
 * IMPORTANT: CAT APIs are only intended for human consumption using the command line or the Kibana console. They are not intended for use by applications. For application consumption, use the aliases API.
 * @rest_spec_name cat.aliases
 * @availability stack stability=stable
 * @availability serverless stability=stable visibility=public
 * @doc_id cat-alias
 * @index_privileges view_index_metadata
 */
export interface Request {
    urls: [
        {
            path: '/_cat/aliases'
            methods: ['GET']
        }
    ]
}`
        },
        {
            name: 'description contains escaped newlines',
            code: `/**
 * Get aliases.
 *
 * Get the cluster's index aliases, including filter and routing information.
 * This API does not return data stream aliases.\\n
 * IMPORTANT: CAT APIs are only intended for human consumption using the command line or the Kibana console. They are not intended for use by applications. For application consumption, use the aliases API.
 * @rest_spec_name cat.aliases
 * @availability stack stability=stable
 * @availability serverless stability=stable visibility=public
 * @doc_id cat-alias
 * @index_privileges view_index_metadata
 */
export interface Request {
    urls: [
        {
            path: '/_cat/aliases'
            methods: ['GET']
        }
    ]
}
`
        },
        {
            name: 'summary has `_`',
            code: `/**
 * Update the connector is_native flag.
 *
 * @rest_spec_name connector.update_native
 * @availability stack since=8.12.0 stability=beta
 * @availability serverless stability=beta visibility=public
 * @doc_id connector-update-native
 */
export interface Request {}`
        },
        {
            name: 'last line can be empty',
            code: `/**
 * Get aliases.
 *
 * Get the cluster's index aliases, including filter and routing information.
 * @rest_spec_name cat.aliases
 * @doc_id cat-alias
 * 
 */
export interface Request {
    urls: [
        {
            path: '/_cat/aliases'
            methods: ['GET']
        }
    ]
}
`
        },
    ],
    invalid: [
        {
            name: 'no first line empty',
            code: `/** Get aliases.
 *
 * Get the cluster's index aliases, including filter and routing information.
 * This API does not return data stream aliases.
 * IMPORTANT: CAT APIs are only intended for human consumption using the command line or the Kibana console. They are not intended for use by applications. For application consumption, use the aliases API.
 * @rest_spec_name cat.aliases
 * @availability stack stability=stable
 * @availability serverless stability=stable visibility=public
 * @doc_id cat-alias
 * @index_privileges view_index_metadata
 */
export interface Request {
    urls: [
        {
            path: '/_cat/aliases'
            methods: ['GET']
        }
    ]
}
`,
            output: `/**
 * Get aliases.
 *
 * Get the cluster's index aliases, including filter and routing information.
 * This API does not return data stream aliases.
 * IMPORTANT: CAT APIs are only intended for human consumption using the command line or the Kibana console. They are not intended for use by applications. For application consumption, use the aliases API.
 * @rest_spec_name cat.aliases
 * @availability stack stability=stable
 * @availability serverless stability=stable visibility=public
 * @doc_id cat-alias
 * @index_privileges view_index_metadata
 */
export interface Request {
    urls: [
        {
            path: '/_cat/aliases'
            methods: ['GET']
        }
    ]
}
`,
            errors: [
                { messageId: 'firstLineShouldBeEmpty' }
            ]
        },
        {
            name: 'missing empty line after summary',
            code: `/**
 * Get aliases.
 * Get the cluster's index aliases, including filter and routing information.
 * This API does not return data stream aliases.
 * IMPORTANT: CAT APIs are only intended for human consumption using the command line or the Kibana console. They are not intended for use by applications. For application consumption, use the aliases API.
 * @rest_spec_name cat.aliases
 * @availability stack stability=stable
 * @availability serverless stability=stable visibility=public
 * @doc_id cat-alias
 * @index_privileges view_index_metadata
 */
export interface Request {
    urls: [
        {
            path: '/_cat/aliases'
            methods: ['GET']
        }
    ]
}
`,
            output: `/**
 * Get aliases.
 *
 * Get the cluster's index aliases, including filter and routing information.
 * This API does not return data stream aliases.
 * IMPORTANT: CAT APIs are only intended for human consumption using the command line or the Kibana console. They are not intended for use by applications. For application consumption, use the aliases API.
 * @rest_spec_name cat.aliases
 * @availability stack stability=stable
 * @availability serverless stability=stable visibility=public
 * @doc_id cat-alias
 * @index_privileges view_index_metadata
 */
export interface Request {
    urls: [
        {
            path: '/_cat/aliases'
            methods: ['GET']
        }
    ]
}
`,
            errors: [{ messageId: 'lineAfterSummaryShouldBeEmpty' }]
        },
        {
            name: 'summary missing period',
            code: `/**
 * Get aliases
 *
 * Get the cluster's index aliases, including filter and routing information.
 * @rest_spec_name cat.aliases
 * @doc_id cat-alias
 */
export interface Request {
    urls: [
        {
            path: '/_cat/aliases'
            methods: ['GET']
        }
    ]
}
`,
            output: `/**
 * Get aliases.
 *
 * Get the cluster's index aliases, including filter and routing information.
 * @rest_spec_name cat.aliases
 * @doc_id cat-alias
 */
export interface Request {
    urls: [
        {
            path: '/_cat/aliases'
            methods: ['GET']
        }
    ]
}
`,
            errors: [{ messageId: 'summaryMissingPeriod' }]
        },
        {
            name: 'summary has markup',
            code: `/**
 * Get \`aliases\`.
 *
 * Get the cluster's index aliases, including filter and routing information.
 * @rest_spec_name cat.aliases
 * @doc_id cat-alias
 */
export interface Request {
    urls: [
        {
            path: '/_cat/aliases'
            methods: ['GET']
        }
    ]
}
`,
            errors: [{ messageId: 'summaryHasMarkup' }]
        },
        {
            name: 'missing JSDoc',
            code: `export interface Request {
    urls: [
        {
            path: '/_cat/aliases'
            methods: ['GET']
        }
    ]
}
`,
            errors: [{ messageId: 'endpointJSDocMissing' }]
        },
        {
            name: 'missing summary',
            code: `/**
 * Get the cluster's index aliases, including filter and routing information.
 * @rest_spec_name cat.aliases
 * @doc_id cat-alias
 */
export interface Request {
    urls: [
        {
            path: '/_cat/aliases'
            methods: ['GET']
        }
    ]
}
`,
        output: `/**
 * Get the cluster's index aliases, including filter and routing information.
 *
 * @rest_spec_name cat.aliases
 * @doc_id cat-alias
 */
export interface Request {
    urls: [
        {
            path: '/_cat/aliases'
            methods: ['GET']
        }
    ]
}
`,
            errors: [{ messageId: 'lineAfterSummaryShouldBeEmpty' }]
        },
        {
            name: 'invalid markdown - multiple blank lines',
            code: `/**
 * Get aliases.
 *
 * This description has multiple blank lines.
 * 
 * 
 * Another paragraph here.
 * 
 * @rest_spec_name cat.aliases
 * @doc_id cat-alias
 */
export interface Request {}
`,
            errors: [{ messageId: 'markdownLintError' }]
        },
        {
            name: 'invalid markdown - unordered list style',
            code: `/**
 * Get aliases.
 *
 * This API provides:
 * * First item
 * * Second item
 * 
 * @rest_spec_name cat.aliases
 * @doc_id cat-alias
 */
export interface Request {}
`,
            errors: [{ messageId: 'markdownLintError' }]
        },
        {
            name: 'invalid markdown - emphasis markers',
            code: `/**
 * Get aliases.
 *
 * This uses **bad emphasis** and **another one **.
 * 
 * @rest_spec_name cat.aliases
 * @doc_id cat-alias
 */
export interface Request {}
`,
            errors: [{ messageId: 'markdownLintError' }]
        },
    ],
})

// Additional tests for custom configuration
ruleTester.run('jsdoc-endpoint-check with custom config', rule, {
    valid: [
        {
            name: 'custom config - disable MD012 (multiple blank lines)',
            code: `/**
 * Get aliases.
 *
 * This description has multiple blank lines.
 * 
 * 
 * Another paragraph here.
 * 
 * @rest_spec_name cat.aliases
 * @doc_id cat-alias
 */
export interface Request {}
`,
            options: [
                {
                    markdownlint: {
                        default: true,
                        'MD041': false,
                        'MD013': false,
                        'MD033': false,
                        'MD034': false,
                        'MD047': false,
                        'MD012': false // Disable multiple blank lines check
                    }
                }
            ]
        },
        {
            name: 'custom config - disable all markdown linting',
            code: `/**
 * Get aliases.
 *
 * This has **bad emphasis ** and multiple blanks.
 * 
 * 
 * Still valid because markdown linting is disabled.
 * 
 * @rest_spec_name cat.aliases
 * @doc_id cat-alias
 */
export interface Request {}
`,
            options: [
                {
                    markdownlint: {
                        default: false // Disable all markdownlint rules
                    }
                }
            ]
        },
    ],
    invalid: [
        {
            name: 'custom config - default config still catches errors',
            code: `/**
 * Get aliases.
 *
 * This description has multiple blank lines.
 * 
 * 
 * Another paragraph here.
 * 
 * @rest_spec_name cat.aliases
 * @doc_id cat-alias
 */
export interface Request {}
`,
            // Using default configuration which should catch MD012
            errors: [{ messageId: 'markdownLintError' }]
        },
    ],
})