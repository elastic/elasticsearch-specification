
package org.elasticsearch.cluster.nodes_stats;

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

public class TransportStats  implements XContentable<TransportStats> {
  
  static final ParseField RX_COUNT = new ParseField("rx_count");
  private Long _rxCount;
  public Long getRxCount() { return this._rxCount; }
  public TransportStats setRxCount(Long val) { this._rxCount = val; return this; }


  static final ParseField RX_SIZE = new ParseField("rx_size");
  private String _rxSize;
  public String getRxSize() { return this._rxSize; }
  public TransportStats setRxSize(String val) { this._rxSize = val; return this; }


  static final ParseField RX_SIZE_IN_BYTES = new ParseField("rx_size_in_bytes");
  private Long _rxSizeInBytes;
  public Long getRxSizeInBytes() { return this._rxSizeInBytes; }
  public TransportStats setRxSizeInBytes(Long val) { this._rxSizeInBytes = val; return this; }


  static final ParseField SERVER_OPEN = new ParseField("server_open");
  private Integer _serverOpen;
  public Integer getServerOpen() { return this._serverOpen; }
  public TransportStats setServerOpen(Integer val) { this._serverOpen = val; return this; }


  static final ParseField TX_COUNT = new ParseField("tx_count");
  private Long _txCount;
  public Long getTxCount() { return this._txCount; }
  public TransportStats setTxCount(Long val) { this._txCount = val; return this; }


  static final ParseField TX_SIZE = new ParseField("tx_size");
  private String _txSize;
  public String getTxSize() { return this._txSize; }
  public TransportStats setTxSize(String val) { this._txSize = val; return this; }


  static final ParseField TX_SIZE_IN_BYTES = new ParseField("tx_size_in_bytes");
  private Long _txSizeInBytes;
  public Long getTxSizeInBytes() { return this._txSizeInBytes; }
  public TransportStats setTxSizeInBytes(Long val) { this._txSizeInBytes = val; return this; }


  
  @Override
  public XContentBuilder toXContent(XContentBuilder builder, ToXContent.Params params) throws IOException {
    builder.startObject();
    if (_rxCount != null) {
      builder.field(RX_COUNT.getPreferredName(), _rxCount);
    }
    if (_rxSize != null) {
      builder.field(RX_SIZE.getPreferredName(), _rxSize);
    }
    if (_rxSizeInBytes != null) {
      builder.field(RX_SIZE_IN_BYTES.getPreferredName(), _rxSizeInBytes);
    }
    if (_serverOpen != null) {
      builder.field(SERVER_OPEN.getPreferredName(), _serverOpen);
    }
    if (_txCount != null) {
      builder.field(TX_COUNT.getPreferredName(), _txCount);
    }
    if (_txSize != null) {
      builder.field(TX_SIZE.getPreferredName(), _txSize);
    }
    if (_txSizeInBytes != null) {
      builder.field(TX_SIZE_IN_BYTES.getPreferredName(), _txSizeInBytes);
    }
    builder.endObject();
    return builder;
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
