using Nest.Modules;
using Nest.CommonAbstractions;
using System;
using System.Collections.Generic;
using System.Runtime.Serialization;
namespace Nest.Modules {

	public class GetSnapshotResponse : IResponse {
		
		[DataMember(Name="snapshots")]
		public List<SnapshotInfo> Snapshots { get; set; }

	}
}
