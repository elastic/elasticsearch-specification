
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

public class IndicesShardStoresResponse  implements XContentable<IndicesShardStoresResponse> {
  
  static final ParseField INDICES = new ParseField("indices");
  private NamedContainer<String, IndicesShardStores> _indices;
  public NamedContainer<String, IndicesShardStores> getIndices() { return this._indices; }
  public IndicesShardStoresResponse setIndices(NamedContainer<String, IndicesShardStores> val) { this._indices = val; return this; }


  
  @Override
  public XContentBuilder toXContent(XContentBuilder builder, ToXContent.Params params) throws IOException {
    builder.startObject();
    if (_indices != null) {
      builder.field(INDICES.getPreferredName());
      _indices.toXContent(builder, params);
    }
    builder.endObject();
    return builder;
  }

  @Override
  public IndicesShardStoresResponse fromXContent(XContentParser parser) throws IOException, XContentParseException {
    return IndicesShardStoresResponse.PARSER.apply(parser, null);
  }

  public static final ObjectParser<IndicesShardStoresResponse, Void> PARSER =
    new ObjectParser<>(IndicesShardStoresResponse.class.getName(), false, IndicesShardStoresResponse::new);

  static {
    PARSER.declareObject(IndicesShardStoresResponse::setIndices, (p, t) -> new NamedContainer<>(n -> () -> n,pp -> IndicesShardStores.PARSER.apply(pp, null)), INDICES);
  }

}
