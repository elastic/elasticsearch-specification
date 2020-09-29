
package org.elasticsearch.aggregations.metric.percentiles;

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

public class HdrMethod  implements XContentable<HdrMethod> {
  
  static final ParseField NUMBER_OF_SIGNIFICANT_VALUE_DIGITS = new ParseField("number_of_significant_value_digits");
  private int _numberOfSignificantValueDigits;
  private boolean _numberOfSignificantValueDigits$isSet;
  public int getNumberOfSignificantValueDigits() { return this._numberOfSignificantValueDigits; }
  public HdrMethod setNumberOfSignificantValueDigits(int val) {
    this._numberOfSignificantValueDigits = val;
    _numberOfSignificantValueDigits$isSet = true;
    return this;
  }


  
  @Override
  public void toXContentInternal(XContentBuilder builder, ToXContent.Params params) throws IOException {
    
    if (_numberOfSignificantValueDigits$isSet) {
      builder.field(NUMBER_OF_SIGNIFICANT_VALUE_DIGITS.getPreferredName(), _numberOfSignificantValueDigits);
    }
  }

  @Override
  public HdrMethod fromXContent(XContentParser parser) throws IOException, XContentParseException {
    return HdrMethod.PARSER.apply(parser, null);
  }

  public static final ObjectParser<HdrMethod, Void> PARSER =
    new ObjectParser<>(HdrMethod.class.getName(), false, HdrMethod::new);

  static {
    PARSER.declareInt(HdrMethod::setNumberOfSignificantValueDigits, NUMBER_OF_SIGNIFICANT_VALUE_DIGITS);
  }

}
