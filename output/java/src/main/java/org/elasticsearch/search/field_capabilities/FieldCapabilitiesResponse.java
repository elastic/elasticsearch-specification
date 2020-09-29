
package org.elasticsearch.search.field_capabilities;

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
import org.elasticsearch.search.field_capabilities.*;
import org.elasticsearch.common_abstractions.response.*;

public class FieldCapabilitiesResponse extends ResponseBase<FieldCapabilitiesResponse> implements XContentable<FieldCapabilitiesResponse> {
  
  static final ParseField FIELDS = new ParseField("fields");
  private NamedContainer<String, NamedContainer<String, FieldCapabilities>> _fields;
  public NamedContainer<String, NamedContainer<String, FieldCapabilities>> getFields() { return this._fields; }
  public FieldCapabilitiesResponse setFields(NamedContainer<String, NamedContainer<String, FieldCapabilities>> val) { this._fields = val; return this; }


  
  @Override
  public void toXContentInternal(XContentBuilder builder, ToXContent.Params params) throws IOException {
    super.toXContentInternal(builder, params);
    if (_fields != null) {
      builder.field(FIELDS.getPreferredName());
      _fields.toXContent(builder, params);
    }
  }

  @Override
  public FieldCapabilitiesResponse fromXContent(XContentParser parser) throws IOException, XContentParseException {
    return FieldCapabilitiesResponse.PARSER.apply(parser, null);
  }

  public static final ObjectParser<FieldCapabilitiesResponse, Void> PARSER =
    new ObjectParser<>(FieldCapabilitiesResponse.class.getName(), false, FieldCapabilitiesResponse::new);

  static {
    PARSER.declareObject(FieldCapabilitiesResponse::setFields, (p, t) -> new NamedContainer<>(n -> () -> n,null /* TODO NamedContainer<String, FieldCapabilities> */), FIELDS);
  }

}
