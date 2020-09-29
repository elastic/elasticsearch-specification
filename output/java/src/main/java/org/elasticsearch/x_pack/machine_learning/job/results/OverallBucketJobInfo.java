
package org.elasticsearch.x_pack.machine_learning.job.results;

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

public class OverallBucketJobInfo  implements XContentable<OverallBucketJobInfo> {
  
  static final ParseField JOB_ID = new ParseField("job_id");
  private String _jobId;
  public String getJobId() { return this._jobId; }
  public OverallBucketJobInfo setJobId(String val) { this._jobId = val; return this; }

  static final ParseField MAX_ANOMALY_SCORE = new ParseField("max_anomaly_score");
  private double _maxAnomalyScore;
  private boolean _maxAnomalyScore$isSet;
  public double getMaxAnomalyScore() { return this._maxAnomalyScore; }
  public OverallBucketJobInfo setMaxAnomalyScore(double val) {
    this._maxAnomalyScore = val;
    _maxAnomalyScore$isSet = true;
    return this;
  }


  
  @Override
  public void toXContentInternal(XContentBuilder builder, ToXContent.Params params) throws IOException {
    
    if (_jobId != null) {
      builder.field(JOB_ID.getPreferredName(), _jobId);
    }
    if (_maxAnomalyScore$isSet) {
      builder.field(MAX_ANOMALY_SCORE.getPreferredName(), _maxAnomalyScore);
    }
  }

  @Override
  public OverallBucketJobInfo fromXContent(XContentParser parser) throws IOException, XContentParseException {
    return OverallBucketJobInfo.PARSER.apply(parser, null);
  }

  public static final ObjectParser<OverallBucketJobInfo, Void> PARSER =
    new ObjectParser<>(OverallBucketJobInfo.class.getName(), false, OverallBucketJobInfo::new);

  static {
    PARSER.declareString(OverallBucketJobInfo::setJobId, JOB_ID);
    PARSER.declareDouble(OverallBucketJobInfo::setMaxAnomalyScore, MAX_ANOMALY_SCORE);
  }

}
