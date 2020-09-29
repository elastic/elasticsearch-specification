
package org.elasticsearch.indices.monitoring.indices_recovery;

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

public class RecoveryBytes  implements XContentable<RecoveryBytes> {
  
  static final ParseField PERCENT = new ParseField("percent");
  private String _percent;
  public String getPercent() { return this._percent; }
  public RecoveryBytes setPercent(String val) { this._percent = val; return this; }

  static final ParseField RECOVERED = new ParseField("recovered");
  private long _recovered;
  private boolean _recovered$isSet;
  public long getRecovered() { return this._recovered; }
  public RecoveryBytes setRecovered(long val) {
    this._recovered = val;
    _recovered$isSet = true;
    return this;
  }

  static final ParseField REUSED = new ParseField("reused");
  private long _reused;
  private boolean _reused$isSet;
  public long getReused() { return this._reused; }
  public RecoveryBytes setReused(long val) {
    this._reused = val;
    _reused$isSet = true;
    return this;
  }

  static final ParseField TOTAL = new ParseField("total");
  private long _total;
  private boolean _total$isSet;
  public long getTotal() { return this._total; }
  public RecoveryBytes setTotal(long val) {
    this._total = val;
    _total$isSet = true;
    return this;
  }


  
  @Override
  public void toXContentInternal(XContentBuilder builder, ToXContent.Params params) throws IOException {
    
    if (_percent != null) {
      builder.field(PERCENT.getPreferredName(), _percent);
    }
    if (_recovered$isSet) {
      builder.field(RECOVERED.getPreferredName(), _recovered);
    }
    if (_reused$isSet) {
      builder.field(REUSED.getPreferredName(), _reused);
    }
    if (_total$isSet) {
      builder.field(TOTAL.getPreferredName(), _total);
    }
  }

  @Override
  public RecoveryBytes fromXContent(XContentParser parser) throws IOException, XContentParseException {
    return RecoveryBytes.PARSER.apply(parser, null);
  }

  public static final ObjectParser<RecoveryBytes, Void> PARSER =
    new ObjectParser<>(RecoveryBytes.class.getName(), false, RecoveryBytes::new);

  static {
    PARSER.declareString(RecoveryBytes::setPercent, PERCENT);
    PARSER.declareLong(RecoveryBytes::setRecovered, RECOVERED);
    PARSER.declareLong(RecoveryBytes::setReused, REUSED);
    PARSER.declareLong(RecoveryBytes::setTotal, TOTAL);
  }

}
