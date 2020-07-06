using Nest.CommonAbstractions;
using Nest.Internal;
using Nest.Mapping;
using System;
using System.Collections.Generic;
using System.Runtime.Serialization;
namespace Nest.Mapping {

	public class PropertyBase : IProperty {
		
		[DataMember(Name="local_metadata")]
		public IDictionary<string, object> LocalMetadata { get; set; }


		[DataMember(Name="meta")]
		public IDictionary<string, string> Meta { get; set; }


		[DataMember(Name="name")]
		public PropertyName Name { get; set; }


		[DataMember(Name="type")]
		public string Type { get; set; }

	}
}
