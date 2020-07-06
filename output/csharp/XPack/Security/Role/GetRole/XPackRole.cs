using Nest.XPack;
using System;
using System.Collections.Generic;
using System.Runtime.Serialization;
namespace Nest.XPack {

	public class XPackRole  {
		
		[DataMember(Name="cluster")]
		public List<string> Cluster { get; set; }


		[DataMember(Name="indices")]
		public List<IndicesPrivileges> Indices { get; set; }


		[DataMember(Name="metadata")]
		public IDictionary<string, object> Metadata { get; set; }


		[DataMember(Name="run_as")]
		public List<string> RunAs { get; set; }

	}
}
