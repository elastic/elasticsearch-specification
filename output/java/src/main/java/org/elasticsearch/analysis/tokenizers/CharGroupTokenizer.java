
package org.elasticsearch.analysis.tokenizers;

import java.io.IOException;
import java.util.Date;
import java.util.List;
import java.util.HashMap;
import java.time.Instant;
import java.time.format.DateTimeFormatter;
import org.elasticsearch.*;
import org.elasticsearch.common.ParseField;
import org.elasticsearch.common.xcontent.*;
import org.elasticsearch.analysis.tokenizers.*;

public class CharGroupTokenizer extends TokenizerBase implements XContentable<CharGroupTokenizer> {
  
  static final ParseField TOKENIZE_ON_CHARS = new ParseField("tokenize_on_chars");
  private List<String> _tokenizeOnChars;
  public List<String> getTokenizeOnChars() { return this._tokenizeOnChars; }
  public CharGroupTokenizer setTokenizeOnChars(List<String> val) { this._tokenizeOnChars = val; return this; }


  
  @Override
  public void toXContentInternal(XContentBuilder builder, ToXContent.Params params) throws IOException {
    super.toXContentInternal(builder, params);
    if (_tokenizeOnChars != null) {
      builder.array(TOKENIZE_ON_CHARS.getPreferredName(), _tokenizeOnChars);
    }
  }

  @Override
  public CharGroupTokenizer fromXContent(XContentParser parser) throws IOException, XContentParseException {
    return CharGroupTokenizer.PARSER.apply(parser, null);
  }

  public static final ObjectParser<CharGroupTokenizer, Void> PARSER =
    new ObjectParser<>(CharGroupTokenizer.class.getName(), false, CharGroupTokenizer::new);

  static {
    PARSER.declareStringArray(CharGroupTokenizer::setTokenizeOnChars, TOKENIZE_ON_CHARS);
  }

}
