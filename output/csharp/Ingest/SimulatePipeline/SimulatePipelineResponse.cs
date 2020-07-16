using Nest.Ingest;
using Nest.CommonAbstractions;
using System;
using System.Collections.Generic;
using System.Runtime.Serialization;
namespace Nest.Ingest {

	public class SimulatePipelineResponse : IResponse {
		
		[DataMember(Name="docs")]
		public List<PipelineSimulation> Docs { get; set; }

	}
}
