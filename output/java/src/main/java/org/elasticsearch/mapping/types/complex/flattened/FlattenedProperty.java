
package org.elasticsearch.mapping.types.complex.flattened;

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
import org.elasticsearch.mapping.types.core.*;

public class FlattenedProperty  implements XContentable<FlattenedProperty> {
  
  static final ParseField BOOST = new ParseField("boost");
  private Double _boost;
  public Double getBoost() { return this._boost; }
  public FlattenedProperty setBoost(Double val) { this._boost = val; return this; }


  static final ParseField DEPTH_LIMIT = new ParseField("depth_limit");
  private Integer _depthLimit;
  public Integer getDepthLimit() { return this._depthLimit; }
  public FlattenedProperty setDepthLimit(Integer val) { this._depthLimit = val; return this; }


  static final ParseField DOC_VALUES = new ParseField("doc_values");
  private Boolean _docValues;
  public Boolean getDocValues() { return this._docValues; }
  public FlattenedProperty setDocValues(Boolean val) { this._docValues = val; return this; }


  static final ParseField EAGER_GLOBAL_ORDINALS = new ParseField("eager_global_ordinals");
  private Boolean _eagerGlobalOrdinals;
  public Boolean getEagerGlobalOrdinals() { return this._eagerGlobalOrdinals; }
  public FlattenedProperty setEagerGlobalOrdinals(Boolean val) { this._eagerGlobalOrdinals = val; return this; }


  static final ParseField IGNORE_ABOVE = new ParseField("ignore_above");
  private Integer _ignoreAbove;
  public Integer getIgnoreAbove() { return this._ignoreAbove; }
  public FlattenedProperty setIgnoreAbove(Integer val) { this._ignoreAbove = val; return this; }


  static final ParseField INDEX = new ParseField("index");
  private Boolean _index;
  public Boolean getIndex() { return this._index; }
  public FlattenedProperty setIndex(Boolean val) { this._index = val; return this; }


  static final ParseField INDEX_OPTIONS = new ParseField("index_options");
  private IndexOptions _indexOptions;
  public IndexOptions getIndexOptions() { return this._indexOptions; }
  public FlattenedProperty setIndexOptions(IndexOptions val) { this._indexOptions = val; return this; }


  static final ParseField NULL_VALUE = new ParseField("null_value");
  private String _nullValue;
  public String getNullValue() { return this._nullValue; }
  public FlattenedProperty setNullValue(String val) { this._nullValue = val; return this; }


  static final ParseField SIMILARITY = new ParseField("similarity");
  private String _similarity;
  public String getSimilarity() { return this._similarity; }
  public FlattenedProperty setSimilarity(String val) { this._similarity = val; return this; }


  static final ParseField SPLIT_QUERIES_ON_WHITESPACE = new ParseField("split_queries_on_whitespace");
  private Boolean _splitQueriesOnWhitespace;
  public Boolean getSplitQueriesOnWhitespace() { return this._splitQueriesOnWhitespace; }
  public FlattenedProperty setSplitQueriesOnWhitespace(Boolean val) { this._splitQueriesOnWhitespace = val; return this; }


  
  @Override
  public XContentBuilder toXContent(XContentBuilder builder, ToXContent.Params params) throws IOException {
    builder.startObject();
    if (_boost != null) {
      builder.field(BOOST.getPreferredName(), _boost);
    }
    if (_depthLimit != null) {
      builder.field(DEPTH_LIMIT.getPreferredName(), _depthLimit);
    }
    if (_docValues != null) {
      builder.field(DOC_VALUES.getPreferredName(), _docValues);
    }
    if (_eagerGlobalOrdinals != null) {
      builder.field(EAGER_GLOBAL_ORDINALS.getPreferredName(), _eagerGlobalOrdinals);
    }
    if (_ignoreAbove != null) {
      builder.field(IGNORE_ABOVE.getPreferredName(), _ignoreAbove);
    }
    if (_index != null) {
      builder.field(INDEX.getPreferredName(), _index);
    }
    if (_indexOptions != null) {
      builder.field(INDEX_OPTIONS.getPreferredName());
      _indexOptions.toXContent(builder, params);
    }
    if (_nullValue != null) {
      builder.field(NULL_VALUE.getPreferredName(), _nullValue);
    }
    if (_similarity != null) {
      builder.field(SIMILARITY.getPreferredName(), _similarity);
    }
    if (_splitQueriesOnWhitespace != null) {
      builder.field(SPLIT_QUERIES_ON_WHITESPACE.getPreferredName(), _splitQueriesOnWhitespace);
    }
    builder.endObject();
    return builder;
  }

  @Override
  public FlattenedProperty fromXContent(XContentParser parser) throws IOException, XContentParseException {
    return FlattenedProperty.PARSER.apply(parser, null);
  }

  public static final ObjectParser<FlattenedProperty, Void> PARSER =
    new ObjectParser<>(FlattenedProperty.class.getName(), false, FlattenedProperty::new);

  static {
    PARSER.declareDouble(FlattenedProperty::setBoost, BOOST);
    PARSER.declareInt(FlattenedProperty::setDepthLimit, DEPTH_LIMIT);
    PARSER.declareBoolean(FlattenedProperty::setDocValues, DOC_VALUES);
    PARSER.declareBoolean(FlattenedProperty::setEagerGlobalOrdinals, EAGER_GLOBAL_ORDINALS);
    PARSER.declareInt(FlattenedProperty::setIgnoreAbove, IGNORE_ABOVE);
    PARSER.declareBoolean(FlattenedProperty::setIndex, INDEX);
    PARSER.declareField(FlattenedProperty::setIndexOptions, (p, t) -> IndexOptions.PARSER.apply(p), INDEX_OPTIONS, ObjectParser.ValueType.STRING_OR_NULL);
    PARSER.declareString(FlattenedProperty::setNullValue, NULL_VALUE);
    PARSER.declareString(FlattenedProperty::setSimilarity, SIMILARITY);
    PARSER.declareBoolean(FlattenedProperty::setSplitQueriesOnWhitespace, SPLIT_QUERIES_ON_WHITESPACE);
  }

}
