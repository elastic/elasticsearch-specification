
package org.elasticsearch.x_pack.ilm.move_to_step;

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


public class StepKey  implements XContentable<StepKey> {
  
  static final ParseField ACTION = new ParseField("action");
  private String _action;
  public String getAction() { return this._action; }
  public StepKey setAction(String val) { this._action = val; return this; }


  static final ParseField NAME = new ParseField("name");
  private String _name;
  public String getName() { return this._name; }
  public StepKey setName(String val) { this._name = val; return this; }


  static final ParseField PHASE = new ParseField("phase");
  private String _phase;
  public String getPhase() { return this._phase; }
  public StepKey setPhase(String val) { this._phase = val; return this; }


  
  @Override
  public XContentBuilder toXContent(XContentBuilder builder, ToXContent.Params params) throws IOException {
    builder.startObject();
    if (_action != null) {
      builder.field(ACTION.getPreferredName(), _action);
    }
    if (_name != null) {
      builder.field(NAME.getPreferredName(), _name);
    }
    if (_phase != null) {
      builder.field(PHASE.getPreferredName(), _phase);
    }
    builder.endObject();
    return builder;
  }

  @Override
  public StepKey fromXContent(XContentParser parser) throws IOException, XContentParseException {
    return StepKey.PARSER.apply(parser, null);
  }

  public static final ObjectParser<StepKey, Void> PARSER =
    new ObjectParser<>(StepKey.class.getName(), false, StepKey::new);

  static {
    PARSER.declareString(StepKey::setAction, ACTION);
    PARSER.declareString(StepKey::setName, NAME);
    PARSER.declareString(StepKey::setPhase, PHASE);
  }

}
