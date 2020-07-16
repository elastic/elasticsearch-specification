using Nest.QueryDsl;
using System;
using System.Collections.Generic;
using System.Runtime.Serialization;
namespace Nest.QueryDsl {

	public class QueryContainer  {
		
		[DataMember(Name="bool")]
		public BoolQuery Bool { get; set; }


		[DataMember(Name="boosting")]
		public BoostingQuery Boosting { get; set; }


		[DataMember(Name="common")]
		public CommonTermsQuery Common { get; set; }


		[DataMember(Name="constant_score")]
		public ConstantScoreQuery ConstantScore { get; set; }


		[DataMember(Name="dis_max")]
		public DisMaxQuery DisMax { get; set; }


		[DataMember(Name="distance_feature")]
		public DistanceFeatureQuery DistanceFeature { get; set; }


		[DataMember(Name="exists")]
		public ExistsQuery Exists { get; set; }


		[DataMember(Name="function_score")]
		public FunctionScoreQuery FunctionScore { get; set; }


		[DataMember(Name="fuzzy")]
		public FuzzyQuery Fuzzy { get; set; }


		[DataMember(Name="geo_bounding_box")]
		public GeoBoundingBoxQuery GeoBoundingBox { get; set; }


		[DataMember(Name="geo_distance")]
		public GeoDistanceQuery GeoDistance { get; set; }


		[DataMember(Name="geo_polygon")]
		public GeoPolygonQuery GeoPolygon { get; set; }


		[DataMember(Name="geo_shape")]
		public GeoShapeQuery GeoShape { get; set; }


		[DataMember(Name="has_child")]
		public HasChildQuery HasChild { get; set; }


		[DataMember(Name="has_parent")]
		public HasParentQuery HasParent { get; set; }


		[DataMember(Name="ids")]
		public IdsQuery Ids { get; set; }


		[DataMember(Name="intervals")]
		public IntervalsQuery Intervals { get; set; }


		[DataMember(Name="is_conditionless")]
		public bool IsConditionless { get; set; }


		[DataMember(Name="is_strict")]
		public bool IsStrict { get; set; }


		[DataMember(Name="is_verbatim")]
		public bool IsVerbatim { get; set; }


		[DataMember(Name="is_writable")]
		public bool IsWritable { get; set; }


		[DataMember(Name="match")]
		public MatchQuery Match { get; set; }


		[DataMember(Name="match_all")]
		public MatchAllQuery MatchAll { get; set; }


		[DataMember(Name="match_bool_prefix")]
		public MatchBoolPrefixQuery MatchBoolPrefix { get; set; }


		[DataMember(Name="match_none")]
		public MatchNoneQuery MatchNone { get; set; }


		[DataMember(Name="match_phrase")]
		public MatchPhraseQuery MatchPhrase { get; set; }


		[DataMember(Name="match_phrase_prefix")]
		public MatchPhrasePrefixQuery MatchPhrasePrefix { get; set; }


		[DataMember(Name="more_like_this")]
		public MoreLikeThisQuery MoreLikeThis { get; set; }


		[DataMember(Name="multi_match")]
		public MultiMatchQuery MultiMatch { get; set; }


		[DataMember(Name="nested")]
		public NestedQuery Nested { get; set; }


		[DataMember(Name="parent_id")]
		public ParentIdQuery ParentId { get; set; }


		[DataMember(Name="percolate")]
		public PercolateQuery Percolate { get; set; }


		[DataMember(Name="pinned")]
		public PinnedQuery Pinned { get; set; }


		[DataMember(Name="prefix")]
		public PrefixQuery Prefix { get; set; }


		[DataMember(Name="query_string")]
		public QueryStringQuery QueryString { get; set; }


		[DataMember(Name="range")]
		public RangeQuery Range { get; set; }


		[DataMember(Name="rank_feature")]
		public RankFeatureQuery RankFeature { get; set; }


		[DataMember(Name="raw_query")]
		public RawQuery RawQuery { get; set; }


		[DataMember(Name="regexp")]
		public RegexpQuery Regexp { get; set; }


		[DataMember(Name="script")]
		public ScriptQuery Script { get; set; }


		[DataMember(Name="script_score")]
		public ScriptScoreQuery ScriptScore { get; set; }


		[DataMember(Name="shape")]
		public ShapeQuery Shape { get; set; }


		[DataMember(Name="simple_query_string")]
		public SimpleQueryStringQuery SimpleQueryString { get; set; }


		[DataMember(Name="span_containing")]
		public SpanContainingQuery SpanContaining { get; set; }


		[DataMember(Name="field_masking_span")]
		public SpanFieldMaskingQuery FieldMaskingSpan { get; set; }


		[DataMember(Name="span_first")]
		public SpanFirstQuery SpanFirst { get; set; }


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


		[DataMember(Name="term")]
		public TermQuery Term { get; set; }


		[DataMember(Name="terms")]
		public TermsQuery Terms { get; set; }


		[DataMember(Name="terms_set")]
		public TermsSetQuery TermsSet { get; set; }


		[DataMember(Name="wildcard")]
		public WildcardQuery Wildcard { get; set; }

	}
}
