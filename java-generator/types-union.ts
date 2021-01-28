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
import {$instanceOf, $typeName} from "./naming";
import {$imports} from "./imports";

export const $createUnionType = (type: Domain.Interface) => {
  return `package org.elasticsearch.${type.namespace};

//
// Generated code - Do not edit (union)
//

import org.elasticsearch.Either;
import org.elasticsearch.XContentable;
import org.elasticsearch.common.xcontent.*;
${[...$imports(type)].join("\n")}
import java.io.IOException;
import java.util.List;

public class ${$typeName(type.name)} extends Either<${type.inherits[0].closedGenerics.map(t => $instanceOf(t, true)).join(", ")}> implements XContentable<${$typeName(type.name)}> {

  @Override
  public XContentBuilder toXContent(XContentBuilder builder, ToXContent.Params params) throws IOException {
    return null;
  }

  @Override
  public ${$typeName(type.name)} fromXContent(XContentParser parser) throws IOException, XContentParseException {
    return null;
  }
}
`;
}
