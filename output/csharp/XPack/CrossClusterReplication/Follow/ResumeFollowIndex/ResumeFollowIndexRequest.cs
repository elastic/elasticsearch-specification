using Nest.Internal;
using Nest.CommonOptions;
using Nest.CommonAbstractions;
using System;
using System.Collections.Generic;
using System.Runtime.Serialization;
namespace Nest.XPack {

	public class ResumeFollowIndexRequest : RequestBase {
		
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

	}
}
