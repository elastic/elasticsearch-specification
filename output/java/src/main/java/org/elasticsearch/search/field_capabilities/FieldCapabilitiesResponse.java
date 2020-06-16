
package org.elasticsearch.search.field_capabilities;

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
import org.elasticsearch.common_abstractions.infer.field.*;
import org.elasticsearch.search.field_capabilities.*;

public class FieldCapabilitiesResponse  implements XContentable<FieldCapabilitiesResponse> {
  
  static final ParseField FIELDS = new ParseField("fields");
  private NamedContainer<Field, NamedContainer<String, FieldCapabilities>> _fields;
  public NamedContainer<Field, NamedContainer<String, FieldCapabilities>> getFields() { return this._fields; }
  public FieldCapabilitiesResponse setFields(NamedContainer<Field, NamedContainer<String, FieldCapabilities>> val) { this._fields = val; return this; }


  
  @Override
  public XContentBuilder toXContent(XContentBuilder builder, ToXContent.Params params) throws IOException {
    builder.startObject();
    if (_fields != null) {
      builder.field(FIELDS.getPreferredName());
      _fields.toXContent(builder, params);
    }
    builder.endObject();
    return builder;
  }

  @Override
  public FieldCapabilitiesResponse fromXContent(XContentParser parser) throws IOException, XContentParseException {
    return FieldCapabilitiesResponse.PARSER.apply(parser, null);
  }

  public static final ObjectParser<FieldCapabilitiesResponse, Void> PARSER =
    new ObjectParser<>(FieldCapabilitiesResponse.class.getName(), false, FieldCapabilitiesResponse::new);

  static {
    PARSER.declareObject(FieldCapabilitiesResponse::setFields, (p, t) -> new NamedContainer<>(n -> () -> new Field(n),null /* TODO NamedContainer<String, FieldCapabilities> */), FIELDS);
  }

}
