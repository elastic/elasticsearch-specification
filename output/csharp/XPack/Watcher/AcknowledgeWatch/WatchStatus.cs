using Nest.XPack;
using Nest.Internal;
using System;
using System.Collections.Generic;
using System.Runtime.Serialization;
namespace Nest.XPack {

	public class WatchStatus  {
		
		[DataMember(Name="actions")]
		public IDictionary<string, ActionStatus> Actions { get; set; }


		[DataMember(Name="last_checked")]
		public DateTimeOffset LastChecked { get; set; }


		[DataMember(Name="last_met_condition")]
		public DateTimeOffset LastMetCondition { get; set; }


		[DataMember(Name="state")]
		public ActivationState State { get; set; }


		[DataMember(Name="version")]
		public int Version { get; set; }

	}
}
