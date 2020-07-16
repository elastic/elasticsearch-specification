using Nest.Ingest;
using System;
using System.Collections.Generic;
using System.Runtime.Serialization;
namespace Nest.Ingest {

	public class PipelineSimulation  {
		
		[DataMember(Name="doc")]
		public DocumentSimulation Doc { get; set; }


		[DataMember(Name="processor_results")]
		public List<PipelineSimulation> ProcessorResults { get; set; }


		[DataMember(Name="tag")]
		public string Tag { get; set; }

	}
}
