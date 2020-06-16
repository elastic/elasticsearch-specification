
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
import org.elasticsearch.internal.*;

public class ClusterNodeCount  implements XContentable<ClusterNodeCount> {
  
  static final ParseField COORDINATING_ONLY = new ParseField("coordinating_only");
  private Integer _coordinatingOnly;
  public Integer getCoordinatingOnly() { return this._coordinatingOnly; }
  public ClusterNodeCount setCoordinatingOnly(Integer val) { this._coordinatingOnly = val; return this; }


  static final ParseField DATA = new ParseField("data");
  private Integer _data;
  public Integer getData() { return this._data; }
  public ClusterNodeCount setData(Integer val) { this._data = val; return this; }


  static final ParseField INGEST = new ParseField("ingest");
  private Integer _ingest;
  public Integer getIngest() { return this._ingest; }
  public ClusterNodeCount setIngest(Integer val) { this._ingest = val; return this; }


  static final ParseField MASTER = new ParseField("master");
  private Integer _master;
  public Integer getMaster() { return this._master; }
  public ClusterNodeCount setMaster(Integer val) { this._master = val; return this; }


  static final ParseField TOTAL = new ParseField("total");
  private Integer _total;
  public Integer getTotal() { return this._total; }
  public ClusterNodeCount setTotal(Integer val) { this._total = val; return this; }


  static final ParseField VOTING_ONLY = new ParseField("voting_only");
  private Integer _votingOnly;
  public Integer getVotingOnly() { return this._votingOnly; }
  public ClusterNodeCount setVotingOnly(Integer val) { this._votingOnly = val; return this; }


  
  @Override
  public XContentBuilder toXContent(XContentBuilder builder, ToXContent.Params params) throws IOException {
    builder.startObject();
    if (_coordinatingOnly != null) {
      builder.field(COORDINATING_ONLY.getPreferredName(), _coordinatingOnly);
    }
    if (_data != null) {
      builder.field(DATA.getPreferredName(), _data);
    }
    if (_ingest != null) {
      builder.field(INGEST.getPreferredName(), _ingest);
    }
    if (_master != null) {
      builder.field(MASTER.getPreferredName(), _master);
    }
    if (_total != null) {
      builder.field(TOTAL.getPreferredName(), _total);
    }
    if (_votingOnly != null) {
      builder.field(VOTING_ONLY.getPreferredName(), _votingOnly);
    }
    builder.endObject();
    return builder;
  }

  @Override
  public ClusterNodeCount fromXContent(XContentParser parser) throws IOException, XContentParseException {
    return ClusterNodeCount.PARSER.apply(parser, null);
  }

  public static final ObjectParser<ClusterNodeCount, Void> PARSER =
    new ObjectParser<>(ClusterNodeCount.class.getName(), false, ClusterNodeCount::new);

  static {
    PARSER.declareInt(ClusterNodeCount::setCoordinatingOnly, COORDINATING_ONLY);
    PARSER.declareInt(ClusterNodeCount::setData, DATA);
    PARSER.declareInt(ClusterNodeCount::setIngest, INGEST);
    PARSER.declareInt(ClusterNodeCount::setMaster, MASTER);
    PARSER.declareInt(ClusterNodeCount::setTotal, TOTAL);
    PARSER.declareInt(ClusterNodeCount::setVotingOnly, VOTING_ONLY);
  }

}
