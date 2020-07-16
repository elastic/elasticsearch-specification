using System;
using System.Collections.Generic;
using System.Runtime.Serialization;
namespace Nest.XPack {

	public class PrivilegesActions  {
		
		[DataMember(Name="actions")]
		public List<string> Actions { get; set; }


		[DataMember(Name="metadata")]
		public IDictionary<string, object> Metadata { get; set; }

	}
}
