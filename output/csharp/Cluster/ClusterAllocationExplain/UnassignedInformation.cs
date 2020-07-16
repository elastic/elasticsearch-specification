using Nest.Internal;
using Nest.Cluster;
using System;
using System.Collections.Generic;
using System.Runtime.Serialization;
namespace Nest.Cluster {

	public class UnassignedInformation  {
		
		[DataMember(Name="at")]
		public DateTimeOffset At { get; set; }


		[DataMember(Name="last_allocation_status")]
		public string LastAllocationStatus { get; set; }


		[DataMember(Name="reason")]
		public UnassignedInformationReason Reason { get; set; }

	}
}
