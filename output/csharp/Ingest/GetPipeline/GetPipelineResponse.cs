using Nest.Ingest;
using Nest.CommonAbstractions;
using System;
using System.Collections.Generic;
using System.Runtime.Serialization;
namespace Nest.Ingest {

	public class GetPipelineResponse : DictionaryResponseBase<string, Pipeline> {
		
		[DataMember(Name="pipelines")]
		public IDictionary<string, Pipeline> Pipelines { get; set; }

	}
}
