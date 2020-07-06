using Nest.CommonAbstractions;
using Nest.Internal;
using System;
using System.Collections.Generic;
using System.Runtime.Serialization;
namespace Nest.Search {

	public class SourceFilter  {
		
		[DataMember(Name="excludes")]
		public List<Field> Excludes { get; set; }


		[DataMember(Name="includes")]
		public List<Field> Includes { get; set; }

	}
}
