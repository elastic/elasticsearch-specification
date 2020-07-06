using Nest.XPack;
using Nest.Internal;
using System;
using System.Collections.Generic;
using System.Runtime.Serialization;
namespace Nest.XPack {

	public class RuleCondition  {
		
		[DataMember(Name="applies_to")]
		public AppliesTo AppliesTo { get; set; }


		[DataMember(Name="operator")]
		public ConditionOperator Operator { get; set; }


		[DataMember(Name="value")]
		public double Value { get; set; }

	}
}
