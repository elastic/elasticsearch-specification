
package org.elasticsearch.x_pack.sql.clear_sql_cursor;

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


public class ClearSqlCursorRequest  implements XContentable<ClearSqlCursorRequest> {
  
  static final ParseField CURSOR = new ParseField("cursor");
  private String _cursor;
  public String getCursor() { return this._cursor; }
  public ClearSqlCursorRequest setCursor(String val) { this._cursor = val; return this; }


  
  @Override
  public XContentBuilder toXContent(XContentBuilder builder, ToXContent.Params params) throws IOException {
    builder.startObject();
    if (_cursor != null) {
      builder.field(CURSOR.getPreferredName(), _cursor);
    }
    builder.endObject();
    return builder;
  }

  @Override
  public ClearSqlCursorRequest fromXContent(XContentParser parser) throws IOException, XContentParseException {
    return ClearSqlCursorRequest.PARSER.apply(parser, null);
  }

  public static final ObjectParser<ClearSqlCursorRequest, Void> PARSER =
    new ObjectParser<>(ClearSqlCursorRequest.class.getName(), false, ClearSqlCursorRequest::new);

  static {
    PARSER.declareString(ClearSqlCursorRequest::setCursor, CURSOR);
  }

}
