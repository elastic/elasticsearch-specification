
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
import org.elasticsearch.internal.*;

public class IntervalsAllOf  implements XContentable<IntervalsAllOf> {
  
  static final ParseField INTERVALS = new ParseField("intervals");
  private List<IntervalsContainer> _intervals;
  public List<IntervalsContainer> getIntervals() { return this._intervals; }
  public IntervalsAllOf setIntervals(List<IntervalsContainer> val) { this._intervals = val; return this; }

  static final ParseField MAX_GAPS = new ParseField("max_gaps");
  private int _maxGaps;
  private boolean _maxGaps$isSet;
  public int getMaxGaps() { return this._maxGaps; }
  public IntervalsAllOf setMaxGaps(int val) {
    this._maxGaps = val;
    _maxGaps$isSet = true;
    return this;
  }

  static final ParseField ORDERED = new ParseField("ordered");
  private Boolean _ordered;
  public Boolean getOrdered() { return this._ordered; }
  public IntervalsAllOf setOrdered(Boolean val) { this._ordered = val; return this; }

  static final ParseField FILTER = new ParseField("filter");
  private IntervalsFilter _filter;
  public IntervalsFilter getFilter() { return this._filter; }
  public IntervalsAllOf setFilter(IntervalsFilter val) { this._filter = val; return this; }


  
  @Override
  public void toXContentInternal(XContentBuilder builder, ToXContent.Params params) throws IOException {
    
    if (_intervals != null) {
      builder.array(INTERVALS.getPreferredName(), _intervals);
    }
    if (_maxGaps$isSet) {
      builder.field(MAX_GAPS.getPreferredName(), _maxGaps);
    }
    if (_ordered != null) {
      builder.field(ORDERED.getPreferredName(), _ordered);
    }
    if (_filter != null) {
      builder.field(FILTER.getPreferredName());
      _filter.toXContent(builder, params);
    }
  }

  @Override
  public IntervalsAllOf fromXContent(XContentParser parser) throws IOException, XContentParseException {
    return IntervalsAllOf.PARSER.apply(parser, null);
  }

  public static final ObjectParser<IntervalsAllOf, Void> PARSER =
    new ObjectParser<>(IntervalsAllOf.class.getName(), false, IntervalsAllOf::new);

  static {
    PARSER.declareObjectArray(IntervalsAllOf::setIntervals, (p, t) -> IntervalsContainer.PARSER.apply(p, t), INTERVALS);
    PARSER.declareInt(IntervalsAllOf::setMaxGaps, MAX_GAPS);
    PARSER.declareBoolean(IntervalsAllOf::setOrdered, ORDERED);
    PARSER.declareObject(IntervalsAllOf::setFilter, (p, t) -> IntervalsFilter.PARSER.apply(p, t), FILTER);
  }

}
