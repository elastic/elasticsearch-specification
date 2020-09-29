
package org.elasticsearch.x_pack.info.x_pack_usage;

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

public class ForecastStatistics  implements XContentable<ForecastStatistics> {
  
  static final ParseField FORECASTED_JOBS = new ParseField("forecasted_jobs");
  private long _forecastedJobs;
  private boolean _forecastedJobs$isSet;
  public long getForecastedJobs() { return this._forecastedJobs; }
  public ForecastStatistics setForecastedJobs(long val) {
    this._forecastedJobs = val;
    _forecastedJobs$isSet = true;
    return this;
  }

  static final ParseField MEMORY_BYTES = new ParseField("memory_bytes");
  private JobStatistics _memoryBytes;
  public JobStatistics getMemoryBytes() { return this._memoryBytes; }
  public ForecastStatistics setMemoryBytes(JobStatistics val) { this._memoryBytes = val; return this; }

  static final ParseField PROCESSING_TIME_MS = new ParseField("processing_time_ms");
  private JobStatistics _processingTimeMs;
  public JobStatistics getProcessingTimeMs() { return this._processingTimeMs; }
  public ForecastStatistics setProcessingTimeMs(JobStatistics val) { this._processingTimeMs = val; return this; }

  static final ParseField RECORDS = new ParseField("records");
  private JobStatistics _records;
  public JobStatistics getRecords() { return this._records; }
  public ForecastStatistics setRecords(JobStatistics val) { this._records = val; return this; }

  static final ParseField STATUS = new ParseField("status");
  private NamedContainer<String, Long> _status;
  public NamedContainer<String, Long> getStatus() { return this._status; }
  public ForecastStatistics setStatus(NamedContainer<String, Long> val) { this._status = val; return this; }

  static final ParseField TOTAL = new ParseField("total");
  private long _total;
  private boolean _total$isSet;
  public long getTotal() { return this._total; }
  public ForecastStatistics setTotal(long val) {
    this._total = val;
    _total$isSet = true;
    return this;
  }


  
  @Override
  public void toXContentInternal(XContentBuilder builder, ToXContent.Params params) throws IOException {
    
    if (_forecastedJobs$isSet) {
      builder.field(FORECASTED_JOBS.getPreferredName(), _forecastedJobs);
    }
    if (_memoryBytes != null) {
      builder.field(MEMORY_BYTES.getPreferredName());
      _memoryBytes.toXContent(builder, params);
    }
    if (_processingTimeMs != null) {
      builder.field(PROCESSING_TIME_MS.getPreferredName());
      _processingTimeMs.toXContent(builder, params);
    }
    if (_records != null) {
      builder.field(RECORDS.getPreferredName());
      _records.toXContent(builder, params);
    }
    if (_status != null) {
      builder.field(STATUS.getPreferredName());
      _status.toXContent(builder, params);
    }
    if (_total$isSet) {
      builder.field(TOTAL.getPreferredName(), _total);
    }
  }

  @Override
  public ForecastStatistics fromXContent(XContentParser parser) throws IOException, XContentParseException {
    return ForecastStatistics.PARSER.apply(parser, null);
  }

  public static final ObjectParser<ForecastStatistics, Void> PARSER =
    new ObjectParser<>(ForecastStatistics.class.getName(), false, ForecastStatistics::new);

  static {
    PARSER.declareLong(ForecastStatistics::setForecastedJobs, FORECASTED_JOBS);
    PARSER.declareObject(ForecastStatistics::setMemoryBytes, (p, t) -> JobStatistics.PARSER.apply(p, t), MEMORY_BYTES);
    PARSER.declareObject(ForecastStatistics::setProcessingTimeMs, (p, t) -> JobStatistics.PARSER.apply(p, t), PROCESSING_TIME_MS);
    PARSER.declareObject(ForecastStatistics::setRecords, (p, t) -> JobStatistics.PARSER.apply(p, t), RECORDS);
    PARSER.declareObject(ForecastStatistics::setStatus, (p, t) -> new NamedContainer<>(n -> () -> n,pp -> long.PARSER.apply(pp, null)), STATUS);
    PARSER.declareLong(ForecastStatistics::setTotal, TOTAL);
  }

}
