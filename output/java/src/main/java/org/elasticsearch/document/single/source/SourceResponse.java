
package org.elasticsearch.document.single.source;

import java.io.IOException;
import java.util.Date;
import java.util.List;
import java.util.HashMap;
import java.time.Instant;
import java.time.format.DateTimeFormatter;
import org.elasticsearch.*;
import org.elasticsearch.common.ParseField;
import org.elasticsearch.common.xcontent.*;
import org.elasticsearch.common_abstractions.response.*;

public class SourceResponse<TDocument> extends ResponseBase<SourceResponse> implements XContentable<SourceResponse> {
  
  static final ParseField BODY = new ParseField("body");
  private TDocument _body;
  public TDocument getBody() { return this._body; }
  public SourceResponse<TDocument> setBody(TDocument val) { this._body = val; return this; }


  
  @Override
  public void toXContentInternal(XContentBuilder builder, ToXContent.Params params) throws IOException {
    super.toXContentInternal(builder, params);
    if (_body != null) {
      builder.field(BODY.getPreferredName(), _body);
    }
  }

  @Override
  public SourceResponse fromXContent(XContentParser parser) throws IOException, XContentParseException {
    return SourceResponse.PARSER.apply(parser, null);
  }

  public static final ObjectParser<SourceResponse, Void> PARSER =
    new ObjectParser<>(SourceResponse.class.getName(), false, SourceResponse::new);

  static {
    PARSER.declareObject(SourceResponse::setBody, (p, t) -> null /* TODO TDocument */, BODY);
  }

}
