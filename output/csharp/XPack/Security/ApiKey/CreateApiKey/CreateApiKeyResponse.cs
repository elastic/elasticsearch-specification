using Nest.Internal;
using Nest.CommonAbstractions;
using System;
using System.Collections.Generic;
using System.Runtime.Serialization;
namespace Nest.XPack {

	public class CreateApiKeyResponse : IResponse {
		
		[DataMember(Name="api_key")]
		public string ApiKey { get; set; }


		[DataMember(Name="expiration")]
		public DateTimeOffset Expiration { get; set; }


		[DataMember(Name="id")]
		public string Id { get; set; }


		[DataMember(Name="name")]
		public string Name { get; set; }

	}
}
