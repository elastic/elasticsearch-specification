
package org.elasticsearch.cluster.cluster_stats;

import java.io.IOException;
import java.util.Date;
import java.util.List;
import java.util.HashMap;
import java.time.Instant;
import java.time.format.DateTimeFormatter;
import org.elasticsearch.*;
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
  private double _primaries;
  private boolean _primaries$isSet;
  public double getPrimaries() { return this._primaries; }
  public ClusterIndicesShardsStats setPrimaries(double val) {
    this._primaries = val;
    _primaries$isSet = true;
    return this;
  }

  static final ParseField REPLICATION = new ParseField("replication");
  private double _replication;
  private boolean _replication$isSet;
  public double getReplication() { return this._replication; }
  public ClusterIndicesShardsStats setReplication(double val) {
    this._replication = val;
    _replication$isSet = true;
    return this;
  }

  static final ParseField TOTAL = new ParseField("total");
  private double _total;
  private boolean _total$isSet;
  public double getTotal() { return this._total; }
  public ClusterIndicesShardsStats setTotal(double val) {
    this._total = val;
    _total$isSet = true;
    return this;
  }


  
  @Override
  public void toXContentInternal(XContentBuilder builder, ToXContent.Params params) throws IOException {
    
    if (_index != null) {
      builder.field(INDEX.getPreferredName());
      _index.toXContent(builder, params);
    }
    if (_primaries$isSet) {
      builder.field(PRIMARIES.getPreferredName(), _primaries);
    }
    if (_replication$isSet) {
      builder.field(REPLICATION.getPreferredName(), _replication);
    }
    if (_total$isSet) {
      builder.field(TOTAL.getPreferredName(), _total);
    }
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
