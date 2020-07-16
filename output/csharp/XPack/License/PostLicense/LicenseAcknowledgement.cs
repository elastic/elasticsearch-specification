using System;
using System.Collections.Generic;
using System.Runtime.Serialization;
namespace Nest.XPack {

	public class LicenseAcknowledgement  {
		
		[DataMember(Name="license")]
		public List<string> License { get; set; }


		[DataMember(Name="message")]
		public string Message { get; set; }

	}
}
