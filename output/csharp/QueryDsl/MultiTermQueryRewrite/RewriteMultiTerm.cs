
using System.Runtime.Serialization;

namespace Nest.QueryDsl {

	public enum RewriteMultiTerm {
  
		[DataMember(Name = "constant_score")] ConstantScore,
		[DataMember(Name = "scoring_boolean")] ScoringBoolean,
		[DataMember(Name = "constant_score_boolean")] ConstantScoreBoolean,
		[DataMember(Name = "top_terms_N")] TopTermsN,
		[DataMember(Name = "top_terms_boost_N")] TopTermsBoostN,
		[DataMember(Name = "top_terms_blended_freqs_N")] TopTermsBlendedFreqsN
	}
}
