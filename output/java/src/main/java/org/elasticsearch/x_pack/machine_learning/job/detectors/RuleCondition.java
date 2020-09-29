
package org.elasticsearch.x_pack.machine_learning.job.detectors;

import java.io.IOException;
import java.util.Date;
import java.util.List;
import java.util.HashMap;
import java.time.Instant;
import java.time.format.DateTimeFormatter;
import org.elasticsearch.*;
import org.elasticsearch.common.ParseField;
import org.elasticsearch.common.xcontent.*;
import org.elasticsearch.x_pack.machine_learning.job.detectors.*;
import org.elasticsearch.internal.*;

public class RuleCondition  implements XContentable<RuleCondition> {
  
  static final ParseField APPLIES_TO = new ParseField("applies_to");
  private AppliesTo _appliesTo;
  public AppliesTo getAppliesTo() { return this._appliesTo; }
  public RuleCondition setAppliesTo(AppliesTo val) { this._appliesTo = val; return this; }

  static final ParseField OPERATOR = new ParseField("operator");
  private ConditionOperator _operator;
  public ConditionOperator getOperator() { return this._operator; }
  public RuleCondition setOperator(ConditionOperator val) { this._operator = val; return this; }

  static final ParseField VALUE = new ParseField("value");
  private double _value;
  private boolean _value$isSet;
  public double getValue() { return this._value; }
  public RuleCondition setValue(double val) {
    this._value = val;
    _value$isSet = true;
    return this;
  }


  
  @Override
  public void toXContentInternal(XContentBuilder builder, ToXContent.Params params) throws IOException {
    
    if (_appliesTo != null) {
      builder.field(APPLIES_TO.getPreferredName());
      _appliesTo.toXContent(builder, params);
    }
    if (_operator != null) {
      builder.field(OPERATOR.getPreferredName());
      _operator.toXContent(builder, params);
    }
    if (_value$isSet) {
      builder.field(VALUE.getPreferredName(), _value);
    }
  }

  @Override
  public RuleCondition fromXContent(XContentParser parser) throws IOException, XContentParseException {
    return RuleCondition.PARSER.apply(parser, null);
  }

  public static final ObjectParser<RuleCondition, Void> PARSER =
    new ObjectParser<>(RuleCondition.class.getName(), false, RuleCondition::new);

  static {
    PARSER.declareField(RuleCondition::setAppliesTo, (p, t) -> AppliesTo.PARSER.apply(p), APPLIES_TO, ObjectParser.ValueType.STRING_OR_NULL);
    PARSER.declareField(RuleCondition::setOperator, (p, t) -> ConditionOperator.PARSER.apply(p), OPERATOR, ObjectParser.ValueType.STRING_OR_NULL);
    PARSER.declareDouble(RuleCondition::setValue, VALUE);
  }

}
