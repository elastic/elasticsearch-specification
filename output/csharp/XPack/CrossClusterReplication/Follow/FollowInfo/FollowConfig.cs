using Nest.Internal;
using Nest.CommonOptions;
using System;
using System.Collections.Generic;
using System.Runtime.Serialization;
namespace Nest.XPack {

	public class FollowConfig  {
		
		[DataMember(Name="max_outstanding_read_requests")]
		public int MaxOutstandingReadRequests { get; set; }


		[DataMember(Name="max_outstanding_write_requests")]
		public int MaxOutstandingWriteRequests { get; set; }


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


		[DataMember(Name="read_poll_timeout")]
		public Time ReadPollTimeout { get; set; }

	}
}
