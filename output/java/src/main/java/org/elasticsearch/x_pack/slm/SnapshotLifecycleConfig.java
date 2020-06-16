
package org.elasticsearch.x_pack.slm;

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
import org.elasticsearch.common_abstractions.infer.indices.*;

public class SnapshotLifecycleConfig  implements XContentable<SnapshotLifecycleConfig> {
  
  static final ParseField IGNORE_UNAVAILABLE = new ParseField("ignore_unavailable");
  private Boolean _ignoreUnavailable;
  public Boolean getIgnoreUnavailable() { return this._ignoreUnavailable; }
  public SnapshotLifecycleConfig setIgnoreUnavailable(Boolean val) { this._ignoreUnavailable = val; return this; }


  static final ParseField INCLUDE_GLOBAL_STATE = new ParseField("include_global_state");
  private Boolean _includeGlobalState;
  public Boolean getIncludeGlobalState() { return this._includeGlobalState; }
  public SnapshotLifecycleConfig setIncludeGlobalState(Boolean val) { this._includeGlobalState = val; return this; }


  static final ParseField INDICES = new ParseField("indices");
  private Indices _indices;
  public Indices getIndices() { return this._indices; }
  public SnapshotLifecycleConfig setIndices(Indices val) { this._indices = val; return this; }


  
  @Override
  public XContentBuilder toXContent(XContentBuilder builder, ToXContent.Params params) throws IOException {
    builder.startObject();
    if (_ignoreUnavailable != null) {
      builder.field(IGNORE_UNAVAILABLE.getPreferredName(), _ignoreUnavailable);
    }
    if (_includeGlobalState != null) {
      builder.field(INCLUDE_GLOBAL_STATE.getPreferredName(), _includeGlobalState);
    }
    if (_indices != null) {
      builder.field(INDICES.getPreferredName());
      _indices.toXContent(builder, params);
    }
    builder.endObject();
    return builder;
  }

  @Override
  public SnapshotLifecycleConfig fromXContent(XContentParser parser) throws IOException, XContentParseException {
    return SnapshotLifecycleConfig.PARSER.apply(parser, null);
  }

  public static final ObjectParser<SnapshotLifecycleConfig, Void> PARSER =
    new ObjectParser<>(SnapshotLifecycleConfig.class.getName(), false, SnapshotLifecycleConfig::new);

  static {
    PARSER.declareBoolean(SnapshotLifecycleConfig::setIgnoreUnavailable, IGNORE_UNAVAILABLE);
    PARSER.declareBoolean(SnapshotLifecycleConfig::setIncludeGlobalState, INCLUDE_GLOBAL_STATE);
    PARSER.declareObject(SnapshotLifecycleConfig::setIndices, (p, t) -> Indices.createFrom(p), INDICES);
  }

}
