using System;
using System.Collections.Generic;
using System.Runtime.Serialization;
namespace Nest.Mapping {

	public class SourceField  {
		
		[DataMember(Name="compress")]
		public bool Compress { get; set; }


		[DataMember(Name="compress_threshold")]
		public string CompressThreshold { get; set; }


		[DataMember(Name="enabled")]
		public bool Enabled { get; set; }


		[DataMember(Name="excludes")]
		public List<string> Excludes { get; set; }


		[DataMember(Name="includes")]
		public List<string> Includes { get; set; }

	}
}
