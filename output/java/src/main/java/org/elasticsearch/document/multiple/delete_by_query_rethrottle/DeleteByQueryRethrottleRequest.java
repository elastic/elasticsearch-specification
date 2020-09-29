
package org.elasticsearch.document.multiple.delete_by_query_rethrottle;

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
import org.elasticsearch.common_abstractions.request.*;

public class DeleteByQueryRethrottleRequest extends RequestBase<DeleteByQueryRethrottleRequest> implements XContentable<DeleteByQueryRethrottleRequest> {
  
  static final ParseField REQUESTS_PER_SECOND = new ParseField("requests_per_second");
  private long _requestsPerSecond;
  private boolean _requestsPerSecond$isSet;
  public long getRequestsPerSecond() { return this._requestsPerSecond; }
  public DeleteByQueryRethrottleRequest setRequestsPerSecond(long val) {
    this._requestsPerSecond = val;
    _requestsPerSecond$isSet = true;
    return this;
  }


  
  @Override
  public void toXContentInternal(XContentBuilder builder, ToXContent.Params params) throws IOException {
    super.toXContentInternal(builder, params);
    if (_requestsPerSecond$isSet) {
      builder.field(REQUESTS_PER_SECOND.getPreferredName(), _requestsPerSecond);
    }
  }

  @Override
  public DeleteByQueryRethrottleRequest fromXContent(XContentParser parser) throws IOException, XContentParseException {
    return DeleteByQueryRethrottleRequest.PARSER.apply(parser, null);
  }

  public static final ObjectParser<DeleteByQueryRethrottleRequest, Void> PARSER =
    new ObjectParser<>(DeleteByQueryRethrottleRequest.class.getName(), false, DeleteByQueryRethrottleRequest::new);

  static {
    PARSER.declareLong(DeleteByQueryRethrottleRequest::setRequestsPerSecond, REQUESTS_PER_SECOND);
  }

}
