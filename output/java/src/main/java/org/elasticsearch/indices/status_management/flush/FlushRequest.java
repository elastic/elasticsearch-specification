
package org.elasticsearch.indices.status_management.flush;

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
import org.elasticsearch.common.*;

public class FlushRequest  implements XContentable<FlushRequest> {
  
  static final ParseField ALLOW_NO_INDICES = new ParseField("allow_no_indices");
  private Boolean _allowNoIndices;
  public Boolean getAllowNoIndices() { return this._allowNoIndices; }
  public FlushRequest setAllowNoIndices(Boolean val) { this._allowNoIndices = val; return this; }


  static final ParseField EXPAND_WILDCARDS = new ParseField("expand_wildcards");
  private ExpandWildcards _expandWildcards;
  public ExpandWildcards getExpandWildcards() { return this._expandWildcards; }
  public FlushRequest setExpandWildcards(ExpandWildcards val) { this._expandWildcards = val; return this; }


  static final ParseField FORCE = new ParseField("force");
  private Boolean _force;
  public Boolean getForce() { return this._force; }
  public FlushRequest setForce(Boolean val) { this._force = val; return this; }


  static final ParseField IGNORE_UNAVAILABLE = new ParseField("ignore_unavailable");
  private Boolean _ignoreUnavailable;
  public Boolean getIgnoreUnavailable() { return this._ignoreUnavailable; }
  public FlushRequest setIgnoreUnavailable(Boolean val) { this._ignoreUnavailable = val; return this; }


  static final ParseField WAIT_IF_ONGOING = new ParseField("wait_if_ongoing");
  private Boolean _waitIfOngoing;
  public Boolean getWaitIfOngoing() { return this._waitIfOngoing; }
  public FlushRequest setWaitIfOngoing(Boolean val) { this._waitIfOngoing = val; return this; }


  
  @Override
  public XContentBuilder toXContent(XContentBuilder builder, ToXContent.Params params) throws IOException {
    builder.startObject();
    if (_allowNoIndices != null) {
      builder.field(ALLOW_NO_INDICES.getPreferredName(), _allowNoIndices);
    }
    if (_expandWildcards != null) {
      builder.field(EXPAND_WILDCARDS.getPreferredName());
      _expandWildcards.toXContent(builder, params);
    }
    if (_force != null) {
      builder.field(FORCE.getPreferredName(), _force);
    }
    if (_ignoreUnavailable != null) {
      builder.field(IGNORE_UNAVAILABLE.getPreferredName(), _ignoreUnavailable);
    }
    if (_waitIfOngoing != null) {
      builder.field(WAIT_IF_ONGOING.getPreferredName(), _waitIfOngoing);
    }
    builder.endObject();
    return builder;
  }

  @Override
  public FlushRequest fromXContent(XContentParser parser) throws IOException, XContentParseException {
    return FlushRequest.PARSER.apply(parser, null);
  }

  public static final ObjectParser<FlushRequest, Void> PARSER =
    new ObjectParser<>(FlushRequest.class.getName(), false, FlushRequest::new);

  static {
    PARSER.declareBoolean(FlushRequest::setAllowNoIndices, ALLOW_NO_INDICES);
    PARSER.declareField(FlushRequest::setExpandWildcards, (p, t) -> ExpandWildcards.PARSER.apply(p), EXPAND_WILDCARDS, ObjectParser.ValueType.STRING_OR_NULL);
    PARSER.declareBoolean(FlushRequest::setForce, FORCE);
    PARSER.declareBoolean(FlushRequest::setIgnoreUnavailable, IGNORE_UNAVAILABLE);
    PARSER.declareBoolean(FlushRequest::setWaitIfOngoing, WAIT_IF_ONGOING);
  }

}
