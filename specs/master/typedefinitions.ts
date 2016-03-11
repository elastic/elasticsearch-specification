interface short {}
interface byte {}
interface integer {}
interface long {}
interface float {}
interface double {}

/**namespace:DefaultLanguageConstruct */
interface map<t_key, t_value> {
}
/**namespace:Aggregations.Bucket.DateHistogram */
enum DateInterval {
	second = 0,
	minute = 1,
	hour = 2,
	day = 3,
	week = 4,
	month = 5,
	quarter = 6,
	year = 7
}
/**namespace:Analysis.Languages */
enum Language {
	Arabic = 0,
	Armenian = 1,
	Basque = 2,
	Brazilian = 3,
	Bulgarian = 4,
	Catalan = 5,
	Chinese = 6,
	Cjk = 7,
	Czech = 8,
	Danish = 9,
	Dutch = 10,
	English = 11,
	Finnish = 12,
	French = 13,
	Galician = 14,
	German = 15,
	Greek = 16,
	Hindi = 17,
	Hungarian = 18,
	Indonesian = 19,
	Irish = 20,
	Italian = 21,
	Latvian = 22,
	Norwegian = 23,
	Persian = 24,
	Portuguese = 25,
	Romanian = 26,
	Russian = 27,
	Sorani = 28,
	Spanish = 29,
	Swedish = 30,
	Turkish = 31,
	Thai = 32
}
/**namespace:Analysis.Languages */
enum SnowballLanguage {
	Armenian = 0,
	Basque = 1,
	Catalan = 2,
	Danish = 3,
	Dutch = 4,
	English = 5,
	Finnish = 6,
	French = 7,
	Ferman = 8,
	German2 = 9,
	Hungarian = 10,
	Italian = 11,
	Kp = 12,
	Lovins = 13,
	Norwegian = 14,
	Porter = 15,
	Portuguese = 16,
	Romanian = 17,
	Russian = 18,
	Spanish = 19,
	Swedish = 20,
	Turkish = 21
}
/**namespace:Analysis.TokenFilters.DelimitedPayload */
enum DelimitedPayloadEncoding {
	int = 0,
	float = 1,
	identity = 2
}
/**namespace:Analysis.TokenFilters.EdgeNGram */
enum EdgeNGramSide {
	front = 0,
	back = 1
}
/**namespace:Analysis.TokenFilters.Phonetic */
enum PhoneticEncoder {
	metaphone = 0,
	doublemetaphone = 1,
	soundex = 2,
	refinedsoundex = 3,
	caverphone1 = 4,
	caverphone2 = 5,
	cologne = 6,
	nysiis = 7,
	koelnerphonetik = 8,
	haasephonetik = 9,
	beidermorse = 10
}
/**namespace:Analysis.TokenFilters.Synonym */
enum SynonymFormat {
	solr = 0,
	wordnet = 1
}
/**namespace:Analysis.Tokenizers.NGram */
enum TokenChar {
	letter = 0,
	digit = 1,
	whitespace = 2,
	punctuation = 3,
	symbol = 4
}
/**namespace:CommonOptions.TimeUnit */
enum TimeUnit {
	ms = 0,
	s = 1,
	m = 2,
	h = 3,
	d = 4,
	w = 5,
	M = 6,
	y = 7
}
/**namespace:Mapping */
enum SimilarityOption {
	default = 0,
	BM25 = 1
}
/**namespace:Mapping */
enum DynamicMapping {
	allow = 0,
	ignore = 1,
	strict = 2
}
/**namespace:Search.Search.Sort */
enum SortOrder {
	asc = 0,
	desc = 1
}
/**namespace:Search.Search.Sort */
enum SortMode {
	min = 0,
	max = 1,
	sum = 2,
	avg = 3
}
/**namespace:Search.Search.Highlighting */
enum HighlighterType {
	plain = 0,
	postings = 1,
	fvh = 2
}
/**namespace:Search.Search.Rescoring */
enum ScoreMode {
	avg = 0,
	first = 1,
	max = 2,
	min = 3,
	multiply = 4,
	total = 5,
	sum = 6
}
/**namespace:QueryDsl.MultiTermQueryRewrite */
enum RewriteMultiTerm {
	constant_score = 0,
	scoring_boolean = 1,
	constant_score_boolean = 2,
	top_terms_N = 3,
	top_terms_boost_N = 4,
	top_terms_blended_freqs_N = 5
}
/**namespace:QueryDsl.FullText.MultiMatch */
enum TextQueryType {
	best_fields = 0,
	most_fields = 1,
	cross_fields = 2,
	phrase = 3,
	phrase_prefix = 4
}
/**namespace:QueryDsl */
enum Operator {
	and = 0,
	or = 1
}
/**namespace:QueryDsl.FullText.MultiMatch */
enum ZeroTermsQuery {
	all = 0,
	none = 1
}
/**namespace:QueryDsl.Joining.HasChild */
enum ChildScoreMode {
	none = 0,
	avg = 1,
	sum = 2,
	max = 3,
	min = 4
}
/**namespace:QueryDsl.Joining.HasParent */
enum ParentScoreMode {
	none = 0,
	score = 1
}
/**namespace:QueryDsl.FullText.SimpleQueryString */
enum SimpleQueryStringFlags {
	NONE = 1,
	AND = 2,
	OR = 4,
	NOT = 8,
	PREFIX = 16,
	PHRASE = 32,
	PRECEDENCE = 64,
	ESCAPE = 128,
	WHITESPACE = 256,
	FUZZY = 512,
	NEAR = 1024,
	SLOP = 2048,
	ALL = 4096
}
/**namespace:QueryDsl.Joining.Nested */
enum NestedScoreMode {
	avg = 0,
	total = 1,
	max = 2,
	none = 3
}
/**namespace:QueryDsl.Compound.FunctionScore.Functions */
enum FunctionScoreMode {
	multiply = 0,
	sum = 1,
	avg = 2,
	first = 3,
	max = 4,
	min = 5
}
/**namespace:QueryDsl.Compound.FunctionScore.Functions */
enum FunctionBoostMode {
	multiply = 0,
	replace = 1,
	sum = 2,
	avg = 3,
	max = 4,
	min = 5
}
/**namespace:QueryDsl.Geo.BoundingBox */
enum GeoExecution {
	memory = 0,
	indexed = 1
}
/**namespace:QueryDsl.Geo */
enum GeoValidationMethod {
	coerce = 0,
	ignore_malformed = 1,
	strict = 2
}
/**namespace:CommonOptions.Geo */
enum DistanceUnit {
	in = 0,
	ft = 1,
	yd = 2,
	mi = 3,
	nmi = 4,
	km = 5,
	m = 6,
	cm = 7,
	mm = 8
}
/**namespace:QueryDsl.Geo */
enum GeoOptimizeBBox {
	memory = 0,
	indexed = 1,
	none = 2
}
/**namespace:CommonOptions.Geo */
enum GeoDistanceType {
	sloppy_arc = 0,
	arc = 1,
	plane = 2
}
/**namespace:Aggregations.Bucket.GeoHashGrid */
enum GeoHashPrecision {
	Precision1 = 1,
	Precision2 = 2,
	Precision3 = 3,
	Precision4 = 4,
	Precision5 = 5,
	Precision6 = 6,
	Precision7 = 7,
	Precision8 = 8,
	Precision9 = 9,
	Precision10 = 10,
	Precision11 = 11,
	Precision12 = 12
}
/**namespace:Aggregations.Bucket.Terms */
enum TermsAggregationExecutionHint {
	map = 0,
	global_ordinals = 1,
	global_ordinals_hash = 2,
	global_ordinals_low_cardinality = 3
}
/**namespace:Aggregations.Bucket.Terms */
enum TermsAggregationCollectMode {
	depth_first = 0,
	breadth_first = 1
}
/**namespace:Aggregations.Bucket.Sampler */
enum SamplerAggregationExecutionHint {
	map = 0,
	global_ordinals = 1,
	bytes_hash = 2
}
/**namespace:Cluster */
enum ClusterStatus {
	green = 0,
	yellow = 1,
	red = 2
}
/**namespace:Modules.Indices.Fielddata.Numeric */
enum NumericFielddataFormat {
	array = 0,
	doc_values = 1,
	disabled = 2
}
/**namespace:Mapping */
enum NonStringIndexOption {
	no = 0
}
/**namespace:Mapping.Types.Core.Date */
enum NumericResolutionUnit {
	milliseconds = 0,
	seconds = 1
}
/**namespace:Mapping.Norms */
enum NormsLoading {
	lazy = 0,
	eager = 1
}
/**namespace:Modules.Indices.Fielddata.String */
enum StringFielddataFormat {
	paged_bytes = 0,
	doc_values = 1,
	disabled = 2
}
/**namespace:Mapping */
enum FieldIndexOption {
	analyzed = 0,
	not_analyzed = 1,
	no = 2
}
/**namespace:Mapping */
enum TermVectorOption {
	no = 0,
	yes = 1,
	with_offsets = 2,
	with_positions = 3,
	with_positions_offsets = 4,
	with_positions_offsets_payloads = 5
}
/**namespace:Mapping.Types.Core.String */
enum IndexOptions {
	docs = 0,
	freqs = 1,
	positions = 2,
	offsets = 3
}
/**namespace:Modules.Indices.Fielddata.GeoPoint */
enum GeoPointFielddataFormat {
	array = 0,
	doc_values = 1,
	compressed = 2,
	disabled = 3
}
/**namespace:Mapping.Types.Geo.GeoShape */
enum GeoTree {
	geohash = 0,
	quadtree = 1
}
/**namespace:Mapping.Types.Geo.GeoShape */
enum GeoOrientation {
	cw = 0,
	ccw = 1
}
/**namespace:Cluster.ClusterReroute.Commands */
interface cluster_reroute_command {
	Name: string;
}
/**namespace:Mapping */
/**custom_serialization*/
interface type_mapping {
	dynamic_date_formats: string[];
	date_detection: boolean;
	numeric_detection: boolean;
	/**custom_serialization */
	transform: mapping_transform[];
	analyzer: string;
	search_analyzer: string;
	_source: source_field;
	_all: all_field;
	_parent: parent_field;
	_routing: routing_field;
	_index: index_field;
	_size: size_field;
	_timestamp: timestamp_field;
	_field_names: field_names_field;
	_ttl: ttl_field;
	/**custom_serialization */
	_meta: map<string, any>[];
	dynamic_templates: map<string, dynamic_template>[];
	dynamic: DynamicMapping;
	properties: map<property_name, property>[];
}
/**namespace:Mapping.Transform */
/**custom_serialization*/
interface mapping_transform {
	script: string;
	script_file: string;
	params: map<string, string>[];
	lang: string;
}
/**namespace:Mapping.MetaFields.Source */
/**custom_serialization*/
interface source_field {
	enabled: boolean;
	compress: boolean;
	compress_threshold: string;
	includes: string[];
	excludes: string[];
}
/**namespace:Mapping.MetaFields.All */
/**custom_serialization*/
interface all_field {
	enabled: boolean;
	store: boolean;
	store_term_vectors: boolean;
	store_term_vector_offsets: boolean;
	store_term_vector_positions: boolean;
	store_term_vector_payloads: boolean;
	omit_norms: boolean;
	analyzer: string;
	search_analyzer: string;
	similarity: string;
}
/**namespace:Mapping.MetaFields.Parent */
/**custom_serialization*/
interface parent_field {
	type: type_name;
}
/**namespace:Mapping.MetaFields.Routing */
/**custom_serialization*/
interface routing_field {
	required: boolean;
}
/**namespace:Mapping.MetaFields.Index */
/**custom_serialization*/
interface index_field {
	enabled: boolean;
}
/**namespace:Mapping.MetaFields.Size */
/**custom_serialization*/
interface size_field {
	enabled: boolean;
}
/**namespace:Mapping.MetaFields.Timestamp */
/**custom_serialization*/
interface timestamp_field {
	enabled: boolean;
	path: field;
	format: string;
	default: string;
	ignore_missing: boolean;
}
/**namespace:Mapping.MetaFields.FieldNames */
/**custom_serialization*/
interface field_names_field {
	enabled: boolean;
}
/**namespace:Mapping.MetaFields.Ttl */
/**custom_serialization*/
interface ttl_field {
	enabled: boolean;
	default: time;
}
/**namespace:Mapping.DynamicTemplate */
/**custom_serialization*/
interface dynamic_template {
	match: string;
	unmatch: string;
	match_mapping_type: string;
	path_match: string;
	path_unmatch: string;
	mapping: property;
}
/**namespace:Mapping.Types */
interface property {
	Name: property_name;
	type: type_name;
	index_name: string;
	store: boolean;
	doc_values: boolean;
	fields: map<property_name, property>[];
	similarity: SimilarityOption;
	copy_to: field[];
}
/**namespace:Indices.Warmers */
interface warmer {
	types: type_name[];
	source: search_request;
}
/**namespace:Search.Search */
/**custom_serialization*/
interface search_request {
	timeout: string;
	from: integer;
	size: integer;
	explain: boolean;
	version: boolean;
	track_scores: boolean;
	min_score: double;
	terminate_after: long;
	/**custom_serialization */
	indices_boost: map<index_name, double>[];
	sort: sort[];
	suggest: map<string, suggest_bucket>[];
	highlight: highlight;
	rescore: rescore;
	fields: field[];
	fielddata_fields: field[];
	script_fields: map<string, script_field>[];
	/**custom_serialization */
	_source: source_filter;
	aggs: map<string, aggregation_container>[];
	query: query_container;
	post_filter: query_container;
	inner_hits: map<string, inner_hits_container>[];
	Preference: string;
	Routing: string;
	SearchType: SearchType;
	IgnoreUnavalable: boolean;
	Index: indices;
	Type: types;
}
/**namespace:Search.Search.Sort */
interface sort {
	SortKey: field;
	missing: string;
	order: SortOrder;
	mode: SortMode;
	nested_filter: query_container;
	nested_path: field;
}
/**namespace:Search.Suggesters */
/**custom_serialization*/
interface suggest_bucket {
	text: string;
	term: term_suggester;
	phrase: phrase_suggester;
	completion: completion_suggester;
}
/**namespace:Search.Suggesters.TermSuggester */
/**custom_serialization*/
interface term_suggester {
	prefix_len: integer;
	/**custom_serialization */
	suggest_mode: SuggestMode;
	min_word_len: integer;
	max_edits: integer;
	max_inspections: integer;
	min_doc_freq: double;
	max_term_freq: double;
}
/**namespace:Search.Suggesters.PhraseSuggester */
/**custom_serialization*/
interface phrase_suggester {
	gram_size: integer;
	real_word_error_likelihood: double;
	confidence: double;
	max_errors: double;
	separator: string;
	direct_generator: direct_generator[];
	highlight: phrase_suggest_highlight;
	collate: phrase_suggest_collate;
}
/**namespace:Search.Suggesters.PhraseSuggester */
/**custom_serialization*/
interface direct_generator {
	field: field;
	size: integer;
	prefix_len: integer;
	/**custom_serialization */
	suggest_mode: SuggestMode;
	min_word_len: integer;
	max_edits: integer;
	max_inspections: double;
	min_doc_freq: double;
	max_term_freq: double;
	pre_filter: string;
	post_filter: string;
}
/**namespace:Search.Suggesters.PhraseSuggester */
interface phrase_suggest_highlight {
	pre_tag: string;
	post_tag: string;
}
/**namespace:Search.Suggesters.PhraseSuggester */
/**custom_serialization*/
interface phrase_suggest_collate {
	query: script;
	prune: boolean;
}
/**namespace:CommonOptions.Scripting */
/**custom_serialization*/
interface script {
	/**custom_serialization */
	params: map<string, any>[];
	lang: string;
}
/**namespace:Search.Suggesters.CompletionSuggester */
/**custom_serialization*/
interface completion_suggester {
	fuzzy: fuzzy_suggester;
	context: map<string, any>[];
}
/**namespace:Search.Suggesters.CompletionSuggester */
/**custom_serialization*/
interface fuzzy_suggester {
	transpositions: boolean;
	min_length: integer;
	prefix_length: integer;
	fuzziness: fuzziness;
	unicode_aware: boolean;
}
/**namespace:CommonOptions.Fuzziness */
/**custom_serialization*/
interface fuzziness {
	Auto: boolean;
	EditDistance: integer;
	Ratio: double;
}
/**namespace:Search.Search.Highlighting */
/**custom_serialization*/
interface highlight {
	pre_tags: string[];
	post_tags: string[];
	fragment_size: integer;
	tags_schema: string;
	number_of_fragments: integer;
	fragment_offset: integer;
	boundary_max_size: integer;
	encoder: string;
	order: string;
	/**custom_serialization */
	fields: map<field, highlight_field>[];
	require_field_match: boolean;
	boundary_chars: string;
}
/**namespace:Search.Search.Highlighting */
/**custom_serialization*/
interface highlight_field {
	Field: field;
	pre_tags: string[];
	post_tags: string[];
	fragment_size: integer;
	no_match_size: integer;
	number_of_fragments: integer;
	fragment_offset: integer;
	boundary_max_size: integer;
	encoder: string;
	order: string;
	tags_schema: string;
	require_field_match: boolean;
	boundary_chars: string;
	type: HighlighterType;
	force_source: boolean;
	matched_fields: field[];
	highlight_query: query_container;
}
/**namespace:Search.Search.Rescoring */
/**custom_serialization*/
interface rescore {
	window_size: integer;
	query: rescore_query;
}
/**namespace:Search.Search.Rescoring */
/**custom_serialization*/
interface rescore_query {
	rescore_query: query_container;
	query_weight: double;
	rescore_query_weight: double;
	score_mode: ScoreMode;
}
/**namespace:CommonOptions.Scripting */
/**custom_serialization*/
interface script_field {
	script: script;
}
/**namespace:Search.Search.SourceFiltering */
/**custom_serialization*/
interface source_filter {
	include: field[];
	exclude: field[];
}
/**namespace:Aggregations */
/**custom_serialization*/
interface aggregation_container {
	/**custom_serialization */
	meta: map<string, any>[];
	avg: average_aggregation;
	date_histogram: date_histogram_aggregation;
	percentiles: percentiles_aggregation;
	date_range: date_range_aggregation;
	extended_stats: extended_stats_aggregation;
	filter: filter_aggregation;
	filters: filters_aggregation;
	geo_distance: geo_distance_aggregation;
	geohash_grid: geo_hash_grid_aggregation;
	geo_bounds: geo_bounds_aggregation;
	histogram: histogram_aggregation;
	global: global_aggregation;
	ip_range: ip_range_aggregation;
	max: max_aggregation;
	min: min_aggregation;
	cardinality: cardinality_aggregation;
	missing: missing_aggregation;
	nested: nested_aggregation;
	reverse_nested: reverse_nested_aggregation;
	range: range_aggregation;
	stats: stats_aggregator;
	sum: sum_aggregation;
	terms: terms_aggregation;
	significant_terms: significant_terms_aggregation;
	value_count: value_count_aggregation;
	percentile_ranks: percentile_ranks_aggregation;
	top_hits: top_hits_aggregation;
	children: children_aggregation;
	scripted_metric: scripted_metric_aggregation;
	avg_bucket: average_bucket_aggregation;
	derivative: derivative_aggregation;
	max_bucket: max_bucket_aggregation;
	min_bucket: min_bucket_aggregation;
	sum_bucket: sum_bucket_aggregation;
	moving_avg: moving_average_aggregation;
	cumulative_sum: cumulative_sum_aggregation;
	serial_diff: serial_differencing_aggregation;
	bucket_script: bucket_script_aggregation;
	bucket_selector: bucket_selector_aggregation;
	sampler: sampler_aggregation;
	aggs: map<string, aggregation_container>[];
}
/**namespace:Aggregations.Metric.Average */
interface average_aggregation {
}
/**namespace:Aggregations.Bucket.DateHistogram */
interface date_histogram_aggregation {
	field: field;
	script: script;
	params: map<string, any>[];
	interval: union<DateInterval, time>;
	format: string;
	min_doc_count: integer;
	time_zone: string;
	factor: integer;
	offset: string;
	order: histogram_order;
	extended_bounds: extended_bounds<Date>;
	missing: Date;
}
/**namespace:Aggregations.Metric.Percentiles */
interface percentiles_aggregation {
	Percents: double[];
	Method: percentiles_method;
}
/**namespace:Aggregations.Metric.Percentiles.Methods */
interface percentiles_method {
}
/**namespace:Aggregations.Bucket.DateRange */
interface date_range_aggregation {
	field: field;
	format: string;
	ranges: date_range_expression[];
}
/**namespace:Aggregations.Bucket.DateRange */
/**custom_serialization*/
interface date_range_expression {
	from: date_math;
	to: date_math;
	key: string;
}
/**namespace:Aggregations.Metric.ExtendedStats */
interface extended_stats_aggregation {
}
/**namespace:Aggregations.Bucket.Filter */
interface filter_aggregation {
	filter: query_container;
}
/**namespace:Aggregations.Bucket.Filters */
interface filters_aggregation {
	filters: union<map<string, query_container>[], query_container[]>;
	other_bucket: boolean;
	other_bucket_key: string;
}
/**namespace:QueryDsl.Abstractions.Container */
/**custom_serialization*/
interface query_container {
	IsConditionless: boolean;
	IsStrict: boolean;
	IsVerbatim: boolean;
	RawQuery: raw_query;
	bool: bool_query;
	match_all: match_all_query;
	term: term_query;
	wildcard: wildcard_query;
	prefix: prefix_query;
	boosting: boosting_query;
	ids: ids_query;
	limit: limit_query;
	constant_score: constant_score_query;
	dis_max: dis_max_query;
	multi_match: multi_match_query;
	match: match_query;
	fuzzy: fuzzy_query;
	geo_shape: geo_shape_query;
	common: common_terms_query;
	terms: terms_query;
	range: range_query;
	regexp: regexp_query;
	has_child: has_child_query;
	has_parent: has_parent_query;
	span_term: span_term_query;
	simple_query_string: simple_query_string_query;
	query_string: query_string_query;
	mlt: more_like_this_query;
	span_first: span_first_query;
	span_or: span_or_query;
	span_near: span_near_query;
	span_not: span_not_query;
	span_containing: span_containing_query;
	span_within: span_within_query;
	span_multi: span_multi_term_query;
	nested: nested_query;
	indices: indices_query;
	function_score: function_score_query;
	template: template_query;
	geo_bounding_box: geo_bounding_box_query;
	geo_distance: geo_distance_query;
	geo_polygon: geo_polygon_query;
	geo_distance_range: geo_distance_range_query;
	geohash_cell: geo_hash_cell_query;
	script: script_query;
	exists: exists_query;
	missing: missing_query;
	type: type_query;
	filtered: filtered_query;
	and: and_query;
	or: or_query;
	not: not_query;
}
/**namespace:QueryDsl.NestSpecific */
interface raw_query {
	Raw: string;
}
/**namespace:QueryDsl.Compound.Bool */
/**custom_serialization*/
interface bool_query {
	must: query_container[];
	must_not: query_container[];
	should: query_container[];
	filter: query_container[];
	minimum_should_match: minimum_should_match;
	disable_coord: boolean;
	Locked: boolean;
}
/**namespace:QueryDsl */
/**custom_serialization*/
interface match_all_query {
	norm_field: string;
}
/**namespace:QueryDsl.TermLevel.Term */
/**custom_serialization*/
interface term_query {
	value: any;
}
/**namespace:QueryDsl.TermLevel.Wildcard */
/**custom_serialization*/
interface wildcard_query {
	/**custom_serialization */
	rewrite: RewriteMultiTerm;
}
/**namespace:QueryDsl.TermLevel.Prefix */
/**custom_serialization*/
interface prefix_query {
	/**custom_serialization */
	rewrite: RewriteMultiTerm;
}
/**namespace:QueryDsl.Compound.Boosting */
/**custom_serialization*/
interface boosting_query {
	positive: query_container;
	negative: query_container;
	negative_boost: double;
}
/**namespace:QueryDsl.TermLevel.Ids */
/**custom_serialization*/
interface ids_query {
	types: types;
	values: id[];
}
/**namespace:QueryDsl.Compound.Limit */
/**custom_serialization*/
interface limit_query {
	limit: integer;
}
/**namespace:QueryDsl.Compound.ConstantScore */
/**custom_serialization*/
interface constant_score_query {
	filter: query_container;
}
/**namespace:QueryDsl.Compound.Dismax */
/**custom_serialization*/
interface dis_max_query {
	tie_breaker: double;
	queries: query_container[];
}
/**namespace:QueryDsl.FullText.MultiMatch */
/**custom_serialization*/
interface multi_match_query {
	/**custom_serialization */
	type: TextQueryType;
	query: string;
	analyzer: string;
	/**custom_serialization */
	fuzzy_rewrite: RewriteMultiTerm;
	fuzziness: fuzziness;
	cutoff_frequency: double;
	prefix_length: integer;
	max_expansions: integer;
	slop: integer;
	lenient: boolean;
	use_dis_max: boolean;
	tie_breaker: double;
	minimum_should_match: minimum_should_match;
	operator: Operator;
	fields: field[];
	zero_terms_query: ZeroTermsQuery;
}
/**namespace:QueryDsl.FullText.Match */
/**custom_serialization*/
interface match_query {
	type: string;
	query: string;
	analyzer: string;
	/**custom_serialization */
	fuzzy_rewrite: RewriteMultiTerm;
	fuzziness: fuzziness;
	fuzzy_transpositions: boolean;
	cutoff_frequency: double;
	prefix_length: integer;
	max_expansions: integer;
	slop: integer;
	lenient: boolean;
	minimum_should_match: minimum_should_match;
	operator: Operator;
	zero_terms_query: ZeroTermsQuery;
}
/**namespace:QueryDsl.TermLevel.Fuzzy */
/**custom_serialization*/
interface fuzzy_query {
	prefix_length: integer;
	rewrite: RewriteMultiTerm;
	max_expansions: integer;
	transpositions: boolean;
}
/**namespace:QueryDsl.Geo.Shape */
/**custom_serialization*/
interface geo_shape_query {
}
/**namespace:QueryDsl.FullText.CommonTerms */
/**custom_serialization*/
interface common_terms_query {
	query: string;
	cutoff_frequency: double;
	/**custom_serialization */
	low_freq_operator: Operator;
	/**custom_serialization */
	high_freq_operator: Operator;
	minimum_should_match: minimum_should_match;
	analyzer: string;
	disable_coord: boolean;
}
/**namespace:QueryDsl.TermLevel.Terms */
/**custom_serialization*/
interface terms_query {
	MinimumShouldMatch: minimum_should_match;
	DisableCoord: boolean;
	Terms: any[];
	TermsLookup: field_lookup;
}
/**namespace:QueryDsl.Abstractions.FieldLookup */
/**custom_serialization*/
interface field_lookup {
	index: index_name;
	type: type_name;
	id: id;
	path: field;
}
/**namespace:QueryDsl.TermLevel.Range */
/**custom_serialization*/
interface range_query {
}
/**namespace:QueryDsl.TermLevel.Regexp */
/**custom_serialization*/
interface regexp_query {
	value: string;
	flags: string;
	max_determinized_states: integer;
}
/**namespace:QueryDsl.Joining.HasChild */
/**custom_serialization*/
interface has_child_query {
	type: type_name;
	score_mode: ChildScoreMode;
	min_children: integer;
	max_children: integer;
	query: query_container;
	inner_hits: inner_hits;
}
/**namespace:Search.Search.InnerHits */
/**custom_serialization*/
interface inner_hits {
	name: string;
	from: integer;
	size: integer;
	sort: sort[];
	highlight: highlight;
	explain: boolean;
	_source: source_filter;
	version: boolean;
	fielddata_fields: field[];
	script_fields: map<string, script_field>[];
}
/**namespace:QueryDsl.Joining.HasParent */
/**custom_serialization*/
interface has_parent_query {
	type: type_name;
	score_mode: ParentScoreMode;
	query: query_container;
	inner_hits: inner_hits;
}
/**namespace:QueryDsl.Span.Term */
/**custom_serialization*/
interface span_term_query {
}
/**namespace:QueryDsl.FullText.SimpleQueryString */
/**custom_serialization*/
interface simple_query_string_query {
	fields: field[];
	query: string;
	analyzer: string;
	default_operator: Operator;
	flags: SimpleQueryStringFlags;
	locale: string;
	lowercase_expanded_terms: boolean;
	lenient: boolean;
	analyze_wildcard: boolean;
	minimum_should_match: minimum_should_match;
}
/**namespace:QueryDsl.FullText.QueryString */
/**custom_serialization*/
interface query_string_query {
	query: string;
	default_field: field;
	default_operator: Operator;
	analyzer: string;
	quote_analyzer: string;
	allow_leading_wildcard: boolean;
	lowercase_expanded_terms: boolean;
	enable_position_increments: boolean;
	fuzzy_max_expansions: integer;
	fuziness: fuzziness;
	fuzzy_prefix_length: integer;
	phrase_slop: double;
	analyze_wildcard: boolean;
	auto_generate_phrase_queries: boolean;
	max_determinized_states: integer;
	minimum_should_match: minimum_should_match;
	lenient: boolean;
	locale: string;
	time_zone: string;
	fields: field[];
	use_dis_max: boolean;
	tie_breaker: double;
	rewrite: RewriteMultiTerm;
	fuzzy_rewrite: RewriteMultiTerm;
	quote_field_suffix: string;
	escape: boolean;
}
/**namespace:QueryDsl.Specialized.MoreLikeThis */
/**custom_serialization*/
interface more_like_this_query {
	fields: field[];
	like: like[];
	unlike: like[];
	max_query_terms: integer;
	min_term_freq: integer;
	min_doc_freq: integer;
	max_doc_freq: integer;
	min_word_len: integer;
	max_word_len: integer;
	stop_words: stop_words;
	analyzer: string;
	minimum_should_match: minimum_should_match;
	boost_terms: double;
	include: boolean;
}
/**namespace:QueryDsl.Specialized.MoreLikeThis.Like */
/**custom_serialization*/
interface like_document {
	_index: index_name;
	_type: type_name;
	_id: id;
	fields: field[];
	_routing: string;
	doc: any;
	per_field_analyzer: map<field, string>[];
	CanBeFlattened: boolean;
}
/**namespace:QueryDsl.Span.First */
/**custom_serialization*/
interface span_first_query {
	match: span_query;
	end: integer;
}
/**namespace:QueryDsl.Span */
/**custom_serialization*/
interface span_query {
	span_term: span_term_query;
	span_first: span_first_query;
	span_near: span_near_query;
	span_or: span_or_query;
	span_not: span_not_query;
	span_containing: span_containing_query;
	span_within: span_within_query;
	span_multi: span_multi_term_query;
}
/**namespace:QueryDsl.Span.Near */
/**custom_serialization*/
interface span_near_query {
	clauses: span_query[];
	slop: integer;
	in_order: boolean;
	collect_payloads: boolean;
}
/**namespace:QueryDsl.Span.Or */
/**custom_serialization*/
interface span_or_query {
	clauses: span_query[];
}
/**namespace:QueryDsl.Span.Not */
/**custom_serialization*/
interface span_not_query {
	include: span_query;
	exclude: span_query;
	pre: integer;
	post: integer;
	dist: integer;
}
/**namespace:QueryDsl.Span.Containing */
/**custom_serialization*/
interface span_containing_query {
	little: span_query;
	big: span_query;
}
/**namespace:QueryDsl.Span.Within */
/**custom_serialization*/
interface span_within_query {
	little: span_query;
	big: span_query;
}
/**namespace:QueryDsl.Span.MultiTerm */
/**custom_serialization*/
interface span_multi_term_query {
	match: query_container;
}
/**namespace:QueryDsl.Joining.Nested */
/**custom_serialization*/
interface nested_query {
	score_mode: NestedScoreMode;
	query: query_container;
	path: field;
	inner_hits: inner_hits;
}
/**namespace:QueryDsl.Compound.Indices */
/**custom_serialization*/
interface indices_query {
	/**custom_serialization */
	indices: indices;
	query: query_container;
	/**custom_serialization */
	no_match_query: query_container;
}
/**namespace:QueryDsl.Compound.FunctionScore */
/**custom_serialization*/
interface function_score_query {
	query: query_container;
	functions: score_function[];
	max_boost: double;
	score_mode: FunctionScoreMode;
	boost_mode: FunctionBoostMode;
	min_score: double;
}
/**namespace:QueryDsl.Compound.FunctionScore.Functions */
interface score_function {
	filter: query_container;
	weight: double;
}
/**namespace:QueryDsl.Specialized.Template */
/**custom_serialization*/
interface template_query {
	file: string;
	inline: string;
	id: id;
	params: map<string, any>[];
}
/**namespace:QueryDsl.Geo.BoundingBox */
/**custom_serialization*/
interface geo_bounding_box_query {
	BoundingBox: bounding_box;
	type: GeoExecution;
	coerce: boolean;
	ignore_malformed: boolean;
	validation_method: GeoValidationMethod;
}
/**namespace:QueryDsl.Geo.BoundingBox */
/**custom_serialization*/
interface bounding_box {
	top_left: geo_location;
	bottom_right: geo_location;
}
/**namespace:QueryDsl.Geo.Distance */
/**custom_serialization*/
interface geo_distance_query {
	Location: geo_location;
	distance: distance;
	optimize_bbox: GeoOptimizeBBox;
	distance_type: GeoDistanceType;
	coerce: boolean;
	ignore_malformed: boolean;
	validation_method: GeoValidationMethod;
}
/**namespace:QueryDsl.Geo.Polygon */
/**custom_serialization*/
interface geo_polygon_query {
	Points: geo_location[];
	coerce: boolean;
	ignore_malformed: boolean;
	validation_method: GeoValidationMethod;
}
/**namespace:QueryDsl.Geo.DistanceRange */
/**custom_serialization*/
interface geo_distance_range_query {
	Location: geo_location;
	gte: distance;
	lte: distance;
	gt: distance;
	lt: distance;
	distance_type: GeoDistanceType;
	optimize_bbox: GeoOptimizeBBox;
	coerce: boolean;
	ignore_malformed: boolean;
	validation_method: GeoValidationMethod;
}
/**namespace:QueryDsl.Geo.HashCell */
/**custom_serialization*/
interface geo_hash_cell_query {
	Location: geo_location;
	precision: union<integer, distance>;
	neighbors: boolean;
}
/**namespace:QueryDsl.Specialized.Script */
/**custom_serialization*/
interface script_query {
	inline: string;
	id: id;
	file: string;
	/**custom_serialization */
	params: map<string, any>[];
	lang: string;
}
/**namespace:QueryDsl.TermLevel.Exists */
/**custom_serialization*/
interface exists_query {
	field: field;
}
/**namespace:QueryDsl.TermLevel.Missing */
/**custom_serialization*/
interface missing_query {
	field: field;
	existence: boolean;
	null_value: boolean;
}
/**namespace:QueryDsl.TermLevel.Type */
/**custom_serialization*/
interface type_query {
	value: type_name;
}
/**namespace:QueryDsl.Compound.Filtered */
/**custom_serialization*/
interface filtered_query {
	query: query_container;
	filter: query_container;
}
/**namespace:QueryDsl.Compound.And */
/**custom_serialization*/
interface and_query {
	filters: query_container[];
}
/**namespace:QueryDsl.Compound.Or */
/**custom_serialization*/
interface or_query {
	filters: query_container[];
}
/**namespace:QueryDsl.Compound.Not */
/**custom_serialization*/
interface not_query {
	filters: query_container[];
}
/**namespace:Aggregations.Bucket.GeoDistance */
interface geo_distance_aggregation {
	field: field;
	origin: geo_location;
	unit: DistanceUnit;
	distance_type: GeoDistanceType;
	ranges: range[];
}
/**namespace:CommonOptions.Range */
/**custom_serialization*/
interface range {
	from: double;
	to: double;
	key: string;
}
/**namespace:Aggregations.Bucket.GeoHashGrid */
interface geo_hash_grid_aggregation {
	field: field;
	size: integer;
	shard_size: integer;
	precision: GeoHashPrecision;
}
/**namespace:Aggregations.Metric.GeoBounds */
interface geo_bounds_aggregation {
	wrap_longitude: boolean;
}
/**namespace:Aggregations.Bucket.Histogram */
interface histogram_aggregation {
	field: field;
	script: script;
	interval: double;
	min_doc_count: integer;
	order: histogram_order;
	extended_bounds: extended_bounds<double>;
	pre_offset: long;
	post_offset: long;
	missing: double;
}
/**namespace:Aggregations.Bucket.Global */
interface global_aggregation {
}
/**namespace:Aggregations.Bucket.IpRange */
interface ip_range_aggregation {
	field: field;
	ranges: ip_range[];
}
/**namespace:Aggregations.Bucket.IpRange */
/**custom_serialization*/
interface ip_range {
	from: string;
	to: string;
	mask: string;
}
/**namespace:Aggregations.Metric.Max */
interface max_aggregation {
}
/**namespace:Aggregations.Metric.Min */
interface min_aggregation {
}
/**namespace:Aggregations.Metric.Cardinality */
interface cardinality_aggregation {
	precision_threshold: integer;
	rehash: boolean;
}
/**namespace:Aggregations.Bucket.Missing */
interface missing_aggregation {
	field: field;
}
/**namespace:Aggregations.Bucket.Nested */
interface nested_aggregation {
	path: field;
}
/**namespace:Aggregations.Bucket.ReverseNested */
interface reverse_nested_aggregation {
	path: field;
}
/**namespace:Aggregations.Bucket.Range */
interface range_aggregation {
	field: field;
	script: script;
	ranges: range[];
}
/**namespace:Aggregations.Metric.Stats */
interface stats_aggregator {
}
/**namespace:Aggregations.Metric.Sum */
interface sum_aggregation {
}
/**namespace:Aggregations.Bucket.Terms */
interface terms_aggregation {
	field: field;
	script: script;
	size: integer;
	shard_size: integer;
	min_doc_count: integer;
	execution_hint: TermsAggregationExecutionHint;
	order: terms_order[];
	include: terms_include_exclude;
	exclude: terms_include_exclude;
	collect_mode: TermsAggregationCollectMode;
	show_term_doc_error_count: boolean;
	missing: string;
}
/**namespace:Aggregations.Bucket.SignificantTerms */
interface significant_terms_aggregation {
	field: field;
	size: integer;
	shard_size: integer;
	min_doc_count: integer;
	execution_hint: TermsAggregationExecutionHint;
	include: map<string, string>[];
	exclude: map<string, string>[];
	mutual_information: mutual_information_heuristic;
	chi_square: chi_square_heuristic;
	gnd: google_normalized_distance_heuristic;
	percentage: percentage_score_heuristic;
	script_heuristic: scripted_heuristic;
	background_filter: query_container;
}
/**namespace:Aggregations.Bucket.SignificantTerms.Heuristics */
/**custom_serialization*/
interface mutual_information_heuristic {
	include_negatives: boolean;
	background_is_superset: boolean;
}
/**namespace:Aggregations.Bucket.SignificantTerms.Heuristics */
/**custom_serialization*/
interface chi_square_heuristic {
	include_negatives: boolean;
	background_is_superset: boolean;
}
/**namespace:Aggregations.Bucket.SignificantTerms.Heuristics */
/**custom_serialization*/
interface google_normalized_distance_heuristic {
	background_is_superset: boolean;
}
/**namespace:Aggregations.Bucket.SignificantTerms.Heuristics */
/**custom_serialization*/
interface percentage_score_heuristic {
}
/**namespace:Aggregations.Bucket.SignificantTerms.Heuristics */
/**custom_serialization*/
interface scripted_heuristic {
	script: script;
}
/**namespace:Aggregations.Metric.ValueCount */
interface value_count_aggregation {
}
/**namespace:Aggregations.Metric.PercentileRanks */
interface percentile_ranks_aggregation {
	Values: double[];
	Method: percentiles_method;
}
/**namespace:Aggregations.Metric.TopHits */
interface top_hits_aggregation {
	from: integer;
	size: integer;
	sort: sort[];
	_source: source_filter;
	highlight: highlight;
	explain: boolean;
	/**custom_serialization */
	script_fields: map<string, script_field>[];
	fielddata_fields: field[];
	version: boolean;
}
/**namespace:Aggregations.Bucket.Children */
interface children_aggregation {
	type: type_name;
}
/**namespace:Aggregations.Metric.ScriptedMetric */
interface scripted_metric_aggregation {
	init_script: script;
	map_script: script;
	combine_script: script;
	reduce_script: script;
	params: map<string, any>[];
}
/**namespace:Aggregations.Pipeline.AverageBucket */
interface average_bucket_aggregation {
}
/**namespace:Aggregations.Pipeline.Derivative */
interface derivative_aggregation {
}
/**namespace:Aggregations.Pipeline.MaxBucket */
interface max_bucket_aggregation {
}
/**namespace:Aggregations.Pipeline.MinBucket */
interface min_bucket_aggregation {
}
/**namespace:Aggregations.Pipeline.SumBucket */
interface sum_bucket_aggregation {
}
/**namespace:Aggregations.Pipeline.MovingAverage */
interface moving_average_aggregation {
	Model: moving_average_model;
	window: integer;
	minimize: boolean;
	predict: integer;
}
/**namespace:Aggregations.Pipeline.MovingAverage.Models */
interface moving_average_model {
	Name: string;
}
/**namespace:Aggregations.Pipeline.CumulativeSum */
interface cumulative_sum_aggregation {
}
/**namespace:Aggregations.Pipeline.SerialDifferencing */
interface serial_differencing_aggregation {
	lag: integer;
}
/**namespace:Aggregations.Pipeline.BucketScript */
interface bucket_script_aggregation {
	script: script;
}
/**namespace:Aggregations.Pipeline.BucketSelector */
interface bucket_selector_aggregation {
	script: script;
}
/**namespace:Aggregations.Bucket.Sampler */
interface sampler_aggregation {
	shard_size: integer;
	field: field;
	max_docs_per_value: integer;
	script: script;
	execution_hint: SamplerAggregationExecutionHint;
}
/**namespace:Search.Search.InnerHits */
/**custom_serialization*/
interface inner_hits_container {
	type: map<type_name, global_inner_hit>[];
	path: map<field, global_inner_hit>[];
}
/**namespace:Search.Search.InnerHits */
/**custom_serialization*/
interface global_inner_hit {
	query: query_container;
	inner_hits: map<string, inner_hits_container>[];
}
/**namespace:Indices.AliasManagement */
/**custom_serialization*/
interface alias {
	filter: query_container;
	routing: string;
	index_routing: string;
	search_routing: string;
}
/**namespace:Document.Multiple.Bulk.BulkOperation */
interface bulk_operation {
	Operation: string;
	_index: index_name;
	_type: type_name;
	_id: id;
	_version: long;
	/**custom_serialization */
	_version_type: VersionType;
	_routing: string;
	_parent: id;
	_timestamp: long;
	_ttl: time;
	_retry_on_conflict: integer;
}
/**namespace:Document.Multiple.MultiGet.Request */
/**custom_serialization*/
interface multi_get_operation {
	_index: index_name;
	_type: type_name;
	_id: id;
	fields: field[];
	_routing: string;
	_source: union<boolean, source_filter>;
	CanBeFlattened: boolean;
}
/**namespace:Document.Multiple.MultiGet.Response */
interface multi_get_hit<t> {
	Source: t;
	Index: string;
	Found: boolean;
	Type: string;
	Version: long;
	Id: string;
}
/**namespace:Document.Multiple.MultiTermVectors */
interface multi_term_vector_operation {
	_index: index_name;
	_type: type_name;
	_id: id;
	doc: any;
	fields: field[];
	offsets: boolean;
	payloads: boolean;
	positions: boolean;
	term_statistics: boolean;
	field_statistics: boolean;
}
/**namespace:Indices.AliasManagement.Alias.Actions */
interface alias_action {
}
/**namespace:IndexModules.Similarity */
interface similarity {
	type: string;
}
/**namespace:IndexModules.IndexSettings */
/**custom_serialization*/
interface index_state {
	settings: map<string, any>[];
	aliases: map<index_name, alias>[];
	warmers: map<type_name, warmer>[];
	mappings: map<type_name, type_mapping>[];
	similarity: map<string, similarity>[];
}
/**namespace:Mapping.MetaFields */
interface field_mapping {
}
/**namespace:Modules.Indices.Fielddata.Numeric */
interface numeric_fielddata {
	format: NumericFielddataFormat;
}
/**namespace:Mapping.Norms */
/**custom_serialization*/
interface norms {
	enabled: boolean;
	/**custom_serialization */
	loading: NormsLoading;
}
/**namespace:Modules.Indices.Fielddata.String */
interface string_fielddata {
	format: StringFielddataFormat;
}
/**namespace:Modules.Indices.Fielddata.GeoPoint */
interface geo_point_fielddata {
	precision: distance;
	format: GeoPointFielddataFormat;
}
/**namespace:Mapping.Types.Core.String */
interface string_property {
	index: FieldIndexOption;
	term_vector: TermVectorOption;
	boost: double;
	null_value: string;
	norms: norms;
	index_options: IndexOptions;
	analyzer: string;
	search_analyzer: string;
	include_in_all: boolean;
	ignore_above: integer;
	position_offset_gap: integer;
	fielddata: string_fielddata;
}
/**namespace:Mapping.Types.Core.Number */
interface number_property {
	index: NonStringIndexOption;
	boost: double;
	null_value: double;
	include_in_all: boolean;
	precision_step: integer;
	ignore_malformed: boolean;
	coerce: boolean;
	fielddata: numeric_fielddata;
}
/**namespace:Mapping.Types.Core.Date */
interface date_property {
	index: NonStringIndexOption;
	boost: double;
	null_value: Date;
	include_in_all: boolean;
	precision_step: integer;
	ignore_malformed: boolean;
	format: string;
	numeric_resolution: NumericResolutionUnit;
	fielddata: numeric_fielddata;
}
/**namespace:Search.Suggesters.ContextSuggester */
/**custom_serialization*/
interface suggest_context {
	type: string;
	path: field;
}
/**namespace:Modules.Indices.CircuitBreaker */
interface circuit_breaker_settings {
	TotalLimit: string;
	FielddataLimit: string;
	FielddataOverhead: float;
	RequestLimit: string;
	RequestOverhead: float;
}
/**namespace:Modules.Indices.Recovery */
interface indices_recovery_settings {
	ConcurrentStreams: integer;
	ConcurrentSmallFileStreams: integer;
	FileChunkSize: string;
	TranslogOperations: integer;
	TranslogSize: string;
	Compress: boolean;
	MaxBytesPerSecond: string;
}
/**namespace:Modules.SnapshotAndRestore.Repositories */
interface snapshot_repository {
	type: string;
}
/**namespace:Indices.IndexSettings.UpdateIndexSettings */
/**custom_serialization*/
interface update_index_settings_request {
	IndexSettings: map<string, any>[];
	Index: indices;
}
/**namespace:Search.FieldStats */
interface index_constraint {
	min_value: index_constraint_comparison;
	max_value: index_constraint_comparison;
}
/**namespace:Search.FieldStats */
interface index_constraint_comparison {
	gte: string;
	gt: string;
	lte: string;
	lt: string;
	format: string;
}
/**namespace:CommonAbstractions.Response */
interface response {
	ServerError: server_error;
}
/**namespace:Search.Percolator.MultiPercolate */
interface percolate_operation {
	MultiPercolateName: string;
	size: integer;
	track_scores: boolean;
	sort: sort[];
	highlight: highlight;
	query: query_container;
	filter: query_container;
	aggs: map<string, aggregation_container>[];
}
/**namespace:CommonAbstractions.LazyDocument */
/**custom_serialization*/
interface lazy_document {
}
/**namespace:Search.Search.Hits */
interface hit<t> {
	Fields: map<string, any>[];
	Source: t;
	Index: string;
	Type: string;
	Version: long;
	Score: double;
	Id: string;
	Parent: string;
	Routing: string;
	Timestamp: long;
	Ttl: long;
	Sorts: any[];
	Highlights: map<string, highlight_hit>[];
	Explanation: explanation;
	MatchedQueries: string[];
	InnerHits: map<string, inner_hits_result>[];
}
/**namespace:Aggregations */
interface aggregate {
	Meta: map<string, any>[];
}
/**namespace:Analysis.Analyzers */
interface analyzer_base {
	Version: string;
	Type: string;
}
/**namespace:Analysis.Analyzers */
interface custom_analyzer extends analyzer_base {
	tokenizer: string;
	filter: string[];
	char_filter: string[];
	position_offset_gap: integer;
}
/**namespace:Analysis.Analyzers */
interface keyword_analyzer extends analyzer_base {
}
/**namespace:Analysis.Analyzers */
interface language_analyzer extends analyzer_base {
	Type: string;
	stopwords: stop_words;
	stem_exclusion: string[];
	Language: Language;
	stopwords_path: string;
}
/**namespace:Analysis */
/**custom_serialization*/
interface stop_words extends union<string, string[]> {
}
/**namespace:CommonAbstractions.Union */
/**custom_serialization*/
interface union<t_first, t_second> {
}
/**namespace:Analysis.Analyzers */
interface pattern_analyzer extends analyzer_base {
	lowercase: boolean;
	pattern: string;
	flags: string;
	stopwords: stop_words;
}
/**namespace:Analysis.Analyzers */
interface simple_analyzer extends analyzer_base {
}
/**namespace:Analysis.Analyzers */
interface snowball_analyzer extends analyzer_base {
	language: SnowballLanguage;
	stopwords: stop_words;
}
/**namespace:Analysis.Analyzers */
interface standard_analyzer extends analyzer_base {
	stopwords: stop_words;
	max_token_length: integer;
}
/**namespace:Analysis.Analyzers */
interface stop_analyzer extends analyzer_base {
	stopwords: stop_words;
	stopwords_path: string;
}
/**namespace:Analysis.Analyzers */
interface whitespace_analyzer extends analyzer_base {
}
/**namespace:Analysis.CharFilters */
interface char_filter_base {
	Version: string;
	Type: string;
}
/**namespace:Analysis.CharFilters */
interface html_strip_char_filter extends char_filter_base {
}
/**namespace:Analysis.CharFilters */
interface mapping_char_filter extends char_filter_base {
	mappings: string[];
	mappings_path: string;
}
/**namespace:Analysis.CharFilters */
interface pattern_replace_char_filter extends char_filter_base {
	pattern: string;
	replacement: string;
}
/**namespace:Analysis.TokenFilters */
interface ascii_folding_token_filter extends token_filter_base {
	PreserveOriginal: boolean;
}
/**namespace:Analysis.TokenFilters */
interface token_filter_base {
	version: string;
	type: string;
}
/**namespace:Analysis.TokenFilters */
interface common_grams_token_filter extends token_filter_base {
	common_words: string[];
	common_words_path: string;
	ignore_case: boolean;
	query_mode: boolean;
}
/**namespace:Analysis.TokenFilters */
interface elision_token_filter extends token_filter_base {
	articles: string[];
}
/**namespace:Analysis.TokenFilters */
interface hunspell_token_filter extends token_filter_base {
	ignore_case: boolean;
	locale: string;
	dictionary: string;
	dedup: boolean;
	longest_only: boolean;
}
/**namespace:Analysis.TokenFilters */
interface keep_types_token_filter extends token_filter_base {
	Types: string[];
}
/**namespace:Analysis.TokenFilters */
interface keep_words_token_filter extends token_filter_base {
	keep_words: string[];
	keep_words_path: string;
	keep_words_case: boolean;
}
/**namespace:Analysis.TokenFilters */
interface keyword_marker_token_filter extends token_filter_base {
	keywords: string[];
	keywords_path: string;
	ignore_case: boolean;
}
/**namespace:Analysis.TokenFilters */
interface k_stem_token_filter extends token_filter_base {
}
/**namespace:Analysis.TokenFilters */
interface length_token_filter extends token_filter_base {
	min: integer;
	max: integer;
}
/**namespace:Analysis.TokenFilters */
interface limit_token_count_token_filter extends token_filter_base {
	max_token_count: integer;
	consume_all_tokens: boolean;
}
/**namespace:Analysis.TokenFilters */
interface lowercase_token_filter extends token_filter_base {
	language: string;
}
/**namespace:Analysis.TokenFilters */
interface n_gram_token_filter extends token_filter_base {
	min_gram: integer;
	max_gram: integer;
}
/**namespace:Analysis.TokenFilters */
interface pattern_capture_token_filter extends token_filter_base {
	patterns: string[];
	preserve_original: boolean;
}
/**namespace:Analysis.TokenFilters */
interface pattern_replace_token_filter extends token_filter_base {
	pattern: string;
	replacement: string;
}
/**namespace:Analysis.TokenFilters */
interface porter_stem_token_filter extends token_filter_base {
}
/**namespace:Analysis.TokenFilters */
interface reverse_token_filter extends token_filter_base {
}
/**namespace:Analysis.TokenFilters */
interface snowball_token_filter extends token_filter_base {
	language: SnowballLanguage;
}
/**namespace:Analysis.TokenFilters */
interface standard_token_filter extends token_filter_base {
}
/**namespace:Analysis.TokenFilters */
interface stemmer_override_token_filter extends token_filter_base {
	rules: string[];
	rules_path: string;
}
/**namespace:Analysis.TokenFilters */
interface stemmer_token_filter extends token_filter_base {
	language: string;
}
/**namespace:Analysis.TokenFilters */
interface trim_token_filter extends token_filter_base {
}
/**namespace:Analysis.TokenFilters */
interface truncate_token_filter extends token_filter_base {
	length: integer;
}
/**namespace:Analysis.TokenFilters */
interface unique_token_filter extends token_filter_base {
	only_on_same_position: boolean;
}
/**namespace:Analysis.TokenFilters */
interface uppercase_token_filter extends token_filter_base {
}
/**namespace:Analysis.TokenFilters.CompoundWord */
interface compound_word_token_filter_base extends token_filter_base {
	WordList: string[];
	WordListPath: string;
	MinWordSize: integer;
	MinSubwordSize: integer;
	MaxSubwordSize: integer;
	OnlyLongestMatch: boolean;
	HyphenationPatternsPath: string;
}
/**namespace:Analysis.TokenFilters.CompoundWord */
interface dictionary_decompounder_token_filter extends compound_word_token_filter_base {
}
/**namespace:Analysis.TokenFilters.CompoundWord */
interface hyphenation_decompounder_token_filter extends compound_word_token_filter_base {
}
/**namespace:Analysis.TokenFilters.DelimitedPayload */
interface delimited_payload_token_filter extends token_filter_base {
	delimiter: string;
	encoding: DelimitedPayloadEncoding;
}
/**namespace:Analysis.TokenFilters.EdgeNGram */
interface edge_n_gram_token_filter extends token_filter_base {
	min_gram: integer;
	max_gram: integer;
	side: EdgeNGramSide;
}
/**namespace:Analysis.TokenFilters.Phonetic */
interface phonetic_token_filter extends token_filter_base {
	encoder: PhoneticEncoder;
	replace: boolean;
}
/**namespace:Analysis.TokenFilters.Shingle */
interface shingle_token_filter extends token_filter_base {
	min_shingle_size: integer;
	max_shingle_size: integer;
	output_unigrams: boolean;
	output_unigrams_if_no_shingles: boolean;
	token_separator: string;
	filler_token: string;
}
/**namespace:Analysis.TokenFilters.Stop */
interface stop_token_filter extends token_filter_base {
	stopwords: stop_words;
	ignore_case: boolean;
	stopwords_path: string;
	remove_trailing: boolean;
}
/**namespace:Analysis.TokenFilters.Synonym */
interface synonym_token_filter extends token_filter_base {
	synonyms_path: string;
	format: SynonymFormat;
	synonyms: string[];
	ignore_case: boolean;
	expand: boolean;
	tokenizer: string;
}
/**namespace:Analysis.TokenFilters.WordDelimiter */
interface word_delimiter_token_filter extends token_filter_base {
	generate_word_parts: boolean;
	generate_number_parts: boolean;
	catenate_words: boolean;
	catenate_numbers: boolean;
	catenate_all: boolean;
	split_on_case_change: boolean;
	preserve_original: boolean;
	split_on_numerics: boolean;
	stem_english_possessive: boolean;
	protected_words: string[];
	protected_words_path : string;
	type_table: string[];
	type_table_path: string;
}
/**namespace:Analysis.Tokenizers */
interface keyword_tokenizer extends tokenizer_base {
	buffer_size: integer;
}
/**namespace:Analysis.Tokenizers */
interface tokenizer_base {
	Version: string;
	Type: string;
}
/**namespace:Analysis.Tokenizers */
interface letter_tokenizer extends tokenizer_base {
}
/**namespace:Analysis.Tokenizers */
interface lowercase_tokenizer extends tokenizer_base {
}
/**namespace:Analysis.Tokenizers */
interface path_hierarchy_tokenizer extends tokenizer_base {
	delimiter: string;
	replacement: string;
	buffer_size: integer;
	reverse: boolean;
	skip: integer;
}
/**namespace:Analysis.Tokenizers */
interface pattern_tokenizer extends tokenizer_base {
	pattern: string;
	flags: string;
	group: integer;
}
/**namespace:Analysis.Tokenizers */
interface standard_tokenizer extends tokenizer_base {
	max_token_length: integer;
}
/**namespace:Analysis.Tokenizers */
interface uax_email_url_tokenizer extends tokenizer_base {
	max_token_length: integer;
}
/**namespace:Analysis.Tokenizers */
interface whitespace_tokenizer extends tokenizer_base {
}
/**namespace:Analysis.Tokenizers.NGram */
interface edge_n_gram_tokenizer extends tokenizer_base {
	min_gram: integer;
	max_gram: integer;
	token_chars: TokenChar[];
}
/**namespace:Analysis.Tokenizers.NGram */
interface n_gram_tokenizer extends tokenizer_base {
	min_gram: integer;
	max_gram: integer;
	token_chars: TokenChar[];
}
/**namespace:Cat */
interface cat_response<t_cat_record> extends response {
	Records: t_cat_record[];
}
/**namespace:Cat.CatAliases */
interface cat_aliases_request extends request {
	/**ambiguous_origin*/
	Local: boolean;
	/**ambiguous_origin*/
	MasterTimeout: time;
	/**ambiguous_origin*/
	H: string[];
	/**ambiguous_origin*/
	Help: boolean;
	/**ambiguous_origin*/
	V: boolean;
	/**ambiguous_origin*/
	Source: string;
	/**ambiguous_origin*/
	FilterPath: string;
}
/**namespace:DefaultLanguageConstruct */
interface request {
}
/**namespace:CommonOptions.TimeUnit */
/**custom_serialization*/
interface time {
	Factor: double;
	Interval: TimeUnit;
	Milliseconds: double;
}
/**namespace:Cat.CatAllocation */
interface cat_allocation_request extends request {
	/**ambiguous_origin*/
	Bytes: Bytes;
	/**ambiguous_origin*/
	Local: boolean;
	/**ambiguous_origin*/
	MasterTimeout: time;
	/**ambiguous_origin*/
	H: string[];
	/**ambiguous_origin*/
	Help: boolean;
	/**ambiguous_origin*/
	V: boolean;
	/**ambiguous_origin*/
	Source: string;
	/**ambiguous_origin*/
	FilterPath: string;
}
/**namespace:Cat.CatCount */
interface cat_count_request extends request {
	/**ambiguous_origin*/
	Local: boolean;
	/**ambiguous_origin*/
	MasterTimeout: time;
	/**ambiguous_origin*/
	H: string[];
	/**ambiguous_origin*/
	Help: boolean;
	/**ambiguous_origin*/
	V: boolean;
	/**ambiguous_origin*/
	Source: string;
	/**ambiguous_origin*/
	FilterPath: string;
}
/**namespace:Cat.CatFielddata */
interface cat_fielddata_request extends request {
	/**ambiguous_origin*/
	Bytes: Bytes;
	/**ambiguous_origin*/
	Local: boolean;
	/**ambiguous_origin*/
	MasterTimeout: time;
	/**ambiguous_origin*/
	H: string[];
	/**ambiguous_origin*/
	Help: boolean;
	/**ambiguous_origin*/
	V: boolean;
	/**ambiguous_origin*/
	Source: string;
	/**ambiguous_origin*/
	FilterPath: string;
}
/**namespace:Cat.CatHealth */
interface cat_health_request extends request {
	/**ambiguous_origin*/
	Local: boolean;
	/**ambiguous_origin*/
	MasterTimeout: time;
	/**ambiguous_origin*/
	H: string[];
	/**ambiguous_origin*/
	Help: boolean;
	/**ambiguous_origin*/
	Ts: boolean;
	/**ambiguous_origin*/
	V: boolean;
	/**ambiguous_origin*/
	Source: string;
	/**ambiguous_origin*/
	FilterPath: string;
}
/**namespace:Cat.CatIndices */
interface cat_indices_request extends request {
	/**ambiguous_origin*/
	Bytes: Bytes;
	/**ambiguous_origin*/
	Local: boolean;
	/**ambiguous_origin*/
	MasterTimeout: time;
	/**ambiguous_origin*/
	H: string[];
	/**ambiguous_origin*/
	Help: boolean;
	/**ambiguous_origin*/
	Pri: boolean;
	/**ambiguous_origin*/
	V: boolean;
	/**ambiguous_origin*/
	Source: string;
	/**ambiguous_origin*/
	FilterPath: string;
}
/**namespace:Cat.CatMaster */
interface cat_master_request extends request {
	/**ambiguous_origin*/
	Local: boolean;
	/**ambiguous_origin*/
	MasterTimeout: time;
	/**ambiguous_origin*/
	H: string[];
	/**ambiguous_origin*/
	Help: boolean;
	/**ambiguous_origin*/
	V: boolean;
	/**ambiguous_origin*/
	Source: string;
	/**ambiguous_origin*/
	FilterPath: string;
}
/**namespace:Cat.CatNodes */
interface cat_nodes_request extends request {
	/**ambiguous_origin*/
	Local: boolean;
	/**ambiguous_origin*/
	MasterTimeout: time;
	/**ambiguous_origin*/
	H: string[];
	/**ambiguous_origin*/
	Help: boolean;
	/**ambiguous_origin*/
	V: boolean;
	/**ambiguous_origin*/
	Source: string;
	/**ambiguous_origin*/
	FilterPath: string;
}
/**namespace:Cat.CatPendingTasks */
interface cat_pending_tasks_request extends request {
	/**ambiguous_origin*/
	Local: boolean;
	/**ambiguous_origin*/
	MasterTimeout: time;
	/**ambiguous_origin*/
	H: string[];
	/**ambiguous_origin*/
	Help: boolean;
	/**ambiguous_origin*/
	V: boolean;
	/**ambiguous_origin*/
	Source: string;
	/**ambiguous_origin*/
	FilterPath: string;
}
/**namespace:Cat.CatPlugins */
interface cat_plugins_request extends request {
	/**ambiguous_origin*/
	Local: boolean;
	/**ambiguous_origin*/
	MasterTimeout: time;
	/**ambiguous_origin*/
	H: string[];
	/**ambiguous_origin*/
	Help: boolean;
	/**ambiguous_origin*/
	V: boolean;
	/**ambiguous_origin*/
	Source: string;
	/**ambiguous_origin*/
	FilterPath: string;
}
/**namespace:Cat.CatRecovery */
interface cat_recovery_request extends request {
	/**ambiguous_origin*/
	Bytes: Bytes;
	/**ambiguous_origin*/
	MasterTimeout: time;
	/**ambiguous_origin*/
	H: string[];
	/**ambiguous_origin*/
	Help: boolean;
	/**ambiguous_origin*/
	V: boolean;
	/**ambiguous_origin*/
	Source: string;
	/**ambiguous_origin*/
	FilterPath: string;
}
/**namespace:Cat.CatSegments */
interface cat_segments_request extends request {
	/**ambiguous_origin*/
	H: string[];
	/**ambiguous_origin*/
	Help: boolean;
	/**ambiguous_origin*/
	V: boolean;
	/**ambiguous_origin*/
	Source: string;
	/**ambiguous_origin*/
	FilterPath: string;
}
/**namespace:Cat.CatShards */
interface cat_shards_request extends request {
	/**ambiguous_origin*/
	Local: boolean;
	/**ambiguous_origin*/
	MasterTimeout: time;
	/**ambiguous_origin*/
	H: string[];
	/**ambiguous_origin*/
	Help: boolean;
	/**ambiguous_origin*/
	V: boolean;
	/**ambiguous_origin*/
	Source: string;
	/**ambiguous_origin*/
	FilterPath: string;
}
/**namespace:Cat.CatThreadPool */
interface cat_thread_pool_request extends request {
	/**ambiguous_origin*/
	Local: boolean;
	/**ambiguous_origin*/
	MasterTimeout: time;
	/**ambiguous_origin*/
	H: string[];
	/**ambiguous_origin*/
	Help: boolean;
	/**ambiguous_origin*/
	V: boolean;
	/**ambiguous_origin*/
	FullId: boolean;
	/**ambiguous_origin*/
	Source: string;
	/**ambiguous_origin*/
	FilterPath: string;
}
/**namespace:Cluster.ClusterHealth */
interface cluster_health_request extends request {
	/**ambiguous_origin*/
	Level: Level;
	/**ambiguous_origin*/
	Local: boolean;
	/**ambiguous_origin*/
	MasterTimeout: time;
	/**ambiguous_origin*/
	Timeout: time;
	/**ambiguous_origin*/
	WaitForActiveShards: long;
	/**ambiguous_origin*/
	WaitForNodes: string;
	/**ambiguous_origin*/
	WaitForRelocatingShards: long;
	/**ambiguous_origin*/
	WaitForStatus: WaitForStatus;
	/**ambiguous_origin*/
	Source: string;
	/**ambiguous_origin*/
	FilterPath: string;
}
/**namespace:Cluster.ClusterHealth */
interface cluster_health_response extends response {
	cluster_name: string;
	status: string;
	timed_out: boolean;
	number_of_nodes: integer;
	number_of_data_nodes: integer;
	active_primary_shards: integer;
	active_shards: integer;
	relocating_shards: integer;
	initializing_shards: integer;
	unassigned_shards: integer;
	number_of_pending_tasks: integer;
	/**custom_serialization */
	indices: map<string, index_health_stats>[];
}
/**namespace:Cluster.ClusterHealth */
interface index_health_stats {
	status: string;
	number_of_shards: integer;
	number_of_replicas: integer;
	active_primary_shards: integer;
	active_shards: integer;
	relocating_shards: integer;
	initializing_shards: integer;
	unassigned_shards: integer;
	/**custom_serialization */
	shards: map<string, shard_health_stats>[];
}
/**namespace:Cluster.ClusterHealth */
interface shard_health_stats {
	status: string;
	primary_active: boolean;
	active_shards: integer;
	relocating_shards: integer;
	initializing_shards: integer;
	unassigned_shards: integer;
}
/**namespace:Cluster.ClusterPendingTasks */
interface cluster_pending_tasks_request extends request {
	/**ambiguous_origin*/
	Local: boolean;
	/**ambiguous_origin*/
	MasterTimeout: time;
	/**ambiguous_origin*/
	Source: string;
	/**ambiguous_origin*/
	FilterPath: string;
}
/**namespace:Cluster.ClusterPendingTasks */
interface cluster_pending_tasks_response extends response {
	tasks: pending_task[];
}
/**namespace:Cluster.ClusterPendingTasks */
interface pending_task {
	insert_order: integer;
	priority: string;
	source: string;
	time_in_queue_millis: integer;
	time_in_queue: string;
}
/**namespace:Cluster.ClusterReroute */
/**custom_serialization*/
interface cluster_reroute_request extends request {
	commands: cluster_reroute_command[];
	/**ambiguous_origin*/
	DryRun: boolean;
	/**ambiguous_origin*/
	Explain: boolean;
	/**ambiguous_origin*/
	Metric: string[];
	/**ambiguous_origin*/
	MasterTimeout: time;
	/**ambiguous_origin*/
	Timeout: time;
	/**ambiguous_origin*/
	Source: string;
	/**ambiguous_origin*/
	FilterPath: string;
}
/**namespace:Cluster.ClusterReroute */
interface cluster_reroute_response extends response {
	Version: integer;
	state: cluster_reroute_state;
	explanations: cluster_reroute_explanation[];
}
/**namespace:Cluster.ClusterReroute */
interface cluster_reroute_state {
	version: integer;
	master_node: string;
	blocks: block_state;
	/**custom_serialization */
	nodes: map<string, node_state>[];
	routing_table: routing_table_state;
	routing_nodes: routing_nodes_state;
}
/**namespace:Cluster.ClusterState */
interface block_state {
	read_only: boolean;
}
/**namespace:Cluster.ClusterState */
interface node_state {
	name: string;
	transport_address: string;
	/**custom_serialization */
	attributes: map<string, string>[];
}
/**namespace:Cluster.ClusterState */
interface routing_table_state {
	/**custom_serialization */
	indices: map<string, index_routing_table>[];
}
/**namespace:Cluster.ClusterState */
interface index_routing_table {
	/**custom_serialization */
	shards: map<string, routing_shard[]>[];
}
/**namespace:Cluster.ClusterState */
interface routing_shard {
	allocation_id: allocation_id;
	state: string;
	primary: boolean;
	node: string;
	relocating_node: string;
	shard: integer;
	version: long;
	index: string;
}
/**namespace:Cluster.ClusterState */
interface allocation_id {
	id: string;
}
/**namespace:Cluster.ClusterState */
interface routing_nodes_state {
	unassigned: routing_shard[];
	nodes: map<string, routing_shard[]>[];
}
/**namespace:Cluster.ClusterReroute */
interface cluster_reroute_explanation {
	command: string;
	parameters: cluster_reroute_parameters;
	decisions: cluster_reroute_decision[];
}
/**namespace:Cluster.ClusterReroute */
interface cluster_reroute_parameters {
	index: string;
	shard: integer;
	from_node: string;
	to_node: string;
	node: string;
	allow_primary: boolean;
}
/**namespace:Cluster.ClusterReroute */
interface cluster_reroute_decision {
	decider: string;
	decision: string;
	explanation: string;
}
/**namespace:Cluster.ClusterSettings.ClusterGetSettings */
interface cluster_get_settings_request extends request {
	/**ambiguous_origin*/
	FlatSettings: boolean;
	/**ambiguous_origin*/
	MasterTimeout: time;
	/**ambiguous_origin*/
	Timeout: time;
	/**ambiguous_origin*/
	Source: string;
	/**ambiguous_origin*/
	FilterPath: string;
}
/**namespace:Cluster.ClusterSettings.ClusterGetSettings */
interface cluster_get_settings_response extends response {
	persistent: map<string, any>[];
	transient: map<string, any>[];
}
/**namespace:Cluster.ClusterSettings.ClusterPutSettings */
interface cluster_put_settings_request extends request {
	persistent: map<string, any>[];
	transient: map<string, any>[];
	/**ambiguous_origin*/
	FlatSettings: boolean;
	/**ambiguous_origin*/
	MasterTimeout: time;
	/**ambiguous_origin*/
	Timeout: time;
	/**ambiguous_origin*/
	Source: string;
	/**ambiguous_origin*/
	FilterPath: string;
}
/**namespace:Cluster.ClusterSettings.ClusterPutSettings */
interface cluster_put_settings_response extends response {
	acknowledged: boolean;
	persistent: map<string, any>[];
	transient: map<string, any>[];
}
/**namespace:Cluster.ClusterState */
interface cluster_state_request extends request {
	/**ambiguous_origin*/
	Local: boolean;
	/**ambiguous_origin*/
	MasterTimeout: time;
	/**ambiguous_origin*/
	FlatSettings: boolean;
	/**ambiguous_origin*/
	IgnoreUnavailable: boolean;
	/**ambiguous_origin*/
	AllowNoIndices: boolean;
	/**ambiguous_origin*/
	ExpandWildcards: ExpandWildcards;
	/**ambiguous_origin*/
	Source: string;
	/**ambiguous_origin*/
	FilterPath: string;
}
/**namespace:Cluster.ClusterState */
interface cluster_state_response extends response {
	cluster_name: string;
	master_node: string;
	state_uuid: string;
	version: long;
	/**custom_serialization */
	nodes: map<string, node_state>[];
	metadata: metadata_state;
	routing_table: routing_table_state;
	routing_nodes: routing_nodes_state;
	blocks: block_state;
}
/**namespace:Cluster.ClusterState */
interface metadata_state {
	/**custom_serialization */
	templates: map<string, template_mapping>[];
	cluster_uuid: string;
	/**custom_serialization */
	indices: map<string, metadata_index_state>[];
}
/**namespace:Indices.IndexSettings.IndexTemplates.GetIndexTemplate */
interface template_mapping {
	template: string;
	order: integer;
	settings: map<string, any>[];
	mappings: map<type_name, type_mapping>[];
	warmers: map<type_name, warmer>[];
	aliases: map<index_name, alias>[];
}
/**namespace:CommonAbstractions.Infer.TypeName */
interface type_name {
	Name: string;
}
/**namespace:CommonAbstractions.Infer.Field */
interface field {
	Name: string;
	Boost: double;
}
/**namespace:CommonAbstractions.Infer.PropertyName */
interface property_name {
	Name: string;
}
/**namespace:CommonAbstractions.Infer.IndexName */
interface index_name {
	Name: string;
}
/**namespace:Aggregations.Bucket.Histogram */
/**custom_serialization*/
interface histogram_order {
	Key: string;
	Order: SortOrder;
	CountAscending: histogram_order;
	CountDescending: histogram_order;
	KeyAscending: histogram_order;
	KeyDescending: histogram_order;
}
/**namespace:Aggregations.Bucket.Histogram */
interface extended_bounds<t> {
	min: t;
	max: t;
}
/**namespace:CommonOptions.DateMath */
/**custom_serialization*/
interface date_math {
	Now: date_math_expression;
}
/**namespace:CommonOptions.DateMath */
/**custom_serialization*/
interface date_math_expression extends date_math {
}
/**namespace:CommonOptions.MinimumShouldMatch */
/**custom_serialization*/
interface minimum_should_match extends union<integer, string> {
}
/**namespace:CommonAbstractions.Infer.Types */
/**custom_serialization*/
interface types extends union<all_types_marker, many_types> {
	All: all_types_marker;
	AllTypes: all_types_marker;
}
/**namespace:CommonAbstractions.Infer.Id */
/**custom_serialization*/
interface id {
}
/**namespace:QueryDsl.Specialized.MoreLikeThis.Like */
/**custom_serialization*/
interface like extends union<string, like_document> {
}
/**namespace:CommonAbstractions.Infer.Indices */
/**custom_serialization*/
interface indices extends union<all_indices_marker, many_indices> {
	All: indices;
	AllIndices: indices;
}
/**namespace:QueryDsl.Geo */
interface geo_location {
	lat: double;
	lon: double;
}
/**namespace:CommonOptions.Geo */
/**custom_serialization*/
interface distance {
	Precision: double;
	Unit: DistanceUnit;
}
/**namespace:Aggregations.Bucket.Terms */
/**custom_serialization*/
interface terms_order {
	Key: string;
	Order: SortOrder;
	CountAscending: terms_order;
	CountDescending: terms_order;
	TermAscending: terms_order;
	TermDescending: terms_order;
}
/**namespace:Aggregations.Bucket.Terms */
/**custom_serialization*/
interface terms_include_exclude {
	pattern: string;
	flags: string;
	Values: string[];
}
/**namespace:Cluster.ClusterState */
interface metadata_index_state {
	state: string;
	/**custom_serialization */
	settings: string[];
	mappings: map<type_name, type_mapping>[];
	aliases: string[];
}
/**namespace:Cluster.ClusterStats */
interface cluster_stats_request extends request {
	/**ambiguous_origin*/
	FlatSettings: boolean;
	/**ambiguous_origin*/
	Human: boolean;
	/**ambiguous_origin*/
	Timeout: time;
	/**ambiguous_origin*/
	Source: string;
	/**ambiguous_origin*/
	FilterPath: string;
}
/**namespace:Cluster.ClusterStats */
interface cluster_stats_response extends response {
	cluster_name: string;
	timestamp: long;
	status: ClusterStatus;
	indices: cluster_indices_stats;
	nodes: cluster_nodes_stats;
}
/**namespace:Cluster.ClusterStats */
interface cluster_indices_stats {
	completion: completion_stats;
	count: long;
	docs: doc_stats;
	fielddata: fielddata_stats;
	percolate: percolate_stats;
	query_cache: query_cache_stats;
	segments: segments_stats;
	shards: cluster_indices_shards_stats;
	store: store_stats;
}
/**namespace:CommonOptions.Stats */
interface completion_stats {
	size: string;
	size_in_bytes: long;
}
/**namespace:CommonOptions.Stats */
interface doc_stats {
	count: long;
	deleted: long;
}
/**namespace:CommonOptions.Stats */
interface fielddata_stats {
	evictions: long;
	memory_size: string;
	memory_size_in_bytes: long;
}
/**namespace:CommonOptions.Stats */
interface percolate_stats {
	total: long;
	time: string;
	time_in_millis: long;
	current: long;
	memory_size: string;
	memory_size_in_bytes: long;
	queries: long;
}
/**namespace:CommonOptions.Stats */
interface query_cache_stats {
	memory_size: string;
	memory_size_in_bytes: long;
	total_count: long;
	hit_count: long;
	miss_count: long;
	cache_size: long;
	cache_count: long;
	evictions: long;
}
/**namespace:CommonOptions.Stats */
interface segments_stats {
	count: long;
	doc_values_memory: string;
	doc_values_memory_in_bytes: long;
	fixed_bit_set_memory: string;
	fixed_bit_set_memory_in_bytes: long;
	index_writer_max_memory: string;
	index_writer_max_memory_in_bytes: long;
	index_writer_memory: string;
	index_writer_memory_in_bytes: long;
	memory: string;
	memory_in_bytes: long;
	norms_memory: string;
	norms_memory_in_bytes: long;
	stored_fields_memory: string;
	stored_fields_memory_in_bytes: long;
	term_vectors_memory: string;
	term_vectors_memory_in_bytes: long;
	terms_memory: string;
	terms_memory_in_bytes: long;
	version_map_memory: string;
	version_map_memory_in_bytes: long;
}
/**namespace:Cluster.ClusterStats */
interface cluster_indices_shards_stats {
	total: double;
	primaries: double;
	replication: double;
	index: cluster_indices_shards_index_stats;
}
/**namespace:Cluster.ClusterStats */
interface cluster_indices_shards_index_stats {
	shards: cluster_shard_metrics;
	primaries: cluster_shard_metrics;
	replication: cluster_shard_metrics;
}
/**namespace:Cluster.ClusterStats */
interface cluster_shard_metrics {
	min: double;
	max: double;
	avg: double;
}
/**namespace:CommonOptions.Stats */
interface store_stats {
	size: string;
	size_in_bytes: double;
	throttle_time: string;
	throttle_time_in_millis: long;
}
/**namespace:Cluster.ClusterStats */
interface cluster_nodes_stats {
	count: cluster_node_count;
	versions: string[];
	os: cluster_operating_system_stats;
	process: cluster_process;
	jvm: cluster_jvm;
	fs: cluster_file_system;
	plugins: plugin_stats[];
}
/**namespace:Cluster.ClusterStats */
interface cluster_node_count {
	total: integer;
	master_only: integer;
	data_only: integer;
	master_data: integer;
	client: integer;
}
/**namespace:Cluster.ClusterStats */
interface cluster_operating_system_stats {
	available_processors: integer;
	mem: cluster_operating_system_memory;
	names: cluster_operating_system_name[];
}
/**namespace:Cluster.ClusterStats */
interface cluster_operating_system_memory {
	total: string;
	total_in_bytes: long;
}
/**namespace:Cluster.ClusterStats */
interface cluster_operating_system_name {
	count: integer;
	name: string;
}
/**namespace:Cluster.ClusterStats */
interface cluster_process {
	cpu: cluster_process_cpu;
	open_file_descriptors: cluster_process_open_file_descriptors;
}
/**namespace:Cluster.ClusterStats */
interface cluster_process_cpu {
	percent: integer;
}
/**namespace:Cluster.ClusterStats */
interface cluster_process_open_file_descriptors {
	min: long;
	max: long;
	avg: long;
}
/**namespace:Cluster.ClusterStats */
interface cluster_jvm {
	max_uptime: string;
	max_uptime_in_millis: long;
	versions: cluster_jvm_version[];
	mem: cluster_jvm_memory;
	threads: long;
}
/**namespace:Cluster.ClusterStats */
interface cluster_jvm_version {
	version: string;
	vm_name: string;
	vm_version: string;
	vm_vendor: string;
	count: integer;
}
/**namespace:Cluster.ClusterStats */
interface cluster_jvm_memory {
	heap_used: string;
	heap_used_in_bytes: long;
	heap_max: string;
	heap_max_in_bytes: long;
}
/**namespace:Cluster.ClusterStats */
interface cluster_file_system {
	total: string;
	total_in_bytes: long;
	free: string;
	free_in_bytes: long;
	available: string;
	available_in_bytes: long;
}
/**namespace:CommonOptions.Stats */
interface plugin_stats {
	name: string;
	version: string;
	description: string;
	classname: string;
	jvm: boolean;
	isolated: boolean;
	site: boolean;
}
/**namespace:Cluster.NodesHotThreads */
interface nodes_hot_threads_request extends request {
	/**ambiguous_origin*/
	Interval: time;
	/**ambiguous_origin*/
	Snapshots: long;
	/**ambiguous_origin*/
	Threads: long;
	/**ambiguous_origin*/
	IgnoreIdleThreads: boolean;
	/**ambiguous_origin*/
	ThreadType: ThreadType;
	/**ambiguous_origin*/
	Timeout: time;
	/**ambiguous_origin*/
	Source: string;
	/**ambiguous_origin*/
	FilterPath: string;
}
/**namespace:Cluster.NodesHotThreads */
interface nodes_hot_threads_response extends response {
	HotThreads: hot_thread_information[];
}
/**namespace:Cluster.NodesHotThreads */
interface hot_thread_information {
	NodeName: string;
	NodeId: string;
	Threads: string[];
	Hosts: string[];
}
/**namespace:Cluster.NodesInfo */
interface nodes_info_request extends request {
	/**ambiguous_origin*/
	FlatSettings: boolean;
	/**ambiguous_origin*/
	Human: boolean;
	/**ambiguous_origin*/
	Timeout: time;
	/**ambiguous_origin*/
	Source: string;
	/**ambiguous_origin*/
	FilterPath: string;
}
/**namespace:Cluster.NodesInfo */
interface nodes_info_response extends response {
	cluster_name: string;
	/**custom_serialization */
	nodes: map<string, node_info>[];
}
/**namespace:Cluster.NodesInfo */
interface node_info {
	name: string;
	transport_address: string;
	host: string;
	ip: string;
	version: string;
	build: string;
	http_address: string;
	/**custom_serialization */
	settings: string[];
	os: node_operating_system_info;
	process: node_process_info;
	jvm: node_jvm_info;
	/**custom_serialization */
	thread_pool: map<string, node_thread_pool_info>[];
	network: node_info_network;
	transport: node_info_transport;
	http: node_info_http;
	plugins: plugin_stats[];
}
/**namespace:Cluster.NodesInfo */
interface node_operating_system_info {
	name: string;
	arch: string;
	version: string;
	refresh_interval_in_millis: integer;
	available_processors: integer;
	cpu: node_info_o_s_c_p_u;
	mem: node_info_memory;
	swap: node_info_memory;
}
/**namespace:Cluster.NodesInfo */
interface node_info_o_s_c_p_u {
	vendor: string;
	model: string;
	mhz: integer;
	total_cores: integer;
	total_sockets: integer;
	cores_per_socket: integer;
	cache_size: string;
	cache_size_in_bytes: integer;
}
/**namespace:Cluster.NodesInfo */
interface node_info_memory {
	total: string;
	total_in_bytes: long;
}
/**namespace:Cluster.NodesInfo */
interface node_process_info {
	refresh_interval: string;
	refresh_interval_in_millis: long;
	id: long;
}
/**namespace:Cluster.NodesInfo */
interface node_jvm_info {
	pid: integer;
	version: string;
	vm_name: string;
	vm_version: string;
	vm_vendor: string;
	memory_pools: string[];
	gc_collectors: string[];
	start_time_in_millis: long;
	mem: node_info_j_v_m_memory;
}
/**namespace:Cluster.NodesInfo */
interface node_info_j_v_m_memory {
	heap_init: string;
	heap_init_in_bytes: long;
	heap_max: string;
	heap_max_in_bytes: long;
	non_heap_init: string;
	non_heap_init_in_bytes: long;
	non_heap_max: string;
	non_heap_max_in_bytes: long;
	direct_max: string;
	direct_max_in_bytes: long;
}
/**namespace:Cluster.NodesInfo */
interface node_thread_pool_info {
	type: string;
	min: integer;
	max: integer;
	queue_size: integer;
	keep_alive: string;
}
/**namespace:Cluster.NodesInfo */
interface node_info_network {
	refresh_interval: integer;
	primary_interface: node_info_network_interface;
}
/**namespace:Cluster.NodesInfo */
interface node_info_network_interface {
	address: string;
	name: string;
	mac_address: string;
}
/**namespace:Cluster.NodesInfo */
interface node_info_transport {
	bound_address: string[];
	publish_address: string;
}
/**namespace:Cluster.NodesInfo */
interface node_info_http {
	bound_address: string[];
	publish_address: string;
	max_content_length: string;
	max_content_length_in_bytes: long;
}
/**namespace:Cluster.NodesStats */
interface nodes_stats_request extends request {
	/**ambiguous_origin*/
	CompletionFields: field[];
	/**ambiguous_origin*/
	FielddataFields: field[];
	/**ambiguous_origin*/
	Fields: field[];
	/**ambiguous_origin*/
	Groups: boolean;
	/**ambiguous_origin*/
	Human: boolean;
	/**ambiguous_origin*/
	Level: Level;
	/**ambiguous_origin*/
	Types: string[];
	/**ambiguous_origin*/
	Timeout: time;
	/**ambiguous_origin*/
	Source: string;
	/**ambiguous_origin*/
	FilterPath: string;
}
/**namespace:Cluster.NodesStats */
interface nodes_stats_response extends response {
	cluster_name: string;
	/**custom_serialization */
	nodes: map<string, node_stats>[];
}
/**namespace:Cluster.NodesStats */
interface node_stats {
	timestamp: long;
	name: string;
	transport_address: string;
	host: string;
	ip: string[];
	indices: index_stats;
	os: operating_system_stats;
	process: process_stats;
	script: script_stats;
	jvm: node_jvm_stats;
	/**custom_serialization */
	thread_pool: map<string, thread_count_stats>[];
	/**custom_serialization */
	breakers: map<string, breaker_stats>[];
	fs: file_system_stats;
	transport: transport_stats;
	http: http_stats;
}
/**namespace:Indices.Monitoring.IndicesStats */
interface index_stats {
	docs: doc_stats;
	store: store_stats;
	indexing: indexing_stats;
	get: get_stats;
	search: search_stats;
	merges: merges_stats;
	refresh: refresh_stats;
	flush: flush_stats;
	warmer: warmer_stats;
	query_cache: query_cache_stats;
	fielddata: fielddata_stats;
	percolate: percolate_stats;
	completion: completion_stats;
	segments: segments_stats;
	translog: translog_stats;
	suggest: suggest_stats;
	request_cache: request_cache_stats;
	recovery: recovery_stats;
}
/**namespace:CommonOptions.Stats */
interface indexing_stats {
	delete_current: long;
	delete_time: string;
	delete_time_in_millis: long;
	delete_total: long;
	index_current: long;
	index_time: string;
	index_time_in_millis: long;
	index_total: long;
	is_throttled: boolean;
	noop_update_total: long;
	throttle_time: string;
	throttle_time_in_millis: long;
	/**custom_serialization */
	types: map<string, indexing_stats>[];
}
/**namespace:CommonOptions.Stats */
interface get_stats {
	current: long;
	exists_time: string;
	exists_time_in_millis: long;
	exists_total: long;
	missing_time: string;
	missing_time_in_millis: long;
	missing_total: long;
	time: string;
	time_in_millis: long;
	total: long;
}
/**namespace:CommonOptions.Stats */
interface search_stats {
	fetch_current: long;
	fetch_time: string;
	fetch_time_in_millis: long;
	fetch_total: long;
	query_current: long;
	query_time: string;
	query_time_in_millis: long;
	query_total: long;
	scroll_current: long;
	scroll_time: string;
	scroll_time_in_millis: long;
	scroll_total: long;
}
/**namespace:CommonOptions.Stats */
interface merges_stats {
	current: long;
	current_docs: long;
	current_size: string;
	current_size_in_bytes: long;
	total: long;
	total_auto_throttle: string;
	total_auto_throttle_in_bytes: long;
	total_docs: long;
	total_size: string;
	total_size_in_bytes: string;
	total_stopped_time: string;
	total__stopped_time_in_millis: long;
	total_throttled_time: string;
	total_throttled_time_in_millis: long;
	total_time: string;
	total_time_in_millis: long;
}
/**namespace:CommonOptions.Stats */
interface refresh_stats {
	total: long;
	total_time: string;
	total_time_in_millis: long;
}
/**namespace:CommonOptions.Stats */
interface flush_stats {
	total: long;
	total_time: string;
	total_time_in_millis: long;
}
/**namespace:CommonOptions.Stats */
interface warmer_stats {
	current: long;
	total: long;
	total_time: string;
	total_time_in_millis: long;
}
/**namespace:CommonOptions.Stats */
interface translog_stats {
	operations: long;
	size: string;
	size_in_bytes: long;
}
/**namespace:CommonOptions.Stats */
interface suggest_stats {
	current: long;
	total: long;
	total_time: string;
	total_time_in_millis: long;
}
/**namespace:CommonOptions.Stats */
interface request_cache_stats {
	evictions: long;
	hit_count: long;
	memory_size: string;
	memory_size_in_bytes: long;
	miss_count: long;
}
/**namespace:CommonOptions.Stats */
interface recovery_stats {
	current_as_source: long;
	current_as_target: long;
	throttle_time: string;
	throttle_time_in_millis: long;
}
/**namespace:Cluster.NodesStats */
interface operating_system_stats {
	timestamp: long;
	load_average: float;
	mem: extended_memory_stats;
	swap: os_memory_stats;
}
/**namespace:Cluster.NodesStats */
interface process_stats {
	timestamp: long;
	open_file_descriptors: integer;
	cpu: c_p_u_stats;
	mem: process_memory_stats;
}
/**namespace:Cluster.NodesStats */
interface script_stats {
	cache_evictions: long;
	compilations: long;
}
/**namespace:Cluster.NodesStats */
interface node_jvm_stats {
	timestamp: long;
	uptime: string;
	uptime_in_millis: long;
	mem: memory_stats;
	threads: thread_stats;
	gc: garbage_collection_stats;
	/**custom_serialization */
	buffer_pools: map<string, node_buffer_pool>[];
	classes: jvm_classes_stats;
}
/**namespace:Cluster.NodesStats */
interface thread_count_stats {
	threads: long;
	queue: long;
	active: long;
	rejected: long;
	largest: long;
	completed: long;
}
/**namespace:Cluster.NodesStats */
interface breaker_stats {
	estimated_size: string;
	estimated_size_in_bytes: long;
	limit_size: string;
	limit_size_in_bytes: long;
	overhead: float;
	tripped: float;
}
/**namespace:Cluster.NodesStats */
interface file_system_stats {
	timestamp: long;
	total: total_file_system_stats;
	data: data_path_stats[];
}
/**namespace:Cluster.NodesStats */
interface transport_stats {
	server_open: integer;
	rx_count: long;
	rx_size: string;
	rx_size_in_bytes: long;
	tx_count: long;
	tx_size: string;
	tx_size_in_bytes: long;
}
/**namespace:Cluster.NodesStats */
interface http_stats {
	current_open: integer;
	total_opened: long;
}
/**namespace:Cluster.Ping */
interface ping_request extends request {
	/**ambiguous_origin*/
	Source: string;
	/**ambiguous_origin*/
	FilterPath: string;
}
/**namespace:Cluster.Ping */
interface ping_response extends response {
}
/**namespace:Cluster.RootNodeInfo */
interface root_node_info_request extends request {
	/**ambiguous_origin*/
	Source: string;
	/**ambiguous_origin*/
	FilterPath: string;
}
/**namespace:Cluster.RootNodeInfo */
interface root_node_info_response extends response {
	name: string;
	tagline: string;
	version: elasticsearch_version_info;
}
/**namespace:CommonAbstractions.Response */
interface elasticsearch_version_info {
	Number: string;
	snapshot_build: boolean;
	lucene_version: string;
}
/**namespace:CommonAbstractions.Response */
interface acknowledged_response_base extends response {
	acknowledged: boolean;
}
/**namespace:CommonAbstractions.Response */
interface dictionary_response_base<t_key, t_value> extends response {
}
/**namespace:CommonAbstractions.Response */
interface indices_response_base extends response {
	acknowledged: boolean;
	_shards: shards_meta_data;
}
/**namespace:CommonOptions.Hit */
interface shards_meta_data {
	Total: integer;
	Successful: integer;
	Failed: integer;
	failures: shard_failure[];
}
/**namespace:CommonOptions.Failures */
interface shard_failure {
	index: string;
	shard: integer;
	node: string;
	reason: shard_failure_reason;
}
/**namespace:CommonOptions.Failures */
interface shard_failure_reason {
	Type: string;
	Reason: string;
	caused_by: caused_by;
}
/**namespace:CommonOptions.Failures */
interface caused_by {
	Type: string;
	Reason: string;
}
/**namespace:CommonAbstractions.Response */
interface shards_operation_response_base extends response {
	_shards: shards_meta_data;
}
/**namespace:Document.Multiple.Bulk */
/**custom_serialization*/
interface bulk_request extends request {
	Operations: bulk_operation[];
	/**ambiguous_origin*/
	Consistency: Consistency;
	/**ambiguous_origin*/
	Refresh: boolean;
	/**ambiguous_origin*/
	Routing: string;
	/**ambiguous_origin*/
	Timeout: time;
	/**ambiguous_origin*/
	Fields: field[];
	/**ambiguous_origin*/
	Source: string;
	/**ambiguous_origin*/
	FilterPath: string;
}
/**namespace:Document.Multiple.Bulk */
interface bulk_response extends response {
	IsValid: boolean;
	took: integer;
	errors: boolean;
	items: bulk_response_item_base[];
	ItemsWithErrors: bulk_response_item_base[];
}
/**namespace:Document.Multiple.Bulk.BulkResponseItem */
/**custom_serialization*/
interface bulk_response_item_base {
	Operation: string;
	_index: string;
	_type: string;
	_id: string;
	_version: long;
	status: integer;
	error: bulk_error;
	_shards: shards_meta_data;
	IsValid: boolean;
}
/**namespace:CommonOptions.Failures */
interface bulk_error {
	index: string;
	shard: integer;
	type: string;
	reason: string;
}
/**namespace:Document.Multiple.DeleteByQuery */
interface delete_by_query_request extends request {
	query: query_container;
	/**ambiguous_origin*/
	Analyzer: string;
	/**ambiguous_origin*/
	DefaultOperator: DefaultOperator;
	/**ambiguous_origin*/
	Df: string;
	/**ambiguous_origin*/
	IgnoreUnavailable: boolean;
	/**ambiguous_origin*/
	AllowNoIndices: boolean;
	/**ambiguous_origin*/
	ExpandWildcards: ExpandWildcards;
	/**ambiguous_origin*/
	QueryOnQueryString: string;
	/**ambiguous_origin*/
	Routing: string;
	/**ambiguous_origin*/
	Source: string;
	/**ambiguous_origin*/
	Timeout: time;
	/**ambiguous_origin*/
	FilterPath: string;
}
/**namespace:Document.Multiple.DeleteByQuery */
interface delete_by_query_response extends response {
	/**custom_serialization */
	_indices: map<string, delete_by_query_indices_result>[];
	took: long;
	timed_out: boolean;
}
/**namespace:Document.Multiple.DeleteByQuery */
interface delete_by_query_indices_result {
	found: long;
	deleted: long;
	missing: long;
	failed: long;
}
/**namespace:Document.Multiple.MultiGet.Request */
/**custom_serialization*/
interface multi_get_request extends request {
	docs: multi_get_operation[];
	/**ambiguous_origin*/
	Fields: field[];
	/**ambiguous_origin*/
	Preference: string;
	/**ambiguous_origin*/
	Realtime: boolean;
	/**ambiguous_origin*/
	Refresh: boolean;
	/**ambiguous_origin*/
	SourceEnabled: string[];
	/**ambiguous_origin*/
	SourceExclude: field[];
	/**ambiguous_origin*/
	SourceInclude: field[];
	/**ambiguous_origin*/
	Source: string;
	/**ambiguous_origin*/
	FilterPath: string;
}
/**namespace:Document.Multiple.MultiGet.Response */
interface multi_get_response extends response {
	Documents: multi_get_hit<any>[];
}
/**namespace:Document.Multiple.MultiTermVectors */
interface multi_term_vectors_request extends request {
	docs: multi_term_vector_operation[];
	/**ambiguous_origin*/
	TermStatistics: boolean;
	/**ambiguous_origin*/
	FieldStatistics: boolean;
	/**ambiguous_origin*/
	Fields: field[];
	/**ambiguous_origin*/
	Offsets: boolean;
	/**ambiguous_origin*/
	Positions: boolean;
	/**ambiguous_origin*/
	Payloads: boolean;
	/**ambiguous_origin*/
	Preference: string;
	/**ambiguous_origin*/
	Routing: string;
	/**ambiguous_origin*/
	Parent: string;
	/**ambiguous_origin*/
	Realtime: boolean;
	/**ambiguous_origin*/
	Version: long;
	/**ambiguous_origin*/
	VersionType: VersionType;
	/**ambiguous_origin*/
	Source: string;
	/**ambiguous_origin*/
	FilterPath: string;
}
/**namespace:Document.Multiple.MultiTermVectors */
interface multi_term_vectors_response extends response {
	docs: term_vectors_response[];
}
/**namespace:Document.Single.TermVectors */
interface term_vectors_response extends response {
	found: boolean;
	term_vectors: map<string, term_vector>[];
}
/**namespace:Document.Single.TermVectors */
interface term_vector {
	field_statistics: field_statistics;
	terms: map<string, term_vector_term>[];
}
/**namespace:Document.Single.TermVectors */
interface field_statistics {
	doc_count: integer;
	sum_doc_freq: integer;
	sum_ttf: integer;
}
/**namespace:Document.Single.TermVectors */
interface term_vector_term {
	doc_freq: integer;
	term_freq: integer;
	tokens: token[];
	ttf: integer;
}
/**namespace:Document.Single.TermVectors */
interface token {
	end_offset: integer;
	payload: string;
	position: integer;
	start_offset: integer;
}
/**namespace:Document.Single.Delete */
interface delete_request extends request {
	/**ambiguous_origin*/
	Consistency: Consistency;
	/**ambiguous_origin*/
	Parent: string;
	/**ambiguous_origin*/
	Refresh: boolean;
	/**ambiguous_origin*/
	Routing: string;
	/**ambiguous_origin*/
	Timeout: time;
	/**ambiguous_origin*/
	Version: long;
	/**ambiguous_origin*/
	VersionType: VersionType;
	/**ambiguous_origin*/
	Source: string;
	/**ambiguous_origin*/
	FilterPath: string;
}
/**namespace:Document.Single.Delete */
interface delete_response extends response {
	_index: string;
	_type: string;
	_id: string;
	_version: string;
	found: boolean;
}
/**namespace:Document.Single.Exists */
interface document_exists_request extends request {
	/**ambiguous_origin*/
	Parent: string;
	/**ambiguous_origin*/
	Preference: string;
	/**ambiguous_origin*/
	Realtime: boolean;
	/**ambiguous_origin*/
	Refresh: boolean;
	/**ambiguous_origin*/
	Routing: string;
	/**ambiguous_origin*/
	Source: string;
	/**ambiguous_origin*/
	FilterPath: string;
}
/**namespace:Document.Single.Get */
interface get_request extends request {
	/**ambiguous_origin*/
	Fields: field[];
	/**ambiguous_origin*/
	Parent: string;
	/**ambiguous_origin*/
	Preference: string;
	/**ambiguous_origin*/
	Realtime: boolean;
	/**ambiguous_origin*/
	Refresh: boolean;
	/**ambiguous_origin*/
	Routing: string;
	/**ambiguous_origin*/
	SourceEnabled: string[];
	/**ambiguous_origin*/
	SourceExclude: field[];
	/**ambiguous_origin*/
	SourceInclude: field[];
	/**ambiguous_origin*/
	Version: long;
	/**ambiguous_origin*/
	VersionType: VersionType;
	/**ambiguous_origin*/
	Source: string;
	/**ambiguous_origin*/
	FilterPath: string;
}
/**namespace:Document.Single.Get */
interface get_response<t> extends response {
	_index: string;
	_type: string;
	_id: string;
	_version: long;
	found: boolean;
	_source: t;
	fields: map<string, any>[];
}
/**namespace:Document.Single.Index */
interface index_request<t_document> extends request {
	Document: t_document;
	/**ambiguous_origin*/
	Consistency: Consistency;
	/**ambiguous_origin*/
	OpType: OpType;
	/**ambiguous_origin*/
	Parent: string;
	/**ambiguous_origin*/
	Refresh: boolean;
	/**ambiguous_origin*/
	Routing: string;
	/**ambiguous_origin*/
	Timeout: time;
	/**ambiguous_origin*/
	Timestamp: time;
	/**ambiguous_origin*/
	Ttl: time;
	/**ambiguous_origin*/
	Version: long;
	/**ambiguous_origin*/
	VersionType: VersionType;
	/**ambiguous_origin*/
	Source: string;
	/**ambiguous_origin*/
	FilterPath: string;
}
/**namespace:Document.Single.Index */
interface index_response extends response {
	_index: string;
	_type: string;
	_id: string;
	_version: long;
	created: boolean;
}
/**namespace:Document.Single.Source */
interface source_request extends request {
	/**ambiguous_origin*/
	Parent: string;
	/**ambiguous_origin*/
	Preference: string;
	/**ambiguous_origin*/
	Realtime: boolean;
	/**ambiguous_origin*/
	Refresh: boolean;
	/**ambiguous_origin*/
	Routing: string;
	/**ambiguous_origin*/
	SourceEnabled: string[];
	/**ambiguous_origin*/
	SourceExclude: field[];
	/**ambiguous_origin*/
	SourceInclude: field[];
	/**ambiguous_origin*/
	Version: long;
	/**ambiguous_origin*/
	VersionType: VersionType;
	/**ambiguous_origin*/
	Source: string;
	/**ambiguous_origin*/
	FilterPath: string;
}
/**namespace:Document.Single.TermVectors */
interface term_vectors_request<t_document> extends request {
	doc: t_document;
	per_field_analyzer: map<field, string>[];
	/**ambiguous_origin*/
	TermStatistics: boolean;
	/**ambiguous_origin*/
	FieldStatistics: boolean;
	/**ambiguous_origin*/
	Dfs: boolean;
	/**ambiguous_origin*/
	Fields: field[];
	/**ambiguous_origin*/
	Offsets: boolean;
	/**ambiguous_origin*/
	Positions: boolean;
	/**ambiguous_origin*/
	Payloads: boolean;
	/**ambiguous_origin*/
	Preference: string;
	/**ambiguous_origin*/
	Routing: string;
	/**ambiguous_origin*/
	Parent: string;
	/**ambiguous_origin*/
	Realtime: boolean;
	/**ambiguous_origin*/
	Version: long;
	/**ambiguous_origin*/
	VersionType: VersionType;
	/**ambiguous_origin*/
	Source: string;
	/**ambiguous_origin*/
	FilterPath: string;
}
/**namespace:Document.Single.Update */
interface update_request<t_document, t_partial_document> extends request {
	/**ambiguous_origin*/
	script: string;
	script_file: string;
	lang: string;
	/**custom_serialization */
	params: map<string, any>[];
	upsert: t_document;
	doc_as_upsert: boolean;
	doc: t_partial_document;
	detect_noop: boolean;
	Fields: field[];
	/**ambiguous_origin*/
	Consistency: Consistency;
	/**ambiguous_origin*/
	Lang: string;
	/**ambiguous_origin*/
	Parent: string;
	/**ambiguous_origin*/
	Refresh: boolean;
	/**ambiguous_origin*/
	RetryOnConflict: long;
	/**ambiguous_origin*/
	Routing: string;
	ScriptQueryString: string;
	/**ambiguous_origin*/
	script_id: string;
	/**ambiguous_origin*/
	ScriptedUpsert: boolean;
	/**ambiguous_origin*/
	Timeout: time;
	/**ambiguous_origin*/
	Timestamp: time;
	/**ambiguous_origin*/
	Ttl: time;
	/**ambiguous_origin*/
	Version: long;
	/**ambiguous_origin*/
	VersionType: VersionType;
	/**ambiguous_origin*/
	Source: string;
	/**ambiguous_origin*/
	FilterPath: string;
}
/**namespace:Document.Single.Update */
interface update_response<t> extends response {
	_shards: shards_meta_data;
	_index: string;
	_type: string;
	_id: string;
	_version: long;
	get: instant_get<t>;
}
/**namespace:Search.Explain */
interface instant_get<t> {
	found: boolean;
	_source: t;
	fields: map<string, any>[];
}
/**namespace:Indices.AliasManagement.Alias */
interface bulk_alias_request extends request {
	actions: alias_action[];
	/**ambiguous_origin*/
	Timeout: time;
	/**ambiguous_origin*/
	MasterTimeout: time;
	/**ambiguous_origin*/
	Source: string;
	/**ambiguous_origin*/
	FilterPath: string;
}
/**namespace:Indices.AliasManagement.Alias */
interface bulk_alias_response extends response {
}
/**namespace:Indices.AliasManagement.AliasExists */
interface alias_exists_request extends request {
	/**ambiguous_origin*/
	IgnoreUnavailable: boolean;
	/**ambiguous_origin*/
	AllowNoIndices: boolean;
	/**ambiguous_origin*/
	ExpandWildcards: ExpandWildcards;
	/**ambiguous_origin*/
	Local: boolean;
	/**ambiguous_origin*/
	Source: string;
	/**ambiguous_origin*/
	FilterPath: string;
}
/**namespace:Indices.AliasManagement.DeleteAlias */
interface delete_alias_request extends request {
	/**ambiguous_origin*/
	Timeout: time;
	/**ambiguous_origin*/
	MasterTimeout: time;
	/**ambiguous_origin*/
	Source: string;
	/**ambiguous_origin*/
	FilterPath: string;
}
/**namespace:Indices.AliasManagement.DeleteAlias */
interface delete_alias_response extends response {
}
/**namespace:Indices.AliasManagement.GetAlias */
interface get_alias_request extends request {
	Alias: string;
	/**ambiguous_origin*/
	IgnoreUnavailable: boolean;
	/**ambiguous_origin*/
	AllowNoIndices: boolean;
	/**ambiguous_origin*/
	ExpandWildcards: ExpandWildcards;
	/**ambiguous_origin*/
	Local: boolean;
	/**ambiguous_origin*/
	Source: string;
	/**ambiguous_origin*/
	FilterPath: string;
}
/**namespace:Indices.AliasManagement.GetAliases */
interface get_aliases_request extends request {
	Alias: string;
	/**ambiguous_origin*/
	Timeout: time;
	/**ambiguous_origin*/
	Local: boolean;
	/**ambiguous_origin*/
	Source: string;
	/**ambiguous_origin*/
	FilterPath: string;
}
/**namespace:Indices.AliasManagement.GetAliases */
interface get_aliases_response extends response {
	Indices: map<string, alias_definition[]>[];
}
/**namespace:Indices.AliasManagement */
interface alias_definition {
	Name: string;
	filter: query_container;
	routing: string;
	index_routing: string;
	search_routing: string;
}
/**namespace:Indices.AliasManagement.PutAlias */
interface put_alias_request extends request {
	routing: string;
	filter: query_container;
	/**ambiguous_origin*/
	Timeout: time;
	/**ambiguous_origin*/
	MasterTimeout: time;
	/**ambiguous_origin*/
	Source: string;
	/**ambiguous_origin*/
	FilterPath: string;
}
/**namespace:Indices.AliasManagement.PutAlias */
interface put_alias_response extends response {
}
/**namespace:Indices.Analyze */
interface analyze_request extends request {
	/**ambiguous_origin*/
	Analyzer: string;
	/**ambiguous_origin*/
	CharFilters: string[];
	/**ambiguous_origin*/
	Field: field;
	/**ambiguous_origin*/
	Filters: string[];
	/**ambiguous_origin*/
	PreferLocal: boolean;
	/**ambiguous_origin*/
	Text: string[];
	/**ambiguous_origin*/
	Tokenizer: string;
	/**ambiguous_origin*/
	Format: Format;
	/**ambiguous_origin*/
	Source: string;
	/**ambiguous_origin*/
	FilterPath: string;
}
/**namespace:Indices.Analyze */
interface analyze_response extends response {
	tokens: analyze_token[];
}
/**namespace:Indices.Analyze */
interface analyze_token {
	token: string;
	type: string;
	start_offset: integer;
	end_offset: integer;
	position: integer;
}
/**namespace:Indices.IndexManagement.CreateIndex */
/**custom_serialization*/
interface create_index_request extends request {
	Settings: map<string, any>[];
	Mappings: map<type_name, type_mapping>[];
	Warmers: map<type_name, warmer>[];
	Aliases: map<index_name, alias>[];
	Similarity: map<string, similarity>[];
	/**ambiguous_origin*/
	Timeout: time;
	/**ambiguous_origin*/
	MasterTimeout: time;
	/**ambiguous_origin*/
	UpdateAllTypes: boolean;
	/**ambiguous_origin*/
	Source: string;
	/**ambiguous_origin*/
	FilterPath: string;
}
/**namespace:Indices.IndexManagement.CreateIndex */
interface create_index_response extends response {
}
/**namespace:Indices.IndexManagement.DeleteIndex */
interface delete_index_request extends request {
	/**ambiguous_origin*/
	Timeout: time;
	/**ambiguous_origin*/
	MasterTimeout: time;
	/**ambiguous_origin*/
	Source: string;
	/**ambiguous_origin*/
	FilterPath: string;
}
/**namespace:Indices.IndexManagement.DeleteIndex */
interface delete_index_response extends response {
}
/**namespace:Indices.IndexManagement.GetIndex */
interface get_index_request extends request {
	/**ambiguous_origin*/
	Local: boolean;
	/**ambiguous_origin*/
	IgnoreUnavailable: boolean;
	/**ambiguous_origin*/
	AllowNoIndices: boolean;
	/**ambiguous_origin*/
	ExpandWildcards: ExpandWildcards;
	/**ambiguous_origin*/
	FlatSettings: boolean;
	/**ambiguous_origin*/
	Human: boolean;
	/**ambiguous_origin*/
	Source: string;
	/**ambiguous_origin*/
	FilterPath: string;
}
/**namespace:Indices.IndexManagement.GetIndex */
interface get_index_response extends response {
	Indices: map<string, index_state>[];
}
/**namespace:Indices.IndexManagement.IndicesExists */
interface index_exists_request extends request {
	/**ambiguous_origin*/
	IgnoreUnavailable: boolean;
	/**ambiguous_origin*/
	AllowNoIndices: boolean;
	/**ambiguous_origin*/
	ExpandWildcards: ExpandWildcards;
	/**ambiguous_origin*/
	Local: boolean;
	/**ambiguous_origin*/
	Source: string;
	/**ambiguous_origin*/
	FilterPath: string;
}
/**namespace:Indices.IndexManagement.IndicesExists */
interface exists_response extends response {
	Exists: boolean;
}
/**namespace:Indices.IndexManagement.OpenCloseIndex.CloseIndex */
interface close_index_request extends request {
	/**ambiguous_origin*/
	Timeout: time;
	/**ambiguous_origin*/
	MasterTimeout: time;
	/**ambiguous_origin*/
	IgnoreUnavailable: boolean;
	/**ambiguous_origin*/
	AllowNoIndices: boolean;
	/**ambiguous_origin*/
	ExpandWildcards: ExpandWildcards;
	/**ambiguous_origin*/
	Source: string;
	/**ambiguous_origin*/
	FilterPath: string;
}
/**namespace:Indices.IndexManagement.OpenCloseIndex.CloseIndex */
interface close_index_response extends response {
}
/**namespace:Indices.IndexManagement.OpenCloseIndex.OpenIndex */
interface open_index_request extends request {
	/**ambiguous_origin*/
	Timeout: time;
	/**ambiguous_origin*/
	MasterTimeout: time;
	/**ambiguous_origin*/
	IgnoreUnavailable: boolean;
	/**ambiguous_origin*/
	AllowNoIndices: boolean;
	/**ambiguous_origin*/
	ExpandWildcards: ExpandWildcards;
	/**ambiguous_origin*/
	Source: string;
	/**ambiguous_origin*/
	FilterPath: string;
}
/**namespace:Indices.IndexManagement.OpenCloseIndex.OpenIndex */
interface open_index_response extends response {
}
/**namespace:Indices.IndexManagement.TypesExists */
interface type_exists_request extends request {
	/**ambiguous_origin*/
	IgnoreUnavailable: boolean;
	/**ambiguous_origin*/
	AllowNoIndices: boolean;
	/**ambiguous_origin*/
	ExpandWildcards: ExpandWildcards;
	/**ambiguous_origin*/
	Local: boolean;
	/**ambiguous_origin*/
	Source: string;
	/**ambiguous_origin*/
	FilterPath: string;
}
/**namespace:Indices.IndexSettings.GetIndexSettings */
interface get_index_settings_request extends request {
	/**ambiguous_origin*/
	IgnoreUnavailable: boolean;
	/**ambiguous_origin*/
	AllowNoIndices: boolean;
	/**ambiguous_origin*/
	ExpandWildcards: ExpandWildcards;
	/**ambiguous_origin*/
	FlatSettings: boolean;
	/**ambiguous_origin*/
	Local: boolean;
	/**ambiguous_origin*/
	Human: boolean;
	/**ambiguous_origin*/
	Source: string;
	/**ambiguous_origin*/
	FilterPath: string;
}
/**namespace:Indices.IndexSettings.GetIndexSettings */
/**custom_serialization*/
interface get_index_settings_response extends response {
	Indices: map<string, index_state>[];
}
/**namespace:Indices.IndexSettings.IndexTemplates.DeleteIndexTemplate */
interface delete_index_template_request extends request {
	/**ambiguous_origin*/
	Timeout: time;
	/**ambiguous_origin*/
	MasterTimeout: time;
	/**ambiguous_origin*/
	Source: string;
	/**ambiguous_origin*/
	FilterPath: string;
}
/**namespace:Indices.IndexSettings.IndexTemplates.DeleteIndexTemplate */
interface delete_index_template_response extends response {
}
/**namespace:Indices.IndexSettings.IndexTemplates.GetIndexTemplate */
interface get_index_template_request extends request {
	/**ambiguous_origin*/
	FlatSettings: boolean;
	/**ambiguous_origin*/
	MasterTimeout: time;
	/**ambiguous_origin*/
	Local: boolean;
	/**ambiguous_origin*/
	Source: string;
	/**ambiguous_origin*/
	FilterPath: string;
}
/**namespace:Indices.IndexSettings.IndexTemplates.GetIndexTemplate */
/**custom_serialization*/
interface get_index_template_response extends response {
	TemplateMappings: map<string, template_mapping>[];
}
/**namespace:Indices.IndexSettings.IndexTemplates.IndexTemplateExists */
interface index_template_exists_request extends request {
	/**ambiguous_origin*/
	MasterTimeout: time;
	/**ambiguous_origin*/
	Local: boolean;
	/**ambiguous_origin*/
	Source: string;
	/**ambiguous_origin*/
	FilterPath: string;
}
/**namespace:Indices.IndexSettings.IndexTemplates.PutIndexTemplate */
interface put_index_template_request extends request {
	Template: string;
	Order: integer;
	Settings: map<string, any>[];
	Mappings: map<type_name, type_mapping>[];
	Warmers: map<type_name, warmer>[];
	Aliases: map<index_name, alias>[];
	/**ambiguous_origin*/
	Create: boolean;
	/**ambiguous_origin*/
	Timeout: time;
	/**ambiguous_origin*/
	MasterTimeout: time;
	/**ambiguous_origin*/
	FlatSettings: boolean;
	/**ambiguous_origin*/
	Source: string;
	/**ambiguous_origin*/
	FilterPath: string;
}
/**namespace:Indices.IndexSettings.IndexTemplates.PutIndexTemplate */
interface put_index_template_response extends response {
}
/**namespace:Indices.IndexSettings.UpdateIndexSettings */
interface update_index_settings_response extends response {
}
/**namespace:Indices.MappingManagement.GetFieldMapping */
interface get_field_mapping_request extends request {
	/**ambiguous_origin*/
	IncludeDefaults: boolean;
	/**ambiguous_origin*/
	IgnoreUnavailable: boolean;
	/**ambiguous_origin*/
	AllowNoIndices: boolean;
	/**ambiguous_origin*/
	ExpandWildcards: ExpandWildcards;
	/**ambiguous_origin*/
	Local: boolean;
	/**ambiguous_origin*/
	Source: string;
	/**ambiguous_origin*/
	FilterPath: string;
}
/**namespace:Indices.MappingManagement.GetFieldMapping */
interface get_field_mapping_response extends response {
	Indices: map<string, type_field_mappings>[];
}
/**namespace:Indices.MappingManagement.GetFieldMapping */
interface type_field_mappings {
	mappings: map<string, map<string, field_mapping>[]>[];
}
/**namespace:Indices.MappingManagement.GetMapping */
interface get_mapping_request extends request {
	/**ambiguous_origin*/
	IgnoreUnavailable: boolean;
	/**ambiguous_origin*/
	AllowNoIndices: boolean;
	/**ambiguous_origin*/
	ExpandWildcards: ExpandWildcards;
	/**ambiguous_origin*/
	Local: boolean;
	/**ambiguous_origin*/
	Source: string;
	/**ambiguous_origin*/
	FilterPath: string;
}
/**namespace:Indices.MappingManagement.GetMapping */
interface get_mapping_response extends response {
	IsValid: boolean;
	Mappings: map<string, type_mapping[]>[];
	Mapping: type_mapping;
}
/**namespace:Indices.MappingManagement.PutMapping */
/**custom_serialization*/
interface put_mapping_request extends request {
	AllField: all_field;
	DateDetection: boolean;
	DynamicDateFormats: string[];
	DynamicTemplates: map<string, dynamic_template>[];
	Dynamic: DynamicMapping;
	Analyzer: string;
	SearchAnalyzer: string;
	FieldNamesField: field_names_field;
	IndexField: index_field;
	Meta: map<string, any>[];
	NumericDetection: boolean;
	ParentField: parent_field;
	Properties: map<property_name, property>[];
	RoutingField: routing_field;
	SizeField: size_field;
	SourceField: source_field;
	TimestampField: timestamp_field;
	Transform: mapping_transform[];
	TtlField: ttl_field;
	/**ambiguous_origin*/
	Timeout: time;
	/**ambiguous_origin*/
	MasterTimeout: time;
	/**ambiguous_origin*/
	IgnoreUnavailable: boolean;
	/**ambiguous_origin*/
	AllowNoIndices: boolean;
	/**ambiguous_origin*/
	ExpandWildcards: ExpandWildcards;
	/**ambiguous_origin*/
	UpdateAllTypes: boolean;
	/**ambiguous_origin*/
	Source: string;
	/**ambiguous_origin*/
	FilterPath: string;
}
/**namespace:Indices.MappingManagement.PutMapping */
interface put_mapping_response extends response {
}
/**namespace:Indices.Monitoring.IndicesRecovery */
interface recovery_status_request extends request {
	/**ambiguous_origin*/
	Detailed: boolean;
	/**ambiguous_origin*/
	ActiveOnly: boolean;
	/**ambiguous_origin*/
	Human: boolean;
	/**ambiguous_origin*/
	Source: string;
	/**ambiguous_origin*/
	FilterPath: string;
}
/**namespace:Indices.Monitoring.IndicesRecovery */
interface recovery_status_response extends response {
	/**custom_serialization */
	Indices: map<string, recovery_status>[];
}
/**namespace:Indices.Monitoring.IndicesRecovery */
interface recovery_status {
	shards: shard_recovery[];
}
/**namespace:Indices.Monitoring.IndicesRecovery */
interface shard_recovery {
	id: long;
	type: string;
	stage: string;
	primary: boolean;
	start_time: Date;
	stop_time: Date;
	total_time_in_millis: long;
	source: recovery_origin;
	target: recovery_origin;
	index: recovery_index_status;
	translog: recovery_translog_status;
	start: recovery_start_status;
}
/**namespace:Indices.Monitoring.IndicesRecovery */
interface recovery_origin {
	id: string;
	hostname: string;
	ip: string;
	name: string;
}
/**namespace:Indices.Monitoring.IndicesRecovery */
interface recovery_index_status {
	total_time_in_millis: long;
	bytes: recovery_bytes;
	files: recovery_files;
}
/**namespace:Indices.Monitoring.IndicesRecovery */
interface recovery_bytes {
	total: long;
	reused: long;
	recovered: long;
	percent: string;
}
/**namespace:Indices.Monitoring.IndicesRecovery */
interface recovery_files {
	total: long;
	reused: long;
	recovered: long;
	percent: string;
	details: recovery_file_details[];
}
/**namespace:Indices.Monitoring.IndicesRecovery */
interface recovery_file_details {
	name: string;
	length: long;
	recovered: long;
}
/**namespace:Indices.Monitoring.IndicesRecovery */
interface recovery_translog_status {
	recovered: long;
	total: long;
	percent: string;
	total_on_start: long;
	total_time: string;
	total_time_in_millis: long;
}
/**namespace:Indices.Monitoring.IndicesRecovery */
interface recovery_start_status {
	check_index_time: long;
	total_time_in_millis: string;
}
/**namespace:Indices.Monitoring.IndicesSegments */
interface segments_request extends request {
	/**ambiguous_origin*/
	IgnoreUnavailable: boolean;
	/**ambiguous_origin*/
	AllowNoIndices: boolean;
	/**ambiguous_origin*/
	ExpandWildcards: ExpandWildcards;
	/**ambiguous_origin*/
	Human: boolean;
	/**ambiguous_origin*/
	OperationThreading: string;
	/**ambiguous_origin*/
	Verbose: boolean;
	/**ambiguous_origin*/
	Source: string;
	/**ambiguous_origin*/
	FilterPath: string;
}
/**namespace:Indices.Monitoring.IndicesSegments */
interface segments_response extends response {
	_shards: shards_meta_data;
	/**custom_serialization */
	indices: map<string, index_segment>[];
}
/**namespace:Indices.Monitoring.IndicesSegments */
interface index_segment {
	/**custom_serialization */
	shards: map<string, shards_segment>[];
}
/**namespace:Indices.Monitoring.IndicesSegments */
/**custom_serialization*/
interface shards_segment {
	num_committed_segments: integer;
	num_search_segments: integer;
	routing: shard_segment_routing;
	/**custom_serialization */
	Segments: map<string, segment>[];
}
/**namespace:Indices.Monitoring.IndicesSegments */
interface shard_segment_routing {
	state: string;
	primary: boolean;
	node: string;
}
/**namespace:Indices.Monitoring.IndicesSegments */
interface segment {
	generation: integer;
	num_docs: long;
	deleted_docs: long;
	size: string;
	size_in_bytes: double;
	committed: boolean;
	Search: boolean;
}
/**namespace:Indices.Monitoring.IndicesStats */
interface indices_stats_request extends request {
	Types: type_name[];
	/**ambiguous_origin*/
	CompletionFields: field[];
	/**ambiguous_origin*/
	FielddataFields: field[];
	/**ambiguous_origin*/
	Fields: field[];
	/**ambiguous_origin*/
	Groups: string[];
	/**ambiguous_origin*/
	Human: boolean;
	/**ambiguous_origin*/
	Level: Level;
	/**ambiguous_origin*/
	Source: string;
	/**ambiguous_origin*/
	FilterPath: string;
}
/**namespace:Indices.Monitoring.IndicesStats */
interface indices_stats_response extends response {
	_shards: shards_meta_data;
	_all: indices_stats;
	/**custom_serialization */
	indices: map<string, indices_stats>[];
}
/**namespace:Indices.Monitoring.IndicesStats */
interface indices_stats {
	primaries: index_stats;
	total: index_stats;
}
/**namespace:Indices.StatusManagement.ClearCache */
interface clear_cache_request extends request {
	/**ambiguous_origin*/
	FieldData: boolean;
	/**ambiguous_origin*/
	Fields: field[];
	/**ambiguous_origin*/
	Query: boolean;
	/**ambiguous_origin*/
	IgnoreUnavailable: boolean;
	/**ambiguous_origin*/
	AllowNoIndices: boolean;
	/**ambiguous_origin*/
	ExpandWildcards: ExpandWildcards;
	/**ambiguous_origin*/
	Recycler: boolean;
	/**ambiguous_origin*/
	Request: boolean;
	/**ambiguous_origin*/
	Source: string;
	/**ambiguous_origin*/
	FilterPath: string;
}
/**namespace:Indices.StatusManagement.ClearCache */
interface clear_cache_response extends response {
}
/**namespace:Indices.StatusManagement.Flush */
interface flush_request extends request {
	/**ambiguous_origin*/
	Force: boolean;
	/**ambiguous_origin*/
	WaitIfOngoing: boolean;
	/**ambiguous_origin*/
	IgnoreUnavailable: boolean;
	/**ambiguous_origin*/
	AllowNoIndices: boolean;
	/**ambiguous_origin*/
	ExpandWildcards: ExpandWildcards;
	/**ambiguous_origin*/
	Source: string;
	/**ambiguous_origin*/
	FilterPath: string;
}
/**namespace:Indices.StatusManagement.Flush */
interface flush_response extends response {
}
/**namespace:Indices.StatusManagement.Optimize */
interface optimize_request extends request {
	/**ambiguous_origin*/
	Flush: boolean;
	/**ambiguous_origin*/
	IgnoreUnavailable: boolean;
	/**ambiguous_origin*/
	AllowNoIndices: boolean;
	/**ambiguous_origin*/
	ExpandWildcards: ExpandWildcards;
	/**ambiguous_origin*/
	MaxNumSegments: long;
	/**ambiguous_origin*/
	OnlyExpungeDeletes: boolean;
	/**ambiguous_origin*/
	OperationThreading: string;
	/**ambiguous_origin*/
	WaitForMerge: boolean;
	/**ambiguous_origin*/
	Source: string;
	/**ambiguous_origin*/
	FilterPath: string;
}
/**namespace:Indices.StatusManagement.Optimize */
interface optimize_response extends response {
}
/**namespace:Indices.StatusManagement.Refresh */
interface refresh_request extends request {
	/**ambiguous_origin*/
	IgnoreUnavailable: boolean;
	/**ambiguous_origin*/
	AllowNoIndices: boolean;
	/**ambiguous_origin*/
	ExpandWildcards: ExpandWildcards;
	/**ambiguous_origin*/
	Force: boolean;
	/**ambiguous_origin*/
	OperationThreading: string;
	/**ambiguous_origin*/
	Source: string;
	/**ambiguous_origin*/
	FilterPath: string;
}
/**namespace:Indices.StatusManagement.Refresh */
interface refresh_response extends response {
}
/**namespace:Indices.StatusManagement.SyncedFlush */
interface synced_flush_request extends request {
	/**ambiguous_origin*/
	IgnoreUnavailable: boolean;
	/**ambiguous_origin*/
	AllowNoIndices: boolean;
	/**ambiguous_origin*/
	ExpandWildcards: ExpandWildcards;
	/**ambiguous_origin*/
	Source: string;
	/**ambiguous_origin*/
	FilterPath: string;
}
/**namespace:Indices.StatusManagement.SyncedFlush */
interface synced_flush_response extends response {
}
/**namespace:Indices.StatusManagement.Upgrade */
interface upgrade_request extends request {
	/**ambiguous_origin*/
	AllowNoIndices: boolean;
	/**ambiguous_origin*/
	ExpandWildcards: ExpandWildcards;
	/**ambiguous_origin*/
	IgnoreUnavailable: boolean;
	/**ambiguous_origin*/
	WaitForCompletion: boolean;
	/**ambiguous_origin*/
	OnlyAncientSegments: boolean;
	/**ambiguous_origin*/
	Source: string;
	/**ambiguous_origin*/
	FilterPath: string;
}
/**namespace:Indices.StatusManagement.Upgrade */
interface upgrade_response extends response {
	_shards: shards_meta_data;
}
/**namespace:Indices.StatusManagement.Upgrade.UpgradeStatus */
interface upgrade_status_request extends request {
	/**ambiguous_origin*/
	IgnoreUnavailable: boolean;
	/**ambiguous_origin*/
	AllowNoIndices: boolean;
	/**ambiguous_origin*/
	ExpandWildcards: ExpandWildcards;
	/**ambiguous_origin*/
	Human: boolean;
	/**ambiguous_origin*/
	Source: string;
	/**ambiguous_origin*/
	FilterPath: string;
}
/**namespace:Indices.StatusManagement.Upgrade.UpgradeStatus */
/**custom_serialization*/
interface upgrade_status_response extends response {
	/**custom_serialization */
	Upgrades: map<string, upgrade_status>[];
	SizeInBytes: long;
	SizeToUpgradeInBytes: string;
	SizeToUpgradeAncientInBytes: string;
}
/**namespace:Indices.StatusManagement.Upgrade.UpgradeStatus */
interface upgrade_status {
	size: string;
	size_in_bytes: long;
	size_to_upgrade: string;
	size_to_upgrade_in_bytes: string;
	size_to_upgrade_ancient_in_bytes: string;
}
/**namespace:Indices.Warmers.DeleteWarmer */
interface delete_warmer_request extends request {
	/**ambiguous_origin*/
	MasterTimeout: time;
	/**ambiguous_origin*/
	Source: string;
	/**ambiguous_origin*/
	FilterPath: string;
}
/**namespace:Indices.Warmers.DeleteWarmer */
interface delete_warmer_response extends response {
}
/**namespace:Indices.Warmers.GetWarmer */
interface get_warmer_request extends request {
	/**ambiguous_origin*/
	IgnoreUnavailable: boolean;
	/**ambiguous_origin*/
	AllowNoIndices: boolean;
	/**ambiguous_origin*/
	ExpandWildcards: ExpandWildcards;
	/**ambiguous_origin*/
	Local: boolean;
	/**ambiguous_origin*/
	Source: string;
	/**ambiguous_origin*/
	FilterPath: string;
}
/**namespace:Indices.Warmers.GetWarmer */
/**custom_serialization*/
interface get_warmer_response extends response {
	/**custom_serialization */
	Indices: map<string, map<type_name, warmer>[]>[];
}
/**namespace:Indices.Warmers.PutWarmer */
/**custom_serialization*/
interface put_warmer_request extends request {
	Search: search_request;
	/**ambiguous_origin*/
	MasterTimeout: time;
	/**ambiguous_origin*/
	IgnoreUnavailable: boolean;
	/**ambiguous_origin*/
	AllowNoIndices: boolean;
	/**ambiguous_origin*/
	ExpandWildcards: ExpandWildcards;
	/**ambiguous_origin*/
	RequestCache: boolean;
	/**ambiguous_origin*/
	Source: string;
	/**ambiguous_origin*/
	FilterPath: string;
}
/**namespace:Indices.Warmers.PutWarmer */
interface put_warmer_response extends response {
}
/**namespace:Mapping.Types */
interface property_base {
	Name: property_name;
	Type: type_name;
	CopyTo: field[];
	DocValues: boolean;
	Fields: map<property_name, property>[];
	IndexName: string;
	Similarity: SimilarityOption;
	Store: boolean;
}
/**namespace:Mapping.Types.Complex.Nested */
interface nested_property extends object_property {
	include_in_parent: boolean;
	include_in_root: boolean;
}
/**namespace:Mapping.Types.Complex.Object */
interface object_property extends property_base {
	dynamic: DynamicMapping;
	enabled: boolean;
	include_in_all: boolean;
	path: string;
	properties: map<property_name, property>[];
}
/**namespace:Mapping.Types.Core.Binary */
interface binary_property extends property_base {
}
/**namespace:Mapping.Types.Core.Boolean */
interface boolean_property extends property_base {
	index: NonStringIndexOption;
	boost: double;
	null_value: boolean;
	fielddata: numeric_fielddata;
}
/**namespace:Mapping.Types.Geo.GeoPoint */
interface geo_point_property extends property_base {
	lat_lon: boolean;
	geohash: boolean;
	geohash_prefix: boolean;
	geohash_precision: integer;
	validate: boolean;
	validate_lat: boolean;
	validate_lon: boolean;
	normalize: boolean;
	normalize_lat: boolean;
	normalize_lon: boolean;
	precision_step: integer;
	fielddata: geo_point_fielddata;
}
/**namespace:Mapping.Types.Geo.GeoShape */
interface geo_shape_property extends property_base {
	tree: GeoTree;
	precision: distance;
	orientation: GeoOrientation;
	tree_levels: integer;
	distance_error_pct: double;
	points_only: boolean;
}
/**namespace:Mapping.Types.Specialized.Attachment */
interface attachment_property extends property_base {
	AuthorField: string_property;
	ContentLengthField: number_property;
	ContentTypeField: string_property;
	DateField: date_property;
	FileField: string_property;
	KeywordsField: string_property;
	LanguageField: string_property;
	NameField: string_property;
	TitleField: string_property;
}
/**namespace:Mapping.Types.Specialized.Completion */
interface completion_property extends property_base {
	search_analyzer: string;
	analyzer: string;
	payloads: boolean;
	preserve_separators: boolean;
	preserve_position_increments: boolean;
	max_input_length: integer;
	context: map<string, suggest_context>[];
}
/**namespace:Mapping.Types.Specialized.Ip */
interface ip_property extends property_base {
	boost: double;
	include_in_all: boolean;
	index: NonStringIndexOption;
	null_value: string;
	precision_step: integer;
}
/**namespace:Mapping.Types.Specialized.Murmur3Hash */
interface murmur3_hash_property extends property_base {
}
/**namespace:Mapping.Types.Specialized.TokenCount */
interface token_count_property extends number_property {
	analyzer: string;
}
/**namespace:Modules.Indices */
interface indices_module_settings {
	QeueriesCacheSize: string;
	CircuitBreakerSettings: circuit_breaker_settings;
	FielddataSettings: fielddata_settings;
	RecoverySettings: indices_recovery_settings;
}
/**namespace:Modules.Indices.Fielddata */
interface fielddata_settings {
	CacheSize: string;
	CacheExpire: time;
}
/**namespace:Modules.Scripting.DeleteScript */
interface delete_script_request extends request {
	/**ambiguous_origin*/
	Version: long;
	/**ambiguous_origin*/
	VersionType: VersionType;
	/**ambiguous_origin*/
	Source: string;
	/**ambiguous_origin*/
	FilterPath: string;
}
/**namespace:Modules.Scripting.DeleteScript */
interface delete_script_response extends response {
}
/**namespace:Modules.Scripting.GetScript */
interface get_script_request extends request {
	/**ambiguous_origin*/
	Version: long;
	/**ambiguous_origin*/
	VersionType: VersionType;
	/**ambiguous_origin*/
	Source: string;
	/**ambiguous_origin*/
	FilterPath: string;
}
/**namespace:Modules.Scripting.GetScript */
interface get_script_response extends response {
	script: string;
}
/**namespace:Modules.Scripting.PutScript */
interface put_script_request extends request {
	script: string;
	/**ambiguous_origin*/
	OpType: OpType;
	/**ambiguous_origin*/
	Version: long;
	/**ambiguous_origin*/
	VersionType: VersionType;
	/**ambiguous_origin*/
	Source: string;
	/**ambiguous_origin*/
	FilterPath: string;
}
/**namespace:Modules.Scripting.PutScript */
interface put_script_response extends response {
}
/**namespace:Modules.SnapshotAndRestore.Repositories.CreateRepository */
/**custom_serialization*/
interface create_repository_request extends request {
	Repository: snapshot_repository;
	/**ambiguous_origin*/
	MasterTimeout: time;
	/**ambiguous_origin*/
	Timeout: time;
	/**ambiguous_origin*/
	Verify: boolean;
	/**ambiguous_origin*/
	Source: string;
	/**ambiguous_origin*/
	FilterPath: string;
}
/**namespace:Modules.SnapshotAndRestore.Repositories.CreateRepository */
interface create_repository_response extends response {
}
/**namespace:Modules.SnapshotAndRestore.Repositories.DeleteRepository */
interface delete_repository_request extends request {
	/**ambiguous_origin*/
	MasterTimeout: time;
	/**ambiguous_origin*/
	Timeout: time;
	/**ambiguous_origin*/
	Source: string;
	/**ambiguous_origin*/
	FilterPath: string;
}
/**namespace:Modules.SnapshotAndRestore.Repositories.DeleteRepository */
interface delete_repository_response extends response {
}
/**namespace:Modules.SnapshotAndRestore.Repositories.GetRepository */
interface get_repository_request extends request {
	/**ambiguous_origin*/
	MasterTimeout: time;
	/**ambiguous_origin*/
	Local: boolean;
	/**ambiguous_origin*/
	Source: string;
	/**ambiguous_origin*/
	FilterPath: string;
}
/**namespace:Modules.SnapshotAndRestore.Repositories.GetRepository */
/**custom_serialization*/
interface get_repository_response extends response {
	Repositories: map<string, snapshot_repository>[];
}
/**namespace:Modules.SnapshotAndRestore.Repositories.VerifyRepository */
interface verify_repository_request extends request {
	/**ambiguous_origin*/
	MasterTimeout: time;
	/**ambiguous_origin*/
	Timeout: time;
	/**ambiguous_origin*/
	Source: string;
	/**ambiguous_origin*/
	FilterPath: string;
}
/**namespace:Modules.SnapshotAndRestore.Repositories.VerifyRepository */
interface verify_repository_response extends response {
	/**custom_serialization */
	nodes: map<string, compact_node_info>[];
}
/**namespace:Modules.SnapshotAndRestore.Repositories.VerifyRepository */
interface compact_node_info {
	name: string;
}
/**namespace:Modules.SnapshotAndRestore.Restore */
interface restore_request extends request {
	indices: indices;
	ignore_unavailable: boolean;
	include_global_state: boolean;
	rename_pattern: string;
	rename_replacement: string;
	index_settings: update_index_settings_request;
	ignore_index_settings: string[];
	/**ambiguous_origin*/
	MasterTimeout: time;
	/**ambiguous_origin*/
	WaitForCompletion: boolean;
	/**ambiguous_origin*/
	Source: string;
	/**ambiguous_origin*/
	FilterPath: string;
}
/**namespace:Modules.SnapshotAndRestore.Restore */
interface restore_response extends response {
	snapshot: snapshot_restore;
}
/**namespace:Modules.SnapshotAndRestore.Restore */
interface snapshot_restore {
	snapshot: string;
	indices: index_name[];
	shards: shards_meta_data;
}
/**namespace:Modules.SnapshotAndRestore.Snapshot.DeleteSnapshot */
interface delete_snapshot_request extends request {
	/**ambiguous_origin*/
	MasterTimeout: time;
	/**ambiguous_origin*/
	Source: string;
	/**ambiguous_origin*/
	FilterPath: string;
}
/**namespace:Modules.SnapshotAndRestore.Snapshot.DeleteSnapshot */
interface delete_snapshot_response extends response {
}
/**namespace:Modules.SnapshotAndRestore.Snapshot.GetSapshot */
interface get_snapshot_request extends request {
	/**ambiguous_origin*/
	MasterTimeout: time;
	/**ambiguous_origin*/
	Source: string;
	/**ambiguous_origin*/
	FilterPath: string;
}
/**namespace:Modules.SnapshotAndRestore.Snapshot.GetSapshot */
interface get_snapshot_response extends response {
	snapshots: snapshot[];
}
/**namespace:Modules.SnapshotAndRestore.Snapshot */
interface snapshot {
	snapshot: string;
	indices: index_name[];
	state: string;
	start_time: Date;
	start_time_in_millis: long;
	end_time: Date;
	end_time_in_millis: long;
	duration_in_millis: long;
	shards: shards_meta_data;
	failures: snapshot_shard_failure[];
	Failures: string[];
}
/**namespace:Modules.SnapshotAndRestore.Snapshot */
interface snapshot_shard_failure {
	node_id: string;
	index: string;
	shard_id: string;
	reason: string;
	status: string;
}
/**namespace:Modules.SnapshotAndRestore.Snapshot.Snapshot */
interface snapshot_request extends request {
	/**custom_serialization */
	indices: indices;
	ignore_unavailable: boolean;
	include_global_state: boolean;
	partial: boolean;
	/**ambiguous_origin*/
	MasterTimeout: time;
	/**ambiguous_origin*/
	WaitForCompletion: boolean;
	/**ambiguous_origin*/
	Source: string;
	/**ambiguous_origin*/
	FilterPath: string;
}
/**namespace:Modules.SnapshotAndRestore.Snapshot.Snapshot */
interface snapshot_response extends response {
	accepted: boolean;
	snapshot: snapshot;
}
/**namespace:Modules.SnapshotAndRestore.Snapshot.SnapshotStatus */
interface snapshot_status_request extends request {
	/**ambiguous_origin*/
	MasterTimeout: time;
	/**ambiguous_origin*/
	Source: string;
	/**ambiguous_origin*/
	FilterPath: string;
}
/**namespace:Modules.SnapshotAndRestore.Snapshot.SnapshotStatus */
interface snapshot_status_response extends response {
	snapshots: snapshot_status[];
}
/**namespace:Modules.SnapshotAndRestore.Snapshot.SnapshotStatus */
interface snapshot_status {
	snapshot: string;
	repository: string;
	state: string;
	shards_stats: snapshot_shards_stats;
	stats: snapshot_stats;
	indices: map<string, snapshot_index_stats>[];
}
/**namespace:Modules.SnapshotAndRestore.Snapshot.SnapshotStatus */
interface snapshot_shards_stats {
	initializing: long;
	started: long;
	finalizing: long;
	done: long;
	failed: long;
	total: long;
}
/**namespace:Modules.SnapshotAndRestore.Snapshot.SnapshotStatus */
interface snapshot_stats {
	number_of_files: long;
	processed_files: long;
	total_size_in_bytes: long;
	processed_size_in_bytes: long;
	start_time_in_millis: long;
	time_in_millis: long;
}
/**namespace:Modules.SnapshotAndRestore.Snapshot.SnapshotStatus */
interface snapshot_index_stats {
	shards_stats: snapshot_shards_stats;
	stats: snapshot_stats;
	shards: map<string, snapshot_shards_stats>[];
}
/**namespace:Search.Count */
/**custom_serialization*/
interface count_request extends request {
	query: query_container;
	/**ambiguous_origin*/
	IgnoreUnavailable: boolean;
	/**ambiguous_origin*/
	AllowNoIndices: boolean;
	/**ambiguous_origin*/
	ExpandWildcards: ExpandWildcards;
	/**ambiguous_origin*/
	MinScore: double;
	/**ambiguous_origin*/
	Preference: string;
	/**ambiguous_origin*/
	Routing: string;
	/**ambiguous_origin*/
	QueryOnQueryString: string;
	/**ambiguous_origin*/
	Analyzer: string;
	/**ambiguous_origin*/
	AnalyzeWildcard: boolean;
	/**ambiguous_origin*/
	DefaultOperator: DefaultOperator;
	/**ambiguous_origin*/
	Df: string;
	/**ambiguous_origin*/
	Lenient: boolean;
	/**ambiguous_origin*/
	LowercaseExpandedTerms: boolean;
	/**ambiguous_origin*/
	Source: string;
	/**ambiguous_origin*/
	FilterPath: string;
}
/**namespace:Search.Count */
interface count_response extends response {
	count: long;
	_shards: shards_meta_data;
}
/**namespace:Search.Explain */
interface explain_request<t_document> extends request {
	query: query_container;
	/**ambiguous_origin*/
	AnalyzeWildcard: boolean;
	/**ambiguous_origin*/
	Analyzer: string;
	/**ambiguous_origin*/
	DefaultOperator: DefaultOperator;
	/**ambiguous_origin*/
	Df: string;
	/**ambiguous_origin*/
	Fields: field[];
	/**ambiguous_origin*/
	Lenient: boolean;
	/**ambiguous_origin*/
	LowercaseExpandedTerms: boolean;
	/**ambiguous_origin*/
	Parent: string;
	/**ambiguous_origin*/
	Preference: string;
	/**ambiguous_origin*/
	QueryOnQueryString: string;
	/**ambiguous_origin*/
	Routing: string;
	/**ambiguous_origin*/
	SourceEnabled: string[];
	/**ambiguous_origin*/
	SourceExclude: field[];
	/**ambiguous_origin*/
	SourceInclude: field[];
	/**ambiguous_origin*/
	Source: string;
	/**ambiguous_origin*/
	FilterPath: string;
}
/**namespace:Search.Explain */
interface explain_response<t> extends response {
	matched: boolean;
	explanation: explanation_detail;
	get: instant_get<t>;
}
/**namespace:Search.Explain */
interface explanation_detail {
	value: float;
	description: string;
	details: explanation_detail[];
}
/**namespace:Search.FieldStats */
interface field_stats_request extends request {
	fields: field[];
	index_constraints: map<field, index_constraint>[];
	/**ambiguous_origin*/
	Level: Level;
	/**ambiguous_origin*/
	IgnoreUnavailable: boolean;
	/**ambiguous_origin*/
	AllowNoIndices: boolean;
	/**ambiguous_origin*/
	ExpandWildcards: ExpandWildcards;
	/**ambiguous_origin*/
	Source: string;
	/**ambiguous_origin*/
	FilterPath: string;
}
/**namespace:Search.FieldStats */
interface field_stats_response extends response {
	_shards: shards_meta_data;
	indices: map<string, field_stats>[];
}
/**namespace:Search.FieldStats */
interface field_stats {
	fields: map<string, field_stats_field>[];
}
/**namespace:Search.FieldStats */
interface field_stats_field {
	max_doc: long;
	doc_count: long;
	density: long;
	sum_doc_freq: long;
	sum_total_term_freq: long;
	min_value: string;
	max_value: string;
}
/**namespace:Search.MultiSearch */
/**custom_serialization*/
interface multi_search_request extends request {
	Operations: map<string, search_request>[];
	/**ambiguous_origin*/
	SearchType: SearchType;
	/**ambiguous_origin*/
	Source: string;
	/**ambiguous_origin*/
	FilterPath: string;
}
/**namespace:Search.MultiSearch */
interface multi_search_response extends response {
	IsValid: boolean;
	TotalResponses: integer;
	AllResponses: response[];
}
/**namespace:Search.Percolator.MultiPercolate */
/**custom_serialization*/
interface multi_percolate_request extends request {
	Percolations: percolate_operation[];
	/**ambiguous_origin*/
	IgnoreUnavailable: boolean;
	/**ambiguous_origin*/
	AllowNoIndices: boolean;
	/**ambiguous_origin*/
	ExpandWildcards: ExpandWildcards;
	/**ambiguous_origin*/
	Source: string;
	/**ambiguous_origin*/
	FilterPath: string;
}
/**namespace:Search.Percolator.MultiPercolate */
interface multi_percolate_response extends response {
	IsValid: boolean;
	Responses: percolate_response[];
}
/**namespace:Search.Percolator.Percolate */
interface percolate_response extends response {
	matches: percolator_match[];
}
/**namespace:Search.Percolator.Percolate */
interface percolate_count_response extends response {
	took: integer;
	total: long;
	_shards: shards_meta_data;
	ServerError: server_error;
}
/**namespace:Search.Percolator.Percolate */
interface percolator_match {
	highlight: map<string, string[]>[];
	_id: string;
	_index: string;
	_score: double;
}
/**namespace:Search.Percolator.Percolate */
interface percolate_request<t_document> extends request {
	MultiPercolateName: string;
	Highlight: highlight;
	Query: query_container;
	Filter: query_container;
	Aggregations: map<string, aggregation_container>[];
	Size: integer;
	TrackScores: boolean;
	doc: t_document;
	Sort: sort[];
	/**ambiguous_origin*/
	Routing: string[];
	/**ambiguous_origin*/
	Preference: string;
	/**ambiguous_origin*/
	IgnoreUnavailable: boolean;
	/**ambiguous_origin*/
	AllowNoIndices: boolean;
	/**ambiguous_origin*/
	ExpandWildcards: ExpandWildcards;
	/**ambiguous_origin*/
	PercolateIndex: string;
	/**ambiguous_origin*/
	PercolateType: string;
	/**ambiguous_origin*/
	PercolateRouting: string;
	/**ambiguous_origin*/
	PercolatePreference: string;
	/**ambiguous_origin*/
	PercolateFormat: PercolateFormat;
	/**ambiguous_origin*/
	Version: long;
	/**ambiguous_origin*/
	VersionType: VersionType;
	/**ambiguous_origin*/
	Source: string;
	/**ambiguous_origin*/
	FilterPath: string;
}
/**namespace:Search.Percolator.PercolateCount */
interface percolate_count_request<t_document> extends request {
	MultiPercolateName: string;
	Size: integer;
	TrackScores: boolean;
	Sort: sort[];
	Highlight: highlight;
	Query: query_container;
	Filter: query_container;
	Aggregations: map<string, aggregation_container>[];
	doc: t_document;
	/**ambiguous_origin*/
	Routing: string[];
	/**ambiguous_origin*/
	Preference: string;
	/**ambiguous_origin*/
	IgnoreUnavailable: boolean;
	/**ambiguous_origin*/
	AllowNoIndices: boolean;
	/**ambiguous_origin*/
	ExpandWildcards: ExpandWildcards;
	/**ambiguous_origin*/
	PercolateIndex: string;
	/**ambiguous_origin*/
	PercolateType: string;
	/**ambiguous_origin*/
	Version: long;
	/**ambiguous_origin*/
	VersionType: VersionType;
	/**ambiguous_origin*/
	Source: string;
	/**ambiguous_origin*/
	FilterPath: string;
}
/**namespace:Search.Percolator.RegisterPercolator */
/**custom_serialization*/
interface register_percolator_request extends request {
	Metadata: map<string, any>[];
	Query: query_container;
}
/**namespace:Search.Percolator.RegisterPercolator */
interface register_percolator_response extends response {
	created: boolean;
	_index: string;
	_type: string;
	_id: string;
	_version: integer;
}
/**namespace:Search.Percolator.UnregisterPercolator */
interface unregister_percolator_request extends request {
}
/**namespace:Search.Percolator.UnregisterPercolator */
interface unregister_percolator_response extends response {
	found: boolean;
	_index: string;
	_type: string;
	_id: string;
	_version: integer;
}
/**namespace:Search.Scroll.ClearScroll */
interface clear_scroll_request extends request {
	scroll_id: string[];
	/**ambiguous_origin*/
	Source: string;
	/**ambiguous_origin*/
	FilterPath: string;
}
/**namespace:Search.Scroll.ClearScroll */
interface clear_scroll_response extends response {
}
/**namespace:Search.Scroll.Scroll */
interface scroll_request extends request {
	CovariantTypes: types;
	scroll: time;
	scroll_id: string;
	/**ambiguous_origin*/
	Source: string;
	/**ambiguous_origin*/
	FilterPath: string;
}
/**namespace:Search.Search.Hits */
interface inner_hits_result {
	hits: inner_hits_meta_data;
}
/**namespace:Search.Search.Hits */
interface inner_hits_meta_data {
	total: long;
	max_score: double;
	hits: hit<lazy_document>[];
}
/**namespace:Search.Search.Highlighting */
interface highlight_hit {
	DocumentId: string;
	Field: string;
	Highlights: string[];
}
/**namespace:Search.Explain */
interface explanation {
	value: float;
	description: string;
	details: explanation_detail[];
}
/**namespace:Search.Search */
interface search_response<t> extends response {
	_shards: shards_meta_data;
	hits: hits_meta_data<t>;
	/**custom_serialization */
	aggregations: map<string, aggregate>[];
	Aggs: aggregations_helper;
	suggest: map<string, suggest[]>[];
	took: integer;
	timed_out: boolean;
	terminated_early: boolean;
	_scroll_id: string;
	Total: long;
	MaxScore: double;
	Documents: t[];
	Hits: hit<t>[];
	Fields: map<string, any>[][];
	Highlights: map<string, map<string, highlight_hit>[]>[];
}
/**namespace:Search.Search.Hits */
interface hits_meta_data<t> {
	total: long;
	max_score: double;
	hits: hit<t>[];
}
/**namespace:Aggregations */
interface aggregations_helper {
	Aggregations: map<string, aggregate>[];
}
/**namespace:Search.Suggesters */
interface suggest {
	length: integer;
	offset: integer;
	text: string;
	options: suggest_option[];
}
/**namespace:Search.Suggesters */
/**custom_serialization*/
interface suggest_option {
	freq: integer;
	score: double;
	text: string;
	highlighted: string;
}
/**namespace:Search.SearchExists */
/**custom_serialization*/
interface search_exists_request extends request {
	query: query_container;
	QueryString: string;
	/**ambiguous_origin*/
	IgnoreUnavailable: boolean;
	/**ambiguous_origin*/
	AllowNoIndices: boolean;
	/**ambiguous_origin*/
	ExpandWildcards: ExpandWildcards;
	/**ambiguous_origin*/
	MinScore: double;
	/**ambiguous_origin*/
	Preference: string;
	/**ambiguous_origin*/
	Routing: string;
	/**ambiguous_origin*/
	QueryOnQueryString: string;
	/**ambiguous_origin*/
	Analyzer: string;
	/**ambiguous_origin*/
	AnalyzeWildcard: boolean;
	/**ambiguous_origin*/
	DefaultOperator: DefaultOperator;
	/**ambiguous_origin*/
	Df: string;
	/**ambiguous_origin*/
	Lenient: boolean;
	/**ambiguous_origin*/
	LowercaseExpandedTerms: boolean;
	/**ambiguous_origin*/
	Source: string;
	/**ambiguous_origin*/
	FilterPath: string;
}
/**namespace:Search.SearchShards */
interface search_shards_request extends request {
	/**ambiguous_origin*/
	Preference: string;
	/**ambiguous_origin*/
	Routing: string;
	/**ambiguous_origin*/
	Local: boolean;
	/**ambiguous_origin*/
	IgnoreUnavailable: boolean;
	/**ambiguous_origin*/
	AllowNoIndices: boolean;
	/**ambiguous_origin*/
	ExpandWildcards: ExpandWildcards;
	/**ambiguous_origin*/
	Source: string;
	/**ambiguous_origin*/
	FilterPath: string;
}
/**namespace:Search.SearchShards */
interface search_shards_response extends response {
	shards: search_shard[][];
	nodes: map<string, search_node>[];
}
/**namespace:Search.SearchShards */
interface search_shard {
	state: string;
	primary: boolean;
	node: string;
	relocating_node: string;
	shard: integer;
	index: string;
}
/**namespace:Search.SearchShards */
interface search_node {
	name: string;
	transport_address: string;
}
/**namespace:Search.SearchTemplate */
interface search_template_request extends request {
	template: string;
	file: string;
	id: string;
	params: map<string, any>[];
	/**ambiguous_origin*/
	IgnoreUnavailable: boolean;
	/**ambiguous_origin*/
	AllowNoIndices: boolean;
	/**ambiguous_origin*/
	ExpandWildcards: ExpandWildcards;
	/**ambiguous_origin*/
	Preference: string;
	/**ambiguous_origin*/
	Routing: string[];
	/**ambiguous_origin*/
	Scroll: time;
	/**ambiguous_origin*/
	SearchType: SearchType;
	/**ambiguous_origin*/
	Source: string;
	/**ambiguous_origin*/
	FilterPath: string;
}
/**namespace:Search.SearchTemplate.DeleteSearchTemplate */
interface delete_search_template_request extends request {
	/**ambiguous_origin*/
	Version: long;
	/**ambiguous_origin*/
	VersionType: VersionType;
	/**ambiguous_origin*/
	Source: string;
	/**ambiguous_origin*/
	FilterPath: string;
}
/**namespace:Search.SearchTemplate.DeleteSearchTemplate */
interface delete_search_template_response extends response {
}
/**namespace:Search.SearchTemplate.GetSearchTemplate */
interface get_search_template_request extends request {
	/**ambiguous_origin*/
	Version: long;
	/**ambiguous_origin*/
	VersionType: VersionType;
	/**ambiguous_origin*/
	Source: string;
	/**ambiguous_origin*/
	FilterPath: string;
}
/**namespace:Search.SearchTemplate.GetSearchTemplate */
interface get_search_template_response extends response {
	template: string;
}
/**namespace:Search.SearchTemplate.PutSearchTemplate */
/**custom_serialization*/
interface put_search_template_request extends request {
	template: string;
	/**ambiguous_origin*/
	OpType: OpType;
	/**ambiguous_origin*/
	Version: long;
	/**ambiguous_origin*/
	VersionType: VersionType;
	/**ambiguous_origin*/
	Source: string;
	/**ambiguous_origin*/
	FilterPath: string;
}
/**namespace:Search.SearchTemplate.PutSearchTemplate */
interface put_search_template_response extends response {
}
/**namespace:Search.Suggesters.Suggest */
/**custom_serialization*/
interface suggest_request extends request {
	GlobalText: string;
	Suggest: map<string, suggest_bucket>[];
	/**ambiguous_origin*/
	IgnoreUnavailable: boolean;
	/**ambiguous_origin*/
	AllowNoIndices: boolean;
	/**ambiguous_origin*/
	ExpandWildcards: ExpandWildcards;
	/**ambiguous_origin*/
	Preference: string;
	/**ambiguous_origin*/
	Routing: string;
	/**ambiguous_origin*/
	Source: string;
	/**ambiguous_origin*/
	FilterPath: string;
}
/**namespace:Search.Suggesters.Suggest */
/**custom_serialization*/
interface suggest_response extends response {
	Shards: shards_meta_data;
	Suggestions: map<string, suggest[]>[];
}
/**namespace:Search.Validate */
interface validate_query_request extends request {
	query: query_container;
	/**ambiguous_origin*/
	Explain: boolean;
	/**ambiguous_origin*/
	IgnoreUnavailable: boolean;
	/**ambiguous_origin*/
	AllowNoIndices: boolean;
	/**ambiguous_origin*/
	ExpandWildcards: ExpandWildcards;
	/**ambiguous_origin*/
	OperationThreading: string;
	/**ambiguous_origin*/
	QueryOnQueryString: string;
	/**ambiguous_origin*/
	Analyzer: string;
	/**ambiguous_origin*/
	AnalyzeWildcard: boolean;
	/**ambiguous_origin*/
	DefaultOperator: DefaultOperator;
	/**ambiguous_origin*/
	Df: string;
	/**ambiguous_origin*/
	Lenient: boolean;
	/**ambiguous_origin*/
	LowercaseExpandedTerms: boolean;
	/**ambiguous_origin*/
	Rewrite: boolean;
	/**ambiguous_origin*/
	Source: string;
	/**ambiguous_origin*/
	FilterPath: string;
}
/**namespace:Search.Validate */
interface validate_query_response extends response {
	valid: boolean;
	_shards: shards_meta_data;
	explanations: validation_explanation[];
}
/**namespace:Search.Validate */
interface validation_explanation {
	index: string;
	valid: boolean;
	error: string;
	explanation: string;
}
/**namespace:DefaultLanguageConstruct */
interface cat_help_request extends request {
	/**ambiguous_origin*/
	Help: boolean;
	/**ambiguous_origin*/
	Source: string;
	/**ambiguous_origin*/
	FilterPath: string;
}
/**namespace:DefaultLanguageConstruct */
interface cat_nodeattrs_request extends request {
	/**ambiguous_origin*/
	Local: boolean;
	/**ambiguous_origin*/
	MasterTimeout: time;
	/**ambiguous_origin*/
	H: string[];
	/**ambiguous_origin*/
	Help: boolean;
	/**ambiguous_origin*/
	V: boolean;
	/**ambiguous_origin*/
	Source: string;
	/**ambiguous_origin*/
	FilterPath: string;
}
/**namespace:DefaultLanguageConstruct */
interface indices_shard_stores_request extends request {
	/**ambiguous_origin*/
	Status: string[];
	/**ambiguous_origin*/
	IgnoreUnavailable: boolean;
	/**ambiguous_origin*/
	AllowNoIndices: boolean;
	/**ambiguous_origin*/
	ExpandWildcards: ExpandWildcards;
	/**ambiguous_origin*/
	OperationThreading: string;
	/**ambiguous_origin*/
	Source: string;
	/**ambiguous_origin*/
	FilterPath: string;
}
/**namespace:DefaultLanguageConstruct */
interface render_search_template_request extends request {
	/**ambiguous_origin*/
	Source: string;
	/**ambiguous_origin*/
	FilterPath: string;
}
/**namespace:DefaultLanguageConstruct */
enum HttpMethod {
	GET = 0,
	POST = 1,
	PUT = 2,
	DELETE = 3,
	HEAD = 4
}
/**namespace:DefaultLanguageConstruct */
enum Bytes {
	b = 0,
	k = 1,
	m = 2,
	g = 3
}
/**namespace:DefaultLanguageConstruct */
enum Level {
	cluster = 0,
	indices = 1,
	shards = 2
}
/**namespace:DefaultLanguageConstruct */
enum WaitForStatus {
	green = 0,
	yellow = 1,
	red = 2
}
/**namespace:DefaultLanguageConstruct */
/**namespace:DefaultLanguageConstruct */
enum ExpandWildcards {
	open = 0,
	closed = 1,
	none = 2,
	all = 3
}
/**namespace:DefaultLanguageConstruct */
enum SuggestMode {
	missing = 0,
	popular = 1,
	always = 2
}
/**namespace:DefaultLanguageConstruct */
enum SearchType {
	query_then_fetch = 0,
	query_and_fetch = 1,
	dfs_query_then_fetch = 2,
	dfs_query_and_fetch = 3,
	count = 4,
	scan = 5
}
/**namespace:DefaultLanguageConstruct */
enum ThreadType {
	cpu = 0,
	wait = 1,
	block = 2
}
/**namespace:DefaultLanguageConstruct */
enum VersionType {
	internal = 0,
	external = 1,
	external_gte = 2,
	force = 3
}
/**namespace:DefaultLanguageConstruct */
enum Consistency {
	one = 0,
	quorum = 1,
	all = 2
}
/**namespace:DefaultLanguageConstruct */
enum DefaultOperator {
	AND = 0,
	OR = 1
}
/**namespace:DefaultLanguageConstruct */
enum OpType {
	index = 0,
	create = 1
}
/**namespace:DefaultLanguageConstruct */
enum Format {
	detailed = 0,
	text = 1
}
/**namespace:DefaultLanguageConstruct */
enum PercolateFormat {
	ids = 0
}
/**namespace:DefaultLanguageConstruct */
interface server_error {
	Error: error;
	Status: integer;
}
/**namespace:DefaultLanguageConstruct */
interface error {
	Index: string;
	Reason: string;
	ResourceId: string;
	ResourceType: string;
	Type: string;
	RootCause: root_cause[];
}
/**namespace:DefaultLanguageConstruct */
interface root_cause {
	Index: string;
	Reason: string;
	ResourceId: string;
	ResourceType: string;
	Type: string;
}
/**namespace:DefaultLanguageConstruct */
interface map<t_key, t_value> {
	Key: t_key;
	Value: t_value;
}
/**namespace:CommonAbstractions.Infer.Types */
interface all_types_marker {
}
/**namespace:CommonAbstractions.Infer.Types */
interface many_types {
	Types: type_name[];
}
/**namespace:CommonAbstractions.Infer.Indices */
interface all_indices_marker {
}
/**namespace:CommonAbstractions.Infer.Indices */
interface many_indices {
	Indices: index_name[];
}
/**namespace:Cluster.NodesStats */
interface extended_memory_stats extends os_memory_stats {
	free_percent: integer;
	used_percent: integer;
}
/**namespace:Cluster.NodesStats */
interface os_memory_stats {
	total: string;
	total_in_bytes: long;
	free: string;
	free_in_bytes: long;
	used: string;
	used_in_bytes: long;
}
/**namespace:Cluster.NodesStats */
interface c_p_u_stats {
	percent: integer;
	sys: string;
	sys_in_millis: long;
	user: string;
	user_in_millis: long;
	total: string;
	total_in_millis: long;
}
/**namespace:Cluster.NodesStats */
interface process_memory_stats {
	resident: string;
	resident_in_bytes: long;
	share: string;
	share_in_bytes: long;
	total_virtual: string;
	total_virtual_in_bytes: long;
}
/**namespace:Cluster.NodesStats */
interface memory_stats {
	heap_used: string;
	heap_used_in_bytes: long;
	heap_used_percent: long;
	heap_committed: string;
	heap_committed_in_bytes: long;
	heap_max: string;
	heap_max_in_bytes: long;
	non_heap_used: string;
	non_heap_used_in_bytes: long;
	non_heap_committed: string;
	non_heap_committed_in_bytes: long;
	/**custom_serialization */
	pools: map<string, j_v_m_pool>[];
}
/**namespace:Cluster.NodesStats */
interface thread_stats {
	count: long;
	peak_count: long;
}
/**namespace:Cluster.NodesStats */
interface garbage_collection_stats {
	/**custom_serialization */
	collectors: map<string, garbage_collection_generation_stats>[];
}
/**namespace:Cluster.NodesStats */
interface garbage_collection_generation_stats {
	collection_count: long;
	collection_time: string;
	collection_time_in_millis: long;
}
/**namespace:Cluster.NodesStats */
interface node_buffer_pool {
	count: long;
	used: string;
	used_in_bytes: long;
	total_capacity: string;
	total_capacity_in_bytes: long;
}
/**namespace:Cluster.NodesStats */
interface jvm_classes_stats {
	current_loaded_count: long;
	total_loaded_count: long;
	total_unloaded_count: long;
}
/**namespace:Cluster.NodesStats */
interface j_v_m_pool {
	used: string;
	used_in_bytes: long;
	max: string;
	max_in_bytes: long;
	peak_used: string;
	peak_used_in_bytes: long;
	peak_max: string;
	peak_max_in_bytes: long;
}
/**namespace:Cluster.NodesStats */
interface total_file_system_stats {
	available: string;
	available_in_bytes: long;
	free: string;
	free_in_bytes: long;
	total: string;
	total_in_bytes: long;
}
/**namespace:Cluster.NodesStats */
interface data_path_stats {
	path: string;
	mount: string;
	type: string;
	spins: boolean;
	total: string;
	total_in_bytes: long;
	free: string;
	free_in_bytes: long;
	available: string;
	available_in_bytes: long;
	disk_reads: long;
	disk_writes: long;
	disk_read_size: string;
	disk_read_size_in_bytes: long;
	disk_write_size: string;
	disk_write_size_in_bytes: long;
	disk_queue: string;
}
