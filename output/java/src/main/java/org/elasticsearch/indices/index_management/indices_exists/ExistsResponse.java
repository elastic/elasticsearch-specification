
package org.elasticsearch.indices.index_management.indices_exists;

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


public class ExistsResponse  implements XContentable<ExistsResponse> {
  
  static final ParseField EXISTS = new ParseField("exists");
  private Boolean _exists;
  public Boolean getExists() { return this._exists; }
  public ExistsResponse setExists(Boolean val) { this._exists = val; return this; }


  
  @Override
  public XContentBuilder toXContent(XContentBuilder builder, ToXContent.Params params) throws IOException {
    builder.startObject();
    if (_exists != null) {
      builder.field(EXISTS.getPreferredName(), _exists);
    }
    builder.endObject();
    return builder;
  }

  @Override
  public ExistsResponse fromXContent(XContentParser parser) throws IOException, XContentParseException {
    return ExistsResponse.PARSER.apply(parser, null);
  }

  public static final ObjectParser<ExistsResponse, Void> PARSER =
    new ObjectParser<>(ExistsResponse.class.getName(), false, ExistsResponse::new);

  static {
    PARSER.declareBoolean(ExistsResponse::setExists, EXISTS);
  }

}
