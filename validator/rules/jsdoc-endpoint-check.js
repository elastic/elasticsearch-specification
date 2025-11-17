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
import { ESLintUtils } from '@typescript-eslint/utils'
import { lint as markdownlintSync } from 'markdownlint/sync'

const isLineEmpty = line => !line || line.trim() === ''

const parseJSDoc = (jsdoc) => {
  const lines = jsdoc.value
    .split('\n')
    .map(line => line.trim().replace(/^\*\s?/, ''))
  
  return {
    lines,
    summaryIndex: lines.findIndex(line => !isLineEmpty(line)),
    lastNonEmptyIndex: lines.findLastIndex(line => !isLineEmpty(line))
  }
}

const reconstructJSDoc = (lines) => {
  let trimmedLines = [...lines]
  
  while (trimmedLines.length > 0 && isLineEmpty(trimmedLines[trimmedLines.length - 1])) {
    trimmedLines.pop()
  }
  
  if (trimmedLines.length > 0 && isLineEmpty(trimmedLines[0])) {
    trimmedLines = trimmedLines.slice(1)
  }
  
  const lineContent = trimmedLines.map(line => line ? ` * ${line}` : ' *').join('\n')
  return `/**\n${lineContent}\n */`
}

const fixers = {
  firstLineShouldBeEmpty: (lines) => {
    if (!isLineEmpty(lines[0])) {
      return ['', lines[0], ...lines.slice(1)]
    }
    return lines
  },
  
  summaryMissingPeriod: (lines, { summaryIndex }) => {
    if (summaryIndex !== -1) {
      const fixed = [...lines]
      fixed[summaryIndex] = lines[summaryIndex].trimEnd() + '.'
      return fixed
    }
    return lines
  },
  
  lineAfterSummaryShouldBeEmpty: (lines, { summaryIndex }) => {
    if (summaryIndex !== -1) {
      const fixed = [...lines]
      fixed.splice(summaryIndex + 1, 0, '')
      return fixed
    }
    return lines
  }
}

const createJSDocFixer = (jsdoc, messageId) => {
  const parsed = parseJSDoc(jsdoc)
  const fixer = fixers[messageId]
  
  if (!fixer) return null
  
  const fixedLines = fixer(parsed.lines, parsed)
  return (fix) => fix.replaceTextRange([jsdoc.range[0], jsdoc.range[1]], reconstructJSDoc(fixedLines))
}

const validateMarkdown = (lines, summaryIndex, startLine, column, markdownlintConfig) => {
  const errors = []
  
  // Extract description content
  const descriptionStartIndex = summaryIndex + 2
  if (descriptionStartIndex >= lines.length) {
    return errors
  }
  
  const descriptionLines = lines.slice(descriptionStartIndex)
  const description = descriptionLines.join('\n').trim()
  
  if (!description) {
    return errors
  }
  
  const result = markdownlintSync({
    strings: {
      'description': description
    },
    config: markdownlintConfig
  })
  
  // Convert markdownlint errors to ESLint errors
  const markdownErrors = result.description || []
  markdownErrors.forEach(error => {
    const lineOffset = descriptionStartIndex + error.lineNumber - 1
    errors.push({
      messageId: 'markdownLintError',
      line: startLine + lineOffset,
      column,
      canFix: false,
      data: {
        rule: error.ruleNames.join('/'),
        detail: error.ruleDescription + (error.errorDetail ? `: ${error.errorDetail}` : '')
      }
    })
  })
  
  return errors
}

const validateJSDoc = (jsdoc, markdownlintConfig) => {
  const { lines, summaryIndex, lastNonEmptyIndex } = parseJSDoc(jsdoc)
  const { line: startLine, column } = jsdoc.loc.start
  
  const createError = (messageId, lineOffset, data, canFix = false) => ({
    messageId,
    line: startLine + lineOffset,
    column,
    canFix,
    ...(data && { data })
  })
  
  const errors = []
  
  if (!isLineEmpty(lines[0])) {
    errors.push(createError('firstLineShouldBeEmpty', 0, null, true))
  }
  
  if (summaryIndex === -1 || (isLineEmpty(lines[0]) && summaryIndex !== 1)) {
    errors.push(createError('missingSummary', 1))
    return errors
  }
  
  const summary = lines[summaryIndex]
  
  if (/[*`\[\]#]/.test(summary)) {
    errors.push(createError('summaryHasMarkup', summaryIndex))
  }
  
  if (!summary.trim().endsWith('.')) {
    errors.push(createError('summaryMissingPeriod', summaryIndex, null, true))
  }
  
  const lineAfterSummary = summaryIndex + 1
  if (lineAfterSummary < lines.length && !isLineEmpty(lines[lineAfterSummary])) {
    errors.push(createError('lineAfterSummaryShouldBeEmpty', lineAfterSummary, null, true))
  }
  
  // Validate markdown in description
  errors.push(...validateMarkdown(lines, summaryIndex, startLine, column, markdownlintConfig))
  
  return errors
}

export const jsdocEndpointCheck = ESLintUtils.RuleCreator.withoutDocs(
{
    name: 'jsdoc-endpoint-check',
    meta: {
        type: 'layout',
        docs: {
            description: 'Checks that the JSDoc for an endpoint has the correct format',
            recommended: 'error'
        },
        fixable: 'code',
        hasSuggestions: true,
        messages: {
            firstLineShouldBeEmpty: 'JSDoc first line should be empty',
            summaryHasMarkup: 'JSDoc summary should not contain markup',
            summaryMissingPeriod: 'JSDoc summary should end with a period',
            lineAfterSummaryShouldBeEmpty: 'Line after summary should be empty',
            endpointJSDocMissing: 'The JSDoc for an endpoint is missing.',
            markdownLintError: 'Markdown error ({{rule}}): {{detail}}'
        },
        schema: [
            {
                type: 'object',
                properties: {
                    markdownlint: {
                        type: 'object',
                        description: 'Configuration object for markdownlint rules',
                        additionalProperties: true
                    }
                },
                additionalProperties: false
            }
        ]
    },
    defaultOptions: [
        {
            markdownlint: {
                default: true,
                // Disable rules that don't make sense for JSDoc descriptions
                'MD041': false,
                'MD013': false,
                'MD033': false,
                'MD034': false,
                'MD047': false,
                'MD036': false,
                'MD040': false
            }
        }
    ],
    create(context) {
        const sourceCode = context.sourceCode || context.getSourceCode()
        const options = context.options[0] || {}
        const markdownlintConfig = options.markdownlint || context.options[0]?.markdownlint || {
            default: true,
            'MD041': false,
            'MD013': false,
            'MD033': false,
            'MD034': false,
            'MD047': false,
            'MD036': false,
            'MD040': false
        }
        
        return {
            'TSInterfaceDeclaration, ClassDeclaration'(node) {
                if (node.id.name !== 'Request') return
                
                const nodeToGetCommentsFrom = 
                    node.parent?.type === 'ExportNamedDeclaration' ? node.parent : node

                const comments = sourceCode.getCommentsBefore(nodeToGetCommentsFrom)
                const jsdoc = comments
                    ?.filter(comment => comment.type === 'Block' && comment.value.startsWith('*'))
                    .pop()
                
                if (!jsdoc) {
                    context.report({ node, messageId: 'endpointJSDocMissing' })
                    return
                }

                const validationErrors = validateJSDoc(jsdoc, markdownlintConfig)
                validationErrors.forEach(({ messageId, data, line, column, canFix }) => {
                    context.report({ 
                        node, 
                        messageId,
                        ...(data && { data }),
                        loc: { start: { line, column } },
                        ...(canFix && { fix: createJSDocFixer(jsdoc, messageId) }),
                        ...(canFix && { suggestions: [createJSDocFixer(jsdoc, messageId)] })
                    })
                })
            }
        }
    }
})

export default jsdocEndpointCheck