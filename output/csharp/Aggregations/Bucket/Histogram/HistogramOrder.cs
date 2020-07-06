using Nest.Aggregations;
using Nest.Search;
using System;
using System.Collections.Generic;
using System.Runtime.Serialization;
namespace Nest.Aggregations {

	public class HistogramOrder  {
		
		[DataMember(Name="count_ascending")]
		public HistogramOrder CountAscending { get; set; }


		[DataMember(Name="count_descending")]
		public HistogramOrder CountDescending { get; set; }


		[DataMember(Name="key")]
		public string Key { get; set; }


		[DataMember(Name="key_ascending")]
		public HistogramOrder KeyAscending { get; set; }


		[DataMember(Name="key_descending")]
		public HistogramOrder KeyDescending { get; set; }


		[DataMember(Name="order")]
		public SortOrder Order { get; set; }

	}
}
