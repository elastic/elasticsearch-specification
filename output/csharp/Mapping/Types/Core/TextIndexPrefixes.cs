using Nest.Internal;
using System;
using System.Collections.Generic;
using System.Runtime.Serialization;
namespace Nest.Mapping {

	public class TextIndexPrefixes  {
		
		[DataMember(Name="max_chars")]
		public int MaxChars { get; set; }


		[DataMember(Name="min_chars")]
		public int MinChars { get; set; }

	}
}
