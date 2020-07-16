using Nest.CommonAbstractions;
using System;
using System.Collections.Generic;
using System.Runtime.Serialization;
namespace Nest.XPack {

	public class GetLicenseRequest : RequestBase {
		
		[DataMember(Name="accept_enterprise")]
		public bool AcceptEnterprise { get; set; }


		[DataMember(Name="local")]
		public bool Local { get; set; }

	}
}
