using Nest.Internal;
using Nest.CommonOptions;
using System;
using System.Collections.Generic;
using System.Runtime.Serialization;
namespace Nest.XPack {

	public class AutoFollowPattern  {
		
		[DataMember(Name="follow_index_pattern")]
		public string FollowIndexPattern { get; set; }


		[DataMember(Name="leader_index_patterns")]
		public List<string> LeaderIndexPatterns { get; set; }


		[DataMember(Name="max_outstanding_read_requests")]
		public long MaxOutstandingReadRequests { get; set; }


		[DataMember(Name="max_outstanding_write_requests")]
		public int MaxOutstandingWriteRequests { get; set; }


		[DataMember(Name="read_poll_timeout")]
		public Time ReadPollTimeout { get; set; }


		[DataMember(Name="max_read_request_operation_count")]
		public int MaxReadRequestOperationCount { get; set; }


		[DataMember(Name="max_read_request_size")]
		public string MaxReadRequestSize { get; set; }


		[DataMember(Name="max_retry_delay")]
		public Time MaxRetryDelay { get; set; }


		[DataMember(Name="max_write_buffer_count")]
		public int MaxWriteBufferCount { get; set; }


		[DataMember(Name="max_write_buffer_size")]
		public string MaxWriteBufferSize { get; set; }


		[DataMember(Name="max_write_request_operation_count")]
		public int MaxWriteRequestOperationCount { get; set; }


		[DataMember(Name="max_write_request_size")]
		public string MaxWriteRequestSize { get; set; }


		[DataMember(Name="remote_cluster")]
		public string RemoteCluster { get; set; }

	}
}
