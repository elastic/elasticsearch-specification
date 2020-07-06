using Nest.XPack;
using System;
using System.Collections.Generic;
using System.Runtime.Serialization;
namespace Nest.XPack {

	public class ActivationStatus  {
		
		[DataMember(Name="actions")]
		public IDictionary<string, ActionStatus> Actions { get; set; }


		[DataMember(Name="state")]
		public ActivationState State { get; set; }

	}
}
