
package org.elasticsearch.x_pack.machine_learning.job.config;

import java.io.IOException;
import java.util.Date;
import java.util.List;
import java.util.HashMap;
import java.time.Instant;
import java.time.format.DateTimeFormatter;
import org.elasticsearch.*;
import org.elasticsearch.common.ParseField;
import org.elasticsearch.common.xcontent.*;
import org.elasticsearch.common_options.time_unit.*;
import org.elasticsearch.internal.*;
import org.elasticsearch.x_pack.machine_learning.job.detectors.*;

public class AnalysisConfig  implements XContentable<AnalysisConfig> {
  
  static final ParseField BUCKET_SPAN = new ParseField("bucket_span");
  private String _bucketSpan;
  public String getBucketSpan() { return this._bucketSpan; }
  public AnalysisConfig setBucketSpan(String val) { this._bucketSpan = val; return this; }

  static final ParseField CATEGORIZATION_FIELD_NAME = new ParseField("categorization_field_name");
  private String _categorizationFieldName;
  public String getCategorizationFieldName() { return this._categorizationFieldName; }
  public AnalysisConfig setCategorizationFieldName(String val) { this._categorizationFieldName = val; return this; }

  static final ParseField CATEGORIZATION_FILTERS = new ParseField("categorization_filters");
  private List<String> _categorizationFilters;
  public List<String> getCategorizationFilters() { return this._categorizationFilters; }
  public AnalysisConfig setCategorizationFilters(List<String> val) { this._categorizationFilters = val; return this; }

  static final ParseField DETECTORS = new ParseField("detectors");
  private List<Detector> _detectors;
  public List<Detector> getDetectors() { return this._detectors; }
  public AnalysisConfig setDetectors(List<Detector> val) { this._detectors = val; return this; }

  static final ParseField INFLUENCERS = new ParseField("influencers");
  private List<String> _influencers;
  public List<String> getInfluencers() { return this._influencers; }
  public AnalysisConfig setInfluencers(List<String> val) { this._influencers = val; return this; }

  static final ParseField LATENCY = new ParseField("latency");
  private String _latency;
  public String getLatency() { return this._latency; }
  public AnalysisConfig setLatency(String val) { this._latency = val; return this; }

  static final ParseField MULTIVARIATE_BY_FIELDS = new ParseField("multivariate_by_fields");
  private Boolean _multivariateByFields;
  public Boolean getMultivariateByFields() { return this._multivariateByFields; }
  public AnalysisConfig setMultivariateByFields(Boolean val) { this._multivariateByFields = val; return this; }

  static final ParseField SUMMARY_COUNT_FIELD_NAME = new ParseField("summary_count_field_name");
  private String _summaryCountFieldName;
  public String getSummaryCountFieldName() { return this._summaryCountFieldName; }
  public AnalysisConfig setSummaryCountFieldName(String val) { this._summaryCountFieldName = val; return this; }


  
  @Override
  public void toXContentInternal(XContentBuilder builder, ToXContent.Params params) throws IOException {
    
    if (_bucketSpan != null) {
      builder.field(BUCKET_SPAN.getPreferredName(), _bucketSpan);
    }
    if (_categorizationFieldName != null) {
      builder.field(CATEGORIZATION_FIELD_NAME.getPreferredName(), _categorizationFieldName);
    }
    if (_categorizationFilters != null) {
      builder.array(CATEGORIZATION_FILTERS.getPreferredName(), _categorizationFilters);
    }
    if (_detectors != null) {
      builder.array(DETECTORS.getPreferredName(), _detectors);
    }
    if (_influencers != null) {
      builder.array(INFLUENCERS.getPreferredName(), _influencers);
    }
    if (_latency != null) {
      builder.field(LATENCY.getPreferredName(), _latency);
    }
    if (_multivariateByFields != null) {
      builder.field(MULTIVARIATE_BY_FIELDS.getPreferredName(), _multivariateByFields);
    }
    if (_summaryCountFieldName != null) {
      builder.field(SUMMARY_COUNT_FIELD_NAME.getPreferredName(), _summaryCountFieldName);
    }
  }

  @Override
  public AnalysisConfig fromXContent(XContentParser parser) throws IOException, XContentParseException {
    return AnalysisConfig.PARSER.apply(parser, null);
  }

  public static final ObjectParser<AnalysisConfig, Void> PARSER =
    new ObjectParser<>(AnalysisConfig.class.getName(), false, AnalysisConfig::new);

  static {
    PARSER.declareString(AnalysisConfig::setBucketSpan, BUCKET_SPAN);
    PARSER.declareString(AnalysisConfig::setCategorizationFieldName, CATEGORIZATION_FIELD_NAME);
    PARSER.declareStringArray(AnalysisConfig::setCategorizationFilters, CATEGORIZATION_FILTERS);
    PARSER.declareObjectArray(AnalysisConfig::setDetectors, (p, t) -> Detector.PARSER.apply(p, t), DETECTORS);
    PARSER.declareStringArray(AnalysisConfig::setInfluencers, INFLUENCERS);
    PARSER.declareString(AnalysisConfig::setLatency, LATENCY);
    PARSER.declareBoolean(AnalysisConfig::setMultivariateByFields, MULTIVARIATE_BY_FIELDS);
    PARSER.declareString(AnalysisConfig::setSummaryCountFieldName, SUMMARY_COUNT_FIELD_NAME);
  }

}
