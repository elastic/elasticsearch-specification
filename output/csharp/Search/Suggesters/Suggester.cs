using Nest.CommonAbstractions;
using Nest.Internal;
using System;
using System.Collections.Generic;
using System.Runtime.Serialization;
namespace Nest.Search {

	public class Suggester  {
		
		[DataMember(Name="analyzer")]
		public string Analyzer { get; set; }


		[DataMember(Name="field")]
		public Field Field { get; set; }


		[DataMember(Name="size")]
		public int Size { get; set; }

	}
}
