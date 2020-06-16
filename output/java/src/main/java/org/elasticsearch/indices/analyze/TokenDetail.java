
package org.elasticsearch.indices.analyze;

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
import org.elasticsearch.indices.analyze.*;

public class TokenDetail  implements XContentable<TokenDetail> {
  
  static final ParseField NAME = new ParseField("name");
  private String _name;
  public String getName() { return this._name; }
  public TokenDetail setName(String val) { this._name = val; return this; }


  static final ParseField TOKENS = new ParseField("tokens");
  private List<ExplainAnalyzeToken> _tokens;
  public List<ExplainAnalyzeToken> getTokens() { return this._tokens; }
  public TokenDetail setTokens(List<ExplainAnalyzeToken> val) { this._tokens = val; return this; }


  
  @Override
  public XContentBuilder toXContent(XContentBuilder builder, ToXContent.Params params) throws IOException {
    builder.startObject();
    if (_name != null) {
      builder.field(NAME.getPreferredName(), _name);
    }
    if (_tokens != null) {
      builder.array(TOKENS.getPreferredName(), _tokens);
    }
    builder.endObject();
    return builder;
  }

  @Override
  public TokenDetail fromXContent(XContentParser parser) throws IOException, XContentParseException {
    return TokenDetail.PARSER.apply(parser, null);
  }

  public static final ObjectParser<TokenDetail, Void> PARSER =
    new ObjectParser<>(TokenDetail.class.getName(), false, TokenDetail::new);

  static {
    PARSER.declareString(TokenDetail::setName, NAME);
    PARSER.declareObjectArray(TokenDetail::setTokens, (p, t) -> ExplainAnalyzeToken.PARSER.apply(p, t), TOKENS);
  }

}
