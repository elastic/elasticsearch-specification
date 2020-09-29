
package org.elasticsearch.x_pack.info.x_pack_usage;

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

public class ExecutionAction  implements XContentable<ExecutionAction> {
  
  static final ParseField TOTAL = new ParseField("total");
  private long _total;
  private boolean _total$isSet;
  public long getTotal() { return this._total; }
  public ExecutionAction setTotal(long val) {
    this._total = val;
    _total$isSet = true;
    return this;
  }

  static final ParseField TOTAL_IN_MS = new ParseField("total_in_ms");
  private long _totalInMs;
  private boolean _totalInMs$isSet;
  public long getTotalInMs() { return this._totalInMs; }
  public ExecutionAction setTotalInMs(long val) {
    this._totalInMs = val;
    _totalInMs$isSet = true;
    return this;
  }


  
  @Override
  public void toXContentInternal(XContentBuilder builder, ToXContent.Params params) throws IOException {
    
    if (_total$isSet) {
      builder.field(TOTAL.getPreferredName(), _total);
    }
    if (_totalInMs$isSet) {
      builder.field(TOTAL_IN_MS.getPreferredName(), _totalInMs);
    }
  }

  @Override
  public ExecutionAction fromXContent(XContentParser parser) throws IOException, XContentParseException {
    return ExecutionAction.PARSER.apply(parser, null);
  }

  public static final ObjectParser<ExecutionAction, Void> PARSER =
    new ObjectParser<>(ExecutionAction.class.getName(), false, ExecutionAction::new);

  static {
    PARSER.declareLong(ExecutionAction::setTotal, TOTAL);
    PARSER.declareLong(ExecutionAction::setTotalInMs, TOTAL_IN_MS);
  }

}
