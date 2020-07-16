using Nest.Internal;
using Nest.Cluster;
using System;
using System.Collections.Generic;
using System.Runtime.Serialization;
namespace Nest.Cluster {

	public class IngestStats  {
		
		[DataMember(Name="count")]
		public long Count { get; set; }


		[DataMember(Name="current")]
		public long Current { get; set; }


		[DataMember(Name="failed")]
		public long Failed { get; set; }


		[DataMember(Name="processors")]
		public List<KeyedProcessorStats> Processors { get; set; }


		[DataMember(Name="time_in_millis")]
		public long TimeInMillis { get; set; }

	}
}
