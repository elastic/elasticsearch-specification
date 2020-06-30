
package org.elasticsearch.x_pack.machine_learning.get_datafeed_stats;

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
import org.elasticsearch.internal.*;
import org.elasticsearch.x_pack.machine_learning.datafeed.*;

public class GetDatafeedStatsResponse  implements XContentable<GetDatafeedStatsResponse> {
  
  static final ParseField COUNT = new ParseField("count");
  private Long _count;
  public Long getCount() { return this._count; }
  public GetDatafeedStatsResponse setCount(Long val) { this._count = val; return this; }


  static final ParseField DATAFEEDS = new ParseField("datafeeds");
  private List<DatafeedStats> _datafeeds;
  public List<DatafeedStats> getDatafeeds() { return this._datafeeds; }
  public GetDatafeedStatsResponse setDatafeeds(List<DatafeedStats> val) { this._datafeeds = val; return this; }


  
  @Override
  public XContentBuilder toXContent(XContentBuilder builder, ToXContent.Params params) throws IOException {
    builder.startObject();
    if (_count != null) {
      builder.field(COUNT.getPreferredName(), _count);
    }
    if (_datafeeds != null) {
      builder.array(DATAFEEDS.getPreferredName(), _datafeeds);
    }
    builder.endObject();
    return builder;
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
