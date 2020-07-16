using Nest.QueryDsl;
using System;
using System.Collections.Generic;
using System.Runtime.Serialization;
namespace Nest.QueryDsl {

	public class SpanOrQuery  {
		
		[DataMember(Name="clauses")]
		public List<SpanQuery> Clauses { get; set; }

	}
}
