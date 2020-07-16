using Nest.Search;
using Nest.Internal;
using System;
using System.Collections.Generic;
using System.Runtime.Serialization;
namespace Nest.Search {

	public class TotalHits  {
		
		[DataMember(Name="relation")]
		public TotalHitsRelation Relation { get; set; }


		[DataMember(Name="value")]
		public long Value { get; set; }

	}
}
