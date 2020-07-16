using Nest.CommonAbstractions;
using Nest.Internal;
using Nest.CommonOptions;
using System;
using System.Collections.Generic;
using System.Runtime.Serialization;
namespace Nest.Aggregations {

	public class StringStatsAggregation  {
		
		[DataMember(Name="field")]
		public Field Field { get; set; }


		[DataMember(Name="missing")]
		public object Missing { get; set; }


		[DataMember(Name="script")]
		public Script Script { get; set; }


		[DataMember(Name="show_distribution")]
		public bool ShowDistribution { get; set; }

	}
}
