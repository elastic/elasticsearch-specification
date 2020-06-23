
package org.elasticsearch.x_pack.machine_learning.get_job_stats;

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
import org.elasticsearch.x_pack.machine_learning.job.config.*;

public class GetJobStatsResponse  implements XContentable<GetJobStatsResponse> {
  
  static final ParseField COUNT = new ParseField("count");
  private Long _count;
  public Long getCount() { return this._count; }
  public GetJobStatsResponse setCount(Long val) { this._count = val; return this; }


  static final ParseField JOBS = new ParseField("jobs");
  private List<JobStats> _jobs;
  public List<JobStats> getJobs() { return this._jobs; }
  public GetJobStatsResponse setJobs(List<JobStats> val) { this._jobs = val; return this; }


  
  @Override
  public XContentBuilder toXContent(XContentBuilder builder, ToXContent.Params params) throws IOException {
    builder.startObject();
    if (_count != null) {
      builder.field(COUNT.getPreferredName(), _count);
    }
    if (_jobs != null) {
      builder.array(JOBS.getPreferredName(), _jobs);
    }
    builder.endObject();
    return builder;
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
