using Nest.Cat;
using System;
using System.Collections.Generic;
using System.Runtime.Serialization;
namespace Nest.Cat {

	public class CatFielddataRecord : ICatRecord {
		
		[DataMember(Name="field")]
		public string Field { get; set; }


		[DataMember(Name="host")]
		public string Host { get; set; }


		[DataMember(Name="id")]
		public string Id { get; set; }


		[DataMember(Name="ip")]
		public string Ip { get; set; }


		[DataMember(Name="node")]
		public string Node { get; set; }


		[DataMember(Name="size")]
		public string Size { get; set; }

	}
}
