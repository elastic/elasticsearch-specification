using Nest.CommonAbstractions;
using Nest.Internal;
using Nest.Indices;
using Nest.Mapping;
using System;
using System.Collections.Generic;
using System.Runtime.Serialization;
namespace Nest.IndexModules {

	public class IndexState  {
		
		[DataMember(Name="aliases")]
		public IDictionary<IndexName, Alias> Aliases { get; set; }


		[DataMember(Name="mappings")]
		public TypeMapping Mappings { get; set; }


		[DataMember(Name="settings")]
		public IDictionary<string, object> Settings { get; set; }

	}
}
