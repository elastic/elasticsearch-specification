
package org.elasticsearch.x_pack.cross_cluster_replication.follow.resume_follow_index;

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
import org.elasticsearch.common_options.time_unit.*;

public class ResumeFollowIndexRequest  implements XContentable<ResumeFollowIndexRequest> {
  
  static final ParseField MAX_READ_REQUEST_OPERATION_COUNT = new ParseField("max_read_request_operation_count");
  private Long _maxReadRequestOperationCount;
  public Long getMaxReadRequestOperationCount() { return this._maxReadRequestOperationCount; }
  public ResumeFollowIndexRequest setMaxReadRequestOperationCount(Long val) { this._maxReadRequestOperationCount = val; return this; }


  static final ParseField MAX_OUTSTANDING_READ_REQUESTS = new ParseField("max_outstanding_read_requests");
  private Long _maxOutstandingReadRequests;
  public Long getMaxOutstandingReadRequests() { return this._maxOutstandingReadRequests; }
  public ResumeFollowIndexRequest setMaxOutstandingReadRequests(Long val) { this._maxOutstandingReadRequests = val; return this; }


  static final ParseField MAX_READ_REQUEST_SIZE = new ParseField("max_read_request_size");
  private String _maxReadRequestSize;
  public String getMaxReadRequestSize() { return this._maxReadRequestSize; }
  public ResumeFollowIndexRequest setMaxReadRequestSize(String val) { this._maxReadRequestSize = val; return this; }


  static final ParseField MAX_WRITE_REQUEST_OPERATION_COUNT = new ParseField("max_write_request_operation_count");
  private Long _maxWriteRequestOperationCount;
  public Long getMaxWriteRequestOperationCount() { return this._maxWriteRequestOperationCount; }
  public ResumeFollowIndexRequest setMaxWriteRequestOperationCount(Long val) { this._maxWriteRequestOperationCount = val; return this; }


  static final ParseField MAX_WRITE_REQUEST_SIZE = new ParseField("max_write_request_size");
  private String _maxWriteRequestSize;
  public String getMaxWriteRequestSize() { return this._maxWriteRequestSize; }
  public ResumeFollowIndexRequest setMaxWriteRequestSize(String val) { this._maxWriteRequestSize = val; return this; }


  static final ParseField MAX_OUTSTANDING_WRITE_REQUESTS = new ParseField("max_outstanding_write_requests");
  private Long _maxOutstandingWriteRequests;
  public Long getMaxOutstandingWriteRequests() { return this._maxOutstandingWriteRequests; }
  public ResumeFollowIndexRequest setMaxOutstandingWriteRequests(Long val) { this._maxOutstandingWriteRequests = val; return this; }


  static final ParseField MAX_WRITE_BUFFER_COUNT = new ParseField("max_write_buffer_count");
  private Long _maxWriteBufferCount;
  public Long getMaxWriteBufferCount() { return this._maxWriteBufferCount; }
  public ResumeFollowIndexRequest setMaxWriteBufferCount(Long val) { this._maxWriteBufferCount = val; return this; }


  static final ParseField MAX_WRITE_BUFFER_SIZE = new ParseField("max_write_buffer_size");
  private String _maxWriteBufferSize;
  public String getMaxWriteBufferSize() { return this._maxWriteBufferSize; }
  public ResumeFollowIndexRequest setMaxWriteBufferSize(String val) { this._maxWriteBufferSize = val; return this; }


  static final ParseField MAX_RETRY_DELAY = new ParseField("max_retry_delay");
  private Time _maxRetryDelay;
  public Time getMaxRetryDelay() { return this._maxRetryDelay; }
  public ResumeFollowIndexRequest setMaxRetryDelay(Time val) { this._maxRetryDelay = val; return this; }


  static final ParseField READ_POLL_TIMEOUT = new ParseField("read_poll_timeout");
  private Time _readPollTimeout;
  public Time getReadPollTimeout() { return this._readPollTimeout; }
  public ResumeFollowIndexRequest setReadPollTimeout(Time val) { this._readPollTimeout = val; return this; }


  
  @Override
  public XContentBuilder toXContent(XContentBuilder builder, ToXContent.Params params) throws IOException {
    builder.startObject();
    if (_maxReadRequestOperationCount != null) {
      builder.field(MAX_READ_REQUEST_OPERATION_COUNT.getPreferredName(), _maxReadRequestOperationCount);
    }
    if (_maxOutstandingReadRequests != null) {
      builder.field(MAX_OUTSTANDING_READ_REQUESTS.getPreferredName(), _maxOutstandingReadRequests);
    }
    if (_maxReadRequestSize != null) {
      builder.field(MAX_READ_REQUEST_SIZE.getPreferredName(), _maxReadRequestSize);
    }
    if (_maxWriteRequestOperationCount != null) {
      builder.field(MAX_WRITE_REQUEST_OPERATION_COUNT.getPreferredName(), _maxWriteRequestOperationCount);
    }
    if (_maxWriteRequestSize != null) {
      builder.field(MAX_WRITE_REQUEST_SIZE.getPreferredName(), _maxWriteRequestSize);
    }
    if (_maxOutstandingWriteRequests != null) {
      builder.field(MAX_OUTSTANDING_WRITE_REQUESTS.getPreferredName(), _maxOutstandingWriteRequests);
    }
    if (_maxWriteBufferCount != null) {
      builder.field(MAX_WRITE_BUFFER_COUNT.getPreferredName(), _maxWriteBufferCount);
    }
    if (_maxWriteBufferSize != null) {
      builder.field(MAX_WRITE_BUFFER_SIZE.getPreferredName(), _maxWriteBufferSize);
    }
    if (_maxRetryDelay != null) {
      builder.field(MAX_RETRY_DELAY.getPreferredName());
      _maxRetryDelay.toXContent(builder, params);
    }
    if (_readPollTimeout != null) {
      builder.field(READ_POLL_TIMEOUT.getPreferredName());
      _readPollTimeout.toXContent(builder, params);
    }
    builder.endObject();
    return builder;
  }

  @Override
  public ResumeFollowIndexRequest fromXContent(XContentParser parser) throws IOException, XContentParseException {
    return ResumeFollowIndexRequest.PARSER.apply(parser, null);
  }

  public static final ObjectParser<ResumeFollowIndexRequest, Void> PARSER =
    new ObjectParser<>(ResumeFollowIndexRequest.class.getName(), false, ResumeFollowIndexRequest::new);

  static {
    PARSER.declareLong(ResumeFollowIndexRequest::setMaxReadRequestOperationCount, MAX_READ_REQUEST_OPERATION_COUNT);
    PARSER.declareLong(ResumeFollowIndexRequest::setMaxOutstandingReadRequests, MAX_OUTSTANDING_READ_REQUESTS);
    PARSER.declareString(ResumeFollowIndexRequest::setMaxReadRequestSize, MAX_READ_REQUEST_SIZE);
    PARSER.declareLong(ResumeFollowIndexRequest::setMaxWriteRequestOperationCount, MAX_WRITE_REQUEST_OPERATION_COUNT);
    PARSER.declareString(ResumeFollowIndexRequest::setMaxWriteRequestSize, MAX_WRITE_REQUEST_SIZE);
    PARSER.declareLong(ResumeFollowIndexRequest::setMaxOutstandingWriteRequests, MAX_OUTSTANDING_WRITE_REQUESTS);
    PARSER.declareLong(ResumeFollowIndexRequest::setMaxWriteBufferCount, MAX_WRITE_BUFFER_COUNT);
    PARSER.declareString(ResumeFollowIndexRequest::setMaxWriteBufferSize, MAX_WRITE_BUFFER_SIZE);
    PARSER.declareObject(ResumeFollowIndexRequest::setMaxRetryDelay, (p, t) -> Time.PARSER.apply(p, t), MAX_RETRY_DELAY);
    PARSER.declareObject(ResumeFollowIndexRequest::setReadPollTimeout, (p, t) -> Time.PARSER.apply(p, t), READ_POLL_TIMEOUT);
  }

}
