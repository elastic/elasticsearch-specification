using Nest.Mapping;
using System;
using System.Collections.Generic;
using System.Runtime.Serialization;
namespace Nest.Mapping {

	public class RankFeatureProperty : PropertyBase {
		
		[DataMember(Name="positive_score_impact")]
		public bool PositiveScoreImpact { get; set; }

	}
}
