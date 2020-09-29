
package org.elasticsearch.query_dsl.span.multi_term;

import java.io.IOException;
import java.util.Date;
import java.util.List;
import java.util.HashMap;
import java.time.Instant;
import java.time.format.DateTimeFormatter;
import org.elasticsearch.*;
import org.elasticsearch.common.ParseField;
import org.elasticsearch.common.xcontent.*;
import org.elasticsearch.query_dsl.abstractions.container.*;

public class SpanMultiTermQuery  implements XContentable<SpanMultiTermQuery> {
  
  static final ParseField MATCH = new ParseField("match");
  private QueryContainer _match;
  public QueryContainer getMatch() { return this._match; }
  public SpanMultiTermQuery setMatch(QueryContainer val) { this._match = val; return this; }


  
  @Override
  public void toXContentInternal(XContentBuilder builder, ToXContent.Params params) throws IOException {
    
    if (_match != null) {
      builder.field(MATCH.getPreferredName());
      _match.toXContent(builder, params);
    }
  }

  @Override
  public SpanMultiTermQuery fromXContent(XContentParser parser) throws IOException, XContentParseException {
    return SpanMultiTermQuery.PARSER.apply(parser, null);
  }

  public static final ObjectParser<SpanMultiTermQuery, Void> PARSER =
    new ObjectParser<>(SpanMultiTermQuery.class.getName(), false, SpanMultiTermQuery::new);

  static {
    PARSER.declareObject(SpanMultiTermQuery::setMatch, (p, t) -> QueryContainer.PARSER.apply(p, t), MATCH);
  }

}
