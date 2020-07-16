using Nest.XPack;
using Nest.Internal;
using Nest.CommonAbstractions;
using System;
using System.Collections.Generic;
using System.Runtime.Serialization;
namespace Nest.XPack {

	public class GetCategoriesResponse : IResponse {
		
		[DataMember(Name="categories")]
		public List<CategoryDefinition> Categories { get; set; }


		[DataMember(Name="count")]
		public long Count { get; set; }

	}
}
