using Nest.Cluster;
using System;
using System.Collections.Generic;
using System.Runtime.Serialization;
namespace Nest.Cluster {

	public class KeyedProcessorStats  {
		
		[DataMember(Name="statistics")]
		public ProcessStats Statistics { get; set; }


		[DataMember(Name="type")]
		public string Type { get; set; }

	}
}
