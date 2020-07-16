using Nest.Ingest;
using System;
using System.Collections.Generic;
using System.Runtime.Serialization;
namespace Nest.Ingest {

	public class Processor  {
		
		[DataMember(Name="if")]
		public string If { get; set; }


		[DataMember(Name="ignore_failure")]
		public bool IgnoreFailure { get; set; }


		[DataMember(Name="name")]
		public string Name { get; set; }


		[DataMember(Name="on_failure")]
		public List<Processor> OnFailure { get; set; }


		[DataMember(Name="tag")]
		public string Tag { get; set; }

	}
}
