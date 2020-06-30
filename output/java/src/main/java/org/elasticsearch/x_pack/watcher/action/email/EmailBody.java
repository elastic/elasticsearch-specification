
package org.elasticsearch.x_pack.watcher.action.email;

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


public class EmailBody  implements XContentable<EmailBody> {
  
  static final ParseField HTML = new ParseField("html");
  private String _html;
  public String getHtml() { return this._html; }
  public EmailBody setHtml(String val) { this._html = val; return this; }


  static final ParseField TEXT = new ParseField("text");
  private String _text;
  public String getText() { return this._text; }
  public EmailBody setText(String val) { this._text = val; return this; }


  
  @Override
  public XContentBuilder toXContent(XContentBuilder builder, ToXContent.Params params) throws IOException {
    builder.startObject();
    if (_html != null) {
      builder.field(HTML.getPreferredName(), _html);
    }
    if (_text != null) {
      builder.field(TEXT.getPreferredName(), _text);
    }
    builder.endObject();
    return builder;
  }

  @Override
  public EmailBody fromXContent(XContentParser parser) throws IOException, XContentParseException {
    return EmailBody.PARSER.apply(parser, null);
  }

  public static final ObjectParser<EmailBody, Void> PARSER =
    new ObjectParser<>(EmailBody.class.getName(), false, EmailBody::new);

  static {
    PARSER.declareString(EmailBody::setHtml, HTML);
    PARSER.declareString(EmailBody::setText, TEXT);
  }

}
