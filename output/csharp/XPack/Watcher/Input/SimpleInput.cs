using System;
using System.Collections.Generic;
using System.Runtime.Serialization;
namespace Nest.XPack {

	public class SimpleInput  {
		
		[DataMember(Name="payload")]
		public IDictionary<string, object> Payload { get; set; }

	}
}
