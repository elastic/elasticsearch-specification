
package org.elasticsearch.common_abstractions.response;

import java.io.IOException;
import java.util.Date;
import java.util.List;
import java.util.HashMap;
import java.time.Instant;
import java.time.format.DateTimeFormatter;
import org.elasticsearch.*;
import org.elasticsearch.common.ParseField;
import org.elasticsearch.common.xcontent.*;
import org.elasticsearch.common_options.hit.*;
import org.elasticsearch.common_abstractions.response.*;

public class ShardsOperationResponseBase extends ResponseBase<ShardsOperationResponseBase> implements XContentable<ShardsOperationResponseBase> {
  
  static final ParseField SHARDS = new ParseField("_shards");
  private ShardStatistics _shards;
  public ShardStatistics getShards() { return this._shards; }
  public ShardsOperationResponseBase setShards(ShardStatistics val) { this._shards = val; return this; }


  
  @Override
  public void toXContentInternal(XContentBuilder builder, ToXContent.Params params) throws IOException {
    super.toXContentInternal(builder, params);
    if (_shards != null) {
      builder.field(SHARDS.getPreferredName());
      _shards.toXContent(builder, params);
    }
  }

  @Override
  public ShardsOperationResponseBase fromXContent(XContentParser parser) throws IOException, XContentParseException {
    return ShardsOperationResponseBase.PARSER.apply(parser, null);
  }

  public static final ObjectParser<ShardsOperationResponseBase, Void> PARSER =
    new ObjectParser<>(ShardsOperationResponseBase.class.getName(), false, ShardsOperationResponseBase::new);

  static {
    PARSER.declareObject(ShardsOperationResponseBase::setShards, (p, t) -> ShardStatistics.PARSER.apply(p, t), SHARDS);
  }

}
