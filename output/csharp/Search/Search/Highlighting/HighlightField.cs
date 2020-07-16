using Nest.Internal;
using Nest.Search;
using Nest.CommonAbstractions;
using Nest.QueryDsl;
using System;
using System.Collections.Generic;
using System.Runtime.Serialization;
namespace Nest.Search {

	public class HighlightField  {
		
		[DataMember(Name="boundary_chars")]
		public string BoundaryChars { get; set; }


		[DataMember(Name="boundary_max_scan")]
		public int BoundaryMaxScan { get; set; }


		[DataMember(Name="boundary_scanner")]
		public BoundaryScanner BoundaryScanner { get; set; }


		[DataMember(Name="boundary_scanner_locale")]
		public string BoundaryScannerLocale { get; set; }


		[DataMember(Name="field")]
		public Field Field { get; set; }


		[DataMember(Name="force_source")]
		public bool ForceSource { get; set; }


		[DataMember(Name="fragmenter")]
		public HighlighterFragmenter Fragmenter { get; set; }


		[DataMember(Name="fragment_offset")]
		public int FragmentOffset { get; set; }


		[DataMember(Name="fragment_size")]
		public int FragmentSize { get; set; }


		[DataMember(Name="highlight_query")]
		public QueryContainer HighlightQuery { get; set; }


		[DataMember(Name="matched_fields")]
		public List<Field> MatchedFields { get; set; }


		[DataMember(Name="max_fragment_length")]
		public int MaxFragmentLength { get; set; }


		[DataMember(Name="no_match_size")]
		public int NoMatchSize { get; set; }


		[DataMember(Name="number_of_fragments")]
		public int NumberOfFragments { get; set; }


		[DataMember(Name="order")]
		public HighlighterOrder Order { get; set; }


		[DataMember(Name="phrase_limit")]
		public int PhraseLimit { get; set; }


		[DataMember(Name="post_tags")]
		public List<string> PostTags { get; set; }


		[DataMember(Name="pre_tags")]
		public List<string> PreTags { get; set; }


		[DataMember(Name="require_field_match")]
		public bool RequireFieldMatch { get; set; }


		[DataMember(Name="tags_schema")]
		public HighlighterTagsSchema TagsSchema { get; set; }


		[DataMember(Name="type")]
		public Union<HighlighterType, string> Type { get; set; }

	}
}
