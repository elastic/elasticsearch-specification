
package org.elasticsearch.modules.snapshot_and_restore.snapshot.snapshot_status;

import java.io.IOException;
import java.util.Date;
import java.util.List;
import java.util.HashMap;
import java.time.Instant;
import java.time.format.DateTimeFormatter;
import org.elasticsearch.*;
import org.elasticsearch.common.ParseField;
import org.elasticsearch.common.xcontent.*;
import org.elasticsearch.common_options.time_unit.*;
import org.elasticsearch.common_abstractions.request.*;

public class SnapshotStatusRequest extends RequestBase<SnapshotStatusRequest> implements XContentable<SnapshotStatusRequest> {
  
  static final ParseField IGNORE_UNAVAILABLE = new ParseField("ignore_unavailable");
  private Boolean _ignoreUnavailable;
  public Boolean getIgnoreUnavailable() { return this._ignoreUnavailable; }
  public SnapshotStatusRequest setIgnoreUnavailable(Boolean val) { this._ignoreUnavailable = val; return this; }

  static final ParseField MASTER_TIMEOUT = new ParseField("master_timeout");
  private String _masterTimeout;
  public String getMasterTimeout() { return this._masterTimeout; }
  public SnapshotStatusRequest setMasterTimeout(String val) { this._masterTimeout = val; return this; }


  
  @Override
  public void toXContentInternal(XContentBuilder builder, ToXContent.Params params) throws IOException {
    super.toXContentInternal(builder, params);
    if (_ignoreUnavailable != null) {
      builder.field(IGNORE_UNAVAILABLE.getPreferredName(), _ignoreUnavailable);
    }
    if (_masterTimeout != null) {
      builder.field(MASTER_TIMEOUT.getPreferredName(), _masterTimeout);
    }
  }

  @Override
  public SnapshotStatusRequest fromXContent(XContentParser parser) throws IOException, XContentParseException {
    return SnapshotStatusRequest.PARSER.apply(parser, null);
  }

  public static final ObjectParser<SnapshotStatusRequest, Void> PARSER =
    new ObjectParser<>(SnapshotStatusRequest.class.getName(), false, SnapshotStatusRequest::new);

  static {
    PARSER.declareBoolean(SnapshotStatusRequest::setIgnoreUnavailable, IGNORE_UNAVAILABLE);
    PARSER.declareString(SnapshotStatusRequest::setMasterTimeout, MASTER_TIMEOUT);
  }

}
