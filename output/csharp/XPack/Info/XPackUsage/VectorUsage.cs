using Nest.Internal;
using Nest.XPack;
using System;
using System.Collections.Generic;
using System.Runtime.Serialization;
namespace Nest.XPack {

	public class VectorUsage : XPackUsage {
		
		[DataMember(Name="dense_vector_dims_avg_count")]
		public int DenseVectorDimsAvgCount { get; set; }


		[DataMember(Name="dense_vector_fields_count")]
		public int DenseVectorFieldsCount { get; set; }


		[DataMember(Name="sparse_vector_fields_count")]
		public int SparseVectorFieldsCount { get; set; }

	}
}
