
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
import org.elasticsearch.x_pack.info.x_pack_usage.*;

public class AlertingUsage  implements XContentable<AlertingUsage> {
  
  static final ParseField COUNT = new ParseField("count");
  private AlertingCount _count;
  public AlertingCount getCount() { return this._count; }
  public AlertingUsage setCount(AlertingCount val) { this._count = val; return this; }


  static final ParseField EXECUTION = new ParseField("execution");
  private AlertingExecution _execution;
  public AlertingExecution getExecution() { return this._execution; }
  public AlertingUsage setExecution(AlertingExecution val) { this._execution = val; return this; }


  static final ParseField WATCH = new ParseField("watch");
  private AlertingInput _watch;
  public AlertingInput getWatch() { return this._watch; }
  public AlertingUsage setWatch(AlertingInput val) { this._watch = val; return this; }


  
  @Override
  public XContentBuilder toXContent(XContentBuilder builder, ToXContent.Params params) throws IOException {
    builder.startObject();
    if (_count != null) {
      builder.field(COUNT.getPreferredName());
      _count.toXContent(builder, params);
    }
    if (_execution != null) {
      builder.field(EXECUTION.getPreferredName());
      _execution.toXContent(builder, params);
    }
    if (_watch != null) {
      builder.field(WATCH.getPreferredName());
      _watch.toXContent(builder, params);
    }
    builder.endObject();
    return builder;
  }

  @Override
  public AlertingUsage fromXContent(XContentParser parser) throws IOException, XContentParseException {
    return AlertingUsage.PARSER.apply(parser, null);
  }

  public static final ObjectParser<AlertingUsage, Void> PARSER =
    new ObjectParser<>(AlertingUsage.class.getName(), false, AlertingUsage::new);

  static {
    PARSER.declareObject(AlertingUsage::setCount, (p, t) -> AlertingCount.PARSER.apply(p, t), COUNT);
    PARSER.declareObject(AlertingUsage::setExecution, (p, t) -> AlertingExecution.PARSER.apply(p, t), EXECUTION);
    PARSER.declareObject(AlertingUsage::setWatch, (p, t) -> AlertingInput.PARSER.apply(p, t), WATCH);
  }

}
