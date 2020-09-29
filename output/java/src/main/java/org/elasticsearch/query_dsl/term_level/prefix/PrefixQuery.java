
package org.elasticsearch.query_dsl.term_level.prefix;

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

public class PrefixQuery extends QueryBase implements XContentable<PrefixQuery> {
  
  static final ParseField REWRITE = new ParseField("rewrite");
  private String _rewrite;
  public String getRewrite() { return this._rewrite; }
  public PrefixQuery setRewrite(String val) { this._rewrite = val; return this; }


  
  @Override
  public void toXContentInternal(XContentBuilder builder, ToXContent.Params params) throws IOException {
    super.toXContentInternal(builder, params);
    if (_rewrite != null) {
      builder.field(REWRITE.getPreferredName(), _rewrite);
    }
  }

  @Override
  public PrefixQuery fromXContent(XContentParser parser) throws IOException, XContentParseException {
    return PrefixQuery.PARSER.apply(parser, null);
  }

  public static final ObjectParser<PrefixQuery, Void> PARSER =
    new ObjectParser<>(PrefixQuery.class.getName(), false, PrefixQuery::new);

  static {
    PARSER.declareString(PrefixQuery::setRewrite, REWRITE);
  }

}
