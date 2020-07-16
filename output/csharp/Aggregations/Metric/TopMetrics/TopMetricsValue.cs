using Nest.CommonAbstractions;
using Nest.Internal;
using System;
using System.Collections.Generic;
using System.Runtime.Serialization;
namespace Nest.Aggregations {

	public class TopMetricsValue  {
		
		[DataMember(Name="field")]
		public Field Field { get; set; }

	}
}
