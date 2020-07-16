using Nest.CommonAbstractions;
using System;
using System.Collections.Generic;
using System.Runtime.Serialization;
namespace Nest.Analysis {

	public class StopWords : Union<string, List<string>> {

		public StopWords(string val1) : base(val1) { }

		public StopWords(List<string> val2) : base(val2) { }

		public static implicit operator StopWords(string val1) => new StopWords(val1);

		public static implicit operator StopWords(List<string> val2) => new StopWords(val2);

	}
}
