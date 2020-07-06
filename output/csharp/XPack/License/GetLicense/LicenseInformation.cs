using Nest.Internal;
using Nest.XPack;
using System;
using System.Collections.Generic;
using System.Runtime.Serialization;
namespace Nest.XPack {

	public class LicenseInformation  {
		
		[DataMember(Name="expiry_date")]
		public DateTimeOffset ExpiryDate { get; set; }


		[DataMember(Name="expiry_date_in_millis")]
		public long ExpiryDateInMillis { get; set; }


		[DataMember(Name="issue_date")]
		public DateTimeOffset IssueDate { get; set; }


		[DataMember(Name="issue_date_in_millis")]
		public long IssueDateInMillis { get; set; }


		[DataMember(Name="issued_to")]
		public string IssuedTo { get; set; }


		[DataMember(Name="issuer")]
		public string Issuer { get; set; }


		[DataMember(Name="max_nodes")]
		public long MaxNodes { get; set; }


		[DataMember(Name="max_resource_units")]
		public int MaxResourceUnits { get; set; }


		[DataMember(Name="status")]
		public LicenseStatus Status { get; set; }


		[DataMember(Name="type")]
		public LicenseType Type { get; set; }


		[DataMember(Name="uid")]
		public string Uid { get; set; }

	}
}
