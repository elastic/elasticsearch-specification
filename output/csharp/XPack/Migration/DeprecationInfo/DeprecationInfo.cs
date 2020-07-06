using Nest.XPack;
using System;
using System.Collections.Generic;
using System.Runtime.Serialization;
namespace Nest.XPack {

	public class DeprecationInfo  {
		
		[DataMember(Name="details")]
		public string Details { get; set; }


		[DataMember(Name="level")]
		public DeprecationWarningLevel Level { get; set; }


		[DataMember(Name="message")]
		public string Message { get; set; }


		[DataMember(Name="url")]
		public string Url { get; set; }

	}
}
