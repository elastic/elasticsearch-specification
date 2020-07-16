using Nest.Cat;
using System;
using System.Collections.Generic;
using System.Runtime.Serialization;
namespace Nest.Cat {

	public class CatAliasesRecord : ICatRecord {
		
		[DataMember(Name="alias")]
		public string Alias { get; set; }


		[DataMember(Name="filter")]
		public string Filter { get; set; }


		[DataMember(Name="index")]
		public string Index { get; set; }


		[DataMember(Name="indexRouting")]
		public string IndexRouting { get; set; }


		[DataMember(Name="searchRouting")]
		public string SearchRouting { get; set; }

	}
}
