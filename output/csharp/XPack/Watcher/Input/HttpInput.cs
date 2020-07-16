using Nest.XPack;
using System;
using System.Collections.Generic;
using System.Runtime.Serialization;
namespace Nest.XPack {

	public class HttpInput  {
		
		[DataMember(Name="extract")]
		public List<string> Extract { get; set; }


		[DataMember(Name="request")]
		public HttpInputRequest Request { get; set; }


		[DataMember(Name="response_content_type")]
		public ResponseContentType ResponseContentType { get; set; }

	}
}
