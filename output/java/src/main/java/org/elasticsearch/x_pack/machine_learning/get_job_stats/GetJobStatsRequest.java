
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


public class GetJobStatsRequest  implements XContentable<GetJobStatsRequest> {
  
  static final ParseField ALLOW_NO_JOBS = new ParseField("allow_no_jobs");
  private Boolean _allowNoJobs;
  public Boolean getAllowNoJobs() { return this._allowNoJobs; }
  public GetJobStatsRequest setAllowNoJobs(Boolean val) { this._allowNoJobs = val; return this; }


  
  @Override
  public XContentBuilder toXContent(XContentBuilder builder, ToXContent.Params params) throws IOException {
    builder.startObject();
    if (_allowNoJobs != null) {
      builder.field(ALLOW_NO_JOBS.getPreferredName(), _allowNoJobs);
    }
    builder.endObject();
    return builder;
  }

  @Override
  public GetJobStatsRequest fromXContent(XContentParser parser) throws IOException, XContentParseException {
    return GetJobStatsRequest.PARSER.apply(parser, null);
  }

  public static final ObjectParser<GetJobStatsRequest, Void> PARSER =
    new ObjectParser<>(GetJobStatsRequest.class.getName(), false, GetJobStatsRequest::new);

  static {
    PARSER.declareBoolean(GetJobStatsRequest::setAllowNoJobs, ALLOW_NO_JOBS);
  }

}
