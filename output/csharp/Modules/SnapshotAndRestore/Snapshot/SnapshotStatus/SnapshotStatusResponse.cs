using Nest.Modules;
using Nest.CommonAbstractions;
using System;
using System.Collections.Generic;
using System.Runtime.Serialization;
namespace Nest.Modules {

	public class SnapshotStatusResponse : IResponse {
		
		[DataMember(Name="snapshots")]
		public List<SnapshotStatus> Snapshots { get; set; }

	}
}
