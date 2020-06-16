
package org.elasticsearch.analysis.plugins.icu;

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
import org.elasticsearch.analysis.plugins.icu.collation.*;

public class IcuCollationTokenFilter  implements XContentable<IcuCollationTokenFilter> {
  
  static final ParseField ALTERNATE = new ParseField("alternate");
  private IcuCollationAlternate _alternate;
  public IcuCollationAlternate getAlternate() { return this._alternate; }
  public IcuCollationTokenFilter setAlternate(IcuCollationAlternate val) { this._alternate = val; return this; }


  static final ParseField CASE_FIRST = new ParseField("caseFirst");
  private IcuCollationCaseFirst _caseFirst;
  public IcuCollationCaseFirst getCaseFirst() { return this._caseFirst; }
  public IcuCollationTokenFilter setCaseFirst(IcuCollationCaseFirst val) { this._caseFirst = val; return this; }


  static final ParseField CASE_LEVEL = new ParseField("caseLevel");
  private Boolean _caseLevel;
  public Boolean getCaseLevel() { return this._caseLevel; }
  public IcuCollationTokenFilter setCaseLevel(Boolean val) { this._caseLevel = val; return this; }


  static final ParseField COUNTRY = new ParseField("country");
  private String _country;
  public String getCountry() { return this._country; }
  public IcuCollationTokenFilter setCountry(String val) { this._country = val; return this; }


  static final ParseField DECOMPOSITION = new ParseField("decomposition");
  private IcuCollationDecomposition _decomposition;
  public IcuCollationDecomposition getDecomposition() { return this._decomposition; }
  public IcuCollationTokenFilter setDecomposition(IcuCollationDecomposition val) { this._decomposition = val; return this; }


  static final ParseField HIRAGANA_QUATERNARY_MODE = new ParseField("hiraganaQuaternaryMode");
  private Boolean _hiraganaQuaternaryMode;
  public Boolean getHiraganaQuaternaryMode() { return this._hiraganaQuaternaryMode; }
  public IcuCollationTokenFilter setHiraganaQuaternaryMode(Boolean val) { this._hiraganaQuaternaryMode = val; return this; }


  static final ParseField LANGUAGE = new ParseField("language");
  private String _language;
  public String getLanguage() { return this._language; }
  public IcuCollationTokenFilter setLanguage(String val) { this._language = val; return this; }


  static final ParseField NUMERIC = new ParseField("numeric");
  private Boolean _numeric;
  public Boolean getNumeric() { return this._numeric; }
  public IcuCollationTokenFilter setNumeric(Boolean val) { this._numeric = val; return this; }


  static final ParseField STRENGTH = new ParseField("strength");
  private IcuCollationStrength _strength;
  public IcuCollationStrength getStrength() { return this._strength; }
  public IcuCollationTokenFilter setStrength(IcuCollationStrength val) { this._strength = val; return this; }


  static final ParseField VARIABLE_TOP = new ParseField("variableTop");
  private String _variableTop;
  public String getVariableTop() { return this._variableTop; }
  public IcuCollationTokenFilter setVariableTop(String val) { this._variableTop = val; return this; }


  static final ParseField VARIANT = new ParseField("variant");
  private String _variant;
  public String getVariant() { return this._variant; }
  public IcuCollationTokenFilter setVariant(String val) { this._variant = val; return this; }


  
  @Override
  public XContentBuilder toXContent(XContentBuilder builder, ToXContent.Params params) throws IOException {
    builder.startObject();
    if (_alternate != null) {
      builder.field(ALTERNATE.getPreferredName());
      _alternate.toXContent(builder, params);
    }
    if (_caseFirst != null) {
      builder.field(CASE_FIRST.getPreferredName());
      _caseFirst.toXContent(builder, params);
    }
    if (_caseLevel != null) {
      builder.field(CASE_LEVEL.getPreferredName(), _caseLevel);
    }
    if (_country != null) {
      builder.field(COUNTRY.getPreferredName(), _country);
    }
    if (_decomposition != null) {
      builder.field(DECOMPOSITION.getPreferredName());
      _decomposition.toXContent(builder, params);
    }
    if (_hiraganaQuaternaryMode != null) {
      builder.field(HIRAGANA_QUATERNARY_MODE.getPreferredName(), _hiraganaQuaternaryMode);
    }
    if (_language != null) {
      builder.field(LANGUAGE.getPreferredName(), _language);
    }
    if (_numeric != null) {
      builder.field(NUMERIC.getPreferredName(), _numeric);
    }
    if (_strength != null) {
      builder.field(STRENGTH.getPreferredName());
      _strength.toXContent(builder, params);
    }
    if (_variableTop != null) {
      builder.field(VARIABLE_TOP.getPreferredName(), _variableTop);
    }
    if (_variant != null) {
      builder.field(VARIANT.getPreferredName(), _variant);
    }
    builder.endObject();
    return builder;
  }

  @Override
  public IcuCollationTokenFilter fromXContent(XContentParser parser) throws IOException, XContentParseException {
    return IcuCollationTokenFilter.PARSER.apply(parser, null);
  }

  public static final ObjectParser<IcuCollationTokenFilter, Void> PARSER =
    new ObjectParser<>(IcuCollationTokenFilter.class.getName(), false, IcuCollationTokenFilter::new);

  static {
    PARSER.declareField(IcuCollationTokenFilter::setAlternate, (p, t) -> IcuCollationAlternate.PARSER.apply(p), ALTERNATE, ObjectParser.ValueType.STRING_OR_NULL);
    PARSER.declareField(IcuCollationTokenFilter::setCaseFirst, (p, t) -> IcuCollationCaseFirst.PARSER.apply(p), CASE_FIRST, ObjectParser.ValueType.STRING_OR_NULL);
    PARSER.declareBoolean(IcuCollationTokenFilter::setCaseLevel, CASE_LEVEL);
    PARSER.declareString(IcuCollationTokenFilter::setCountry, COUNTRY);
    PARSER.declareField(IcuCollationTokenFilter::setDecomposition, (p, t) -> IcuCollationDecomposition.PARSER.apply(p), DECOMPOSITION, ObjectParser.ValueType.STRING_OR_NULL);
    PARSER.declareBoolean(IcuCollationTokenFilter::setHiraganaQuaternaryMode, HIRAGANA_QUATERNARY_MODE);
    PARSER.declareString(IcuCollationTokenFilter::setLanguage, LANGUAGE);
    PARSER.declareBoolean(IcuCollationTokenFilter::setNumeric, NUMERIC);
    PARSER.declareField(IcuCollationTokenFilter::setStrength, (p, t) -> IcuCollationStrength.PARSER.apply(p), STRENGTH, ObjectParser.ValueType.STRING_OR_NULL);
    PARSER.declareString(IcuCollationTokenFilter::setVariableTop, VARIABLE_TOP);
    PARSER.declareString(IcuCollationTokenFilter::setVariant, VARIANT);
  }

}
