using Nest.XPack;
using Nest.CommonAbstractions;
using System;
using System.Collections.Generic;
using System.Runtime.Serialization;
namespace Nest.XPack {

	public class XPackInfoResponse : IResponse {
		
		[DataMember(Name="build")]
		public XPackBuildInformation Build { get; set; }


		[DataMember(Name="features")]
		public XPackFeatures Features { get; set; }


		[DataMember(Name="license")]
		public MinimalLicenseInformation License { get; set; }


		[DataMember(Name="tagline")]
		public string Tagline { get; set; }

	}
}
