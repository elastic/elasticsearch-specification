
package org.elasticsearch.cluster.cluster_stats;

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
import org.elasticsearch.cluster.cluster_stats.*;
import org.elasticsearch.internal.*;

public class ClusterIndicesShardsStats  implements XContentable<ClusterIndicesShardsStats> {
  
  static final ParseField INDEX = new ParseField("index");
  private ClusterIndicesShardsIndexStats _index;
  public ClusterIndicesShardsIndexStats getIndex() { return this._index; }
  public ClusterIndicesShardsStats setIndex(ClusterIndicesShardsIndexStats val) { this._index = val; return this; }


  static final ParseField PRIMARIES = new ParseField("primaries");
  private Double _primaries;
  public Double getPrimaries() { return this._primaries; }
  public ClusterIndicesShardsStats setPrimaries(Double val) { this._primaries = val; return this; }


  static final ParseField REPLICATION = new ParseField("replication");
  private Double _replication;
  public Double getReplication() { return this._replication; }
  public ClusterIndicesShardsStats setReplication(Double val) { this._replication = val; return this; }


  static final ParseField TOTAL = new ParseField("total");
  private Double _total;
  public Double getTotal() { return this._total; }
  public ClusterIndicesShardsStats setTotal(Double val) { this._total = val; return this; }


  
  @Override
  public XContentBuilder toXContent(XContentBuilder builder, ToXContent.Params params) throws IOException {
    builder.startObject();
    if (_index != null) {
      builder.field(INDEX.getPreferredName());
      _index.toXContent(builder, params);
    }
    if (_primaries != null) {
      builder.field(PRIMARIES.getPreferredName(), _primaries);
    }
    if (_replication != null) {
      builder.field(REPLICATION.getPreferredName(), _replication);
    }
    if (_total != null) {
      builder.field(TOTAL.getPreferredName(), _total);
    }
    builder.endObject();
    return builder;
  }

  @Override
  public ClusterIndicesShardsStats fromXContent(XContentParser parser) throws IOException, XContentParseException {
    return ClusterIndicesShardsStats.PARSER.apply(parser, null);
  }

  public static final ObjectParser<ClusterIndicesShardsStats, Void> PARSER =
    new ObjectParser<>(ClusterIndicesShardsStats.class.getName(), false, ClusterIndicesShardsStats::new);

  static {
    PARSER.declareObject(ClusterIndicesShardsStats::setIndex, (p, t) -> ClusterIndicesShardsIndexStats.PARSER.apply(p, t), INDEX);
    PARSER.declareDouble(ClusterIndicesShardsStats::setPrimaries, PRIMARIES);
    PARSER.declareDouble(ClusterIndicesShardsStats::setReplication, REPLICATION);
    PARSER.declareDouble(ClusterIndicesShardsStats::setTotal, TOTAL);
  }

}
