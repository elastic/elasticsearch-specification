using Nest.Internal;
using Nest.CommonAbstractions;
using System;
using System.Collections.Generic;
using System.Runtime.Serialization;
namespace Nest.XPack {

	public class GetUserAccessTokenResponse : IResponse {
		
		[DataMember(Name="access_token")]
		public string AccessToken { get; set; }


		[DataMember(Name="expires_in")]
		public long ExpiresIn { get; set; }


		[DataMember(Name="scope")]
		public string Scope { get; set; }


		[DataMember(Name="type")]
		public string Type { get; set; }

	}
}
