
package org.elasticsearch.x_pack.machine_learning.get_job_stats;

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
import org.elasticsearch.x_pack.machine_learning.job.config.*;
import org.elasticsearch.common_abstractions.response.*;

public class GetJobStatsResponse extends ResponseBase<GetJobStatsResponse> implements XContentable<GetJobStatsResponse> {
  
  static final ParseField COUNT = new ParseField("count");
  private long _count;
  private boolean _count$isSet;
  public long getCount() { return this._count; }
  public GetJobStatsResponse setCount(long val) {
    this._count = val;
    _count$isSet = true;
    return this;
  }

  static final ParseField JOBS = new ParseField("jobs");
  private List<JobStats> _jobs;
  public List<JobStats> getJobs() { return this._jobs; }
  public GetJobStatsResponse setJobs(List<JobStats> val) { this._jobs = val; return this; }


  
  @Override
  public void toXContentInternal(XContentBuilder builder, ToXContent.Params params) throws IOException {
    super.toXContentInternal(builder, params);
    if (_count$isSet) {
      builder.field(COUNT.getPreferredName(), _count);
    }
    if (_jobs != null) {
      builder.array(JOBS.getPreferredName(), _jobs);
    }
  }

  @Override
  public GetJobStatsResponse fromXContent(XContentParser parser) throws IOException, XContentParseException {
    return GetJobStatsResponse.PARSER.apply(parser, null);
  }

  public static final ObjectParser<GetJobStatsResponse, Void> PARSER =
    new ObjectParser<>(GetJobStatsResponse.class.getName(), false, GetJobStatsResponse::new);

  static {
    PARSER.declareLong(GetJobStatsResponse::setCount, COUNT);
    PARSER.declareObjectArray(GetJobStatsResponse::setJobs, (p, t) -> JobStats.PARSER.apply(p, t), JOBS);
  }

}
