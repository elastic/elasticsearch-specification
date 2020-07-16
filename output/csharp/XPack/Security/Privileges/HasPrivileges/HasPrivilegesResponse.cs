using Nest.XPack;
using Nest.CommonAbstractions;
using System;
using System.Collections.Generic;
using System.Runtime.Serialization;
namespace Nest.XPack {

	public class HasPrivilegesResponse : IResponse {
		
		[DataMember(Name="application")]
		public IDictionary<string, List<ResourcePrivileges>> Application { get; set; }


		[DataMember(Name="cluster")]
		public IDictionary<string, bool> Cluster { get; set; }


		[DataMember(Name="has_all_requested")]
		public bool HasAllRequested { get; set; }


		[DataMember(Name="index")]
		public List<ResourcePrivileges> Index { get; set; }


		[DataMember(Name="username")]
		public string Username { get; set; }

	}
}
