using Nest.CommonAbstractions;
using System;
using System.Collections.Generic;
using System.Runtime.Serialization;
namespace Nest.XPack {

	public class UpdateFilterRequest : RequestBase {
		
		[DataMember(Name="add_items")]
		public List<string> AddItems { get; set; }


		[DataMember(Name="description")]
		public string Description { get; set; }


		[DataMember(Name="remove_items")]
		public List<string> RemoveItems { get; set; }

	}
}
