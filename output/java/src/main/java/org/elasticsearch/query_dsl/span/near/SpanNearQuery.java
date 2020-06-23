
package org.elasticsearch.query_dsl.span.near;

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
import org.elasticsearch.internal.*;

public class SpanNearQuery  implements XContentable<SpanNearQuery> {
  
  static final ParseField CLAUSES = new ParseField("clauses");
  private List<SpanQuery> _clauses;
  public List<SpanQuery> getClauses() { return this._clauses; }
  public SpanNearQuery setClauses(List<SpanQuery> val) { this._clauses = val; return this; }


  static final ParseField IN_ORDER = new ParseField("in_order");
  private Boolean _inOrder;
  public Boolean getInOrder() { return this._inOrder; }
  public SpanNearQuery setInOrder(Boolean val) { this._inOrder = val; return this; }


  static final ParseField SLOP = new ParseField("slop");
  private Integer _slop;
  public Integer getSlop() { return this._slop; }
  public SpanNearQuery setSlop(Integer val) { this._slop = val; return this; }


  
  @Override
  public XContentBuilder toXContent(XContentBuilder builder, ToXContent.Params params) throws IOException {
    builder.startObject();
    if (_clauses != null) {
      builder.array(CLAUSES.getPreferredName(), _clauses);
    }
    if (_inOrder != null) {
      builder.field(IN_ORDER.getPreferredName(), _inOrder);
    }
    if (_slop != null) {
      builder.field(SLOP.getPreferredName(), _slop);
    }
    builder.endObject();
    return builder;
  }

  @Override
  public SpanNearQuery fromXContent(XContentParser parser) throws IOException, XContentParseException {
    return SpanNearQuery.PARSER.apply(parser, null);
  }

  public static final ObjectParser<SpanNearQuery, Void> PARSER =
    new ObjectParser<>(SpanNearQuery.class.getName(), false, SpanNearQuery::new);

  static {
    PARSER.declareObjectArray(SpanNearQuery::setClauses, (p, t) -> SpanQuery.PARSER.apply(p, t), CLAUSES);
    PARSER.declareBoolean(SpanNearQuery::setInOrder, IN_ORDER);
    PARSER.declareInt(SpanNearQuery::setSlop, SLOP);
  }

}
