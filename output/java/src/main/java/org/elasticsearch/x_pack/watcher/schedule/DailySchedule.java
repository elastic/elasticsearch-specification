
package org.elasticsearch.x_pack.watcher.schedule;

import java.io.IOException;
import java.util.Date;
import java.util.List;
import java.util.HashMap;
import java.time.Instant;
import java.time.format.DateTimeFormatter;
import org.elasticsearch.*;
import org.elasticsearch.common.ParseField;
import org.elasticsearch.common.xcontent.*;
import org.elasticsearch.x_pack.watcher.schedule.*;

public class DailySchedule  implements XContentable<DailySchedule> {
  
  static final ParseField AT = new ParseField("at");
  private Union2<List<String>, TimeOfDay> _at;
  public Union2<List<String>, TimeOfDay> getAt() { return this._at; }
  public DailySchedule setAt(Union2<List<String>, TimeOfDay> val) { this._at = val; return this; }


  
  @Override
  public void toXContentInternal(XContentBuilder builder, ToXContent.Params params) throws IOException {
    
    if (_at != null) {
      builder.field(AT.getPreferredName());
      _at.toXContent(builder, params);
    }
  }

  @Override
  public DailySchedule fromXContent(XContentParser parser) throws IOException, XContentParseException {
    return DailySchedule.PARSER.apply(parser, null);
  }

  public static final ObjectParser<DailySchedule, Void> PARSER =
    new ObjectParser<>(DailySchedule.class.getName(), false, DailySchedule::new);

  static {
    PARSER.declareObject(DailySchedule::setAt, (p, t) ->  new Union2<List<String>, TimeOfDay>(), AT);
  }

}
