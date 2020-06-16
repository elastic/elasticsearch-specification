
package org.elasticsearch.x_pack.watcher.activate_watch;

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
import org.elasticsearch.x_pack.watcher.acknowledge_watch.*;

public class ActivationStatus  implements XContentable<ActivationStatus> {
  
  static final ParseField ACTIONS = new ParseField("actions");
  private NamedContainer<String, ActionStatus> _actions;
  public NamedContainer<String, ActionStatus> getActions() { return this._actions; }
  public ActivationStatus setActions(NamedContainer<String, ActionStatus> val) { this._actions = val; return this; }


  static final ParseField STATE = new ParseField("state");
  private ActivationState _state;
  public ActivationState getState() { return this._state; }
  public ActivationStatus setState(ActivationState val) { this._state = val; return this; }


  
  @Override
  public XContentBuilder toXContent(XContentBuilder builder, ToXContent.Params params) throws IOException {
    builder.startObject();
    if (_actions != null) {
      builder.field(ACTIONS.getPreferredName());
      _actions.toXContent(builder, params);
    }
    if (_state != null) {
      builder.field(STATE.getPreferredName());
      _state.toXContent(builder, params);
    }
    builder.endObject();
    return builder;
  }

  @Override
  public ActivationStatus fromXContent(XContentParser parser) throws IOException, XContentParseException {
    return ActivationStatus.PARSER.apply(parser, null);
  }

  public static final ObjectParser<ActivationStatus, Void> PARSER =
    new ObjectParser<>(ActivationStatus.class.getName(), false, ActivationStatus::new);

  static {
    PARSER.declareObject(ActivationStatus::setActions, (p, t) -> new NamedContainer<>(n -> () -> n,pp -> ActionStatus.PARSER.apply(pp, null)), ACTIONS);
    PARSER.declareObject(ActivationStatus::setState, (p, t) -> ActivationState.PARSER.apply(p, t), STATE);
  }

}
