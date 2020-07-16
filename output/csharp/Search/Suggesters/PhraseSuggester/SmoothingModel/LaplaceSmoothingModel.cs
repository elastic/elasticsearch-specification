using Nest.Internal;
using System;
using System.Collections.Generic;
using System.Runtime.Serialization;
namespace Nest.Search {

	public class LaplaceSmoothingModel  {
		
		[DataMember(Name="alpha")]
		public double Alpha { get; set; }

	}
}
