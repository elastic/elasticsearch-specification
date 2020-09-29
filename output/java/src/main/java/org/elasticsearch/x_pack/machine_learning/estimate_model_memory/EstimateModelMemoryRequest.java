
package org.elasticsearch.x_pack.machine_learning.estimate_model_memory;

import java.io.IOException;
import java.util.Date;
import java.util.List;
import java.util.HashMap;
import java.time.Instant;
import java.time.format.DateTimeFormatter;
import org.elasticsearch.*;
import org.elasticsearch.common.ParseField;
import org.elasticsearch.common.xcontent.*;
import org.elasticsearch.x_pack.machine_learning.job.config.*;
import org.elasticsearch.internal.*;
import org.elasticsearch.common_abstractions.request.*;

public class EstimateModelMemoryRequest extends RequestBase<EstimateModelMemoryRequest> implements XContentable<EstimateModelMemoryRequest> {
  
  static final ParseField ANALYSIS_CONFIG = new ParseField("analysis_config");
  private AnalysisConfig _analysisConfig;
  public AnalysisConfig getAnalysisConfig() { return this._analysisConfig; }
  public EstimateModelMemoryRequest setAnalysisConfig(AnalysisConfig val) { this._analysisConfig = val; return this; }

  static final ParseField MAX_BUCKET_CARDINALITY = new ParseField("max_bucket_cardinality");
  private NamedContainer<String, Long> _maxBucketCardinality;
  public NamedContainer<String, Long> getMaxBucketCardinality() { return this._maxBucketCardinality; }
  public EstimateModelMemoryRequest setMaxBucketCardinality(NamedContainer<String, Long> val) { this._maxBucketCardinality = val; return this; }

  static final ParseField OVERALL_CARDINALITY = new ParseField("overall_cardinality");
  private NamedContainer<String, Long> _overallCardinality;
  public NamedContainer<String, Long> getOverallCardinality() { return this._overallCardinality; }
  public EstimateModelMemoryRequest setOverallCardinality(NamedContainer<String, Long> val) { this._overallCardinality = val; return this; }


  
  @Override
  public void toXContentInternal(XContentBuilder builder, ToXContent.Params params) throws IOException {
    super.toXContentInternal(builder, params);
    if (_analysisConfig != null) {
      builder.field(ANALYSIS_CONFIG.getPreferredName());
      _analysisConfig.toXContent(builder, params);
    }
    if (_maxBucketCardinality != null) {
      builder.field(MAX_BUCKET_CARDINALITY.getPreferredName());
      _maxBucketCardinality.toXContent(builder, params);
    }
    if (_overallCardinality != null) {
      builder.field(OVERALL_CARDINALITY.getPreferredName());
      _overallCardinality.toXContent(builder, params);
    }
  }

  @Override
  public EstimateModelMemoryRequest fromXContent(XContentParser parser) throws IOException, XContentParseException {
    return EstimateModelMemoryRequest.PARSER.apply(parser, null);
  }

  public static final ObjectParser<EstimateModelMemoryRequest, Void> PARSER =
    new ObjectParser<>(EstimateModelMemoryRequest.class.getName(), false, EstimateModelMemoryRequest::new);

  static {
    PARSER.declareObject(EstimateModelMemoryRequest::setAnalysisConfig, (p, t) -> AnalysisConfig.PARSER.apply(p, t), ANALYSIS_CONFIG);
    PARSER.declareObject(EstimateModelMemoryRequest::setMaxBucketCardinality, (p, t) -> new NamedContainer<>(n -> () -> n,pp -> long.PARSER.apply(pp, null)), MAX_BUCKET_CARDINALITY);
    PARSER.declareObject(EstimateModelMemoryRequest::setOverallCardinality, (p, t) -> new NamedContainer<>(n -> () -> n,pp -> long.PARSER.apply(pp, null)), OVERALL_CARDINALITY);
  }

}
