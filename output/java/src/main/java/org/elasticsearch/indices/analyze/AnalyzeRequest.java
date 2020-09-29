
package org.elasticsearch.indices.analyze;

import java.io.IOException;
import java.util.Date;
import java.util.List;
import java.util.HashMap;
import java.time.Instant;
import java.time.format.DateTimeFormatter;
import org.elasticsearch.*;
import org.elasticsearch.common.ParseField;
import org.elasticsearch.common.xcontent.*;
import org.elasticsearch.analysis.char_filters.*;
import org.elasticsearch.internal.*;
import org.elasticsearch.analysis.token_filters.*;
import org.elasticsearch.analysis.tokenizers.*;
import org.elasticsearch.common_abstractions.request.*;

public class AnalyzeRequest extends RequestBase<AnalyzeRequest> implements XContentable<AnalyzeRequest> {
  
  static final ParseField ANALYZER = new ParseField("analyzer");
  private String _analyzer;
  public String getAnalyzer() { return this._analyzer; }
  public AnalyzeRequest setAnalyzer(String val) { this._analyzer = val; return this; }

  static final ParseField ATTRIBUTES = new ParseField("attributes");
  private List<String> _attributes;
  public List<String> getAttributes() { return this._attributes; }
  public AnalyzeRequest setAttributes(List<String> val) { this._attributes = val; return this; }

  static final ParseField CHAR_FILTER = new ParseField("char_filter");
  private List<Union2<String, ICharFilter>> _charFilter;
  public List<Union2<String, ICharFilter>> getCharFilter() { return this._charFilter; }
  public AnalyzeRequest setCharFilter(List<Union2<String, ICharFilter>> val) { this._charFilter = val; return this; }

  static final ParseField EXPLAIN = new ParseField("explain");
  private Boolean _explain;
  public Boolean getExplain() { return this._explain; }
  public AnalyzeRequest setExplain(Boolean val) { this._explain = val; return this; }

  static final ParseField FIELD = new ParseField("field");
  private String _field;
  public String getField() { return this._field; }
  public AnalyzeRequest setField(String val) { this._field = val; return this; }

  static final ParseField FILTER = new ParseField("filter");
  private List<Union2<String, ITokenFilter>> _filter;
  public List<Union2<String, ITokenFilter>> getFilter() { return this._filter; }
  public AnalyzeRequest setFilter(List<Union2<String, ITokenFilter>> val) { this._filter = val; return this; }

  static final ParseField NORMALIZER = new ParseField("normalizer");
  private String _normalizer;
  public String getNormalizer() { return this._normalizer; }
  public AnalyzeRequest setNormalizer(String val) { this._normalizer = val; return this; }

  static final ParseField TEXT = new ParseField("text");
  private List<String> _text;
  public List<String> getText() { return this._text; }
  public AnalyzeRequest setText(List<String> val) { this._text = val; return this; }

  static final ParseField TOKENIZER = new ParseField("tokenizer");
  private Union2<String, ITokenizer> _tokenizer;
  public Union2<String, ITokenizer> getTokenizer() { return this._tokenizer; }
  public AnalyzeRequest setTokenizer(Union2<String, ITokenizer> val) { this._tokenizer = val; return this; }


  
  @Override
  public void toXContentInternal(XContentBuilder builder, ToXContent.Params params) throws IOException {
    super.toXContentInternal(builder, params);
    if (_analyzer != null) {
      builder.field(ANALYZER.getPreferredName(), _analyzer);
    }
    if (_attributes != null) {
      builder.array(ATTRIBUTES.getPreferredName(), _attributes);
    }
    if (_charFilter != null) {
      builder.array(CHAR_FILTER.getPreferredName(), _charFilter);
    }
    if (_explain != null) {
      builder.field(EXPLAIN.getPreferredName(), _explain);
    }
    if (_field != null) {
      builder.field(FIELD.getPreferredName(), _field);
    }
    if (_filter != null) {
      builder.array(FILTER.getPreferredName(), _filter);
    }
    if (_normalizer != null) {
      builder.field(NORMALIZER.getPreferredName(), _normalizer);
    }
    if (_text != null) {
      builder.array(TEXT.getPreferredName(), _text);
    }
    if (_tokenizer != null) {
      builder.field(TOKENIZER.getPreferredName());
      _tokenizer.toXContent(builder, params);
    }
  }

  @Override
  public AnalyzeRequest fromXContent(XContentParser parser) throws IOException, XContentParseException {
    return AnalyzeRequest.PARSER.apply(parser, null);
  }

  public static final ObjectParser<AnalyzeRequest, Void> PARSER =
    new ObjectParser<>(AnalyzeRequest.class.getName(), false, AnalyzeRequest::new);

  static {
    PARSER.declareString(AnalyzeRequest::setAnalyzer, ANALYZER);
    PARSER.declareStringArray(AnalyzeRequest::setAttributes, ATTRIBUTES);
    PARSER.declareObjectArray(AnalyzeRequest::setCharFilter, (p, t) ->  new Union2<String, ICharFilter>(), CHAR_FILTER);
    PARSER.declareBoolean(AnalyzeRequest::setExplain, EXPLAIN);
    PARSER.declareString(AnalyzeRequest::setField, FIELD);
    PARSER.declareObjectArray(AnalyzeRequest::setFilter, (p, t) ->  new Union2<String, ITokenFilter>(), FILTER);
    PARSER.declareString(AnalyzeRequest::setNormalizer, NORMALIZER);
    PARSER.declareStringArray(AnalyzeRequest::setText, TEXT);
    PARSER.declareObject(AnalyzeRequest::setTokenizer, (p, t) ->  new Union2<String, ITokenizer>(), TOKENIZER);
  }

}
