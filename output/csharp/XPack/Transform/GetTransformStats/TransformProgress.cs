using Nest.Internal;
using System;
using System.Collections.Generic;
using System.Runtime.Serialization;
namespace Nest.XPack {

	public class TransformProgress  {
		
		[DataMember(Name="docs_indexed")]
		public long DocsIndexed { get; set; }


		[DataMember(Name="docs_processed")]
		public long DocsProcessed { get; set; }


		[DataMember(Name="docs_remaining")]
		public long DocsRemaining { get; set; }


		[DataMember(Name="percent_complete")]
		public double PercentComplete { get; set; }


		[DataMember(Name="total_docs")]
		public long TotalDocs { get; set; }

	}
}
