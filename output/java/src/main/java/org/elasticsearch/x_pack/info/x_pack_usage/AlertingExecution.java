
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

public class AlertingExecution  implements XContentable<AlertingExecution> {
  
  static final ParseField ACTIONS = new ParseField("actions");
  private NamedContainer<String, ExecutionAction> _actions;
  public NamedContainer<String, ExecutionAction> getActions() { return this._actions; }
  public AlertingExecution setActions(NamedContainer<String, ExecutionAction> val) { this._actions = val; return this; }


  
  @Override
  public XContentBuilder toXContent(XContentBuilder builder, ToXContent.Params params) throws IOException {
    builder.startObject();
    if (_actions != null) {
      builder.field(ACTIONS.getPreferredName());
      _actions.toXContent(builder, params);
    }
    builder.endObject();
    return builder;
  }

  @Override
  public AlertingExecution fromXContent(XContentParser parser) throws IOException, XContentParseException {
    return AlertingExecution.PARSER.apply(parser, null);
  }

  public static final ObjectParser<AlertingExecution, Void> PARSER =
    new ObjectParser<>(AlertingExecution.class.getName(), false, AlertingExecution::new);

  static {
    PARSER.declareObject(AlertingExecution::setActions, (p, t) -> new NamedContainer<>(n -> () -> n,pp -> ExecutionAction.PARSER.apply(pp, null)), ACTIONS);
  }

}
