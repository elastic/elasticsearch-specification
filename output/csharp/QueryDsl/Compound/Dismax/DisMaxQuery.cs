using Nest.QueryDsl;
using Nest.Internal;
using System;
using System.Collections.Generic;
using System.Runtime.Serialization;
namespace Nest.QueryDsl {

	public class DisMaxQuery  {
		
		[DataMember(Name="queries")]
		public List<QueryContainer> Queries { get; set; }


		[DataMember(Name="tie_breaker")]
		public double TieBreaker { get; set; }

	}
}
