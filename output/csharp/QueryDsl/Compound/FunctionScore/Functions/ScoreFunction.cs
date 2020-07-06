using Nest.QueryDsl;
using Nest.Internal;
using System;
using System.Collections.Generic;
using System.Runtime.Serialization;
namespace Nest.QueryDsl {

	public class ScoreFunction  {
		
		[DataMember(Name="filter")]
		public QueryContainer Filter { get; set; }


		[DataMember(Name="weight")]
		public double Weight { get; set; }

	}
}
