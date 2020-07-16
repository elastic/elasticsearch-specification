using Nest.CommonOptions;
using Nest.CommonAbstractions;
using System;
using System.Collections.Generic;
using System.Runtime.Serialization;
namespace Nest.Cat {

	public class CatPluginsRequest : RequestBase {
		
		[DataMember(Name="format")]
		public string Format { get; set; }


		[DataMember(Name="headers")]
		public List<string> Headers { get; set; }


		[DataMember(Name="help")]
		public bool Help { get; set; }


		[DataMember(Name="local")]
		public bool Local { get; set; }


		[DataMember(Name="master_timeout")]
		public Time MasterTimeout { get; set; }


		[DataMember(Name="sort_by_columns")]
		public List<string> SortByColumns { get; set; }


		[DataMember(Name="verbose")]
		public bool Verbose { get; set; }

	}
}
