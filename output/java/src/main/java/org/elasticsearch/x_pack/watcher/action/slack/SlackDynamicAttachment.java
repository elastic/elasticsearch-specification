
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

public class SlackDynamicAttachment  implements XContentable<SlackDynamicAttachment> {
  
  static final ParseField ATTACHMENT_TEMPLATE = new ParseField("attachment_template");
  private SlackAttachment _attachmentTemplate;
  public SlackAttachment getAttachmentTemplate() { return this._attachmentTemplate; }
  public SlackDynamicAttachment setAttachmentTemplate(SlackAttachment val) { this._attachmentTemplate = val; return this; }


  static final ParseField LIST_PATH = new ParseField("list_path");
  private String _listPath;
  public String getListPath() { return this._listPath; }
  public SlackDynamicAttachment setListPath(String val) { this._listPath = val; return this; }


  
  @Override
  public XContentBuilder toXContent(XContentBuilder builder, ToXContent.Params params) throws IOException {
    builder.startObject();
    if (_attachmentTemplate != null) {
      builder.field(ATTACHMENT_TEMPLATE.getPreferredName());
      _attachmentTemplate.toXContent(builder, params);
    }
    if (_listPath != null) {
      builder.field(LIST_PATH.getPreferredName(), _listPath);
    }
    builder.endObject();
    return builder;
  }

  @Override
  public SlackDynamicAttachment fromXContent(XContentParser parser) throws IOException, XContentParseException {
    return SlackDynamicAttachment.PARSER.apply(parser, null);
  }

  public static final ObjectParser<SlackDynamicAttachment, Void> PARSER =
    new ObjectParser<>(SlackDynamicAttachment.class.getName(), false, SlackDynamicAttachment::new);

  static {
    PARSER.declareObject(SlackDynamicAttachment::setAttachmentTemplate, (p, t) -> SlackAttachment.PARSER.apply(p, t), ATTACHMENT_TEMPLATE);
    PARSER.declareString(SlackDynamicAttachment::setListPath, LIST_PATH);
  }

}
