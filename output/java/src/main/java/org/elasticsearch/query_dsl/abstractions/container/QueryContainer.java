
package org.elasticsearch.query_dsl.abstractions.container;

import java.io.IOException;
import java.util.Date;
import java.util.List;
import java.util.HashMap;
import java.time.Instant;
import java.time.format.DateTimeFormatter;
import org.elasticsearch.Either;
import org.elasticsearch.XContentable;
import org.elasticsearch.NamedContainer;
import org.elasticsearch.common.ParseField;
import org.elasticsearch.common.xcontent.*;
import org.elasticsearch.query_dsl.compound.bool.*;
import org.elasticsearch.query_dsl.compound.boosting.*;
import org.elasticsearch.query_dsl.full_text.common_terms.*;
import org.elasticsearch.query_dsl.compound.constant_score.*;
import org.elasticsearch.query_dsl.compound.dismax.*;
import org.elasticsearch.query_dsl.term_level.exists.*;
import org.elasticsearch.query_dsl.compound.function_score.*;
import org.elasticsearch.query_dsl.term_level.fuzzy.*;
import org.elasticsearch.query_dsl.geo.bounding_box.*;
import org.elasticsearch.query_dsl.geo.distance.*;
import org.elasticsearch.query_dsl.geo.polygon.*;
import org.elasticsearch.query_dsl.geo.shape.*;
import org.elasticsearch.query_dsl.specialized.shape.*;
import org.elasticsearch.query_dsl.joining.has_child.*;
import org.elasticsearch.query_dsl.joining.has_parent.*;
import org.elasticsearch.query_dsl.term_level.ids.*;
import org.elasticsearch.query_dsl.full_text.intervals.*;
import org.elasticsearch.query_dsl.full_text.match.*;
import org.elasticsearch.query_dsl.*;
import org.elasticsearch.query_dsl.full_text.match_bool_prefix.*;
import org.elasticsearch.query_dsl.full_text.match_phrase.*;
import org.elasticsearch.query_dsl.full_text.match_phrase_prefix.*;
import org.elasticsearch.query_dsl.specialized.more_like_this.*;
import org.elasticsearch.query_dsl.full_text.multi_match.*;
import org.elasticsearch.query_dsl.joining.nested.*;
import org.elasticsearch.query_dsl.joining.parent_id.*;
import org.elasticsearch.query_dsl.specialized.percolate.*;
import org.elasticsearch.query_dsl.term_level.prefix.*;
import org.elasticsearch.query_dsl.full_text.query_string.*;
import org.elasticsearch.query_dsl.term_level.range.*;
import org.elasticsearch.query_dsl.nest_specific.*;
import org.elasticsearch.query_dsl.term_level.regexp.*;
import org.elasticsearch.query_dsl.specialized.script.*;
import org.elasticsearch.query_dsl.specialized.script_score.*;
import org.elasticsearch.query_dsl.full_text.simple_query_string.*;
import org.elasticsearch.query_dsl.span.containing.*;
import org.elasticsearch.query_dsl.span.field_masking.*;
import org.elasticsearch.query_dsl.span.first.*;
import org.elasticsearch.query_dsl.span.multi_term.*;
import org.elasticsearch.query_dsl.span.near.*;
import org.elasticsearch.query_dsl.span.not.*;
import org.elasticsearch.query_dsl.span.or.*;
import org.elasticsearch.query_dsl.span.term.*;
import org.elasticsearch.query_dsl.span.within.*;
import org.elasticsearch.query_dsl.term_level.term.*;
import org.elasticsearch.query_dsl.term_level.terms.*;
import org.elasticsearch.query_dsl.term_level.terms_set.*;
import org.elasticsearch.query_dsl.term_level.wildcard.*;
import org.elasticsearch.query_dsl.specialized.rank_feature.*;
import org.elasticsearch.query_dsl.specialized.distance_feature.*;
import org.elasticsearch.query_dsl.specialized.pinned.*;

public class QueryContainer  implements XContentable<QueryContainer> {
  
  static final ParseField BOOL = new ParseField("bool");
  private BoolQuery _bool;
  public BoolQuery getBool() { return this._bool; }
  public QueryContainer setBool(BoolQuery val) { this._bool = val; return this; }


  static final ParseField BOOSTING = new ParseField("boosting");
  private BoostingQuery _boosting;
  public BoostingQuery getBoosting() { return this._boosting; }
  public QueryContainer setBoosting(BoostingQuery val) { this._boosting = val; return this; }


  static final ParseField COMMON = new ParseField("common");
  private CommonTermsQuery _common;
  public CommonTermsQuery getCommon() { return this._common; }
  public QueryContainer setCommon(CommonTermsQuery val) { this._common = val; return this; }


  static final ParseField CONSTANT_SCORE = new ParseField("constant_score");
  private ConstantScoreQuery _constantScore;
  public ConstantScoreQuery getConstantScore() { return this._constantScore; }
  public QueryContainer setConstantScore(ConstantScoreQuery val) { this._constantScore = val; return this; }


  static final ParseField DIS_MAX = new ParseField("dis_max");
  private DisMaxQuery _disMax;
  public DisMaxQuery getDisMax() { return this._disMax; }
  public QueryContainer setDisMax(DisMaxQuery val) { this._disMax = val; return this; }


  static final ParseField EXISTS = new ParseField("exists");
  private ExistsQuery _exists;
  public ExistsQuery getExists() { return this._exists; }
  public QueryContainer setExists(ExistsQuery val) { this._exists = val; return this; }


  static final ParseField FUNCTION_SCORE = new ParseField("function_score");
  private FunctionScoreQuery _functionScore;
  public FunctionScoreQuery getFunctionScore() { return this._functionScore; }
  public QueryContainer setFunctionScore(FunctionScoreQuery val) { this._functionScore = val; return this; }


  static final ParseField FUZZY = new ParseField("fuzzy");
  private FuzzyQuery _fuzzy;
  public FuzzyQuery getFuzzy() { return this._fuzzy; }
  public QueryContainer setFuzzy(FuzzyQuery val) { this._fuzzy = val; return this; }


  static final ParseField GEO_BOUNDING_BOX = new ParseField("geo_bounding_box");
  private GeoBoundingBoxQuery _geoBoundingBox;
  public GeoBoundingBoxQuery getGeoBoundingBox() { return this._geoBoundingBox; }
  public QueryContainer setGeoBoundingBox(GeoBoundingBoxQuery val) { this._geoBoundingBox = val; return this; }


  static final ParseField GEO_DISTANCE = new ParseField("geo_distance");
  private GeoDistanceQuery _geoDistance;
  public GeoDistanceQuery getGeoDistance() { return this._geoDistance; }
  public QueryContainer setGeoDistance(GeoDistanceQuery val) { this._geoDistance = val; return this; }


  static final ParseField GEO_POLYGON = new ParseField("geo_polygon");
  private GeoPolygonQuery _geoPolygon;
  public GeoPolygonQuery getGeoPolygon() { return this._geoPolygon; }
  public QueryContainer setGeoPolygon(GeoPolygonQuery val) { this._geoPolygon = val; return this; }


  static final ParseField GEO_SHAPE = new ParseField("geo_shape");
  private GeoShapeQuery _geoShape;
  public GeoShapeQuery getGeoShape() { return this._geoShape; }
  public QueryContainer setGeoShape(GeoShapeQuery val) { this._geoShape = val; return this; }


  static final ParseField SHAPE = new ParseField("shape");
  private ShapeQuery _shape;
  public ShapeQuery getShape() { return this._shape; }
  public QueryContainer setShape(ShapeQuery val) { this._shape = val; return this; }


  static final ParseField HAS_CHILD = new ParseField("has_child");
  private HasChildQuery _hasChild;
  public HasChildQuery getHasChild() { return this._hasChild; }
  public QueryContainer setHasChild(HasChildQuery val) { this._hasChild = val; return this; }


  static final ParseField HAS_PARENT = new ParseField("has_parent");
  private HasParentQuery _hasParent;
  public HasParentQuery getHasParent() { return this._hasParent; }
  public QueryContainer setHasParent(HasParentQuery val) { this._hasParent = val; return this; }


  static final ParseField IDS = new ParseField("ids");
  private IdsQuery _ids;
  public IdsQuery getIds() { return this._ids; }
  public QueryContainer setIds(IdsQuery val) { this._ids = val; return this; }


  static final ParseField INTERVALS = new ParseField("intervals");
  private IntervalsQuery _intervals;
  public IntervalsQuery getIntervals() { return this._intervals; }
  public QueryContainer setIntervals(IntervalsQuery val) { this._intervals = val; return this; }


  static final ParseField IS_CONDITIONLESS = new ParseField("is_conditionless");
  private Boolean _isConditionless;
  public Boolean getIsConditionless() { return this._isConditionless; }
  public QueryContainer setIsConditionless(Boolean val) { this._isConditionless = val; return this; }


  static final ParseField IS_STRICT = new ParseField("is_strict");
  private Boolean _isStrict;
  public Boolean getIsStrict() { return this._isStrict; }
  public QueryContainer setIsStrict(Boolean val) { this._isStrict = val; return this; }


  static final ParseField IS_VERBATIM = new ParseField("is_verbatim");
  private Boolean _isVerbatim;
  public Boolean getIsVerbatim() { return this._isVerbatim; }
  public QueryContainer setIsVerbatim(Boolean val) { this._isVerbatim = val; return this; }


  static final ParseField IS_WRITABLE = new ParseField("is_writable");
  private Boolean _isWritable;
  public Boolean getIsWritable() { return this._isWritable; }
  public QueryContainer setIsWritable(Boolean val) { this._isWritable = val; return this; }


  static final ParseField MATCH = new ParseField("match");
  private MatchQuery _match;
  public MatchQuery getMatch() { return this._match; }
  public QueryContainer setMatch(MatchQuery val) { this._match = val; return this; }


  static final ParseField MATCH_ALL = new ParseField("match_all");
  private MatchAllQuery _matchAll;
  public MatchAllQuery getMatchAll() { return this._matchAll; }
  public QueryContainer setMatchAll(MatchAllQuery val) { this._matchAll = val; return this; }


  static final ParseField MATCH_BOOL_PREFIX = new ParseField("match_bool_prefix");
  private MatchBoolPrefixQuery _matchBoolPrefix;
  public MatchBoolPrefixQuery getMatchBoolPrefix() { return this._matchBoolPrefix; }
  public QueryContainer setMatchBoolPrefix(MatchBoolPrefixQuery val) { this._matchBoolPrefix = val; return this; }


  static final ParseField MATCH_NONE = new ParseField("match_none");
  private MatchNoneQuery _matchNone;
  public MatchNoneQuery getMatchNone() { return this._matchNone; }
  public QueryContainer setMatchNone(MatchNoneQuery val) { this._matchNone = val; return this; }


  static final ParseField MATCH_PHRASE = new ParseField("match_phrase");
  private MatchPhraseQuery _matchPhrase;
  public MatchPhraseQuery getMatchPhrase() { return this._matchPhrase; }
  public QueryContainer setMatchPhrase(MatchPhraseQuery val) { this._matchPhrase = val; return this; }


  static final ParseField MATCH_PHRASE_PREFIX = new ParseField("match_phrase_prefix");
  private MatchPhrasePrefixQuery _matchPhrasePrefix;
  public MatchPhrasePrefixQuery getMatchPhrasePrefix() { return this._matchPhrasePrefix; }
  public QueryContainer setMatchPhrasePrefix(MatchPhrasePrefixQuery val) { this._matchPhrasePrefix = val; return this; }


  static final ParseField MORE_LIKE_THIS = new ParseField("more_like_this");
  private MoreLikeThisQuery _moreLikeThis;
  public MoreLikeThisQuery getMoreLikeThis() { return this._moreLikeThis; }
  public QueryContainer setMoreLikeThis(MoreLikeThisQuery val) { this._moreLikeThis = val; return this; }


  static final ParseField MULTI_MATCH = new ParseField("multi_match");
  private MultiMatchQuery _multiMatch;
  public MultiMatchQuery getMultiMatch() { return this._multiMatch; }
  public QueryContainer setMultiMatch(MultiMatchQuery val) { this._multiMatch = val; return this; }


  static final ParseField NESTED = new ParseField("nested");
  private NestedQuery _nested;
  public NestedQuery getNested() { return this._nested; }
  public QueryContainer setNested(NestedQuery val) { this._nested = val; return this; }


  static final ParseField PARENT_ID = new ParseField("parent_id");
  private ParentIdQuery _parentId;
  public ParentIdQuery getParentId() { return this._parentId; }
  public QueryContainer setParentId(ParentIdQuery val) { this._parentId = val; return this; }


  static final ParseField PERCOLATE = new ParseField("percolate");
  private PercolateQuery _percolate;
  public PercolateQuery getPercolate() { return this._percolate; }
  public QueryContainer setPercolate(PercolateQuery val) { this._percolate = val; return this; }


  static final ParseField PREFIX = new ParseField("prefix");
  private PrefixQuery _prefix;
  public PrefixQuery getPrefix() { return this._prefix; }
  public QueryContainer setPrefix(PrefixQuery val) { this._prefix = val; return this; }


  static final ParseField QUERY_STRING = new ParseField("query_string");
  private QueryStringQuery _queryString;
  public QueryStringQuery getQueryString() { return this._queryString; }
  public QueryContainer setQueryString(QueryStringQuery val) { this._queryString = val; return this; }


  static final ParseField RANGE = new ParseField("range");
  private RangeQuery _range;
  public RangeQuery getRange() { return this._range; }
  public QueryContainer setRange(RangeQuery val) { this._range = val; return this; }


  static final ParseField RAW_QUERY = new ParseField("raw_query");
  private RawQuery _rawQuery;
  public RawQuery getRawQuery() { return this._rawQuery; }
  public QueryContainer setRawQuery(RawQuery val) { this._rawQuery = val; return this; }


  static final ParseField REGEXP = new ParseField("regexp");
  private RegexpQuery _regexp;
  public RegexpQuery getRegexp() { return this._regexp; }
  public QueryContainer setRegexp(RegexpQuery val) { this._regexp = val; return this; }


  static final ParseField SCRIPT = new ParseField("script");
  private ScriptQuery _script;
  public ScriptQuery getScript() { return this._script; }
  public QueryContainer setScript(ScriptQuery val) { this._script = val; return this; }


  static final ParseField SCRIPT_SCORE = new ParseField("script_score");
  private ScriptScoreQuery _scriptScore;
  public ScriptScoreQuery getScriptScore() { return this._scriptScore; }
  public QueryContainer setScriptScore(ScriptScoreQuery val) { this._scriptScore = val; return this; }


  static final ParseField SIMPLE_QUERY_STRING = new ParseField("simple_query_string");
  private SimpleQueryStringQuery _simpleQueryString;
  public SimpleQueryStringQuery getSimpleQueryString() { return this._simpleQueryString; }
  public QueryContainer setSimpleQueryString(SimpleQueryStringQuery val) { this._simpleQueryString = val; return this; }


  static final ParseField SPAN_CONTAINING = new ParseField("span_containing");
  private SpanContainingQuery _spanContaining;
  public SpanContainingQuery getSpanContaining() { return this._spanContaining; }
  public QueryContainer setSpanContaining(SpanContainingQuery val) { this._spanContaining = val; return this; }


  static final ParseField FIELD_MASKING_SPAN = new ParseField("field_masking_span");
  private SpanFieldMaskingQuery _fieldMaskingSpan;
  public SpanFieldMaskingQuery getFieldMaskingSpan() { return this._fieldMaskingSpan; }
  public QueryContainer setFieldMaskingSpan(SpanFieldMaskingQuery val) { this._fieldMaskingSpan = val; return this; }


  static final ParseField SPAN_FIRST = new ParseField("span_first");
  private SpanFirstQuery _spanFirst;
  public SpanFirstQuery getSpanFirst() { return this._spanFirst; }
  public QueryContainer setSpanFirst(SpanFirstQuery val) { this._spanFirst = val; return this; }


  static final ParseField SPAN_MULTI = new ParseField("span_multi");
  private SpanMultiTermQuery _spanMulti;
  public SpanMultiTermQuery getSpanMulti() { return this._spanMulti; }
  public QueryContainer setSpanMulti(SpanMultiTermQuery val) { this._spanMulti = val; return this; }


  static final ParseField SPAN_NEAR = new ParseField("span_near");
  private SpanNearQuery _spanNear;
  public SpanNearQuery getSpanNear() { return this._spanNear; }
  public QueryContainer setSpanNear(SpanNearQuery val) { this._spanNear = val; return this; }


  static final ParseField SPAN_NOT = new ParseField("span_not");
  private SpanNotQuery _spanNot;
  public SpanNotQuery getSpanNot() { return this._spanNot; }
  public QueryContainer setSpanNot(SpanNotQuery val) { this._spanNot = val; return this; }


  static final ParseField SPAN_OR = new ParseField("span_or");
  private SpanOrQuery _spanOr;
  public SpanOrQuery getSpanOr() { return this._spanOr; }
  public QueryContainer setSpanOr(SpanOrQuery val) { this._spanOr = val; return this; }


  static final ParseField SPAN_TERM = new ParseField("span_term");
  private SpanTermQuery _spanTerm;
  public SpanTermQuery getSpanTerm() { return this._spanTerm; }
  public QueryContainer setSpanTerm(SpanTermQuery val) { this._spanTerm = val; return this; }


  static final ParseField SPAN_WITHIN = new ParseField("span_within");
  private SpanWithinQuery _spanWithin;
  public SpanWithinQuery getSpanWithin() { return this._spanWithin; }
  public QueryContainer setSpanWithin(SpanWithinQuery val) { this._spanWithin = val; return this; }


  static final ParseField TERM = new ParseField("term");
  private TermQuery _term;
  public TermQuery getTerm() { return this._term; }
  public QueryContainer setTerm(TermQuery val) { this._term = val; return this; }


  static final ParseField TERMS = new ParseField("terms");
  private TermsQuery _terms;
  public TermsQuery getTerms() { return this._terms; }
  public QueryContainer setTerms(TermsQuery val) { this._terms = val; return this; }


  static final ParseField TERMS_SET = new ParseField("terms_set");
  private TermsSetQuery _termsSet;
  public TermsSetQuery getTermsSet() { return this._termsSet; }
  public QueryContainer setTermsSet(TermsSetQuery val) { this._termsSet = val; return this; }


  static final ParseField WILDCARD = new ParseField("wildcard");
  private WildcardQuery _wildcard;
  public WildcardQuery getWildcard() { return this._wildcard; }
  public QueryContainer setWildcard(WildcardQuery val) { this._wildcard = val; return this; }


  static final ParseField RANK_FEATURE = new ParseField("rank_feature");
  private RankFeatureQuery _rankFeature;
  public RankFeatureQuery getRankFeature() { return this._rankFeature; }
  public QueryContainer setRankFeature(RankFeatureQuery val) { this._rankFeature = val; return this; }


  static final ParseField DISTANCE_FEATURE = new ParseField("distance_feature");
  private DistanceFeatureQuery _distanceFeature;
  public DistanceFeatureQuery getDistanceFeature() { return this._distanceFeature; }
  public QueryContainer setDistanceFeature(DistanceFeatureQuery val) { this._distanceFeature = val; return this; }


  static final ParseField PINNED = new ParseField("pinned");
  private PinnedQuery _pinned;
  public PinnedQuery getPinned() { return this._pinned; }
  public QueryContainer setPinned(PinnedQuery val) { this._pinned = val; return this; }


  
  @Override
  public XContentBuilder toXContent(XContentBuilder builder, ToXContent.Params params) throws IOException {
    builder.startObject();
    if (_bool != null) {
      builder.field(BOOL.getPreferredName());
      _bool.toXContent(builder, params);
    }
    if (_boosting != null) {
      builder.field(BOOSTING.getPreferredName());
      _boosting.toXContent(builder, params);
    }
    if (_common != null) {
      builder.field(COMMON.getPreferredName());
      _common.toXContent(builder, params);
    }
    if (_constantScore != null) {
      builder.field(CONSTANT_SCORE.getPreferredName());
      _constantScore.toXContent(builder, params);
    }
    if (_disMax != null) {
      builder.field(DIS_MAX.getPreferredName());
      _disMax.toXContent(builder, params);
    }
    if (_exists != null) {
      builder.field(EXISTS.getPreferredName());
      _exists.toXContent(builder, params);
    }
    if (_functionScore != null) {
      builder.field(FUNCTION_SCORE.getPreferredName());
      _functionScore.toXContent(builder, params);
    }
    if (_fuzzy != null) {
      builder.field(FUZZY.getPreferredName());
      _fuzzy.toXContent(builder, params);
    }
    if (_geoBoundingBox != null) {
      builder.field(GEO_BOUNDING_BOX.getPreferredName());
      _geoBoundingBox.toXContent(builder, params);
    }
    if (_geoDistance != null) {
      builder.field(GEO_DISTANCE.getPreferredName());
      _geoDistance.toXContent(builder, params);
    }
    if (_geoPolygon != null) {
      builder.field(GEO_POLYGON.getPreferredName());
      _geoPolygon.toXContent(builder, params);
    }
    if (_geoShape != null) {
      builder.field(GEO_SHAPE.getPreferredName());
      _geoShape.toXContent(builder, params);
    }
    if (_shape != null) {
      builder.field(SHAPE.getPreferredName());
      _shape.toXContent(builder, params);
    }
    if (_hasChild != null) {
      builder.field(HAS_CHILD.getPreferredName());
      _hasChild.toXContent(builder, params);
    }
    if (_hasParent != null) {
      builder.field(HAS_PARENT.getPreferredName());
      _hasParent.toXContent(builder, params);
    }
    if (_ids != null) {
      builder.field(IDS.getPreferredName());
      _ids.toXContent(builder, params);
    }
    if (_intervals != null) {
      builder.field(INTERVALS.getPreferredName());
      _intervals.toXContent(builder, params);
    }
    if (_isConditionless != null) {
      builder.field(IS_CONDITIONLESS.getPreferredName(), _isConditionless);
    }
    if (_isStrict != null) {
      builder.field(IS_STRICT.getPreferredName(), _isStrict);
    }
    if (_isVerbatim != null) {
      builder.field(IS_VERBATIM.getPreferredName(), _isVerbatim);
    }
    if (_isWritable != null) {
      builder.field(IS_WRITABLE.getPreferredName(), _isWritable);
    }
    if (_match != null) {
      builder.field(MATCH.getPreferredName());
      _match.toXContent(builder, params);
    }
    if (_matchAll != null) {
      builder.field(MATCH_ALL.getPreferredName());
      _matchAll.toXContent(builder, params);
    }
    if (_matchBoolPrefix != null) {
      builder.field(MATCH_BOOL_PREFIX.getPreferredName());
      _matchBoolPrefix.toXContent(builder, params);
    }
    if (_matchNone != null) {
      builder.field(MATCH_NONE.getPreferredName());
      _matchNone.toXContent(builder, params);
    }
    if (_matchPhrase != null) {
      builder.field(MATCH_PHRASE.getPreferredName());
      _matchPhrase.toXContent(builder, params);
    }
    if (_matchPhrasePrefix != null) {
      builder.field(MATCH_PHRASE_PREFIX.getPreferredName());
      _matchPhrasePrefix.toXContent(builder, params);
    }
    if (_moreLikeThis != null) {
      builder.field(MORE_LIKE_THIS.getPreferredName());
      _moreLikeThis.toXContent(builder, params);
    }
    if (_multiMatch != null) {
      builder.field(MULTI_MATCH.getPreferredName());
      _multiMatch.toXContent(builder, params);
    }
    if (_nested != null) {
      builder.field(NESTED.getPreferredName());
      _nested.toXContent(builder, params);
    }
    if (_parentId != null) {
      builder.field(PARENT_ID.getPreferredName());
      _parentId.toXContent(builder, params);
    }
    if (_percolate != null) {
      builder.field(PERCOLATE.getPreferredName());
      _percolate.toXContent(builder, params);
    }
    if (_prefix != null) {
      builder.field(PREFIX.getPreferredName());
      _prefix.toXContent(builder, params);
    }
    if (_queryString != null) {
      builder.field(QUERY_STRING.getPreferredName());
      _queryString.toXContent(builder, params);
    }
    if (_range != null) {
      builder.field(RANGE.getPreferredName());
      _range.toXContent(builder, params);
    }
    if (_rawQuery != null) {
      builder.field(RAW_QUERY.getPreferredName());
      _rawQuery.toXContent(builder, params);
    }
    if (_regexp != null) {
      builder.field(REGEXP.getPreferredName());
      _regexp.toXContent(builder, params);
    }
    if (_script != null) {
      builder.field(SCRIPT.getPreferredName());
      _script.toXContent(builder, params);
    }
    if (_scriptScore != null) {
      builder.field(SCRIPT_SCORE.getPreferredName());
      _scriptScore.toXContent(builder, params);
    }
    if (_simpleQueryString != null) {
      builder.field(SIMPLE_QUERY_STRING.getPreferredName());
      _simpleQueryString.toXContent(builder, params);
    }
    if (_spanContaining != null) {
      builder.field(SPAN_CONTAINING.getPreferredName());
      _spanContaining.toXContent(builder, params);
    }
    if (_fieldMaskingSpan != null) {
      builder.field(FIELD_MASKING_SPAN.getPreferredName());
      _fieldMaskingSpan.toXContent(builder, params);
    }
    if (_spanFirst != null) {
      builder.field(SPAN_FIRST.getPreferredName());
      _spanFirst.toXContent(builder, params);
    }
    if (_spanMulti != null) {
      builder.field(SPAN_MULTI.getPreferredName());
      _spanMulti.toXContent(builder, params);
    }
    if (_spanNear != null) {
      builder.field(SPAN_NEAR.getPreferredName());
      _spanNear.toXContent(builder, params);
    }
    if (_spanNot != null) {
      builder.field(SPAN_NOT.getPreferredName());
      _spanNot.toXContent(builder, params);
    }
    if (_spanOr != null) {
      builder.field(SPAN_OR.getPreferredName());
      _spanOr.toXContent(builder, params);
    }
    if (_spanTerm != null) {
      builder.field(SPAN_TERM.getPreferredName());
      _spanTerm.toXContent(builder, params);
    }
    if (_spanWithin != null) {
      builder.field(SPAN_WITHIN.getPreferredName());
      _spanWithin.toXContent(builder, params);
    }
    if (_term != null) {
      builder.field(TERM.getPreferredName());
      _term.toXContent(builder, params);
    }
    if (_terms != null) {
      builder.field(TERMS.getPreferredName());
      _terms.toXContent(builder, params);
    }
    if (_termsSet != null) {
      builder.field(TERMS_SET.getPreferredName());
      _termsSet.toXContent(builder, params);
    }
    if (_wildcard != null) {
      builder.field(WILDCARD.getPreferredName());
      _wildcard.toXContent(builder, params);
    }
    if (_rankFeature != null) {
      builder.field(RANK_FEATURE.getPreferredName());
      _rankFeature.toXContent(builder, params);
    }
    if (_distanceFeature != null) {
      builder.field(DISTANCE_FEATURE.getPreferredName());
      _distanceFeature.toXContent(builder, params);
    }
    if (_pinned != null) {
      builder.field(PINNED.getPreferredName());
      _pinned.toXContent(builder, params);
    }
    builder.endObject();
    return builder;
  }

  @Override
  public QueryContainer fromXContent(XContentParser parser) throws IOException, XContentParseException {
    return QueryContainer.PARSER.apply(parser, null);
  }

  public static final ObjectParser<QueryContainer, Void> PARSER =
    new ObjectParser<>(QueryContainer.class.getName(), false, QueryContainer::new);

  static {
    PARSER.declareObject(QueryContainer::setBool, (p, t) -> BoolQuery.PARSER.apply(p, t), BOOL);
    PARSER.declareObject(QueryContainer::setBoosting, (p, t) -> BoostingQuery.PARSER.apply(p, t), BOOSTING);
    PARSER.declareObject(QueryContainer::setCommon, (p, t) -> CommonTermsQuery.PARSER.apply(p, t), COMMON);
    PARSER.declareObject(QueryContainer::setConstantScore, (p, t) -> ConstantScoreQuery.PARSER.apply(p, t), CONSTANT_SCORE);
    PARSER.declareObject(QueryContainer::setDisMax, (p, t) -> DisMaxQuery.PARSER.apply(p, t), DIS_MAX);
    PARSER.declareObject(QueryContainer::setExists, (p, t) -> ExistsQuery.PARSER.apply(p, t), EXISTS);
    PARSER.declareObject(QueryContainer::setFunctionScore, (p, t) -> FunctionScoreQuery.PARSER.apply(p, t), FUNCTION_SCORE);
    PARSER.declareObject(QueryContainer::setFuzzy, (p, t) -> FuzzyQuery.PARSER.apply(p, t), FUZZY);
    PARSER.declareObject(QueryContainer::setGeoBoundingBox, (p, t) -> GeoBoundingBoxQuery.PARSER.apply(p, t), GEO_BOUNDING_BOX);
    PARSER.declareObject(QueryContainer::setGeoDistance, (p, t) -> GeoDistanceQuery.PARSER.apply(p, t), GEO_DISTANCE);
    PARSER.declareObject(QueryContainer::setGeoPolygon, (p, t) -> GeoPolygonQuery.PARSER.apply(p, t), GEO_POLYGON);
    PARSER.declareObject(QueryContainer::setGeoShape, (p, t) -> GeoShapeQuery.PARSER.apply(p, t), GEO_SHAPE);
    PARSER.declareObject(QueryContainer::setShape, (p, t) -> ShapeQuery.PARSER.apply(p, t), SHAPE);
    PARSER.declareObject(QueryContainer::setHasChild, (p, t) -> HasChildQuery.PARSER.apply(p, t), HAS_CHILD);
    PARSER.declareObject(QueryContainer::setHasParent, (p, t) -> HasParentQuery.PARSER.apply(p, t), HAS_PARENT);
    PARSER.declareObject(QueryContainer::setIds, (p, t) -> IdsQuery.PARSER.apply(p, t), IDS);
    PARSER.declareObject(QueryContainer::setIntervals, (p, t) -> IntervalsQuery.PARSER.apply(p, t), INTERVALS);
    PARSER.declareBoolean(QueryContainer::setIsConditionless, IS_CONDITIONLESS);
    PARSER.declareBoolean(QueryContainer::setIsStrict, IS_STRICT);
    PARSER.declareBoolean(QueryContainer::setIsVerbatim, IS_VERBATIM);
    PARSER.declareBoolean(QueryContainer::setIsWritable, IS_WRITABLE);
    PARSER.declareObject(QueryContainer::setMatch, (p, t) -> MatchQuery.PARSER.apply(p, t), MATCH);
    PARSER.declareObject(QueryContainer::setMatchAll, (p, t) -> MatchAllQuery.PARSER.apply(p, t), MATCH_ALL);
    PARSER.declareObject(QueryContainer::setMatchBoolPrefix, (p, t) -> MatchBoolPrefixQuery.PARSER.apply(p, t), MATCH_BOOL_PREFIX);
    PARSER.declareObject(QueryContainer::setMatchNone, (p, t) -> MatchNoneQuery.PARSER.apply(p, t), MATCH_NONE);
    PARSER.declareObject(QueryContainer::setMatchPhrase, (p, t) -> MatchPhraseQuery.PARSER.apply(p, t), MATCH_PHRASE);
    PARSER.declareObject(QueryContainer::setMatchPhrasePrefix, (p, t) -> MatchPhrasePrefixQuery.PARSER.apply(p, t), MATCH_PHRASE_PREFIX);
    PARSER.declareObject(QueryContainer::setMoreLikeThis, (p, t) -> MoreLikeThisQuery.PARSER.apply(p, t), MORE_LIKE_THIS);
    PARSER.declareObject(QueryContainer::setMultiMatch, (p, t) -> MultiMatchQuery.PARSER.apply(p, t), MULTI_MATCH);
    PARSER.declareObject(QueryContainer::setNested, (p, t) -> NestedQuery.PARSER.apply(p, t), NESTED);
    PARSER.declareObject(QueryContainer::setParentId, (p, t) -> ParentIdQuery.PARSER.apply(p, t), PARENT_ID);
    PARSER.declareObject(QueryContainer::setPercolate, (p, t) -> PercolateQuery.PARSER.apply(p, t), PERCOLATE);
    PARSER.declareObject(QueryContainer::setPrefix, (p, t) -> PrefixQuery.PARSER.apply(p, t), PREFIX);
    PARSER.declareObject(QueryContainer::setQueryString, (p, t) -> QueryStringQuery.PARSER.apply(p, t), QUERY_STRING);
    PARSER.declareObject(QueryContainer::setRange, (p, t) -> RangeQuery.PARSER.apply(p, t), RANGE);
    PARSER.declareObject(QueryContainer::setRawQuery, (p, t) -> RawQuery.PARSER.apply(p, t), RAW_QUERY);
    PARSER.declareObject(QueryContainer::setRegexp, (p, t) -> RegexpQuery.PARSER.apply(p, t), REGEXP);
    PARSER.declareObject(QueryContainer::setScript, (p, t) -> ScriptQuery.PARSER.apply(p, t), SCRIPT);
    PARSER.declareObject(QueryContainer::setScriptScore, (p, t) -> ScriptScoreQuery.PARSER.apply(p, t), SCRIPT_SCORE);
    PARSER.declareObject(QueryContainer::setSimpleQueryString, (p, t) -> SimpleQueryStringQuery.PARSER.apply(p, t), SIMPLE_QUERY_STRING);
    PARSER.declareObject(QueryContainer::setSpanContaining, (p, t) -> SpanContainingQuery.PARSER.apply(p, t), SPAN_CONTAINING);
    PARSER.declareObject(QueryContainer::setFieldMaskingSpan, (p, t) -> SpanFieldMaskingQuery.PARSER.apply(p, t), FIELD_MASKING_SPAN);
    PARSER.declareObject(QueryContainer::setSpanFirst, (p, t) -> SpanFirstQuery.PARSER.apply(p, t), SPAN_FIRST);
    PARSER.declareObject(QueryContainer::setSpanMulti, (p, t) -> SpanMultiTermQuery.PARSER.apply(p, t), SPAN_MULTI);
    PARSER.declareObject(QueryContainer::setSpanNear, (p, t) -> SpanNearQuery.PARSER.apply(p, t), SPAN_NEAR);
    PARSER.declareObject(QueryContainer::setSpanNot, (p, t) -> SpanNotQuery.PARSER.apply(p, t), SPAN_NOT);
    PARSER.declareObject(QueryContainer::setSpanOr, (p, t) -> SpanOrQuery.PARSER.apply(p, t), SPAN_OR);
    PARSER.declareObject(QueryContainer::setSpanTerm, (p, t) -> SpanTermQuery.PARSER.apply(p, t), SPAN_TERM);
    PARSER.declareObject(QueryContainer::setSpanWithin, (p, t) -> SpanWithinQuery.PARSER.apply(p, t), SPAN_WITHIN);
    PARSER.declareObject(QueryContainer::setTerm, (p, t) -> TermQuery.PARSER.apply(p, t), TERM);
    PARSER.declareObject(QueryContainer::setTerms, (p, t) -> TermsQuery.PARSER.apply(p, t), TERMS);
    PARSER.declareObject(QueryContainer::setTermsSet, (p, t) -> TermsSetQuery.PARSER.apply(p, t), TERMS_SET);
    PARSER.declareObject(QueryContainer::setWildcard, (p, t) -> WildcardQuery.PARSER.apply(p, t), WILDCARD);
    PARSER.declareObject(QueryContainer::setRankFeature, (p, t) -> RankFeatureQuery.PARSER.apply(p, t), RANK_FEATURE);
    PARSER.declareObject(QueryContainer::setDistanceFeature, (p, t) -> DistanceFeatureQuery.PARSER.apply(p, t), DISTANCE_FEATURE);
    PARSER.declareObject(QueryContainer::setPinned, (p, t) -> PinnedQuery.PARSER.apply(p, t), PINNED);
  }

}
