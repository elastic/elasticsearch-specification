using Nest.XPack;
using System;
using System.Collections.Generic;
using System.Runtime.Serialization;
namespace Nest.XPack {

	public class DatafeedStats  {
		
		[DataMember(Name="assignment_explanation")]
		public string AssignmentExplanation { get; set; }


		[DataMember(Name="datafeed_id")]
		public string DatafeedId { get; set; }


		[DataMember(Name="node")]
		public DiscoveryNode Node { get; set; }


		[DataMember(Name="state")]
		public DatafeedState State { get; set; }


		[DataMember(Name="timing_stats")]
		public DatafeedTimingStats TimingStats { get; set; }

	}
}
