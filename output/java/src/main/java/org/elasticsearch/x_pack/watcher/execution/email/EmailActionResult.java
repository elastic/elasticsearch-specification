
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
import org.elasticsearch.x_pack.watcher.execution.email.*;

public class EmailActionResult  implements XContentable<EmailActionResult> {
  
  static final ParseField ACCOUNT = new ParseField("account");
  private String _account;
  public String getAccount() { return this._account; }
  public EmailActionResult setAccount(String val) { this._account = val; return this; }


  static final ParseField MESSAGE = new ParseField("message");
  private EmailResult _message;
  public EmailResult getMessage() { return this._message; }
  public EmailActionResult setMessage(EmailResult val) { this._message = val; return this; }


  static final ParseField REASON = new ParseField("reason");
  private String _reason;
  public String getReason() { return this._reason; }
  public EmailActionResult setReason(String val) { this._reason = val; return this; }


  
  @Override
  public XContentBuilder toXContent(XContentBuilder builder, ToXContent.Params params) throws IOException {
    builder.startObject();
    if (_account != null) {
      builder.field(ACCOUNT.getPreferredName(), _account);
    }
    if (_message != null) {
      builder.field(MESSAGE.getPreferredName());
      _message.toXContent(builder, params);
    }
    if (_reason != null) {
      builder.field(REASON.getPreferredName(), _reason);
    }
    builder.endObject();
    return builder;
  }

  @Override
  public EmailActionResult fromXContent(XContentParser parser) throws IOException, XContentParseException {
    return EmailActionResult.PARSER.apply(parser, null);
  }

  public static final ObjectParser<EmailActionResult, Void> PARSER =
    new ObjectParser<>(EmailActionResult.class.getName(), false, EmailActionResult::new);

  static {
    PARSER.declareString(EmailActionResult::setAccount, ACCOUNT);
    PARSER.declareObject(EmailActionResult::setMessage, (p, t) -> EmailResult.PARSER.apply(p, t), MESSAGE);
    PARSER.declareString(EmailActionResult::setReason, REASON);
  }

}
