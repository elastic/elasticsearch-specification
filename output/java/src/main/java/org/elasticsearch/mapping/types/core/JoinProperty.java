
package org.elasticsearch.mapping.types.core;

import java.io.IOException;
import java.util.Date;
import java.util.List;
import java.util.HashMap;
import java.time.Instant;
import java.time.format.DateTimeFormatter;
import org.elasticsearch.*;
import org.elasticsearch.common.ParseField;
import org.elasticsearch.common.xcontent.*;
import org.elasticsearch.internal.*;
import org.elasticsearch.mapping.types.*;

public class JoinProperty extends PropertyBase implements XContentable<JoinProperty> {
  
  static final ParseField RELATIONS = new ParseField("relations");
  private NamedContainer<String, List<String>> _relations;
  public NamedContainer<String, List<String>> getRelations() { return this._relations; }
  public JoinProperty setRelations(NamedContainer<String, List<String>> val) { this._relations = val; return this; }


  
  @Override
  public void toXContentInternal(XContentBuilder builder, ToXContent.Params params) throws IOException {
    super.toXContentInternal(builder, params);
    if (_relations != null) {
      builder.field(RELATIONS.getPreferredName());
      _relations.toXContent(builder, params);
    }
  }

  @Override
  public JoinProperty fromXContent(XContentParser parser) throws IOException, XContentParseException {
    return JoinProperty.PARSER.apply(parser, null);
  }

  public static final ObjectParser<JoinProperty, Void> PARSER =
    new ObjectParser<>(JoinProperty.class.getName(), false, JoinProperty::new);

  static {
    PARSER.declareObject(JoinProperty::setRelations, (p, t) -> new NamedContainer<>(n -> () -> n,null /* TODO List<String> */), RELATIONS);
  }

}
