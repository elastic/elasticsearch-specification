
package org.elasticsearch.x_pack.watcher.execution;

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
import org.elasticsearch.x_pack.watcher.execution.*;

public class SimulatedActions  implements XContentable<SimulatedActions> {
  
  static final ParseField ACTIONS = new ParseField("actions");
  private List<String> _actions;
  public List<String> getActions() { return this._actions; }
  public SimulatedActions setActions(List<String> val) { this._actions = val; return this; }


  static final ParseField ALL = new ParseField("all");
  private SimulatedActions _all;
  public SimulatedActions getAll() { return this._all; }
  public SimulatedActions setAll(SimulatedActions val) { this._all = val; return this; }


  static final ParseField USE_ALL = new ParseField("use_all");
  private Boolean _useAll;
  public Boolean getUseAll() { return this._useAll; }
  public SimulatedActions setUseAll(Boolean val) { this._useAll = val; return this; }


  
  @Override
  public XContentBuilder toXContent(XContentBuilder builder, ToXContent.Params params) throws IOException {
    builder.startObject();
    if (_actions != null) {
      builder.array(ACTIONS.getPreferredName(), _actions);
    }
    if (_all != null) {
      builder.field(ALL.getPreferredName());
      _all.toXContent(builder, params);
    }
    if (_useAll != null) {
      builder.field(USE_ALL.getPreferredName(), _useAll);
    }
    builder.endObject();
    return builder;
  }

  @Override
  public SimulatedActions fromXContent(XContentParser parser) throws IOException, XContentParseException {
    return SimulatedActions.PARSER.apply(parser, null);
  }

  public static final ObjectParser<SimulatedActions, Void> PARSER =
    new ObjectParser<>(SimulatedActions.class.getName(), false, SimulatedActions::new);

  static {
    PARSER.declareStringArray(SimulatedActions::setActions, ACTIONS);
    PARSER.declareObject(SimulatedActions::setAll, (p, t) -> SimulatedActions.PARSER.apply(p, t), ALL);
    PARSER.declareBoolean(SimulatedActions::setUseAll, USE_ALL);
  }

}
