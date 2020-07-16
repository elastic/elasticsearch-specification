using Nest.Internal;
using Nest.Cat;
using System;
using System.Collections.Generic;
using System.Runtime.Serialization;
namespace Nest.Cat {

	public class CatNodeAttributesRecord : ICatRecord {
		
		[DataMember(Name="attr")]
		public string Attr { get; set; }


		[DataMember(Name="host")]
		public string Host { get; set; }


		[DataMember(Name="id")]
		public string Id { get; set; }


		[DataMember(Name="ip")]
		public string Ip { get; set; }


		[DataMember(Name="node")]
		public string Node { get; set; }


		[DataMember(Name="port")]
		public long Port { get; set; }


		[DataMember(Name="pid")]
		public long Pid { get; set; }


		[DataMember(Name="value")]
		public string Value { get; set; }

	}
}
