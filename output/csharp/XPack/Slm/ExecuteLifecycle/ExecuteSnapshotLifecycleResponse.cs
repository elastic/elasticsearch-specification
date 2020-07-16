using Nest.CommonAbstractions;
using System;
using System.Collections.Generic;
using System.Runtime.Serialization;
namespace Nest.XPack {

	public class ExecuteSnapshotLifecycleResponse : IResponse {
		
		[DataMember(Name="snapshot_name")]
		public string SnapshotName { get; set; }

	}
}
