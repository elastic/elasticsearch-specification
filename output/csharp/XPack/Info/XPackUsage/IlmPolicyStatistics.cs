using Nest.Internal;
using Nest.XPack;
using System;
using System.Collections.Generic;
using System.Runtime.Serialization;
namespace Nest.XPack {

	public class IlmPolicyStatistics  {
		
		[DataMember(Name="indices_managed")]
		public int IndicesManaged { get; set; }


		[DataMember(Name="phases")]
		public Phases Phases { get; set; }

	}
}
