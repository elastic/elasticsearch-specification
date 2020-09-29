
package org.elasticsearch.document.multiple.multi_get.response;

import java.io.IOException;
import java.util.Date;
import java.util.List;
import java.util.HashMap;
import java.time.Instant;
import java.time.format.DateTimeFormatter;
import org.elasticsearch.*;
import org.elasticsearch.common.ParseField;
import org.elasticsearch.common.xcontent.*;
import org.elasticsearch.document.multiple.multi_get.response.*;
import org.elasticsearch.common_abstractions.response.*;

public class MultiGetResponse extends ResponseBase<MultiGetResponse> implements XContentable<MultiGetResponse> {
  
  static final ParseField HITS = new ParseField("hits");
  private List<MultiGetHit<Object>> _hits;
  public List<MultiGetHit<Object>> getHits() { return this._hits; }
  public MultiGetResponse setHits(List<MultiGetHit<Object>> val) { this._hits = val; return this; }


  
  @Override
  public void toXContentInternal(XContentBuilder builder, ToXContent.Params params) throws IOException {
    super.toXContentInternal(builder, params);
    if (_hits != null) {
      builder.array(HITS.getPreferredName(), _hits);
    }
  }

  @Override
  public MultiGetResponse fromXContent(XContentParser parser) throws IOException, XContentParseException {
    return MultiGetResponse.PARSER.apply(parser, null);
  }

  public static final ObjectParser<MultiGetResponse, Void> PARSER =
    new ObjectParser<>(MultiGetResponse.class.getName(), false, MultiGetResponse::new);

  static {
    MultiGetHit<Object> _hits = new MultiGetHit<Object>();
    PARSER.declareObjectArray(MultiGetResponse::setHits, (p, t) -> _hits.PARSER.apply(p, t), HITS);
  }

}
