
package org.elasticsearch.analysis.token_filters;

import java.io.IOException;
import java.util.Date;
import java.util.List;
import java.util.HashMap;
import java.time.Instant;
import java.time.format.DateTimeFormatter;
import org.elasticsearch.*;
import org.elasticsearch.common.ParseField;
import org.elasticsearch.common.xcontent.*;
import org.elasticsearch.analysis.token_filters.*;

public class StemmerOverrideTokenFilter extends TokenFilterBase implements XContentable<StemmerOverrideTokenFilter> {
  
  static final ParseField RULES = new ParseField("rules");
  private List<String> _rules;
  public List<String> getRules() { return this._rules; }
  public StemmerOverrideTokenFilter setRules(List<String> val) { this._rules = val; return this; }

  static final ParseField RULES_PATH = new ParseField("rules_path");
  private String _rulesPath;
  public String getRulesPath() { return this._rulesPath; }
  public StemmerOverrideTokenFilter setRulesPath(String val) { this._rulesPath = val; return this; }


  
  @Override
  public void toXContentInternal(XContentBuilder builder, ToXContent.Params params) throws IOException {
    super.toXContentInternal(builder, params);
    if (_rules != null) {
      builder.array(RULES.getPreferredName(), _rules);
    }
    if (_rulesPath != null) {
      builder.field(RULES_PATH.getPreferredName(), _rulesPath);
    }
  }

  @Override
  public StemmerOverrideTokenFilter fromXContent(XContentParser parser) throws IOException, XContentParseException {
    return StemmerOverrideTokenFilter.PARSER.apply(parser, null);
  }

  public static final ObjectParser<StemmerOverrideTokenFilter, Void> PARSER =
    new ObjectParser<>(StemmerOverrideTokenFilter.class.getName(), false, StemmerOverrideTokenFilter::new);

  static {
    PARSER.declareStringArray(StemmerOverrideTokenFilter::setRules, RULES);
    PARSER.declareString(StemmerOverrideTokenFilter::setRulesPath, RULES_PATH);
  }

}
