using Nest.Common;
using Nest.XPack;
using Nest.CommonAbstractions;
using System;
using System.Collections.Generic;
using System.Runtime.Serialization;
namespace Nest.XPack {

	public class PutRoleRequest : RequestBase {
		
		[DataMember(Name="refresh")]
		public Refresh Refresh { get; set; }


		[DataMember(Name="applications")]
		public List<ApplicationPrivileges> Applications { get; set; }


		[DataMember(Name="cluster")]
		public List<string> Cluster { get; set; }


		[DataMember(Name="global")]
		public IDictionary<string, object> Global { get; set; }


		[DataMember(Name="indices")]
		public List<IndicesPrivileges> Indices { get; set; }


		[DataMember(Name="metadata")]
		public IDictionary<string, object> Metadata { get; set; }


		[DataMember(Name="run_as")]
		public List<string> RunAs { get; set; }

	}
}
