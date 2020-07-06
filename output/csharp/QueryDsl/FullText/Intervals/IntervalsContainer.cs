using Nest.QueryDsl;
using System;
using System.Collections.Generic;
using System.Runtime.Serialization;
namespace Nest.QueryDsl {

	public class IntervalsContainer  {
		
		[DataMember(Name="all_of")]
		public IntervalsAllOf AllOf { get; set; }


		[DataMember(Name="any_of")]
		public IntervalsAnyOf AnyOf { get; set; }


		[DataMember(Name="fuzzy")]
		public IntervalsFuzzy Fuzzy { get; set; }


		[DataMember(Name="match")]
		public IntervalsMatch Match { get; set; }


		[DataMember(Name="prefix")]
		public IntervalsPrefix Prefix { get; set; }


		[DataMember(Name="wildcard")]
		public IntervalsWildcard Wildcard { get; set; }

	}
}
