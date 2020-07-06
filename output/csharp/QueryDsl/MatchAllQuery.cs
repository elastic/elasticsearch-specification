using System;
using System.Collections.Generic;
using System.Runtime.Serialization;
namespace Nest.QueryDsl {

	public class MatchAllQuery  {
		
		[DataMember(Name="norm_field")]
		public string NormField { get; set; }

	}
}
