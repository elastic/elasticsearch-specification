
package org.elasticsearch.x_pack.ilm;

import java.io.IOException;
import java.util.Date;
import java.util.List;
import java.util.HashMap;
import java.time.Instant;
import java.time.format.DateTimeFormatter;
import org.elasticsearch.*;
import org.elasticsearch.common.ParseField;
import org.elasticsearch.common.xcontent.*;
import org.elasticsearch.x_pack.ilm.actions.*;
import org.elasticsearch.common_options.time_unit.*;

public class Phase  implements XContentable<Phase> {
  
  static final ParseField ACTIONS = new ParseField("actions");
  private NamedContainer<String, LifecycleAction> _actions;
  public NamedContainer<String, LifecycleAction> getActions() { return this._actions; }
  public Phase setActions(NamedContainer<String, LifecycleAction> val) { this._actions = val; return this; }

  static final ParseField MIN_AGE = new ParseField("min_age");
  private String _minAge;
  public String getMinAge() { return this._minAge; }
  public Phase setMinAge(String val) { this._minAge = val; return this; }


  
  @Override
  public void toXContentInternal(XContentBuilder builder, ToXContent.Params params) throws IOException {
    
    if (_actions != null) {
      builder.field(ACTIONS.getPreferredName());
      _actions.toXContent(builder, params);
    }
    if (_minAge != null) {
      builder.field(MIN_AGE.getPreferredName(), _minAge);
    }
  }

  @Override
  public Phase fromXContent(XContentParser parser) throws IOException, XContentParseException {
    return Phase.PARSER.apply(parser, null);
  }

  public static final ObjectParser<Phase, Void> PARSER =
    new ObjectParser<>(Phase.class.getName(), false, Phase::new);

  static {
    PARSER.declareObject(Phase::setActions, (p, t) -> new NamedContainer<>(n -> () -> n,pp -> LifecycleAction.PARSER.apply(pp, null)), ACTIONS);
    PARSER.declareString(Phase::setMinAge, MIN_AGE);
  }

}
