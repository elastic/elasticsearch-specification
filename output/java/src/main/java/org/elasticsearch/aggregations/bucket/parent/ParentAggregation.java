
package org.elasticsearch.aggregations.bucket.parent;

import java.io.IOException;
import java.util.Date;
import java.util.List;
import java.util.HashMap;
import java.time.Instant;
import java.time.format.DateTimeFormatter;
import org.elasticsearch.Either;
import org.elasticsearch.XContentable;
import org.elasticsearch.NamedContainer;
import org.elasticsearch.common.ParseField;
import org.elasticsearch.common.xcontent.*;
import org.elasticsearch.common_abstractions.infer.relation_name.*;

public class ParentAggregation  implements XContentable<ParentAggregation> {
  
  static final ParseField TYPE = new ParseField("type");
  private RelationName _type;
  public RelationName getType() { return this._type; }
  public ParentAggregation setType(RelationName val) { this._type = val; return this; }


  
  @Override
  public XContentBuilder toXContent(XContentBuilder builder, ToXContent.Params params) throws IOException {
    builder.startObject();
    if (_type != null) {
      builder.field(TYPE.getPreferredName());
      _type.toXContent(builder, params);
    }
    builder.endObject();
    return builder;
  }

  @Override
  public ParentAggregation fromXContent(XContentParser parser) throws IOException, XContentParseException {
    return ParentAggregation.PARSER.apply(parser, null);
  }

  public static final ObjectParser<ParentAggregation, Void> PARSER =
    new ObjectParser<>(ParentAggregation.class.getName(), false, ParentAggregation::new);

  static {
    PARSER.declareObject(ParentAggregation::setType, (p, t) -> RelationName.createFrom(p), TYPE);
  }

}
