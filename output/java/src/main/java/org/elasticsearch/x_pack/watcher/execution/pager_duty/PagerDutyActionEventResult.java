
package org.elasticsearch.x_pack.watcher.execution.pager_duty;

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
import org.elasticsearch.x_pack.watcher.action.pager_duty.*;
import org.elasticsearch.x_pack.watcher.execution.*;

public class PagerDutyActionEventResult  implements XContentable<PagerDutyActionEventResult> {
  
  static final ParseField EVENT = new ParseField("event");
  private PagerDutyEvent _event;
  public PagerDutyEvent getEvent() { return this._event; }
  public PagerDutyActionEventResult setEvent(PagerDutyEvent val) { this._event = val; return this; }


  static final ParseField REASON = new ParseField("reason");
  private String _reason;
  public String getReason() { return this._reason; }
  public PagerDutyActionEventResult setReason(String val) { this._reason = val; return this; }


  static final ParseField REQUEST = new ParseField("request");
  private HttpInputRequestResult _request;
  public HttpInputRequestResult getRequest() { return this._request; }
  public PagerDutyActionEventResult setRequest(HttpInputRequestResult val) { this._request = val; return this; }


  static final ParseField RESPONSE = new ParseField("response");
  private HttpInputResponseResult _response;
  public HttpInputResponseResult getResponse() { return this._response; }
  public PagerDutyActionEventResult setResponse(HttpInputResponseResult val) { this._response = val; return this; }


  
  @Override
  public XContentBuilder toXContent(XContentBuilder builder, ToXContent.Params params) throws IOException {
    builder.startObject();
    if (_event != null) {
      builder.field(EVENT.getPreferredName());
      _event.toXContent(builder, params);
    }
    if (_reason != null) {
      builder.field(REASON.getPreferredName(), _reason);
    }
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
  public PagerDutyActionEventResult fromXContent(XContentParser parser) throws IOException, XContentParseException {
    return PagerDutyActionEventResult.PARSER.apply(parser, null);
  }

  public static final ObjectParser<PagerDutyActionEventResult, Void> PARSER =
    new ObjectParser<>(PagerDutyActionEventResult.class.getName(), false, PagerDutyActionEventResult::new);

  static {
    PARSER.declareObject(PagerDutyActionEventResult::setEvent, (p, t) -> PagerDutyEvent.PARSER.apply(p, t), EVENT);
    PARSER.declareString(PagerDutyActionEventResult::setReason, REASON);
    PARSER.declareObject(PagerDutyActionEventResult::setRequest, (p, t) -> HttpInputRequestResult.PARSER.apply(p, t), REQUEST);
    PARSER.declareObject(PagerDutyActionEventResult::setResponse, (p, t) -> HttpInputResponseResult.PARSER.apply(p, t), RESPONSE);
  }

}
