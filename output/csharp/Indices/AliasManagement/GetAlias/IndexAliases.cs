using Nest.Indices;
using System;
using System.Collections.Generic;
using System.Runtime.Serialization;
namespace Nest.Indices {

	public class IndexAliases  {
		
		[DataMember(Name="aliases")]
		public IDictionary<string, AliasDefinition> Aliases { get; set; }

	}
}
