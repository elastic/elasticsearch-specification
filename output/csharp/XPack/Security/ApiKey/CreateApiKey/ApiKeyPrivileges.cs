using System;
using System.Collections.Generic;
using System.Runtime.Serialization;
namespace Nest.XPack {

	public class ApiKeyPrivileges  {
		
		[DataMember(Name="names")]
		public List<string> Names { get; set; }


		[DataMember(Name="privileges")]
		public List<string> Privileges { get; set; }

	}
}
