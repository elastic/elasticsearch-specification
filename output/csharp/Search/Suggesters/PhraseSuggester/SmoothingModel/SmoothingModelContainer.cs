using Nest.Search;
using System;
using System.Collections.Generic;
using System.Runtime.Serialization;
namespace Nest.Search {

	public class SmoothingModelContainer  {
		
		[DataMember(Name="laplace")]
		public LaplaceSmoothingModel Laplace { get; set; }


		[DataMember(Name="linear_interpolation")]
		public LinearInterpolationSmoothingModel LinearInterpolation { get; set; }


		[DataMember(Name="stupid_backoff")]
		public StupidBackoffSmoothingModel StupidBackoff { get; set; }

	}
}
