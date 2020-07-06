using Nest.XPack;
using Nest.CommonAbstractions;
using System;
using System.Collections.Generic;
using System.Runtime.Serialization;
namespace Nest.XPack {

	public class PostLicenseRequest : RequestBase {
		
		[DataMember(Name="acknowledge")]
		public bool Acknowledge { get; set; }


		[DataMember(Name="license")]
		public License License { get; set; }

	}
}
