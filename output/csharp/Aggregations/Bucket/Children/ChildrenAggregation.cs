using Nest.CommonAbstractions;
using Nest.Internal;
using System;
using System.Collections.Generic;
using System.Runtime.Serialization;
namespace Nest.Aggregations {

	public class ChildrenAggregation  {
		
		[DataMember(Name="type")]
		public RelationName Type { get; set; }

	}
}
