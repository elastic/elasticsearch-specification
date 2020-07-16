using Nest.XPack;
using Nest.CommonAbstractions;
using System;
using System.Collections.Generic;
using System.Runtime.Serialization;
namespace Nest.XPack {

	public class GetEnrichPolicyResponse : IResponse {
		
		[DataMember(Name="policies")]
		public List<NamedPolicyMetadata> Policies { get; set; }

	}
}
