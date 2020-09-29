
package org.elasticsearch.cluster.nodes_info;

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

public class NodeInfoOscpu  implements XContentable<NodeInfoOscpu> {
  
  static final ParseField CACHE_SIZE = new ParseField("cache_size");
  private String _cacheSize;
  public String getCacheSize() { return this._cacheSize; }
  public NodeInfoOscpu setCacheSize(String val) { this._cacheSize = val; return this; }

  static final ParseField CACHE_SIZE_IN_BYTES = new ParseField("cache_size_in_bytes");
  private int _cacheSizeInBytes;
  private boolean _cacheSizeInBytes$isSet;
  public int getCacheSizeInBytes() { return this._cacheSizeInBytes; }
  public NodeInfoOscpu setCacheSizeInBytes(int val) {
    this._cacheSizeInBytes = val;
    _cacheSizeInBytes$isSet = true;
    return this;
  }

  static final ParseField CORES_PER_SOCKET = new ParseField("cores_per_socket");
  private int _coresPerSocket;
  private boolean _coresPerSocket$isSet;
  public int getCoresPerSocket() { return this._coresPerSocket; }
  public NodeInfoOscpu setCoresPerSocket(int val) {
    this._coresPerSocket = val;
    _coresPerSocket$isSet = true;
    return this;
  }

  static final ParseField MHZ = new ParseField("mhz");
  private int _mhz;
  private boolean _mhz$isSet;
  public int getMhz() { return this._mhz; }
  public NodeInfoOscpu setMhz(int val) {
    this._mhz = val;
    _mhz$isSet = true;
    return this;
  }

  static final ParseField MODEL = new ParseField("model");
  private String _model;
  public String getModel() { return this._model; }
  public NodeInfoOscpu setModel(String val) { this._model = val; return this; }

  static final ParseField TOTAL_CORES = new ParseField("total_cores");
  private int _totalCores;
  private boolean _totalCores$isSet;
  public int getTotalCores() { return this._totalCores; }
  public NodeInfoOscpu setTotalCores(int val) {
    this._totalCores = val;
    _totalCores$isSet = true;
    return this;
  }

  static final ParseField TOTAL_SOCKETS = new ParseField("total_sockets");
  private int _totalSockets;
  private boolean _totalSockets$isSet;
  public int getTotalSockets() { return this._totalSockets; }
  public NodeInfoOscpu setTotalSockets(int val) {
    this._totalSockets = val;
    _totalSockets$isSet = true;
    return this;
  }

  static final ParseField VENDOR = new ParseField("vendor");
  private String _vendor;
  public String getVendor() { return this._vendor; }
  public NodeInfoOscpu setVendor(String val) { this._vendor = val; return this; }


  
  @Override
  public void toXContentInternal(XContentBuilder builder, ToXContent.Params params) throws IOException {
    
    if (_cacheSize != null) {
      builder.field(CACHE_SIZE.getPreferredName(), _cacheSize);
    }
    if (_cacheSizeInBytes$isSet) {
      builder.field(CACHE_SIZE_IN_BYTES.getPreferredName(), _cacheSizeInBytes);
    }
    if (_coresPerSocket$isSet) {
      builder.field(CORES_PER_SOCKET.getPreferredName(), _coresPerSocket);
    }
    if (_mhz$isSet) {
      builder.field(MHZ.getPreferredName(), _mhz);
    }
    if (_model != null) {
      builder.field(MODEL.getPreferredName(), _model);
    }
    if (_totalCores$isSet) {
      builder.field(TOTAL_CORES.getPreferredName(), _totalCores);
    }
    if (_totalSockets$isSet) {
      builder.field(TOTAL_SOCKETS.getPreferredName(), _totalSockets);
    }
    if (_vendor != null) {
      builder.field(VENDOR.getPreferredName(), _vendor);
    }
  }

  @Override
  public NodeInfoOscpu fromXContent(XContentParser parser) throws IOException, XContentParseException {
    return NodeInfoOscpu.PARSER.apply(parser, null);
  }

  public static final ObjectParser<NodeInfoOscpu, Void> PARSER =
    new ObjectParser<>(NodeInfoOscpu.class.getName(), false, NodeInfoOscpu::new);

  static {
    PARSER.declareString(NodeInfoOscpu::setCacheSize, CACHE_SIZE);
    PARSER.declareInt(NodeInfoOscpu::setCacheSizeInBytes, CACHE_SIZE_IN_BYTES);
    PARSER.declareInt(NodeInfoOscpu::setCoresPerSocket, CORES_PER_SOCKET);
    PARSER.declareInt(NodeInfoOscpu::setMhz, MHZ);
    PARSER.declareString(NodeInfoOscpu::setModel, MODEL);
    PARSER.declareInt(NodeInfoOscpu::setTotalCores, TOTAL_CORES);
    PARSER.declareInt(NodeInfoOscpu::setTotalSockets, TOTAL_SOCKETS);
    PARSER.declareString(NodeInfoOscpu::setVendor, VENDOR);
  }

}
