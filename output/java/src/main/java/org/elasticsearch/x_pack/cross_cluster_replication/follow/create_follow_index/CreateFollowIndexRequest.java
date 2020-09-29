
package org.elasticsearch.x_pack.cross_cluster_replication.follow.create_follow_index;

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
import org.elasticsearch.common_options.time_unit.*;
import org.elasticsearch.common_abstractions.request.*;

public class CreateFollowIndexRequest extends RequestBase<CreateFollowIndexRequest> implements XContentable<CreateFollowIndexRequest> {
  
  static final ParseField WAIT_FOR_ACTIVE_SHARDS = new ParseField("wait_for_active_shards");
  private String _waitForActiveShards;
  public String getWaitForActiveShards() { return this._waitForActiveShards; }
  public CreateFollowIndexRequest setWaitForActiveShards(String val) { this._waitForActiveShards = val; return this; }

  static final ParseField LEADER_INDEX = new ParseField("leader_index");
  private String _leaderIndex;
  public String getLeaderIndex() { return this._leaderIndex; }
  public CreateFollowIndexRequest setLeaderIndex(String val) { this._leaderIndex = val; return this; }

  static final ParseField MAX_OUTSTANDING_READ_REQUESTS = new ParseField("max_outstanding_read_requests");
  private long _maxOutstandingReadRequests;
  private boolean _maxOutstandingReadRequests$isSet;
  public long getMaxOutstandingReadRequests() { return this._maxOutstandingReadRequests; }
  public CreateFollowIndexRequest setMaxOutstandingReadRequests(long val) {
    this._maxOutstandingReadRequests = val;
    _maxOutstandingReadRequests$isSet = true;
    return this;
  }

  static final ParseField MAX_OUTSTANDING_WRITE_REQUESTS = new ParseField("max_outstanding_write_requests");
  private long _maxOutstandingWriteRequests;
  private boolean _maxOutstandingWriteRequests$isSet;
  public long getMaxOutstandingWriteRequests() { return this._maxOutstandingWriteRequests; }
  public CreateFollowIndexRequest setMaxOutstandingWriteRequests(long val) {
    this._maxOutstandingWriteRequests = val;
    _maxOutstandingWriteRequests$isSet = true;
    return this;
  }

  static final ParseField MAX_READ_REQUEST_OPERATION_COUNT = new ParseField("max_read_request_operation_count");
  private long _maxReadRequestOperationCount;
  private boolean _maxReadRequestOperationCount$isSet;
  public long getMaxReadRequestOperationCount() { return this._maxReadRequestOperationCount; }
  public CreateFollowIndexRequest setMaxReadRequestOperationCount(long val) {
    this._maxReadRequestOperationCount = val;
    _maxReadRequestOperationCount$isSet = true;
    return this;
  }

  static final ParseField MAX_READ_REQUEST_SIZE = new ParseField("max_read_request_size");
  private String _maxReadRequestSize;
  public String getMaxReadRequestSize() { return this._maxReadRequestSize; }
  public CreateFollowIndexRequest setMaxReadRequestSize(String val) { this._maxReadRequestSize = val; return this; }

  static final ParseField MAX_RETRY_DELAY = new ParseField("max_retry_delay");
  private String _maxRetryDelay;
  public String getMaxRetryDelay() { return this._maxRetryDelay; }
  public CreateFollowIndexRequest setMaxRetryDelay(String val) { this._maxRetryDelay = val; return this; }

  static final ParseField MAX_WRITE_BUFFER_COUNT = new ParseField("max_write_buffer_count");
  private long _maxWriteBufferCount;
  private boolean _maxWriteBufferCount$isSet;
  public long getMaxWriteBufferCount() { return this._maxWriteBufferCount; }
  public CreateFollowIndexRequest setMaxWriteBufferCount(long val) {
    this._maxWriteBufferCount = val;
    _maxWriteBufferCount$isSet = true;
    return this;
  }

  static final ParseField MAX_WRITE_BUFFER_SIZE = new ParseField("max_write_buffer_size");
  private String _maxWriteBufferSize;
  public String getMaxWriteBufferSize() { return this._maxWriteBufferSize; }
  public CreateFollowIndexRequest setMaxWriteBufferSize(String val) { this._maxWriteBufferSize = val; return this; }

  static final ParseField MAX_WRITE_REQUEST_OPERATION_COUNT = new ParseField("max_write_request_operation_count");
  private long _maxWriteRequestOperationCount;
  private boolean _maxWriteRequestOperationCount$isSet;
  public long getMaxWriteRequestOperationCount() { return this._maxWriteRequestOperationCount; }
  public CreateFollowIndexRequest setMaxWriteRequestOperationCount(long val) {
    this._maxWriteRequestOperationCount = val;
    _maxWriteRequestOperationCount$isSet = true;
    return this;
  }

  static final ParseField MAX_WRITE_REQUEST_SIZE = new ParseField("max_write_request_size");
  private String _maxWriteRequestSize;
  public String getMaxWriteRequestSize() { return this._maxWriteRequestSize; }
  public CreateFollowIndexRequest setMaxWriteRequestSize(String val) { this._maxWriteRequestSize = val; return this; }

  static final ParseField READ_POLL_TIMEOUT = new ParseField("read_poll_timeout");
  private String _readPollTimeout;
  public String getReadPollTimeout() { return this._readPollTimeout; }
  public CreateFollowIndexRequest setReadPollTimeout(String val) { this._readPollTimeout = val; return this; }

  static final ParseField REMOTE_CLUSTER = new ParseField("remote_cluster");
  private String _remoteCluster;
  public String getRemoteCluster() { return this._remoteCluster; }
  public CreateFollowIndexRequest setRemoteCluster(String val) { this._remoteCluster = val; return this; }


  
  @Override
  public void toXContentInternal(XContentBuilder builder, ToXContent.Params params) throws IOException {
    super.toXContentInternal(builder, params);
    if (_waitForActiveShards != null) {
      builder.field(WAIT_FOR_ACTIVE_SHARDS.getPreferredName(), _waitForActiveShards);
    }
    if (_leaderIndex != null) {
      builder.field(LEADER_INDEX.getPreferredName(), _leaderIndex);
    }
    if (_maxOutstandingReadRequests$isSet) {
      builder.field(MAX_OUTSTANDING_READ_REQUESTS.getPreferredName(), _maxOutstandingReadRequests);
    }
    if (_maxOutstandingWriteRequests$isSet) {
      builder.field(MAX_OUTSTANDING_WRITE_REQUESTS.getPreferredName(), _maxOutstandingWriteRequests);
    }
    if (_maxReadRequestOperationCount$isSet) {
      builder.field(MAX_READ_REQUEST_OPERATION_COUNT.getPreferredName(), _maxReadRequestOperationCount);
    }
    if (_maxReadRequestSize != null) {
      builder.field(MAX_READ_REQUEST_SIZE.getPreferredName(), _maxReadRequestSize);
    }
    if (_maxRetryDelay != null) {
      builder.field(MAX_RETRY_DELAY.getPreferredName(), _maxRetryDelay);
    }
    if (_maxWriteBufferCount$isSet) {
      builder.field(MAX_WRITE_BUFFER_COUNT.getPreferredName(), _maxWriteBufferCount);
    }
    if (_maxWriteBufferSize != null) {
      builder.field(MAX_WRITE_BUFFER_SIZE.getPreferredName(), _maxWriteBufferSize);
    }
    if (_maxWriteRequestOperationCount$isSet) {
      builder.field(MAX_WRITE_REQUEST_OPERATION_COUNT.getPreferredName(), _maxWriteRequestOperationCount);
    }
    if (_maxWriteRequestSize != null) {
      builder.field(MAX_WRITE_REQUEST_SIZE.getPreferredName(), _maxWriteRequestSize);
    }
    if (_readPollTimeout != null) {
      builder.field(READ_POLL_TIMEOUT.getPreferredName(), _readPollTimeout);
    }
    if (_remoteCluster != null) {
      builder.field(REMOTE_CLUSTER.getPreferredName(), _remoteCluster);
    }
  }

  @Override
  public CreateFollowIndexRequest fromXContent(XContentParser parser) throws IOException, XContentParseException {
    return CreateFollowIndexRequest.PARSER.apply(parser, null);
  }

  public static final ObjectParser<CreateFollowIndexRequest, Void> PARSER =
    new ObjectParser<>(CreateFollowIndexRequest.class.getName(), false, CreateFollowIndexRequest::new);

  static {
    PARSER.declareString(CreateFollowIndexRequest::setWaitForActiveShards, WAIT_FOR_ACTIVE_SHARDS);
    PARSER.declareString(CreateFollowIndexRequest::setLeaderIndex, LEADER_INDEX);
    PARSER.declareLong(CreateFollowIndexRequest::setMaxOutstandingReadRequests, MAX_OUTSTANDING_READ_REQUESTS);
    PARSER.declareLong(CreateFollowIndexRequest::setMaxOutstandingWriteRequests, MAX_OUTSTANDING_WRITE_REQUESTS);
    PARSER.declareLong(CreateFollowIndexRequest::setMaxReadRequestOperationCount, MAX_READ_REQUEST_OPERATION_COUNT);
    PARSER.declareString(CreateFollowIndexRequest::setMaxReadRequestSize, MAX_READ_REQUEST_SIZE);
    PARSER.declareString(CreateFollowIndexRequest::setMaxRetryDelay, MAX_RETRY_DELAY);
    PARSER.declareLong(CreateFollowIndexRequest::setMaxWriteBufferCount, MAX_WRITE_BUFFER_COUNT);
    PARSER.declareString(CreateFollowIndexRequest::setMaxWriteBufferSize, MAX_WRITE_BUFFER_SIZE);
    PARSER.declareLong(CreateFollowIndexRequest::setMaxWriteRequestOperationCount, MAX_WRITE_REQUEST_OPERATION_COUNT);
    PARSER.declareString(CreateFollowIndexRequest::setMaxWriteRequestSize, MAX_WRITE_REQUEST_SIZE);
    PARSER.declareString(CreateFollowIndexRequest::setReadPollTimeout, READ_POLL_TIMEOUT);
    PARSER.declareString(CreateFollowIndexRequest::setRemoteCluster, REMOTE_CLUSTER);
  }

}
