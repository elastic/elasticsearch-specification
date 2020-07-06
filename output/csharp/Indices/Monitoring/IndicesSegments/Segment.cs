using Nest.Internal;
using System;
using System.Collections.Generic;
using System.Runtime.Serialization;
namespace Nest.Indices {

	public class Segment  {
		
		[DataMember(Name="attributes")]
		public IDictionary<string, string> Attributes { get; set; }


		[DataMember(Name="committed")]
		public bool Committed { get; set; }


		[DataMember(Name="compound")]
		public bool Compound { get; set; }


		[DataMember(Name="deleted_docs")]
		public long DeletedDocs { get; set; }


		[DataMember(Name="generation")]
		public int Generation { get; set; }


		[DataMember(Name="memory_in_bytes")]
		public double MemoryInBytes { get; set; }


		[DataMember(Name="search")]
		public bool Search { get; set; }


		[DataMember(Name="size_in_bytes")]
		public double SizeInBytes { get; set; }


		[DataMember(Name="num_docs")]
		public long NumDocs { get; set; }


		[DataMember(Name="version")]
		public string Version { get; set; }

	}
}
