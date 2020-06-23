
package org.elasticsearch.x_pack.async_search.get;

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
import org.elasticsearch.common_options.time_unit.*;

public class AsyncSearchGetRequest  implements XContentable<AsyncSearchGetRequest> {
  
  static final ParseField KEEP_ALIVE = new ParseField("keep_alive");
  private Time _keepAlive;
  public Time getKeepAlive() { return this._keepAlive; }
  public AsyncSearchGetRequest setKeepAlive(Time val) { this._keepAlive = val; return this; }


  static final ParseField TYPED_KEYS = new ParseField("typed_keys");
  private Boolean _typedKeys;
  public Boolean getTypedKeys() { return this._typedKeys; }
  public AsyncSearchGetRequest setTypedKeys(Boolean val) { this._typedKeys = val; return this; }


  static final ParseField WAIT_FOR_COMPLETION_TIMEOUT = new ParseField("wait_for_completion_timeout");
  private Time _waitForCompletionTimeout;
  public Time getWaitForCompletionTimeout() { return this._waitForCompletionTimeout; }
  public AsyncSearchGetRequest setWaitForCompletionTimeout(Time val) { this._waitForCompletionTimeout = val; return this; }


  
  @Override
  public XContentBuilder toXContent(XContentBuilder builder, ToXContent.Params params) throws IOException {
    builder.startObject();
    if (_keepAlive != null) {
      builder.field(KEEP_ALIVE.getPreferredName());
      _keepAlive.toXContent(builder, params);
    }
    if (_typedKeys != null) {
      builder.field(TYPED_KEYS.getPreferredName(), _typedKeys);
    }
    if (_waitForCompletionTimeout != null) {
      builder.field(WAIT_FOR_COMPLETION_TIMEOUT.getPreferredName());
      _waitForCompletionTimeout.toXContent(builder, params);
    }
    builder.endObject();
    return builder;
  }

  @Override
  public AsyncSearchGetRequest fromXContent(XContentParser parser) throws IOException, XContentParseException {
    return AsyncSearchGetRequest.PARSER.apply(parser, null);
  }

  public static final ObjectParser<AsyncSearchGetRequest, Void> PARSER =
    new ObjectParser<>(AsyncSearchGetRequest.class.getName(), false, AsyncSearchGetRequest::new);

  static {
    PARSER.declareObject(AsyncSearchGetRequest::setKeepAlive, (p, t) -> Time.PARSER.apply(p, t), KEEP_ALIVE);
    PARSER.declareBoolean(AsyncSearchGetRequest::setTypedKeys, TYPED_KEYS);
    PARSER.declareObject(AsyncSearchGetRequest::setWaitForCompletionTimeout, (p, t) -> Time.PARSER.apply(p, t), WAIT_FOR_COMPLETION_TIMEOUT);
  }

}
