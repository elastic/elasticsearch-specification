using Nest.CommonAbstractions;
using Nest.Internal;
using Nest.CommonOptions;
using System;
using System.Collections.Generic;
using System.Runtime.Serialization;
namespace Nest.Aggregations {

	public class WeightedAverageValue  {
		
		[DataMember(Name="field")]
		public Field Field { get; set; }


		[DataMember(Name="missing")]
		public double Missing { get; set; }


		[DataMember(Name="script")]
		public Script Script { get; set; }

	}
}
