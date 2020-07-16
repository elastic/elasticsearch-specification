using Nest.Cat;
using System;
using System.Collections.Generic;
using System.Runtime.Serialization;
namespace Nest.Cat {

	public class CatCountRecord : ICatRecord {
		
		[DataMember(Name="count")]
		public string Count { get; set; }


		[DataMember(Name="epoch")]
		public string Epoch { get; set; }


		[DataMember(Name="timestamp")]
		public string Timestamp { get; set; }

	}
}
