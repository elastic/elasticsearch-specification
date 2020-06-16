
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
import org.elasticsearch.x_pack.watcher.schedule.*;

public class DailySchedule  implements XContentable<DailySchedule> {
  
  static final ParseField AT = new ParseField("at");
  private Either<List<String>, TimeOfDay> _at;
  public Either<List<String>, TimeOfDay> getAt() { return this._at; }
  public DailySchedule setAt(Either<List<String>, TimeOfDay> val) { this._at = val; return this; }


  
  @Override
  public XContentBuilder toXContent(XContentBuilder builder, ToXContent.Params params) throws IOException {
    builder.startObject();
    if (_at != null) {
      builder.field(AT.getPreferredName());
      _at.map(builder::value /* TODO List<String> */, r-> r.toXContent(builder, params));
    }
    builder.endObject();
    return builder;
  }

  @Override
  public DailySchedule fromXContent(XContentParser parser) throws IOException, XContentParseException {
    return DailySchedule.PARSER.apply(parser, null);
  }

  public static final ObjectParser<DailySchedule, Void> PARSER =
    new ObjectParser<>(DailySchedule.class.getName(), false, DailySchedule::new);

  static {
    PARSER.declareObject(DailySchedule::setAt, (p, t) ->  new Either<List<String>, TimeOfDay>() /* TODO UnionOf */, AT);
  }

}
