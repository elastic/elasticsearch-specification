
package org.elasticsearch.x_pack.watcher.execution.email;

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
import org.elasticsearch.x_pack.watcher.action.email.*;
import org.elasticsearch.internal.*;

public class EmailResult  implements XContentable<EmailResult> {
  
  static final ParseField BCC = new ParseField("bcc");
  private List<String> _bcc;
  public List<String> getBcc() { return this._bcc; }
  public EmailResult setBcc(List<String> val) { this._bcc = val; return this; }


  static final ParseField BODY = new ParseField("body");
  private EmailBody _body;
  public EmailBody getBody() { return this._body; }
  public EmailResult setBody(EmailBody val) { this._body = val; return this; }


  static final ParseField CC = new ParseField("cc");
  private List<String> _cc;
  public List<String> getCc() { return this._cc; }
  public EmailResult setCc(List<String> val) { this._cc = val; return this; }


  static final ParseField FROM = new ParseField("from");
  private String _from;
  public String getFrom() { return this._from; }
  public EmailResult setFrom(String val) { this._from = val; return this; }


  static final ParseField ID = new ParseField("id");
  private String _id;
  public String getId() { return this._id; }
  public EmailResult setId(String val) { this._id = val; return this; }


  static final ParseField PRIORITY = new ParseField("priority");
  private EmailPriority _priority;
  public EmailPriority getPriority() { return this._priority; }
  public EmailResult setPriority(EmailPriority val) { this._priority = val; return this; }


  static final ParseField REPLY_TO = new ParseField("reply_to");
  private List<String> _replyTo;
  public List<String> getReplyTo() { return this._replyTo; }
  public EmailResult setReplyTo(List<String> val) { this._replyTo = val; return this; }


  static final ParseField SENT_DATE = new ParseField("sent_date");
  private Date _sentDate;
  public Date getSentDate() { return this._sentDate; }
  public EmailResult setSentDate(Date val) { this._sentDate = val; return this; }


  static final ParseField SUBJECT = new ParseField("subject");
  private String _subject;
  public String getSubject() { return this._subject; }
  public EmailResult setSubject(String val) { this._subject = val; return this; }


  static final ParseField TO = new ParseField("to");
  private List<String> _to;
  public List<String> getTo() { return this._to; }
  public EmailResult setTo(List<String> val) { this._to = val; return this; }


  
  @Override
  public XContentBuilder toXContent(XContentBuilder builder, ToXContent.Params params) throws IOException {
    builder.startObject();
    if (_bcc != null) {
      builder.array(BCC.getPreferredName(), _bcc);
    }
    if (_body != null) {
      builder.field(BODY.getPreferredName());
      _body.toXContent(builder, params);
    }
    if (_cc != null) {
      builder.array(CC.getPreferredName(), _cc);
    }
    if (_from != null) {
      builder.field(FROM.getPreferredName(), _from);
    }
    if (_id != null) {
      builder.field(ID.getPreferredName(), _id);
    }
    if (_priority != null) {
      builder.field(PRIORITY.getPreferredName());
      _priority.toXContent(builder, params);
    }
    if (_replyTo != null) {
      builder.array(REPLY_TO.getPreferredName(), _replyTo);
    }
    if (_sentDate != null) {
      builder.field(SENT_DATE.getPreferredName(),
        DateTimeFormatter.ISO_DATE.format(_sentDate.toInstant()));
    }
    if (_subject != null) {
      builder.field(SUBJECT.getPreferredName(), _subject);
    }
    if (_to != null) {
      builder.array(TO.getPreferredName(), _to);
    }
    builder.endObject();
    return builder;
  }

  @Override
  public EmailResult fromXContent(XContentParser parser) throws IOException, XContentParseException {
    return EmailResult.PARSER.apply(parser, null);
  }

  public static final ObjectParser<EmailResult, Void> PARSER =
    new ObjectParser<>(EmailResult.class.getName(), false, EmailResult::new);

  static {
    PARSER.declareStringArray(EmailResult::setBcc, BCC);
    PARSER.declareObject(EmailResult::setBody, (p, t) -> EmailBody.PARSER.apply(p, t), BODY);
    PARSER.declareStringArray(EmailResult::setCc, CC);
    PARSER.declareString(EmailResult::setFrom, FROM);
    PARSER.declareString(EmailResult::setId, ID);
    PARSER.declareField(EmailResult::setPriority, (p, t) -> EmailPriority.PARSER.apply(p), PRIORITY, ObjectParser.ValueType.STRING_OR_NULL);
    PARSER.declareStringArray(EmailResult::setReplyTo, REPLY_TO);
    PARSER.declareObject(EmailResult::setSentDate, (p, t) -> Date.from(Instant.from(DateTimeFormatter.ISO_DATE.parse(p.text()))), SENT_DATE);
    PARSER.declareString(EmailResult::setSubject, SUBJECT);
    PARSER.declareStringArray(EmailResult::setTo, TO);
  }

}
