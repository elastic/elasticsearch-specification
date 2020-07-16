using Nest.Internal;
using System;
using System.Collections.Generic;
using System.Runtime.Serialization;
namespace Nest.XPack {

	public class WatchRecordQueuedStats  {
		
		[DataMember(Name="execution_time")]
		public DateTimeOffset ExecutionTime { get; set; }


		[DataMember(Name="triggered_time")]
		public DateTimeOffset TriggeredTime { get; set; }


		[DataMember(Name="watch_id")]
		public string WatchId { get; set; }


		[DataMember(Name="watch_record_id")]
		public string WatchRecordId { get; set; }

	}
}
