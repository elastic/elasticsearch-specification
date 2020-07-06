using Nest.QueryDsl;
using Nest.Internal;
using System;
using System.Collections.Generic;
using System.Runtime.Serialization;
namespace Nest.QueryDsl {

	public class MultiTermQueryRewrite  {
		
		[DataMember(Name="constant_score")]
		public MultiTermQueryRewrite ConstantScore { get; set; }


		[DataMember(Name="constant_score_boolean")]
		public MultiTermQueryRewrite ConstantScoreBoolean { get; set; }


		[DataMember(Name="rewrite")]
		public RewriteMultiTerm Rewrite { get; set; }


		[DataMember(Name="scoring_boolean")]
		public MultiTermQueryRewrite ScoringBoolean { get; set; }


		[DataMember(Name="size")]
		public int Size { get; set; }

	}
}
