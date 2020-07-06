using Nest.CommonAbstractions;
using Nest.Internal;
using Nest.CommonOptions;
using System;
using System.Collections.Generic;
using System.Runtime.Serialization;
namespace Nest.XPack {

	public class CreateFollowIndexRequest : RequestBase {
		
		[DataMember(Name="wait_for_active_shards")]
		public string WaitForActiveShards { get; set; }


		[DataMember(Name="leader_index")]
		public IndexName LeaderIndex { get; set; }


		[DataMember(Name="max_outstanding_read_requests")]
		public long MaxOutstandingReadRequests { get; set; }


		[DataMember(Name="max_outstanding_write_requests")]
		public long MaxOutstandingWriteRequests { get; set; }


		[DataMember(Name="max_read_request_operation_count")]
		public long MaxReadRequestOperationCount { get; set; }


		[DataMember(Name="max_read_request_size")]
		public string MaxReadRequestSize { get; set; }


		[DataMember(Name="max_retry_delay")]
		public Time MaxRetryDelay { get; set; }


		[DataMember(Name="max_write_buffer_count")]
		public long MaxWriteBufferCount { get; set; }


		[DataMember(Name="max_write_buffer_size")]
		public string MaxWriteBufferSize { get; set; }


		[DataMember(Name="max_write_request_operation_count")]
		public long MaxWriteRequestOperationCount { get; set; }


		[DataMember(Name="max_write_request_size")]
		public string MaxWriteRequestSize { get; set; }


		[DataMember(Name="read_poll_timeout")]
		public Time ReadPollTimeout { get; set; }


		[DataMember(Name="remote_cluster")]
		public string RemoteCluster { get; set; }

	}
}
