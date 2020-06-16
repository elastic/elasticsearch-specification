
package org.elasticsearch.analysis.tokenizers.n_gram;

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
import org.elasticsearch.analysis.tokenizers.n_gram.*;

public class NGramTokenizer  implements XContentable<NGramTokenizer> {
  
  static final ParseField MAX_GRAM = new ParseField("max_gram");
  private Integer _maxGram;
  public Integer getMaxGram() { return this._maxGram; }
  public NGramTokenizer setMaxGram(Integer val) { this._maxGram = val; return this; }


  static final ParseField MIN_GRAM = new ParseField("min_gram");
  private Integer _minGram;
  public Integer getMinGram() { return this._minGram; }
  public NGramTokenizer setMinGram(Integer val) { this._minGram = val; return this; }


  static final ParseField TOKEN_CHARS = new ParseField("token_chars");
  private List<TokenChar> _tokenChars;
  public List<TokenChar> getTokenChars() { return this._tokenChars; }
  public NGramTokenizer setTokenChars(List<TokenChar> val) { this._tokenChars = val; return this; }


  static final ParseField CUSTOM_TOKEN_CHARS = new ParseField("custom_token_chars");
  private String _customTokenChars;
  public String getCustomTokenChars() { return this._customTokenChars; }
  public NGramTokenizer setCustomTokenChars(String val) { this._customTokenChars = val; return this; }


  
  @Override
  public XContentBuilder toXContent(XContentBuilder builder, ToXContent.Params params) throws IOException {
    builder.startObject();
    if (_maxGram != null) {
      builder.field(MAX_GRAM.getPreferredName(), _maxGram);
    }
    if (_minGram != null) {
      builder.field(MIN_GRAM.getPreferredName(), _minGram);
    }
    if (_tokenChars != null) {
      builder.array(TOKEN_CHARS.getPreferredName(), _tokenChars);
    }
    if (_customTokenChars != null) {
      builder.field(CUSTOM_TOKEN_CHARS.getPreferredName(), _customTokenChars);
    }
    builder.endObject();
    return builder;
  }

  @Override
  public NGramTokenizer fromXContent(XContentParser parser) throws IOException, XContentParseException {
    return NGramTokenizer.PARSER.apply(parser, null);
  }

  public static final ObjectParser<NGramTokenizer, Void> PARSER =
    new ObjectParser<>(NGramTokenizer.class.getName(), false, NGramTokenizer::new);

  static {
    PARSER.declareInt(NGramTokenizer::setMaxGram, MAX_GRAM);
    PARSER.declareInt(NGramTokenizer::setMinGram, MIN_GRAM);
    PARSER.declareFieldArray(NGramTokenizer::setTokenChars, (p, t) -> TokenChar.PARSER.apply(p), TOKEN_CHARS, ObjectParser.ValueType.STRING_ARRAY);
    PARSER.declareString(NGramTokenizer::setCustomTokenChars, CUSTOM_TOKEN_CHARS);
  }

}
