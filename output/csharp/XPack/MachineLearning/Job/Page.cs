using Nest.Internal;
using System;
using System.Collections.Generic;
using System.Runtime.Serialization;
namespace Nest.XPack {

	public class Page  {
		
		[DataMember(Name="from")]
		public int From { get; set; }


		[DataMember(Name="size")]
		public int Size { get; set; }

	}
}
