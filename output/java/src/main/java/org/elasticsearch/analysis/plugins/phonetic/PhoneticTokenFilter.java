
package org.elasticsearch.analysis.plugins.phonetic;

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
import org.elasticsearch.analysis.plugins.phonetic.*;
import org.elasticsearch.internal.*;

public class PhoneticTokenFilter  implements XContentable<PhoneticTokenFilter> {
  
  static final ParseField ENCODER = new ParseField("encoder");
  private PhoneticEncoder _encoder;
  public PhoneticEncoder getEncoder() { return this._encoder; }
  public PhoneticTokenFilter setEncoder(PhoneticEncoder val) { this._encoder = val; return this; }


  static final ParseField LANGUAGESET = new ParseField("languageset");
  private List<PhoneticLanguage> _languageset;
  public List<PhoneticLanguage> getLanguageset() { return this._languageset; }
  public PhoneticTokenFilter setLanguageset(List<PhoneticLanguage> val) { this._languageset = val; return this; }


  static final ParseField MAX_CODE_LEN = new ParseField("max_code_len");
  private Integer _maxCodeLen;
  public Integer getMaxCodeLen() { return this._maxCodeLen; }
  public PhoneticTokenFilter setMaxCodeLen(Integer val) { this._maxCodeLen = val; return this; }


  static final ParseField NAME_TYPE = new ParseField("name_type");
  private PhoneticNameType _nameType;
  public PhoneticNameType getNameType() { return this._nameType; }
  public PhoneticTokenFilter setNameType(PhoneticNameType val) { this._nameType = val; return this; }


  static final ParseField REPLACE = new ParseField("replace");
  private Boolean _replace;
  public Boolean getReplace() { return this._replace; }
  public PhoneticTokenFilter setReplace(Boolean val) { this._replace = val; return this; }


  static final ParseField RULE_TYPE = new ParseField("rule_type");
  private PhoneticRuleType _ruleType;
  public PhoneticRuleType getRuleType() { return this._ruleType; }
  public PhoneticTokenFilter setRuleType(PhoneticRuleType val) { this._ruleType = val; return this; }


  
  @Override
  public XContentBuilder toXContent(XContentBuilder builder, ToXContent.Params params) throws IOException {
    builder.startObject();
    if (_encoder != null) {
      builder.field(ENCODER.getPreferredName());
      _encoder.toXContent(builder, params);
    }
    if (_languageset != null) {
      builder.array(LANGUAGESET.getPreferredName(), _languageset);
    }
    if (_maxCodeLen != null) {
      builder.field(MAX_CODE_LEN.getPreferredName(), _maxCodeLen);
    }
    if (_nameType != null) {
      builder.field(NAME_TYPE.getPreferredName());
      _nameType.toXContent(builder, params);
    }
    if (_replace != null) {
      builder.field(REPLACE.getPreferredName(), _replace);
    }
    if (_ruleType != null) {
      builder.field(RULE_TYPE.getPreferredName());
      _ruleType.toXContent(builder, params);
    }
    builder.endObject();
    return builder;
  }

  @Override
  public PhoneticTokenFilter fromXContent(XContentParser parser) throws IOException, XContentParseException {
    return PhoneticTokenFilter.PARSER.apply(parser, null);
  }

  public static final ObjectParser<PhoneticTokenFilter, Void> PARSER =
    new ObjectParser<>(PhoneticTokenFilter.class.getName(), false, PhoneticTokenFilter::new);

  static {
    PARSER.declareField(PhoneticTokenFilter::setEncoder, (p, t) -> PhoneticEncoder.PARSER.apply(p), ENCODER, ObjectParser.ValueType.STRING_OR_NULL);
    PARSER.declareFieldArray(PhoneticTokenFilter::setLanguageset, (p, t) -> PhoneticLanguage.PARSER.apply(p), LANGUAGESET, ObjectParser.ValueType.STRING_ARRAY);
    PARSER.declareInt(PhoneticTokenFilter::setMaxCodeLen, MAX_CODE_LEN);
    PARSER.declareField(PhoneticTokenFilter::setNameType, (p, t) -> PhoneticNameType.PARSER.apply(p), NAME_TYPE, ObjectParser.ValueType.STRING_OR_NULL);
    PARSER.declareBoolean(PhoneticTokenFilter::setReplace, REPLACE);
    PARSER.declareField(PhoneticTokenFilter::setRuleType, (p, t) -> PhoneticRuleType.PARSER.apply(p), RULE_TYPE, ObjectParser.ValueType.STRING_OR_NULL);
  }

}
