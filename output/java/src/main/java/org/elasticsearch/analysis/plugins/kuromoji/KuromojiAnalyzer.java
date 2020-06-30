
package org.elasticsearch.analysis.plugins.kuromoji;

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
import org.elasticsearch.analysis.plugins.kuromoji.*;

public class KuromojiAnalyzer  implements XContentable<KuromojiAnalyzer> {
  
  static final ParseField MODE = new ParseField("mode");
  private KuromojiTokenizationMode _mode;
  public KuromojiTokenizationMode getMode() { return this._mode; }
  public KuromojiAnalyzer setMode(KuromojiTokenizationMode val) { this._mode = val; return this; }


  static final ParseField USER_DICTIONARY = new ParseField("user_dictionary");
  private String _userDictionary;
  public String getUserDictionary() { return this._userDictionary; }
  public KuromojiAnalyzer setUserDictionary(String val) { this._userDictionary = val; return this; }


  
  @Override
  public XContentBuilder toXContent(XContentBuilder builder, ToXContent.Params params) throws IOException {
    builder.startObject();
    if (_mode != null) {
      builder.field(MODE.getPreferredName());
      _mode.toXContent(builder, params);
    }
    if (_userDictionary != null) {
      builder.field(USER_DICTIONARY.getPreferredName(), _userDictionary);
    }
    builder.endObject();
    return builder;
  }

  @Override
  public KuromojiAnalyzer fromXContent(XContentParser parser) throws IOException, XContentParseException {
    return KuromojiAnalyzer.PARSER.apply(parser, null);
  }

  public static final ObjectParser<KuromojiAnalyzer, Void> PARSER =
    new ObjectParser<>(KuromojiAnalyzer.class.getName(), false, KuromojiAnalyzer::new);

  static {
    PARSER.declareField(KuromojiAnalyzer::setMode, (p, t) -> KuromojiTokenizationMode.PARSER.apply(p), MODE, ObjectParser.ValueType.STRING_OR_NULL);
    PARSER.declareString(KuromojiAnalyzer::setUserDictionary, USER_DICTIONARY);
  }

}
