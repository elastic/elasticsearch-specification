using Nest.Internal;
using System;
using System.Collections.Generic;
using System.Runtime.Serialization;
namespace Nest.CommonOptions {

	public class AggregationRange  {
		
		[DataMember(Name="from")]
		public double From { get; set; }


		[DataMember(Name="key")]
		public string Key { get; set; }


		[DataMember(Name="to")]
		public double To { get; set; }

	}
}
