
package org.elasticsearch.x_pack.watcher.execution.webhook;

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
import org.elasticsearch.x_pack.watcher.execution.*;

public class WebhookActionResult  implements XContentable<WebhookActionResult> {
  
  static final ParseField REQUEST = new ParseField("request");
  private HttpInputRequestResult _request;
  public HttpInputRequestResult getRequest() { return this._request; }
  public WebhookActionResult setRequest(HttpInputRequestResult val) { this._request = val; return this; }


  static final ParseField RESPONSE = new ParseField("response");
  private HttpInputResponseResult _response;
  public HttpInputResponseResult getResponse() { return this._response; }
  public WebhookActionResult setResponse(HttpInputResponseResult val) { this._response = val; return this; }


  
  @Override
  public XContentBuilder toXContent(XContentBuilder builder, ToXContent.Params params) throws IOException {
    builder.startObject();
    if (_request != null) {
      builder.field(REQUEST.getPreferredName());
      _request.toXContent(builder, params);
    }
    if (_response != null) {
      builder.field(RESPONSE.getPreferredName());
      _response.toXContent(builder, params);
    }
    builder.endObject();
    return builder;
  }

  @Override
  public WebhookActionResult fromXContent(XContentParser parser) throws IOException, XContentParseException {
    return WebhookActionResult.PARSER.apply(parser, null);
  }

  public static final ObjectParser<WebhookActionResult, Void> PARSER =
    new ObjectParser<>(WebhookActionResult.class.getName(), false, WebhookActionResult::new);

  static {
    PARSER.declareObject(WebhookActionResult::setRequest, (p, t) -> HttpInputRequestResult.PARSER.apply(p, t), REQUEST);
    PARSER.declareObject(WebhookActionResult::setResponse, (p, t) -> HttpInputResponseResult.PARSER.apply(p, t), RESPONSE);
  }

}
