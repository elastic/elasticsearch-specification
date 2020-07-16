using System;
using System.Collections.Generic;
using System.Runtime.Serialization;
namespace Nest.XPack {

	public class ResourcePrivileges  {
		
		[DataMember(Name="privileges")]
		public IDictionary<string, bool> Privileges { get; set; }


		[DataMember(Name="resource")]
		public string Resource { get; set; }

	}
}
