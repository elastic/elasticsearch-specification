using Nest.Analysis;
using System;
using System.Collections.Generic;
using System.Runtime.Serialization;
namespace Nest.Analysis {

	public class MappingCharFilter : CharFilterBase {
		
		[DataMember(Name="mappings")]
		public List<string> Mappings { get; set; }


		[DataMember(Name="mappings_path")]
		public string MappingsPath { get; set; }

	}
}
