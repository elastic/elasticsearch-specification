
package org.elasticsearch.mapping.meta_fields.routing;

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


public class RoutingField  implements XContentable<RoutingField> {
  
  static final ParseField REQUIRED = new ParseField("required");
  private Boolean _required;
  public Boolean getRequired() { return this._required; }
  public RoutingField setRequired(Boolean val) { this._required = val; return this; }


  
  @Override
  public XContentBuilder toXContent(XContentBuilder builder, ToXContent.Params params) throws IOException {
    builder.startObject();
    if (_required != null) {
      builder.field(REQUIRED.getPreferredName(), _required);
    }
    builder.endObject();
    return builder;
  }

  @Override
  public RoutingField fromXContent(XContentParser parser) throws IOException, XContentParseException {
    return RoutingField.PARSER.apply(parser, null);
  }

  public static final ObjectParser<RoutingField, Void> PARSER =
    new ObjectParser<>(RoutingField.class.getName(), false, RoutingField::new);

  static {
    PARSER.declareBoolean(RoutingField::setRequired, REQUIRED);
  }

}
