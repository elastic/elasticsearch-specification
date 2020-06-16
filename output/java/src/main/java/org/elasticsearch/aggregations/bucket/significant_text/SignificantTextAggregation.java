
package org.elasticsearch.aggregations.bucket.significant_text;

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
import org.elasticsearch.query_dsl.abstractions.container.*;
import org.elasticsearch.aggregations.bucket.significant_terms.heuristics.*;
import org.elasticsearch.aggregations.bucket.significant_terms.*;
import org.elasticsearch.aggregations.bucket.terms.*;
import org.elasticsearch.common_abstractions.infer.field.*;
import org.elasticsearch.internal.*;

public class SignificantTextAggregation  implements XContentable<SignificantTextAggregation> {
  
  static final ParseField BACKGROUND_FILTER = new ParseField("background_filter");
  private QueryContainer _backgroundFilter;
  public QueryContainer getBackgroundFilter() { return this._backgroundFilter; }
  public SignificantTextAggregation setBackgroundFilter(QueryContainer val) { this._backgroundFilter = val; return this; }


  static final ParseField CHI_SQUARE = new ParseField("chi_square");
  private ChiSquareHeuristic _chiSquare;
  public ChiSquareHeuristic getChiSquare() { return this._chiSquare; }
  public SignificantTextAggregation setChiSquare(ChiSquareHeuristic val) { this._chiSquare = val; return this; }


  static final ParseField EXCLUDE = new ParseField("exclude");
  private IncludeExclude _exclude;
  public IncludeExclude getExclude() { return this._exclude; }
  public SignificantTextAggregation setExclude(IncludeExclude val) { this._exclude = val; return this; }


  static final ParseField EXECUTION_HINT = new ParseField("execution_hint");
  private TermsAggregationExecutionHint _executionHint;
  public TermsAggregationExecutionHint getExecutionHint() { return this._executionHint; }
  public SignificantTextAggregation setExecutionHint(TermsAggregationExecutionHint val) { this._executionHint = val; return this; }


  static final ParseField FIELD = new ParseField("field");
  private Field _field;
  public Field getField() { return this._field; }
  public SignificantTextAggregation setField(Field val) { this._field = val; return this; }


  static final ParseField FILTER_DUPLICATE_TEXT = new ParseField("filter_duplicate_text");
  private Boolean _filterDuplicateText;
  public Boolean getFilterDuplicateText() { return this._filterDuplicateText; }
  public SignificantTextAggregation setFilterDuplicateText(Boolean val) { this._filterDuplicateText = val; return this; }


  static final ParseField GND = new ParseField("gnd");
  private GoogleNormalizedDistanceHeuristic _gnd;
  public GoogleNormalizedDistanceHeuristic getGnd() { return this._gnd; }
  public SignificantTextAggregation setGnd(GoogleNormalizedDistanceHeuristic val) { this._gnd = val; return this; }


  static final ParseField INCLUDE = new ParseField("include");
  private IncludeExclude _include;
  public IncludeExclude getInclude() { return this._include; }
  public SignificantTextAggregation setInclude(IncludeExclude val) { this._include = val; return this; }


  static final ParseField MIN_DOC_COUNT = new ParseField("min_doc_count");
  private Long _minDocCount;
  public Long getMinDocCount() { return this._minDocCount; }
  public SignificantTextAggregation setMinDocCount(Long val) { this._minDocCount = val; return this; }


  static final ParseField MUTUAL_INFORMATION = new ParseField("mutual_information");
  private MutualInformationHeuristic _mutualInformation;
  public MutualInformationHeuristic getMutualInformation() { return this._mutualInformation; }
  public SignificantTextAggregation setMutualInformation(MutualInformationHeuristic val) { this._mutualInformation = val; return this; }


  static final ParseField PERCENTAGE = new ParseField("percentage");
  private PercentageScoreHeuristic _percentage;
  public PercentageScoreHeuristic getPercentage() { return this._percentage; }
  public SignificantTextAggregation setPercentage(PercentageScoreHeuristic val) { this._percentage = val; return this; }


  static final ParseField SCRIPT_HEURISTIC = new ParseField("script_heuristic");
  private ScriptedHeuristic _scriptHeuristic;
  public ScriptedHeuristic getScriptHeuristic() { return this._scriptHeuristic; }
  public SignificantTextAggregation setScriptHeuristic(ScriptedHeuristic val) { this._scriptHeuristic = val; return this; }


  static final ParseField SHARD_MIN_DOC_COUNT = new ParseField("shard_min_doc_count");
  private Long _shardMinDocCount;
  public Long getShardMinDocCount() { return this._shardMinDocCount; }
  public SignificantTextAggregation setShardMinDocCount(Long val) { this._shardMinDocCount = val; return this; }


  static final ParseField SHARD_SIZE = new ParseField("shard_size");
  private Integer _shardSize;
  public Integer getShardSize() { return this._shardSize; }
  public SignificantTextAggregation setShardSize(Integer val) { this._shardSize = val; return this; }


  static final ParseField SIZE = new ParseField("size");
  private Integer _size;
  public Integer getSize() { return this._size; }
  public SignificantTextAggregation setSize(Integer val) { this._size = val; return this; }


  static final ParseField SOURCE_FIELDS = new ParseField("source_fields");
  private List<Field> _sourceFields;
  public List<Field> getSourceFields() { return this._sourceFields; }
  public SignificantTextAggregation setSourceFields(List<Field> val) { this._sourceFields = val; return this; }


  
  @Override
  public XContentBuilder toXContent(XContentBuilder builder, ToXContent.Params params) throws IOException {
    builder.startObject();
    if (_backgroundFilter != null) {
      builder.field(BACKGROUND_FILTER.getPreferredName());
      _backgroundFilter.toXContent(builder, params);
    }
    if (_chiSquare != null) {
      builder.field(CHI_SQUARE.getPreferredName());
      _chiSquare.toXContent(builder, params);
    }
    if (_exclude != null) {
      builder.field(EXCLUDE.getPreferredName());
      _exclude.toXContent(builder, params);
    }
    if (_executionHint != null) {
      builder.field(EXECUTION_HINT.getPreferredName());
      _executionHint.toXContent(builder, params);
    }
    if (_field != null) {
      builder.field(FIELD.getPreferredName());
      _field.toXContent(builder, params);
    }
    if (_filterDuplicateText != null) {
      builder.field(FILTER_DUPLICATE_TEXT.getPreferredName(), _filterDuplicateText);
    }
    if (_gnd != null) {
      builder.field(GND.getPreferredName());
      _gnd.toXContent(builder, params);
    }
    if (_include != null) {
      builder.field(INCLUDE.getPreferredName());
      _include.toXContent(builder, params);
    }
    if (_minDocCount != null) {
      builder.field(MIN_DOC_COUNT.getPreferredName(), _minDocCount);
    }
    if (_mutualInformation != null) {
      builder.field(MUTUAL_INFORMATION.getPreferredName());
      _mutualInformation.toXContent(builder, params);
    }
    if (_percentage != null) {
      builder.field(PERCENTAGE.getPreferredName());
      _percentage.toXContent(builder, params);
    }
    if (_scriptHeuristic != null) {
      builder.field(SCRIPT_HEURISTIC.getPreferredName());
      _scriptHeuristic.toXContent(builder, params);
    }
    if (_shardMinDocCount != null) {
      builder.field(SHARD_MIN_DOC_COUNT.getPreferredName(), _shardMinDocCount);
    }
    if (_shardSize != null) {
      builder.field(SHARD_SIZE.getPreferredName(), _shardSize);
    }
    if (_size != null) {
      builder.field(SIZE.getPreferredName(), _size);
    }
    if (_sourceFields != null) {
      builder.array(SOURCE_FIELDS.getPreferredName(), _sourceFields);
    }
    builder.endObject();
    return builder;
  }

  @Override
  public SignificantTextAggregation fromXContent(XContentParser parser) throws IOException, XContentParseException {
    return SignificantTextAggregation.PARSER.apply(parser, null);
  }

  public static final ObjectParser<SignificantTextAggregation, Void> PARSER =
    new ObjectParser<>(SignificantTextAggregation.class.getName(), false, SignificantTextAggregation::new);

  static {
    PARSER.declareObject(SignificantTextAggregation::setBackgroundFilter, (p, t) -> QueryContainer.PARSER.apply(p, t), BACKGROUND_FILTER);
    PARSER.declareObject(SignificantTextAggregation::setChiSquare, (p, t) -> ChiSquareHeuristic.PARSER.apply(p, t), CHI_SQUARE);
    PARSER.declareObject(SignificantTextAggregation::setExclude, (p, t) -> IncludeExclude.PARSER.apply(p, t), EXCLUDE);
    PARSER.declareField(SignificantTextAggregation::setExecutionHint, (p, t) -> TermsAggregationExecutionHint.PARSER.apply(p), EXECUTION_HINT, ObjectParser.ValueType.STRING_OR_NULL);
    PARSER.declareObject(SignificantTextAggregation::setField, (p, t) -> Field.createFrom(p), FIELD);
    PARSER.declareBoolean(SignificantTextAggregation::setFilterDuplicateText, FILTER_DUPLICATE_TEXT);
    PARSER.declareObject(SignificantTextAggregation::setGnd, (p, t) -> GoogleNormalizedDistanceHeuristic.PARSER.apply(p, t), GND);
    PARSER.declareObject(SignificantTextAggregation::setInclude, (p, t) -> IncludeExclude.PARSER.apply(p, t), INCLUDE);
    PARSER.declareLong(SignificantTextAggregation::setMinDocCount, MIN_DOC_COUNT);
    PARSER.declareObject(SignificantTextAggregation::setMutualInformation, (p, t) -> MutualInformationHeuristic.PARSER.apply(p, t), MUTUAL_INFORMATION);
    PARSER.declareObject(SignificantTextAggregation::setPercentage, (p, t) -> PercentageScoreHeuristic.PARSER.apply(p, t), PERCENTAGE);
    PARSER.declareObject(SignificantTextAggregation::setScriptHeuristic, (p, t) -> ScriptedHeuristic.PARSER.apply(p, t), SCRIPT_HEURISTIC);
    PARSER.declareLong(SignificantTextAggregation::setShardMinDocCount, SHARD_MIN_DOC_COUNT);
    PARSER.declareInt(SignificantTextAggregation::setShardSize, SHARD_SIZE);
    PARSER.declareInt(SignificantTextAggregation::setSize, SIZE);
    PARSER.declareObjectArray(SignificantTextAggregation::setSourceFields, (p, t) -> Field.createFrom(p), SOURCE_FIELDS);
  }

}
