using Nest.Cat;
using System;
using System.Collections.Generic;
using System.Runtime.Serialization;
namespace Nest.Cat {

	public class CatRepositoriesRecord : ICatRecord {
		
		[DataMember(Name="id")]
		public string Id { get; set; }


		[DataMember(Name="type")]
		public string Type { get; set; }

	}
}
