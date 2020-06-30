
package org.elasticsearch.analysis.tokenizers;

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


public class CharGroupTokenizer  implements XContentable<CharGroupTokenizer> {
  
  static final ParseField TOKENIZE_ON_CHARS = new ParseField("tokenize_on_chars");
  private List<String> _tokenizeOnChars;
  public List<String> getTokenizeOnChars() { return this._tokenizeOnChars; }
  public CharGroupTokenizer setTokenizeOnChars(List<String> val) { this._tokenizeOnChars = val; return this; }


  
  @Override
  public XContentBuilder toXContent(XContentBuilder builder, ToXContent.Params params) throws IOException {
    builder.startObject();
    if (_tokenizeOnChars != null) {
      builder.array(TOKENIZE_ON_CHARS.getPreferredName(), _tokenizeOnChars);
    }
    builder.endObject();
    return builder;
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
