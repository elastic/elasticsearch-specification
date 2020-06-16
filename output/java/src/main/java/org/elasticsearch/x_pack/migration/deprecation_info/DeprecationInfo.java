
package org.elasticsearch.x_pack.migration.deprecation_info;

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
import org.elasticsearch.x_pack.migration.deprecation_info.*;

public class DeprecationInfo  implements XContentable<DeprecationInfo> {
  
  static final ParseField DETAILS = new ParseField("details");
  private String _details;
  public String getDetails() { return this._details; }
  public DeprecationInfo setDetails(String val) { this._details = val; return this; }


  static final ParseField LEVEL = new ParseField("level");
  private DeprecationWarningLevel _level;
  public DeprecationWarningLevel getLevel() { return this._level; }
  public DeprecationInfo setLevel(DeprecationWarningLevel val) { this._level = val; return this; }


  static final ParseField MESSAGE = new ParseField("message");
  private String _message;
  public String getMessage() { return this._message; }
  public DeprecationInfo setMessage(String val) { this._message = val; return this; }


  static final ParseField URL = new ParseField("url");
  private String _url;
  public String getUrl() { return this._url; }
  public DeprecationInfo setUrl(String val) { this._url = val; return this; }


  
  @Override
  public XContentBuilder toXContent(XContentBuilder builder, ToXContent.Params params) throws IOException {
    builder.startObject();
    if (_details != null) {
      builder.field(DETAILS.getPreferredName(), _details);
    }
    if (_level != null) {
      builder.field(LEVEL.getPreferredName());
      _level.toXContent(builder, params);
    }
    if (_message != null) {
      builder.field(MESSAGE.getPreferredName(), _message);
    }
    if (_url != null) {
      builder.field(URL.getPreferredName(), _url);
    }
    builder.endObject();
    return builder;
  }

  @Override
  public DeprecationInfo fromXContent(XContentParser parser) throws IOException, XContentParseException {
    return DeprecationInfo.PARSER.apply(parser, null);
  }

  public static final ObjectParser<DeprecationInfo, Void> PARSER =
    new ObjectParser<>(DeprecationInfo.class.getName(), false, DeprecationInfo::new);

  static {
    PARSER.declareString(DeprecationInfo::setDetails, DETAILS);
    PARSER.declareField(DeprecationInfo::setLevel, (p, t) -> DeprecationWarningLevel.PARSER.apply(p), LEVEL, ObjectParser.ValueType.STRING_OR_NULL);
    PARSER.declareString(DeprecationInfo::setMessage, MESSAGE);
    PARSER.declareString(DeprecationInfo::setUrl, URL);
  }

}
