using Nest.Search;
using Nest.CommonAbstractions;
using Nest.Internal;
using Nest.XPack;
using Nest.Common;
using System;
using System.Collections.Generic;
using System.Runtime.Serialization;
namespace Nest.XPack {

	public class SearchInputRequest  {
		
		[DataMember(Name="body")]
		public SearchRequest Body { get; set; }


		[DataMember(Name="indices")]
		public List<IndexName> Indices { get; set; }


		[DataMember(Name="indices_options")]
		public IndicesOptions IndicesOptions { get; set; }


		[DataMember(Name="search_type")]
		public SearchType SearchType { get; set; }


		[DataMember(Name="template")]
		public SearchTemplateRequest Template { get; set; }

	}
}
