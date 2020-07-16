using Nest.XPack;
using System;
using System.Collections.Generic;
using System.Runtime.Serialization;
namespace Nest.XPack {

	public class Phases  {
		
		[DataMember(Name="cold")]
		public Phase Cold { get; set; }


		[DataMember(Name="delete")]
		public Phase Delete { get; set; }


		[DataMember(Name="hot")]
		public Phase Hot { get; set; }


		[DataMember(Name="warm")]
		public Phase Warm { get; set; }

	}
}
