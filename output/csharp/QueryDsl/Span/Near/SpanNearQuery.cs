using Nest.QueryDsl;
using Nest.Internal;
using System;
using System.Collections.Generic;
using System.Runtime.Serialization;
namespace Nest.QueryDsl {

	public class SpanNearQuery  {
		
		[DataMember(Name="clauses")]
		public List<SpanQuery> Clauses { get; set; }


		[DataMember(Name="in_order")]
		public bool InOrder { get; set; }


		[DataMember(Name="slop")]
		public int Slop { get; set; }

	}
}
