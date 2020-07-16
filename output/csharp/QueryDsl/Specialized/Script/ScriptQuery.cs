using Nest.CommonOptions;
using System;
using System.Collections.Generic;
using System.Runtime.Serialization;
namespace Nest.QueryDsl {

	public class ScriptQuery  {
		
		[DataMember(Name="script")]
		public Script Script { get; set; }

	}
}
