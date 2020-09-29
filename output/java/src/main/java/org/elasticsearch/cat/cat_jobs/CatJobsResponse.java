
package org.elasticsearch.cat.cat_jobs;

import java.io.IOException;
import java.util.Date;
import java.util.List;
import java.util.HashMap;
import java.time.Instant;
import java.time.format.DateTimeFormatter;
import org.elasticsearch.*;
import org.elasticsearch.common.ParseField;
import org.elasticsearch.common.xcontent.*;
import org.elasticsearch.cat.cat_jobs.*;
import org.elasticsearch.cat.*;
import org.elasticsearch.common_abstractions.response.*;

public class CatJobsResponse extends ResponseBase<CatJobsResponse> implements XContentable<CatJobsResponse> {
  
  static final ParseField RECORDS = new ParseField("records");
  private List<CatJobsRecord> _records;
  public List<CatJobsRecord> getRecords() { return this._records; }
  public CatJobsResponse setRecords(List<CatJobsRecord> val) { this._records = val; return this; }


  
  @Override
  public void toXContentInternal(XContentBuilder builder, ToXContent.Params params) throws IOException {
    super.toXContentInternal(builder, params);
    if (_records != null) {
      builder.array(RECORDS.getPreferredName(), _records);
    }
  }

  @Override
  public CatJobsResponse fromXContent(XContentParser parser) throws IOException, XContentParseException {
    return CatJobsResponse.PARSER.apply(parser, null);
  }

  public static final ObjectParser<CatJobsResponse, Void> PARSER =
    new ObjectParser<>(CatJobsResponse.class.getName(), false, CatJobsResponse::new);

  static {
    PARSER.declareObjectArray(CatJobsResponse::setRecords, (p, t) -> CatJobsRecord.PARSER.apply(p, t), RECORDS);
  }

}
