using Nest.CommonAbstractions;
using Nest.Internal;
using Nest.QueryDsl;
using System;
using System.Collections.Generic;
using System.Runtime.Serialization;
namespace Nest.QueryDsl {

	public class SpanFieldMaskingQuery  {
		
		[DataMember(Name="field")]
		public Field Field { get; set; }


		[DataMember(Name="query")]
		public SpanQuery Query { get; set; }

	}
}
