
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
import org.elasticsearch.analysis.tokenizers.*;

public class NoriTokenizer  implements XContentable<NoriTokenizer> {
  
  static final ParseField DECOMPOUND_MODE = new ParseField("decompound_mode");
  private NoriDecompoundMode _decompoundMode;
  public NoriDecompoundMode getDecompoundMode() { return this._decompoundMode; }
  public NoriTokenizer setDecompoundMode(NoriDecompoundMode val) { this._decompoundMode = val; return this; }


  static final ParseField DISCARD_PUNCTUATION = new ParseField("discard_punctuation");
  private Boolean _discardPunctuation;
  public Boolean getDiscardPunctuation() { return this._discardPunctuation; }
  public NoriTokenizer setDiscardPunctuation(Boolean val) { this._discardPunctuation = val; return this; }


  static final ParseField USER_DICTIONARY = new ParseField("user_dictionary");
  private String _userDictionary;
  public String getUserDictionary() { return this._userDictionary; }
  public NoriTokenizer setUserDictionary(String val) { this._userDictionary = val; return this; }


  static final ParseField USER_DICTIONARY_RULES = new ParseField("user_dictionary_rules");
  private List<String> _userDictionaryRules;
  public List<String> getUserDictionaryRules() { return this._userDictionaryRules; }
  public NoriTokenizer setUserDictionaryRules(List<String> val) { this._userDictionaryRules = val; return this; }


  
  @Override
  public XContentBuilder toXContent(XContentBuilder builder, ToXContent.Params params) throws IOException {
    builder.startObject();
    if (_decompoundMode != null) {
      builder.field(DECOMPOUND_MODE.getPreferredName());
      _decompoundMode.toXContent(builder, params);
    }
    if (_discardPunctuation != null) {
      builder.field(DISCARD_PUNCTUATION.getPreferredName(), _discardPunctuation);
    }
    if (_userDictionary != null) {
      builder.field(USER_DICTIONARY.getPreferredName(), _userDictionary);
    }
    if (_userDictionaryRules != null) {
      builder.array(USER_DICTIONARY_RULES.getPreferredName(), _userDictionaryRules);
    }
    builder.endObject();
    return builder;
  }

  @Override
  public NoriTokenizer fromXContent(XContentParser parser) throws IOException, XContentParseException {
    return NoriTokenizer.PARSER.apply(parser, null);
  }

  public static final ObjectParser<NoriTokenizer, Void> PARSER =
    new ObjectParser<>(NoriTokenizer.class.getName(), false, NoriTokenizer::new);

  static {
    PARSER.declareField(NoriTokenizer::setDecompoundMode, (p, t) -> NoriDecompoundMode.PARSER.apply(p), DECOMPOUND_MODE, ObjectParser.ValueType.STRING_OR_NULL);
    PARSER.declareBoolean(NoriTokenizer::setDiscardPunctuation, DISCARD_PUNCTUATION);
    PARSER.declareString(NoriTokenizer::setUserDictionary, USER_DICTIONARY);
    PARSER.declareStringArray(NoriTokenizer::setUserDictionaryRules, USER_DICTIONARY_RULES);
  }

}
