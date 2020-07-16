using Nest.Cluster;
using Nest.CommonAbstractions;
using System;
using System.Collections.Generic;
using System.Runtime.Serialization;
namespace Nest.Cluster {

	public class RemoteInfoResponse : DictionaryResponseBase<string, RemoteInfo> {
		
		[DataMember(Name="remotes")]
		public IDictionary<string, RemoteInfo> Remotes { get; set; }

	}
}
