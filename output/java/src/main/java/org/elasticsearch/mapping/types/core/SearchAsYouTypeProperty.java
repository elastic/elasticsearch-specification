
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
import org.elasticsearch.mapping.types.core.*;
import org.elasticsearch.internal.*;
import org.elasticsearch.mapping.*;

public class SearchAsYouTypeProperty  implements XContentable<SearchAsYouTypeProperty> {
  
  static final ParseField ANALYZER = new ParseField("analyzer");
  private String _analyzer;
  public String getAnalyzer() { return this._analyzer; }
  public SearchAsYouTypeProperty setAnalyzer(String val) { this._analyzer = val; return this; }


  static final ParseField INDEX = new ParseField("index");
  private Boolean _index;
  public Boolean getIndex() { return this._index; }
  public SearchAsYouTypeProperty setIndex(Boolean val) { this._index = val; return this; }


  static final ParseField INDEX_OPTIONS = new ParseField("index_options");
  private IndexOptions _indexOptions;
  public IndexOptions getIndexOptions() { return this._indexOptions; }
  public SearchAsYouTypeProperty setIndexOptions(IndexOptions val) { this._indexOptions = val; return this; }


  static final ParseField MAX_SHINGLE_SIZE = new ParseField("max_shingle_size");
  private Integer _maxShingleSize;
  public Integer getMaxShingleSize() { return this._maxShingleSize; }
  public SearchAsYouTypeProperty setMaxShingleSize(Integer val) { this._maxShingleSize = val; return this; }


  static final ParseField NORMS = new ParseField("norms");
  private Boolean _norms;
  public Boolean getNorms() { return this._norms; }
  public SearchAsYouTypeProperty setNorms(Boolean val) { this._norms = val; return this; }


  static final ParseField SEARCH_ANALYZER = new ParseField("search_analyzer");
  private String _searchAnalyzer;
  public String getSearchAnalyzer() { return this._searchAnalyzer; }
  public SearchAsYouTypeProperty setSearchAnalyzer(String val) { this._searchAnalyzer = val; return this; }


  static final ParseField SEARCH_QUOTE_ANALYZER = new ParseField("search_quote_analyzer");
  private String _searchQuoteAnalyzer;
  public String getSearchQuoteAnalyzer() { return this._searchQuoteAnalyzer; }
  public SearchAsYouTypeProperty setSearchQuoteAnalyzer(String val) { this._searchQuoteAnalyzer = val; return this; }


  static final ParseField TERM_VECTOR = new ParseField("term_vector");
  private TermVectorOption _termVector;
  public TermVectorOption getTermVector() { return this._termVector; }
  public SearchAsYouTypeProperty setTermVector(TermVectorOption val) { this._termVector = val; return this; }


  
  @Override
  public XContentBuilder toXContent(XContentBuilder builder, ToXContent.Params params) throws IOException {
    builder.startObject();
    if (_analyzer != null) {
      builder.field(ANALYZER.getPreferredName(), _analyzer);
    }
    if (_index != null) {
      builder.field(INDEX.getPreferredName(), _index);
    }
    if (_indexOptions != null) {
      builder.field(INDEX_OPTIONS.getPreferredName());
      _indexOptions.toXContent(builder, params);
    }
    if (_maxShingleSize != null) {
      builder.field(MAX_SHINGLE_SIZE.getPreferredName(), _maxShingleSize);
    }
    if (_norms != null) {
      builder.field(NORMS.getPreferredName(), _norms);
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
  public SearchAsYouTypeProperty fromXContent(XContentParser parser) throws IOException, XContentParseException {
    return SearchAsYouTypeProperty.PARSER.apply(parser, null);
  }

  public static final ObjectParser<SearchAsYouTypeProperty, Void> PARSER =
    new ObjectParser<>(SearchAsYouTypeProperty.class.getName(), false, SearchAsYouTypeProperty::new);

  static {
    PARSER.declareString(SearchAsYouTypeProperty::setAnalyzer, ANALYZER);
    PARSER.declareBoolean(SearchAsYouTypeProperty::setIndex, INDEX);
    PARSER.declareField(SearchAsYouTypeProperty::setIndexOptions, (p, t) -> IndexOptions.PARSER.apply(p), INDEX_OPTIONS, ObjectParser.ValueType.STRING_OR_NULL);
    PARSER.declareInt(SearchAsYouTypeProperty::setMaxShingleSize, MAX_SHINGLE_SIZE);
    PARSER.declareBoolean(SearchAsYouTypeProperty::setNorms, NORMS);
    PARSER.declareString(SearchAsYouTypeProperty::setSearchAnalyzer, SEARCH_ANALYZER);
    PARSER.declareString(SearchAsYouTypeProperty::setSearchQuoteAnalyzer, SEARCH_QUOTE_ANALYZER);
    PARSER.declareField(SearchAsYouTypeProperty::setTermVector, (p, t) -> TermVectorOption.PARSER.apply(p), TERM_VECTOR, ObjectParser.ValueType.STRING_OR_NULL);
  }

}
