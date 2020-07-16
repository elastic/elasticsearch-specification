using Nest.CommonAbstractions;
using Nest.Internal;
using Nest.XPack;
using System;
using System.Collections.Generic;
using System.Runtime.Serialization;
namespace Nest.XPack {

	public class GetRollupCapabilitiesResponse : DictionaryResponseBase<IndexName, RollupCapabilities> {
		
		[DataMember(Name="indices")]
		public IDictionary<IndexName, RollupCapabilities> Indices { get; set; }

	}
}
