using Nest.CommonAbstractions;
using Nest.Internal;
using Nest.Mapping;
using System;
using System.Collections.Generic;
using System.Runtime.Serialization;
namespace Nest.Mapping {

	public class JoinProperty : PropertyBase {
		
		[DataMember(Name="relations")]
		public IDictionary<RelationName, List<RelationName>> Relations { get; set; }

	}
}
