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
import {$typeName} from "./naming";

export const $createValueObject = (type: Domain.Interface, valueType: string) => `
package org.elasticsearch.${type.namespace};

//
// Generated code - Do not edit (value)
//

import java.io.IOException;
import java.util.Objects;
import org.elasticsearch.XContentable;
import org.elasticsearch.common.xcontent.*;

public final class ${$typeName(type.name)} implements XContentable<${$typeName(type.name)}> {
  private final ${valueType} value;

  public ${$typeName(type.name)}(String value) { this.value = value; }

  @Override
  public String toString() { return value.toString(); }

  @Override
  public boolean equals(Object o) {
      if (o == null || getClass() != o.getClass()) return false;
      ${$typeName(type.name)} that = (${$typeName(type.name)}) o;
      return Objects.equals(value, that.value);
  }

  @Override
  public int hashCode() { return Objects.hash(value); }

  @Override
  public XContentBuilder toXContent(XContentBuilder builder, ToXContent.Params params) throws IOException {
    builder.value(this.value);
    return null;
  }

  public static ${$typeName(type.name)} createFrom(XContentParser parser) throws IOException, XContentParseException { return new ${$typeName(type.name)}(parser.text()); }

  @Override
  public ${$typeName(type.name)} fromXContent(XContentParser parser) throws IOException, XContentParseException { return ${$typeName(type.name)}.createFrom(parser); }

}
`;
