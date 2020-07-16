using Nest.XPack;
using Nest.CommonAbstractions;
using System;
using System.Collections.Generic;
using System.Runtime.Serialization;
namespace Nest.XPack {

	public class GetUserPrivilegesResponse : IResponse {
		
		[DataMember(Name="applications")]
		public List<ApplicationResourcePrivileges> Applications { get; set; }


		[DataMember(Name="cluster")]
		public List<string> Cluster { get; set; }


		[DataMember(Name="global")]
		public List<GlobalPrivileges> Global { get; set; }


		[DataMember(Name="indices")]
		public List<UserIndicesPrivileges> Indices { get; set; }


		[DataMember(Name="run_as")]
		public List<string> RunAs { get; set; }

	}
}
