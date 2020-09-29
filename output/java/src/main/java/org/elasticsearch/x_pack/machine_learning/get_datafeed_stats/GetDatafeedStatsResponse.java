
package org.elasticsearch.x_pack.machine_learning.get_datafeed_stats;

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
import org.elasticsearch.x_pack.machine_learning.datafeed.*;
import org.elasticsearch.common_abstractions.response.*;

public class GetDatafeedStatsResponse extends ResponseBase<GetDatafeedStatsResponse> implements XContentable<GetDatafeedStatsResponse> {
  
  static final ParseField COUNT = new ParseField("count");
  private long _count;
  private boolean _count$isSet;
  public long getCount() { return this._count; }
  public GetDatafeedStatsResponse setCount(long val) {
    this._count = val;
    _count$isSet = true;
    return this;
  }

  static final ParseField DATAFEEDS = new ParseField("datafeeds");
  private List<DatafeedStats> _datafeeds;
  public List<DatafeedStats> getDatafeeds() { return this._datafeeds; }
  public GetDatafeedStatsResponse setDatafeeds(List<DatafeedStats> val) { this._datafeeds = val; return this; }


  
  @Override
  public void toXContentInternal(XContentBuilder builder, ToXContent.Params params) throws IOException {
    super.toXContentInternal(builder, params);
    if (_count$isSet) {
      builder.field(COUNT.getPreferredName(), _count);
    }
    if (_datafeeds != null) {
      builder.array(DATAFEEDS.getPreferredName(), _datafeeds);
    }
  }

  @Override
  public GetDatafeedStatsResponse fromXContent(XContentParser parser) throws IOException, XContentParseException {
    return GetDatafeedStatsResponse.PARSER.apply(parser, null);
  }

  public static final ObjectParser<GetDatafeedStatsResponse, Void> PARSER =
    new ObjectParser<>(GetDatafeedStatsResponse.class.getName(), false, GetDatafeedStatsResponse::new);

  static {
    PARSER.declareLong(GetDatafeedStatsResponse::setCount, COUNT);
    PARSER.declareObjectArray(GetDatafeedStatsResponse::setDatafeeds, (p, t) -> DatafeedStats.PARSER.apply(p, t), DATAFEEDS);
  }

}
