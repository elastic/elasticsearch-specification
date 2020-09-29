
package org.elasticsearch.aggregations.metric.cardinality;

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

public class CardinalityAggregation  implements XContentable<CardinalityAggregation> {
  
  static final ParseField PRECISION_THRESHOLD = new ParseField("precision_threshold");
  private int _precisionThreshold;
  private boolean _precisionThreshold$isSet;
  public int getPrecisionThreshold() { return this._precisionThreshold; }
  public CardinalityAggregation setPrecisionThreshold(int val) {
    this._precisionThreshold = val;
    _precisionThreshold$isSet = true;
    return this;
  }

  static final ParseField REHASH = new ParseField("rehash");
  private Boolean _rehash;
  public Boolean getRehash() { return this._rehash; }
  public CardinalityAggregation setRehash(Boolean val) { this._rehash = val; return this; }

  static final ParseField FIELD = new ParseField("field");
  private String _field;
  public String getField() { return this._field; }
  public CardinalityAggregation setField(String val) { this._field = val; return this; }


  
  @Override
  public void toXContentInternal(XContentBuilder builder, ToXContent.Params params) throws IOException {
    
    if (_precisionThreshold$isSet) {
      builder.field(PRECISION_THRESHOLD.getPreferredName(), _precisionThreshold);
    }
    if (_rehash != null) {
      builder.field(REHASH.getPreferredName(), _rehash);
    }
    if (_field != null) {
      builder.field(FIELD.getPreferredName(), _field);
    }
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
    PARSER.declareString(CardinalityAggregation::setField, FIELD);
  }

}
