using Nest.Modules;
using Nest.CommonAbstractions;
using System;
using System.Collections.Generic;
using System.Runtime.Serialization;
namespace Nest.Modules {

	public class GetRepositoryResponse : IResponse {
		
		[DataMember(Name="repositories")]
		public IDictionary<string, SnapshotRepository> Repositories { get; set; }

	}
}
