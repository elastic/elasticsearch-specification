using Nest.CommonAbstractions;
using System;
using System.Collections.Generic;
using System.Runtime.Serialization;
namespace Nest.Ingest {

	public class GrokProcessorPatternsResponse : IResponse {
		
		[DataMember(Name="patterns")]
		public IDictionary<string, string> Patterns { get; set; }

	}
}
