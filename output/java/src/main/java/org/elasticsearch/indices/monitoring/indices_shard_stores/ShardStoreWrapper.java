
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

public class ShardStoreWrapper  implements XContentable<ShardStoreWrapper> {
  
  static final ParseField STORES = new ParseField("stores");
  private List<ShardStore> _stores;
  public List<ShardStore> getStores() { return this._stores; }
  public ShardStoreWrapper setStores(List<ShardStore> val) { this._stores = val; return this; }


  
  @Override
  public XContentBuilder toXContent(XContentBuilder builder, ToXContent.Params params) throws IOException {
    builder.startObject();
    if (_stores != null) {
      builder.array(STORES.getPreferredName(), _stores);
    }
    builder.endObject();
    return builder;
  }

  @Override
  public ShardStoreWrapper fromXContent(XContentParser parser) throws IOException, XContentParseException {
    return ShardStoreWrapper.PARSER.apply(parser, null);
  }

  public static final ObjectParser<ShardStoreWrapper, Void> PARSER =
    new ObjectParser<>(ShardStoreWrapper.class.getName(), false, ShardStoreWrapper::new);

  static {
    PARSER.declareObjectArray(ShardStoreWrapper::setStores, (p, t) -> ShardStore.PARSER.apply(p, t), STORES);
  }

}
