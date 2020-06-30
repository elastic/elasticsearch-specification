
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
import org.elasticsearch.x_pack.watcher.action.slack.*;
import org.elasticsearch.internal.*;

public class SlackAttachment  implements XContentable<SlackAttachment> {
  
  static final ParseField AUTHOR_ICON = new ParseField("author_icon");
  private String _authorIcon;
  public String getAuthorIcon() { return this._authorIcon; }
  public SlackAttachment setAuthorIcon(String val) { this._authorIcon = val; return this; }


  static final ParseField AUTHOR_LINK = new ParseField("author_link");
  private String _authorLink;
  public String getAuthorLink() { return this._authorLink; }
  public SlackAttachment setAuthorLink(String val) { this._authorLink = val; return this; }


  static final ParseField AUTHOR_NAME = new ParseField("author_name");
  private String _authorName;
  public String getAuthorName() { return this._authorName; }
  public SlackAttachment setAuthorName(String val) { this._authorName = val; return this; }


  static final ParseField COLOR = new ParseField("color");
  private String _color;
  public String getColor() { return this._color; }
  public SlackAttachment setColor(String val) { this._color = val; return this; }


  static final ParseField FALLBACK = new ParseField("fallback");
  private String _fallback;
  public String getFallback() { return this._fallback; }
  public SlackAttachment setFallback(String val) { this._fallback = val; return this; }


  static final ParseField FIELDS = new ParseField("fields");
  private List<SlackAttachmentField> _fields;
  public List<SlackAttachmentField> getFields() { return this._fields; }
  public SlackAttachment setFields(List<SlackAttachmentField> val) { this._fields = val; return this; }


  static final ParseField FOOTER = new ParseField("footer");
  private String _footer;
  public String getFooter() { return this._footer; }
  public SlackAttachment setFooter(String val) { this._footer = val; return this; }


  static final ParseField FOOTER_ICON = new ParseField("footer_icon");
  private String _footerIcon;
  public String getFooterIcon() { return this._footerIcon; }
  public SlackAttachment setFooterIcon(String val) { this._footerIcon = val; return this; }


  static final ParseField IMAGE_URL = new ParseField("image_url");
  private String _imageUrl;
  public String getImageUrl() { return this._imageUrl; }
  public SlackAttachment setImageUrl(String val) { this._imageUrl = val; return this; }


  static final ParseField PRETEXT = new ParseField("pretext");
  private String _pretext;
  public String getPretext() { return this._pretext; }
  public SlackAttachment setPretext(String val) { this._pretext = val; return this; }


  static final ParseField TEXT = new ParseField("text");
  private String _text;
  public String getText() { return this._text; }
  public SlackAttachment setText(String val) { this._text = val; return this; }


  static final ParseField THUMB_URL = new ParseField("thumb_url");
  private String _thumbUrl;
  public String getThumbUrl() { return this._thumbUrl; }
  public SlackAttachment setThumbUrl(String val) { this._thumbUrl = val; return this; }


  static final ParseField TITLE = new ParseField("title");
  private String _title;
  public String getTitle() { return this._title; }
  public SlackAttachment setTitle(String val) { this._title = val; return this; }


  static final ParseField TITLE_LINK = new ParseField("title_link");
  private String _titleLink;
  public String getTitleLink() { return this._titleLink; }
  public SlackAttachment setTitleLink(String val) { this._titleLink = val; return this; }


  static final ParseField TS = new ParseField("ts");
  private Date _ts;
  public Date getTs() { return this._ts; }
  public SlackAttachment setTs(Date val) { this._ts = val; return this; }


  
  @Override
  public XContentBuilder toXContent(XContentBuilder builder, ToXContent.Params params) throws IOException {
    builder.startObject();
    if (_authorIcon != null) {
      builder.field(AUTHOR_ICON.getPreferredName(), _authorIcon);
    }
    if (_authorLink != null) {
      builder.field(AUTHOR_LINK.getPreferredName(), _authorLink);
    }
    if (_authorName != null) {
      builder.field(AUTHOR_NAME.getPreferredName(), _authorName);
    }
    if (_color != null) {
      builder.field(COLOR.getPreferredName(), _color);
    }
    if (_fallback != null) {
      builder.field(FALLBACK.getPreferredName(), _fallback);
    }
    if (_fields != null) {
      builder.array(FIELDS.getPreferredName(), _fields);
    }
    if (_footer != null) {
      builder.field(FOOTER.getPreferredName(), _footer);
    }
    if (_footerIcon != null) {
      builder.field(FOOTER_ICON.getPreferredName(), _footerIcon);
    }
    if (_imageUrl != null) {
      builder.field(IMAGE_URL.getPreferredName(), _imageUrl);
    }
    if (_pretext != null) {
      builder.field(PRETEXT.getPreferredName(), _pretext);
    }
    if (_text != null) {
      builder.field(TEXT.getPreferredName(), _text);
    }
    if (_thumbUrl != null) {
      builder.field(THUMB_URL.getPreferredName(), _thumbUrl);
    }
    if (_title != null) {
      builder.field(TITLE.getPreferredName(), _title);
    }
    if (_titleLink != null) {
      builder.field(TITLE_LINK.getPreferredName(), _titleLink);
    }
    if (_ts != null) {
      builder.field(TS.getPreferredName(),
        DateTimeFormatter.ISO_DATE.format(_ts.toInstant()));
    }
    builder.endObject();
    return builder;
  }

  @Override
  public SlackAttachment fromXContent(XContentParser parser) throws IOException, XContentParseException {
    return SlackAttachment.PARSER.apply(parser, null);
  }

  public static final ObjectParser<SlackAttachment, Void> PARSER =
    new ObjectParser<>(SlackAttachment.class.getName(), false, SlackAttachment::new);

  static {
    PARSER.declareString(SlackAttachment::setAuthorIcon, AUTHOR_ICON);
    PARSER.declareString(SlackAttachment::setAuthorLink, AUTHOR_LINK);
    PARSER.declareString(SlackAttachment::setAuthorName, AUTHOR_NAME);
    PARSER.declareString(SlackAttachment::setColor, COLOR);
    PARSER.declareString(SlackAttachment::setFallback, FALLBACK);
    PARSER.declareObjectArray(SlackAttachment::setFields, (p, t) -> SlackAttachmentField.PARSER.apply(p, t), FIELDS);
    PARSER.declareString(SlackAttachment::setFooter, FOOTER);
    PARSER.declareString(SlackAttachment::setFooterIcon, FOOTER_ICON);
    PARSER.declareString(SlackAttachment::setImageUrl, IMAGE_URL);
    PARSER.declareString(SlackAttachment::setPretext, PRETEXT);
    PARSER.declareString(SlackAttachment::setText, TEXT);
    PARSER.declareString(SlackAttachment::setThumbUrl, THUMB_URL);
    PARSER.declareString(SlackAttachment::setTitle, TITLE);
    PARSER.declareString(SlackAttachment::setTitleLink, TITLE_LINK);
    PARSER.declareObject(SlackAttachment::setTs, (p, t) -> Date.from(Instant.from(DateTimeFormatter.ISO_DATE.parse(p.text()))), TS);
  }

}
