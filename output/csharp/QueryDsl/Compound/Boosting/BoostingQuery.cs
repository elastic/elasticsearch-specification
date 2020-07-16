using Nest.Internal;
using Nest.QueryDsl;
using System;
using System.Collections.Generic;
using System.Runtime.Serialization;
namespace Nest.QueryDsl {

	public class BoostingQuery  {
		
		[DataMember(Name="negative_boost")]
		public double NegativeBoost { get; set; }


		[DataMember(Name="negative")]
		public QueryContainer Negative { get; set; }


		[DataMember(Name="positive")]
		public QueryContainer Positive { get; set; }

	}
}
