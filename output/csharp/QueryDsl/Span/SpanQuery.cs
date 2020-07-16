using Nest.QueryDsl;
using System;
using System.Collections.Generic;
using System.Runtime.Serialization;
namespace Nest.QueryDsl {

	public class SpanQuery  {
		
		[DataMember(Name="span_containing")]
		public SpanContainingQuery SpanContaining { get; set; }


		[DataMember(Name="field_masking_span")]
		public SpanFieldMaskingQuery FieldMaskingSpan { get; set; }


		[DataMember(Name="span_first")]
		public SpanFirstQuery SpanFirst { get; set; }


		[DataMember(Name="span_gap")]
		public SpanGapQuery SpanGap { get; set; }


		[DataMember(Name="span_multi")]
		public SpanMultiTermQuery SpanMulti { get; set; }


		[DataMember(Name="span_near")]
		public SpanNearQuery SpanNear { get; set; }


		[DataMember(Name="span_not")]
		public SpanNotQuery SpanNot { get; set; }


		[DataMember(Name="span_or")]
		public SpanOrQuery SpanOr { get; set; }


		[DataMember(Name="span_term")]
		public SpanTermQuery SpanTerm { get; set; }


		[DataMember(Name="span_within")]
		public SpanWithinQuery SpanWithin { get; set; }

	}
}
