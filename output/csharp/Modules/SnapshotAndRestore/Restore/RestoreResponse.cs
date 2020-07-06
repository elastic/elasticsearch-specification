using Nest.Modules;
using Nest.CommonAbstractions;
using System;
using System.Collections.Generic;
using System.Runtime.Serialization;
namespace Nest.Modules {

	public class RestoreResponse : IResponse {
		
		[DataMember(Name="snapshot")]
		public SnapshotRestore Snapshot { get; set; }

	}
}
