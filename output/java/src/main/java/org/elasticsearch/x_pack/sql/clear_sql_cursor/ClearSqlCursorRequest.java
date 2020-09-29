
package org.elasticsearch.x_pack.sql.clear_sql_cursor;

import java.io.IOException;
import java.util.Date;
import java.util.List;
import java.util.HashMap;
import java.time.Instant;
import java.time.format.DateTimeFormatter;
import org.elasticsearch.*;
import org.elasticsearch.common.ParseField;
import org.elasticsearch.common.xcontent.*;
import org.elasticsearch.common_abstractions.request.*;

public class ClearSqlCursorRequest extends RequestBase<ClearSqlCursorRequest> implements XContentable<ClearSqlCursorRequest> {
  
  static final ParseField CURSOR = new ParseField("cursor");
  private String _cursor;
  public String getCursor() { return this._cursor; }
  public ClearSqlCursorRequest setCursor(String val) { this._cursor = val; return this; }


  
  @Override
  public void toXContentInternal(XContentBuilder builder, ToXContent.Params params) throws IOException {
    super.toXContentInternal(builder, params);
    if (_cursor != null) {
      builder.field(CURSOR.getPreferredName(), _cursor);
    }
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
