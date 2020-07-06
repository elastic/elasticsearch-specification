using Nest.Cluster;
using System;
using System.Collections.Generic;
using System.Runtime.Serialization;
namespace Nest.Cluster {

	public class NodeIngestStats  {
		
		[DataMember(Name="pipelines")]
		public IDictionary<string, IngestStats> Pipelines { get; set; }


		[DataMember(Name="total")]
		public IngestStats Total { get; set; }

	}
}
