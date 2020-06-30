
package org.elasticsearch.x_pack.machine_learning.machine_learning_info;

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
import org.elasticsearch.analysis.token_filters.*;

public class CategorizationAnalyzer  implements XContentable<CategorizationAnalyzer> {
  
  static final ParseField TOKENIZER = new ParseField("tokenizer");
  private String _tokenizer;
  public String getTokenizer() { return this._tokenizer; }
  public CategorizationAnalyzer setTokenizer(String val) { this._tokenizer = val; return this; }


  static final ParseField FILTER = new ParseField("filter");
  private List<ITokenFilter> _filter;
  public List<ITokenFilter> getFilter() { return this._filter; }
  public CategorizationAnalyzer setFilter(List<ITokenFilter> val) { this._filter = val; return this; }


  
  @Override
  public XContentBuilder toXContent(XContentBuilder builder, ToXContent.Params params) throws IOException {
    builder.startObject();
    if (_tokenizer != null) {
      builder.field(TOKENIZER.getPreferredName(), _tokenizer);
    }
    if (_filter != null) {
      builder.array(FILTER.getPreferredName(), _filter);
    }
    builder.endObject();
    return builder;
  }

  @Override
  public CategorizationAnalyzer fromXContent(XContentParser parser) throws IOException, XContentParseException {
    return CategorizationAnalyzer.PARSER.apply(parser, null);
  }

  public static final ObjectParser<CategorizationAnalyzer, Void> PARSER =
    new ObjectParser<>(CategorizationAnalyzer.class.getName(), false, CategorizationAnalyzer::new);

  static {
    PARSER.declareString(CategorizationAnalyzer::setTokenizer, TOKENIZER);
    PARSER.declareObjectArray(CategorizationAnalyzer::setFilter, (p, t) -> ITokenFilter.PARSER.apply(p, t), FILTER);
  }

}
