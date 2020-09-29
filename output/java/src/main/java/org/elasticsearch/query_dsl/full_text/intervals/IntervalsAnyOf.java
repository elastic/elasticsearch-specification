
package org.elasticsearch.query_dsl.full_text.intervals;

import java.io.IOException;
import java.util.Date;
import java.util.List;
import java.util.HashMap;
import java.time.Instant;
import java.time.format.DateTimeFormatter;
import org.elasticsearch.*;
import org.elasticsearch.common.ParseField;
import org.elasticsearch.common.xcontent.*;
import org.elasticsearch.query_dsl.full_text.intervals.*;

public class IntervalsAnyOf  implements XContentable<IntervalsAnyOf> {
  
  static final ParseField INTERVALS = new ParseField("intervals");
  private List<IntervalsContainer> _intervals;
  public List<IntervalsContainer> getIntervals() { return this._intervals; }
  public IntervalsAnyOf setIntervals(List<IntervalsContainer> val) { this._intervals = val; return this; }

  static final ParseField FILTER = new ParseField("filter");
  private IntervalsFilter _filter;
  public IntervalsFilter getFilter() { return this._filter; }
  public IntervalsAnyOf setFilter(IntervalsFilter val) { this._filter = val; return this; }


  
  @Override
  public void toXContentInternal(XContentBuilder builder, ToXContent.Params params) throws IOException {
    
    if (_intervals != null) {
      builder.array(INTERVALS.getPreferredName(), _intervals);
    }
    if (_filter != null) {
      builder.field(FILTER.getPreferredName());
      _filter.toXContent(builder, params);
    }
  }

  @Override
  public IntervalsAnyOf fromXContent(XContentParser parser) throws IOException, XContentParseException {
    return IntervalsAnyOf.PARSER.apply(parser, null);
  }

  public static final ObjectParser<IntervalsAnyOf, Void> PARSER =
    new ObjectParser<>(IntervalsAnyOf.class.getName(), false, IntervalsAnyOf::new);

  static {
    PARSER.declareObjectArray(IntervalsAnyOf::setIntervals, (p, t) -> IntervalsContainer.PARSER.apply(p, t), INTERVALS);
    PARSER.declareObject(IntervalsAnyOf::setFilter, (p, t) -> IntervalsFilter.PARSER.apply(p, t), FILTER);
  }

}
