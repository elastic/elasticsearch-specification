using Nest.XPack;
using Nest.CommonAbstractions;
using System;
using System.Collections.Generic;
using System.Runtime.Serialization;
namespace Nest.XPack {

	public class QuerySqlResponse : IResponse {
		
		[DataMember(Name="columns")]
		public List<SqlColumn> Columns { get; set; }


		[DataMember(Name="cursor")]
		public string Cursor { get; set; }


		[DataMember(Name="rows")]
		public List<List<SqlValue>> Rows { get; set; }


		[DataMember(Name="values")]
		public List<List<SqlValue>> Values { get; set; }

	}
}
