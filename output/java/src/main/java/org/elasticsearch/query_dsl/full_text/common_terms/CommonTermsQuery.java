
package org.elasticsearch.query_dsl.full_text.common_terms;

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
import org.elasticsearch.query_dsl.*;
import org.elasticsearch.common_options.minimum_should_match.*;

public class CommonTermsQuery  implements XContentable<CommonTermsQuery> {
  
  static final ParseField ANALYZER = new ParseField("analyzer");
  private String _analyzer;
  public String getAnalyzer() { return this._analyzer; }
  public CommonTermsQuery setAnalyzer(String val) { this._analyzer = val; return this; }


  static final ParseField CUTOFF_FREQUENCY = new ParseField("cutoff_frequency");
  private Double _cutoffFrequency;
  public Double getCutoffFrequency() { return this._cutoffFrequency; }
  public CommonTermsQuery setCutoffFrequency(Double val) { this._cutoffFrequency = val; return this; }


  static final ParseField HIGH_FREQ_OPERATOR = new ParseField("high_freq_operator");
  private Operator _highFreqOperator;
  public Operator getHighFreqOperator() { return this._highFreqOperator; }
  public CommonTermsQuery setHighFreqOperator(Operator val) { this._highFreqOperator = val; return this; }


  static final ParseField LOW_FREQ_OPERATOR = new ParseField("low_freq_operator");
  private Operator _lowFreqOperator;
  public Operator getLowFreqOperator() { return this._lowFreqOperator; }
  public CommonTermsQuery setLowFreqOperator(Operator val) { this._lowFreqOperator = val; return this; }


  static final ParseField MINIMUM_SHOULD_MATCH = new ParseField("minimum_should_match");
  private MinimumShouldMatch _minimumShouldMatch;
  public MinimumShouldMatch getMinimumShouldMatch() { return this._minimumShouldMatch; }
  public CommonTermsQuery setMinimumShouldMatch(MinimumShouldMatch val) { this._minimumShouldMatch = val; return this; }


  static final ParseField QUERY = new ParseField("query");
  private String _query;
  public String getQuery() { return this._query; }
  public CommonTermsQuery setQuery(String val) { this._query = val; return this; }


  
  @Override
  public XContentBuilder toXContent(XContentBuilder builder, ToXContent.Params params) throws IOException {
    builder.startObject();
    if (_analyzer != null) {
      builder.field(ANALYZER.getPreferredName(), _analyzer);
    }
    if (_cutoffFrequency != null) {
      builder.field(CUTOFF_FREQUENCY.getPreferredName(), _cutoffFrequency);
    }
    if (_highFreqOperator != null) {
      builder.field(HIGH_FREQ_OPERATOR.getPreferredName());
      _highFreqOperator.toXContent(builder, params);
    }
    if (_lowFreqOperator != null) {
      builder.field(LOW_FREQ_OPERATOR.getPreferredName());
      _lowFreqOperator.toXContent(builder, params);
    }
    if (_minimumShouldMatch != null) {
      builder.field(MINIMUM_SHOULD_MATCH.getPreferredName());
      _minimumShouldMatch.toXContent(builder, params);
    }
    if (_query != null) {
      builder.field(QUERY.getPreferredName(), _query);
    }
    builder.endObject();
    return builder;
  }

  @Override
  public CommonTermsQuery fromXContent(XContentParser parser) throws IOException, XContentParseException {
    return CommonTermsQuery.PARSER.apply(parser, null);
  }

  public static final ObjectParser<CommonTermsQuery, Void> PARSER =
    new ObjectParser<>(CommonTermsQuery.class.getName(), false, CommonTermsQuery::new);

  static {
    PARSER.declareString(CommonTermsQuery::setAnalyzer, ANALYZER);
    PARSER.declareDouble(CommonTermsQuery::setCutoffFrequency, CUTOFF_FREQUENCY);
    PARSER.declareField(CommonTermsQuery::setHighFreqOperator, (p, t) -> Operator.PARSER.apply(p), HIGH_FREQ_OPERATOR, ObjectParser.ValueType.STRING_OR_NULL);
    PARSER.declareField(CommonTermsQuery::setLowFreqOperator, (p, t) -> Operator.PARSER.apply(p), LOW_FREQ_OPERATOR, ObjectParser.ValueType.STRING_OR_NULL);
    PARSER.declareObject(CommonTermsQuery::setMinimumShouldMatch, (p, t) -> new MinimumShouldMatch().fromXContent(p), MINIMUM_SHOULD_MATCH);
    PARSER.declareString(CommonTermsQuery::setQuery, QUERY);
  }

}
