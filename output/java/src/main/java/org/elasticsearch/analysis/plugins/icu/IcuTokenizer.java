
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


public class IcuTokenizer  implements XContentable<IcuTokenizer> {
  
  static final ParseField RULE_FILES = new ParseField("rule_files");
  private String _ruleFiles;
  public String getRuleFiles() { return this._ruleFiles; }
  public IcuTokenizer setRuleFiles(String val) { this._ruleFiles = val; return this; }


  
  @Override
  public XContentBuilder toXContent(XContentBuilder builder, ToXContent.Params params) throws IOException {
    builder.startObject();
    if (_ruleFiles != null) {
      builder.field(RULE_FILES.getPreferredName(), _ruleFiles);
    }
    builder.endObject();
    return builder;
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
