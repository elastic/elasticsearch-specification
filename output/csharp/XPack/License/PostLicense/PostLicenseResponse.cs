using Nest.XPack;
using Nest.CommonAbstractions;
using System;
using System.Collections.Generic;
using System.Runtime.Serialization;
namespace Nest.XPack {

	public class PostLicenseResponse : IResponse {
		
		[DataMember(Name="acknowledge")]
		public LicenseAcknowledgement Acknowledge { get; set; }


		[DataMember(Name="acknowledged")]
		public bool Acknowledged { get; set; }


		[DataMember(Name="license_status")]
		public LicenseStatus LicenseStatus { get; set; }

	}
}
