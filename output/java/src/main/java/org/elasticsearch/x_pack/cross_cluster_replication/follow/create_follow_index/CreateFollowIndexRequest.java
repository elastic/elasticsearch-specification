
package org.elasticsearch.x_pack.cross_cluster_replication.follow.create_follow_index;

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
import org.elasticsearch.common_abstractions.infer.index_name.*;
import org.elasticsearch.internal.*;
import org.elasticsearch.common_options.time_unit.*;

public class CreateFollowIndexRequest  implements XContentable<CreateFollowIndexRequest> {
  
  static final ParseField WAIT_FOR_ACTIVE_SHARDS = new ParseField("wait_for_active_shards");
  private String _waitForActiveShards;
  public String getWaitForActiveShards() { return this._waitForActiveShards; }
  public CreateFollowIndexRequest setWaitForActiveShards(String val) { this._waitForActiveShards = val; return this; }


  static final ParseField REMOTE_CLUSTER = new ParseField("remote_cluster");
  private String _remoteCluster;
  public String getRemoteCluster() { return this._remoteCluster; }
  public CreateFollowIndexRequest setRemoteCluster(String val) { this._remoteCluster = val; return this; }


  static final ParseField LEADER_INDEX = new ParseField("leader_index");
  private IndexName _leaderIndex;
  public IndexName getLeaderIndex() { return this._leaderIndex; }
  public CreateFollowIndexRequest setLeaderIndex(IndexName val) { this._leaderIndex = val; return this; }


  static final ParseField MAX_READ_REQUEST_OPERATION_COUNT = new ParseField("max_read_request_operation_count");
  private Long _maxReadRequestOperationCount;
  public Long getMaxReadRequestOperationCount() { return this._maxReadRequestOperationCount; }
  public CreateFollowIndexRequest setMaxReadRequestOperationCount(Long val) { this._maxReadRequestOperationCount = val; return this; }


  static final ParseField MAX_OUTSTANDING_READ_REQUESTS = new ParseField("max_outstanding_read_requests");
  private Long _maxOutstandingReadRequests;
  public Long getMaxOutstandingReadRequests() { return this._maxOutstandingReadRequests; }
  public CreateFollowIndexRequest setMaxOutstandingReadRequests(Long val) { this._maxOutstandingReadRequests = val; return this; }


  static final ParseField MAX_READ_REQUEST_SIZE = new ParseField("max_read_request_size");
  private String _maxReadRequestSize;
  public String getMaxReadRequestSize() { return this._maxReadRequestSize; }
  public CreateFollowIndexRequest setMaxReadRequestSize(String val) { this._maxReadRequestSize = val; return this; }


  static final ParseField MAX_WRITE_REQUEST_OPERATION_COUNT = new ParseField("max_write_request_operation_count");
  private Long _maxWriteRequestOperationCount;
  public Long getMaxWriteRequestOperationCount() { return this._maxWriteRequestOperationCount; }
  public CreateFollowIndexRequest setMaxWriteRequestOperationCount(Long val) { this._maxWriteRequestOperationCount = val; return this; }


  static final ParseField MAX_WRITE_REQUEST_SIZE = new ParseField("max_write_request_size");
  private String _maxWriteRequestSize;
  public String getMaxWriteRequestSize() { return this._maxWriteRequestSize; }
  public CreateFollowIndexRequest setMaxWriteRequestSize(String val) { this._maxWriteRequestSize = val; return this; }


  static final ParseField MAX_OUTSTANDING_WRITE_REQUESTS = new ParseField("max_outstanding_write_requests");
  private Long _maxOutstandingWriteRequests;
  public Long getMaxOutstandingWriteRequests() { return this._maxOutstandingWriteRequests; }
  public CreateFollowIndexRequest setMaxOutstandingWriteRequests(Long val) { this._maxOutstandingWriteRequests = val; return this; }


  static final ParseField MAX_WRITE_BUFFER_COUNT = new ParseField("max_write_buffer_count");
  private Long _maxWriteBufferCount;
  public Long getMaxWriteBufferCount() { return this._maxWriteBufferCount; }
  public CreateFollowIndexRequest setMaxWriteBufferCount(Long val) { this._maxWriteBufferCount = val; return this; }


  static final ParseField MAX_WRITE_BUFFER_SIZE = new ParseField("max_write_buffer_size");
  private String _maxWriteBufferSize;
  public String getMaxWriteBufferSize() { return this._maxWriteBufferSize; }
  public CreateFollowIndexRequest setMaxWriteBufferSize(String val) { this._maxWriteBufferSize = val; return this; }


  static final ParseField MAX_RETRY_DELAY = new ParseField("max_retry_delay");
  private Time _maxRetryDelay;
  public Time getMaxRetryDelay() { return this._maxRetryDelay; }
  public CreateFollowIndexRequest setMaxRetryDelay(Time val) { this._maxRetryDelay = val; return this; }


  static final ParseField READ_POLL_TIMEOUT = new ParseField("read_poll_timeout");
  private Time _readPollTimeout;
  public Time getReadPollTimeout() { return this._readPollTimeout; }
  public CreateFollowIndexRequest setReadPollTimeout(Time val) { this._readPollTimeout = val; return this; }


  
  @Override
  public XContentBuilder toXContent(XContentBuilder builder, ToXContent.Params params) throws IOException {
    builder.startObject();
    if (_waitForActiveShards != null) {
      builder.field(WAIT_FOR_ACTIVE_SHARDS.getPreferredName(), _waitForActiveShards);
    }
    if (_remoteCluster != null) {
      builder.field(REMOTE_CLUSTER.getPreferredName(), _remoteCluster);
    }
    if (_leaderIndex != null) {
      builder.field(LEADER_INDEX.getPreferredName());
      _leaderIndex.toXContent(builder, params);
    }
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
  public CreateFollowIndexRequest fromXContent(XContentParser parser) throws IOException, XContentParseException {
    return CreateFollowIndexRequest.PARSER.apply(parser, null);
  }

  public static final ObjectParser<CreateFollowIndexRequest, Void> PARSER =
    new ObjectParser<>(CreateFollowIndexRequest.class.getName(), false, CreateFollowIndexRequest::new);

  static {
    PARSER.declareString(CreateFollowIndexRequest::setWaitForActiveShards, WAIT_FOR_ACTIVE_SHARDS);
    PARSER.declareString(CreateFollowIndexRequest::setRemoteCluster, REMOTE_CLUSTER);
    PARSER.declareObject(CreateFollowIndexRequest::setLeaderIndex, (p, t) -> IndexName.createFrom(p), LEADER_INDEX);
    PARSER.declareLong(CreateFollowIndexRequest::setMaxReadRequestOperationCount, MAX_READ_REQUEST_OPERATION_COUNT);
    PARSER.declareLong(CreateFollowIndexRequest::setMaxOutstandingReadRequests, MAX_OUTSTANDING_READ_REQUESTS);
    PARSER.declareString(CreateFollowIndexRequest::setMaxReadRequestSize, MAX_READ_REQUEST_SIZE);
    PARSER.declareLong(CreateFollowIndexRequest::setMaxWriteRequestOperationCount, MAX_WRITE_REQUEST_OPERATION_COUNT);
    PARSER.declareString(CreateFollowIndexRequest::setMaxWriteRequestSize, MAX_WRITE_REQUEST_SIZE);
    PARSER.declareLong(CreateFollowIndexRequest::setMaxOutstandingWriteRequests, MAX_OUTSTANDING_WRITE_REQUESTS);
    PARSER.declareLong(CreateFollowIndexRequest::setMaxWriteBufferCount, MAX_WRITE_BUFFER_COUNT);
    PARSER.declareString(CreateFollowIndexRequest::setMaxWriteBufferSize, MAX_WRITE_BUFFER_SIZE);
    PARSER.declareObject(CreateFollowIndexRequest::setMaxRetryDelay, (p, t) -> Time.PARSER.apply(p, t), MAX_RETRY_DELAY);
    PARSER.declareObject(CreateFollowIndexRequest::setReadPollTimeout, (p, t) -> Time.PARSER.apply(p, t), READ_POLL_TIMEOUT);
  }

}
