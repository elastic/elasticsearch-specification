using Nest.CommonAbstractions;
using Nest.Internal;
using Nest.XPack;
using System;
using System.Collections.Generic;
using System.Runtime.Serialization;
namespace Nest.XPack {

	public class GetRollupIndexCapabilitiesResponse : DictionaryResponseBase<IndexName, RollupIndexCapabilities> {
		
		[DataMember(Name="indices")]
		public IDictionary<IndexName, RollupIndexCapabilities> Indices { get; set; }

	}
}
