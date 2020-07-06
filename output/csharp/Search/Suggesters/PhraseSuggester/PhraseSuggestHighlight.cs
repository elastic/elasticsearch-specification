using System;
using System.Collections.Generic;
using System.Runtime.Serialization;
namespace Nest.Search {

	public class PhraseSuggestHighlight  {
		
		[DataMember(Name="post_tag")]
		public string PostTag { get; set; }


		[DataMember(Name="pre_tag")]
		public string PreTag { get; set; }

	}
}
