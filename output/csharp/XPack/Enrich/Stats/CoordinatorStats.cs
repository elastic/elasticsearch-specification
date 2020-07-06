using Nest.Internal;
using System;
using System.Collections.Generic;
using System.Runtime.Serialization;
namespace Nest.XPack {

	public class CoordinatorStats  {
		
		[DataMember(Name="executed_searches_total")]
		public long ExecutedSearchesTotal { get; set; }


		[DataMember(Name="node_id")]
		public string NodeId { get; set; }


		[DataMember(Name="queue_size")]
		public int QueueSize { get; set; }


		[DataMember(Name="remote_requests_current")]
		public int RemoteRequestsCurrent { get; set; }


		[DataMember(Name="remote_requests_total")]
		public long RemoteRequestsTotal { get; set; }

	}
}
