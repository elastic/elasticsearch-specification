
package org.elasticsearch.query_dsl.full_text.intervals;

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
import org.elasticsearch.query_dsl.full_text.intervals.*;

public class Intervals  implements XContentable<Intervals> {
  
  static final ParseField FILTER = new ParseField("filter");
  private IntervalsFilter _filter;
  public IntervalsFilter getFilter() { return this._filter; }
  public Intervals setFilter(IntervalsFilter val) { this._filter = val; return this; }


  
  @Override
  public XContentBuilder toXContent(XContentBuilder builder, ToXContent.Params params) throws IOException {
    builder.startObject();
    if (_filter != null) {
      builder.field(FILTER.getPreferredName());
      _filter.toXContent(builder, params);
    }
    builder.endObject();
    return builder;
  }

  @Override
  public Intervals fromXContent(XContentParser parser) throws IOException, XContentParseException {
    return Intervals.PARSER.apply(parser, null);
  }

  public static final ObjectParser<Intervals, Void> PARSER =
    new ObjectParser<>(Intervals.class.getName(), false, Intervals::new);

  static {
    PARSER.declareObject(Intervals::setFilter, (p, t) -> IntervalsFilter.PARSER.apply(p, t), FILTER);
  }

}
