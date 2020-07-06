using System;
using System.Collections.Generic;
using System.Runtime.Serialization;
namespace Nest.QueryDsl {

	public class TermQuery  {
		
		[DataMember(Name="value")]
		public object Value { get; set; }

	}
}
