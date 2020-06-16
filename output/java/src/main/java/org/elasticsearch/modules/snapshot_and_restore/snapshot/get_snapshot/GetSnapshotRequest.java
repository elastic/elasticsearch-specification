
package org.elasticsearch.modules.snapshot_and_restore.snapshot.get_snapshot;

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
import org.elasticsearch.common_options.time_unit.*;

public class GetSnapshotRequest  implements XContentable<GetSnapshotRequest> {
  
  static final ParseField IGNORE_UNAVAILABLE = new ParseField("ignore_unavailable");
  private Boolean _ignoreUnavailable;
  public Boolean getIgnoreUnavailable() { return this._ignoreUnavailable; }
  public GetSnapshotRequest setIgnoreUnavailable(Boolean val) { this._ignoreUnavailable = val; return this; }


  static final ParseField MASTER_TIMEOUT = new ParseField("master_timeout");
  private Time _masterTimeout;
  public Time getMasterTimeout() { return this._masterTimeout; }
  public GetSnapshotRequest setMasterTimeout(Time val) { this._masterTimeout = val; return this; }


  static final ParseField VERBOSE = new ParseField("verbose");
  private Boolean _verbose;
  public Boolean getVerbose() { return this._verbose; }
  public GetSnapshotRequest setVerbose(Boolean val) { this._verbose = val; return this; }


  
  @Override
  public XContentBuilder toXContent(XContentBuilder builder, ToXContent.Params params) throws IOException {
    builder.startObject();
    if (_ignoreUnavailable != null) {
      builder.field(IGNORE_UNAVAILABLE.getPreferredName(), _ignoreUnavailable);
    }
    if (_masterTimeout != null) {
      builder.field(MASTER_TIMEOUT.getPreferredName());
      _masterTimeout.toXContent(builder, params);
    }
    if (_verbose != null) {
      builder.field(VERBOSE.getPreferredName(), _verbose);
    }
    builder.endObject();
    return builder;
  }

  @Override
  public GetSnapshotRequest fromXContent(XContentParser parser) throws IOException, XContentParseException {
    return GetSnapshotRequest.PARSER.apply(parser, null);
  }

  public static final ObjectParser<GetSnapshotRequest, Void> PARSER =
    new ObjectParser<>(GetSnapshotRequest.class.getName(), false, GetSnapshotRequest::new);

  static {
    PARSER.declareBoolean(GetSnapshotRequest::setIgnoreUnavailable, IGNORE_UNAVAILABLE);
    PARSER.declareObject(GetSnapshotRequest::setMasterTimeout, (p, t) -> Time.PARSER.apply(p, t), MASTER_TIMEOUT);
    PARSER.declareBoolean(GetSnapshotRequest::setVerbose, VERBOSE);
  }

}
