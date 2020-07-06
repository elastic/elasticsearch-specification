using System;
using System.Collections.Generic;
using System.Runtime.Serialization;
namespace Nest.Mapping {

	public class AllField  {
		
		[DataMember(Name="analyzer")]
		public string Analyzer { get; set; }


		[DataMember(Name="enabled")]
		public bool Enabled { get; set; }


		[DataMember(Name="omit_norms")]
		public bool OmitNorms { get; set; }


		[DataMember(Name="search_analyzer")]
		public string SearchAnalyzer { get; set; }


		[DataMember(Name="similarity")]
		public string Similarity { get; set; }


		[DataMember(Name="store")]
		public bool Store { get; set; }


		[DataMember(Name="store_term_vector_offsets")]
		public bool StoreTermVectorOffsets { get; set; }


		[DataMember(Name="store_term_vector_payloads")]
		public bool StoreTermVectorPayloads { get; set; }


		[DataMember(Name="store_term_vector_positions")]
		public bool StoreTermVectorPositions { get; set; }


		[DataMember(Name="store_term_vectors")]
		public bool StoreTermVectors { get; set; }

	}
}
