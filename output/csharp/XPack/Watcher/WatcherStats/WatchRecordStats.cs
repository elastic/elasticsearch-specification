using Nest.XPack;
using System;
using System.Collections.Generic;
using System.Runtime.Serialization;
namespace Nest.XPack {

	public class WatchRecordStats : WatchRecordQueuedStats {
		
		[DataMember(Name="execution_phase")]
		public ExecutionPhase ExecutionPhase { get; set; }

	}
}
