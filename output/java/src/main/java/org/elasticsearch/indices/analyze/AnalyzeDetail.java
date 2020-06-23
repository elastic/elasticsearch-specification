
package org.elasticsearch.indices.analyze;

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
import org.elasticsearch.indices.analyze.*;

public class AnalyzeDetail  implements XContentable<AnalyzeDetail> {
  
  static final ParseField CHARFILTERS = new ParseField("charfilters");
  private List<CharFilterDetail> _charfilters;
  public List<CharFilterDetail> getCharfilters() { return this._charfilters; }
  public AnalyzeDetail setCharfilters(List<CharFilterDetail> val) { this._charfilters = val; return this; }


  static final ParseField CUSTOM_ANALYZER = new ParseField("custom_analyzer");
  private Boolean _customAnalyzer;
  public Boolean getCustomAnalyzer() { return this._customAnalyzer; }
  public AnalyzeDetail setCustomAnalyzer(Boolean val) { this._customAnalyzer = val; return this; }


  static final ParseField TOKENFILTERS = new ParseField("tokenfilters");
  private List<TokenDetail> _tokenfilters;
  public List<TokenDetail> getTokenfilters() { return this._tokenfilters; }
  public AnalyzeDetail setTokenfilters(List<TokenDetail> val) { this._tokenfilters = val; return this; }


  static final ParseField TOKENIZER = new ParseField("tokenizer");
  private TokenDetail _tokenizer;
  public TokenDetail getTokenizer() { return this._tokenizer; }
  public AnalyzeDetail setTokenizer(TokenDetail val) { this._tokenizer = val; return this; }


  
  @Override
  public XContentBuilder toXContent(XContentBuilder builder, ToXContent.Params params) throws IOException {
    builder.startObject();
    if (_charfilters != null) {
      builder.array(CHARFILTERS.getPreferredName(), _charfilters);
    }
    if (_customAnalyzer != null) {
      builder.field(CUSTOM_ANALYZER.getPreferredName(), _customAnalyzer);
    }
    if (_tokenfilters != null) {
      builder.array(TOKENFILTERS.getPreferredName(), _tokenfilters);
    }
    if (_tokenizer != null) {
      builder.field(TOKENIZER.getPreferredName());
      _tokenizer.toXContent(builder, params);
    }
    builder.endObject();
    return builder;
  }

  @Override
  public AnalyzeDetail fromXContent(XContentParser parser) throws IOException, XContentParseException {
    return AnalyzeDetail.PARSER.apply(parser, null);
  }

  public static final ObjectParser<AnalyzeDetail, Void> PARSER =
    new ObjectParser<>(AnalyzeDetail.class.getName(), false, AnalyzeDetail::new);

  static {
    PARSER.declareObjectArray(AnalyzeDetail::setCharfilters, (p, t) -> CharFilterDetail.PARSER.apply(p, t), CHARFILTERS);
    PARSER.declareBoolean(AnalyzeDetail::setCustomAnalyzer, CUSTOM_ANALYZER);
    PARSER.declareObjectArray(AnalyzeDetail::setTokenfilters, (p, t) -> TokenDetail.PARSER.apply(p, t), TOKENFILTERS);
    PARSER.declareObject(AnalyzeDetail::setTokenizer, (p, t) -> TokenDetail.PARSER.apply(p, t), TOKENIZER);
  }

}
