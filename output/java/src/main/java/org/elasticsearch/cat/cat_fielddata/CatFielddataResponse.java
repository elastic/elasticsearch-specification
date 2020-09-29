
package org.elasticsearch.cat.cat_fielddata;

import java.io.IOException;
import java.util.Date;
import java.util.List;
import java.util.HashMap;
import java.time.Instant;
import java.time.format.DateTimeFormatter;
import org.elasticsearch.*;
import org.elasticsearch.common.ParseField;
import org.elasticsearch.common.xcontent.*;
import org.elasticsearch.cat.cat_fielddata.*;
import org.elasticsearch.cat.*;
import org.elasticsearch.common_abstractions.response.*;

public class CatFielddataResponse extends ResponseBase<CatFielddataResponse> implements XContentable<CatFielddataResponse> {
  
  static final ParseField RECORDS = new ParseField("records");
  private List<CatFielddataRecord> _records;
  public List<CatFielddataRecord> getRecords() { return this._records; }
  public CatFielddataResponse setRecords(List<CatFielddataRecord> val) { this._records = val; return this; }


  
  @Override
  public void toXContentInternal(XContentBuilder builder, ToXContent.Params params) throws IOException {
    super.toXContentInternal(builder, params);
    if (_records != null) {
      builder.array(RECORDS.getPreferredName(), _records);
    }
  }

  @Override
  public CatFielddataResponse fromXContent(XContentParser parser) throws IOException, XContentParseException {
    return CatFielddataResponse.PARSER.apply(parser, null);
  }

  public static final ObjectParser<CatFielddataResponse, Void> PARSER =
    new ObjectParser<>(CatFielddataResponse.class.getName(), false, CatFielddataResponse::new);

  static {
    PARSER.declareObjectArray(CatFielddataResponse::setRecords, (p, t) -> CatFielddataRecord.PARSER.apply(p, t), RECORDS);
  }

}
