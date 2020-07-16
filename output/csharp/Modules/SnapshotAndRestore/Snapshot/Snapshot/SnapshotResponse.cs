using Nest.Modules;
using Nest.CommonAbstractions;
using System;
using System.Collections.Generic;
using System.Runtime.Serialization;
namespace Nest.Modules {

	public class SnapshotResponse : IResponse {
		
		[DataMember(Name="accepted")]
		public bool Accepted { get; set; }


		[DataMember(Name="snapshot")]
		public SnapshotInfo Snapshot { get; set; }

	}
}
