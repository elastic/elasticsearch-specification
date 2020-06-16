
package org.elasticsearch.query_dsl.span.within;

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
import org.elasticsearch.query_dsl.span.*;

public class SpanWithinQuery  implements XContentable<SpanWithinQuery> {
  
  static final ParseField BIG = new ParseField("big");
  private SpanQuery _big;
  public SpanQuery getBig() { return this._big; }
  public SpanWithinQuery setBig(SpanQuery val) { this._big = val; return this; }


  static final ParseField LITTLE = new ParseField("little");
  private SpanQuery _little;
  public SpanQuery getLittle() { return this._little; }
  public SpanWithinQuery setLittle(SpanQuery val) { this._little = val; return this; }


  
  @Override
  public XContentBuilder toXContent(XContentBuilder builder, ToXContent.Params params) throws IOException {
    builder.startObject();
    if (_big != null) {
      builder.field(BIG.getPreferredName());
      _big.toXContent(builder, params);
    }
    if (_little != null) {
      builder.field(LITTLE.getPreferredName());
      _little.toXContent(builder, params);
    }
    builder.endObject();
    return builder;
  }

  @Override
  public SpanWithinQuery fromXContent(XContentParser parser) throws IOException, XContentParseException {
    return SpanWithinQuery.PARSER.apply(parser, null);
  }

  public static final ObjectParser<SpanWithinQuery, Void> PARSER =
    new ObjectParser<>(SpanWithinQuery.class.getName(), false, SpanWithinQuery::new);

  static {
    PARSER.declareObject(SpanWithinQuery::setBig, (p, t) -> SpanQuery.PARSER.apply(p, t), BIG);
    PARSER.declareObject(SpanWithinQuery::setLittle, (p, t) -> SpanQuery.PARSER.apply(p, t), LITTLE);
  }

}
