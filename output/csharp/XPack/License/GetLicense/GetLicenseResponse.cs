using Nest.XPack;
using Nest.CommonAbstractions;
using System;
using System.Collections.Generic;
using System.Runtime.Serialization;
namespace Nest.XPack {

	public class GetLicenseResponse : IResponse {
		
		[DataMember(Name="license")]
		public LicenseInformation License { get; set; }

	}
}
