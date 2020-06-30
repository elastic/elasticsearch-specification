import Domain from "elasticsearch-client-specification/src/domain";
import {$instanceOf, $typeName} from "./naming";
import {$imports} from "./imports";

export const $createUnionType = (type: Domain.Interface) => `package org.elasticsearch.${type.namespace};

import org.elasticsearch.Either;
import org.elasticsearch.XContentable;
import org.elasticsearch.common.xcontent.*;
${[...$imports(type)].join("\n")}
import java.io.IOException;
import java.util.List;

public class ${$typeName(type.name)} extends Either<${type.inherits[0].closedGenerics.map($instanceOf).join(", ")}> implements XContentable<${$typeName(type.name)}> {

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
