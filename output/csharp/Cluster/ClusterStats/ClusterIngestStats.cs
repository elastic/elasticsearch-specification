using Nest.Internal;
using Nest.Cluster;
using System;
using System.Collections.Generic;
using System.Runtime.Serialization;
namespace Nest.Cluster {

	public class ClusterIngestStats  {
		
		[DataMember(Name="number_of_pipelines")]
		public int NumberOfPipelines { get; set; }


		[DataMember(Name="processor_stats")]
		public IDictionary<string, ClusterProcessorStats> ProcessorStats { get; set; }

	}
}
