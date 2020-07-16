using Nest.CommonAbstractions;
using Nest.Internal;
using Nest.QueryDsl;
using System;
using System.Collections.Generic;
using System.Runtime.Serialization;
namespace Nest.QueryDsl {

	public class PinnedQuery  {
		
		[DataMember(Name="ids")]
		public List<Id> Ids { get; set; }


		[DataMember(Name="organic")]
		public QueryContainer Organic { get; set; }

	}
}
