
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
import org.elasticsearch.internal.*;

public class ClusterNodeCount  implements XContentable<ClusterNodeCount> {
  
  static final ParseField COORDINATING_ONLY = new ParseField("coordinating_only");
  private int _coordinatingOnly;
  private boolean _coordinatingOnly$isSet;
  public int getCoordinatingOnly() { return this._coordinatingOnly; }
  public ClusterNodeCount setCoordinatingOnly(int val) {
    this._coordinatingOnly = val;
    _coordinatingOnly$isSet = true;
    return this;
  }

  static final ParseField DATA = new ParseField("data");
  private int _data;
  private boolean _data$isSet;
  public int getData() { return this._data; }
  public ClusterNodeCount setData(int val) {
    this._data = val;
    _data$isSet = true;
    return this;
  }

  static final ParseField INGEST = new ParseField("ingest");
  private int _ingest;
  private boolean _ingest$isSet;
  public int getIngest() { return this._ingest; }
  public ClusterNodeCount setIngest(int val) {
    this._ingest = val;
    _ingest$isSet = true;
    return this;
  }

  static final ParseField MASTER = new ParseField("master");
  private int _master;
  private boolean _master$isSet;
  public int getMaster() { return this._master; }
  public ClusterNodeCount setMaster(int val) {
    this._master = val;
    _master$isSet = true;
    return this;
  }

  static final ParseField TOTAL = new ParseField("total");
  private int _total;
  private boolean _total$isSet;
  public int getTotal() { return this._total; }
  public ClusterNodeCount setTotal(int val) {
    this._total = val;
    _total$isSet = true;
    return this;
  }

  static final ParseField VOTING_ONLY = new ParseField("voting_only");
  private int _votingOnly;
  private boolean _votingOnly$isSet;
  public int getVotingOnly() { return this._votingOnly; }
  public ClusterNodeCount setVotingOnly(int val) {
    this._votingOnly = val;
    _votingOnly$isSet = true;
    return this;
  }


  
  @Override
  public void toXContentInternal(XContentBuilder builder, ToXContent.Params params) throws IOException {
    
    if (_coordinatingOnly$isSet) {
      builder.field(COORDINATING_ONLY.getPreferredName(), _coordinatingOnly);
    }
    if (_data$isSet) {
      builder.field(DATA.getPreferredName(), _data);
    }
    if (_ingest$isSet) {
      builder.field(INGEST.getPreferredName(), _ingest);
    }
    if (_master$isSet) {
      builder.field(MASTER.getPreferredName(), _master);
    }
    if (_total$isSet) {
      builder.field(TOTAL.getPreferredName(), _total);
    }
    if (_votingOnly$isSet) {
      builder.field(VOTING_ONLY.getPreferredName(), _votingOnly);
    }
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
