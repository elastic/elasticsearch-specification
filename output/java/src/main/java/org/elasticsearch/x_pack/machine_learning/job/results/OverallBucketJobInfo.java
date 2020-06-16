
package org.elasticsearch.x_pack.machine_learning.job.results;

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

public class OverallBucketJobInfo  implements XContentable<OverallBucketJobInfo> {
  
  static final ParseField JOB_ID = new ParseField("job_id");
  private String _jobId;
  public String getJobId() { return this._jobId; }
  public OverallBucketJobInfo setJobId(String val) { this._jobId = val; return this; }


  static final ParseField MAX_ANOMALY_SCORE = new ParseField("max_anomaly_score");
  private Double _maxAnomalyScore;
  public Double getMaxAnomalyScore() { return this._maxAnomalyScore; }
  public OverallBucketJobInfo setMaxAnomalyScore(Double val) { this._maxAnomalyScore = val; return this; }


  
  @Override
  public XContentBuilder toXContent(XContentBuilder builder, ToXContent.Params params) throws IOException {
    builder.startObject();
    if (_jobId != null) {
      builder.field(JOB_ID.getPreferredName(), _jobId);
    }
    if (_maxAnomalyScore != null) {
      builder.field(MAX_ANOMALY_SCORE.getPreferredName(), _maxAnomalyScore);
    }
    builder.endObject();
    return builder;
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
