
using System.Runtime.Serialization;

namespace Nest.Ingest {

	public enum ShapeType {
  
		[DataMember(Name = "geo_shape")] GeoShape,
		[DataMember(Name = "shape")] Shape
	}
}
