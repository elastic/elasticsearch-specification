using Nest.CommonAbstractions;
using Nest.Internal;
using Nest.QueryDsl;
using Nest.Document;
using Nest.Search;
using System;
using System.Collections.Generic;
using System.Runtime.Serialization;
namespace Nest.Document {

	public class ReindexSource  {
		
		[DataMember(Name="index")]
		public IndicesNames Index { get; set; }


		[DataMember(Name="query")]
		public QueryContainer Query { get; set; }


		[DataMember(Name="remote")]
		public RemoteSource Remote { get; set; }


		[DataMember(Name="size")]
		public int Size { get; set; }


		[DataMember(Name="slice")]
		public SlicedScroll Slice { get; set; }


		[DataMember(Name="sort")]
		public List<Sort> Sort { get; set; }


		[DataMember(Name="_source")]
		public List<Field> Source { get; set; }

	}
}
