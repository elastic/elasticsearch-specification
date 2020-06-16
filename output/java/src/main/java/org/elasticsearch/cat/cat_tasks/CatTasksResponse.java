
package org.elasticsearch.cat.cat_tasks;

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
import org.elasticsearch.cat.cat_tasks.*;

public class CatTasksResponse  implements XContentable<CatTasksResponse> {
  
  static final ParseField RECORDS = new ParseField("records");
  private List<CatTasksRecord> _records;
  public List<CatTasksRecord> getRecords() { return this._records; }
  public CatTasksResponse setRecords(List<CatTasksRecord> val) { this._records = val; return this; }


  
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
  public CatTasksResponse fromXContent(XContentParser parser) throws IOException, XContentParseException {
    return CatTasksResponse.PARSER.apply(parser, null);
  }

  public static final ObjectParser<CatTasksResponse, Void> PARSER =
    new ObjectParser<>(CatTasksResponse.class.getName(), false, CatTasksResponse::new);

  static {
    PARSER.declareObjectArray(CatTasksResponse::setRecords, (p, t) -> CatTasksRecord.PARSER.apply(p, t), RECORDS);
  }

}
