using Nest.XPack;
using System;
using System.Collections.Generic;
using System.Runtime.Serialization;
namespace Nest.XPack {

	public class Defaults  {
		
		[DataMember(Name="anomaly_detectors")]
		public AnomalyDetectors AnomalyDetectors { get; set; }


		[DataMember(Name="datafeeds")]
		public Datafeeds Datafeeds { get; set; }

	}
}
