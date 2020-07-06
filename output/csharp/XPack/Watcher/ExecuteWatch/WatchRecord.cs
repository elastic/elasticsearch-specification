using Nest.XPack;
using System;
using System.Collections.Generic;
using System.Runtime.Serialization;
namespace Nest.XPack {

	public class WatchRecord  {
		
		[DataMember(Name="condition")]
		public ConditionContainer Condition { get; set; }


		[DataMember(Name="input")]
		public InputContainer Input { get; set; }


		[DataMember(Name="messages")]
		public List<string> Messages { get; set; }


		[DataMember(Name="metadata")]
		public IDictionary<string, object> Metadata { get; set; }


		[DataMember(Name="node")]
		public string Node { get; set; }


		[DataMember(Name="result")]
		public ExecutionResult Result { get; set; }


		[DataMember(Name="state")]
		public ActionExecutionState State { get; set; }


		[DataMember(Name="trigger_event")]
		public TriggerEventResult TriggerEvent { get; set; }


		[DataMember(Name="user")]
		public string User { get; set; }


		[DataMember(Name="watch_id")]
		public string WatchId { get; set; }

	}
}
