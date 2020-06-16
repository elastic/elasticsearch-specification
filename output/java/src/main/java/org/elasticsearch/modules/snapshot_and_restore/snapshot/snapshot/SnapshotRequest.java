
package org.elasticsearch.modules.snapshot_and_restore.snapshot.snapshot;

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
import org.elasticsearch.common_options.time_unit.*;

public class SnapshotRequest  implements XContentable<SnapshotRequest> {
  
  static final ParseField IGNORE_UNAVAILABLE = new ParseField("ignore_unavailable");
  private Boolean _ignoreUnavailable;
  public Boolean getIgnoreUnavailable() { return this._ignoreUnavailable; }
  public SnapshotRequest setIgnoreUnavailable(Boolean val) { this._ignoreUnavailable = val; return this; }


  static final ParseField INCLUDE_GLOBAL_STATE = new ParseField("include_global_state");
  private Boolean _includeGlobalState;
  public Boolean getIncludeGlobalState() { return this._includeGlobalState; }
  public SnapshotRequest setIncludeGlobalState(Boolean val) { this._includeGlobalState = val; return this; }


  static final ParseField INDICES = new ParseField("indices");
  private Indices _indices;
  public Indices getIndices() { return this._indices; }
  public SnapshotRequest setIndices(Indices val) { this._indices = val; return this; }


  static final ParseField PARTIAL = new ParseField("partial");
  private Boolean _partial;
  public Boolean getPartial() { return this._partial; }
  public SnapshotRequest setPartial(Boolean val) { this._partial = val; return this; }


  static final ParseField METADATA = new ParseField("metadata");
  private NamedContainer<String, Object> _metadata;
  public NamedContainer<String, Object> getMetadata() { return this._metadata; }
  public SnapshotRequest setMetadata(NamedContainer<String, Object> val) { this._metadata = val; return this; }


  static final ParseField MASTER_TIMEOUT = new ParseField("master_timeout");
  private Time _masterTimeout;
  public Time getMasterTimeout() { return this._masterTimeout; }
  public SnapshotRequest setMasterTimeout(Time val) { this._masterTimeout = val; return this; }


  static final ParseField WAIT_FOR_COMPLETION = new ParseField("wait_for_completion");
  private Boolean _waitForCompletion;
  public Boolean getWaitForCompletion() { return this._waitForCompletion; }
  public SnapshotRequest setWaitForCompletion(Boolean val) { this._waitForCompletion = val; return this; }


  
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
    if (_partial != null) {
      builder.field(PARTIAL.getPreferredName(), _partial);
    }
    if (_metadata != null) {
      builder.field(METADATA.getPreferredName());
      _metadata.toXContent(builder, params);
    }
    if (_masterTimeout != null) {
      builder.field(MASTER_TIMEOUT.getPreferredName());
      _masterTimeout.toXContent(builder, params);
    }
    if (_waitForCompletion != null) {
      builder.field(WAIT_FOR_COMPLETION.getPreferredName(), _waitForCompletion);
    }
    builder.endObject();
    return builder;
  }

  @Override
  public SnapshotRequest fromXContent(XContentParser parser) throws IOException, XContentParseException {
    return SnapshotRequest.PARSER.apply(parser, null);
  }

  public static final ObjectParser<SnapshotRequest, Void> PARSER =
    new ObjectParser<>(SnapshotRequest.class.getName(), false, SnapshotRequest::new);

  static {
    PARSER.declareBoolean(SnapshotRequest::setIgnoreUnavailable, IGNORE_UNAVAILABLE);
    PARSER.declareBoolean(SnapshotRequest::setIncludeGlobalState, INCLUDE_GLOBAL_STATE);
    PARSER.declareObject(SnapshotRequest::setIndices, (p, t) -> Indices.createFrom(p), INDICES);
    PARSER.declareBoolean(SnapshotRequest::setPartial, PARTIAL);
    PARSER.declareObject(SnapshotRequest::setMetadata, (p, t) -> new NamedContainer<>(n -> () -> n,XContentParser::binaryValue), METADATA);
    PARSER.declareObject(SnapshotRequest::setMasterTimeout, (p, t) -> Time.PARSER.apply(p, t), MASTER_TIMEOUT);
    PARSER.declareBoolean(SnapshotRequest::setWaitForCompletion, WAIT_FOR_COMPLETION);
  }

}
