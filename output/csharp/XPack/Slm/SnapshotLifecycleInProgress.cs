using Nest.Internal;
using System;
using System.Collections.Generic;
using System.Runtime.Serialization;
namespace Nest.XPack {

	public class SnapshotLifecycleInProgress  {
		
		[DataMember(Name="name")]
		public string Name { get; set; }


		[DataMember(Name="start_time_millis")]
		public DateTimeOffset StartTimeMillis { get; set; }


		[DataMember(Name="state")]
		public string State { get; set; }


		[DataMember(Name="uuid")]
		public string Uuid { get; set; }

	}
}
