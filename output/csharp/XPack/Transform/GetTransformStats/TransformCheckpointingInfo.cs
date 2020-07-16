using Nest.Internal;
using Nest.XPack;
using System;
using System.Collections.Generic;
using System.Runtime.Serialization;
namespace Nest.XPack {

	public class TransformCheckpointingInfo  {
		
		[DataMember(Name="changes_last_detected_at")]
		public long ChangesLastDetectedAt { get; set; }


		[DataMember(Name="changes_last_detected_at_date_time")]
		public DateTimeOffset ChangesLastDetectedAtDateTime { get; set; }


		[DataMember(Name="last")]
		public TransformCheckpointStats Last { get; set; }


		[DataMember(Name="next")]
		public TransformCheckpointStats Next { get; set; }


		[DataMember(Name="operations_behind")]
		public long OperationsBehind { get; set; }

	}
}
