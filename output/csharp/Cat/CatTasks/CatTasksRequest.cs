using Nest.Internal;
using Nest.CommonAbstractions;
using System;
using System.Collections.Generic;
using System.Runtime.Serialization;
namespace Nest.Cat {

	public class CatTasksRequest : RequestBase {
		
		[DataMember(Name="actions")]
		public List<string> Actions { get; set; }


		[DataMember(Name="detailed")]
		public bool Detailed { get; set; }


		[DataMember(Name="format")]
		public string Format { get; set; }


		[DataMember(Name="headers")]
		public List<string> Headers { get; set; }


		[DataMember(Name="help")]
		public bool Help { get; set; }


		[DataMember(Name="node_id")]
		public List<string> NodeId { get; set; }


		[DataMember(Name="parent_task")]
		public long ParentTask { get; set; }


		[DataMember(Name="sort_by_columns")]
		public List<string> SortByColumns { get; set; }


		[DataMember(Name="verbose")]
		public bool Verbose { get; set; }

	}
}
