
package org.elasticsearch.cat.cat_recovery;

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

public class CatRecoveryRecord  implements XContentable<CatRecoveryRecord> {
  
  static final ParseField BYTES = new ParseField("bytes");
  private String _bytes;
  public String getBytes() { return this._bytes; }
  public CatRecoveryRecord setBytes(String val) { this._bytes = val; return this; }


  static final ParseField BYTES_PERCENT = new ParseField("bytes_percent");
  private String _bytesPercent;
  public String getBytesPercent() { return this._bytesPercent; }
  public CatRecoveryRecord setBytesPercent(String val) { this._bytesPercent = val; return this; }


  static final ParseField BYTES_RECOVERED = new ParseField("bytes_recovered");
  private String _bytesRecovered;
  public String getBytesRecovered() { return this._bytesRecovered; }
  public CatRecoveryRecord setBytesRecovered(String val) { this._bytesRecovered = val; return this; }


  static final ParseField BYTES_TOTAL = new ParseField("bytes_total");
  private String _bytesTotal;
  public String getBytesTotal() { return this._bytesTotal; }
  public CatRecoveryRecord setBytesTotal(String val) { this._bytesTotal = val; return this; }


  static final ParseField FILES = new ParseField("files");
  private String _files;
  public String getFiles() { return this._files; }
  public CatRecoveryRecord setFiles(String val) { this._files = val; return this; }


  static final ParseField FILES_PERCENT = new ParseField("files_percent");
  private String _filesPercent;
  public String getFilesPercent() { return this._filesPercent; }
  public CatRecoveryRecord setFilesPercent(String val) { this._filesPercent = val; return this; }


  static final ParseField FILES_RECOVERED = new ParseField("files_recovered");
  private String _filesRecovered;
  public String getFilesRecovered() { return this._filesRecovered; }
  public CatRecoveryRecord setFilesRecovered(String val) { this._filesRecovered = val; return this; }


  static final ParseField FILES_TOTAL = new ParseField("files_total");
  private String _filesTotal;
  public String getFilesTotal() { return this._filesTotal; }
  public CatRecoveryRecord setFilesTotal(String val) { this._filesTotal = val; return this; }


  static final ParseField INDEX = new ParseField("index");
  private String _index;
  public String getIndex() { return this._index; }
  public CatRecoveryRecord setIndex(String val) { this._index = val; return this; }


  static final ParseField REPOSITORY = new ParseField("repository");
  private String _repository;
  public String getRepository() { return this._repository; }
  public CatRecoveryRecord setRepository(String val) { this._repository = val; return this; }


  static final ParseField SHARD = new ParseField("shard");
  private String _shard;
  public String getShard() { return this._shard; }
  public CatRecoveryRecord setShard(String val) { this._shard = val; return this; }


  static final ParseField SNAPSHOT = new ParseField("snapshot");
  private String _snapshot;
  public String getSnapshot() { return this._snapshot; }
  public CatRecoveryRecord setSnapshot(String val) { this._snapshot = val; return this; }


  static final ParseField SOURCE_HOST = new ParseField("source_host");
  private String _sourceHost;
  public String getSourceHost() { return this._sourceHost; }
  public CatRecoveryRecord setSourceHost(String val) { this._sourceHost = val; return this; }


  static final ParseField SOURCE_NODE = new ParseField("source_node");
  private String _sourceNode;
  public String getSourceNode() { return this._sourceNode; }
  public CatRecoveryRecord setSourceNode(String val) { this._sourceNode = val; return this; }


  static final ParseField STAGE = new ParseField("stage");
  private String _stage;
  public String getStage() { return this._stage; }
  public CatRecoveryRecord setStage(String val) { this._stage = val; return this; }


  static final ParseField TARGET_HOST = new ParseField("target_host");
  private String _targetHost;
  public String getTargetHost() { return this._targetHost; }
  public CatRecoveryRecord setTargetHost(String val) { this._targetHost = val; return this; }


  static final ParseField TARGET_NODE = new ParseField("target_node");
  private String _targetNode;
  public String getTargetNode() { return this._targetNode; }
  public CatRecoveryRecord setTargetNode(String val) { this._targetNode = val; return this; }


  static final ParseField TIME = new ParseField("time");
  private String _time;
  public String getTime() { return this._time; }
  public CatRecoveryRecord setTime(String val) { this._time = val; return this; }


  static final ParseField TRANSLOG_OPS = new ParseField("translog_ops");
  private Long _translogOps;
  public Long getTranslogOps() { return this._translogOps; }
  public CatRecoveryRecord setTranslogOps(Long val) { this._translogOps = val; return this; }


  static final ParseField TRANSLOG_OPS_PERCENT = new ParseField("translog_ops_percent");
  private String _translogOpsPercent;
  public String getTranslogOpsPercent() { return this._translogOpsPercent; }
  public CatRecoveryRecord setTranslogOpsPercent(String val) { this._translogOpsPercent = val; return this; }


  static final ParseField TRANSLOG_OPS_RECOVERED = new ParseField("translog_ops_recovered");
  private Long _translogOpsRecovered;
  public Long getTranslogOpsRecovered() { return this._translogOpsRecovered; }
  public CatRecoveryRecord setTranslogOpsRecovered(Long val) { this._translogOpsRecovered = val; return this; }


  static final ParseField TYPE = new ParseField("type");
  private String _type;
  public String getType() { return this._type; }
  public CatRecoveryRecord setType(String val) { this._type = val; return this; }


  
  @Override
  public XContentBuilder toXContent(XContentBuilder builder, ToXContent.Params params) throws IOException {
    builder.startObject();
    if (_bytes != null) {
      builder.field(BYTES.getPreferredName(), _bytes);
    }
    if (_bytesPercent != null) {
      builder.field(BYTES_PERCENT.getPreferredName(), _bytesPercent);
    }
    if (_bytesRecovered != null) {
      builder.field(BYTES_RECOVERED.getPreferredName(), _bytesRecovered);
    }
    if (_bytesTotal != null) {
      builder.field(BYTES_TOTAL.getPreferredName(), _bytesTotal);
    }
    if (_files != null) {
      builder.field(FILES.getPreferredName(), _files);
    }
    if (_filesPercent != null) {
      builder.field(FILES_PERCENT.getPreferredName(), _filesPercent);
    }
    if (_filesRecovered != null) {
      builder.field(FILES_RECOVERED.getPreferredName(), _filesRecovered);
    }
    if (_filesTotal != null) {
      builder.field(FILES_TOTAL.getPreferredName(), _filesTotal);
    }
    if (_index != null) {
      builder.field(INDEX.getPreferredName(), _index);
    }
    if (_repository != null) {
      builder.field(REPOSITORY.getPreferredName(), _repository);
    }
    if (_shard != null) {
      builder.field(SHARD.getPreferredName(), _shard);
    }
    if (_snapshot != null) {
      builder.field(SNAPSHOT.getPreferredName(), _snapshot);
    }
    if (_sourceHost != null) {
      builder.field(SOURCE_HOST.getPreferredName(), _sourceHost);
    }
    if (_sourceNode != null) {
      builder.field(SOURCE_NODE.getPreferredName(), _sourceNode);
    }
    if (_stage != null) {
      builder.field(STAGE.getPreferredName(), _stage);
    }
    if (_targetHost != null) {
      builder.field(TARGET_HOST.getPreferredName(), _targetHost);
    }
    if (_targetNode != null) {
      builder.field(TARGET_NODE.getPreferredName(), _targetNode);
    }
    if (_time != null) {
      builder.field(TIME.getPreferredName(), _time);
    }
    if (_translogOps != null) {
      builder.field(TRANSLOG_OPS.getPreferredName(), _translogOps);
    }
    if (_translogOpsPercent != null) {
      builder.field(TRANSLOG_OPS_PERCENT.getPreferredName(), _translogOpsPercent);
    }
    if (_translogOpsRecovered != null) {
      builder.field(TRANSLOG_OPS_RECOVERED.getPreferredName(), _translogOpsRecovered);
    }
    if (_type != null) {
      builder.field(TYPE.getPreferredName(), _type);
    }
    builder.endObject();
    return builder;
  }

  @Override
  public CatRecoveryRecord fromXContent(XContentParser parser) throws IOException, XContentParseException {
    return CatRecoveryRecord.PARSER.apply(parser, null);
  }

  public static final ObjectParser<CatRecoveryRecord, Void> PARSER =
    new ObjectParser<>(CatRecoveryRecord.class.getName(), false, CatRecoveryRecord::new);

  static {
    PARSER.declareString(CatRecoveryRecord::setBytes, BYTES);
    PARSER.declareString(CatRecoveryRecord::setBytesPercent, BYTES_PERCENT);
    PARSER.declareString(CatRecoveryRecord::setBytesRecovered, BYTES_RECOVERED);
    PARSER.declareString(CatRecoveryRecord::setBytesTotal, BYTES_TOTAL);
    PARSER.declareString(CatRecoveryRecord::setFiles, FILES);
    PARSER.declareString(CatRecoveryRecord::setFilesPercent, FILES_PERCENT);
    PARSER.declareString(CatRecoveryRecord::setFilesRecovered, FILES_RECOVERED);
    PARSER.declareString(CatRecoveryRecord::setFilesTotal, FILES_TOTAL);
    PARSER.declareString(CatRecoveryRecord::setIndex, INDEX);
    PARSER.declareString(CatRecoveryRecord::setRepository, REPOSITORY);
    PARSER.declareString(CatRecoveryRecord::setShard, SHARD);
    PARSER.declareString(CatRecoveryRecord::setSnapshot, SNAPSHOT);
    PARSER.declareString(CatRecoveryRecord::setSourceHost, SOURCE_HOST);
    PARSER.declareString(CatRecoveryRecord::setSourceNode, SOURCE_NODE);
    PARSER.declareString(CatRecoveryRecord::setStage, STAGE);
    PARSER.declareString(CatRecoveryRecord::setTargetHost, TARGET_HOST);
    PARSER.declareString(CatRecoveryRecord::setTargetNode, TARGET_NODE);
    PARSER.declareString(CatRecoveryRecord::setTime, TIME);
    PARSER.declareLong(CatRecoveryRecord::setTranslogOps, TRANSLOG_OPS);
    PARSER.declareString(CatRecoveryRecord::setTranslogOpsPercent, TRANSLOG_OPS_PERCENT);
    PARSER.declareLong(CatRecoveryRecord::setTranslogOpsRecovered, TRANSLOG_OPS_RECOVERED);
    PARSER.declareString(CatRecoveryRecord::setType, TYPE);
  }

}
