using Nest.Analysis;
using System;
using System.Collections.Generic;
using System.Runtime.Serialization;
namespace Nest.Analysis {

	public class SynonymTokenFilter : TokenFilterBase {
		
		[DataMember(Name="expand")]
		public bool Expand { get; set; }


		[DataMember(Name="format")]
		public SynonymFormat Format { get; set; }


		[DataMember(Name="lenient")]
		public bool Lenient { get; set; }


		[DataMember(Name="synonyms")]
		public List<string> Synonyms { get; set; }


		[DataMember(Name="synonyms_path")]
		public string SynonymsPath { get; set; }


		[DataMember(Name="tokenizer")]
		public string Tokenizer { get; set; }


		[DataMember(Name="updateable")]
		public bool Updateable { get; set; }

	}
}
