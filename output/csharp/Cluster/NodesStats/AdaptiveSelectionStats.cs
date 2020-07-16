using Nest.Internal;
using System;
using System.Collections.Generic;
using System.Runtime.Serialization;
namespace Nest.Cluster {

	public class AdaptiveSelectionStats  {
		
		[DataMember(Name="avg_queue_size")]
		public long AvgQueueSize { get; set; }


		[DataMember(Name="avg_response_time")]
		public long AvgResponseTime { get; set; }


		[DataMember(Name="avg_response_time_ns")]
		public long AvgResponseTimeNs { get; set; }


		[DataMember(Name="avg_service_time")]
		public string AvgServiceTime { get; set; }


		[DataMember(Name="avg_service_time_ns")]
		public long AvgServiceTimeNs { get; set; }


		[DataMember(Name="outgoing_searches")]
		public long OutgoingSearches { get; set; }


		[DataMember(Name="rank")]
		public string Rank { get; set; }

	}
}
