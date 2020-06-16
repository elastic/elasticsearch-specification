
package org.elasticsearch.indices.monitoring.indices_shard_stores;

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
import org.elasticsearch.indices.monitoring.indices_shard_stores.*;

public class IndicesShardStores  implements XContentable<IndicesShardStores> {
  
  static final ParseField SHARDS = new ParseField("shards");
  private NamedContainer<String, ShardStoreWrapper> _shards;
  public NamedContainer<String, ShardStoreWrapper> getShards() { return this._shards; }
  public IndicesShardStores setShards(NamedContainer<String, ShardStoreWrapper> val) { this._shards = val; return this; }


  
  @Override
  public XContentBuilder toXContent(XContentBuilder builder, ToXContent.Params params) throws IOException {
    builder.startObject();
    if (_shards != null) {
      builder.field(SHARDS.getPreferredName());
      _shards.toXContent(builder, params);
    }
    builder.endObject();
    return builder;
  }

  @Override
  public IndicesShardStores fromXContent(XContentParser parser) throws IOException, XContentParseException {
    return IndicesShardStores.PARSER.apply(parser, null);
  }

  public static final ObjectParser<IndicesShardStores, Void> PARSER =
    new ObjectParser<>(IndicesShardStores.class.getName(), false, IndicesShardStores::new);

  static {
    PARSER.declareObject(IndicesShardStores::setShards, (p, t) -> new NamedContainer<>(n -> () -> n,pp -> ShardStoreWrapper.PARSER.apply(pp, null)), SHARDS);
  }

}
