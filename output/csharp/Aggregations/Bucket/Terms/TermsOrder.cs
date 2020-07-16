using Nest.Aggregations;
using Nest.Search;
using System;
using System.Collections.Generic;
using System.Runtime.Serialization;
namespace Nest.Aggregations {

	public class TermsOrder  {
		
		[DataMember(Name="count_ascending")]
		public TermsOrder CountAscending { get; set; }


		[DataMember(Name="count_descending")]
		public TermsOrder CountDescending { get; set; }


		[DataMember(Name="key")]
		public string Key { get; set; }


		[DataMember(Name="key_ascending")]
		public TermsOrder KeyAscending { get; set; }


		[DataMember(Name="key_descending")]
		public TermsOrder KeyDescending { get; set; }


		[DataMember(Name="order")]
		public SortOrder Order { get; set; }

	}
}
