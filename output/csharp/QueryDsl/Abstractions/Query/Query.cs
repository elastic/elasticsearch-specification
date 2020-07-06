using Nest.Internal;
using System;
using System.Collections.Generic;
using System.Runtime.Serialization;
namespace Nest.QueryDsl {

	public class Query  {
		
		[DataMember(Name="boost")]
		public double Boost { get; set; }


		[DataMember(Name="conditionless")]
		public bool Conditionless { get; set; }


		[DataMember(Name="is_strict")]
		public bool IsStrict { get; set; }


		[DataMember(Name="is_verbatim")]
		public bool IsVerbatim { get; set; }


		[DataMember(Name="is_writable")]
		public bool IsWritable { get; set; }


		[DataMember(Name="_name")]
		public string Name { get; set; }

	}
}
