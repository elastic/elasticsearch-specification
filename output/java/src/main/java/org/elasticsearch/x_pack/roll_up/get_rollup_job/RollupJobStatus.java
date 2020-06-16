
package org.elasticsearch.x_pack.roll_up.get_rollup_job;

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
import org.elasticsearch.x_pack.roll_up.get_rollup_job.*;

public class RollupJobStatus  implements XContentable<RollupJobStatus> {
  
  static final ParseField CURRENT_POSITION = new ParseField("current_position");
  private NamedContainer<String, Object> _currentPosition;
  public NamedContainer<String, Object> getCurrentPosition() { return this._currentPosition; }
  public RollupJobStatus setCurrentPosition(NamedContainer<String, Object> val) { this._currentPosition = val; return this; }


  static final ParseField JOB_STATE = new ParseField("job_state");
  private IndexingJobState _jobState;
  public IndexingJobState getJobState() { return this._jobState; }
  public RollupJobStatus setJobState(IndexingJobState val) { this._jobState = val; return this; }


  static final ParseField UPGRADED_DOC_ID = new ParseField("upgraded_doc_id");
  private Boolean _upgradedDocId;
  public Boolean getUpgradedDocId() { return this._upgradedDocId; }
  public RollupJobStatus setUpgradedDocId(Boolean val) { this._upgradedDocId = val; return this; }


  
  @Override
  public XContentBuilder toXContent(XContentBuilder builder, ToXContent.Params params) throws IOException {
    builder.startObject();
    if (_currentPosition != null) {
      builder.field(CURRENT_POSITION.getPreferredName());
      _currentPosition.toXContent(builder, params);
    }
    if (_jobState != null) {
      builder.field(JOB_STATE.getPreferredName());
      _jobState.toXContent(builder, params);
    }
    if (_upgradedDocId != null) {
      builder.field(UPGRADED_DOC_ID.getPreferredName(), _upgradedDocId);
    }
    builder.endObject();
    return builder;
  }

  @Override
  public RollupJobStatus fromXContent(XContentParser parser) throws IOException, XContentParseException {
    return RollupJobStatus.PARSER.apply(parser, null);
  }

  public static final ObjectParser<RollupJobStatus, Void> PARSER =
    new ObjectParser<>(RollupJobStatus.class.getName(), false, RollupJobStatus::new);

  static {
    PARSER.declareObject(RollupJobStatus::setCurrentPosition, (p, t) -> new NamedContainer<>(n -> () -> n,XContentParser::binaryValue), CURRENT_POSITION);
    PARSER.declareField(RollupJobStatus::setJobState, (p, t) -> IndexingJobState.PARSER.apply(p), JOB_STATE, ObjectParser.ValueType.STRING_OR_NULL);
    PARSER.declareBoolean(RollupJobStatus::setUpgradedDocId, UPGRADED_DOC_ID);
  }

}
