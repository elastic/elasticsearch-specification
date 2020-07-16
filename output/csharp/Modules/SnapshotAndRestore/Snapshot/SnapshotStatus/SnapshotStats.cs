using Nest.Modules;
using Nest.Internal;
using System;
using System.Collections.Generic;
using System.Runtime.Serialization;
namespace Nest.Modules {

	public class SnapshotStats  {
		
		[DataMember(Name="incremental")]
		public FileCountSnapshotStats Incremental { get; set; }


		[DataMember(Name="start_time_in_millis")]
		public long StartTimeInMillis { get; set; }


		[DataMember(Name="time_in_millis")]
		public long TimeInMillis { get; set; }


		[DataMember(Name="total")]
		public FileCountSnapshotStats Total { get; set; }

	}
}
