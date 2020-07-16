using Nest.CommonAbstractions;
using System;
using System.Collections.Generic;
using System.Runtime.Serialization;
namespace Nest.XPack {

	public class ForecastJobResponse : IResponse {
		
		[DataMember(Name="forecast_id")]
		public string ForecastId { get; set; }

	}
}
