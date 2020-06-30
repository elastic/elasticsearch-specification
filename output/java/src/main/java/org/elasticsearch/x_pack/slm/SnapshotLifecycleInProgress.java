
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

public class SnapshotLifecycleInProgress  implements XContentable<SnapshotLifecycleInProgress> {
  
  static final ParseField NAME = new ParseField("name");
  private String _name;
  public String getName() { return this._name; }
  public SnapshotLifecycleInProgress setName(String val) { this._name = val; return this; }


  static final ParseField UUID = new ParseField("uuid");
  private String _uuid;
  public String getUuid() { return this._uuid; }
  public SnapshotLifecycleInProgress setUuid(String val) { this._uuid = val; return this; }


  static final ParseField STATE = new ParseField("state");
  private String _state;
  public String getState() { return this._state; }
  public SnapshotLifecycleInProgress setState(String val) { this._state = val; return this; }


  static final ParseField START_TIME_MILLIS = new ParseField("start_time_millis");
  private Date _startTimeMillis;
  public Date getStartTimeMillis() { return this._startTimeMillis; }
  public SnapshotLifecycleInProgress setStartTimeMillis(Date val) { this._startTimeMillis = val; return this; }


  
  @Override
  public XContentBuilder toXContent(XContentBuilder builder, ToXContent.Params params) throws IOException {
    builder.startObject();
    if (_name != null) {
      builder.field(NAME.getPreferredName(), _name);
    }
    if (_uuid != null) {
      builder.field(UUID.getPreferredName(), _uuid);
    }
    if (_state != null) {
      builder.field(STATE.getPreferredName(), _state);
    }
    if (_startTimeMillis != null) {
      builder.field(START_TIME_MILLIS.getPreferredName(),
        DateTimeFormatter.ISO_DATE.format(_startTimeMillis.toInstant()));
    }
    builder.endObject();
    return builder;
  }

  @Override
  public SnapshotLifecycleInProgress fromXContent(XContentParser parser) throws IOException, XContentParseException {
    return SnapshotLifecycleInProgress.PARSER.apply(parser, null);
  }

  public static final ObjectParser<SnapshotLifecycleInProgress, Void> PARSER =
    new ObjectParser<>(SnapshotLifecycleInProgress.class.getName(), false, SnapshotLifecycleInProgress::new);

  static {
    PARSER.declareString(SnapshotLifecycleInProgress::setName, NAME);
    PARSER.declareString(SnapshotLifecycleInProgress::setUuid, UUID);
    PARSER.declareString(SnapshotLifecycleInProgress::setState, STATE);
    PARSER.declareObject(SnapshotLifecycleInProgress::setStartTimeMillis, (p, t) -> Date.from(Instant.from(DateTimeFormatter.ISO_DATE.parse(p.text()))), START_TIME_MILLIS);
  }

}
