
package org.elasticsearch.cat.cat_allocation;

import java.io.IOException;
import java.util.Date;
import java.util.List;
import java.util.HashMap;
import java.time.Instant;
import java.time.format.DateTimeFormatter;
import org.elasticsearch.*;
import org.elasticsearch.common.ParseField;
import org.elasticsearch.common.xcontent.*;
import org.elasticsearch.cat.cat_allocation.*;
import org.elasticsearch.cat.*;
import org.elasticsearch.common_abstractions.response.*;

public class CatAllocationResponse extends ResponseBase<CatAllocationResponse> implements XContentable<CatAllocationResponse> {
  
  static final ParseField RECORDS = new ParseField("records");
  private List<CatAllocationRecord> _records;
  public List<CatAllocationRecord> getRecords() { return this._records; }
  public CatAllocationResponse setRecords(List<CatAllocationRecord> val) { this._records = val; return this; }


  
  @Override
  public void toXContentInternal(XContentBuilder builder, ToXContent.Params params) throws IOException {
    super.toXContentInternal(builder, params);
    if (_records != null) {
      builder.array(RECORDS.getPreferredName(), _records);
    }
  }

  @Override
  public CatAllocationResponse fromXContent(XContentParser parser) throws IOException, XContentParseException {
    return CatAllocationResponse.PARSER.apply(parser, null);
  }

  public static final ObjectParser<CatAllocationResponse, Void> PARSER =
    new ObjectParser<>(CatAllocationResponse.class.getName(), false, CatAllocationResponse::new);

  static {
    PARSER.declareObjectArray(CatAllocationResponse::setRecords, (p, t) -> CatAllocationRecord.PARSER.apply(p, t), RECORDS);
  }

}
