using Nest.XPack;
using Nest.CommonAbstractions;
using System;
using System.Collections.Generic;
using System.Runtime.Serialization;
namespace Nest.XPack {

	public class ExecuteWatchRequest : RequestBase {
		
		[DataMember(Name="debug")]
		public bool Debug { get; set; }


		[DataMember(Name="action_modes")]
		public IDictionary<string, ActionExecutionMode> ActionModes { get; set; }


		[DataMember(Name="alternative_input")]
		public IDictionary<string, object> AlternativeInput { get; set; }


		[DataMember(Name="ignore_condition")]
		public bool IgnoreCondition { get; set; }


		[DataMember(Name="record_execution")]
		public bool RecordExecution { get; set; }


		[DataMember(Name="simulated_actions")]
		public SimulatedActions SimulatedActions { get; set; }


		[DataMember(Name="trigger_data")]
		public ScheduleTriggerEvent TriggerData { get; set; }


		[DataMember(Name="watch")]
		public Watch Watch { get; set; }

	}
}
