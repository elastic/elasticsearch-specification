
package org.elasticsearch.x_pack.machine_learning.machine_learning_info;

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
import org.elasticsearch.x_pack.machine_learning.machine_learning_info.*;

public class AnomalyDetectors  implements XContentable<AnomalyDetectors> {
  
  static final ParseField MODEL_MEMORY_LIMIT = new ParseField("model_memory_limit");
  private String _modelMemoryLimit;
  public String getModelMemoryLimit() { return this._modelMemoryLimit; }
  public AnomalyDetectors setModelMemoryLimit(String val) { this._modelMemoryLimit = val; return this; }


  static final ParseField CATEGORIZATION_EXAMPLES_LIMIT = new ParseField("categorization_examples_limit");
  private Integer _categorizationExamplesLimit;
  public Integer getCategorizationExamplesLimit() { return this._categorizationExamplesLimit; }
  public AnomalyDetectors setCategorizationExamplesLimit(Integer val) { this._categorizationExamplesLimit = val; return this; }


  static final ParseField MODEL_SNAPSHOT_RETENTION_DAYS = new ParseField("model_snapshot_retention_days");
  private Integer _modelSnapshotRetentionDays;
  public Integer getModelSnapshotRetentionDays() { return this._modelSnapshotRetentionDays; }
  public AnomalyDetectors setModelSnapshotRetentionDays(Integer val) { this._modelSnapshotRetentionDays = val; return this; }


  static final ParseField CATEGORIZATION_ANALYZER = new ParseField("categorization_analyzer");
  private CategorizationAnalyzer _categorizationAnalyzer;
  public CategorizationAnalyzer getCategorizationAnalyzer() { return this._categorizationAnalyzer; }
  public AnomalyDetectors setCategorizationAnalyzer(CategorizationAnalyzer val) { this._categorizationAnalyzer = val; return this; }


  
  @Override
  public XContentBuilder toXContent(XContentBuilder builder, ToXContent.Params params) throws IOException {
    builder.startObject();
    if (_modelMemoryLimit != null) {
      builder.field(MODEL_MEMORY_LIMIT.getPreferredName(), _modelMemoryLimit);
    }
    if (_categorizationExamplesLimit != null) {
      builder.field(CATEGORIZATION_EXAMPLES_LIMIT.getPreferredName(), _categorizationExamplesLimit);
    }
    if (_modelSnapshotRetentionDays != null) {
      builder.field(MODEL_SNAPSHOT_RETENTION_DAYS.getPreferredName(), _modelSnapshotRetentionDays);
    }
    if (_categorizationAnalyzer != null) {
      builder.field(CATEGORIZATION_ANALYZER.getPreferredName());
      _categorizationAnalyzer.toXContent(builder, params);
    }
    builder.endObject();
    return builder;
  }

  @Override
  public AnomalyDetectors fromXContent(XContentParser parser) throws IOException, XContentParseException {
    return AnomalyDetectors.PARSER.apply(parser, null);
  }

  public static final ObjectParser<AnomalyDetectors, Void> PARSER =
    new ObjectParser<>(AnomalyDetectors.class.getName(), false, AnomalyDetectors::new);

  static {
    PARSER.declareString(AnomalyDetectors::setModelMemoryLimit, MODEL_MEMORY_LIMIT);
    PARSER.declareInt(AnomalyDetectors::setCategorizationExamplesLimit, CATEGORIZATION_EXAMPLES_LIMIT);
    PARSER.declareInt(AnomalyDetectors::setModelSnapshotRetentionDays, MODEL_SNAPSHOT_RETENTION_DAYS);
    PARSER.declareObject(AnomalyDetectors::setCategorizationAnalyzer, (p, t) -> CategorizationAnalyzer.PARSER.apply(p, t), CATEGORIZATION_ANALYZER);
  }

}
