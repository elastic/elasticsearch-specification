using Nest.CommonAbstractions;
using Nest.Internal;
using System;
using System.Collections.Generic;
using System.Runtime.Serialization;
namespace Nest.QueryDsl {

	public class SpanGapQuery  {
		
		[DataMember(Name="field")]
		public Field Field { get; set; }


		[DataMember(Name="width")]
		public int Width { get; set; }

	}
}
