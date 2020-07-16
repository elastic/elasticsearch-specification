using Nest.Internal;
using System;
using System.Collections.Generic;
using System.Runtime.Serialization;
namespace Nest.Common {

	public class ServerError  {
		
		[DataMember(Name="error")]
		public MainError Error { get; set; }


		[DataMember(Name="status")]
		public int Status { get; set; }

	}
}
