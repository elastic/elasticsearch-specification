using Nest.XPack;
using Nest.CommonAbstractions;
using System;
using System.Collections.Generic;
using System.Runtime.Serialization;
namespace Nest.XPack {

	public class AuthenticateResponse : IResponse {
		
		[DataMember(Name="authentication_realm")]
		public RealmInfo AuthenticationRealm { get; set; }


		[DataMember(Name="email")]
		public string Email { get; set; }


		[DataMember(Name="full_name")]
		public string FullName { get; set; }


		[DataMember(Name="lookup_realm")]
		public RealmInfo LookupRealm { get; set; }


		[DataMember(Name="metadata")]
		public IDictionary<string, object> Metadata { get; set; }


		[DataMember(Name="roles")]
		public List<string> Roles { get; set; }


		[DataMember(Name="username")]
		public string Username { get; set; }

	}
}
