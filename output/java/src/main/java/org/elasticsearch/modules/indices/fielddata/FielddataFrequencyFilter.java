
package org.elasticsearch.modules.indices.fielddata;

import java.io.IOException;
import java.util.Date;
import java.util.List;
import java.util.HashMap;
import java.time.Instant;
import java.time.format.DateTimeFormatter;
import org.elasticsearch.*;
import org.elasticsearch.common.ParseField;
import org.elasticsearch.common.xcontent.*;
import org.elasticsearch.internal.*;

public class FielddataFrequencyFilter  implements XContentable<FielddataFrequencyFilter> {
  
  static final ParseField MAX = new ParseField("max");
  private double _max;
  private boolean _max$isSet;
  public double getMax() { return this._max; }
  public FielddataFrequencyFilter setMax(double val) {
    this._max = val;
    _max$isSet = true;
    return this;
  }

  static final ParseField MIN = new ParseField("min");
  private double _min;
  private boolean _min$isSet;
  public double getMin() { return this._min; }
  public FielddataFrequencyFilter setMin(double val) {
    this._min = val;
    _min$isSet = true;
    return this;
  }

  static final ParseField MIN_SEGMENT_SIZE = new ParseField("min_segment_size");
  private int _minSegmentSize;
  private boolean _minSegmentSize$isSet;
  public int getMinSegmentSize() { return this._minSegmentSize; }
  public FielddataFrequencyFilter setMinSegmentSize(int val) {
    this._minSegmentSize = val;
    _minSegmentSize$isSet = true;
    return this;
  }


  
  @Override
  public void toXContentInternal(XContentBuilder builder, ToXContent.Params params) throws IOException {
    
    if (_max$isSet) {
      builder.field(MAX.getPreferredName(), _max);
    }
    if (_min$isSet) {
      builder.field(MIN.getPreferredName(), _min);
    }
    if (_minSegmentSize$isSet) {
      builder.field(MIN_SEGMENT_SIZE.getPreferredName(), _minSegmentSize);
    }
  }

  @Override
  public FielddataFrequencyFilter fromXContent(XContentParser parser) throws IOException, XContentParseException {
    return FielddataFrequencyFilter.PARSER.apply(parser, null);
  }

  public static final ObjectParser<FielddataFrequencyFilter, Void> PARSER =
    new ObjectParser<>(FielddataFrequencyFilter.class.getName(), false, FielddataFrequencyFilter::new);

  static {
    PARSER.declareDouble(FielddataFrequencyFilter::setMax, MAX);
    PARSER.declareDouble(FielddataFrequencyFilter::setMin, MIN);
    PARSER.declareInt(FielddataFrequencyFilter::setMinSegmentSize, MIN_SEGMENT_SIZE);
  }

}
