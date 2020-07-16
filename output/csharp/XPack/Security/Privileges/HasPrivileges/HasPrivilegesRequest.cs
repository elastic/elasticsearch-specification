using Nest.XPack;
using Nest.CommonAbstractions;
using System;
using System.Collections.Generic;
using System.Runtime.Serialization;
namespace Nest.XPack {

	public class HasPrivilegesRequest : RequestBase {
		
		[DataMember(Name="application")]
		public List<ApplicationPrivilegesCheck> Application { get; set; }


		[DataMember(Name="cluster")]
		public List<string> Cluster { get; set; }


		[DataMember(Name="index")]
		public List<IndexPrivilegesCheck> Index { get; set; }

	}
}
