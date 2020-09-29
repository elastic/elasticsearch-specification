
package org.elasticsearch.cat.cat_allocation;

import java.io.IOException;
import java.util.Date;
import java.util.List;
import java.util.HashMap;
import java.time.Instant;
import java.time.format.DateTimeFormatter;
import org.elasticsearch.*;
import org.elasticsearch.common.ParseField;
import org.elasticsearch.common.xcontent.*;
import org.elasticsearch.cat.*;

public class CatAllocationRecord extends ICatRecord implements XContentable<CatAllocationRecord> {
  
  static final ParseField DISK_AVAIL = new ParseField("disk.avail");
  private String _diskAvail;
  public String getDiskAvail() { return this._diskAvail; }
  public CatAllocationRecord setDiskAvail(String val) { this._diskAvail = val; return this; }

  static final ParseField DISK_INDICES = new ParseField("disk.indices");
  private String _diskIndices;
  public String getDiskIndices() { return this._diskIndices; }
  public CatAllocationRecord setDiskIndices(String val) { this._diskIndices = val; return this; }

  static final ParseField DISK_PERCENT = new ParseField("disk.percent");
  private String _diskPercent;
  public String getDiskPercent() { return this._diskPercent; }
  public CatAllocationRecord setDiskPercent(String val) { this._diskPercent = val; return this; }

  static final ParseField DISK_RATIO = new ParseField("disk_ratio");
  private String _diskRatio;
  public String getDiskRatio() { return this._diskRatio; }
  public CatAllocationRecord setDiskRatio(String val) { this._diskRatio = val; return this; }

  static final ParseField DISK_TOTAL = new ParseField("disk.total");
  private String _diskTotal;
  public String getDiskTotal() { return this._diskTotal; }
  public CatAllocationRecord setDiskTotal(String val) { this._diskTotal = val; return this; }

  static final ParseField DISK_USED = new ParseField("disk.used");
  private String _diskUsed;
  public String getDiskUsed() { return this._diskUsed; }
  public CatAllocationRecord setDiskUsed(String val) { this._diskUsed = val; return this; }

  static final ParseField HOST = new ParseField("host");
  private String _host;
  public String getHost() { return this._host; }
  public CatAllocationRecord setHost(String val) { this._host = val; return this; }

  static final ParseField IP = new ParseField("ip");
  private String _ip;
  public String getIp() { return this._ip; }
  public CatAllocationRecord setIp(String val) { this._ip = val; return this; }

  static final ParseField NODE = new ParseField("node");
  private String _node;
  public String getNode() { return this._node; }
  public CatAllocationRecord setNode(String val) { this._node = val; return this; }

  static final ParseField SHARDS = new ParseField("shards");
  private String _shards;
  public String getShards() { return this._shards; }
  public CatAllocationRecord setShards(String val) { this._shards = val; return this; }


  
  @Override
  public void toXContentInternal(XContentBuilder builder, ToXContent.Params params) throws IOException {
    super.toXContentInternal(builder, params);
    if (_diskAvail != null) {
      builder.field(DISK_AVAIL.getPreferredName(), _diskAvail);
    }
    if (_diskIndices != null) {
      builder.field(DISK_INDICES.getPreferredName(), _diskIndices);
    }
    if (_diskPercent != null) {
      builder.field(DISK_PERCENT.getPreferredName(), _diskPercent);
    }
    if (_diskRatio != null) {
      builder.field(DISK_RATIO.getPreferredName(), _diskRatio);
    }
    if (_diskTotal != null) {
      builder.field(DISK_TOTAL.getPreferredName(), _diskTotal);
    }
    if (_diskUsed != null) {
      builder.field(DISK_USED.getPreferredName(), _diskUsed);
    }
    if (_host != null) {
      builder.field(HOST.getPreferredName(), _host);
    }
    if (_ip != null) {
      builder.field(IP.getPreferredName(), _ip);
    }
    if (_node != null) {
      builder.field(NODE.getPreferredName(), _node);
    }
    if (_shards != null) {
      builder.field(SHARDS.getPreferredName(), _shards);
    }
  }

  @Override
  public CatAllocationRecord fromXContent(XContentParser parser) throws IOException, XContentParseException {
    return CatAllocationRecord.PARSER.apply(parser, null);
  }

  public static final ObjectParser<CatAllocationRecord, Void> PARSER =
    new ObjectParser<>(CatAllocationRecord.class.getName(), false, CatAllocationRecord::new);

  static {
    PARSER.declareString(CatAllocationRecord::setDiskAvail, DISK_AVAIL);
    PARSER.declareString(CatAllocationRecord::setDiskIndices, DISK_INDICES);
    PARSER.declareString(CatAllocationRecord::setDiskPercent, DISK_PERCENT);
    PARSER.declareString(CatAllocationRecord::setDiskRatio, DISK_RATIO);
    PARSER.declareString(CatAllocationRecord::setDiskTotal, DISK_TOTAL);
    PARSER.declareString(CatAllocationRecord::setDiskUsed, DISK_USED);
    PARSER.declareString(CatAllocationRecord::setHost, HOST);
    PARSER.declareString(CatAllocationRecord::setIp, IP);
    PARSER.declareString(CatAllocationRecord::setNode, NODE);
    PARSER.declareString(CatAllocationRecord::setShards, SHARDS);
  }

}
