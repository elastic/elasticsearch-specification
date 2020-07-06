using Nest.XPack;
using Nest.CommonOptions;
using Nest.Internal;
using System;
using System.Collections.Generic;
using System.Runtime.Serialization;
namespace Nest.XPack {

	public class HttpInputRequest  {
		
		[DataMember(Name="auth")]
		public HttpInputAuthentication Auth { get; set; }


		[DataMember(Name="body")]
		public string Body { get; set; }


		[DataMember(Name="connection_timeout")]
		public Time ConnectionTimeout { get; set; }


		[DataMember(Name="headers")]
		public IDictionary<string, string> Headers { get; set; }


		[DataMember(Name="host")]
		public string Host { get; set; }


		[DataMember(Name="method")]
		public HttpInputMethod Method { get; set; }


		[DataMember(Name="params")]
		public IDictionary<string, string> Params { get; set; }


		[DataMember(Name="path")]
		public string Path { get; set; }


		[DataMember(Name="port")]
		public int Port { get; set; }


		[DataMember(Name="proxy")]
		public HttpInputProxy Proxy { get; set; }


		[DataMember(Name="read_timeout")]
		public Time ReadTimeout { get; set; }


		[DataMember(Name="scheme")]
		public ConnectionScheme Scheme { get; set; }


		[DataMember(Name="url")]
		public string Url { get; set; }

	}
}
