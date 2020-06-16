
package org.elasticsearch.x_pack.machine_learning.estimate_model_memory;

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
import org.elasticsearch.x_pack.machine_learning.job.config.*;
import org.elasticsearch.common_abstractions.infer.field.*;
import org.elasticsearch.internal.*;

public class EstimateModelMemoryRequest  implements XContentable<EstimateModelMemoryRequest> {
  
  static final ParseField ANALYSIS_CONFIG = new ParseField("analysis_config");
  private AnalysisConfig _analysisConfig;
  public AnalysisConfig getAnalysisConfig() { return this._analysisConfig; }
  public EstimateModelMemoryRequest setAnalysisConfig(AnalysisConfig val) { this._analysisConfig = val; return this; }


  static final ParseField OVERALL_CARDINALITY = new ParseField("overall_cardinality");
  private NamedContainer<Field, Long> _overallCardinality;
  public NamedContainer<Field, Long> getOverallCardinality() { return this._overallCardinality; }
  public EstimateModelMemoryRequest setOverallCardinality(NamedContainer<Field, Long> val) { this._overallCardinality = val; return this; }


  static final ParseField MAX_BUCKET_CARDINALITY = new ParseField("max_bucket_cardinality");
  private NamedContainer<Field, Long> _maxBucketCardinality;
  public NamedContainer<Field, Long> getMaxBucketCardinality() { return this._maxBucketCardinality; }
  public EstimateModelMemoryRequest setMaxBucketCardinality(NamedContainer<Field, Long> val) { this._maxBucketCardinality = val; return this; }


  
  @Override
  public XContentBuilder toXContent(XContentBuilder builder, ToXContent.Params params) throws IOException {
    builder.startObject();
    if (_analysisConfig != null) {
      builder.field(ANALYSIS_CONFIG.getPreferredName());
      _analysisConfig.toXContent(builder, params);
    }
    if (_overallCardinality != null) {
      builder.field(OVERALL_CARDINALITY.getPreferredName());
      _overallCardinality.toXContent(builder, params);
    }
    if (_maxBucketCardinality != null) {
      builder.field(MAX_BUCKET_CARDINALITY.getPreferredName());
      _maxBucketCardinality.toXContent(builder, params);
    }
    builder.endObject();
    return builder;
  }

  @Override
  public EstimateModelMemoryRequest fromXContent(XContentParser parser) throws IOException, XContentParseException {
    return EstimateModelMemoryRequest.PARSER.apply(parser, null);
  }

  public static final ObjectParser<EstimateModelMemoryRequest, Void> PARSER =
    new ObjectParser<>(EstimateModelMemoryRequest.class.getName(), false, EstimateModelMemoryRequest::new);

  static {
    PARSER.declareObject(EstimateModelMemoryRequest::setAnalysisConfig, (p, t) -> AnalysisConfig.PARSER.apply(p, t), ANALYSIS_CONFIG);
    PARSER.declareObject(EstimateModelMemoryRequest::setOverallCardinality, (p, t) -> new NamedContainer<>(n -> () -> new Field(n),pp -> pp.longValue()), OVERALL_CARDINALITY);
    PARSER.declareObject(EstimateModelMemoryRequest::setMaxBucketCardinality, (p, t) -> new NamedContainer<>(n -> () -> new Field(n),pp -> pp.longValue()), MAX_BUCKET_CARDINALITY);
  }

}
