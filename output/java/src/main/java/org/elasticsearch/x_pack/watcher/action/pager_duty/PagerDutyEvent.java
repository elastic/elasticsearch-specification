
package org.elasticsearch.x_pack.watcher.action.pager_duty;

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

public class PagerDutyEvent  implements XContentable<PagerDutyEvent> {
  
  static final ParseField ACCOUNT = new ParseField("account");
  private String _account;
  public String getAccount() { return this._account; }
  public PagerDutyEvent setAccount(String val) { this._account = val; return this; }


  static final ParseField ATTACH_PAYLOAD = new ParseField("attach_payload");
  private Boolean _attachPayload;
  public Boolean getAttachPayload() { return this._attachPayload; }
  public PagerDutyEvent setAttachPayload(Boolean val) { this._attachPayload = val; return this; }


  static final ParseField CLIENT = new ParseField("client");
  private String _client;
  public String getClient() { return this._client; }
  public PagerDutyEvent setClient(String val) { this._client = val; return this; }


  static final ParseField CLIENT_URL = new ParseField("client_url");
  private String _clientUrl;
  public String getClientUrl() { return this._clientUrl; }
  public PagerDutyEvent setClientUrl(String val) { this._clientUrl = val; return this; }


  static final ParseField CONTEXT = new ParseField("context");
  private List<PagerDutyContext> _context;
  public List<PagerDutyContext> getContext() { return this._context; }
  public PagerDutyEvent setContext(List<PagerDutyContext> val) { this._context = val; return this; }


  static final ParseField DESCRIPTION = new ParseField("description");
  private String _description;
  public String getDescription() { return this._description; }
  public PagerDutyEvent setDescription(String val) { this._description = val; return this; }


  static final ParseField EVENT_TYPE = new ParseField("event_type");
  private PagerDutyEventType _eventType;
  public PagerDutyEventType getEventType() { return this._eventType; }
  public PagerDutyEvent setEventType(PagerDutyEventType val) { this._eventType = val; return this; }


  static final ParseField INCIDENT_KEY = new ParseField("incident_key");
  private String _incidentKey;
  public String getIncidentKey() { return this._incidentKey; }
  public PagerDutyEvent setIncidentKey(String val) { this._incidentKey = val; return this; }


  
  @Override
  public XContentBuilder toXContent(XContentBuilder builder, ToXContent.Params params) throws IOException {
    builder.startObject();
    if (_account != null) {
      builder.field(ACCOUNT.getPreferredName(), _account);
    }
    if (_attachPayload != null) {
      builder.field(ATTACH_PAYLOAD.getPreferredName(), _attachPayload);
    }
    if (_client != null) {
      builder.field(CLIENT.getPreferredName(), _client);
    }
    if (_clientUrl != null) {
      builder.field(CLIENT_URL.getPreferredName(), _clientUrl);
    }
    if (_context != null) {
      builder.array(CONTEXT.getPreferredName(), _context);
    }
    if (_description != null) {
      builder.field(DESCRIPTION.getPreferredName(), _description);
    }
    if (_eventType != null) {
      builder.field(EVENT_TYPE.getPreferredName());
      _eventType.toXContent(builder, params);
    }
    if (_incidentKey != null) {
      builder.field(INCIDENT_KEY.getPreferredName(), _incidentKey);
    }
    builder.endObject();
    return builder;
  }

  @Override
  public PagerDutyEvent fromXContent(XContentParser parser) throws IOException, XContentParseException {
    return PagerDutyEvent.PARSER.apply(parser, null);
  }

  public static final ObjectParser<PagerDutyEvent, Void> PARSER =
    new ObjectParser<>(PagerDutyEvent.class.getName(), false, PagerDutyEvent::new);

  static {
    PARSER.declareString(PagerDutyEvent::setAccount, ACCOUNT);
    PARSER.declareBoolean(PagerDutyEvent::setAttachPayload, ATTACH_PAYLOAD);
    PARSER.declareString(PagerDutyEvent::setClient, CLIENT);
    PARSER.declareString(PagerDutyEvent::setClientUrl, CLIENT_URL);
    PARSER.declareObjectArray(PagerDutyEvent::setContext, (p, t) -> PagerDutyContext.PARSER.apply(p, t), CONTEXT);
    PARSER.declareString(PagerDutyEvent::setDescription, DESCRIPTION);
    PARSER.declareField(PagerDutyEvent::setEventType, (p, t) -> PagerDutyEventType.PARSER.apply(p), EVENT_TYPE, ObjectParser.ValueType.STRING_OR_NULL);
    PARSER.declareString(PagerDutyEvent::setIncidentKey, INCIDENT_KEY);
  }

}
