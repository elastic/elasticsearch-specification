
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
import org.elasticsearch.modules.indices.fielddata.*;
import org.elasticsearch.mapping.types.core.*;
import org.elasticsearch.mapping.*;

public class TextProperty  implements XContentable<TextProperty> {
  
  static final ParseField ANALYZER = new ParseField("analyzer");
  private String _analyzer;
  public String getAnalyzer() { return this._analyzer; }
  public TextProperty setAnalyzer(String val) { this._analyzer = val; return this; }


  static final ParseField BOOST = new ParseField("boost");
  private Double _boost;
  public Double getBoost() { return this._boost; }
  public TextProperty setBoost(Double val) { this._boost = val; return this; }


  static final ParseField EAGER_GLOBAL_ORDINALS = new ParseField("eager_global_ordinals");
  private Boolean _eagerGlobalOrdinals;
  public Boolean getEagerGlobalOrdinals() { return this._eagerGlobalOrdinals; }
  public TextProperty setEagerGlobalOrdinals(Boolean val) { this._eagerGlobalOrdinals = val; return this; }


  static final ParseField FIELDDATA = new ParseField("fielddata");
  private Boolean _fielddata;
  public Boolean getFielddata() { return this._fielddata; }
  public TextProperty setFielddata(Boolean val) { this._fielddata = val; return this; }


  static final ParseField FIELDDATA_FREQUENCY_FILTER = new ParseField("fielddata_frequency_filter");
  private FielddataFrequencyFilter _fielddataFrequencyFilter;
  public FielddataFrequencyFilter getFielddataFrequencyFilter() { return this._fielddataFrequencyFilter; }
  public TextProperty setFielddataFrequencyFilter(FielddataFrequencyFilter val) { this._fielddataFrequencyFilter = val; return this; }


  static final ParseField INDEX = new ParseField("index");
  private Boolean _index;
  public Boolean getIndex() { return this._index; }
  public TextProperty setIndex(Boolean val) { this._index = val; return this; }


  static final ParseField INDEX_OPTIONS = new ParseField("index_options");
  private IndexOptions _indexOptions;
  public IndexOptions getIndexOptions() { return this._indexOptions; }
  public TextProperty setIndexOptions(IndexOptions val) { this._indexOptions = val; return this; }


  static final ParseField INDEX_PHRASES = new ParseField("index_phrases");
  private Boolean _indexPhrases;
  public Boolean getIndexPhrases() { return this._indexPhrases; }
  public TextProperty setIndexPhrases(Boolean val) { this._indexPhrases = val; return this; }


  static final ParseField INDEX_PREFIXES = new ParseField("index_prefixes");
  private TextIndexPrefixes _indexPrefixes;
  public TextIndexPrefixes getIndexPrefixes() { return this._indexPrefixes; }
  public TextProperty setIndexPrefixes(TextIndexPrefixes val) { this._indexPrefixes = val; return this; }


  static final ParseField NORMS = new ParseField("norms");
  private Boolean _norms;
  public Boolean getNorms() { return this._norms; }
  public TextProperty setNorms(Boolean val) { this._norms = val; return this; }


  static final ParseField POSITION_INCREMENT_GAP = new ParseField("position_increment_gap");
  private Integer _positionIncrementGap;
  public Integer getPositionIncrementGap() { return this._positionIncrementGap; }
  public TextProperty setPositionIncrementGap(Integer val) { this._positionIncrementGap = val; return this; }


  static final ParseField SEARCH_ANALYZER = new ParseField("search_analyzer");
  private String _searchAnalyzer;
  public String getSearchAnalyzer() { return this._searchAnalyzer; }
  public TextProperty setSearchAnalyzer(String val) { this._searchAnalyzer = val; return this; }


  static final ParseField SEARCH_QUOTE_ANALYZER = new ParseField("search_quote_analyzer");
  private String _searchQuoteAnalyzer;
  public String getSearchQuoteAnalyzer() { return this._searchQuoteAnalyzer; }
  public TextProperty setSearchQuoteAnalyzer(String val) { this._searchQuoteAnalyzer = val; return this; }


  static final ParseField TERM_VECTOR = new ParseField("term_vector");
  private TermVectorOption _termVector;
  public TermVectorOption getTermVector() { return this._termVector; }
  public TextProperty setTermVector(TermVectorOption val) { this._termVector = val; return this; }


  
  @Override
  public XContentBuilder toXContent(XContentBuilder builder, ToXContent.Params params) throws IOException {
    builder.startObject();
    if (_analyzer != null) {
      builder.field(ANALYZER.getPreferredName(), _analyzer);
    }
    if (_boost != null) {
      builder.field(BOOST.getPreferredName(), _boost);
    }
    if (_eagerGlobalOrdinals != null) {
      builder.field(EAGER_GLOBAL_ORDINALS.getPreferredName(), _eagerGlobalOrdinals);
    }
    if (_fielddata != null) {
      builder.field(FIELDDATA.getPreferredName(), _fielddata);
    }
    if (_fielddataFrequencyFilter != null) {
      builder.field(FIELDDATA_FREQUENCY_FILTER.getPreferredName());
      _fielddataFrequencyFilter.toXContent(builder, params);
    }
    if (_index != null) {
      builder.field(INDEX.getPreferredName(), _index);
    }
    if (_indexOptions != null) {
      builder.field(INDEX_OPTIONS.getPreferredName());
      _indexOptions.toXContent(builder, params);
    }
    if (_indexPhrases != null) {
      builder.field(INDEX_PHRASES.getPreferredName(), _indexPhrases);
    }
    if (_indexPrefixes != null) {
      builder.field(INDEX_PREFIXES.getPreferredName());
      _indexPrefixes.toXContent(builder, params);
    }
    if (_norms != null) {
      builder.field(NORMS.getPreferredName(), _norms);
    }
    if (_positionIncrementGap != null) {
      builder.field(POSITION_INCREMENT_GAP.getPreferredName(), _positionIncrementGap);
    }
    if (_searchAnalyzer != null) {
      builder.field(SEARCH_ANALYZER.getPreferredName(), _searchAnalyzer);
    }
    if (_searchQuoteAnalyzer != null) {
      builder.field(SEARCH_QUOTE_ANALYZER.getPreferredName(), _searchQuoteAnalyzer);
    }
    if (_termVector != null) {
      builder.field(TERM_VECTOR.getPreferredName());
      _termVector.toXContent(builder, params);
    }
    builder.endObject();
    return builder;
  }

  @Override
  public TextProperty fromXContent(XContentParser parser) throws IOException, XContentParseException {
    return TextProperty.PARSER.apply(parser, null);
  }

  public static final ObjectParser<TextProperty, Void> PARSER =
    new ObjectParser<>(TextProperty.class.getName(), false, TextProperty::new);

  static {
    PARSER.declareString(TextProperty::setAnalyzer, ANALYZER);
    PARSER.declareDouble(TextProperty::setBoost, BOOST);
    PARSER.declareBoolean(TextProperty::setEagerGlobalOrdinals, EAGER_GLOBAL_ORDINALS);
    PARSER.declareBoolean(TextProperty::setFielddata, FIELDDATA);
    PARSER.declareObject(TextProperty::setFielddataFrequencyFilter, (p, t) -> FielddataFrequencyFilter.PARSER.apply(p, t), FIELDDATA_FREQUENCY_FILTER);
    PARSER.declareBoolean(TextProperty::setIndex, INDEX);
    PARSER.declareField(TextProperty::setIndexOptions, (p, t) -> IndexOptions.PARSER.apply(p), INDEX_OPTIONS, ObjectParser.ValueType.STRING_OR_NULL);
    PARSER.declareBoolean(TextProperty::setIndexPhrases, INDEX_PHRASES);
    PARSER.declareObject(TextProperty::setIndexPrefixes, (p, t) -> TextIndexPrefixes.PARSER.apply(p, t), INDEX_PREFIXES);
    PARSER.declareBoolean(TextProperty::setNorms, NORMS);
    PARSER.declareInt(TextProperty::setPositionIncrementGap, POSITION_INCREMENT_GAP);
    PARSER.declareString(TextProperty::setSearchAnalyzer, SEARCH_ANALYZER);
    PARSER.declareString(TextProperty::setSearchQuoteAnalyzer, SEARCH_QUOTE_ANALYZER);
    PARSER.declareField(TextProperty::setTermVector, (p, t) -> TermVectorOption.PARSER.apply(p), TERM_VECTOR, ObjectParser.ValueType.STRING_OR_NULL);
  }

}
