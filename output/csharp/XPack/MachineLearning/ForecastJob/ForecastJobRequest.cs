using Nest.CommonOptions;
using Nest.CommonAbstractions;
using System;
using System.Collections.Generic;
using System.Runtime.Serialization;
namespace Nest.XPack {

	public class ForecastJobRequest : RequestBase {
		
		[DataMember(Name="duration")]
		public Time Duration { get; set; }


		[DataMember(Name="expires_in")]
		public Time ExpiresIn { get; set; }

	}
}
