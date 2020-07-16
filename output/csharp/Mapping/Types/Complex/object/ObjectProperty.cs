using Nest.Mapping;
using Nest.CommonAbstractions;
using Nest.Internal;
using System;
using System.Collections.Generic;
using System.Runtime.Serialization;
namespace Nest.Mapping {

	public class ObjectProperty : CorePropertyBase {
		
		[DataMember(Name="dynamic")]
		public Union<bool, DynamicMapping> Dynamic { get; set; }


		[DataMember(Name="enabled")]
		public bool Enabled { get; set; }


		[DataMember(Name="properties")]
		public IDictionary<PropertyName, IProperty> Properties { get; set; }

	}
}
