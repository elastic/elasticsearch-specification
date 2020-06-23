
package org.elasticsearch.mapping.types.specialized.generic;

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
import org.elasticsearch.modules.indices.fielddata.string.*;
import org.elasticsearch.mapping.types.core.*;
import org.elasticsearch.mapping.*;

public class GenericProperty  implements XContentable<GenericProperty> {
  
  static final ParseField ANALYZER = new ParseField("analyzer");
  private String _analyzer;
  public String getAnalyzer() { return this._analyzer; }
  public GenericProperty setAnalyzer(String val) { this._analyzer = val; return this; }


  static final ParseField BOOST = new ParseField("boost");
  private Double _boost;
  public Double getBoost() { return this._boost; }
  public GenericProperty setBoost(Double val) { this._boost = val; return this; }


  static final ParseField FIELDDATA = new ParseField("fielddata");
  private StringFielddata _fielddata;
  public StringFielddata getFielddata() { return this._fielddata; }
  public GenericProperty setFielddata(StringFielddata val) { this._fielddata = val; return this; }


  static final ParseField IGNORE_ABOVE = new ParseField("ignore_above");
  private Integer _ignoreAbove;
  public Integer getIgnoreAbove() { return this._ignoreAbove; }
  public GenericProperty setIgnoreAbove(Integer val) { this._ignoreAbove = val; return this; }


  static final ParseField INDEX = new ParseField("index");
  private Boolean _index;
  public Boolean getIndex() { return this._index; }
  public GenericProperty setIndex(Boolean val) { this._index = val; return this; }


  static final ParseField INDEX_OPTIONS = new ParseField("index_options");
  private IndexOptions _indexOptions;
  public IndexOptions getIndexOptions() { return this._indexOptions; }
  public GenericProperty setIndexOptions(IndexOptions val) { this._indexOptions = val; return this; }


  static final ParseField NORMS = new ParseField("norms");
  private Boolean _norms;
  public Boolean getNorms() { return this._norms; }
  public GenericProperty setNorms(Boolean val) { this._norms = val; return this; }


  static final ParseField NULL_VALUE = new ParseField("null_value");
  private String _nullValue;
  public String getNullValue() { return this._nullValue; }
  public GenericProperty setNullValue(String val) { this._nullValue = val; return this; }


  static final ParseField POSITION_INCREMENT_GAP = new ParseField("position_increment_gap");
  private Integer _positionIncrementGap;
  public Integer getPositionIncrementGap() { return this._positionIncrementGap; }
  public GenericProperty setPositionIncrementGap(Integer val) { this._positionIncrementGap = val; return this; }


  static final ParseField SEARCH_ANALYZER = new ParseField("search_analyzer");
  private String _searchAnalyzer;
  public String getSearchAnalyzer() { return this._searchAnalyzer; }
  public GenericProperty setSearchAnalyzer(String val) { this._searchAnalyzer = val; return this; }


  static final ParseField TERM_VECTOR = new ParseField("term_vector");
  private TermVectorOption _termVector;
  public TermVectorOption getTermVector() { return this._termVector; }
  public GenericProperty setTermVector(TermVectorOption val) { this._termVector = val; return this; }


  static final ParseField TYPE = new ParseField("type");
  private String _type;
  public String getType() { return this._type; }
  public GenericProperty setType(String val) { this._type = val; return this; }


  
  @Override
  public XContentBuilder toXContent(XContentBuilder builder, ToXContent.Params params) throws IOException {
    builder.startObject();
    if (_analyzer != null) {
      builder.field(ANALYZER.getPreferredName(), _analyzer);
    }
    if (_boost != null) {
      builder.field(BOOST.getPreferredName(), _boost);
    }
    if (_fielddata != null) {
      builder.field(FIELDDATA.getPreferredName());
      _fielddata.toXContent(builder, params);
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
    if (_norms != null) {
      builder.field(NORMS.getPreferredName(), _norms);
    }
    if (_nullValue != null) {
      builder.field(NULL_VALUE.getPreferredName(), _nullValue);
    }
    if (_positionIncrementGap != null) {
      builder.field(POSITION_INCREMENT_GAP.getPreferredName(), _positionIncrementGap);
    }
    if (_searchAnalyzer != null) {
      builder.field(SEARCH_ANALYZER.getPreferredName(), _searchAnalyzer);
    }
    if (_termVector != null) {
      builder.field(TERM_VECTOR.getPreferredName());
      _termVector.toXContent(builder, params);
    }
    if (_type != null) {
      builder.field(TYPE.getPreferredName(), _type);
    }
    builder.endObject();
    return builder;
  }

  @Override
  public GenericProperty fromXContent(XContentParser parser) throws IOException, XContentParseException {
    return GenericProperty.PARSER.apply(parser, null);
  }

  public static final ObjectParser<GenericProperty, Void> PARSER =
    new ObjectParser<>(GenericProperty.class.getName(), false, GenericProperty::new);

  static {
    PARSER.declareString(GenericProperty::setAnalyzer, ANALYZER);
    PARSER.declareDouble(GenericProperty::setBoost, BOOST);
    PARSER.declareObject(GenericProperty::setFielddata, (p, t) -> StringFielddata.PARSER.apply(p, t), FIELDDATA);
    PARSER.declareInt(GenericProperty::setIgnoreAbove, IGNORE_ABOVE);
    PARSER.declareBoolean(GenericProperty::setIndex, INDEX);
    PARSER.declareField(GenericProperty::setIndexOptions, (p, t) -> IndexOptions.PARSER.apply(p), INDEX_OPTIONS, ObjectParser.ValueType.STRING_OR_NULL);
    PARSER.declareBoolean(GenericProperty::setNorms, NORMS);
    PARSER.declareString(GenericProperty::setNullValue, NULL_VALUE);
    PARSER.declareInt(GenericProperty::setPositionIncrementGap, POSITION_INCREMENT_GAP);
    PARSER.declareString(GenericProperty::setSearchAnalyzer, SEARCH_ANALYZER);
    PARSER.declareField(GenericProperty::setTermVector, (p, t) -> TermVectorOption.PARSER.apply(p), TERM_VECTOR, ObjectParser.ValueType.STRING_OR_NULL);
    PARSER.declareString(GenericProperty::setType, TYPE);
  }

}
