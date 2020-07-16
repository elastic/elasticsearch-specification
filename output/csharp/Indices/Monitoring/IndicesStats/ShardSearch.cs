using Nest.Internal;
using System;
using System.Collections.Generic;
using System.Runtime.Serialization;
namespace Nest.Indices {

	public class ShardSearch  {
		
		[DataMember(Name="fetch_current")]
		public long FetchCurrent { get; set; }


		[DataMember(Name="fetch_time_in_millis")]
		public long FetchTimeInMillis { get; set; }


		[DataMember(Name="fetch_total")]
		public long FetchTotal { get; set; }


		[DataMember(Name="open_contexts")]
		public long OpenContexts { get; set; }


		[DataMember(Name="query_current")]
		public long QueryCurrent { get; set; }


		[DataMember(Name="query_time_in_millis")]
		public long QueryTimeInMillis { get; set; }


		[DataMember(Name="query_total")]
		public long QueryTotal { get; set; }


		[DataMember(Name="scroll_current")]
		public long ScrollCurrent { get; set; }


		[DataMember(Name="scroll_time_in_millis")]
		public long ScrollTimeInMillis { get; set; }


		[DataMember(Name="scroll_total")]
		public long ScrollTotal { get; set; }


		[DataMember(Name="suggest_current")]
		public long SuggestCurrent { get; set; }


		[DataMember(Name="suggest_time_in_millis")]
		public long SuggestTimeInMillis { get; set; }


		[DataMember(Name="suggest_total")]
		public long SuggestTotal { get; set; }

	}
}
