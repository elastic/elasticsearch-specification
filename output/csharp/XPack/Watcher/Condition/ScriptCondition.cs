using System;
using System.Collections.Generic;
using System.Runtime.Serialization;
namespace Nest.XPack {

	public class ScriptCondition  {
		
		[DataMember(Name="lang")]
		public string Lang { get; set; }


		[DataMember(Name="params")]
		public IDictionary<string, object> Params { get; set; }

	}
}
