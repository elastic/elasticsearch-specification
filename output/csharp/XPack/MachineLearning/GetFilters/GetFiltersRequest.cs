using Nest.Internal;
using Nest.CommonAbstractions;
using System;
using System.Collections.Generic;
using System.Runtime.Serialization;
namespace Nest.XPack {

	public class GetFiltersRequest : RequestBase {
		
		[DataMember(Name="from")]
		public int From { get; set; }


		[DataMember(Name="size")]
		public int Size { get; set; }

	}
}
