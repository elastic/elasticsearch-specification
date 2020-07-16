using Nest.XPack;
using System;
using System.Collections.Generic;
using System.Runtime.Serialization;
namespace Nest.XPack {

	public class HttpInputAuthentication  {
		
		[DataMember(Name="basic")]
		public HttpInputBasicAuthentication Basic { get; set; }

	}
}
