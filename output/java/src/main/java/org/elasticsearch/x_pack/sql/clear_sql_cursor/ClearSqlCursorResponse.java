
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
import org.elasticsearch.common_abstractions.response.*;

public class ClearSqlCursorResponse extends ResponseBase<ClearSqlCursorResponse> implements XContentable<ClearSqlCursorResponse> {
  
  static final ParseField SUCCEEDED = new ParseField("succeeded");
  private Boolean _succeeded;
  public Boolean getSucceeded() { return this._succeeded; }
  public ClearSqlCursorResponse setSucceeded(Boolean val) { this._succeeded = val; return this; }


  
  @Override
  public void toXContentInternal(XContentBuilder builder, ToXContent.Params params) throws IOException {
    super.toXContentInternal(builder, params);
    if (_succeeded != null) {
      builder.field(SUCCEEDED.getPreferredName(), _succeeded);
    }
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
