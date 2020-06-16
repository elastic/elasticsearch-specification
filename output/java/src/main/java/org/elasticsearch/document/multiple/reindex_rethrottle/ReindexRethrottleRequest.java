
package org.elasticsearch.document.multiple.reindex_rethrottle;

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

public class ReindexRethrottleRequest  implements XContentable<ReindexRethrottleRequest> {
  
  static final ParseField REQUESTS_PER_SECOND = new ParseField("requests_per_second");
  private Long _requestsPerSecond;
  public Long getRequestsPerSecond() { return this._requestsPerSecond; }
  public ReindexRethrottleRequest setRequestsPerSecond(Long val) { this._requestsPerSecond = val; return this; }


  
  @Override
  public XContentBuilder toXContent(XContentBuilder builder, ToXContent.Params params) throws IOException {
    builder.startObject();
    if (_requestsPerSecond != null) {
      builder.field(REQUESTS_PER_SECOND.getPreferredName(), _requestsPerSecond);
    }
    builder.endObject();
    return builder;
  }

  @Override
  public ReindexRethrottleRequest fromXContent(XContentParser parser) throws IOException, XContentParseException {
    return ReindexRethrottleRequest.PARSER.apply(parser, null);
  }

  public static final ObjectParser<ReindexRethrottleRequest, Void> PARSER =
    new ObjectParser<>(ReindexRethrottleRequest.class.getName(), false, ReindexRethrottleRequest::new);

  static {
    PARSER.declareLong(ReindexRethrottleRequest::setRequestsPerSecond, REQUESTS_PER_SECOND);
  }

}
