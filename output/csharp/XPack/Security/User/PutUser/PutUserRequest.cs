using Nest.Common;
using Nest.CommonAbstractions;
using System;
using System.Collections.Generic;
using System.Runtime.Serialization;
namespace Nest.XPack {

	public class PutUserRequest : RequestBase {
		
		[DataMember(Name="refresh")]
		public Refresh Refresh { get; set; }


		[DataMember(Name="email")]
		public string Email { get; set; }


		[DataMember(Name="full_name")]
		public string FullName { get; set; }


		[DataMember(Name="metadata")]
		public IDictionary<string, object> Metadata { get; set; }


		[DataMember(Name="password")]
		public string Password { get; set; }


		[DataMember(Name="password_hash")]
		public string PasswordHash { get; set; }


		[DataMember(Name="roles")]
		public List<string> Roles { get; set; }

	}
}
