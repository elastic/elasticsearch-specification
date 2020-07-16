using Nest.Internal;
using Nest.Indices;
using System;
using System.Collections.Generic;
using System.Runtime.Serialization;
namespace Nest.Indices {

	public class ShardRecovery  {
		
		[DataMember(Name="id")]
		public long Id { get; set; }


		[DataMember(Name="index")]
		public RecoveryIndexStatus Index { get; set; }


		[DataMember(Name="primary")]
		public bool Primary { get; set; }


		[DataMember(Name="source")]
		public RecoveryOrigin Source { get; set; }


		[DataMember(Name="stage")]
		public string Stage { get; set; }


		[DataMember(Name="start")]
		public RecoveryStartStatus Start { get; set; }


		[DataMember(Name="start_time_in_millis")]
		public DateTimeOffset StartTimeInMillis { get; set; }


		[DataMember(Name="stop_time_in_millis")]
		public DateTimeOffset StopTimeInMillis { get; set; }


		[DataMember(Name="target")]
		public RecoveryOrigin Target { get; set; }


		[DataMember(Name="total_time_in_millis")]
		public long TotalTimeInMillis { get; set; }


		[DataMember(Name="translog")]
		public RecoveryTranslogStatus Translog { get; set; }


		[DataMember(Name="type")]
		public string Type { get; set; }


		[DataMember(Name="verify_index")]
		public RecoveryVerifyIndex VerifyIndex { get; set; }

	}
}
