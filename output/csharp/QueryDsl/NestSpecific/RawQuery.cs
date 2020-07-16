using System;
using System.Collections.Generic;
using System.Runtime.Serialization;
namespace Nest.QueryDsl {

	public class RawQuery  {
		
		[DataMember(Name="raw")]
		public string Raw { get; set; }

	}
}
