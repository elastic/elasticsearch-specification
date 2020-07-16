using Nest.XPack;
using Nest.Internal;
using Nest.CommonOptions;
using System;
using System.Collections.Generic;
using System.Runtime.Serialization;
namespace Nest.XPack {

	public class Action  {
		
		[DataMember(Name="action_type")]
		public ActionType ActionType { get; set; }


		[DataMember(Name="condition")]
		public ConditionContainer Condition { get; set; }


		[DataMember(Name="foreach")]
		public string Foreach { get; set; }


		[DataMember(Name="max_iterations")]
		public int MaxIterations { get; set; }


		[DataMember(Name="name")]
		public string Name { get; set; }


		[DataMember(Name="throttle_period")]
		public Time ThrottlePeriod { get; set; }


		[DataMember(Name="transform")]
		public TransformContainer Transform { get; set; }

	}
}
