using Nest.XPack;
using Nest.CommonAbstractions;
using System;
using System.Collections.Generic;
using System.Runtime.Serialization;
namespace Nest.XPack {

	public class GetUserAccessTokenRequest : RequestBase {
		
		[DataMember(Name="grant_type")]
		public AccessTokenGrantType GrantType { get; set; }


		[DataMember(Name="scope")]
		public string Scope { get; set; }

	}
}
