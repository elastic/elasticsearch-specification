
package org.elasticsearch.x_pack.machine_learning.datafeed;

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

public class DatafeedTimingStats  implements XContentable<DatafeedTimingStats> {
  
  static final ParseField BUCKET_COUNT = new ParseField("bucket_count");
  private long _bucketCount;
  private boolean _bucketCount$isSet;
  public long getBucketCount() { return this._bucketCount; }
  public DatafeedTimingStats setBucketCount(long val) {
    this._bucketCount = val;
    _bucketCount$isSet = true;
    return this;
  }

  static final ParseField EXPONENTIAL_AVERAGE_SEARCH_TIME_PER_HOUR_MS = new ParseField("exponential_average_search_time_per_hour_ms");
  private double _exponentialAverageSearchTimePerHourMs;
  private boolean _exponentialAverageSearchTimePerHourMs$isSet;
  public double getExponentialAverageSearchTimePerHourMs() { return this._exponentialAverageSearchTimePerHourMs; }
  public DatafeedTimingStats setExponentialAverageSearchTimePerHourMs(double val) {
    this._exponentialAverageSearchTimePerHourMs = val;
    _exponentialAverageSearchTimePerHourMs$isSet = true;
    return this;
  }

  static final ParseField JOB_ID = new ParseField("job_id");
  private String _jobId;
  public String getJobId() { return this._jobId; }
  public DatafeedTimingStats setJobId(String val) { this._jobId = val; return this; }

  static final ParseField SEARCH_COUNT = new ParseField("search_count");
  private long _searchCount;
  private boolean _searchCount$isSet;
  public long getSearchCount() { return this._searchCount; }
  public DatafeedTimingStats setSearchCount(long val) {
    this._searchCount = val;
    _searchCount$isSet = true;
    return this;
  }

  static final ParseField TOTAL_SEARCH_TIME_MS = new ParseField("total_search_time_ms");
  private double _totalSearchTimeMs;
  private boolean _totalSearchTimeMs$isSet;
  public double getTotalSearchTimeMs() { return this._totalSearchTimeMs; }
  public DatafeedTimingStats setTotalSearchTimeMs(double val) {
    this._totalSearchTimeMs = val;
    _totalSearchTimeMs$isSet = true;
    return this;
  }


  
  @Override
  public void toXContentInternal(XContentBuilder builder, ToXContent.Params params) throws IOException {
    
    if (_bucketCount$isSet) {
      builder.field(BUCKET_COUNT.getPreferredName(), _bucketCount);
    }
    if (_exponentialAverageSearchTimePerHourMs$isSet) {
      builder.field(EXPONENTIAL_AVERAGE_SEARCH_TIME_PER_HOUR_MS.getPreferredName(), _exponentialAverageSearchTimePerHourMs);
    }
    if (_jobId != null) {
      builder.field(JOB_ID.getPreferredName(), _jobId);
    }
    if (_searchCount$isSet) {
      builder.field(SEARCH_COUNT.getPreferredName(), _searchCount);
    }
    if (_totalSearchTimeMs$isSet) {
      builder.field(TOTAL_SEARCH_TIME_MS.getPreferredName(), _totalSearchTimeMs);
    }
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
