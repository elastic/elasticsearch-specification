using Nest.Internal;
using Nest.CommonAbstractions;
using System;
using System.Collections.Generic;
using System.Runtime.Serialization;
namespace Nest.XPack {

	public class InvalidateApiKeyResponse : IResponse {
		
		[DataMember(Name="error_count")]
		public int ErrorCount { get; set; }


		[DataMember(Name="error_details")]
		public List<ErrorCause> ErrorDetails { get; set; }


		[DataMember(Name="invalidated_api_keys")]
		public List<string> InvalidatedApiKeys { get; set; }


		[DataMember(Name="previously_invalidated_api_keys")]
		public List<string> PreviouslyInvalidatedApiKeys { get; set; }

	}
}
