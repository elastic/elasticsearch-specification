using Nest.XPack;
using System;
using System.Collections.Generic;
using System.Runtime.Serialization;
namespace Nest.XPack {

	public class ConditionContainer  {
		
		[DataMember(Name="always")]
		public AlwaysCondition Always { get; set; }


		[DataMember(Name="array_compare")]
		public ArrayCompareCondition ArrayCompare { get; set; }


		[DataMember(Name="compare")]
		public CompareCondition Compare { get; set; }


		[DataMember(Name="never")]
		public NeverCondition Never { get; set; }


		[DataMember(Name="script")]
		public ScriptCondition Script { get; set; }

	}
}
