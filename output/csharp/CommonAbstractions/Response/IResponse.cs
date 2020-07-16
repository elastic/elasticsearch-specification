using Nest.Common;
using System;
using System.Collections.Generic;
using System.Runtime.Serialization;
namespace Nest.CommonAbstractions {

	public class IResponse  {
		
		[DataMember(Name="server_error")]
		public ServerError ServerError { get; set; }

	}
}
