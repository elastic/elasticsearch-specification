using Nest.Modules;
using Nest.CommonAbstractions;
using System;
using System.Collections.Generic;
using System.Runtime.Serialization;
namespace Nest.Modules {

	public class VerifyRepositoryResponse : IResponse {
		
		[DataMember(Name="nodes")]
		public IDictionary<string, CompactNodeInfo> Nodes { get; set; }

	}
}
