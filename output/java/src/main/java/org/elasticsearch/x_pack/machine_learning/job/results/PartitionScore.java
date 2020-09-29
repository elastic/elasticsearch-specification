
package org.elasticsearch.x_pack.machine_learning.job.results;

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

public class PartitionScore  implements XContentable<PartitionScore> {
  
  static final ParseField INITIAL_RECORD_SCORE = new ParseField("initial_record_score");
  private double _initialRecordScore;
  private boolean _initialRecordScore$isSet;
  public double getInitialRecordScore() { return this._initialRecordScore; }
  public PartitionScore setInitialRecordScore(double val) {
    this._initialRecordScore = val;
    _initialRecordScore$isSet = true;
    return this;
  }

  static final ParseField PARTITION_FIELD_NAME = new ParseField("partition_field_name");
  private String _partitionFieldName;
  public String getPartitionFieldName() { return this._partitionFieldName; }
  public PartitionScore setPartitionFieldName(String val) { this._partitionFieldName = val; return this; }

  static final ParseField PARTITION_FIELD_VALUE = new ParseField("partition_field_value");
  private String _partitionFieldValue;
  public String getPartitionFieldValue() { return this._partitionFieldValue; }
  public PartitionScore setPartitionFieldValue(String val) { this._partitionFieldValue = val; return this; }

  static final ParseField PROBABILITY = new ParseField("probability");
  private double _probability;
  private boolean _probability$isSet;
  public double getProbability() { return this._probability; }
  public PartitionScore setProbability(double val) {
    this._probability = val;
    _probability$isSet = true;
    return this;
  }

  static final ParseField RECORD_SCORE = new ParseField("record_score");
  private double _recordScore;
  private boolean _recordScore$isSet;
  public double getRecordScore() { return this._recordScore; }
  public PartitionScore setRecordScore(double val) {
    this._recordScore = val;
    _recordScore$isSet = true;
    return this;
  }


  
  @Override
  public void toXContentInternal(XContentBuilder builder, ToXContent.Params params) throws IOException {
    
    if (_initialRecordScore$isSet) {
      builder.field(INITIAL_RECORD_SCORE.getPreferredName(), _initialRecordScore);
    }
    if (_partitionFieldName != null) {
      builder.field(PARTITION_FIELD_NAME.getPreferredName(), _partitionFieldName);
    }
    if (_partitionFieldValue != null) {
      builder.field(PARTITION_FIELD_VALUE.getPreferredName(), _partitionFieldValue);
    }
    if (_probability$isSet) {
      builder.field(PROBABILITY.getPreferredName(), _probability);
    }
    if (_recordScore$isSet) {
      builder.field(RECORD_SCORE.getPreferredName(), _recordScore);
    }
  }

  @Override
  public PartitionScore fromXContent(XContentParser parser) throws IOException, XContentParseException {
    return PartitionScore.PARSER.apply(parser, null);
  }

  public static final ObjectParser<PartitionScore, Void> PARSER =
    new ObjectParser<>(PartitionScore.class.getName(), false, PartitionScore::new);

  static {
    PARSER.declareDouble(PartitionScore::setInitialRecordScore, INITIAL_RECORD_SCORE);
    PARSER.declareString(PartitionScore::setPartitionFieldName, PARTITION_FIELD_NAME);
    PARSER.declareString(PartitionScore::setPartitionFieldValue, PARTITION_FIELD_VALUE);
    PARSER.declareDouble(PartitionScore::setProbability, PROBABILITY);
    PARSER.declareDouble(PartitionScore::setRecordScore, RECORD_SCORE);
  }

}
