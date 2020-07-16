using Nest.CommonAbstractions;
using System;
using System.Collections.Generic;
using System.Runtime.Serialization;
namespace Nest.Cat {

	public class CatHelpRequest : RequestBase {
		
		[DataMember(Name="help")]
		public bool Help { get; set; }


		[DataMember(Name="sort_by_columns")]
		public List<string> SortByColumns { get; set; }

	}
}
