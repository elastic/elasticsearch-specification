using Nest.XPack;
using Nest.CommonAbstractions;
using System;
using System.Collections.Generic;
using System.Runtime.Serialization;
namespace Nest.XPack {

	public class GetSnapshotLifecycleResponse : DictionaryResponseBase<string, SnapshotLifecyclePolicyMetadata> {
		
		[DataMember(Name="policies")]
		public IDictionary<string, SnapshotLifecyclePolicyMetadata> Policies { get; set; }

	}
}
