using Nest.CommonOptions;
using Nest.Internal;
using System;
using System.Collections.Generic;
using System.Runtime.Serialization;
namespace Nest.Aggregations {

	public class DateRangeExpression  {
		
		[DataMember(Name="from")]
		public DateMath From { get; set; }


		[DataMember(Name="key")]
		public string Key { get; set; }


		[DataMember(Name="to")]
		public DateMath To { get; set; }

	}
}
