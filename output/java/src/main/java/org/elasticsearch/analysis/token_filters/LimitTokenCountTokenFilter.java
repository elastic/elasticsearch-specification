
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
import org.elasticsearch.internal.*;
import org.elasticsearch.analysis.token_filters.*;

public class LimitTokenCountTokenFilter extends TokenFilterBase implements XContentable<LimitTokenCountTokenFilter> {
  
  static final ParseField CONSUME_ALL_TOKENS = new ParseField("consume_all_tokens");
  private Boolean _consumeAllTokens;
  public Boolean getConsumeAllTokens() { return this._consumeAllTokens; }
  public LimitTokenCountTokenFilter setConsumeAllTokens(Boolean val) { this._consumeAllTokens = val; return this; }

  static final ParseField MAX_TOKEN_COUNT = new ParseField("max_token_count");
  private int _maxTokenCount;
  private boolean _maxTokenCount$isSet;
  public int getMaxTokenCount() { return this._maxTokenCount; }
  public LimitTokenCountTokenFilter setMaxTokenCount(int val) {
    this._maxTokenCount = val;
    _maxTokenCount$isSet = true;
    return this;
  }


  
  @Override
  public void toXContentInternal(XContentBuilder builder, ToXContent.Params params) throws IOException {
    super.toXContentInternal(builder, params);
    if (_consumeAllTokens != null) {
      builder.field(CONSUME_ALL_TOKENS.getPreferredName(), _consumeAllTokens);
    }
    if (_maxTokenCount$isSet) {
      builder.field(MAX_TOKEN_COUNT.getPreferredName(), _maxTokenCount);
    }
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
