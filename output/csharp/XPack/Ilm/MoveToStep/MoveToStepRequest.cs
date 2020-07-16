using Nest.XPack;
using Nest.CommonAbstractions;
using System;
using System.Collections.Generic;
using System.Runtime.Serialization;
namespace Nest.XPack {

	public class MoveToStepRequest : RequestBase {
		
		[DataMember(Name="current_step")]
		public StepKey CurrentStep { get; set; }


		[DataMember(Name="next_step")]
		public StepKey NextStep { get; set; }

	}
}
