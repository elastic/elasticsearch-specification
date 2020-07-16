using System;
using System.Collections.Generic;
using System.Runtime.Serialization;
namespace Nest.QueryDsl {

	public class GeoShape  {
		
		[DataMember(Name="type")]
		public string Type { get; set; }

	}
}
