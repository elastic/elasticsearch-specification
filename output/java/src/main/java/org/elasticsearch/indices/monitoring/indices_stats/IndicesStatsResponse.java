
package org.elasticsearch.indices.monitoring.indices_stats;

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
import org.elasticsearch.indices.monitoring.indices_stats.*;
import org.elasticsearch.common_options.hit.*;

public class IndicesStatsResponse  implements XContentable<IndicesStatsResponse> {
  
  static final ParseField INDICES = new ParseField("indices");
  private NamedContainer<String, IndicesStats> _indices;
  public NamedContainer<String, IndicesStats> getIndices() { return this._indices; }
  public IndicesStatsResponse setIndices(NamedContainer<String, IndicesStats> val) { this._indices = val; return this; }


  static final ParseField SHARDS = new ParseField("_shards");
  private ShardStatistics _shards;
  public ShardStatistics getShards() { return this._shards; }
  public IndicesStatsResponse setShards(ShardStatistics val) { this._shards = val; return this; }


  static final ParseField ALL = new ParseField("_all");
  private IndicesStats _all;
  public IndicesStats getAll() { return this._all; }
  public IndicesStatsResponse setAll(IndicesStats val) { this._all = val; return this; }


  
  @Override
  public XContentBuilder toXContent(XContentBuilder builder, ToXContent.Params params) throws IOException {
    builder.startObject();
    if (_indices != null) {
      builder.field(INDICES.getPreferredName());
      _indices.toXContent(builder, params);
    }
    if (_shards != null) {
      builder.field(SHARDS.getPreferredName());
      _shards.toXContent(builder, params);
    }
    if (_all != null) {
      builder.field(ALL.getPreferredName());
      _all.toXContent(builder, params);
    }
    builder.endObject();
    return builder;
  }

  @Override
  public IndicesStatsResponse fromXContent(XContentParser parser) throws IOException, XContentParseException {
    return IndicesStatsResponse.PARSER.apply(parser, null);
  }

  public static final ObjectParser<IndicesStatsResponse, Void> PARSER =
    new ObjectParser<>(IndicesStatsResponse.class.getName(), false, IndicesStatsResponse::new);

  static {
    PARSER.declareObject(IndicesStatsResponse::setIndices, (p, t) -> new NamedContainer<>(n -> () -> n,pp -> IndicesStats.PARSER.apply(pp, null)), INDICES);
    PARSER.declareObject(IndicesStatsResponse::setShards, (p, t) -> ShardStatistics.PARSER.apply(p, t), SHARDS);
    PARSER.declareObject(IndicesStatsResponse::setAll, (p, t) -> IndicesStats.PARSER.apply(p, t), ALL);
  }

}
