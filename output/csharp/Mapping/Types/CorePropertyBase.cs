using Nest.CommonAbstractions;
using Nest.Internal;
using Nest.Mapping;
using System;
using System.Collections.Generic;
using System.Runtime.Serialization;
namespace Nest.Mapping {

	public class CorePropertyBase : PropertyBase {
		
		[DataMember(Name="copy_to")]
		public List<Field> CopyTo { get; set; }


		[DataMember(Name="fields")]
		public IDictionary<PropertyName, IProperty> Fields { get; set; }


		[DataMember(Name="similarity")]
		public string Similarity { get; set; }


		[DataMember(Name="store")]
		public bool Store { get; set; }

	}
}
