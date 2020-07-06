using Nest.CommonAbstractions;
using Nest.Internal;
using System;
using System.Collections.Generic;
using System.Runtime.Serialization;
namespace Nest.XPack {

	public class SampleDiversity  {
		
		[DataMember(Name="field")]
		public Field Field { get; set; }


		[DataMember(Name="max_docs_per_value")]
		public int MaxDocsPerValue { get; set; }

	}
}
