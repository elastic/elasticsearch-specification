
package org.elasticsearch.aggregations.metric.weighted_average;

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
import org.elasticsearch.aggregations.metric.weighted_average.*;

public class WeightedAverageAggregation  implements XContentable<WeightedAverageAggregation> {
  
  static final ParseField FORMAT = new ParseField("format");
  private String _format;
  public String getFormat() { return this._format; }
  public WeightedAverageAggregation setFormat(String val) { this._format = val; return this; }


  static final ParseField VALUE = new ParseField("value");
  private WeightedAverageValue _value;
  public WeightedAverageValue getValue() { return this._value; }
  public WeightedAverageAggregation setValue(WeightedAverageValue val) { this._value = val; return this; }


  static final ParseField VALUE_TYPE = new ParseField("value_type");
  private ValueType _valueType;
  public ValueType getValueType() { return this._valueType; }
  public WeightedAverageAggregation setValueType(ValueType val) { this._valueType = val; return this; }


  static final ParseField WEIGHT = new ParseField("weight");
  private WeightedAverageValue _weight;
  public WeightedAverageValue getWeight() { return this._weight; }
  public WeightedAverageAggregation setWeight(WeightedAverageValue val) { this._weight = val; return this; }


  
  @Override
  public XContentBuilder toXContent(XContentBuilder builder, ToXContent.Params params) throws IOException {
    builder.startObject();
    if (_format != null) {
      builder.field(FORMAT.getPreferredName(), _format);
    }
    if (_value != null) {
      builder.field(VALUE.getPreferredName());
      _value.toXContent(builder, params);
    }
    if (_valueType != null) {
      builder.field(VALUE_TYPE.getPreferredName());
      _valueType.toXContent(builder, params);
    }
    if (_weight != null) {
      builder.field(WEIGHT.getPreferredName());
      _weight.toXContent(builder, params);
    }
    builder.endObject();
    return builder;
  }

  @Override
  public WeightedAverageAggregation fromXContent(XContentParser parser) throws IOException, XContentParseException {
    return WeightedAverageAggregation.PARSER.apply(parser, null);
  }

  public static final ObjectParser<WeightedAverageAggregation, Void> PARSER =
    new ObjectParser<>(WeightedAverageAggregation.class.getName(), false, WeightedAverageAggregation::new);

  static {
    PARSER.declareString(WeightedAverageAggregation::setFormat, FORMAT);
    PARSER.declareObject(WeightedAverageAggregation::setValue, (p, t) -> WeightedAverageValue.PARSER.apply(p, t), VALUE);
    PARSER.declareField(WeightedAverageAggregation::setValueType, (p, t) -> ValueType.PARSER.apply(p), VALUE_TYPE, ObjectParser.ValueType.STRING_OR_NULL);
    PARSER.declareObject(WeightedAverageAggregation::setWeight, (p, t) -> WeightedAverageValue.PARSER.apply(p, t), WEIGHT);
  }

}
