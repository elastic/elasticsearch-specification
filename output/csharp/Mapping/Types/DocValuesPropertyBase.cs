using Nest.Mapping;
using System;
using System.Collections.Generic;
using System.Runtime.Serialization;
namespace Nest.Mapping {

	public class DocValuesPropertyBase : CorePropertyBase {
		
		[DataMember(Name="doc_values")]
		public bool DocValues { get; set; }

	}
}
