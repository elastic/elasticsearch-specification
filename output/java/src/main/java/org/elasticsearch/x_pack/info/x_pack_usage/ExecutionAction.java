
package org.elasticsearch.x_pack.info.x_pack_usage;

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

public class ExecutionAction  implements XContentable<ExecutionAction> {
  
  static final ParseField TOTAL = new ParseField("total");
  private Long _total;
  public Long getTotal() { return this._total; }
  public ExecutionAction setTotal(Long val) { this._total = val; return this; }


  static final ParseField TOTAL_IN_MS = new ParseField("total_in_ms");
  private Long _totalInMs;
  public Long getTotalInMs() { return this._totalInMs; }
  public ExecutionAction setTotalInMs(Long val) { this._totalInMs = val; return this; }


  
  @Override
  public XContentBuilder toXContent(XContentBuilder builder, ToXContent.Params params) throws IOException {
    builder.startObject();
    if (_total != null) {
      builder.field(TOTAL.getPreferredName(), _total);
    }
    if (_totalInMs != null) {
      builder.field(TOTAL_IN_MS.getPreferredName(), _totalInMs);
    }
    builder.endObject();
    return builder;
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
