
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

public class PartitionScore  implements XContentable<PartitionScore> {
  
  static final ParseField INITIAL_RECORD_SCORE = new ParseField("initial_record_score");
  private Double _initialRecordScore;
  public Double getInitialRecordScore() { return this._initialRecordScore; }
  public PartitionScore setInitialRecordScore(Double val) { this._initialRecordScore = val; return this; }


  static final ParseField PARTITION_FIELD_NAME = new ParseField("partition_field_name");
  private String _partitionFieldName;
  public String getPartitionFieldName() { return this._partitionFieldName; }
  public PartitionScore setPartitionFieldName(String val) { this._partitionFieldName = val; return this; }


  static final ParseField PARTITION_FIELD_VALUE = new ParseField("partition_field_value");
  private String _partitionFieldValue;
  public String getPartitionFieldValue() { return this._partitionFieldValue; }
  public PartitionScore setPartitionFieldValue(String val) { this._partitionFieldValue = val; return this; }


  static final ParseField PROBABILITY = new ParseField("probability");
  private Double _probability;
  public Double getProbability() { return this._probability; }
  public PartitionScore setProbability(Double val) { this._probability = val; return this; }


  static final ParseField RECORD_SCORE = new ParseField("record_score");
  private Double _recordScore;
  public Double getRecordScore() { return this._recordScore; }
  public PartitionScore setRecordScore(Double val) { this._recordScore = val; return this; }


  
  @Override
  public XContentBuilder toXContent(XContentBuilder builder, ToXContent.Params params) throws IOException {
    builder.startObject();
    if (_initialRecordScore != null) {
      builder.field(INITIAL_RECORD_SCORE.getPreferredName(), _initialRecordScore);
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
    if (_recordScore != null) {
      builder.field(RECORD_SCORE.getPreferredName(), _recordScore);
    }
    builder.endObject();
    return builder;
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
