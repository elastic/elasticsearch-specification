using Nest.Analysis;
using System;
using System.Collections.Generic;
using System.Runtime.Serialization;
namespace Nest.Analysis {

	public class WordDelimiterGraphTokenFilter : TokenFilterBase {
		
		[DataMember(Name="adjust_offsets")]
		public bool AdjustOffsets { get; set; }


		[DataMember(Name="catenate_all")]
		public bool CatenateAll { get; set; }


		[DataMember(Name="catenate_numbers")]
		public bool CatenateNumbers { get; set; }


		[DataMember(Name="catenate_words")]
		public bool CatenateWords { get; set; }


		[DataMember(Name="generate_number_parts")]
		public bool GenerateNumberParts { get; set; }


		[DataMember(Name="generate_word_parts")]
		public bool GenerateWordParts { get; set; }


		[DataMember(Name="preserve_original")]
		public bool PreserveOriginal { get; set; }


		[DataMember(Name="protected_words")]
		public List<string> ProtectedWords { get; set; }


		[DataMember(Name="protected_words_path")]
		public string ProtectedWordsPath { get; set; }


		[DataMember(Name="split_on_case_change")]
		public bool SplitOnCaseChange { get; set; }


		[DataMember(Name="split_on_numerics")]
		public bool SplitOnNumerics { get; set; }


		[DataMember(Name="stem_english_possessive")]
		public bool StemEnglishPossessive { get; set; }


		[DataMember(Name="type_table")]
		public List<string> TypeTable { get; set; }


		[DataMember(Name="type_table_path")]
		public string TypeTablePath { get; set; }

	}
}
