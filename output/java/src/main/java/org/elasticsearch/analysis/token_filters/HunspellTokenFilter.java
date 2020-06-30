
package org.elasticsearch.analysis.token_filters;

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


public class HunspellTokenFilter  implements XContentable<HunspellTokenFilter> {
  
  static final ParseField DEDUP = new ParseField("dedup");
  private Boolean _dedup;
  public Boolean getDedup() { return this._dedup; }
  public HunspellTokenFilter setDedup(Boolean val) { this._dedup = val; return this; }


  static final ParseField DICTIONARY = new ParseField("dictionary");
  private String _dictionary;
  public String getDictionary() { return this._dictionary; }
  public HunspellTokenFilter setDictionary(String val) { this._dictionary = val; return this; }


  static final ParseField LOCALE = new ParseField("locale");
  private String _locale;
  public String getLocale() { return this._locale; }
  public HunspellTokenFilter setLocale(String val) { this._locale = val; return this; }


  static final ParseField LONGEST_ONLY = new ParseField("longest_only");
  private Boolean _longestOnly;
  public Boolean getLongestOnly() { return this._longestOnly; }
  public HunspellTokenFilter setLongestOnly(Boolean val) { this._longestOnly = val; return this; }


  
  @Override
  public XContentBuilder toXContent(XContentBuilder builder, ToXContent.Params params) throws IOException {
    builder.startObject();
    if (_dedup != null) {
      builder.field(DEDUP.getPreferredName(), _dedup);
    }
    if (_dictionary != null) {
      builder.field(DICTIONARY.getPreferredName(), _dictionary);
    }
    if (_locale != null) {
      builder.field(LOCALE.getPreferredName(), _locale);
    }
    if (_longestOnly != null) {
      builder.field(LONGEST_ONLY.getPreferredName(), _longestOnly);
    }
    builder.endObject();
    return builder;
  }

  @Override
  public HunspellTokenFilter fromXContent(XContentParser parser) throws IOException, XContentParseException {
    return HunspellTokenFilter.PARSER.apply(parser, null);
  }

  public static final ObjectParser<HunspellTokenFilter, Void> PARSER =
    new ObjectParser<>(HunspellTokenFilter.class.getName(), false, HunspellTokenFilter::new);

  static {
    PARSER.declareBoolean(HunspellTokenFilter::setDedup, DEDUP);
    PARSER.declareString(HunspellTokenFilter::setDictionary, DICTIONARY);
    PARSER.declareString(HunspellTokenFilter::setLocale, LOCALE);
    PARSER.declareBoolean(HunspellTokenFilter::setLongestOnly, LONGEST_ONLY);
  }

}
