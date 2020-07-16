using Nest.CommonAbstractions;
using Nest.Internal;
using Nest.XPack;
using System;
using System.Collections.Generic;
using System.Runtime.Serialization;
namespace Nest.XPack {

	public class GraphVertexDefinition  {
		
		[DataMember(Name="exclude")]
		public List<string> Exclude { get; set; }


		[DataMember(Name="field")]
		public Field Field { get; set; }


		[DataMember(Name="include")]
		public List<GraphVertexInclude> Include { get; set; }


		[DataMember(Name="min_doc_count")]
		public long MinDocCount { get; set; }


		[DataMember(Name="shard_min_doc_count")]
		public long ShardMinDocCount { get; set; }


		[DataMember(Name="size")]
		public int Size { get; set; }

	}
}
