
package org.elasticsearch.aggregations.pipeline.serial_differencing;

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

public class SerialDifferencingAggregation  implements XContentable<SerialDifferencingAggregation> {
  
  static final ParseField LAG = new ParseField("lag");
  private int _lag;
  private boolean _lag$isSet;
  public int getLag() { return this._lag; }
  public SerialDifferencingAggregation setLag(int val) {
    this._lag = val;
    _lag$isSet = true;
    return this;
  }


  
  @Override
  public void toXContentInternal(XContentBuilder builder, ToXContent.Params params) throws IOException {
    
    if (_lag$isSet) {
      builder.field(LAG.getPreferredName(), _lag);
    }
  }

  @Override
  public SerialDifferencingAggregation fromXContent(XContentParser parser) throws IOException, XContentParseException {
    return SerialDifferencingAggregation.PARSER.apply(parser, null);
  }

  public static final ObjectParser<SerialDifferencingAggregation, Void> PARSER =
    new ObjectParser<>(SerialDifferencingAggregation.class.getName(), false, SerialDifferencingAggregation::new);

  static {
    PARSER.declareInt(SerialDifferencingAggregation::setLag, LAG);
  }

}
