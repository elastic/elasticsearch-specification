using Nest.Internal;
using Nest.XPack;
using System;
using System.Collections.Generic;
using System.Runtime.Serialization;
namespace Nest.XPack {

	public class FollowIndexShardStats  {
		
		[DataMember(Name="bytes_read")]
		public long BytesRead { get; set; }


		[DataMember(Name="failed_read_requests")]
		public long FailedReadRequests { get; set; }


		[DataMember(Name="failed_write_requests")]
		public long FailedWriteRequests { get; set; }


		[DataMember(Name="fatal_exception")]
		public ErrorCause FatalException { get; set; }


		[DataMember(Name="follower_aliases_version")]
		public long FollowerAliasesVersion { get; set; }


		[DataMember(Name="follower_global_checkpoint")]
		public long FollowerGlobalCheckpoint { get; set; }


		[DataMember(Name="follower_index")]
		public string FollowerIndex { get; set; }


		[DataMember(Name="follower_mapping_version")]
		public long FollowerMappingVersion { get; set; }


		[DataMember(Name="follower_max_seq_no")]
		public long FollowerMaxSeqNo { get; set; }


		[DataMember(Name="follower_settings_version")]
		public long FollowerSettingsVersion { get; set; }


		[DataMember(Name="last_requested_seq_no")]
		public long LastRequestedSeqNo { get; set; }


		[DataMember(Name="leader_global_checkpoint")]
		public long LeaderGlobalCheckpoint { get; set; }


		[DataMember(Name="leader_index")]
		public string LeaderIndex { get; set; }


		[DataMember(Name="leader_max_seq_no")]
		public long LeaderMaxSeqNo { get; set; }


		[DataMember(Name="operations_read")]
		public long OperationsRead { get; set; }


		[DataMember(Name="operations_written")]
		public long OperationsWritten { get; set; }


		[DataMember(Name="outstanding_read_requests")]
		public int OutstandingReadRequests { get; set; }


		[DataMember(Name="outstanding_write_requests")]
		public int OutstandingWriteRequests { get; set; }


		[DataMember(Name="read_exceptions")]
		public List<FollowIndexReadException> ReadExceptions { get; set; }


		[DataMember(Name="remote_cluster")]
		public string RemoteCluster { get; set; }


		[DataMember(Name="shard_id")]
		public int ShardId { get; set; }


		[DataMember(Name="successful_read_requests")]
		public long SuccessfulReadRequests { get; set; }


		[DataMember(Name="successful_write_requests")]
		public long SuccessfulWriteRequests { get; set; }


		[DataMember(Name="time_since_last_read_millis")]
		public long TimeSinceLastReadMillis { get; set; }


		[DataMember(Name="total_read_remote_exec_time_millis")]
		public long TotalReadRemoteExecTimeMillis { get; set; }


		[DataMember(Name="total_read_time_millis")]
		public long TotalReadTimeMillis { get; set; }


		[DataMember(Name="total_write_time_millis")]
		public long TotalWriteTimeMillis { get; set; }


		[DataMember(Name="write_buffer_operation_count")]
		public long WriteBufferOperationCount { get; set; }


		[DataMember(Name="write_buffer_size_in_bytes")]
		public long WriteBufferSizeInBytes { get; set; }

	}
}
