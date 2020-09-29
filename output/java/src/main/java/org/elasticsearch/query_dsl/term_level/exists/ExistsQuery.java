
package org.elasticsearch.query_dsl.term_level.exists;

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

public class ExistsQuery extends QueryBase implements XContentable<ExistsQuery> {
  
  static final ParseField FIELD = new ParseField("field");
  private String _field;
  public String getField() { return this._field; }
  public ExistsQuery setField(String val) { this._field = val; return this; }


  
  @Override
  public void toXContentInternal(XContentBuilder builder, ToXContent.Params params) throws IOException {
    super.toXContentInternal(builder, params);
    if (_field != null) {
      builder.field(FIELD.getPreferredName(), _field);
    }
  }

  @Override
  public ExistsQuery fromXContent(XContentParser parser) throws IOException, XContentParseException {
    return ExistsQuery.PARSER.apply(parser, null);
  }

  public static final ObjectParser<ExistsQuery, Void> PARSER =
    new ObjectParser<>(ExistsQuery.class.getName(), false, ExistsQuery::new);

  static {
    PARSER.declareString(ExistsQuery::setField, FIELD);
  }

}
