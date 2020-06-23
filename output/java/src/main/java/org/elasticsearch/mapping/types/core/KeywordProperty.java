
package org.elasticsearch.mapping.types.core;

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

public class KeywordProperty  implements XContentable<KeywordProperty> {
  
  static final ParseField BOOST = new ParseField("boost");
  private Double _boost;
  public Double getBoost() { return this._boost; }
  public KeywordProperty setBoost(Double val) { this._boost = val; return this; }


  static final ParseField EAGER_GLOBAL_ORDINALS = new ParseField("eager_global_ordinals");
  private Boolean _eagerGlobalOrdinals;
  public Boolean getEagerGlobalOrdinals() { return this._eagerGlobalOrdinals; }
  public KeywordProperty setEagerGlobalOrdinals(Boolean val) { this._eagerGlobalOrdinals = val; return this; }


  static final ParseField IGNORE_ABOVE = new ParseField("ignore_above");
  private Integer _ignoreAbove;
  public Integer getIgnoreAbove() { return this._ignoreAbove; }
  public KeywordProperty setIgnoreAbove(Integer val) { this._ignoreAbove = val; return this; }


  static final ParseField INDEX = new ParseField("index");
  private Boolean _index;
  public Boolean getIndex() { return this._index; }
  public KeywordProperty setIndex(Boolean val) { this._index = val; return this; }


  static final ParseField INDEX_OPTIONS = new ParseField("index_options");
  private IndexOptions _indexOptions;
  public IndexOptions getIndexOptions() { return this._indexOptions; }
  public KeywordProperty setIndexOptions(IndexOptions val) { this._indexOptions = val; return this; }


  static final ParseField NORMALIZER = new ParseField("normalizer");
  private String _normalizer;
  public String getNormalizer() { return this._normalizer; }
  public KeywordProperty setNormalizer(String val) { this._normalizer = val; return this; }


  static final ParseField NORMS = new ParseField("norms");
  private Boolean _norms;
  public Boolean getNorms() { return this._norms; }
  public KeywordProperty setNorms(Boolean val) { this._norms = val; return this; }


  static final ParseField NULL_VALUE = new ParseField("null_value");
  private String _nullValue;
  public String getNullValue() { return this._nullValue; }
  public KeywordProperty setNullValue(String val) { this._nullValue = val; return this; }


  static final ParseField SPLIT_QUERIES_ON_WHITESPACE = new ParseField("split_queries_on_whitespace");
  private Boolean _splitQueriesOnWhitespace;
  public Boolean getSplitQueriesOnWhitespace() { return this._splitQueriesOnWhitespace; }
  public KeywordProperty setSplitQueriesOnWhitespace(Boolean val) { this._splitQueriesOnWhitespace = val; return this; }


  
  @Override
  public XContentBuilder toXContent(XContentBuilder builder, ToXContent.Params params) throws IOException {
    builder.startObject();
    if (_boost != null) {
      builder.field(BOOST.getPreferredName(), _boost);
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
    if (_normalizer != null) {
      builder.field(NORMALIZER.getPreferredName(), _normalizer);
    }
    if (_norms != null) {
      builder.field(NORMS.getPreferredName(), _norms);
    }
    if (_nullValue != null) {
      builder.field(NULL_VALUE.getPreferredName(), _nullValue);
    }
    if (_splitQueriesOnWhitespace != null) {
      builder.field(SPLIT_QUERIES_ON_WHITESPACE.getPreferredName(), _splitQueriesOnWhitespace);
    }
    builder.endObject();
    return builder;
  }

  @Override
  public KeywordProperty fromXContent(XContentParser parser) throws IOException, XContentParseException {
    return KeywordProperty.PARSER.apply(parser, null);
  }

  public static final ObjectParser<KeywordProperty, Void> PARSER =
    new ObjectParser<>(KeywordProperty.class.getName(), false, KeywordProperty::new);

  static {
    PARSER.declareDouble(KeywordProperty::setBoost, BOOST);
    PARSER.declareBoolean(KeywordProperty::setEagerGlobalOrdinals, EAGER_GLOBAL_ORDINALS);
    PARSER.declareInt(KeywordProperty::setIgnoreAbove, IGNORE_ABOVE);
    PARSER.declareBoolean(KeywordProperty::setIndex, INDEX);
    PARSER.declareField(KeywordProperty::setIndexOptions, (p, t) -> IndexOptions.PARSER.apply(p), INDEX_OPTIONS, ObjectParser.ValueType.STRING_OR_NULL);
    PARSER.declareString(KeywordProperty::setNormalizer, NORMALIZER);
    PARSER.declareBoolean(KeywordProperty::setNorms, NORMS);
    PARSER.declareString(KeywordProperty::setNullValue, NULL_VALUE);
    PARSER.declareBoolean(KeywordProperty::setSplitQueriesOnWhitespace, SPLIT_QUERIES_ON_WHITESPACE);
  }

}
