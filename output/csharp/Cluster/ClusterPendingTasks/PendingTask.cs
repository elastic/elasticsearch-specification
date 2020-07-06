using Nest.Internal;
using System;
using System.Collections.Generic;
using System.Runtime.Serialization;
namespace Nest.Cluster {

	public class PendingTask  {
		
		[DataMember(Name="insert_order")]
		public int InsertOrder { get; set; }


		[DataMember(Name="priority")]
		public string Priority { get; set; }


		[DataMember(Name="source")]
		public string Source { get; set; }


		[DataMember(Name="time_in_queue")]
		public string TimeInQueue { get; set; }


		[DataMember(Name="time_in_queue_millis")]
		public int TimeInQueueMillis { get; set; }

	}
}
