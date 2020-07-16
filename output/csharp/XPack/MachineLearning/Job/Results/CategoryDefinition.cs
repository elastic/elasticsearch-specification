using Nest.Internal;
using System;
using System.Collections.Generic;
using System.Runtime.Serialization;
namespace Nest.XPack {

	public class CategoryDefinition  {
		
		[DataMember(Name="category_id")]
		public long CategoryId { get; set; }


		[DataMember(Name="examples")]
		public List<string> Examples { get; set; }


		[DataMember(Name="job_id")]
		public string JobId { get; set; }


		[DataMember(Name="max_matching_length")]
		public long MaxMatchingLength { get; set; }


		[DataMember(Name="regex")]
		public string Regex { get; set; }


		[DataMember(Name="terms")]
		public string Terms { get; set; }

	}
}
