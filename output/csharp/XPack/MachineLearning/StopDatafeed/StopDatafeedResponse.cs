using Nest.CommonAbstractions;
using System;
using System.Collections.Generic;
using System.Runtime.Serialization;
namespace Nest.XPack {

	public class StopDatafeedResponse : IResponse {
		
		[DataMember(Name="stopped")]
		public bool Stopped { get; set; }

	}
}
