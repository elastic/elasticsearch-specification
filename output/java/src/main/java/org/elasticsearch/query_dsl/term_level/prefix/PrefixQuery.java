
package org.elasticsearch.query_dsl.term_level.prefix;

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
import org.elasticsearch.query_dsl.multi_term_query_rewrite.*;

public class PrefixQuery  implements XContentable<PrefixQuery> {
  
  static final ParseField REWRITE = new ParseField("rewrite");
  private MultiTermQueryRewrite _rewrite;
  public MultiTermQueryRewrite getRewrite() { return this._rewrite; }
  public PrefixQuery setRewrite(MultiTermQueryRewrite val) { this._rewrite = val; return this; }


  
  @Override
  public XContentBuilder toXContent(XContentBuilder builder, ToXContent.Params params) throws IOException {
    builder.startObject();
    if (_rewrite != null) {
      builder.field(REWRITE.getPreferredName());
      _rewrite.toXContent(builder, params);
    }
    builder.endObject();
    return builder;
  }

  @Override
  public PrefixQuery fromXContent(XContentParser parser) throws IOException, XContentParseException {
    return PrefixQuery.PARSER.apply(parser, null);
  }

  public static final ObjectParser<PrefixQuery, Void> PARSER =
    new ObjectParser<>(PrefixQuery.class.getName(), false, PrefixQuery::new);

  static {
    PARSER.declareObject(PrefixQuery::setRewrite, (p, t) -> MultiTermQueryRewrite.PARSER.apply(p, t), REWRITE);
  }

}
