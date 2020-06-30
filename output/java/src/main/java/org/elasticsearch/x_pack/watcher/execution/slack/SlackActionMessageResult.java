
package org.elasticsearch.x_pack.watcher.execution.slack;

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
import org.elasticsearch.x_pack.watcher.action.slack.*;
import org.elasticsearch.x_pack.watcher.execution.*;

public class SlackActionMessageResult  implements XContentable<SlackActionMessageResult> {
  
  static final ParseField MESSAGE = new ParseField("message");
  private SlackMessage _message;
  public SlackMessage getMessage() { return this._message; }
  public SlackActionMessageResult setMessage(SlackMessage val) { this._message = val; return this; }


  static final ParseField REASON = new ParseField("reason");
  private String _reason;
  public String getReason() { return this._reason; }
  public SlackActionMessageResult setReason(String val) { this._reason = val; return this; }


  static final ParseField REQUEST = new ParseField("request");
  private HttpInputRequestResult _request;
  public HttpInputRequestResult getRequest() { return this._request; }
  public SlackActionMessageResult setRequest(HttpInputRequestResult val) { this._request = val; return this; }


  static final ParseField RESPONSE = new ParseField("response");
  private HttpInputResponseResult _response;
  public HttpInputResponseResult getResponse() { return this._response; }
  public SlackActionMessageResult setResponse(HttpInputResponseResult val) { this._response = val; return this; }


  static final ParseField STATUS = new ParseField("status");
  private Status _status;
  public Status getStatus() { return this._status; }
  public SlackActionMessageResult setStatus(Status val) { this._status = val; return this; }


  static final ParseField TO = new ParseField("to");
  private String _to;
  public String getTo() { return this._to; }
  public SlackActionMessageResult setTo(String val) { this._to = val; return this; }


  
  @Override
  public XContentBuilder toXContent(XContentBuilder builder, ToXContent.Params params) throws IOException {
    builder.startObject();
    if (_message != null) {
      builder.field(MESSAGE.getPreferredName());
      _message.toXContent(builder, params);
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
    if (_status != null) {
      builder.field(STATUS.getPreferredName());
      _status.toXContent(builder, params);
    }
    if (_to != null) {
      builder.field(TO.getPreferredName(), _to);
    }
    builder.endObject();
    return builder;
  }

  @Override
  public SlackActionMessageResult fromXContent(XContentParser parser) throws IOException, XContentParseException {
    return SlackActionMessageResult.PARSER.apply(parser, null);
  }

  public static final ObjectParser<SlackActionMessageResult, Void> PARSER =
    new ObjectParser<>(SlackActionMessageResult.class.getName(), false, SlackActionMessageResult::new);

  static {
    PARSER.declareObject(SlackActionMessageResult::setMessage, (p, t) -> SlackMessage.PARSER.apply(p, t), MESSAGE);
    PARSER.declareString(SlackActionMessageResult::setReason, REASON);
    PARSER.declareObject(SlackActionMessageResult::setRequest, (p, t) -> HttpInputRequestResult.PARSER.apply(p, t), REQUEST);
    PARSER.declareObject(SlackActionMessageResult::setResponse, (p, t) -> HttpInputResponseResult.PARSER.apply(p, t), RESPONSE);
    PARSER.declareField(SlackActionMessageResult::setStatus, (p, t) -> Status.PARSER.apply(p), STATUS, ObjectParser.ValueType.STRING_OR_NULL);
    PARSER.declareString(SlackActionMessageResult::setTo, TO);
  }

}
