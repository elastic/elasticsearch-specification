using Nest.Internal;
using System;
using System.Collections.Generic;
using System.Runtime.Serialization;
namespace Nest.XPack {

	public class GraphVertex  {
		
		[DataMember(Name="depth")]
		public long Depth { get; set; }


		[DataMember(Name="field")]
		public string Field { get; set; }


		[DataMember(Name="term")]
		public string Term { get; set; }


		[DataMember(Name="weight")]
		public double Weight { get; set; }

	}
}
