using Nest.CommonAbstractions;
using Nest.Internal;
using Nest.QueryDsl;
using System;
using System.Collections.Generic;
using System.Runtime.Serialization;
namespace Nest.XPack {

	public class TransformSource  {
		
		[DataMember(Name="index")]
		public IndicesNames Index { get; set; }


		[DataMember(Name="query")]
		public QueryContainer Query { get; set; }

	}
}
