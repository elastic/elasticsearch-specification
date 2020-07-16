using Nest.Internal;
using System;
using System.Collections.Generic;
using System.Runtime.Serialization;
namespace Nest.XPack {

	public class GraphVertexInclude  {
		
		[DataMember(Name="boost")]
		public double Boost { get; set; }


		[DataMember(Name="term")]
		public string Term { get; set; }

	}
}
