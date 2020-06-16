
package org.elasticsearch.aggregations.metric.cardinality;

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

public class CardinalityAggregation  implements XContentable<CardinalityAggregation> {
  
  static final ParseField PRECISION_THRESHOLD = new ParseField("precision_threshold");
  private Integer _precisionThreshold;
  public Integer getPrecisionThreshold() { return this._precisionThreshold; }
  public CardinalityAggregation setPrecisionThreshold(Integer val) { this._precisionThreshold = val; return this; }


  static final ParseField REHASH = new ParseField("rehash");
  private Boolean _rehash;
  public Boolean getRehash() { return this._rehash; }
  public CardinalityAggregation setRehash(Boolean val) { this._rehash = val; return this; }


  
  @Override
  public XContentBuilder toXContent(XContentBuilder builder, ToXContent.Params params) throws IOException {
    builder.startObject();
    if (_precisionThreshold != null) {
      builder.field(PRECISION_THRESHOLD.getPreferredName(), _precisionThreshold);
    }
    if (_rehash != null) {
      builder.field(REHASH.getPreferredName(), _rehash);
    }
    builder.endObject();
    return builder;
  }

  @Override
  public CardinalityAggregation fromXContent(XContentParser parser) throws IOException, XContentParseException {
    return CardinalityAggregation.PARSER.apply(parser, null);
  }

  public static final ObjectParser<CardinalityAggregation, Void> PARSER =
    new ObjectParser<>(CardinalityAggregation.class.getName(), false, CardinalityAggregation::new);

  static {
    PARSER.declareInt(CardinalityAggregation::setPrecisionThreshold, PRECISION_THRESHOLD);
    PARSER.declareBoolean(CardinalityAggregation::setRehash, REHASH);
  }

}
