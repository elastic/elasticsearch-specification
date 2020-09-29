
package org.elasticsearch.analysis.tokenizers.n_gram;

import java.io.IOException;
import java.util.Date;
import java.util.List;
import java.util.HashMap;
import java.time.Instant;
import java.time.format.DateTimeFormatter;
import org.elasticsearch.*;
import org.elasticsearch.common.ParseField;
import org.elasticsearch.common.xcontent.*;
import org.elasticsearch.internal.*;
import org.elasticsearch.analysis.tokenizers.n_gram.*;
import org.elasticsearch.analysis.tokenizers.*;

public class EdgeNGramTokenizer extends TokenizerBase implements XContentable<EdgeNGramTokenizer> {
  
  static final ParseField CUSTOM_TOKEN_CHARS = new ParseField("custom_token_chars");
  private String _customTokenChars;
  public String getCustomTokenChars() { return this._customTokenChars; }
  public EdgeNGramTokenizer setCustomTokenChars(String val) { this._customTokenChars = val; return this; }

  static final ParseField MAX_GRAM = new ParseField("max_gram");
  private int _maxGram;
  private boolean _maxGram$isSet;
  public int getMaxGram() { return this._maxGram; }
  public EdgeNGramTokenizer setMaxGram(int val) {
    this._maxGram = val;
    _maxGram$isSet = true;
    return this;
  }

  static final ParseField MIN_GRAM = new ParseField("min_gram");
  private int _minGram;
  private boolean _minGram$isSet;
  public int getMinGram() { return this._minGram; }
  public EdgeNGramTokenizer setMinGram(int val) {
    this._minGram = val;
    _minGram$isSet = true;
    return this;
  }

  static final ParseField TOKEN_CHARS = new ParseField("token_chars");
  private List<TokenChar> _tokenChars;
  public List<TokenChar> getTokenChars() { return this._tokenChars; }
  public EdgeNGramTokenizer setTokenChars(List<TokenChar> val) { this._tokenChars = val; return this; }


  
  @Override
  public void toXContentInternal(XContentBuilder builder, ToXContent.Params params) throws IOException {
    super.toXContentInternal(builder, params);
    if (_customTokenChars != null) {
      builder.field(CUSTOM_TOKEN_CHARS.getPreferredName(), _customTokenChars);
    }
    if (_maxGram$isSet) {
      builder.field(MAX_GRAM.getPreferredName(), _maxGram);
    }
    if (_minGram$isSet) {
      builder.field(MIN_GRAM.getPreferredName(), _minGram);
    }
    if (_tokenChars != null) {
      builder.array(TOKEN_CHARS.getPreferredName(), _tokenChars);
    }
  }

  @Override
  public EdgeNGramTokenizer fromXContent(XContentParser parser) throws IOException, XContentParseException {
    return EdgeNGramTokenizer.PARSER.apply(parser, null);
  }

  public static final ObjectParser<EdgeNGramTokenizer, Void> PARSER =
    new ObjectParser<>(EdgeNGramTokenizer.class.getName(), false, EdgeNGramTokenizer::new);

  static {
    PARSER.declareString(EdgeNGramTokenizer::setCustomTokenChars, CUSTOM_TOKEN_CHARS);
    PARSER.declareInt(EdgeNGramTokenizer::setMaxGram, MAX_GRAM);
    PARSER.declareInt(EdgeNGramTokenizer::setMinGram, MIN_GRAM);
    PARSER.declareFieldArray(EdgeNGramTokenizer::setTokenChars, (p, t) -> TokenChar.PARSER.apply(p), TOKEN_CHARS, ObjectParser.ValueType.STRING_ARRAY);
  }

}
