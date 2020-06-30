
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
import org.elasticsearch.internal.*;

public class LimitTokenCountTokenFilter  implements XContentable<LimitTokenCountTokenFilter> {
  
  static final ParseField CONSUME_ALL_TOKENS = new ParseField("consume_all_tokens");
  private Boolean _consumeAllTokens;
  public Boolean getConsumeAllTokens() { return this._consumeAllTokens; }
  public LimitTokenCountTokenFilter setConsumeAllTokens(Boolean val) { this._consumeAllTokens = val; return this; }


  static final ParseField MAX_TOKEN_COUNT = new ParseField("max_token_count");
  private Integer _maxTokenCount;
  public Integer getMaxTokenCount() { return this._maxTokenCount; }
  public LimitTokenCountTokenFilter setMaxTokenCount(Integer val) { this._maxTokenCount = val; return this; }


  
  @Override
  public XContentBuilder toXContent(XContentBuilder builder, ToXContent.Params params) throws IOException {
    builder.startObject();
    if (_consumeAllTokens != null) {
      builder.field(CONSUME_ALL_TOKENS.getPreferredName(), _consumeAllTokens);
    }
    if (_maxTokenCount != null) {
      builder.field(MAX_TOKEN_COUNT.getPreferredName(), _maxTokenCount);
    }
    builder.endObject();
    return builder;
  }

  @Override
  public LimitTokenCountTokenFilter fromXContent(XContentParser parser) throws IOException, XContentParseException {
    return LimitTokenCountTokenFilter.PARSER.apply(parser, null);
  }

  public static final ObjectParser<LimitTokenCountTokenFilter, Void> PARSER =
    new ObjectParser<>(LimitTokenCountTokenFilter.class.getName(), false, LimitTokenCountTokenFilter::new);

  static {
    PARSER.declareBoolean(LimitTokenCountTokenFilter::setConsumeAllTokens, CONSUME_ALL_TOKENS);
    PARSER.declareInt(LimitTokenCountTokenFilter::setMaxTokenCount, MAX_TOKEN_COUNT);
  }

}
