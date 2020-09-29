
package org.elasticsearch.x_pack.cross_cluster_replication.follow.follow_index_stats;

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
import org.elasticsearch.x_pack.cross_cluster_replication.follow.follow_index_stats.*;

public class FollowIndexShardStats  implements XContentable<FollowIndexShardStats> {
  
  static final ParseField BYTES_READ = new ParseField("bytes_read");
  private long _bytesRead;
  private boolean _bytesRead$isSet;
  public long getBytesRead() { return this._bytesRead; }
  public FollowIndexShardStats setBytesRead(long val) {
    this._bytesRead = val;
    _bytesRead$isSet = true;
    return this;
  }

  static final ParseField FAILED_READ_REQUESTS = new ParseField("failed_read_requests");
  private long _failedReadRequests;
  private boolean _failedReadRequests$isSet;
  public long getFailedReadRequests() { return this._failedReadRequests; }
  public FollowIndexShardStats setFailedReadRequests(long val) {
    this._failedReadRequests = val;
    _failedReadRequests$isSet = true;
    return this;
  }

  static final ParseField FAILED_WRITE_REQUESTS = new ParseField("failed_write_requests");
  private long _failedWriteRequests;
  private boolean _failedWriteRequests$isSet;
  public long getFailedWriteRequests() { return this._failedWriteRequests; }
  public FollowIndexShardStats setFailedWriteRequests(long val) {
    this._failedWriteRequests = val;
    _failedWriteRequests$isSet = true;
    return this;
  }

  static final ParseField FATAL_EXCEPTION = new ParseField("fatal_exception");
  private ErrorCause _fatalException;
  public ErrorCause getFatalException() { return this._fatalException; }
  public FollowIndexShardStats setFatalException(ErrorCause val) { this._fatalException = val; return this; }

  static final ParseField FOLLOWER_ALIASES_VERSION = new ParseField("follower_aliases_version");
  private long _followerAliasesVersion;
  private boolean _followerAliasesVersion$isSet;
  public long getFollowerAliasesVersion() { return this._followerAliasesVersion; }
  public FollowIndexShardStats setFollowerAliasesVersion(long val) {
    this._followerAliasesVersion = val;
    _followerAliasesVersion$isSet = true;
    return this;
  }

  static final ParseField FOLLOWER_GLOBAL_CHECKPOINT = new ParseField("follower_global_checkpoint");
  private long _followerGlobalCheckpoint;
  private boolean _followerGlobalCheckpoint$isSet;
  public long getFollowerGlobalCheckpoint() { return this._followerGlobalCheckpoint; }
  public FollowIndexShardStats setFollowerGlobalCheckpoint(long val) {
    this._followerGlobalCheckpoint = val;
    _followerGlobalCheckpoint$isSet = true;
    return this;
  }

  static final ParseField FOLLOWER_INDEX = new ParseField("follower_index");
  private String _followerIndex;
  public String getFollowerIndex() { return this._followerIndex; }
  public FollowIndexShardStats setFollowerIndex(String val) { this._followerIndex = val; return this; }

  static final ParseField FOLLOWER_MAPPING_VERSION = new ParseField("follower_mapping_version");
  private long _followerMappingVersion;
  private boolean _followerMappingVersion$isSet;
  public long getFollowerMappingVersion() { return this._followerMappingVersion; }
  public FollowIndexShardStats setFollowerMappingVersion(long val) {
    this._followerMappingVersion = val;
    _followerMappingVersion$isSet = true;
    return this;
  }

  static final ParseField FOLLOWER_MAX_SEQ_NO = new ParseField("follower_max_seq_no");
  private long _followerMaxSeqNo;
  private boolean _followerMaxSeqNo$isSet;
  public long getFollowerMaxSeqNo() { return this._followerMaxSeqNo; }
  public FollowIndexShardStats setFollowerMaxSeqNo(long val) {
    this._followerMaxSeqNo = val;
    _followerMaxSeqNo$isSet = true;
    return this;
  }

  static final ParseField FOLLOWER_SETTINGS_VERSION = new ParseField("follower_settings_version");
  private long _followerSettingsVersion;
  private boolean _followerSettingsVersion$isSet;
  public long getFollowerSettingsVersion() { return this._followerSettingsVersion; }
  public FollowIndexShardStats setFollowerSettingsVersion(long val) {
    this._followerSettingsVersion = val;
    _followerSettingsVersion$isSet = true;
    return this;
  }

  static final ParseField LAST_REQUESTED_SEQ_NO = new ParseField("last_requested_seq_no");
  private long _lastRequestedSeqNo;
  private boolean _lastRequestedSeqNo$isSet;
  public long getLastRequestedSeqNo() { return this._lastRequestedSeqNo; }
  public FollowIndexShardStats setLastRequestedSeqNo(long val) {
    this._lastRequestedSeqNo = val;
    _lastRequestedSeqNo$isSet = true;
    return this;
  }

  static final ParseField LEADER_GLOBAL_CHECKPOINT = new ParseField("leader_global_checkpoint");
  private long _leaderGlobalCheckpoint;
  private boolean _leaderGlobalCheckpoint$isSet;
  public long getLeaderGlobalCheckpoint() { return this._leaderGlobalCheckpoint; }
  public FollowIndexShardStats setLeaderGlobalCheckpoint(long val) {
    this._leaderGlobalCheckpoint = val;
    _leaderGlobalCheckpoint$isSet = true;
    return this;
  }

  static final ParseField LEADER_INDEX = new ParseField("leader_index");
  private String _leaderIndex;
  public String getLeaderIndex() { return this._leaderIndex; }
  public FollowIndexShardStats setLeaderIndex(String val) { this._leaderIndex = val; return this; }

  static final ParseField LEADER_MAX_SEQ_NO = new ParseField("leader_max_seq_no");
  private long _leaderMaxSeqNo;
  private boolean _leaderMaxSeqNo$isSet;
  public long getLeaderMaxSeqNo() { return this._leaderMaxSeqNo; }
  public FollowIndexShardStats setLeaderMaxSeqNo(long val) {
    this._leaderMaxSeqNo = val;
    _leaderMaxSeqNo$isSet = true;
    return this;
  }

  static final ParseField OPERATIONS_READ = new ParseField("operations_read");
  private long _operationsRead;
  private boolean _operationsRead$isSet;
  public long getOperationsRead() { return this._operationsRead; }
  public FollowIndexShardStats setOperationsRead(long val) {
    this._operationsRead = val;
    _operationsRead$isSet = true;
    return this;
  }

  static final ParseField OPERATIONS_WRITTEN = new ParseField("operations_written");
  private long _operationsWritten;
  private boolean _operationsWritten$isSet;
  public long getOperationsWritten() { return this._operationsWritten; }
  public FollowIndexShardStats setOperationsWritten(long val) {
    this._operationsWritten = val;
    _operationsWritten$isSet = true;
    return this;
  }

  static final ParseField OUTSTANDING_READ_REQUESTS = new ParseField("outstanding_read_requests");
  private int _outstandingReadRequests;
  private boolean _outstandingReadRequests$isSet;
  public int getOutstandingReadRequests() { return this._outstandingReadRequests; }
  public FollowIndexShardStats setOutstandingReadRequests(int val) {
    this._outstandingReadRequests = val;
    _outstandingReadRequests$isSet = true;
    return this;
  }

  static final ParseField OUTSTANDING_WRITE_REQUESTS = new ParseField("outstanding_write_requests");
  private int _outstandingWriteRequests;
  private boolean _outstandingWriteRequests$isSet;
  public int getOutstandingWriteRequests() { return this._outstandingWriteRequests; }
  public FollowIndexShardStats setOutstandingWriteRequests(int val) {
    this._outstandingWriteRequests = val;
    _outstandingWriteRequests$isSet = true;
    return this;
  }

  static final ParseField READ_EXCEPTIONS = new ParseField("read_exceptions");
  private List<FollowIndexReadException> _readExceptions;
  public List<FollowIndexReadException> getReadExceptions() { return this._readExceptions; }
  public FollowIndexShardStats setReadExceptions(List<FollowIndexReadException> val) { this._readExceptions = val; return this; }

  static final ParseField REMOTE_CLUSTER = new ParseField("remote_cluster");
  private String _remoteCluster;
  public String getRemoteCluster() { return this._remoteCluster; }
  public FollowIndexShardStats setRemoteCluster(String val) { this._remoteCluster = val; return this; }

  static final ParseField SHARD_ID = new ParseField("shard_id");
  private int _shardId;
  private boolean _shardId$isSet;
  public int getShardId() { return this._shardId; }
  public FollowIndexShardStats setShardId(int val) {
    this._shardId = val;
    _shardId$isSet = true;
    return this;
  }

  static final ParseField SUCCESSFUL_READ_REQUESTS = new ParseField("successful_read_requests");
  private long _successfulReadRequests;
  private boolean _successfulReadRequests$isSet;
  public long getSuccessfulReadRequests() { return this._successfulReadRequests; }
  public FollowIndexShardStats setSuccessfulReadRequests(long val) {
    this._successfulReadRequests = val;
    _successfulReadRequests$isSet = true;
    return this;
  }

  static final ParseField SUCCESSFUL_WRITE_REQUESTS = new ParseField("successful_write_requests");
  private long _successfulWriteRequests;
  private boolean _successfulWriteRequests$isSet;
  public long getSuccessfulWriteRequests() { return this._successfulWriteRequests; }
  public FollowIndexShardStats setSuccessfulWriteRequests(long val) {
    this._successfulWriteRequests = val;
    _successfulWriteRequests$isSet = true;
    return this;
  }

  static final ParseField TIME_SINCE_LAST_READ_MILLIS = new ParseField("time_since_last_read_millis");
  private long _timeSinceLastReadMillis;
  private boolean _timeSinceLastReadMillis$isSet;
  public long getTimeSinceLastReadMillis() { return this._timeSinceLastReadMillis; }
  public FollowIndexShardStats setTimeSinceLastReadMillis(long val) {
    this._timeSinceLastReadMillis = val;
    _timeSinceLastReadMillis$isSet = true;
    return this;
  }

  static final ParseField TOTAL_READ_REMOTE_EXEC_TIME_MILLIS = new ParseField("total_read_remote_exec_time_millis");
  private long _totalReadRemoteExecTimeMillis;
  private boolean _totalReadRemoteExecTimeMillis$isSet;
  public long getTotalReadRemoteExecTimeMillis() { return this._totalReadRemoteExecTimeMillis; }
  public FollowIndexShardStats setTotalReadRemoteExecTimeMillis(long val) {
    this._totalReadRemoteExecTimeMillis = val;
    _totalReadRemoteExecTimeMillis$isSet = true;
    return this;
  }

  static final ParseField TOTAL_READ_TIME_MILLIS = new ParseField("total_read_time_millis");
  private long _totalReadTimeMillis;
  private boolean _totalReadTimeMillis$isSet;
  public long getTotalReadTimeMillis() { return this._totalReadTimeMillis; }
  public FollowIndexShardStats setTotalReadTimeMillis(long val) {
    this._totalReadTimeMillis = val;
    _totalReadTimeMillis$isSet = true;
    return this;
  }

  static final ParseField TOTAL_WRITE_TIME_MILLIS = new ParseField("total_write_time_millis");
  private long _totalWriteTimeMillis;
  private boolean _totalWriteTimeMillis$isSet;
  public long getTotalWriteTimeMillis() { return this._totalWriteTimeMillis; }
  public FollowIndexShardStats setTotalWriteTimeMillis(long val) {
    this._totalWriteTimeMillis = val;
    _totalWriteTimeMillis$isSet = true;
    return this;
  }

  static final ParseField WRITE_BUFFER_OPERATION_COUNT = new ParseField("write_buffer_operation_count");
  private long _writeBufferOperationCount;
  private boolean _writeBufferOperationCount$isSet;
  public long getWriteBufferOperationCount() { return this._writeBufferOperationCount; }
  public FollowIndexShardStats setWriteBufferOperationCount(long val) {
    this._writeBufferOperationCount = val;
    _writeBufferOperationCount$isSet = true;
    return this;
  }

  static final ParseField WRITE_BUFFER_SIZE_IN_BYTES = new ParseField("write_buffer_size_in_bytes");
  private long _writeBufferSizeInBytes;
  private boolean _writeBufferSizeInBytes$isSet;
  public long getWriteBufferSizeInBytes() { return this._writeBufferSizeInBytes; }
  public FollowIndexShardStats setWriteBufferSizeInBytes(long val) {
    this._writeBufferSizeInBytes = val;
    _writeBufferSizeInBytes$isSet = true;
    return this;
  }


  
  @Override
  public void toXContentInternal(XContentBuilder builder, ToXContent.Params params) throws IOException {
    
    if (_bytesRead$isSet) {
      builder.field(BYTES_READ.getPreferredName(), _bytesRead);
    }
    if (_failedReadRequests$isSet) {
      builder.field(FAILED_READ_REQUESTS.getPreferredName(), _failedReadRequests);
    }
    if (_failedWriteRequests$isSet) {
      builder.field(FAILED_WRITE_REQUESTS.getPreferredName(), _failedWriteRequests);
    }
    if (_fatalException != null) {
      builder.field(FATAL_EXCEPTION.getPreferredName());
      _fatalException.toXContent(builder, params);
    }
    if (_followerAliasesVersion$isSet) {
      builder.field(FOLLOWER_ALIASES_VERSION.getPreferredName(), _followerAliasesVersion);
    }
    if (_followerGlobalCheckpoint$isSet) {
      builder.field(FOLLOWER_GLOBAL_CHECKPOINT.getPreferredName(), _followerGlobalCheckpoint);
    }
    if (_followerIndex != null) {
      builder.field(FOLLOWER_INDEX.getPreferredName(), _followerIndex);
    }
    if (_followerMappingVersion$isSet) {
      builder.field(FOLLOWER_MAPPING_VERSION.getPreferredName(), _followerMappingVersion);
    }
    if (_followerMaxSeqNo$isSet) {
      builder.field(FOLLOWER_MAX_SEQ_NO.getPreferredName(), _followerMaxSeqNo);
    }
    if (_followerSettingsVersion$isSet) {
      builder.field(FOLLOWER_SETTINGS_VERSION.getPreferredName(), _followerSettingsVersion);
    }
    if (_lastRequestedSeqNo$isSet) {
      builder.field(LAST_REQUESTED_SEQ_NO.getPreferredName(), _lastRequestedSeqNo);
    }
    if (_leaderGlobalCheckpoint$isSet) {
      builder.field(LEADER_GLOBAL_CHECKPOINT.getPreferredName(), _leaderGlobalCheckpoint);
    }
    if (_leaderIndex != null) {
      builder.field(LEADER_INDEX.getPreferredName(), _leaderIndex);
    }
    if (_leaderMaxSeqNo$isSet) {
      builder.field(LEADER_MAX_SEQ_NO.getPreferredName(), _leaderMaxSeqNo);
    }
    if (_operationsRead$isSet) {
      builder.field(OPERATIONS_READ.getPreferredName(), _operationsRead);
    }
    if (_operationsWritten$isSet) {
      builder.field(OPERATIONS_WRITTEN.getPreferredName(), _operationsWritten);
    }
    if (_outstandingReadRequests$isSet) {
      builder.field(OUTSTANDING_READ_REQUESTS.getPreferredName(), _outstandingReadRequests);
    }
    if (_outstandingWriteRequests$isSet) {
      builder.field(OUTSTANDING_WRITE_REQUESTS.getPreferredName(), _outstandingWriteRequests);
    }
    if (_readExceptions != null) {
      builder.array(READ_EXCEPTIONS.getPreferredName(), _readExceptions);
    }
    if (_remoteCluster != null) {
      builder.field(REMOTE_CLUSTER.getPreferredName(), _remoteCluster);
    }
    if (_shardId$isSet) {
      builder.field(SHARD_ID.getPreferredName(), _shardId);
    }
    if (_successfulReadRequests$isSet) {
      builder.field(SUCCESSFUL_READ_REQUESTS.getPreferredName(), _successfulReadRequests);
    }
    if (_successfulWriteRequests$isSet) {
      builder.field(SUCCESSFUL_WRITE_REQUESTS.getPreferredName(), _successfulWriteRequests);
    }
    if (_timeSinceLastReadMillis$isSet) {
      builder.field(TIME_SINCE_LAST_READ_MILLIS.getPreferredName(), _timeSinceLastReadMillis);
    }
    if (_totalReadRemoteExecTimeMillis$isSet) {
      builder.field(TOTAL_READ_REMOTE_EXEC_TIME_MILLIS.getPreferredName(), _totalReadRemoteExecTimeMillis);
    }
    if (_totalReadTimeMillis$isSet) {
      builder.field(TOTAL_READ_TIME_MILLIS.getPreferredName(), _totalReadTimeMillis);
    }
    if (_totalWriteTimeMillis$isSet) {
      builder.field(TOTAL_WRITE_TIME_MILLIS.getPreferredName(), _totalWriteTimeMillis);
    }
    if (_writeBufferOperationCount$isSet) {
      builder.field(WRITE_BUFFER_OPERATION_COUNT.getPreferredName(), _writeBufferOperationCount);
    }
    if (_writeBufferSizeInBytes$isSet) {
      builder.field(WRITE_BUFFER_SIZE_IN_BYTES.getPreferredName(), _writeBufferSizeInBytes);
    }
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
    PARSER.declareObject(FollowIndexShardStats::setFatalException, (p, t) -> ErrorCause.PARSER.apply(p, t), FATAL_EXCEPTION);
    PARSER.declareLong(FollowIndexShardStats::setFollowerAliasesVersion, FOLLOWER_ALIASES_VERSION);
    PARSER.declareLong(FollowIndexShardStats::setFollowerGlobalCheckpoint, FOLLOWER_GLOBAL_CHECKPOINT);
    PARSER.declareString(FollowIndexShardStats::setFollowerIndex, FOLLOWER_INDEX);
    PARSER.declareLong(FollowIndexShardStats::setFollowerMappingVersion, FOLLOWER_MAPPING_VERSION);
    PARSER.declareLong(FollowIndexShardStats::setFollowerMaxSeqNo, FOLLOWER_MAX_SEQ_NO);
    PARSER.declareLong(FollowIndexShardStats::setFollowerSettingsVersion, FOLLOWER_SETTINGS_VERSION);
    PARSER.declareLong(FollowIndexShardStats::setLastRequestedSeqNo, LAST_REQUESTED_SEQ_NO);
    PARSER.declareLong(FollowIndexShardStats::setLeaderGlobalCheckpoint, LEADER_GLOBAL_CHECKPOINT);
    PARSER.declareString(FollowIndexShardStats::setLeaderIndex, LEADER_INDEX);
    PARSER.declareLong(FollowIndexShardStats::setLeaderMaxSeqNo, LEADER_MAX_SEQ_NO);
    PARSER.declareLong(FollowIndexShardStats::setOperationsRead, OPERATIONS_READ);
    PARSER.declareLong(FollowIndexShardStats::setOperationsWritten, OPERATIONS_WRITTEN);
    PARSER.declareInt(FollowIndexShardStats::setOutstandingReadRequests, OUTSTANDING_READ_REQUESTS);
    PARSER.declareInt(FollowIndexShardStats::setOutstandingWriteRequests, OUTSTANDING_WRITE_REQUESTS);
    PARSER.declareObjectArray(FollowIndexShardStats::setReadExceptions, (p, t) -> FollowIndexReadException.PARSER.apply(p, t), READ_EXCEPTIONS);
    PARSER.declareString(FollowIndexShardStats::setRemoteCluster, REMOTE_CLUSTER);
    PARSER.declareInt(FollowIndexShardStats::setShardId, SHARD_ID);
    PARSER.declareLong(FollowIndexShardStats::setSuccessfulReadRequests, SUCCESSFUL_READ_REQUESTS);
    PARSER.declareLong(FollowIndexShardStats::setSuccessfulWriteRequests, SUCCESSFUL_WRITE_REQUESTS);
    PARSER.declareLong(FollowIndexShardStats::setTimeSinceLastReadMillis, TIME_SINCE_LAST_READ_MILLIS);
    PARSER.declareLong(FollowIndexShardStats::setTotalReadRemoteExecTimeMillis, TOTAL_READ_REMOTE_EXEC_TIME_MILLIS);
    PARSER.declareLong(FollowIndexShardStats::setTotalReadTimeMillis, TOTAL_READ_TIME_MILLIS);
    PARSER.declareLong(FollowIndexShardStats::setTotalWriteTimeMillis, TOTAL_WRITE_TIME_MILLIS);
    PARSER.declareLong(FollowIndexShardStats::setWriteBufferOperationCount, WRITE_BUFFER_OPERATION_COUNT);
    PARSER.declareLong(FollowIndexShardStats::setWriteBufferSizeInBytes, WRITE_BUFFER_SIZE_IN_BYTES);
  }

}
