
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

public class Phases  implements XContentable<Phases> {
  
  static final ParseField COLD = new ParseField("cold");
  private Phase _cold;
  public Phase getCold() { return this._cold; }
  public Phases setCold(Phase val) { this._cold = val; return this; }


  static final ParseField DELETE = new ParseField("delete");
  private Phase _delete;
  public Phase getDelete() { return this._delete; }
  public Phases setDelete(Phase val) { this._delete = val; return this; }


  static final ParseField HOT = new ParseField("hot");
  private Phase _hot;
  public Phase getHot() { return this._hot; }
  public Phases setHot(Phase val) { this._hot = val; return this; }


  static final ParseField WARM = new ParseField("warm");
  private Phase _warm;
  public Phase getWarm() { return this._warm; }
  public Phases setWarm(Phase val) { this._warm = val; return this; }


  
  @Override
  public XContentBuilder toXContent(XContentBuilder builder, ToXContent.Params params) throws IOException {
    builder.startObject();
    if (_cold != null) {
      builder.field(COLD.getPreferredName());
      _cold.toXContent(builder, params);
    }
    if (_delete != null) {
      builder.field(DELETE.getPreferredName());
      _delete.toXContent(builder, params);
    }
    if (_hot != null) {
      builder.field(HOT.getPreferredName());
      _hot.toXContent(builder, params);
    }
    if (_warm != null) {
      builder.field(WARM.getPreferredName());
      _warm.toXContent(builder, params);
    }
    builder.endObject();
    return builder;
  }

  @Override
  public Phases fromXContent(XContentParser parser) throws IOException, XContentParseException {
    return Phases.PARSER.apply(parser, null);
  }

  public static final ObjectParser<Phases, Void> PARSER =
    new ObjectParser<>(Phases.class.getName(), false, Phases::new);

  static {
    PARSER.declareObject(Phases::setCold, (p, t) -> Phase.PARSER.apply(p, t), COLD);
    PARSER.declareObject(Phases::setDelete, (p, t) -> Phase.PARSER.apply(p, t), DELETE);
    PARSER.declareObject(Phases::setHot, (p, t) -> Phase.PARSER.apply(p, t), HOT);
    PARSER.declareObject(Phases::setWarm, (p, t) -> Phase.PARSER.apply(p, t), WARM);
  }

}
