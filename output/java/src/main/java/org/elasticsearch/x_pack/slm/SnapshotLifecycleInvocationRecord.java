
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
import org.elasticsearch.internal.*;

public class SnapshotLifecycleInvocationRecord  implements XContentable<SnapshotLifecycleInvocationRecord> {
  
  static final ParseField SNAPSHOT_NAME = new ParseField("snapshot_name");
  private String _snapshotName;
  public String getSnapshotName() { return this._snapshotName; }
  public SnapshotLifecycleInvocationRecord setSnapshotName(String val) { this._snapshotName = val; return this; }


  static final ParseField TIME = new ParseField("time");
  private Date _time;
  public Date getTime() { return this._time; }
  public SnapshotLifecycleInvocationRecord setTime(Date val) { this._time = val; return this; }


  
  @Override
  public XContentBuilder toXContent(XContentBuilder builder, ToXContent.Params params) throws IOException {
    builder.startObject();
    if (_snapshotName != null) {
      builder.field(SNAPSHOT_NAME.getPreferredName(), _snapshotName);
    }
    if (_time != null) {
      builder.field(TIME.getPreferredName(),
        DateTimeFormatter.ISO_DATE.format(_time.toInstant()));
    }
    builder.endObject();
    return builder;
  }

  @Override
  public SnapshotLifecycleInvocationRecord fromXContent(XContentParser parser) throws IOException, XContentParseException {
    return SnapshotLifecycleInvocationRecord.PARSER.apply(parser, null);
  }

  public static final ObjectParser<SnapshotLifecycleInvocationRecord, Void> PARSER =
    new ObjectParser<>(SnapshotLifecycleInvocationRecord.class.getName(), false, SnapshotLifecycleInvocationRecord::new);

  static {
    PARSER.declareString(SnapshotLifecycleInvocationRecord::setSnapshotName, SNAPSHOT_NAME);
    PARSER.declareObject(SnapshotLifecycleInvocationRecord::setTime, (p, t) -> Date.from(Instant.from(DateTimeFormatter.ISO_DATE.parse(p.text()))), TIME);
  }

}
