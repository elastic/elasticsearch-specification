using Nest.Internal;
using Nest.CommonOptions;
using Nest.CommonAbstractions;
using System;
using System.Collections.Generic;
using System.Runtime.Serialization;
namespace Nest.XPack {

	public class LifecycleExplain  {
		
		[DataMember(Name="action")]
		public string Action { get; set; }


		[DataMember(Name="action_time_millis")]
		public DateTimeOffset ActionTimeMillis { get; set; }


		[DataMember(Name="age")]
		public Time Age { get; set; }


		[DataMember(Name="failed_step")]
		public string FailedStep { get; set; }


		[DataMember(Name="failed_step_retry_count")]
		public int FailedStepRetryCount { get; set; }


		[DataMember(Name="index")]
		public IndexName Index { get; set; }


		[DataMember(Name="is_auto_retryable_error")]
		public bool IsAutoRetryableError { get; set; }


		[DataMember(Name="lifecycle_date_millis")]
		public DateTimeOffset LifecycleDateMillis { get; set; }


		[DataMember(Name="managed")]
		public bool Managed { get; set; }


		[DataMember(Name="phase")]
		public string Phase { get; set; }


		[DataMember(Name="phase_time_millis")]
		public DateTimeOffset PhaseTimeMillis { get; set; }


		[DataMember(Name="policy")]
		public string Policy { get; set; }


		[DataMember(Name="step")]
		public string Step { get; set; }


		[DataMember(Name="step_info")]
		public IDictionary<string, object> StepInfo { get; set; }


		[DataMember(Name="step_time_millis")]
		public DateTimeOffset StepTimeMillis { get; set; }

	}
}
