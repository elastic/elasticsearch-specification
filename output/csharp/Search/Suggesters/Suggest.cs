using Nest.Internal;
using Nest.Search;
using System;
using System.Collections.Generic;
using System.Runtime.Serialization;
namespace Nest.Search {

	public class Suggest<T>  {
		
		[DataMember(Name="length")]
		public int Length { get; set; }


		[DataMember(Name="offset")]
		public int Offset { get; set; }


		[DataMember(Name="options")]
		public List<SuggestOption<T>> Options { get; set; }


		[DataMember(Name="text")]
		public string Text { get; set; }

	}
}
