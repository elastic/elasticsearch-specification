using Nest.CommonAbstractions;
using Nest.Internal;
using System;
using System.Collections.Generic;
using System.Runtime.Serialization;
namespace Nest.XPack {

	public class TransformDestination  {
		
		[DataMember(Name="index")]
		public IndexName Index { get; set; }


		[DataMember(Name="pipeline")]
		public string Pipeline { get; set; }

	}
}
