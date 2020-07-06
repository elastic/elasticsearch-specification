using Nest.XPack;
using System;
using System.Collections.Generic;
using System.Runtime.Serialization;
namespace Nest.XPack {

	public class TransformContainer  {
		
		[DataMember(Name="chain")]
		public ChainTransform Chain { get; set; }


		[DataMember(Name="script")]
		public ScriptTransform Script { get; set; }


		[DataMember(Name="search")]
		public SearchTransform Search { get; set; }

	}
}
