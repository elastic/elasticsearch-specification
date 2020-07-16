using Nest.Internal;
using System;
using System.Collections.Generic;
using System.Runtime.Serialization;
namespace Nest.Cluster {

	public class LoadAverageStats  {
		
		[DataMember(Name="15m")]
		public float Average15m { get; set; }


		[DataMember(Name="5m")]
		public float Average5m { get; set; }


		[DataMember(Name="1m")]
		public float Average1m { get; set; }

	}
}
