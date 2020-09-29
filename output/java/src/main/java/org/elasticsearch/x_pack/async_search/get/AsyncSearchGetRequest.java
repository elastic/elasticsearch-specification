
package org.elasticsearch.x_pack.async_search.get;

import java.io.IOException;
import java.util.Date;
import java.util.List;
import java.util.HashMap;
import java.time.Instant;
import java.time.format.DateTimeFormatter;
import org.elasticsearch.*;
import org.elasticsearch.common.ParseField;
import org.elasticsearch.common.xcontent.*;
import org.elasticsearch.common_options.time_unit.*;
import org.elasticsearch.common_abstractions.request.*;

public class AsyncSearchGetRequest extends RequestBase<AsyncSearchGetRequest> implements XContentable<AsyncSearchGetRequest> {
  
  static final ParseField KEEP_ALIVE = new ParseField("keep_alive");
  private String _keepAlive;
  public String getKeepAlive() { return this._keepAlive; }
  public AsyncSearchGetRequest setKeepAlive(String val) { this._keepAlive = val; return this; }

  static final ParseField TYPED_KEYS = new ParseField("typed_keys");
  private Boolean _typedKeys;
  public Boolean getTypedKeys() { return this._typedKeys; }
  public AsyncSearchGetRequest setTypedKeys(Boolean val) { this._typedKeys = val; return this; }

  static final ParseField WAIT_FOR_COMPLETION_TIMEOUT = new ParseField("wait_for_completion_timeout");
  private String _waitForCompletionTimeout;
  public String getWaitForCompletionTimeout() { return this._waitForCompletionTimeout; }
  public AsyncSearchGetRequest setWaitForCompletionTimeout(String val) { this._waitForCompletionTimeout = val; return this; }


  
  @Override
  public void toXContentInternal(XContentBuilder builder, ToXContent.Params params) throws IOException {
    super.toXContentInternal(builder, params);
    if (_keepAlive != null) {
      builder.field(KEEP_ALIVE.getPreferredName(), _keepAlive);
    }
    if (_typedKeys != null) {
      builder.field(TYPED_KEYS.getPreferredName(), _typedKeys);
    }
    if (_waitForCompletionTimeout != null) {
      builder.field(WAIT_FOR_COMPLETION_TIMEOUT.getPreferredName(), _waitForCompletionTimeout);
    }
  }

  @Override
  public AsyncSearchGetRequest fromXContent(XContentParser parser) throws IOException, XContentParseException {
    return AsyncSearchGetRequest.PARSER.apply(parser, null);
  }

  public static final ObjectParser<AsyncSearchGetRequest, Void> PARSER =
    new ObjectParser<>(AsyncSearchGetRequest.class.getName(), false, AsyncSearchGetRequest::new);

  static {
    PARSER.declareString(AsyncSearchGetRequest::setKeepAlive, KEEP_ALIVE);
    PARSER.declareBoolean(AsyncSearchGetRequest::setTypedKeys, TYPED_KEYS);
    PARSER.declareString(AsyncSearchGetRequest::setWaitForCompletionTimeout, WAIT_FOR_COMPLETION_TIMEOUT);
  }

}
