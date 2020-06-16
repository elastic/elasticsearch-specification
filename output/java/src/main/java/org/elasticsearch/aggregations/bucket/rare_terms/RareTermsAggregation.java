
package org.elasticsearch.aggregations.bucket.rare_terms;

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
import org.elasticsearch.aggregations.bucket.terms.*;
import org.elasticsearch.common_abstractions.infer.field.*;
import org.elasticsearch.internal.*;

public class RareTermsAggregation  implements XContentable<RareTermsAggregation> {
  
  static final ParseField EXCLUDE = new ParseField("exclude");
  private TermsExclude _exclude;
  public TermsExclude getExclude() { return this._exclude; }
  public RareTermsAggregation setExclude(TermsExclude val) { this._exclude = val; return this; }


  static final ParseField FIELD = new ParseField("field");
  private Field _field;
  public Field getField() { return this._field; }
  public RareTermsAggregation setField(Field val) { this._field = val; return this; }


  static final ParseField INCLUDE = new ParseField("include");
  private TermsInclude _include;
  public TermsInclude getInclude() { return this._include; }
  public RareTermsAggregation setInclude(TermsInclude val) { this._include = val; return this; }


  static final ParseField MAX_DOC_COUNT = new ParseField("max_doc_count");
  private Long _maxDocCount;
  public Long getMaxDocCount() { return this._maxDocCount; }
  public RareTermsAggregation setMaxDocCount(Long val) { this._maxDocCount = val; return this; }


  static final ParseField MISSING = new ParseField("missing");
  private Object _missing;
  public Object getMissing() { return this._missing; }
  public RareTermsAggregation setMissing(Object val) { this._missing = val; return this; }


  static final ParseField PRECISION = new ParseField("precision");
  private Double _precision;
  public Double getPrecision() { return this._precision; }
  public RareTermsAggregation setPrecision(Double val) { this._precision = val; return this; }


  
  @Override
  public XContentBuilder toXContent(XContentBuilder builder, ToXContent.Params params) throws IOException {
    builder.startObject();
    if (_exclude != null) {
      builder.field(EXCLUDE.getPreferredName());
      _exclude.toXContent(builder, params);
    }
    if (_field != null) {
      builder.field(FIELD.getPreferredName());
      _field.toXContent(builder, params);
    }
    if (_include != null) {
      builder.field(INCLUDE.getPreferredName());
      _include.toXContent(builder, params);
    }
    if (_maxDocCount != null) {
      builder.field(MAX_DOC_COUNT.getPreferredName(), _maxDocCount);
    }
    if (_missing != null) {
      builder.field(MISSING.getPreferredName(), _missing);
    }
    if (_precision != null) {
      builder.field(PRECISION.getPreferredName(), _precision);
    }
    builder.endObject();
    return builder;
  }

  @Override
  public RareTermsAggregation fromXContent(XContentParser parser) throws IOException, XContentParseException {
    return RareTermsAggregation.PARSER.apply(parser, null);
  }

  public static final ObjectParser<RareTermsAggregation, Void> PARSER =
    new ObjectParser<>(RareTermsAggregation.class.getName(), false, RareTermsAggregation::new);

  static {
    PARSER.declareObject(RareTermsAggregation::setExclude, (p, t) -> TermsExclude.PARSER.apply(p, t), EXCLUDE);
    PARSER.declareObject(RareTermsAggregation::setField, (p, t) -> Field.createFrom(p), FIELD);
    PARSER.declareObject(RareTermsAggregation::setInclude, (p, t) -> TermsInclude.PARSER.apply(p, t), INCLUDE);
    PARSER.declareLong(RareTermsAggregation::setMaxDocCount, MAX_DOC_COUNT);
    PARSER.declareObject(RareTermsAggregation::setMissing, (p, t) -> p.objectText(), MISSING);
    PARSER.declareDouble(RareTermsAggregation::setPrecision, PRECISION);
  }

}
