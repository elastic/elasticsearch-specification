
package org.elasticsearch.search.multi_search;

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
import org.elasticsearch.internal.*;
import org.elasticsearch.common_abstractions.response.*;

public class MultiSearchResponse  implements XContentable<MultiSearchResponse> {
  
  static final ParseField TOOK = new ParseField("took");
  private Long _took;
  public Long getTook() { return this._took; }
  public MultiSearchResponse setTook(Long val) { this._took = val; return this; }


  static final ParseField ALL_RESPONSES = new ParseField("all_responses");
  private List<IResponse> _allResponses;
  public List<IResponse> getAllResponses() { return this._allResponses; }
  public MultiSearchResponse setAllResponses(List<IResponse> val) { this._allResponses = val; return this; }


  static final ParseField TOTAL_RESPONSES = new ParseField("total_responses");
  private Integer _totalResponses;
  public Integer getTotalResponses() { return this._totalResponses; }
  public MultiSearchResponse setTotalResponses(Integer val) { this._totalResponses = val; return this; }


  
  @Override
  public XContentBuilder toXContent(XContentBuilder builder, ToXContent.Params params) throws IOException {
    builder.startObject();
    if (_took != null) {
      builder.field(TOOK.getPreferredName(), _took);
    }
    if (_allResponses != null) {
      builder.array(ALL_RESPONSES.getPreferredName(), _allResponses);
    }
    if (_totalResponses != null) {
      builder.field(TOTAL_RESPONSES.getPreferredName(), _totalResponses);
    }
    builder.endObject();
    return builder;
  }

  @Override
  public MultiSearchResponse fromXContent(XContentParser parser) throws IOException, XContentParseException {
    return MultiSearchResponse.PARSER.apply(parser, null);
  }

  public static final ObjectParser<MultiSearchResponse, Void> PARSER =
    new ObjectParser<>(MultiSearchResponse.class.getName(), false, MultiSearchResponse::new);

  static {
    PARSER.declareLong(MultiSearchResponse::setTook, TOOK);
    PARSER.declareObjectArray(MultiSearchResponse::setAllResponses, (p, t) -> IResponse.PARSER.apply(p, t), ALL_RESPONSES);
    PARSER.declareInt(MultiSearchResponse::setTotalResponses, TOTAL_RESPONSES);
  }

}
