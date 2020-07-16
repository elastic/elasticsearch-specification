using Nest.Search;
using Nest.CommonAbstractions;
using System;
using System.Collections.Generic;
using System.Runtime.Serialization;
namespace Nest.XPack {

	public class TranslateSqlResponse : IResponse {
		
		[DataMember(Name="result")]
		public SearchRequest Result { get; set; }

	}
}
