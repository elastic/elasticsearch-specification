using Nest.Internal;
using Nest.CommonAbstractions;
using System;
using System.Collections.Generic;
using System.Runtime.Serialization;
namespace Nest.XPack {

	public class InvalidateUserAccessTokenResponse : IResponse {
		
		[DataMember(Name="error_count")]
		public long ErrorCount { get; set; }


		[DataMember(Name="error_details")]
		public List<ErrorCause> ErrorDetails { get; set; }


		[DataMember(Name="invalidated_tokens")]
		public long InvalidatedTokens { get; set; }


		[DataMember(Name="previously_invalidated_tokens")]
		public long PreviouslyInvalidatedTokens { get; set; }

	}
}
