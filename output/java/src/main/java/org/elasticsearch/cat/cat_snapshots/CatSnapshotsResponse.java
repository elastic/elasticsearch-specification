
package org.elasticsearch.cat.cat_snapshots;

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
import org.elasticsearch.cat.cat_snapshots.*;

public class CatSnapshotsResponse  implements XContentable<CatSnapshotsResponse> {
  
  static final ParseField RECORDS = new ParseField("records");
  private List<CatSnapshotsRecord> _records;
  public List<CatSnapshotsRecord> getRecords() { return this._records; }
  public CatSnapshotsResponse setRecords(List<CatSnapshotsRecord> val) { this._records = val; return this; }


  
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
  public CatSnapshotsResponse fromXContent(XContentParser parser) throws IOException, XContentParseException {
    return CatSnapshotsResponse.PARSER.apply(parser, null);
  }

  public static final ObjectParser<CatSnapshotsResponse, Void> PARSER =
    new ObjectParser<>(CatSnapshotsResponse.class.getName(), false, CatSnapshotsResponse::new);

  static {
    PARSER.declareObjectArray(CatSnapshotsResponse::setRecords, (p, t) -> CatSnapshotsRecord.PARSER.apply(p, t), RECORDS);
  }

}
