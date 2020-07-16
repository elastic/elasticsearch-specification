using Nest.CommonAbstractions;
using System;
using System.Collections.Generic;
using System.Runtime.Serialization;
namespace Nest.XPack {

	public class GetBuiltinPrivilegesResponse : IResponse {
		
		[DataMember(Name="cluster")]
		public List<string> Cluster { get; set; }


		[DataMember(Name="index")]
		public List<string> Index { get; set; }

	}
}
