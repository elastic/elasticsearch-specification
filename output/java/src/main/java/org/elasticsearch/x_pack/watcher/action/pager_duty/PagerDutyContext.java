
package org.elasticsearch.x_pack.watcher.action.pager_duty;

import java.io.IOException;
import java.util.Date;
import java.util.List;
import java.util.HashMap;
import java.time.Instant;
import java.time.format.DateTimeFormatter;
import org.elasticsearch.*;
import org.elasticsearch.common.ParseField;
import org.elasticsearch.common.xcontent.*;
import org.elasticsearch.x_pack.watcher.action.pager_duty.*;

public class PagerDutyContext  implements XContentable<PagerDutyContext> {
  
  static final ParseField HREF = new ParseField("href");
  private String _href;
  public String getHref() { return this._href; }
  public PagerDutyContext setHref(String val) { this._href = val; return this; }

  static final ParseField SRC = new ParseField("src");
  private String _src;
  public String getSrc() { return this._src; }
  public PagerDutyContext setSrc(String val) { this._src = val; return this; }

  static final ParseField TYPE = new ParseField("type");
  private PagerDutyContextType _type;
  public PagerDutyContextType getType() { return this._type; }
  public PagerDutyContext setType(PagerDutyContextType val) { this._type = val; return this; }


  
  @Override
  public void toXContentInternal(XContentBuilder builder, ToXContent.Params params) throws IOException {
    
    if (_href != null) {
      builder.field(HREF.getPreferredName(), _href);
    }
    if (_src != null) {
      builder.field(SRC.getPreferredName(), _src);
    }
    if (_type != null) {
      builder.field(TYPE.getPreferredName());
      _type.toXContent(builder, params);
    }
  }

  @Override
  public PagerDutyContext fromXContent(XContentParser parser) throws IOException, XContentParseException {
    return PagerDutyContext.PARSER.apply(parser, null);
  }

  public static final ObjectParser<PagerDutyContext, Void> PARSER =
    new ObjectParser<>(PagerDutyContext.class.getName(), false, PagerDutyContext::new);

  static {
    PARSER.declareString(PagerDutyContext::setHref, HREF);
    PARSER.declareString(PagerDutyContext::setSrc, SRC);
    PARSER.declareField(PagerDutyContext::setType, (p, t) -> PagerDutyContextType.PARSER.apply(p), TYPE, ObjectParser.ValueType.STRING_OR_NULL);
  }

}
