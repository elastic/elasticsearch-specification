using Nest.QueryDsl;
using System;
using System.Collections.Generic;
using System.Runtime.Serialization;
namespace Nest.QueryDsl {

	public class SpanMultiTermQuery  {
		
		[DataMember(Name="match")]
		public QueryContainer Match { get; set; }

	}
}
