
package org.elasticsearch.mapping.types.core;

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

public class JoinProperty  implements XContentable<JoinProperty> {
  
  static final ParseField RELATIONS = new ParseField("relations");
  private NamedContainer<RelationName, List<RelationName>> _relations;
  public NamedContainer<RelationName, List<RelationName>> getRelations() { return this._relations; }
  public JoinProperty setRelations(NamedContainer<RelationName, List<RelationName>> val) { this._relations = val; return this; }


  
  @Override
  public XContentBuilder toXContent(XContentBuilder builder, ToXContent.Params params) throws IOException {
    builder.startObject();
    if (_relations != null) {
      builder.field(RELATIONS.getPreferredName());
      _relations.toXContent(builder, params);
    }
    builder.endObject();
    return builder;
  }

  @Override
  public JoinProperty fromXContent(XContentParser parser) throws IOException, XContentParseException {
    return JoinProperty.PARSER.apply(parser, null);
  }

  public static final ObjectParser<JoinProperty, Void> PARSER =
    new ObjectParser<>(JoinProperty.class.getName(), false, JoinProperty::new);

  static {
    PARSER.declareObject(JoinProperty::setRelations, (p, t) -> new NamedContainer<>(n -> () -> new RelationName(n),null /* TODO List<RelationName> */), RELATIONS);
  }

}
