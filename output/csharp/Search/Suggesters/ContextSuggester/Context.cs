using Nest.QueryDsl;
using Nest.CommonAbstractions;
using System;
using System.Collections.Generic;
using System.Runtime.Serialization;
namespace Nest.Search {

	public class Context : Union<string, GeoLocation> {

		public Context(string val1) : base(val1) { }

		public Context(GeoLocation val2) : base(val2) { }

		public static implicit operator Context(string val1) => new Context(val1);

		public static implicit operator Context(GeoLocation val2) => new Context(val2);

	}
}
