using System;
using System.Collections.Generic;
using System.Runtime.Serialization;
namespace Nest.XPack {

	public class ManageUserPrivileges  {
		
		[DataMember(Name="applications")]
		public List<string> Applications { get; set; }

	}
}
