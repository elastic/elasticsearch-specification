
package org.elasticsearch.aggregations.metric.boxplot;

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

public class BoxplotAggregation  implements XContentable<BoxplotAggregation> {
  
  static final ParseField COMPRESSION = new ParseField("compression");
  private double _compression;
  private boolean _compression$isSet;
  public double getCompression() { return this._compression; }
  public BoxplotAggregation setCompression(double val) {
    this._compression = val;
    _compression$isSet = true;
    return this;
  }


  
  @Override
  public void toXContentInternal(XContentBuilder builder, ToXContent.Params params) throws IOException {
    
    if (_compression$isSet) {
      builder.field(COMPRESSION.getPreferredName(), _compression);
    }
  }

  @Override
  public BoxplotAggregation fromXContent(XContentParser parser) throws IOException, XContentParseException {
    return BoxplotAggregation.PARSER.apply(parser, null);
  }

  public static final ObjectParser<BoxplotAggregation, Void> PARSER =
    new ObjectParser<>(BoxplotAggregation.class.getName(), false, BoxplotAggregation::new);

  static {
    PARSER.declareDouble(BoxplotAggregation::setCompression, COMPRESSION);
  }

}
