using Nest.CommonOptions;
using Nest.CommonAbstractions;
using System;
using System.Collections.Generic;
using System.Runtime.Serialization;
namespace Nest.XPack {

	public class DeleteForecastRequest : RequestBase {
		
		[DataMember(Name="allow_no_forecasts")]
		public bool AllowNoForecasts { get; set; }


		[DataMember(Name="timeout")]
		public Time Timeout { get; set; }

	}
}
