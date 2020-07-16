using Nest.XPack;
using Nest.CommonAbstractions;
using System;
using System.Collections.Generic;
using System.Runtime.Serialization;
namespace Nest.XPack {

	public class ExplainLifecycleResponse : IResponse {
		
		[DataMember(Name="indices")]
		public IDictionary<string, LifecycleExplain> Indices { get; set; }

	}
}
