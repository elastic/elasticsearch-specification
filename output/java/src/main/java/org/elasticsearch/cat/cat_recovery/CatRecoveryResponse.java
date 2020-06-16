
package org.elasticsearch.cat.cat_recovery;

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
import org.elasticsearch.cat.cat_recovery.*;

public class CatRecoveryResponse  implements XContentable<CatRecoveryResponse> {
  
  static final ParseField RECORDS = new ParseField("records");
  private List<CatRecoveryRecord> _records;
  public List<CatRecoveryRecord> getRecords() { return this._records; }
  public CatRecoveryResponse setRecords(List<CatRecoveryRecord> val) { this._records = val; return this; }


  
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
  public CatRecoveryResponse fromXContent(XContentParser parser) throws IOException, XContentParseException {
    return CatRecoveryResponse.PARSER.apply(parser, null);
  }

  public static final ObjectParser<CatRecoveryResponse, Void> PARSER =
    new ObjectParser<>(CatRecoveryResponse.class.getName(), false, CatRecoveryResponse::new);

  static {
    PARSER.declareObjectArray(CatRecoveryResponse::setRecords, (p, t) -> CatRecoveryRecord.PARSER.apply(p, t), RECORDS);
  }

}
