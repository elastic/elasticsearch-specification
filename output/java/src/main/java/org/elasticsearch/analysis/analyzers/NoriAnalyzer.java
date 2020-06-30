
package org.elasticsearch.analysis.analyzers;

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

public class NoriAnalyzer  implements XContentable<NoriAnalyzer> {
  
  static final ParseField DECOMPOUND_MODE = new ParseField("decompound_mode");
  private NoriDecompoundMode _decompoundMode;
  public NoriDecompoundMode getDecompoundMode() { return this._decompoundMode; }
  public NoriAnalyzer setDecompoundMode(NoriDecompoundMode val) { this._decompoundMode = val; return this; }


  static final ParseField STOPTAGS = new ParseField("stoptags");
  private List<String> _stoptags;
  public List<String> getStoptags() { return this._stoptags; }
  public NoriAnalyzer setStoptags(List<String> val) { this._stoptags = val; return this; }


  static final ParseField USER_DICTIONARY = new ParseField("user_dictionary");
  private String _userDictionary;
  public String getUserDictionary() { return this._userDictionary; }
  public NoriAnalyzer setUserDictionary(String val) { this._userDictionary = val; return this; }


  
  @Override
  public XContentBuilder toXContent(XContentBuilder builder, ToXContent.Params params) throws IOException {
    builder.startObject();
    if (_decompoundMode != null) {
      builder.field(DECOMPOUND_MODE.getPreferredName());
      _decompoundMode.toXContent(builder, params);
    }
    if (_stoptags != null) {
      builder.array(STOPTAGS.getPreferredName(), _stoptags);
    }
    if (_userDictionary != null) {
      builder.field(USER_DICTIONARY.getPreferredName(), _userDictionary);
    }
    builder.endObject();
    return builder;
  }

  @Override
  public NoriAnalyzer fromXContent(XContentParser parser) throws IOException, XContentParseException {
    return NoriAnalyzer.PARSER.apply(parser, null);
  }

  public static final ObjectParser<NoriAnalyzer, Void> PARSER =
    new ObjectParser<>(NoriAnalyzer.class.getName(), false, NoriAnalyzer::new);

  static {
    PARSER.declareField(NoriAnalyzer::setDecompoundMode, (p, t) -> NoriDecompoundMode.PARSER.apply(p), DECOMPOUND_MODE, ObjectParser.ValueType.STRING_OR_NULL);
    PARSER.declareStringArray(NoriAnalyzer::setStoptags, STOPTAGS);
    PARSER.declareString(NoriAnalyzer::setUserDictionary, USER_DICTIONARY);
  }

}
