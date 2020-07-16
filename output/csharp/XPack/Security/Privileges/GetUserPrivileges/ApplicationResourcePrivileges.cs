using System;
using System.Collections.Generic;
using System.Runtime.Serialization;
namespace Nest.XPack {

	public class ApplicationResourcePrivileges  {
		
		[DataMember(Name="application")]
		public string Application { get; set; }


		[DataMember(Name="privileges")]
		public List<string> Privileges { get; set; }


		[DataMember(Name="resources")]
		public List<string> Resources { get; set; }

	}
}
