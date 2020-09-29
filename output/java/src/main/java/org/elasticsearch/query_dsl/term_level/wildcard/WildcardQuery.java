
package org.elasticsearch.query_dsl.term_level.wildcard;

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
import org.elasticsearch.query_dsl.abstractions.query.*;

public class WildcardQuery extends QueryBase implements XContentable<WildcardQuery> {
  
  static final ParseField REWRITE = new ParseField("rewrite");
  private String _rewrite;
  public String getRewrite() { return this._rewrite; }
  public WildcardQuery setRewrite(String val) { this._rewrite = val; return this; }


  
  @Override
  public void toXContentInternal(XContentBuilder builder, ToXContent.Params params) throws IOException {
    super.toXContentInternal(builder, params);
    if (_rewrite != null) {
      builder.field(REWRITE.getPreferredName(), _rewrite);
    }
  }

  @Override
  public WildcardQuery fromXContent(XContentParser parser) throws IOException, XContentParseException {
    return WildcardQuery.PARSER.apply(parser, null);
  }

  public static final ObjectParser<WildcardQuery, Void> PARSER =
    new ObjectParser<>(WildcardQuery.class.getName(), false, WildcardQuery::new);

  static {
    PARSER.declareString(WildcardQuery::setRewrite, REWRITE);
  }

}
