
package org.elasticsearch.search.explain;

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
import org.elasticsearch.common.*;
import org.elasticsearch.common_abstractions.infer.join_field_routing.*;
import org.elasticsearch.common_abstractions.infer.field.*;
import org.elasticsearch.query_dsl.abstractions.container.*;

public class ExplainRequest  implements XContentable<ExplainRequest> {
  
  static final ParseField ANALYZE_WILDCARD = new ParseField("analyze_wildcard");
  private Boolean _analyzeWildcard;
  public Boolean getAnalyzeWildcard() { return this._analyzeWildcard; }
  public ExplainRequest setAnalyzeWildcard(Boolean val) { this._analyzeWildcard = val; return this; }


  static final ParseField ANALYZER = new ParseField("analyzer");
  private String _analyzer;
  public String getAnalyzer() { return this._analyzer; }
  public ExplainRequest setAnalyzer(String val) { this._analyzer = val; return this; }


  static final ParseField DEFAULT_OPERATOR = new ParseField("default_operator");
  private DefaultOperator _defaultOperator;
  public DefaultOperator getDefaultOperator() { return this._defaultOperator; }
  public ExplainRequest setDefaultOperator(DefaultOperator val) { this._defaultOperator = val; return this; }


  static final ParseField DF = new ParseField("df");
  private String _df;
  public String getDf() { return this._df; }
  public ExplainRequest setDf(String val) { this._df = val; return this; }


  static final ParseField LENIENT = new ParseField("lenient");
  private Boolean _lenient;
  public Boolean getLenient() { return this._lenient; }
  public ExplainRequest setLenient(Boolean val) { this._lenient = val; return this; }


  static final ParseField PREFERENCE = new ParseField("preference");
  private String _preference;
  public String getPreference() { return this._preference; }
  public ExplainRequest setPreference(String val) { this._preference = val; return this; }


  static final ParseField QUERY_ON_QUERY_STRING = new ParseField("query_on_query_string");
  private String _queryOnQueryString;
  public String getQueryOnQueryString() { return this._queryOnQueryString; }
  public ExplainRequest setQueryOnQueryString(String val) { this._queryOnQueryString = val; return this; }


  static final ParseField ROUTING = new ParseField("routing");
  private Routing _routing;
  public Routing getRouting() { return this._routing; }
  public ExplainRequest setRouting(Routing val) { this._routing = val; return this; }


  static final ParseField SOURCE_ENABLED = new ParseField("source_enabled");
  private Boolean _sourceEnabled;
  public Boolean getSourceEnabled() { return this._sourceEnabled; }
  public ExplainRequest setSourceEnabled(Boolean val) { this._sourceEnabled = val; return this; }


  static final ParseField SOURCE_EXCLUDES = new ParseField("source_excludes");
  private List<Field> _sourceExcludes;
  public List<Field> getSourceExcludes() { return this._sourceExcludes; }
  public ExplainRequest setSourceExcludes(List<Field> val) { this._sourceExcludes = val; return this; }


  static final ParseField SOURCE_INCLUDES = new ParseField("source_includes");
  private List<Field> _sourceIncludes;
  public List<Field> getSourceIncludes() { return this._sourceIncludes; }
  public ExplainRequest setSourceIncludes(List<Field> val) { this._sourceIncludes = val; return this; }


  static final ParseField QUERY = new ParseField("query");
  private QueryContainer _query;
  public QueryContainer getQuery() { return this._query; }
  public ExplainRequest setQuery(QueryContainer val) { this._query = val; return this; }


  static final ParseField STORED_FIELDS = new ParseField("stored_fields");
  private List<Field> _storedFields;
  public List<Field> getStoredFields() { return this._storedFields; }
  public ExplainRequest setStoredFields(List<Field> val) { this._storedFields = val; return this; }


  
  @Override
  public XContentBuilder toXContent(XContentBuilder builder, ToXContent.Params params) throws IOException {
    builder.startObject();
    if (_analyzeWildcard != null) {
      builder.field(ANALYZE_WILDCARD.getPreferredName(), _analyzeWildcard);
    }
    if (_analyzer != null) {
      builder.field(ANALYZER.getPreferredName(), _analyzer);
    }
    if (_defaultOperator != null) {
      builder.field(DEFAULT_OPERATOR.getPreferredName());
      _defaultOperator.toXContent(builder, params);
    }
    if (_df != null) {
      builder.field(DF.getPreferredName(), _df);
    }
    if (_lenient != null) {
      builder.field(LENIENT.getPreferredName(), _lenient);
    }
    if (_preference != null) {
      builder.field(PREFERENCE.getPreferredName(), _preference);
    }
    if (_queryOnQueryString != null) {
      builder.field(QUERY_ON_QUERY_STRING.getPreferredName(), _queryOnQueryString);
    }
    if (_routing != null) {
      builder.field(ROUTING.getPreferredName());
      _routing.toXContent(builder, params);
    }
    if (_sourceEnabled != null) {
      builder.field(SOURCE_ENABLED.getPreferredName(), _sourceEnabled);
    }
    if (_sourceExcludes != null) {
      builder.array(SOURCE_EXCLUDES.getPreferredName(), _sourceExcludes);
    }
    if (_sourceIncludes != null) {
      builder.array(SOURCE_INCLUDES.getPreferredName(), _sourceIncludes);
    }
    if (_query != null) {
      builder.field(QUERY.getPreferredName());
      _query.toXContent(builder, params);
    }
    if (_storedFields != null) {
      builder.array(STORED_FIELDS.getPreferredName(), _storedFields);
    }
    builder.endObject();
    return builder;
  }

  @Override
  public ExplainRequest fromXContent(XContentParser parser) throws IOException, XContentParseException {
    return ExplainRequest.PARSER.apply(parser, null);
  }

  public static final ObjectParser<ExplainRequest, Void> PARSER =
    new ObjectParser<>(ExplainRequest.class.getName(), false, ExplainRequest::new);

  static {
    PARSER.declareBoolean(ExplainRequest::setAnalyzeWildcard, ANALYZE_WILDCARD);
    PARSER.declareString(ExplainRequest::setAnalyzer, ANALYZER);
    PARSER.declareField(ExplainRequest::setDefaultOperator, (p, t) -> DefaultOperator.PARSER.apply(p), DEFAULT_OPERATOR, ObjectParser.ValueType.STRING_OR_NULL);
    PARSER.declareString(ExplainRequest::setDf, DF);
    PARSER.declareBoolean(ExplainRequest::setLenient, LENIENT);
    PARSER.declareString(ExplainRequest::setPreference, PREFERENCE);
    PARSER.declareString(ExplainRequest::setQueryOnQueryString, QUERY_ON_QUERY_STRING);
    PARSER.declareObject(ExplainRequest::setRouting, (p, t) -> Routing.createFrom(p), ROUTING);
    PARSER.declareBoolean(ExplainRequest::setSourceEnabled, SOURCE_ENABLED);
    PARSER.declareObjectArray(ExplainRequest::setSourceExcludes, (p, t) -> Field.createFrom(p), SOURCE_EXCLUDES);
    PARSER.declareObjectArray(ExplainRequest::setSourceIncludes, (p, t) -> Field.createFrom(p), SOURCE_INCLUDES);
    PARSER.declareObject(ExplainRequest::setQuery, (p, t) -> QueryContainer.PARSER.apply(p, t), QUERY);
    PARSER.declareObjectArray(ExplainRequest::setStoredFields, (p, t) -> Field.createFrom(p), STORED_FIELDS);
  }

}
