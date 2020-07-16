using System;
using System.Collections.Generic;
using System.Runtime.Serialization;
namespace Nest.Aggregations {

	public class FormattableMetricAggregation  {
		
		[DataMember(Name="format")]
		public string Format { get; set; }

	}
}
