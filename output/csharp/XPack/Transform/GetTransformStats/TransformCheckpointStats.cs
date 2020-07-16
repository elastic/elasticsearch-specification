using Nest.Internal;
using Nest.XPack;
using System;
using System.Collections.Generic;
using System.Runtime.Serialization;
namespace Nest.XPack {

	public class TransformCheckpointStats  {
		
		[DataMember(Name="checkpoint")]
		public long Checkpoint { get; set; }


		[DataMember(Name="checkpoint_progress")]
		public TransformProgress CheckpointProgress { get; set; }


		[DataMember(Name="timestamp")]
		public DateTimeOffset Timestamp { get; set; }


		[DataMember(Name="timestamp_millis")]
		public long TimestampMillis { get; set; }


		[DataMember(Name="time_upper_bound")]
		public DateTimeOffset TimeUpperBound { get; set; }


		[DataMember(Name="time_upper_bound_millis")]
		public long TimeUpperBoundMillis { get; set; }

	}
}
