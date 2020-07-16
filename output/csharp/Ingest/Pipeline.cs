using Nest.Ingest;
using System;
using System.Collections.Generic;
using System.Runtime.Serialization;
namespace Nest.Ingest {

	public class Pipeline  {
		
		[DataMember(Name="description")]
		public string Description { get; set; }


		[DataMember(Name="on_failure")]
		public List<Processor> OnFailure { get; set; }


		[DataMember(Name="processors")]
		public List<Processor> Processors { get; set; }

	}
}
