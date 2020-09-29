
package org.elasticsearch.x_pack.machine_learning.get_datafeeds;

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

public class GetDatafeedsResponse extends ResponseBase<GetDatafeedsResponse> implements XContentable<GetDatafeedsResponse> {
  
  static final ParseField COUNT = new ParseField("count");
  private long _count;
  private boolean _count$isSet;
  public long getCount() { return this._count; }
  public GetDatafeedsResponse setCount(long val) {
    this._count = val;
    _count$isSet = true;
    return this;
  }

  static final ParseField DATAFEEDS = new ParseField("datafeeds");
  private List<DatafeedConfig> _datafeeds;
  public List<DatafeedConfig> getDatafeeds() { return this._datafeeds; }
  public GetDatafeedsResponse setDatafeeds(List<DatafeedConfig> val) { this._datafeeds = val; return this; }


  
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
  public GetDatafeedsResponse fromXContent(XContentParser parser) throws IOException, XContentParseException {
    return GetDatafeedsResponse.PARSER.apply(parser, null);
  }

  public static final ObjectParser<GetDatafeedsResponse, Void> PARSER =
    new ObjectParser<>(GetDatafeedsResponse.class.getName(), false, GetDatafeedsResponse::new);

  static {
    PARSER.declareLong(GetDatafeedsResponse::setCount, COUNT);
    PARSER.declareObjectArray(GetDatafeedsResponse::setDatafeeds, (p, t) -> DatafeedConfig.PARSER.apply(p, t), DATAFEEDS);
  }

}
