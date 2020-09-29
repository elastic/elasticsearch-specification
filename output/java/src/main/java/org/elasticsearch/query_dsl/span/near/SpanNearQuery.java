
package org.elasticsearch.query_dsl.span.near;

import java.io.IOException;
import java.util.Date;
import java.util.List;
import java.util.HashMap;
import java.time.Instant;
import java.time.format.DateTimeFormatter;
import org.elasticsearch.*;
import org.elasticsearch.common.ParseField;
import org.elasticsearch.common.xcontent.*;
import org.elasticsearch.query_dsl.span.*;
import org.elasticsearch.query_dsl.abstractions.query.*;
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
  private int _slop;
  private boolean _slop$isSet;
  public int getSlop() { return this._slop; }
  public SpanNearQuery setSlop(int val) {
    this._slop = val;
    _slop$isSet = true;
    return this;
  }


  
  @Override
  public void toXContentInternal(XContentBuilder builder, ToXContent.Params params) throws IOException {
    
    if (_clauses != null) {
      builder.array(CLAUSES.getPreferredName(), _clauses);
    }
    if (_inOrder != null) {
      builder.field(IN_ORDER.getPreferredName(), _inOrder);
    }
    if (_slop$isSet) {
      builder.field(SLOP.getPreferredName(), _slop);
    }
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
