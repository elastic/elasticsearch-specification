
package org.elasticsearch.cat.cat_data_frame_analytics;

import java.io.IOException;
import java.util.Date;
import java.util.List;
import java.util.HashMap;
import java.time.Instant;
import java.time.format.DateTimeFormatter;
import org.elasticsearch.*;
import org.elasticsearch.common.ParseField;
import org.elasticsearch.common.xcontent.*;
import org.elasticsearch.cat.cat_data_frame_analytics.*;
import org.elasticsearch.cat.*;
import org.elasticsearch.common_abstractions.response.*;

public class CatDataFrameAnalyticsResponse extends ResponseBase<CatDataFrameAnalyticsResponse> implements XContentable<CatDataFrameAnalyticsResponse> {
  
  static final ParseField RECORDS = new ParseField("records");
  private List<CatDataFrameAnalyticsRecord> _records;
  public List<CatDataFrameAnalyticsRecord> getRecords() { return this._records; }
  public CatDataFrameAnalyticsResponse setRecords(List<CatDataFrameAnalyticsRecord> val) { this._records = val; return this; }


  
  @Override
  public void toXContentInternal(XContentBuilder builder, ToXContent.Params params) throws IOException {
    super.toXContentInternal(builder, params);
    if (_records != null) {
      builder.array(RECORDS.getPreferredName(), _records);
    }
  }

  @Override
  public CatDataFrameAnalyticsResponse fromXContent(XContentParser parser) throws IOException, XContentParseException {
    return CatDataFrameAnalyticsResponse.PARSER.apply(parser, null);
  }

  public static final ObjectParser<CatDataFrameAnalyticsResponse, Void> PARSER =
    new ObjectParser<>(CatDataFrameAnalyticsResponse.class.getName(), false, CatDataFrameAnalyticsResponse::new);

  static {
    PARSER.declareObjectArray(CatDataFrameAnalyticsResponse::setRecords, (p, t) -> CatDataFrameAnalyticsRecord.PARSER.apply(p, t), RECORDS);
  }

}
