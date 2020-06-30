
package org.elasticsearch.x_pack.cross_cluster_replication.follow.follow_index_stats;

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
import org.elasticsearch.x_pack.cross_cluster_replication.follow.follow_index_stats.*;

public class FollowIndexShardStats  implements XContentable<FollowIndexShardStats> {
  
  static final ParseField BYTES_READ = new ParseField("bytes_read");
  private Long _bytesRead;
  public Long getBytesRead() { return this._bytesRead; }
  public FollowIndexShardStats setBytesRead(Long val) { this._bytesRead = val; return this; }


  static final ParseField FAILED_READ_REQUESTS = new ParseField("failed_read_requests");
  private Long _failedReadRequests;
  public Long getFailedReadRequests() { return this._failedReadRequests; }
  public FollowIndexShardStats setFailedReadRequests(Long val) { this._failedReadRequests = val; return this; }


  static final ParseField FAILED_WRITE_REQUESTS = new ParseField("failed_write_requests");
  private Long _failedWriteRequests;
  public Long getFailedWriteRequests() { return this._failedWriteRequests; }
  public FollowIndexShardStats setFailedWriteRequests(Long val) { this._failedWriteRequests = val; return this; }


  static final ParseField FOLLOWER_GLOBAL_CHECKPOINT = new ParseField("follower_global_checkpoint");
  private Long _followerGlobalCheckpoint;
  public Long getFollowerGlobalCheckpoint() { return this._followerGlobalCheckpoint; }
  public FollowIndexShardStats setFollowerGlobalCheckpoint(Long val) { this._followerGlobalCheckpoint = val; return this; }


  static final ParseField FOLLOWER_INDEX = new ParseField("follower_index");
  private String _followerIndex;
  public String getFollowerIndex() { return this._followerIndex; }
  public FollowIndexShardStats setFollowerIndex(String val) { this._followerIndex = val; return this; }


  static final ParseField FOLLOWER_MAPPING_VERSION = new ParseField("follower_mapping_version");
  private Long _followerMappingVersion;
  public Long getFollowerMappingVersion() { return this._followerMappingVersion; }
  public FollowIndexShardStats setFollowerMappingVersion(Long val) { this._followerMappingVersion = val; return this; }


  static final ParseField FOLLOWER_MAX_SEQ_NO = new ParseField("follower_max_seq_no");
  private Long _followerMaxSeqNo;
  public Long getFollowerMaxSeqNo() { return this._followerMaxSeqNo; }
  public FollowIndexShardStats setFollowerMaxSeqNo(Long val) { this._followerMaxSeqNo = val; return this; }


  static final ParseField FOLLOWER_SETTINGS_VERSION = new ParseField("follower_settings_version");
  private Long _followerSettingsVersion;
  public Long getFollowerSettingsVersion() { return this._followerSettingsVersion; }
  public FollowIndexShardStats setFollowerSettingsVersion(Long val) { this._followerSettingsVersion = val; return this; }


  static final ParseField FOLLOWER_ALIASES_VERSION = new ParseField("follower_aliases_version");
  private Long _followerAliasesVersion;
  public Long getFollowerAliasesVersion() { return this._followerAliasesVersion; }
  public FollowIndexShardStats setFollowerAliasesVersion(Long val) { this._followerAliasesVersion = val; return this; }


  static final ParseField LAST_REQUESTED_SEQ_NO = new ParseField("last_requested_seq_no");
  private Long _lastRequestedSeqNo;
  public Long getLastRequestedSeqNo() { return this._lastRequestedSeqNo; }
  public FollowIndexShardStats setLastRequestedSeqNo(Long val) { this._lastRequestedSeqNo = val; return this; }


  static final ParseField LEADER_GLOBAL_CHECKPOINT = new ParseField("leader_global_checkpoint");
  private Long _leaderGlobalCheckpoint;
  public Long getLeaderGlobalCheckpoint() { return this._leaderGlobalCheckpoint; }
  public FollowIndexShardStats setLeaderGlobalCheckpoint(Long val) { this._leaderGlobalCheckpoint = val; return this; }


  static final ParseField LEADER_INDEX = new ParseField("leader_index");
  private String _leaderIndex;
  public String getLeaderIndex() { return this._leaderIndex; }
  public FollowIndexShardStats setLeaderIndex(String val) { this._leaderIndex = val; return this; }


  static final ParseField LEADER_MAX_SEQ_NO = new ParseField("leader_max_seq_no");
  private Long _leaderMaxSeqNo;
  public Long getLeaderMaxSeqNo() { return this._leaderMaxSeqNo; }
  public FollowIndexShardStats setLeaderMaxSeqNo(Long val) { this._leaderMaxSeqNo = val; return this; }


  static final ParseField OPERATIONS_READ = new ParseField("operations_read");
  private Long _operationsRead;
  public Long getOperationsRead() { return this._operationsRead; }
  public FollowIndexShardStats setOperationsRead(Long val) { this._operationsRead = val; return this; }


  static final ParseField OPERATIONS_WRITTEN = new ParseField("operations_written");
  private Long _operationsWritten;
  public Long getOperationsWritten() { return this._operationsWritten; }
  public FollowIndexShardStats setOperationsWritten(Long val) { this._operationsWritten = val; return this; }


  static final ParseField OUTSTANDING_READ_REQUESTS = new ParseField("outstanding_read_requests");
  private Integer _outstandingReadRequests;
  public Integer getOutstandingReadRequests() { return this._outstandingReadRequests; }
  public FollowIndexShardStats setOutstandingReadRequests(Integer val) { this._outstandingReadRequests = val; return this; }


  static final ParseField OUTSTANDING_WRITE_REQUESTS = new ParseField("outstanding_write_requests");
  private Integer _outstandingWriteRequests;
  public Integer getOutstandingWriteRequests() { return this._outstandingWriteRequests; }
  public FollowIndexShardStats setOutstandingWriteRequests(Integer val) { this._outstandingWriteRequests = val; return this; }


  static final ParseField REMOTE_CLUSTER = new ParseField("remote_cluster");
  private String _remoteCluster;
  public String getRemoteCluster() { return this._remoteCluster; }
  public FollowIndexShardStats setRemoteCluster(String val) { this._remoteCluster = val; return this; }


  static final ParseField SHARD_ID = new ParseField("shard_id");
  private Integer _shardId;
  public Integer getShardId() { return this._shardId; }
  public FollowIndexShardStats setShardId(Integer val) { this._shardId = val; return this; }


  static final ParseField SUCCESSFUL_READ_REQUESTS = new ParseField("successful_read_requests");
  private Long _successfulReadRequests;
  public Long getSuccessfulReadRequests() { return this._successfulReadRequests; }
  public FollowIndexShardStats setSuccessfulReadRequests(Long val) { this._successfulReadRequests = val; return this; }


  static final ParseField SUCCESSFUL_WRITE_REQUESTS = new ParseField("successful_write_requests");
  private Long _successfulWriteRequests;
  public Long getSuccessfulWriteRequests() { return this._successfulWriteRequests; }
  public FollowIndexShardStats setSuccessfulWriteRequests(Long val) { this._successfulWriteRequests = val; return this; }


  static final ParseField TOTAL_READ_REMOTE_EXEC_TIME_MILLIS = new ParseField("total_read_remote_exec_time_millis");
  private Long _totalReadRemoteExecTimeMillis;
  public Long getTotalReadRemoteExecTimeMillis() { return this._totalReadRemoteExecTimeMillis; }
  public FollowIndexShardStats setTotalReadRemoteExecTimeMillis(Long val) { this._totalReadRemoteExecTimeMillis = val; return this; }


  static final ParseField TOTAL_READ_TIME_MILLIS = new ParseField("total_read_time_millis");
  private Long _totalReadTimeMillis;
  public Long getTotalReadTimeMillis() { return this._totalReadTimeMillis; }
  public FollowIndexShardStats setTotalReadTimeMillis(Long val) { this._totalReadTimeMillis = val; return this; }


  static final ParseField TOTAL_WRITE_TIME_MILLIS = new ParseField("total_write_time_millis");
  private Long _totalWriteTimeMillis;
  public Long getTotalWriteTimeMillis() { return this._totalWriteTimeMillis; }
  public FollowIndexShardStats setTotalWriteTimeMillis(Long val) { this._totalWriteTimeMillis = val; return this; }


  static final ParseField WRITE_BUFFER_OPERATION_COUNT = new ParseField("write_buffer_operation_count");
  private Long _writeBufferOperationCount;
  public Long getWriteBufferOperationCount() { return this._writeBufferOperationCount; }
  public FollowIndexShardStats setWriteBufferOperationCount(Long val) { this._writeBufferOperationCount = val; return this; }


  static final ParseField WRITE_BUFFER_SIZE_IN_BYTES = new ParseField("write_buffer_size_in_bytes");
  private Long _writeBufferSizeInBytes;
  public Long getWriteBufferSizeInBytes() { return this._writeBufferSizeInBytes; }
  public FollowIndexShardStats setWriteBufferSizeInBytes(Long val) { this._writeBufferSizeInBytes = val; return this; }


  static final ParseField READ_EXCEPTIONS = new ParseField("read_exceptions");
  private List<FollowIndexReadException> _readExceptions;
  public List<FollowIndexReadException> getReadExceptions() { return this._readExceptions; }
  public FollowIndexShardStats setReadExceptions(List<FollowIndexReadException> val) { this._readExceptions = val; return this; }


  static final ParseField TIME_SINCE_LAST_READ_MILLIS = new ParseField("time_since_last_read_millis");
  private Long _timeSinceLastReadMillis;
  public Long getTimeSinceLastReadMillis() { return this._timeSinceLastReadMillis; }
  public FollowIndexShardStats setTimeSinceLastReadMillis(Long val) { this._timeSinceLastReadMillis = val; return this; }


  static final ParseField FATAL_EXCEPTION = new ParseField("fatal_exception");
  private ErrorCause _fatalException;
  public ErrorCause getFatalException() { return this._fatalException; }
  public FollowIndexShardStats setFatalException(ErrorCause val) { this._fatalException = val; return this; }


  
  @Override
  public XContentBuilder toXContent(XContentBuilder builder, ToXContent.Params params) throws IOException {
    builder.startObject();
    if (_bytesRead != null) {
      builder.field(BYTES_READ.getPreferredName(), _bytesRead);
    }
    if (_failedReadRequests != null) {
      builder.field(FAILED_READ_REQUESTS.getPreferredName(), _failedReadRequests);
    }
    if (_failedWriteRequests != null) {
      builder.field(FAILED_WRITE_REQUESTS.getPreferredName(), _failedWriteRequests);
    }
    if (_followerGlobalCheckpoint != null) {
      builder.field(FOLLOWER_GLOBAL_CHECKPOINT.getPreferredName(), _followerGlobalCheckpoint);
    }
    if (_followerIndex != null) {
      builder.field(FOLLOWER_INDEX.getPreferredName(), _followerIndex);
    }
    if (_followerMappingVersion != null) {
      builder.field(FOLLOWER_MAPPING_VERSION.getPreferredName(), _followerMappingVersion);
    }
    if (_followerMaxSeqNo != null) {
      builder.field(FOLLOWER_MAX_SEQ_NO.getPreferredName(), _followerMaxSeqNo);
    }
    if (_followerSettingsVersion != null) {
      builder.field(FOLLOWER_SETTINGS_VERSION.getPreferredName(), _followerSettingsVersion);
    }
    if (_followerAliasesVersion != null) {
      builder.field(FOLLOWER_ALIASES_VERSION.getPreferredName(), _followerAliasesVersion);
    }
    if (_lastRequestedSeqNo != null) {
      builder.field(LAST_REQUESTED_SEQ_NO.getPreferredName(), _lastRequestedSeqNo);
    }
    if (_leaderGlobalCheckpoint != null) {
      builder.field(LEADER_GLOBAL_CHECKPOINT.getPreferredName(), _leaderGlobalCheckpoint);
    }
    if (_leaderIndex != null) {
      builder.field(LEADER_INDEX.getPreferredName(), _leaderIndex);
    }
    if (_leaderMaxSeqNo != null) {
      builder.field(LEADER_MAX_SEQ_NO.getPreferredName(), _leaderMaxSeqNo);
    }
    if (_operationsRead != null) {
      builder.field(OPERATIONS_READ.getPreferredName(), _operationsRead);
    }
    if (_operationsWritten != null) {
      builder.field(OPERATIONS_WRITTEN.getPreferredName(), _operationsWritten);
    }
    if (_outstandingReadRequests != null) {
      builder.field(OUTSTANDING_READ_REQUESTS.getPreferredName(), _outstandingReadRequests);
    }
    if (_outstandingWriteRequests != null) {
      builder.field(OUTSTANDING_WRITE_REQUESTS.getPreferredName(), _outstandingWriteRequests);
    }
    if (_remoteCluster != null) {
      builder.field(REMOTE_CLUSTER.getPreferredName(), _remoteCluster);
    }
    if (_shardId != null) {
      builder.field(SHARD_ID.getPreferredName(), _shardId);
    }
    if (_successfulReadRequests != null) {
      builder.field(SUCCESSFUL_READ_REQUESTS.getPreferredName(), _successfulReadRequests);
    }
    if (_successfulWriteRequests != null) {
      builder.field(SUCCESSFUL_WRITE_REQUESTS.getPreferredName(), _successfulWriteRequests);
    }
    if (_totalReadRemoteExecTimeMillis != null) {
      builder.field(TOTAL_READ_REMOTE_EXEC_TIME_MILLIS.getPreferredName(), _totalReadRemoteExecTimeMillis);
    }
    if (_totalReadTimeMillis != null) {
      builder.field(TOTAL_READ_TIME_MILLIS.getPreferredName(), _totalReadTimeMillis);
    }
    if (_totalWriteTimeMillis != null) {
      builder.field(TOTAL_WRITE_TIME_MILLIS.getPreferredName(), _totalWriteTimeMillis);
    }
    if (_writeBufferOperationCount != null) {
      builder.field(WRITE_BUFFER_OPERATION_COUNT.getPreferredName(), _writeBufferOperationCount);
    }
    if (_writeBufferSizeInBytes != null) {
      builder.field(WRITE_BUFFER_SIZE_IN_BYTES.getPreferredName(), _writeBufferSizeInBytes);
    }
    if (_readExceptions != null) {
      builder.array(READ_EXCEPTIONS.getPreferredName(), _readExceptions);
    }
    if (_timeSinceLastReadMillis != null) {
      builder.field(TIME_SINCE_LAST_READ_MILLIS.getPreferredName(), _timeSinceLastReadMillis);
    }
    if (_fatalException != null) {
      builder.field(FATAL_EXCEPTION.getPreferredName());
      _fatalException.toXContent(builder, params);
    }
    builder.endObject();
    return builder;
  }

  @Override
  public FollowIndexShardStats fromXContent(XContentParser parser) throws IOException, XContentParseException {
    return FollowIndexShardStats.PARSER.apply(parser, null);
  }

  public static final ObjectParser<FollowIndexShardStats, Void> PARSER =
    new ObjectParser<>(FollowIndexShardStats.class.getName(), false, FollowIndexShardStats::new);

  static {
    PARSER.declareLong(FollowIndexShardStats::setBytesRead, BYTES_READ);
    PARSER.declareLong(FollowIndexShardStats::setFailedReadRequests, FAILED_READ_REQUESTS);
    PARSER.declareLong(FollowIndexShardStats::setFailedWriteRequests, FAILED_WRITE_REQUESTS);
    PARSER.declareLong(FollowIndexShardStats::setFollowerGlobalCheckpoint, FOLLOWER_GLOBAL_CHECKPOINT);
    PARSER.declareString(FollowIndexShardStats::setFollowerIndex, FOLLOWER_INDEX);
    PARSER.declareLong(FollowIndexShardStats::setFollowerMappingVersion, FOLLOWER_MAPPING_VERSION);
    PARSER.declareLong(FollowIndexShardStats::setFollowerMaxSeqNo, FOLLOWER_MAX_SEQ_NO);
    PARSER.declareLong(FollowIndexShardStats::setFollowerSettingsVersion, FOLLOWER_SETTINGS_VERSION);
    PARSER.declareLong(FollowIndexShardStats::setFollowerAliasesVersion, FOLLOWER_ALIASES_VERSION);
    PARSER.declareLong(FollowIndexShardStats::setLastRequestedSeqNo, LAST_REQUESTED_SEQ_NO);
    PARSER.declareLong(FollowIndexShardStats::setLeaderGlobalCheckpoint, LEADER_GLOBAL_CHECKPOINT);
    PARSER.declareString(FollowIndexShardStats::setLeaderIndex, LEADER_INDEX);
    PARSER.declareLong(FollowIndexShardStats::setLeaderMaxSeqNo, LEADER_MAX_SEQ_NO);
    PARSER.declareLong(FollowIndexShardStats::setOperationsRead, OPERATIONS_READ);
    PARSER.declareLong(FollowIndexShardStats::setOperationsWritten, OPERATIONS_WRITTEN);
    PARSER.declareInt(FollowIndexShardStats::setOutstandingReadRequests, OUTSTANDING_READ_REQUESTS);
    PARSER.declareInt(FollowIndexShardStats::setOutstandingWriteRequests, OUTSTANDING_WRITE_REQUESTS);
    PARSER.declareString(FollowIndexShardStats::setRemoteCluster, REMOTE_CLUSTER);
    PARSER.declareInt(FollowIndexShardStats::setShardId, SHARD_ID);
    PARSER.declareLong(FollowIndexShardStats::setSuccessfulReadRequests, SUCCESSFUL_READ_REQUESTS);
    PARSER.declareLong(FollowIndexShardStats::setSuccessfulWriteRequests, SUCCESSFUL_WRITE_REQUESTS);
    PARSER.declareLong(FollowIndexShardStats::setTotalReadRemoteExecTimeMillis, TOTAL_READ_REMOTE_EXEC_TIME_MILLIS);
    PARSER.declareLong(FollowIndexShardStats::setTotalReadTimeMillis, TOTAL_READ_TIME_MILLIS);
    PARSER.declareLong(FollowIndexShardStats::setTotalWriteTimeMillis, TOTAL_WRITE_TIME_MILLIS);
    PARSER.declareLong(FollowIndexShardStats::setWriteBufferOperationCount, WRITE_BUFFER_OPERATION_COUNT);
    PARSER.declareLong(FollowIndexShardStats::setWriteBufferSizeInBytes, WRITE_BUFFER_SIZE_IN_BYTES);
    PARSER.declareObjectArray(FollowIndexShardStats::setReadExceptions, (p, t) -> FollowIndexReadException.PARSER.apply(p, t), READ_EXCEPTIONS);
    PARSER.declareLong(FollowIndexShardStats::setTimeSinceLastReadMillis, TIME_SINCE_LAST_READ_MILLIS);
    PARSER.declareObject(FollowIndexShardStats::setFatalException, (p, t) -> ErrorCause.PARSER.apply(p, t), FATAL_EXCEPTION);
  }

}
