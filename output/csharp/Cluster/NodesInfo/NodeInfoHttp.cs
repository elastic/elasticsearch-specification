using Nest.Internal;
using System;
using System.Collections.Generic;
using System.Runtime.Serialization;
namespace Nest.Cluster {

	public class NodeInfoHttp  {
		
		[DataMember(Name="bound_address")]
		public List<string> BoundAddress { get; set; }


		[DataMember(Name="max_content_length")]
		public string MaxContentLength { get; set; }


		[DataMember(Name="max_content_length_in_bytes")]
		public long MaxContentLengthInBytes { get; set; }


		[DataMember(Name="publish_address")]
		public string PublishAddress { get; set; }

	}
}
