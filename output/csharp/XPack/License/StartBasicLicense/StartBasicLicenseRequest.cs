using Nest.CommonAbstractions;
using System;
using System.Collections.Generic;
using System.Runtime.Serialization;
namespace Nest.XPack {

	public class StartBasicLicenseRequest : RequestBase {
		
		[DataMember(Name="acknowledge")]
		public bool Acknowledge { get; set; }

	}
}
