using Nest.QueryDsl;
using System;
using System.Collections.Generic;
using System.Runtime.Serialization;
namespace Nest.QueryDsl {

	public class SpanContainingQuery  {
		
		[DataMember(Name="big")]
		public SpanQuery Big { get; set; }


		[DataMember(Name="little")]
		public SpanQuery Little { get; set; }

	}
}
