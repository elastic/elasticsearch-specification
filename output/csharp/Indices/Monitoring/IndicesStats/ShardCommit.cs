using Nest.Internal;
using System;
using System.Collections.Generic;
using System.Runtime.Serialization;
namespace Nest.Indices {

	public class ShardCommit  {
		
		[DataMember(Name="generation")]
		public int Generation { get; set; }


		[DataMember(Name="id")]
		public string Id { get; set; }


		[DataMember(Name="num_docs")]
		public long NumDocs { get; set; }


		[DataMember(Name="user_data")]
		public IDictionary<string, string> UserData { get; set; }

	}
}
