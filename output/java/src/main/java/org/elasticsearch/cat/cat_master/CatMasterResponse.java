
package org.elasticsearch.cat.cat_master;

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
import org.elasticsearch.cat.cat_master.*;

public class CatMasterResponse  implements XContentable<CatMasterResponse> {
  
  static final ParseField RECORDS = new ParseField("records");
  private List<CatMasterRecord> _records;
  public List<CatMasterRecord> getRecords() { return this._records; }
  public CatMasterResponse setRecords(List<CatMasterRecord> val) { this._records = val; return this; }


  
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
  public CatMasterResponse fromXContent(XContentParser parser) throws IOException, XContentParseException {
    return CatMasterResponse.PARSER.apply(parser, null);
  }

  public static final ObjectParser<CatMasterResponse, Void> PARSER =
    new ObjectParser<>(CatMasterResponse.class.getName(), false, CatMasterResponse::new);

  static {
    PARSER.declareObjectArray(CatMasterResponse::setRecords, (p, t) -> CatMasterRecord.PARSER.apply(p, t), RECORDS);
  }

}
