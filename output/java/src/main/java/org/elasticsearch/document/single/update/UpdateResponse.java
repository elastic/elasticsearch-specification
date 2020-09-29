
package org.elasticsearch.document.single.update;

import java.io.IOException;
import java.util.Date;
import java.util.List;
import java.util.HashMap;
import java.time.Instant;
import java.time.format.DateTimeFormatter;
import org.elasticsearch.*;
import org.elasticsearch.common.ParseField;
import org.elasticsearch.common.xcontent.*;
import org.elasticsearch.search.explain.*;
import org.elasticsearch.document.single.*;
import org.elasticsearch.common_abstractions.response.*;

public class UpdateResponse<TDocument> extends WriteResponseBase implements XContentable<UpdateResponse> {
  
  static final ParseField GET = new ParseField("get");
  private InlineGet<TDocument> _get;
  public InlineGet<TDocument> getGet() { return this._get; }
  public UpdateResponse<TDocument> setGet(InlineGet<TDocument> val) { this._get = val; return this; }


  
  @Override
  public void toXContentInternal(XContentBuilder builder, ToXContent.Params params) throws IOException {
    super.toXContentInternal(builder, params);
    if (_get != null) {
      builder.field(GET.getPreferredName());
      _get.toXContent(builder, params);
    }
  }

  @Override
  public UpdateResponse fromXContent(XContentParser parser) throws IOException, XContentParseException {
    return UpdateResponse.PARSER.apply(parser, null);
  }

  public static final ObjectParser<UpdateResponse, Void> PARSER =
    new ObjectParser<>(UpdateResponse.class.getName(), false, UpdateResponse::new);

  static {
    InlineGet _get = new InlineGet<>();
    PARSER.declareObject(UpdateResponse::setGet, (p, t) -> _get.PARSER.apply(p, t), GET);
  }

}
