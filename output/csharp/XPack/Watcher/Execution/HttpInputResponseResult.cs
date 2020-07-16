using Nest.Internal;
using System;
using System.Collections.Generic;
using System.Runtime.Serialization;
namespace Nest.XPack {

	public class HttpInputResponseResult  {
		
		[DataMember(Name="body")]
		public string Body { get; set; }


		[DataMember(Name="headers")]
		public IDictionary<string, List<string>> Headers { get; set; }


		[DataMember(Name="status")]
		public int Status { get; set; }

	}
}
