using Nest.QueryDsl;
using System;
using System.Collections.Generic;
using System.Runtime.Serialization;
namespace Nest.QueryDsl {

	public class RankFeatureQuery  {
		
		[DataMember(Name="function")]
		public RankFeatureFunction Function { get; set; }

	}
}
