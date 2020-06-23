
package org.elasticsearch.x_pack.slm.execute_lifecycle;

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


public class ExecuteSnapshotLifecycleResponse  implements XContentable<ExecuteSnapshotLifecycleResponse> {
  
  static final ParseField SNAPSHOT_NAME = new ParseField("snapshot_name");
  private String _snapshotName;
  public String getSnapshotName() { return this._snapshotName; }
  public ExecuteSnapshotLifecycleResponse setSnapshotName(String val) { this._snapshotName = val; return this; }


  
  @Override
  public XContentBuilder toXContent(XContentBuilder builder, ToXContent.Params params) throws IOException {
    builder.startObject();
    if (_snapshotName != null) {
      builder.field(SNAPSHOT_NAME.getPreferredName(), _snapshotName);
    }
    builder.endObject();
    return builder;
  }

  @Override
  public ExecuteSnapshotLifecycleResponse fromXContent(XContentParser parser) throws IOException, XContentParseException {
    return ExecuteSnapshotLifecycleResponse.PARSER.apply(parser, null);
  }

  public static final ObjectParser<ExecuteSnapshotLifecycleResponse, Void> PARSER =
    new ObjectParser<>(ExecuteSnapshotLifecycleResponse.class.getName(), false, ExecuteSnapshotLifecycleResponse::new);

  static {
    PARSER.declareString(ExecuteSnapshotLifecycleResponse::setSnapshotName, SNAPSHOT_NAME);
  }

}
