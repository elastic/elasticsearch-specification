using Nest.CommonOptions;
using Nest.CommonAbstractions;
using System;
using System.Collections.Generic;
using System.Runtime.Serialization;
namespace Nest.Ingest {

	public class GetPipelineRequest : RequestBase {
		
		[DataMember(Name="master_timeout")]
		public Time MasterTimeout { get; set; }

	}
}
