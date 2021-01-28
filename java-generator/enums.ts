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

import Domain from "elasticsearch-client-specification/src/domain";
import {$typeName, $propertyName} from "./naming";

const $enumFlag = (e: Domain.EnumMember, flag: boolean, n: number) => !flag ? `"${e.stringRepresentation}"` : `1 << ${n+1}`;
const $enumValue = (e: Domain.EnumMember, flag: boolean, n: number) => `${$propertyName(e.name)}(${$enumFlag(e, flag, n)})`;
const $enumValues = (e: Domain.Enum) => e.members.map((m,i)=> $enumValue(m, e.flags, i)).join(",\n    ");
const $enumParseCase = (e: Domain.EnumMember, parent: Domain.Enum) =>
  `case "${e.stringRepresentation}": return ${$typeName(parent.name)}.${$propertyName(e.name)}`;
const $enumParseCases = (e: Domain.Enum) => e.members.map((m,i)=> $enumParseCase(m, e)).join(";\n      ");
export const $createEnum = (e: Domain.Enum) => `
package org.elasticsearch.${e.namespace};

//
// Generated code - Do not edit (enum)
//

import org.elasticsearch.XContentable;
import org.elasticsearch.common.CheckedFunction;
import org.elasticsearch.common.xcontent.*;
import java.io.IOException;

public enum ${$typeName(e.name)} implements XContentable<${$typeName(e.name)}> {
  ${$enumValues(e)};
  private final String textRepresentation;

  private ${$typeName(e.name)}(final String text) { this.textRepresentation = text; }

  @Override
  public String toString() { return textRepresentation; }

  @Override
  public XContentBuilder toXContent(XContentBuilder builder, ToXContent.Params params) throws IOException {
    return builder.value(this.textRepresentation);
  }

  @Override
  public ${$typeName(e.name)} fromXContent(XContentParser parser) throws IOException, XContentParseException {
    return PARSER.apply(parser);
  }

  public static final CheckedFunction<XContentParser, ${$typeName(e.name)}, IOException> PARSER = (parser) -> {
    String text = parser.text();
    switch (text) {
      ${$enumParseCases(e)};
      default:
        String message = java.lang.String.format("'%s' not a valid value for enum '%s'", text, ${$typeName(e.name)}.class.getName());
        throw new XContentParseException(parser.getTokenLocation(), message);
    }
  };
}
`;
