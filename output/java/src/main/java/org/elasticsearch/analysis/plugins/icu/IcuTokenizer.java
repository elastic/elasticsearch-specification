
package org.elasticsearch.analysis.plugins.icu;

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

public class IcuTokenizer extends TokenizerBase implements XContentable<IcuTokenizer> {
  
  static final ParseField RULE_FILES = new ParseField("rule_files");
  private String _ruleFiles;
  public String getRuleFiles() { return this._ruleFiles; }
  public IcuTokenizer setRuleFiles(String val) { this._ruleFiles = val; return this; }


  
  @Override
  public void toXContentInternal(XContentBuilder builder, ToXContent.Params params) throws IOException {
    super.toXContentInternal(builder, params);
    if (_ruleFiles != null) {
      builder.field(RULE_FILES.getPreferredName(), _ruleFiles);
    }
  }

  @Override
  public IcuTokenizer fromXContent(XContentParser parser) throws IOException, XContentParseException {
    return IcuTokenizer.PARSER.apply(parser, null);
  }

  public static final ObjectParser<IcuTokenizer, Void> PARSER =
    new ObjectParser<>(IcuTokenizer.class.getName(), false, IcuTokenizer::new);

  static {
    PARSER.declareString(IcuTokenizer::setRuleFiles, RULE_FILES);
  }

}
