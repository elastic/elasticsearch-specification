
package org.elasticsearch.x_pack.machine_learning.get_anomaly_records;

import java.io.IOException;
import java.util.Date;
import java.util.List;
import java.util.HashMap;
import java.time.Instant;
import java.time.format.DateTimeFormatter;
import org.elasticsearch.*;
import org.elasticsearch.common.ParseField;
import org.elasticsearch.common.xcontent.*;
import org.elasticsearch.internal.*;
import org.elasticsearch.x_pack.machine_learning.job.results.*;
import org.elasticsearch.common_abstractions.response.*;

public class GetAnomalyRecordsResponse extends ResponseBase<GetAnomalyRecordsResponse> implements XContentable<GetAnomalyRecordsResponse> {
  
  static final ParseField COUNT = new ParseField("count");
  private long _count;
  private boolean _count$isSet;
  public long getCount() { return this._count; }
  public GetAnomalyRecordsResponse setCount(long val) {
    this._count = val;
    _count$isSet = true;
    return this;
  }

  static final ParseField RECORDS = new ParseField("records");
  private List<AnomalyRecord> _records;
  public List<AnomalyRecord> getRecords() { return this._records; }
  public GetAnomalyRecordsResponse setRecords(List<AnomalyRecord> val) { this._records = val; return this; }


  
  @Override
  public void toXContentInternal(XContentBuilder builder, ToXContent.Params params) throws IOException {
    super.toXContentInternal(builder, params);
    if (_count$isSet) {
      builder.field(COUNT.getPreferredName(), _count);
    }
    if (_records != null) {
      builder.array(RECORDS.getPreferredName(), _records);
    }
  }

  @Override
  public GetAnomalyRecordsResponse fromXContent(XContentParser parser) throws IOException, XContentParseException {
    return GetAnomalyRecordsResponse.PARSER.apply(parser, null);
  }

  public static final ObjectParser<GetAnomalyRecordsResponse, Void> PARSER =
    new ObjectParser<>(GetAnomalyRecordsResponse.class.getName(), false, GetAnomalyRecordsResponse::new);

  static {
    PARSER.declareLong(GetAnomalyRecordsResponse::setCount, COUNT);
    PARSER.declareObjectArray(GetAnomalyRecordsResponse::setRecords, (p, t) -> AnomalyRecord.PARSER.apply(p, t), RECORDS);
  }

}
