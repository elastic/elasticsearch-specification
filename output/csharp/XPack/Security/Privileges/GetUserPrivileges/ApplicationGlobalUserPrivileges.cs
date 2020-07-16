using Nest.XPack;
using System;
using System.Collections.Generic;
using System.Runtime.Serialization;
namespace Nest.XPack {

	public class ApplicationGlobalUserPrivileges  {
		
		[DataMember(Name="manage")]
		public ManageUserPrivileges Manage { get; set; }

	}
}
