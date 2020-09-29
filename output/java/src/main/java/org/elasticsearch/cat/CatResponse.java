
package org.elasticsearch.cat;

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

public class CatResponse<TCatRecord> extends ResponseBase<CatResponse> implements XContentable<CatResponse> {
  
  static final ParseField RECORDS = new ParseField("records");
  private List<TCatRecord> _records;
  public List<TCatRecord> getRecords() { return this._records; }
  public CatResponse<TCatRecord> setRecords(List<TCatRecord> val) { this._records = val; return this; }


  
  @Override
  public void toXContentInternal(XContentBuilder builder, ToXContent.Params params) throws IOException {
    super.toXContentInternal(builder, params);
    if (_records != null) {
      builder.array(RECORDS.getPreferredName(), _records);
    }
  }

  @Override
  public CatResponse fromXContent(XContentParser parser) throws IOException, XContentParseException {
    return CatResponse.PARSER.apply(parser, null);
  }

  public static final ObjectParser<CatResponse, Void> PARSER =
    new ObjectParser<>(CatResponse.class.getName(), false, CatResponse::new);

  static {
    PARSER.declareObjectArray(CatResponse::setRecords, (p, t) -> null /* TODO TCatRecord */, RECORDS);
  }

}
