
package org.elasticsearch.modules.indices.fielddata;

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

public class FielddataFrequencyFilter  implements XContentable<FielddataFrequencyFilter> {
  
  static final ParseField MAX = new ParseField("max");
  private Double _max;
  public Double getMax() { return this._max; }
  public FielddataFrequencyFilter setMax(Double val) { this._max = val; return this; }


  static final ParseField MIN = new ParseField("min");
  private Double _min;
  public Double getMin() { return this._min; }
  public FielddataFrequencyFilter setMin(Double val) { this._min = val; return this; }


  static final ParseField MIN_SEGMENT_SIZE = new ParseField("min_segment_size");
  private Integer _minSegmentSize;
  public Integer getMinSegmentSize() { return this._minSegmentSize; }
  public FielddataFrequencyFilter setMinSegmentSize(Integer val) { this._minSegmentSize = val; return this; }


  
  @Override
  public XContentBuilder toXContent(XContentBuilder builder, ToXContent.Params params) throws IOException {
    builder.startObject();
    if (_max != null) {
      builder.field(MAX.getPreferredName(), _max);
    }
    if (_min != null) {
      builder.field(MIN.getPreferredName(), _min);
    }
    if (_minSegmentSize != null) {
      builder.field(MIN_SEGMENT_SIZE.getPreferredName(), _minSegmentSize);
    }
    builder.endObject();
    return builder;
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
