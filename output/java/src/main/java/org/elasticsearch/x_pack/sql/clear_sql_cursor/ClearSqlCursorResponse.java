
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


public class ClearSqlCursorResponse  implements XContentable<ClearSqlCursorResponse> {
  
  static final ParseField SUCCEEDED = new ParseField("succeeded");
  private Boolean _succeeded;
  public Boolean getSucceeded() { return this._succeeded; }
  public ClearSqlCursorResponse setSucceeded(Boolean val) { this._succeeded = val; return this; }


  
  @Override
  public XContentBuilder toXContent(XContentBuilder builder, ToXContent.Params params) throws IOException {
    builder.startObject();
    if (_succeeded != null) {
      builder.field(SUCCEEDED.getPreferredName(), _succeeded);
    }
    builder.endObject();
    return builder;
  }

  @Override
  public ClearSqlCursorResponse fromXContent(XContentParser parser) throws IOException, XContentParseException {
    return ClearSqlCursorResponse.PARSER.apply(parser, null);
  }

  public static final ObjectParser<ClearSqlCursorResponse, Void> PARSER =
    new ObjectParser<>(ClearSqlCursorResponse.class.getName(), false, ClearSqlCursorResponse::new);

  static {
    PARSER.declareBoolean(ClearSqlCursorResponse::setSucceeded, SUCCEEDED);
  }

}
