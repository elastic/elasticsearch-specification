using Nest.Internal;
using System;
using System.Collections.Generic;
using System.Runtime.Serialization;
namespace Nest.Search {

	public class QueryBreakdown  {
		
		[DataMember(Name="advance")]
		public long Advance { get; set; }


		[DataMember(Name="build_scorer")]
		public long BuildScorer { get; set; }


		[DataMember(Name="create_weight")]
		public long CreateWeight { get; set; }


		[DataMember(Name="match")]
		public long Match { get; set; }


		[DataMember(Name="next_doc")]
		public long NextDoc { get; set; }


		[DataMember(Name="score")]
		public long Score { get; set; }

	}
}
