
package org.elasticsearch.query_dsl.span.first;

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
import org.elasticsearch.query_dsl.span.*;
import org.elasticsearch.query_dsl.abstractions.query.*;

public class SpanFirstQuery  implements XContentable<SpanFirstQuery> {
  
  static final ParseField END = new ParseField("end");
  private int _end;
  private boolean _end$isSet;
  public int getEnd() { return this._end; }
  public SpanFirstQuery setEnd(int val) {
    this._end = val;
    _end$isSet = true;
    return this;
  }

  static final ParseField MATCH = new ParseField("match");
  private SpanQuery _match;
  public SpanQuery getMatch() { return this._match; }
  public SpanFirstQuery setMatch(SpanQuery val) { this._match = val; return this; }


  
  @Override
  public void toXContentInternal(XContentBuilder builder, ToXContent.Params params) throws IOException {
    
    if (_end$isSet) {
      builder.field(END.getPreferredName(), _end);
    }
    if (_match != null) {
      builder.field(MATCH.getPreferredName());
      _match.toXContent(builder, params);
    }
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
