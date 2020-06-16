
package org.elasticsearch.x_pack.machine_learning.job.results;

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
import org.elasticsearch.x_pack.machine_learning.job.results.*;

public class AnomalyCause  implements XContentable<AnomalyCause> {
  
  static final ParseField ACTUAL = new ParseField("actual");
  private List<Double> _actual;
  public List<Double> getActual() { return this._actual; }
  public AnomalyCause setActual(List<Double> val) { this._actual = val; return this; }


  static final ParseField BY_FIELD_NAME = new ParseField("by_field_name");
  private String _byFieldName;
  public String getByFieldName() { return this._byFieldName; }
  public AnomalyCause setByFieldName(String val) { this._byFieldName = val; return this; }


  static final ParseField BY_FIELD_VALUE = new ParseField("by_field_value");
  private String _byFieldValue;
  public String getByFieldValue() { return this._byFieldValue; }
  public AnomalyCause setByFieldValue(String val) { this._byFieldValue = val; return this; }


  static final ParseField CORRELATED_BY_FIELD_VALUE = new ParseField("correlated_by_field_value");
  private String _correlatedByFieldValue;
  public String getCorrelatedByFieldValue() { return this._correlatedByFieldValue; }
  public AnomalyCause setCorrelatedByFieldValue(String val) { this._correlatedByFieldValue = val; return this; }


  static final ParseField FIELD_NAME = new ParseField("field_name");
  private String _fieldName;
  public String getFieldName() { return this._fieldName; }
  public AnomalyCause setFieldName(String val) { this._fieldName = val; return this; }


  static final ParseField FUNCTION = new ParseField("function");
  private String _function;
  public String getFunction() { return this._function; }
  public AnomalyCause setFunction(String val) { this._function = val; return this; }


  static final ParseField FUNCTION_DESCRIPTION = new ParseField("function_description");
  private String _functionDescription;
  public String getFunctionDescription() { return this._functionDescription; }
  public AnomalyCause setFunctionDescription(String val) { this._functionDescription = val; return this; }


  static final ParseField INFLUENCERS = new ParseField("influencers");
  private List<Influence> _influencers;
  public List<Influence> getInfluencers() { return this._influencers; }
  public AnomalyCause setInfluencers(List<Influence> val) { this._influencers = val; return this; }


  static final ParseField OVER_FIELD_NAME = new ParseField("over_field_name");
  private String _overFieldName;
  public String getOverFieldName() { return this._overFieldName; }
  public AnomalyCause setOverFieldName(String val) { this._overFieldName = val; return this; }


  static final ParseField OVER_FIELD_VALUE = new ParseField("over_field_value");
  private String _overFieldValue;
  public String getOverFieldValue() { return this._overFieldValue; }
  public AnomalyCause setOverFieldValue(String val) { this._overFieldValue = val; return this; }


  static final ParseField PARTITION_FIELD_NAME = new ParseField("partition_field_name");
  private String _partitionFieldName;
  public String getPartitionFieldName() { return this._partitionFieldName; }
  public AnomalyCause setPartitionFieldName(String val) { this._partitionFieldName = val; return this; }


  static final ParseField PARTITION_FIELD_VALUE = new ParseField("partition_field_value");
  private String _partitionFieldValue;
  public String getPartitionFieldValue() { return this._partitionFieldValue; }
  public AnomalyCause setPartitionFieldValue(String val) { this._partitionFieldValue = val; return this; }


  static final ParseField PROBABILITY = new ParseField("probability");
  private Double _probability;
  public Double getProbability() { return this._probability; }
  public AnomalyCause setProbability(Double val) { this._probability = val; return this; }


  static final ParseField TYPICAL = new ParseField("typical");
  private List<Double> _typical;
  public List<Double> getTypical() { return this._typical; }
  public AnomalyCause setTypical(List<Double> val) { this._typical = val; return this; }


  
  @Override
  public XContentBuilder toXContent(XContentBuilder builder, ToXContent.Params params) throws IOException {
    builder.startObject();
    if (_actual != null) {
      builder.array(ACTUAL.getPreferredName(), _actual);
    }
    if (_byFieldName != null) {
      builder.field(BY_FIELD_NAME.getPreferredName(), _byFieldName);
    }
    if (_byFieldValue != null) {
      builder.field(BY_FIELD_VALUE.getPreferredName(), _byFieldValue);
    }
    if (_correlatedByFieldValue != null) {
      builder.field(CORRELATED_BY_FIELD_VALUE.getPreferredName(), _correlatedByFieldValue);
    }
    if (_fieldName != null) {
      builder.field(FIELD_NAME.getPreferredName(), _fieldName);
    }
    if (_function != null) {
      builder.field(FUNCTION.getPreferredName(), _function);
    }
    if (_functionDescription != null) {
      builder.field(FUNCTION_DESCRIPTION.getPreferredName(), _functionDescription);
    }
    if (_influencers != null) {
      builder.array(INFLUENCERS.getPreferredName(), _influencers);
    }
    if (_overFieldName != null) {
      builder.field(OVER_FIELD_NAME.getPreferredName(), _overFieldName);
    }
    if (_overFieldValue != null) {
      builder.field(OVER_FIELD_VALUE.getPreferredName(), _overFieldValue);
    }
    if (_partitionFieldName != null) {
      builder.field(PARTITION_FIELD_NAME.getPreferredName(), _partitionFieldName);
    }
    if (_partitionFieldValue != null) {
      builder.field(PARTITION_FIELD_VALUE.getPreferredName(), _partitionFieldValue);
    }
    if (_probability != null) {
      builder.field(PROBABILITY.getPreferredName(), _probability);
    }
    if (_typical != null) {
      builder.array(TYPICAL.getPreferredName(), _typical);
    }
    builder.endObject();
    return builder;
  }

  @Override
  public AnomalyCause fromXContent(XContentParser parser) throws IOException, XContentParseException {
    return AnomalyCause.PARSER.apply(parser, null);
  }

  public static final ObjectParser<AnomalyCause, Void> PARSER =
    new ObjectParser<>(AnomalyCause.class.getName(), false, AnomalyCause::new);

  static {
    PARSER.declareDoubleArray(AnomalyCause::setActual, ACTUAL);
    PARSER.declareString(AnomalyCause::setByFieldName, BY_FIELD_NAME);
    PARSER.declareString(AnomalyCause::setByFieldValue, BY_FIELD_VALUE);
    PARSER.declareString(AnomalyCause::setCorrelatedByFieldValue, CORRELATED_BY_FIELD_VALUE);
    PARSER.declareString(AnomalyCause::setFieldName, FIELD_NAME);
    PARSER.declareString(AnomalyCause::setFunction, FUNCTION);
    PARSER.declareString(AnomalyCause::setFunctionDescription, FUNCTION_DESCRIPTION);
    PARSER.declareObjectArray(AnomalyCause::setInfluencers, (p, t) -> Influence.PARSER.apply(p, t), INFLUENCERS);
    PARSER.declareString(AnomalyCause::setOverFieldName, OVER_FIELD_NAME);
    PARSER.declareString(AnomalyCause::setOverFieldValue, OVER_FIELD_VALUE);
    PARSER.declareString(AnomalyCause::setPartitionFieldName, PARTITION_FIELD_NAME);
    PARSER.declareString(AnomalyCause::setPartitionFieldValue, PARTITION_FIELD_VALUE);
    PARSER.declareDouble(AnomalyCause::setProbability, PROBABILITY);
    PARSER.declareDoubleArray(AnomalyCause::setTypical, TYPICAL);
  }

}
