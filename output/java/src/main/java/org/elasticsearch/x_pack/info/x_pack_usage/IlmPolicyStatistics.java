
package org.elasticsearch.x_pack.info.x_pack_usage;

import java.io.IOException;
import java.util.Date;
import java.util.List;
import java.util.HashMap;
import java.time.Instant;
import java.time.format.DateTimeFormatter;
import org.elasticsearch.*;
import org.elasticsearch.common.ParseField;
import org.elasticsearch.common.xcontent.*;
import org.elasticsearch.internal.*;
import org.elasticsearch.x_pack.ilm.*;

public class IlmPolicyStatistics  implements XContentable<IlmPolicyStatistics> {
  
  static final ParseField INDICES_MANAGED = new ParseField("indices_managed");
  private int _indicesManaged;
  private boolean _indicesManaged$isSet;
  public int getIndicesManaged() { return this._indicesManaged; }
  public IlmPolicyStatistics setIndicesManaged(int val) {
    this._indicesManaged = val;
    _indicesManaged$isSet = true;
    return this;
  }

  static final ParseField PHASES = new ParseField("phases");
  private Phases _phases;
  public Phases getPhases() { return this._phases; }
  public IlmPolicyStatistics setPhases(Phases val) { this._phases = val; return this; }


  
  @Override
  public void toXContentInternal(XContentBuilder builder, ToXContent.Params params) throws IOException {
    
    if (_indicesManaged$isSet) {
      builder.field(INDICES_MANAGED.getPreferredName(), _indicesManaged);
    }
    if (_phases != null) {
      builder.field(PHASES.getPreferredName());
      _phases.toXContent(builder, params);
    }
  }

  @Override
  public IlmPolicyStatistics fromXContent(XContentParser parser) throws IOException, XContentParseException {
    return IlmPolicyStatistics.PARSER.apply(parser, null);
  }

  public static final ObjectParser<IlmPolicyStatistics, Void> PARSER =
    new ObjectParser<>(IlmPolicyStatistics.class.getName(), false, IlmPolicyStatistics::new);

  static {
    PARSER.declareInt(IlmPolicyStatistics::setIndicesManaged, INDICES_MANAGED);
    PARSER.declareObject(IlmPolicyStatistics::setPhases, (p, t) -> Phases.PARSER.apply(p, t), PHASES);
  }

}
