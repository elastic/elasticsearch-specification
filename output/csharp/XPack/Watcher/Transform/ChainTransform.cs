using Nest.XPack;
using System;
using System.Collections.Generic;
using System.Runtime.Serialization;
namespace Nest.XPack {

	public class ChainTransform  {
		
		[DataMember(Name="transforms")]
		public List<TransformContainer> Transforms { get; set; }

	}
}
