using Nest.CommonAbstractions;
using Nest.Internal;
using Nest.Mapping;
using System;
using System.Collections.Generic;
using System.Runtime.Serialization;
namespace Nest.Mapping {

	public class FieldAliasProperty : PropertyBase {
		
		[DataMember(Name="path")]
		public Field Path { get; set; }

	}
}
