
package org.elasticsearch.search.count;

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
import org.elasticsearch.common_options.hit.*;
import org.elasticsearch.common_abstractions.response.*;

public class CountResponse extends ResponseBase<CountResponse> implements XContentable<CountResponse> {
  
  static final ParseField COUNT = new ParseField("count");
  private long _count;
  private boolean _count$isSet;
  public long getCount() { return this._count; }
  public CountResponse setCount(long val) {
    this._count = val;
    _count$isSet = true;
    return this;
  }

  static final ParseField SHARDS = new ParseField("_shards");
  private ShardStatistics _shards;
  public ShardStatistics getShards() { return this._shards; }
  public CountResponse setShards(ShardStatistics val) { this._shards = val; return this; }


  
  @Override
  public void toXContentInternal(XContentBuilder builder, ToXContent.Params params) throws IOException {
    super.toXContentInternal(builder, params);
    if (_count$isSet) {
      builder.field(COUNT.getPreferredName(), _count);
    }
    if (_shards != null) {
      builder.field(SHARDS.getPreferredName());
      _shards.toXContent(builder, params);
    }
  }

  @Override
  public CountResponse fromXContent(XContentParser parser) throws IOException, XContentParseException {
    return CountResponse.PARSER.apply(parser, null);
  }

  public static final ObjectParser<CountResponse, Void> PARSER =
    new ObjectParser<>(CountResponse.class.getName(), false, CountResponse::new);

  static {
    PARSER.declareLong(CountResponse::setCount, COUNT);
    PARSER.declareObject(CountResponse::setShards, (p, t) -> ShardStatistics.PARSER.apply(p, t), SHARDS);
  }

}
