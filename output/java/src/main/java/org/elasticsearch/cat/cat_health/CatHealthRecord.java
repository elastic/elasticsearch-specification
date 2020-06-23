
package org.elasticsearch.cat.cat_health;

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


public class CatHealthRecord  implements XContentable<CatHealthRecord> {
  
  static final ParseField CLUSTER = new ParseField("cluster");
  private String _cluster;
  public String getCluster() { return this._cluster; }
  public CatHealthRecord setCluster(String val) { this._cluster = val; return this; }


  static final ParseField EPOCH = new ParseField("epoch");
  private String _epoch;
  public String getEpoch() { return this._epoch; }
  public CatHealthRecord setEpoch(String val) { this._epoch = val; return this; }


  static final ParseField INIT = new ParseField("init");
  private String _init;
  public String getInit() { return this._init; }
  public CatHealthRecord setInit(String val) { this._init = val; return this; }


  static final ParseField NODE_DATA = new ParseField("node.data");
  private String _nodeData;
  public String getNodeData() { return this._nodeData; }
  public CatHealthRecord setNodeData(String val) { this._nodeData = val; return this; }


  static final ParseField NODE_TOTAL = new ParseField("node.total");
  private String _nodeTotal;
  public String getNodeTotal() { return this._nodeTotal; }
  public CatHealthRecord setNodeTotal(String val) { this._nodeTotal = val; return this; }


  static final ParseField PENDING_TASKS = new ParseField("pending_tasks");
  private String _pendingTasks;
  public String getPendingTasks() { return this._pendingTasks; }
  public CatHealthRecord setPendingTasks(String val) { this._pendingTasks = val; return this; }


  static final ParseField PRI = new ParseField("pri");
  private String _pri;
  public String getPri() { return this._pri; }
  public CatHealthRecord setPri(String val) { this._pri = val; return this; }


  static final ParseField RELO = new ParseField("relo");
  private String _relo;
  public String getRelo() { return this._relo; }
  public CatHealthRecord setRelo(String val) { this._relo = val; return this; }


  static final ParseField SHARDS = new ParseField("shards");
  private String _shards;
  public String getShards() { return this._shards; }
  public CatHealthRecord setShards(String val) { this._shards = val; return this; }


  static final ParseField STATUS = new ParseField("status");
  private String _status;
  public String getStatus() { return this._status; }
  public CatHealthRecord setStatus(String val) { this._status = val; return this; }


  static final ParseField TIMESTAMP = new ParseField("timestamp");
  private String _timestamp;
  public String getTimestamp() { return this._timestamp; }
  public CatHealthRecord setTimestamp(String val) { this._timestamp = val; return this; }


  static final ParseField UNASSIGN = new ParseField("unassign");
  private String _unassign;
  public String getUnassign() { return this._unassign; }
  public CatHealthRecord setUnassign(String val) { this._unassign = val; return this; }


  
  @Override
  public XContentBuilder toXContent(XContentBuilder builder, ToXContent.Params params) throws IOException {
    builder.startObject();
    if (_cluster != null) {
      builder.field(CLUSTER.getPreferredName(), _cluster);
    }
    if (_epoch != null) {
      builder.field(EPOCH.getPreferredName(), _epoch);
    }
    if (_init != null) {
      builder.field(INIT.getPreferredName(), _init);
    }
    if (_nodeData != null) {
      builder.field(NODE_DATA.getPreferredName(), _nodeData);
    }
    if (_nodeTotal != null) {
      builder.field(NODE_TOTAL.getPreferredName(), _nodeTotal);
    }
    if (_pendingTasks != null) {
      builder.field(PENDING_TASKS.getPreferredName(), _pendingTasks);
    }
    if (_pri != null) {
      builder.field(PRI.getPreferredName(), _pri);
    }
    if (_relo != null) {
      builder.field(RELO.getPreferredName(), _relo);
    }
    if (_shards != null) {
      builder.field(SHARDS.getPreferredName(), _shards);
    }
    if (_status != null) {
      builder.field(STATUS.getPreferredName(), _status);
    }
    if (_timestamp != null) {
      builder.field(TIMESTAMP.getPreferredName(), _timestamp);
    }
    if (_unassign != null) {
      builder.field(UNASSIGN.getPreferredName(), _unassign);
    }
    builder.endObject();
    return builder;
  }

  @Override
  public CatHealthRecord fromXContent(XContentParser parser) throws IOException, XContentParseException {
    return CatHealthRecord.PARSER.apply(parser, null);
  }

  public static final ObjectParser<CatHealthRecord, Void> PARSER =
    new ObjectParser<>(CatHealthRecord.class.getName(), false, CatHealthRecord::new);

  static {
    PARSER.declareString(CatHealthRecord::setCluster, CLUSTER);
    PARSER.declareString(CatHealthRecord::setEpoch, EPOCH);
    PARSER.declareString(CatHealthRecord::setInit, INIT);
    PARSER.declareString(CatHealthRecord::setNodeData, NODE_DATA);
    PARSER.declareString(CatHealthRecord::setNodeTotal, NODE_TOTAL);
    PARSER.declareString(CatHealthRecord::setPendingTasks, PENDING_TASKS);
    PARSER.declareString(CatHealthRecord::setPri, PRI);
    PARSER.declareString(CatHealthRecord::setRelo, RELO);
    PARSER.declareString(CatHealthRecord::setShards, SHARDS);
    PARSER.declareString(CatHealthRecord::setStatus, STATUS);
    PARSER.declareString(CatHealthRecord::setTimestamp, TIMESTAMP);
    PARSER.declareString(CatHealthRecord::setUnassign, UNASSIGN);
  }

}
