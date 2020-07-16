using Nest.XPack;
using Nest.CommonAbstractions;
using Nest.Internal;
using System;
using System.Collections.Generic;
using System.Runtime.Serialization;
namespace Nest.XPack {

	public class DetectionRule  {
		
		[DataMember(Name="actions")]
		public List<RuleAction> Actions { get; set; }


		[DataMember(Name="conditions")]
		public List<RuleCondition> Conditions { get; set; }


		[DataMember(Name="scope")]
		public IDictionary<Field, FilterRef> Scope { get; set; }

	}
}
