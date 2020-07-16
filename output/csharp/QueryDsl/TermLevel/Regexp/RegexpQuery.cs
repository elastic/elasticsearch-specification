using Nest.Internal;
using System;
using System.Collections.Generic;
using System.Runtime.Serialization;
namespace Nest.QueryDsl {

	public class RegexpQuery  {
		
		[DataMember(Name="flags")]
		public string Flags { get; set; }


		[DataMember(Name="max_determinized_states")]
		public int MaxDeterminizedStates { get; set; }


		[DataMember(Name="value")]
		public string Value { get; set; }

	}
}
