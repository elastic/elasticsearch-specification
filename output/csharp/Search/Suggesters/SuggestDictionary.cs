using Nest.Search;
using System;
using System.Collections.Generic;
using System.Runtime.Serialization;
namespace Nest.Search {

	public class SuggestDictionary<T>  {
		
		[DataMember(Name="item")]
		public List<Suggest<T>> Item { get; set; }


		[DataMember(Name="keys")]
		public List<string> Keys { get; set; }


		[DataMember(Name="values")]
		public List<List<Suggest<T>>> Values { get; set; }

	}
}
