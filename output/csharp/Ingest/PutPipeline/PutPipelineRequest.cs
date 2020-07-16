using Nest.CommonOptions;
using Nest.Ingest;
using Nest.CommonAbstractions;
using System;
using System.Collections.Generic;
using System.Runtime.Serialization;
namespace Nest.Ingest {

	public class PutPipelineRequest : RequestBase {
		
		[DataMember(Name="master_timeout")]
		public Time MasterTimeout { get; set; }


		[DataMember(Name="timeout")]
		public Time Timeout { get; set; }


		[DataMember(Name="description")]
		public string Description { get; set; }


		[DataMember(Name="on_failure")]
		public List<Processor> OnFailure { get; set; }


		[DataMember(Name="processors")]
		public List<Processor> Processors { get; set; }

	}
}
