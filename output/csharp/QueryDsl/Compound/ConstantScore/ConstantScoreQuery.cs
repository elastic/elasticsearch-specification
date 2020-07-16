using Nest.QueryDsl;
using System;
using System.Collections.Generic;
using System.Runtime.Serialization;
namespace Nest.QueryDsl {

	public class ConstantScoreQuery  {
		
		[DataMember(Name="filter")]
		public QueryContainer Filter { get; set; }

	}
}
