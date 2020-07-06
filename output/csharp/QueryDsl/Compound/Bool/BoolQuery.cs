using Nest.QueryDsl;
using Nest.CommonOptions;
using Nest.Internal;
using System;
using System.Collections.Generic;
using System.Runtime.Serialization;
namespace Nest.QueryDsl {

	public class BoolQuery  {
		
		[DataMember(Name="filter")]
		public List<QueryContainer> Filter { get; set; }


		[DataMember(Name="locked")]
		public bool Locked { get; set; }


		[DataMember(Name="minimum_should_match")]
		public MinimumShouldMatch MinimumShouldMatch { get; set; }


		[DataMember(Name="must")]
		public List<QueryContainer> Must { get; set; }


		[DataMember(Name="must_not")]
		public List<QueryContainer> MustNot { get; set; }


		[DataMember(Name="should")]
		public List<QueryContainer> Should { get; set; }

	}
}
