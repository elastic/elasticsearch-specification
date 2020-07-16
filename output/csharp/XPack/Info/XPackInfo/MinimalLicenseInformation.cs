using Nest.Internal;
using Nest.XPack;
using System;
using System.Collections.Generic;
using System.Runtime.Serialization;
namespace Nest.XPack {

	public class MinimalLicenseInformation  {
		
		[DataMember(Name="expiry_date_in_millis")]
		public long ExpiryDateInMillis { get; set; }


		[DataMember(Name="mode")]
		public LicenseType Mode { get; set; }


		[DataMember(Name="status")]
		public LicenseStatus Status { get; set; }


		[DataMember(Name="type")]
		public LicenseType Type { get; set; }


		[DataMember(Name="uid")]
		public string Uid { get; set; }

	}
}
