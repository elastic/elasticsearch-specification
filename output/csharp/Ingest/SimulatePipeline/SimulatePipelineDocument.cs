using Nest.CommonAbstractions;
using Nest.Internal;
using System;
using System.Collections.Generic;
using System.Runtime.Serialization;
namespace Nest.Ingest {

	public class SimulatePipelineDocument  {
		
		[DataMember(Name="_id")]
		public Id Id { get; set; }


		[DataMember(Name="_index")]
		public IndexName Index { get; set; }


		[DataMember(Name="_source")]
		public object Source { get; set; }

	}
}
