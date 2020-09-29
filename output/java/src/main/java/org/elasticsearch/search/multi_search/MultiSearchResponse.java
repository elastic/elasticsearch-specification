
package org.elasticsearch.search.multi_search;

import java.io.IOException;
import java.util.Date;
import java.util.List;
import java.util.HashMap;
import java.time.Instant;
import java.time.format.DateTimeFormatter;
import org.elasticsearch.*;
import org.elasticsearch.common.ParseField;
import org.elasticsearch.common.xcontent.*;
import org.elasticsearch.search.search.*;
import org.elasticsearch.common_abstractions.response.*;

public class MultiSearchResponse extends ResponseBase<MultiSearchResponse> implements XContentable<MultiSearchResponse> {
  
  static final ParseField RESPONSES = new ParseField("responses");
  private List<SearchResponse<Object>> _responses;
  public List<SearchResponse<Object>> getResponses() { return this._responses; }
  public MultiSearchResponse setResponses(List<SearchResponse<Object>> val) { this._responses = val; return this; }


  
  @Override
  public void toXContentInternal(XContentBuilder builder, ToXContent.Params params) throws IOException {
    super.toXContentInternal(builder, params);
    if (_responses != null) {
      builder.array(RESPONSES.getPreferredName(), _responses);
    }
  }

  @Override
  public MultiSearchResponse fromXContent(XContentParser parser) throws IOException, XContentParseException {
    return MultiSearchResponse.PARSER.apply(parser, null);
  }

  public static final ObjectParser<MultiSearchResponse, Void> PARSER =
    new ObjectParser<>(MultiSearchResponse.class.getName(), false, MultiSearchResponse::new);

  static {
    SearchResponse<Object> _responses = new SearchResponse<Object>();
    PARSER.declareObjectArray(MultiSearchResponse::setResponses, (p, t) -> _responses.PARSER.apply(p, t), RESPONSES);
  }

}
