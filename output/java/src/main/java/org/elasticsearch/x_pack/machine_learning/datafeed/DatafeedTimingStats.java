
package org.elasticsearch.x_pack.machine_learning.datafeed;

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

public class DatafeedTimingStats  implements XContentable<DatafeedTimingStats> {
  
  static final ParseField BUCKET_COUNT = new ParseField("bucket_count");
  private Long _bucketCount;
  public Long getBucketCount() { return this._bucketCount; }
  public DatafeedTimingStats setBucketCount(Long val) { this._bucketCount = val; return this; }


  static final ParseField EXPONENTIAL_AVERAGE_SEARCH_TIME_PER_HOUR_MS = new ParseField("exponential_average_search_time_per_hour_ms");
  private Double _exponentialAverageSearchTimePerHourMs;
  public Double getExponentialAverageSearchTimePerHourMs() { return this._exponentialAverageSearchTimePerHourMs; }
  public DatafeedTimingStats setExponentialAverageSearchTimePerHourMs(Double val) { this._exponentialAverageSearchTimePerHourMs = val; return this; }


  static final ParseField JOB_ID = new ParseField("job_id");
  private String _jobId;
  public String getJobId() { return this._jobId; }
  public DatafeedTimingStats setJobId(String val) { this._jobId = val; return this; }


  static final ParseField SEARCH_COUNT = new ParseField("search_count");
  private Long _searchCount;
  public Long getSearchCount() { return this._searchCount; }
  public DatafeedTimingStats setSearchCount(Long val) { this._searchCount = val; return this; }


  static final ParseField TOTAL_SEARCH_TIME_MS = new ParseField("total_search_time_ms");
  private Double _totalSearchTimeMs;
  public Double getTotalSearchTimeMs() { return this._totalSearchTimeMs; }
  public DatafeedTimingStats setTotalSearchTimeMs(Double val) { this._totalSearchTimeMs = val; return this; }


  
  @Override
  public XContentBuilder toXContent(XContentBuilder builder, ToXContent.Params params) throws IOException {
    builder.startObject();
    if (_bucketCount != null) {
      builder.field(BUCKET_COUNT.getPreferredName(), _bucketCount);
    }
    if (_exponentialAverageSearchTimePerHourMs != null) {
      builder.field(EXPONENTIAL_AVERAGE_SEARCH_TIME_PER_HOUR_MS.getPreferredName(), _exponentialAverageSearchTimePerHourMs);
    }
    if (_jobId != null) {
      builder.field(JOB_ID.getPreferredName(), _jobId);
    }
    if (_searchCount != null) {
      builder.field(SEARCH_COUNT.getPreferredName(), _searchCount);
    }
    if (_totalSearchTimeMs != null) {
      builder.field(TOTAL_SEARCH_TIME_MS.getPreferredName(), _totalSearchTimeMs);
    }
    builder.endObject();
    return builder;
  }

  @Override
  public DatafeedTimingStats fromXContent(XContentParser parser) throws IOException, XContentParseException {
    return DatafeedTimingStats.PARSER.apply(parser, null);
  }

  public static final ObjectParser<DatafeedTimingStats, Void> PARSER =
    new ObjectParser<>(DatafeedTimingStats.class.getName(), false, DatafeedTimingStats::new);

  static {
    PARSER.declareLong(DatafeedTimingStats::setBucketCount, BUCKET_COUNT);
    PARSER.declareDouble(DatafeedTimingStats::setExponentialAverageSearchTimePerHourMs, EXPONENTIAL_AVERAGE_SEARCH_TIME_PER_HOUR_MS);
    PARSER.declareString(DatafeedTimingStats::setJobId, JOB_ID);
    PARSER.declareLong(DatafeedTimingStats::setSearchCount, SEARCH_COUNT);
    PARSER.declareDouble(DatafeedTimingStats::setTotalSearchTimeMs, TOTAL_SEARCH_TIME_MS);
  }

}
