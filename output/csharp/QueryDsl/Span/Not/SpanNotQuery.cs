using Nest.Internal;
using Nest.QueryDsl;
using System;
using System.Collections.Generic;
using System.Runtime.Serialization;
namespace Nest.QueryDsl {

	public class SpanNotQuery  {
		
		[DataMember(Name="dist")]
		public int Dist { get; set; }


		[DataMember(Name="exclude")]
		public SpanQuery Exclude { get; set; }


		[DataMember(Name="include")]
		public SpanQuery Include { get; set; }


		[DataMember(Name="post")]
		public int Post { get; set; }


		[DataMember(Name="pre")]
		public int Pre { get; set; }

	}
}
