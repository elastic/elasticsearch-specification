using Nest.CommonAbstractions;
using Nest.Internal;
using Nest.QueryDsl;
using System;
using System.Collections.Generic;
using System.Runtime.Serialization;
namespace Nest.Modules {

	public class PainlessContextSetup  {
		
		[DataMember(Name="document")]
		public object Document { get; set; }


		[DataMember(Name="index")]
		public IndexName Index { get; set; }


		[DataMember(Name="query")]
		public QueryContainer Query { get; set; }

	}
}
