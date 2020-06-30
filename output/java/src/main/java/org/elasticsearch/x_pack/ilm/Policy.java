
package org.elasticsearch.x_pack.ilm;

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
import org.elasticsearch.x_pack.ilm.*;

public class Policy  implements XContentable<Policy> {
  
  static final ParseField PHASES = new ParseField("phases");
  private Phases _phases;
  public Phases getPhases() { return this._phases; }
  public Policy setPhases(Phases val) { this._phases = val; return this; }


  
  @Override
  public XContentBuilder toXContent(XContentBuilder builder, ToXContent.Params params) throws IOException {
    builder.startObject();
    if (_phases != null) {
      builder.field(PHASES.getPreferredName());
      _phases.toXContent(builder, params);
    }
    builder.endObject();
    return builder;
  }

  @Override
  public Policy fromXContent(XContentParser parser) throws IOException, XContentParseException {
    return Policy.PARSER.apply(parser, null);
  }

  public static final ObjectParser<Policy, Void> PARSER =
    new ObjectParser<>(Policy.class.getName(), false, Policy::new);

  static {
    PARSER.declareObject(Policy::setPhases, (p, t) -> Phases.PARSER.apply(p, t), PHASES);
  }

}
