
package org.elasticsearch.cat.cat_health;

import java.io.IOException;
import java.util.Date;
import java.util.List;
import java.util.HashMap;
import java.time.Instant;
import java.time.format.DateTimeFormatter;
import org.elasticsearch.*;
import org.elasticsearch.common.ParseField;
import org.elasticsearch.common.xcontent.*;
import org.elasticsearch.cat.cat_health.*;
import org.elasticsearch.cat.*;
import org.elasticsearch.common_abstractions.response.*;

public class CatHealthResponse extends ResponseBase<CatHealthResponse> implements XContentable<CatHealthResponse> {
  
  static final ParseField RECORDS = new ParseField("records");
  private List<CatHealthRecord> _records;
  public List<CatHealthRecord> getRecords() { return this._records; }
  public CatHealthResponse setRecords(List<CatHealthRecord> val) { this._records = val; return this; }


  
  @Override
  public void toXContentInternal(XContentBuilder builder, ToXContent.Params params) throws IOException {
    super.toXContentInternal(builder, params);
    if (_records != null) {
      builder.array(RECORDS.getPreferredName(), _records);
    }
  }

  @Override
  public CatHealthResponse fromXContent(XContentParser parser) throws IOException, XContentParseException {
    return CatHealthResponse.PARSER.apply(parser, null);
  }

  public static final ObjectParser<CatHealthResponse, Void> PARSER =
    new ObjectParser<>(CatHealthResponse.class.getName(), false, CatHealthResponse::new);

  static {
    PARSER.declareObjectArray(CatHealthResponse::setRecords, (p, t) -> CatHealthRecord.PARSER.apply(p, t), RECORDS);
  }

}
