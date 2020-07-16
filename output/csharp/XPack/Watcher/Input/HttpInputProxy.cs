using Nest.Internal;
using System;
using System.Collections.Generic;
using System.Runtime.Serialization;
namespace Nest.XPack {

	public class HttpInputProxy  {
		
		[DataMember(Name="host")]
		public string Host { get; set; }


		[DataMember(Name="port")]
		public int Port { get; set; }

	}
}
