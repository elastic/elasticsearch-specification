using Nest.CommonAbstractions;
using Nest.Internal;
using Nest.XPack;
using System;
using System.Collections.Generic;
using System.Runtime.Serialization;
namespace Nest.XPack {

	public class RollupFieldMetric  {
		
		[DataMember(Name="field")]
		public Field Field { get; set; }


		[DataMember(Name="metrics")]
		public List<RollupMetric> Metrics { get; set; }

	}
}
