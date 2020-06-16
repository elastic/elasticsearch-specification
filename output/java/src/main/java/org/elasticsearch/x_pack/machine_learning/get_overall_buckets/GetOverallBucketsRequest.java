
package org.elasticsearch.x_pack.machine_learning.get_overall_buckets;

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
import org.elasticsearch.common_options.time_unit.*;
import org.elasticsearch.internal.*;

public class GetOverallBucketsRequest  implements XContentable<GetOverallBucketsRequest> {
  
  static final ParseField ALLOW_NO_JOBS = new ParseField("allow_no_jobs");
  private Boolean _allowNoJobs;
  public Boolean getAllowNoJobs() { return this._allowNoJobs; }
  public GetOverallBucketsRequest setAllowNoJobs(Boolean val) { this._allowNoJobs = val; return this; }


  static final ParseField BUCKET_SPAN = new ParseField("bucket_span");
  private Time _bucketSpan;
  public Time getBucketSpan() { return this._bucketSpan; }
  public GetOverallBucketsRequest setBucketSpan(Time val) { this._bucketSpan = val; return this; }


  static final ParseField END = new ParseField("end");
  private Date _end;
  public Date getEnd() { return this._end; }
  public GetOverallBucketsRequest setEnd(Date val) { this._end = val; return this; }


  static final ParseField EXCLUDE_INTERIM = new ParseField("exclude_interim");
  private Boolean _excludeInterim;
  public Boolean getExcludeInterim() { return this._excludeInterim; }
  public GetOverallBucketsRequest setExcludeInterim(Boolean val) { this._excludeInterim = val; return this; }


  static final ParseField OVERALL_SCORE = new ParseField("overall_score");
  private Double _overallScore;
  public Double getOverallScore() { return this._overallScore; }
  public GetOverallBucketsRequest setOverallScore(Double val) { this._overallScore = val; return this; }


  static final ParseField START = new ParseField("start");
  private Date _start;
  public Date getStart() { return this._start; }
  public GetOverallBucketsRequest setStart(Date val) { this._start = val; return this; }


  static final ParseField TOP_N = new ParseField("top_n");
  private Integer _topN;
  public Integer getTopN() { return this._topN; }
  public GetOverallBucketsRequest setTopN(Integer val) { this._topN = val; return this; }


  
  @Override
  public XContentBuilder toXContent(XContentBuilder builder, ToXContent.Params params) throws IOException {
    builder.startObject();
    if (_allowNoJobs != null) {
      builder.field(ALLOW_NO_JOBS.getPreferredName(), _allowNoJobs);
    }
    if (_bucketSpan != null) {
      builder.field(BUCKET_SPAN.getPreferredName());
      _bucketSpan.toXContent(builder, params);
    }
    if (_end != null) {
      builder.field(END.getPreferredName(),
        DateTimeFormatter.ISO_DATE.format(_end.toInstant()));
    }
    if (_excludeInterim != null) {
      builder.field(EXCLUDE_INTERIM.getPreferredName(), _excludeInterim);
    }
    if (_overallScore != null) {
      builder.field(OVERALL_SCORE.getPreferredName(), _overallScore);
    }
    if (_start != null) {
      builder.field(START.getPreferredName(),
        DateTimeFormatter.ISO_DATE.format(_start.toInstant()));
    }
    if (_topN != null) {
      builder.field(TOP_N.getPreferredName(), _topN);
    }
    builder.endObject();
    return builder;
  }

  @Override
  public GetOverallBucketsRequest fromXContent(XContentParser parser) throws IOException, XContentParseException {
    return GetOverallBucketsRequest.PARSER.apply(parser, null);
  }

  public static final ObjectParser<GetOverallBucketsRequest, Void> PARSER =
    new ObjectParser<>(GetOverallBucketsRequest.class.getName(), false, GetOverallBucketsRequest::new);

  static {
    PARSER.declareBoolean(GetOverallBucketsRequest::setAllowNoJobs, ALLOW_NO_JOBS);
    PARSER.declareObject(GetOverallBucketsRequest::setBucketSpan, (p, t) -> Time.PARSER.apply(p, t), BUCKET_SPAN);
    PARSER.declareObject(GetOverallBucketsRequest::setEnd, (p, t) -> Date.from(Instant.from(DateTimeFormatter.ISO_DATE.parse(p.text()))), END);
    PARSER.declareBoolean(GetOverallBucketsRequest::setExcludeInterim, EXCLUDE_INTERIM);
    PARSER.declareDouble(GetOverallBucketsRequest::setOverallScore, OVERALL_SCORE);
    PARSER.declareObject(GetOverallBucketsRequest::setStart, (p, t) -> Date.from(Instant.from(DateTimeFormatter.ISO_DATE.parse(p.text()))), START);
    PARSER.declareInt(GetOverallBucketsRequest::setTopN, TOP_N);
  }

}
