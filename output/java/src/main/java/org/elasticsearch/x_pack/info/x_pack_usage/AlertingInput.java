
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

public class AlertingInput  implements XContentable<AlertingInput> {
  
  static final ParseField INPUT = new ParseField("input");
  private NamedContainer<String, AlertingCount> _input;
  public NamedContainer<String, AlertingCount> getInput() { return this._input; }
  public AlertingInput setInput(NamedContainer<String, AlertingCount> val) { this._input = val; return this; }


  static final ParseField TRIGGER = new ParseField("trigger");
  private NamedContainer<String, AlertingCount> _trigger;
  public NamedContainer<String, AlertingCount> getTrigger() { return this._trigger; }
  public AlertingInput setTrigger(NamedContainer<String, AlertingCount> val) { this._trigger = val; return this; }


  
  @Override
  public XContentBuilder toXContent(XContentBuilder builder, ToXContent.Params params) throws IOException {
    builder.startObject();
    if (_input != null) {
      builder.field(INPUT.getPreferredName());
      _input.toXContent(builder, params);
    }
    if (_trigger != null) {
      builder.field(TRIGGER.getPreferredName());
      _trigger.toXContent(builder, params);
    }
    builder.endObject();
    return builder;
  }

  @Override
  public AlertingInput fromXContent(XContentParser parser) throws IOException, XContentParseException {
    return AlertingInput.PARSER.apply(parser, null);
  }

  public static final ObjectParser<AlertingInput, Void> PARSER =
    new ObjectParser<>(AlertingInput.class.getName(), false, AlertingInput::new);

  static {
    PARSER.declareObject(AlertingInput::setInput, (p, t) -> new NamedContainer<>(n -> () -> n,pp -> AlertingCount.PARSER.apply(pp, null)), INPUT);
    PARSER.declareObject(AlertingInput::setTrigger, (p, t) -> new NamedContainer<>(n -> () -> n,pp -> AlertingCount.PARSER.apply(pp, null)), TRIGGER);
  }

}
