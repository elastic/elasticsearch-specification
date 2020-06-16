
package org.elasticsearch.x_pack.watcher.execute_watch;

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
import org.elasticsearch.x_pack.watcher.execution.email.*;
import org.elasticsearch.x_pack.watcher.execution.index.*;
import org.elasticsearch.x_pack.watcher.execution.logging.*;
import org.elasticsearch.x_pack.watcher.execution.pager_duty.*;
import org.elasticsearch.x_pack.watcher.execution.slack.*;
import org.elasticsearch.x_pack.watcher.execution.*;
import org.elasticsearch.x_pack.watcher.action.*;
import org.elasticsearch.x_pack.watcher.execution.webhook.*;

public class ExecutionResultAction  implements XContentable<ExecutionResultAction> {
  
  static final ParseField EMAIL = new ParseField("email");
  private EmailActionResult _email;
  public EmailActionResult getEmail() { return this._email; }
  public ExecutionResultAction setEmail(EmailActionResult val) { this._email = val; return this; }


  static final ParseField ID = new ParseField("id");
  private String _id;
  public String getId() { return this._id; }
  public ExecutionResultAction setId(String val) { this._id = val; return this; }


  static final ParseField INDEX = new ParseField("index");
  private IndexActionResult _index;
  public IndexActionResult getIndex() { return this._index; }
  public ExecutionResultAction setIndex(IndexActionResult val) { this._index = val; return this; }


  static final ParseField LOGGING = new ParseField("logging");
  private LoggingActionResult _logging;
  public LoggingActionResult getLogging() { return this._logging; }
  public ExecutionResultAction setLogging(LoggingActionResult val) { this._logging = val; return this; }


  static final ParseField PAGERDUTY = new ParseField("pagerduty");
  private PagerDutyActionResult _pagerduty;
  public PagerDutyActionResult getPagerduty() { return this._pagerduty; }
  public ExecutionResultAction setPagerduty(PagerDutyActionResult val) { this._pagerduty = val; return this; }


  static final ParseField REASON = new ParseField("reason");
  private String _reason;
  public String getReason() { return this._reason; }
  public ExecutionResultAction setReason(String val) { this._reason = val; return this; }


  static final ParseField SLACK = new ParseField("slack");
  private SlackActionResult _slack;
  public SlackActionResult getSlack() { return this._slack; }
  public ExecutionResultAction setSlack(SlackActionResult val) { this._slack = val; return this; }


  static final ParseField STATUS = new ParseField("status");
  private Status _status;
  public Status getStatus() { return this._status; }
  public ExecutionResultAction setStatus(Status val) { this._status = val; return this; }


  static final ParseField TYPE = new ParseField("type");
  private ActionType _type;
  public ActionType getType() { return this._type; }
  public ExecutionResultAction setType(ActionType val) { this._type = val; return this; }


  static final ParseField WEBHOOK = new ParseField("webhook");
  private WebhookActionResult _webhook;
  public WebhookActionResult getWebhook() { return this._webhook; }
  public ExecutionResultAction setWebhook(WebhookActionResult val) { this._webhook = val; return this; }


  
  @Override
  public XContentBuilder toXContent(XContentBuilder builder, ToXContent.Params params) throws IOException {
    builder.startObject();
    if (_email != null) {
      builder.field(EMAIL.getPreferredName());
      _email.toXContent(builder, params);
    }
    if (_id != null) {
      builder.field(ID.getPreferredName(), _id);
    }
    if (_index != null) {
      builder.field(INDEX.getPreferredName());
      _index.toXContent(builder, params);
    }
    if (_logging != null) {
      builder.field(LOGGING.getPreferredName());
      _logging.toXContent(builder, params);
    }
    if (_pagerduty != null) {
      builder.field(PAGERDUTY.getPreferredName());
      _pagerduty.toXContent(builder, params);
    }
    if (_reason != null) {
      builder.field(REASON.getPreferredName(), _reason);
    }
    if (_slack != null) {
      builder.field(SLACK.getPreferredName());
      _slack.toXContent(builder, params);
    }
    if (_status != null) {
      builder.field(STATUS.getPreferredName());
      _status.toXContent(builder, params);
    }
    if (_type != null) {
      builder.field(TYPE.getPreferredName());
      _type.toXContent(builder, params);
    }
    if (_webhook != null) {
      builder.field(WEBHOOK.getPreferredName());
      _webhook.toXContent(builder, params);
    }
    builder.endObject();
    return builder;
  }

  @Override
  public ExecutionResultAction fromXContent(XContentParser parser) throws IOException, XContentParseException {
    return ExecutionResultAction.PARSER.apply(parser, null);
  }

  public static final ObjectParser<ExecutionResultAction, Void> PARSER =
    new ObjectParser<>(ExecutionResultAction.class.getName(), false, ExecutionResultAction::new);

  static {
    PARSER.declareObject(ExecutionResultAction::setEmail, (p, t) -> EmailActionResult.PARSER.apply(p, t), EMAIL);
    PARSER.declareString(ExecutionResultAction::setId, ID);
    PARSER.declareObject(ExecutionResultAction::setIndex, (p, t) -> IndexActionResult.PARSER.apply(p, t), INDEX);
    PARSER.declareObject(ExecutionResultAction::setLogging, (p, t) -> LoggingActionResult.PARSER.apply(p, t), LOGGING);
    PARSER.declareObject(ExecutionResultAction::setPagerduty, (p, t) -> PagerDutyActionResult.PARSER.apply(p, t), PAGERDUTY);
    PARSER.declareString(ExecutionResultAction::setReason, REASON);
    PARSER.declareObject(ExecutionResultAction::setSlack, (p, t) -> SlackActionResult.PARSER.apply(p, t), SLACK);
    PARSER.declareField(ExecutionResultAction::setStatus, (p, t) -> Status.PARSER.apply(p), STATUS, ObjectParser.ValueType.STRING_OR_NULL);
    PARSER.declareField(ExecutionResultAction::setType, (p, t) -> ActionType.PARSER.apply(p), TYPE, ObjectParser.ValueType.STRING_OR_NULL);
    PARSER.declareObject(ExecutionResultAction::setWebhook, (p, t) -> WebhookActionResult.PARSER.apply(p, t), WEBHOOK);
  }

}
