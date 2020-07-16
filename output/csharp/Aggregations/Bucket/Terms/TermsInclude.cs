using Nest.Internal;
using System;
using System.Collections.Generic;
using System.Runtime.Serialization;
namespace Nest.Aggregations {

	public class TermsInclude  {
		
		[DataMember(Name="num_partitions")]
		public long NumPartitions { get; set; }


		[DataMember(Name="partition")]
		public long Partition { get; set; }


		[DataMember(Name="pattern")]
		public string Pattern { get; set; }


		[DataMember(Name="values")]
		public List<string> Values { get; set; }

	}
}
