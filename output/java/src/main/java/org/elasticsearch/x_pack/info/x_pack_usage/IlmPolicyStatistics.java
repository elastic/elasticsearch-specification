
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
import org.elasticsearch.x_pack.ilm.*;
import org.elasticsearch.internal.*;

public class IlmPolicyStatistics  implements XContentable<IlmPolicyStatistics> {
  
  static final ParseField PHASES = new ParseField("phases");
  private Phases _phases;
  public Phases getPhases() { return this._phases; }
  public IlmPolicyStatistics setPhases(Phases val) { this._phases = val; return this; }


  static final ParseField INDICES_MANAGED = new ParseField("indices_managed");
  private Integer _indicesManaged;
  public Integer getIndicesManaged() { return this._indicesManaged; }
  public IlmPolicyStatistics setIndicesManaged(Integer val) { this._indicesManaged = val; return this; }


  
  @Override
  public XContentBuilder toXContent(XContentBuilder builder, ToXContent.Params params) throws IOException {
    builder.startObject();
    if (_phases != null) {
      builder.field(PHASES.getPreferredName());
      _phases.toXContent(builder, params);
    }
    if (_indicesManaged != null) {
      builder.field(INDICES_MANAGED.getPreferredName(), _indicesManaged);
    }
    builder.endObject();
    return builder;
  }

  @Override
  public IlmPolicyStatistics fromXContent(XContentParser parser) throws IOException, XContentParseException {
    return IlmPolicyStatistics.PARSER.apply(parser, null);
  }

  public static final ObjectParser<IlmPolicyStatistics, Void> PARSER =
    new ObjectParser<>(IlmPolicyStatistics.class.getName(), false, IlmPolicyStatistics::new);

  static {
    PARSER.declareObject(IlmPolicyStatistics::setPhases, (p, t) -> Phases.PARSER.apply(p, t), PHASES);
    PARSER.declareInt(IlmPolicyStatistics::setIndicesManaged, INDICES_MANAGED);
  }

}
