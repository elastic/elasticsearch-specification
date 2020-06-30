
package org.elasticsearch.cat.cat_pending_tasks;

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
import org.elasticsearch.cat.cat_pending_tasks.*;

public class CatPendingTasksResponse  implements XContentable<CatPendingTasksResponse> {
  
  static final ParseField RECORDS = new ParseField("records");
  private List<CatPendingTasksRecord> _records;
  public List<CatPendingTasksRecord> getRecords() { return this._records; }
  public CatPendingTasksResponse setRecords(List<CatPendingTasksRecord> val) { this._records = val; return this; }


  
  @Override
  public XContentBuilder toXContent(XContentBuilder builder, ToXContent.Params params) throws IOException {
    builder.startObject();
    if (_records != null) {
      builder.array(RECORDS.getPreferredName(), _records);
    }
    builder.endObject();
    return builder;
  }

  @Override
  public CatPendingTasksResponse fromXContent(XContentParser parser) throws IOException, XContentParseException {
    return CatPendingTasksResponse.PARSER.apply(parser, null);
  }

  public static final ObjectParser<CatPendingTasksResponse, Void> PARSER =
    new ObjectParser<>(CatPendingTasksResponse.class.getName(), false, CatPendingTasksResponse::new);

  static {
    PARSER.declareObjectArray(CatPendingTasksResponse::setRecords, (p, t) -> CatPendingTasksRecord.PARSER.apply(p, t), RECORDS);
  }

}
