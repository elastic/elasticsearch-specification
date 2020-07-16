using Nest.CommonOptions;
using Nest.Internal;
using System;
using System.Collections.Generic;
using System.Runtime.Serialization;
namespace Nest.Document {

	public class RemoteSource  {
		
		[DataMember(Name="connect_timeout")]
		public Time ConnectTimeout { get; set; }


		[DataMember(Name="host")]
		public Uri Host { get; set; }


		[DataMember(Name="password")]
		public string Password { get; set; }


		[DataMember(Name="socket_timeout")]
		public Time SocketTimeout { get; set; }


		[DataMember(Name="username")]
		public string Username { get; set; }

	}
}
