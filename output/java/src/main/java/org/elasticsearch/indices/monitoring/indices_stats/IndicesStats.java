
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

public class IndicesStats  implements XContentable<IndicesStats> {
  
  static final ParseField PRIMARIES = new ParseField("primaries");
  private IndexStats _primaries;
  public IndexStats getPrimaries() { return this._primaries; }
  public IndicesStats setPrimaries(IndexStats val) { this._primaries = val; return this; }


  static final ParseField SHARDS = new ParseField("shards");
  private NamedContainer<String, List<ShardStats>> _shards;
  public NamedContainer<String, List<ShardStats>> getShards() { return this._shards; }
  public IndicesStats setShards(NamedContainer<String, List<ShardStats>> val) { this._shards = val; return this; }


  static final ParseField TOTAL = new ParseField("total");
  private IndexStats _total;
  public IndexStats getTotal() { return this._total; }
  public IndicesStats setTotal(IndexStats val) { this._total = val; return this; }


  static final ParseField UUID = new ParseField("uuid");
  private String _uuid;
  public String getUuid() { return this._uuid; }
  public IndicesStats setUuid(String val) { this._uuid = val; return this; }


  
  @Override
  public XContentBuilder toXContent(XContentBuilder builder, ToXContent.Params params) throws IOException {
    builder.startObject();
    if (_primaries != null) {
      builder.field(PRIMARIES.getPreferredName());
      _primaries.toXContent(builder, params);
    }
    if (_shards != null) {
      builder.field(SHARDS.getPreferredName());
      _shards.toXContent(builder, params);
    }
    if (_total != null) {
      builder.field(TOTAL.getPreferredName());
      _total.toXContent(builder, params);
    }
    if (_uuid != null) {
      builder.field(UUID.getPreferredName(), _uuid);
    }
    builder.endObject();
    return builder;
  }

  @Override
  public IndicesStats fromXContent(XContentParser parser) throws IOException, XContentParseException {
    return IndicesStats.PARSER.apply(parser, null);
  }

  public static final ObjectParser<IndicesStats, Void> PARSER =
    new ObjectParser<>(IndicesStats.class.getName(), false, IndicesStats::new);

  static {
    PARSER.declareObject(IndicesStats::setPrimaries, (p, t) -> IndexStats.PARSER.apply(p, t), PRIMARIES);
    PARSER.declareObject(IndicesStats::setShards, (p, t) -> new NamedContainer<>(n -> () -> n,null /* TODO List<ShardStats> */), SHARDS);
    PARSER.declareObject(IndicesStats::setTotal, (p, t) -> IndexStats.PARSER.apply(p, t), TOTAL);
    PARSER.declareString(IndicesStats::setUuid, UUID);
  }

}
