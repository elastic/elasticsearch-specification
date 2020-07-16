using System;
using System.Collections.Generic;
using System.Runtime.Serialization;
namespace Nest.Search {

	public class ValidationExplanation  {
		
		[DataMember(Name="error")]
		public string Error { get; set; }


		[DataMember(Name="explanation")]
		public string Explanation { get; set; }


		[DataMember(Name="index")]
		public string Index { get; set; }


		[DataMember(Name="valid")]
		public bool Valid { get; set; }

	}
}
