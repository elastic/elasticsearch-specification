using Nest.Common;
using Nest.Internal;
using Nest.CommonAbstractions;
using System;
using System.Collections.Generic;
using System.Runtime.Serialization;
namespace Nest.Cat {

	public class CatTrainedModelsRequest : RequestBase {
		
		[DataMember(Name="allow_no_match")]
		public bool AllowNoMatch { get; set; }


		[DataMember(Name="bytes")]
		public Bytes Bytes { get; set; }


		[DataMember(Name="format")]
		public string Format { get; set; }


		[DataMember(Name="from")]
		public int From { get; set; }


		[DataMember(Name="headers")]
		public List<string> Headers { get; set; }


		[DataMember(Name="help")]
		public bool Help { get; set; }


		[DataMember(Name="size")]
		public int Size { get; set; }


		[DataMember(Name="sort_by_columns")]
		public List<string> SortByColumns { get; set; }


		[DataMember(Name="verbose")]
		public bool Verbose { get; set; }

	}
}
