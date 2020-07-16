using Nest.Internal;
using System;
using System.Collections.Generic;
using System.Runtime.Serialization;
namespace Nest.Search {

	public class LinearInterpolationSmoothingModel  {
		
		[DataMember(Name="bigram_lambda")]
		public double BigramLambda { get; set; }


		[DataMember(Name="trigram_lambda")]
		public double TrigramLambda { get; set; }


		[DataMember(Name="unigram_lambda")]
		public double UnigramLambda { get; set; }

	}
}
