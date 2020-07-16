using Nest.QueryDsl;
using Nest.Internal;
using System;
using System.Collections.Generic;
using System.Runtime.Serialization;
namespace Nest.QueryDsl {

	public class FunctionScoreQuery  {
		
		[DataMember(Name="boost_mode")]
		public FunctionBoostMode BoostMode { get; set; }


		[DataMember(Name="functions")]
		public List<ScoreFunction> Functions { get; set; }


		[DataMember(Name="max_boost")]
		public double MaxBoost { get; set; }


		[DataMember(Name="min_score")]
		public double MinScore { get; set; }


		[DataMember(Name="query")]
		public QueryContainer Query { get; set; }


		[DataMember(Name="score_mode")]
		public FunctionScoreMode ScoreMode { get; set; }

	}
}
