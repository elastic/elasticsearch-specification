using Nest.QueryDsl;
using Nest.CommonOptions;
using System;
using System.Collections.Generic;
using System.Runtime.Serialization;
namespace Nest.QueryDsl {

	public class ScriptScoreQuery  {
		
		[DataMember(Name="query")]
		public QueryContainer Query { get; set; }


		[DataMember(Name="script")]
		public Script Script { get; set; }

	}
}
