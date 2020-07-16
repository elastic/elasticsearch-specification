using System;
using System.Collections.Generic;
using System.Runtime.Serialization;
namespace Nest.XPack {

	public class XPackUser  {
		
		[DataMember(Name="email")]
		public string Email { get; set; }


		[DataMember(Name="full_name")]
		public string FullName { get; set; }


		[DataMember(Name="metadata")]
		public IDictionary<string, object> Metadata { get; set; }


		[DataMember(Name="roles")]
		public List<string> Roles { get; set; }


		[DataMember(Name="username")]
		public string Username { get; set; }

	}
}
