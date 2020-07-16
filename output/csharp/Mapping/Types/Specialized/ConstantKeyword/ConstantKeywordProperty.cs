using Nest.Mapping;
using System;
using System.Collections.Generic;
using System.Runtime.Serialization;
namespace Nest.Mapping {

	public class ConstantKeywordProperty : PropertyBase {
		
		[DataMember(Name="value")]
		public object Value { get; set; }

	}
}
