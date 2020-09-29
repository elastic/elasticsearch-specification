
package org.elasticsearch.analysis.token_filters;

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
import org.elasticsearch.analysis.token_filters.*;

public class LengthTokenFilter extends TokenFilterBase implements XContentable<LengthTokenFilter> {
  
  static final ParseField MAX = new ParseField("max");
  private int _max;
  private boolean _max$isSet;
  public int getMax() { return this._max; }
  public LengthTokenFilter setMax(int val) {
    this._max = val;
    _max$isSet = true;
    return this;
  }

  static final ParseField MIN = new ParseField("min");
  private int _min;
  private boolean _min$isSet;
  public int getMin() { return this._min; }
  public LengthTokenFilter setMin(int val) {
    this._min = val;
    _min$isSet = true;
    return this;
  }


  
  @Override
  public void toXContentInternal(XContentBuilder builder, ToXContent.Params params) throws IOException {
    super.toXContentInternal(builder, params);
    if (_max$isSet) {
      builder.field(MAX.getPreferredName(), _max);
    }
    if (_min$isSet) {
      builder.field(MIN.getPreferredName(), _min);
    }
  }

  @Override
  public LengthTokenFilter fromXContent(XContentParser parser) throws IOException, XContentParseException {
    return LengthTokenFilter.PARSER.apply(parser, null);
  }

  public static final ObjectParser<LengthTokenFilter, Void> PARSER =
    new ObjectParser<>(LengthTokenFilter.class.getName(), false, LengthTokenFilter::new);

  static {
    PARSER.declareInt(LengthTokenFilter::setMax, MAX);
    PARSER.declareInt(LengthTokenFilter::setMin, MIN);
  }

}
