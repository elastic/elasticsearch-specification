
package org.elasticsearch.x_pack.machine_learning.get_jobs;

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
import org.elasticsearch.x_pack.info.x_pack_usage.*;
import org.elasticsearch.common_abstractions.response.*;

public class GetJobsResponse extends ResponseBase<GetJobsResponse> implements XContentable<GetJobsResponse> {
  
  static final ParseField COUNT = new ParseField("count");
  private long _count;
  private boolean _count$isSet;
  public long getCount() { return this._count; }
  public GetJobsResponse setCount(long val) {
    this._count = val;
    _count$isSet = true;
    return this;
  }

  static final ParseField JOBS = new ParseField("jobs");
  private List<Job> _jobs;
  public List<Job> getJobs() { return this._jobs; }
  public GetJobsResponse setJobs(List<Job> val) { this._jobs = val; return this; }


  
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
  public GetJobsResponse fromXContent(XContentParser parser) throws IOException, XContentParseException {
    return GetJobsResponse.PARSER.apply(parser, null);
  }

  public static final ObjectParser<GetJobsResponse, Void> PARSER =
    new ObjectParser<>(GetJobsResponse.class.getName(), false, GetJobsResponse::new);

  static {
    PARSER.declareLong(GetJobsResponse::setCount, COUNT);
    PARSER.declareObjectArray(GetJobsResponse::setJobs, (p, t) -> Job.PARSER.apply(p, t), JOBS);
  }

}
