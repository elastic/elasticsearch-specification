using Nest.XPack;
using System;
using System.Collections.Generic;
using System.Runtime.Serialization;
namespace Nest.XPack {

	public class Watch  {
		
		[DataMember(Name="actions")]
		public IDictionary<string, Action> Actions { get; set; }


		[DataMember(Name="condition")]
		public ConditionContainer Condition { get; set; }


		[DataMember(Name="input")]
		public InputContainer Input { get; set; }


		[DataMember(Name="metadata")]
		public IDictionary<string, object> Metadata { get; set; }


		[DataMember(Name="status")]
		public WatchStatus Status { get; set; }


		[DataMember(Name="throttle_period")]
		public string ThrottlePeriod { get; set; }


		[DataMember(Name="transform")]
		public TransformContainer Transform { get; set; }


		[DataMember(Name="trigger")]
		public TriggerContainer Trigger { get; set; }

	}
}
