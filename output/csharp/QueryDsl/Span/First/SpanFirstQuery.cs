using Nest.Internal;
using Nest.QueryDsl;
using System;
using System.Collections.Generic;
using System.Runtime.Serialization;
namespace Nest.QueryDsl {

	public class SpanFirstQuery  {
		
		[DataMember(Name="end")]
		public int End { get; set; }


		[DataMember(Name="match")]
		public SpanQuery Match { get; set; }

	}
}
