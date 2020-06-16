
package org.elasticsearch.x_pack.watcher.schedule;

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
import org.elasticsearch.internal.*;

public class TimeOfMonth  implements XContentable<TimeOfMonth> {
  
  static final ParseField AT = new ParseField("at");
  private List<String> _at;
  public List<String> getAt() { return this._at; }
  public TimeOfMonth setAt(List<String> val) { this._at = val; return this; }


  static final ParseField ON = new ParseField("on");
  private List<Integer> _on;
  public List<Integer> getOn() { return this._on; }
  public TimeOfMonth setOn(List<Integer> val) { this._on = val; return this; }


  
  @Override
  public XContentBuilder toXContent(XContentBuilder builder, ToXContent.Params params) throws IOException {
    builder.startObject();
    if (_at != null) {
      builder.array(AT.getPreferredName(), _at);
    }
    if (_on != null) {
      builder.array(ON.getPreferredName(), _on);
    }
    builder.endObject();
    return builder;
  }

  @Override
  public TimeOfMonth fromXContent(XContentParser parser) throws IOException, XContentParseException {
    return TimeOfMonth.PARSER.apply(parser, null);
  }

  public static final ObjectParser<TimeOfMonth, Void> PARSER =
    new ObjectParser<>(TimeOfMonth.class.getName(), false, TimeOfMonth::new);

  static {
    PARSER.declareStringArray(TimeOfMonth::setAt, AT);
    PARSER.declareIntArray(TimeOfMonth::setOn, ON);
  }

}
