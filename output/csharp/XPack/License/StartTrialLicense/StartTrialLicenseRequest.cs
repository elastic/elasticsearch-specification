using Nest.CommonAbstractions;
using System;
using System.Collections.Generic;
using System.Runtime.Serialization;
namespace Nest.XPack {

	public class StartTrialLicenseRequest : RequestBase {
		
		[DataMember(Name="acknowledge")]
		public bool Acknowledge { get; set; }


		[DataMember(Name="type_query_string")]
		public string TypeQueryString { get; set; }

	}
}
