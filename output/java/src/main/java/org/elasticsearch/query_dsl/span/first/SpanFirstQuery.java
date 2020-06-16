
package org.elasticsearch.query_dsl.span.first;

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
import org.elasticsearch.query_dsl.span.*;

public class SpanFirstQuery  implements XContentable<SpanFirstQuery> {
  
  static final ParseField END = new ParseField("end");
  private Integer _end;
  public Integer getEnd() { return this._end; }
  public SpanFirstQuery setEnd(Integer val) { this._end = val; return this; }


  static final ParseField MATCH = new ParseField("match");
  private SpanQuery _match;
  public SpanQuery getMatch() { return this._match; }
  public SpanFirstQuery setMatch(SpanQuery val) { this._match = val; return this; }


  
  @Override
  public XContentBuilder toXContent(XContentBuilder builder, ToXContent.Params params) throws IOException {
    builder.startObject();
    if (_end != null) {
      builder.field(END.getPreferredName(), _end);
    }
    if (_match != null) {
      builder.field(MATCH.getPreferredName());
      _match.toXContent(builder, params);
    }
    builder.endObject();
    return builder;
  }

  @Override
  public SpanFirstQuery fromXContent(XContentParser parser) throws IOException, XContentParseException {
    return SpanFirstQuery.PARSER.apply(parser, null);
  }

  public static final ObjectParser<SpanFirstQuery, Void> PARSER =
    new ObjectParser<>(SpanFirstQuery.class.getName(), false, SpanFirstQuery::new);

  static {
    PARSER.declareInt(SpanFirstQuery::setEnd, END);
    PARSER.declareObject(SpanFirstQuery::setMatch, (p, t) -> SpanQuery.PARSER.apply(p, t), MATCH);
  }

}
