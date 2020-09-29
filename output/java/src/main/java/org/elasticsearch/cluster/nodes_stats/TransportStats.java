
package org.elasticsearch.cluster.nodes_stats;

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

public class TransportStats  implements XContentable<TransportStats> {
  
  static final ParseField RX_COUNT = new ParseField("rx_count");
  private long _rxCount;
  private boolean _rxCount$isSet;
  public long getRxCount() { return this._rxCount; }
  public TransportStats setRxCount(long val) {
    this._rxCount = val;
    _rxCount$isSet = true;
    return this;
  }

  static final ParseField RX_SIZE = new ParseField("rx_size");
  private String _rxSize;
  public String getRxSize() { return this._rxSize; }
  public TransportStats setRxSize(String val) { this._rxSize = val; return this; }

  static final ParseField RX_SIZE_IN_BYTES = new ParseField("rx_size_in_bytes");
  private long _rxSizeInBytes;
  private boolean _rxSizeInBytes$isSet;
  public long getRxSizeInBytes() { return this._rxSizeInBytes; }
  public TransportStats setRxSizeInBytes(long val) {
    this._rxSizeInBytes = val;
    _rxSizeInBytes$isSet = true;
    return this;
  }

  static final ParseField SERVER_OPEN = new ParseField("server_open");
  private int _serverOpen;
  private boolean _serverOpen$isSet;
  public int getServerOpen() { return this._serverOpen; }
  public TransportStats setServerOpen(int val) {
    this._serverOpen = val;
    _serverOpen$isSet = true;
    return this;
  }

  static final ParseField TX_COUNT = new ParseField("tx_count");
  private long _txCount;
  private boolean _txCount$isSet;
  public long getTxCount() { return this._txCount; }
  public TransportStats setTxCount(long val) {
    this._txCount = val;
    _txCount$isSet = true;
    return this;
  }

  static final ParseField TX_SIZE = new ParseField("tx_size");
  private String _txSize;
  public String getTxSize() { return this._txSize; }
  public TransportStats setTxSize(String val) { this._txSize = val; return this; }

  static final ParseField TX_SIZE_IN_BYTES = new ParseField("tx_size_in_bytes");
  private long _txSizeInBytes;
  private boolean _txSizeInBytes$isSet;
  public long getTxSizeInBytes() { return this._txSizeInBytes; }
  public TransportStats setTxSizeInBytes(long val) {
    this._txSizeInBytes = val;
    _txSizeInBytes$isSet = true;
    return this;
  }


  
  @Override
  public void toXContentInternal(XContentBuilder builder, ToXContent.Params params) throws IOException {
    
    if (_rxCount$isSet) {
      builder.field(RX_COUNT.getPreferredName(), _rxCount);
    }
    if (_rxSize != null) {
      builder.field(RX_SIZE.getPreferredName(), _rxSize);
    }
    if (_rxSizeInBytes$isSet) {
      builder.field(RX_SIZE_IN_BYTES.getPreferredName(), _rxSizeInBytes);
    }
    if (_serverOpen$isSet) {
      builder.field(SERVER_OPEN.getPreferredName(), _serverOpen);
    }
    if (_txCount$isSet) {
      builder.field(TX_COUNT.getPreferredName(), _txCount);
    }
    if (_txSize != null) {
      builder.field(TX_SIZE.getPreferredName(), _txSize);
    }
    if (_txSizeInBytes$isSet) {
      builder.field(TX_SIZE_IN_BYTES.getPreferredName(), _txSizeInBytes);
    }
  }

  @Override
  public TransportStats fromXContent(XContentParser parser) throws IOException, XContentParseException {
    return TransportStats.PARSER.apply(parser, null);
  }

  public static final ObjectParser<TransportStats, Void> PARSER =
    new ObjectParser<>(TransportStats.class.getName(), false, TransportStats::new);

  static {
    PARSER.declareLong(TransportStats::setRxCount, RX_COUNT);
    PARSER.declareString(TransportStats::setRxSize, RX_SIZE);
    PARSER.declareLong(TransportStats::setRxSizeInBytes, RX_SIZE_IN_BYTES);
    PARSER.declareInt(TransportStats::setServerOpen, SERVER_OPEN);
    PARSER.declareLong(TransportStats::setTxCount, TX_COUNT);
    PARSER.declareString(TransportStats::setTxSize, TX_SIZE);
    PARSER.declareLong(TransportStats::setTxSizeInBytes, TX_SIZE_IN_BYTES);
  }

}
