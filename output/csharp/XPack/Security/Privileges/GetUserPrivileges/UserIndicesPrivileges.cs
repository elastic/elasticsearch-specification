using Nest.XPack;
using System;
using System.Collections.Generic;
using System.Runtime.Serialization;
namespace Nest.XPack {

	public class UserIndicesPrivileges  {
		
		[DataMember(Name="field_security")]
		public FieldSecuritySettings FieldSecurity { get; set; }


		[DataMember(Name="names")]
		public List<string> Names { get; set; }


		[DataMember(Name="privileges")]
		public List<string> Privileges { get; set; }


		[DataMember(Name="query")]
		public QueryUserPrivileges Query { get; set; }

	}
}
