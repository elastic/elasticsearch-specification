using Nest.Internal;
using System;
using System.Collections.Generic;
using System.Runtime.Serialization;
namespace Nest.XPack {

	public class SnapshotLifecycleInvocationRecord  {
		
		[DataMember(Name="snapshot_name")]
		public string SnapshotName { get; set; }


		[DataMember(Name="time")]
		public DateTimeOffset Time { get; set; }

	}
}
