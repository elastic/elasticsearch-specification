using Nest.XPack;
using System;
using System.Collections.Generic;
using System.Runtime.Serialization;
namespace Nest.XPack {

	public class InputContainer  {
		
		[DataMember(Name="chain")]
		public ChainInput Chain { get; set; }


		[DataMember(Name="http")]
		public HttpInput Http { get; set; }


		[DataMember(Name="search")]
		public SearchInput Search { get; set; }


		[DataMember(Name="simple")]
		public SimpleInput Simple { get; set; }

	}
}
