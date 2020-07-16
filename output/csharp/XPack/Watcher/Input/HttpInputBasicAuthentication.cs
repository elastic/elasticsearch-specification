using System;
using System.Collections.Generic;
using System.Runtime.Serialization;
namespace Nest.XPack {

	public class HttpInputBasicAuthentication  {
		
		[DataMember(Name="password")]
		public string Password { get; set; }


		[DataMember(Name="username")]
		public string Username { get; set; }

	}
}
