
package org.elasticsearch.x_pack.watcher.action.slack;

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


public class SlackAttachmentField  implements XContentable<SlackAttachmentField> {
  
  static final ParseField SHORT = new ParseField("short");
  private Boolean _short;
  public Boolean getShort() { return this._short; }
  public SlackAttachmentField setShort(Boolean val) { this._short = val; return this; }


  static final ParseField TITLE = new ParseField("title");
  private String _title;
  public String getTitle() { return this._title; }
  public SlackAttachmentField setTitle(String val) { this._title = val; return this; }


  static final ParseField VALUE = new ParseField("value");
  private String _value;
  public String getValue() { return this._value; }
  public SlackAttachmentField setValue(String val) { this._value = val; return this; }


  
  @Override
  public XContentBuilder toXContent(XContentBuilder builder, ToXContent.Params params) throws IOException {
    builder.startObject();
    if (_short != null) {
      builder.field(SHORT.getPreferredName(), _short);
    }
    if (_title != null) {
      builder.field(TITLE.getPreferredName(), _title);
    }
    if (_value != null) {
      builder.field(VALUE.getPreferredName(), _value);
    }
    builder.endObject();
    return builder;
  }

  @Override
  public SlackAttachmentField fromXContent(XContentParser parser) throws IOException, XContentParseException {
    return SlackAttachmentField.PARSER.apply(parser, null);
  }

  public static final ObjectParser<SlackAttachmentField, Void> PARSER =
    new ObjectParser<>(SlackAttachmentField.class.getName(), false, SlackAttachmentField::new);

  static {
    PARSER.declareBoolean(SlackAttachmentField::setShort, SHORT);
    PARSER.declareString(SlackAttachmentField::setTitle, TITLE);
    PARSER.declareString(SlackAttachmentField::setValue, VALUE);
  }

}
