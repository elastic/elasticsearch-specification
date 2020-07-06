using Nest.CommonAbstractions;
using Nest.Internal;
using System;
using System.Collections.Generic;
using System.Runtime.Serialization;
namespace Nest.Aggregations {

	public class MatrixAggregation  {
		
		[DataMember(Name="fields")]
		public List<Field> Fields { get; set; }


		[DataMember(Name="missing")]
		public IDictionary<Field, double> Missing { get; set; }

	}
}
