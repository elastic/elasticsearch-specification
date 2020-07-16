using Nest.CommonAbstractions;
using Nest.Internal;
using Nest.Search;
using Nest.CommonOptions;
using System;
using System.Collections.Generic;
using System.Runtime.Serialization;
namespace Nest.Aggregations {

	public class TopHitsAggregation  {
		
		[DataMember(Name="docvalue_fields")]
		public List<Field> DocvalueFields { get; set; }


		[DataMember(Name="explain")]
		public bool Explain { get; set; }


		[DataMember(Name="from")]
		public int From { get; set; }


		[DataMember(Name="highlight")]
		public Highlight Highlight { get; set; }


		[DataMember(Name="script_fields")]
		public IDictionary<string, ScriptField> ScriptFields { get; set; }


		[DataMember(Name="size")]
		public int Size { get; set; }


		[DataMember(Name="sort")]
		public List<Sort> Sort { get; set; }


		[DataMember(Name="_source")]
		public Union<bool, SourceFilter> Source { get; set; }


		[DataMember(Name="stored_fields")]
		public List<Field> StoredFields { get; set; }


		[DataMember(Name="track_scores")]
		public bool TrackScores { get; set; }


		[DataMember(Name="version")]
		public bool Version { get; set; }

	}
}
