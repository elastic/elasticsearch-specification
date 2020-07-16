using Nest.Ingest;
using Nest.CommonAbstractions;
using System;
using System.Collections.Generic;
using System.Runtime.Serialization;
namespace Nest.Ingest {

	public class SimulatePipelineRequest : RequestBase {
		
		[DataMember(Name="verbose")]
		public bool Verbose { get; set; }


		[DataMember(Name="docs")]
		public List<SimulatePipelineDocument> Docs { get; set; }


		[DataMember(Name="pipeline")]
		public Pipeline Pipeline { get; set; }

	}
}
