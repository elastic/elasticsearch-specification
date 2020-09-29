
package org.elasticsearch.query_dsl.span.field_masking;

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

public class SpanFieldMaskingQuery  implements XContentable<SpanFieldMaskingQuery> {
  
  static final ParseField FIELD = new ParseField("field");
  private String _field;
  public String getField() { return this._field; }
  public SpanFieldMaskingQuery setField(String val) { this._field = val; return this; }

  static final ParseField QUERY = new ParseField("query");
  private SpanQuery _query;
  public SpanQuery getQuery() { return this._query; }
  public SpanFieldMaskingQuery setQuery(SpanQuery val) { this._query = val; return this; }


  
  @Override
  public void toXContentInternal(XContentBuilder builder, ToXContent.Params params) throws IOException {
    
    if (_field != null) {
      builder.field(FIELD.getPreferredName(), _field);
    }
    if (_query != null) {
      builder.field(QUERY.getPreferredName());
      _query.toXContent(builder, params);
    }
  }

  @Override
  public SpanFieldMaskingQuery fromXContent(XContentParser parser) throws IOException, XContentParseException {
    return SpanFieldMaskingQuery.PARSER.apply(parser, null);
  }

  public static final ObjectParser<SpanFieldMaskingQuery, Void> PARSER =
    new ObjectParser<>(SpanFieldMaskingQuery.class.getName(), false, SpanFieldMaskingQuery::new);

  static {
    PARSER.declareString(SpanFieldMaskingQuery::setField, FIELD);
    PARSER.declareObject(SpanFieldMaskingQuery::setQuery, (p, t) -> SpanQuery.PARSER.apply(p, t), QUERY);
  }

}
