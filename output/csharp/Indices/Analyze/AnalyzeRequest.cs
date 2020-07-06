using Nest.Analysis;
using Nest.CommonAbstractions;
using Nest.Internal;
using System;
using System.Collections.Generic;
using System.Runtime.Serialization;
namespace Nest.Indices {

	public class AnalyzeRequest : RequestBase {
		
		[DataMember(Name="analyzer")]
		public string Analyzer { get; set; }


		[DataMember(Name="attributes")]
		public List<string> Attributes { get; set; }


		[DataMember(Name="char_filter")]
		public List<Union<string, ICharFilter>> CharFilter { get; set; }


		[DataMember(Name="explain")]
		public bool Explain { get; set; }


		[DataMember(Name="field")]
		public Field Field { get; set; }


		[DataMember(Name="filter")]
		public List<Union<string, ITokenFilter>> Filter { get; set; }


		[DataMember(Name="normalizer")]
		public string Normalizer { get; set; }


		[DataMember(Name="text")]
		public List<string> Text { get; set; }


		[DataMember(Name="tokenizer")]
		public Union<string, ITokenizer> Tokenizer { get; set; }

	}
}
