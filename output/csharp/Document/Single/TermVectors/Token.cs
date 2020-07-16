using Nest.Internal;
using System;
using System.Collections.Generic;
using System.Runtime.Serialization;
namespace Nest.Document {

	public class Token  {
		
		[DataMember(Name="end_offset")]
		public int EndOffset { get; set; }


		[DataMember(Name="payload")]
		public string Payload { get; set; }


		[DataMember(Name="position")]
		public int Position { get; set; }


		[DataMember(Name="start_offset")]
		public int StartOffset { get; set; }

	}
}
