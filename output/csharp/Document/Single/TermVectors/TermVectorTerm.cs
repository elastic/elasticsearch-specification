using Nest.Internal;
using Nest.Document;
using System;
using System.Collections.Generic;
using System.Runtime.Serialization;
namespace Nest.Document {

	public class TermVectorTerm  {
		
		[DataMember(Name="doc_freq")]
		public int DocFreq { get; set; }


		[DataMember(Name="score")]
		public double Score { get; set; }


		[DataMember(Name="term_freq")]
		public int TermFreq { get; set; }


		[DataMember(Name="tokens")]
		public List<Token> Tokens { get; set; }


		[DataMember(Name="ttf")]
		public int Ttf { get; set; }

	}
}
