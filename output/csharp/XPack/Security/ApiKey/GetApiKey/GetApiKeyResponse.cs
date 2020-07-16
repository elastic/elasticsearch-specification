using Nest.XPack;
using Nest.CommonAbstractions;
using System;
using System.Collections.Generic;
using System.Runtime.Serialization;
namespace Nest.XPack {

	public class GetApiKeyResponse : IResponse {
		
		[DataMember(Name="api_keys")]
		public List<ApiKeys> ApiKeys { get; set; }

	}
}
