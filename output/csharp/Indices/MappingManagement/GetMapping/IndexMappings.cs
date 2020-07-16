using Nest.Mapping;
using System;
using System.Collections.Generic;
using System.Runtime.Serialization;
namespace Nest.Indices {

	public class IndexMappings  {
		
		[DataMember(Name="item")]
		public TypeMapping Item { get; set; }


		[DataMember(Name="mappings")]
		public TypeMapping Mappings { get; set; }

	}
}
