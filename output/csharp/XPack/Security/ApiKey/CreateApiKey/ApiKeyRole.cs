using Nest.XPack;
using System;
using System.Collections.Generic;
using System.Runtime.Serialization;
namespace Nest.XPack {

	public class ApiKeyRole  {
		
		[DataMember(Name="cluster")]
		public List<string> Cluster { get; set; }


		[DataMember(Name="index")]
		public List<ApiKeyPrivileges> Index { get; set; }

	}
}
