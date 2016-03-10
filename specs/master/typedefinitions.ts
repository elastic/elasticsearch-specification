interface short {}
interface byte {}
interface integer {}
interface long {}
interface float {}
interface double {}

/**namespace:DefaultLanguageConstruct */
interface Map<TKey, TValue> {
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
/**namespace:Cat */
interface CatResponse<TCatRecord> extends Response {
	Records: TCatRecord[];
}
/**namespace:Cat.CatAliases */
interface CatAliasesRequest extends Request {
	/**ambiguous_origin*/
	Local: boolean;
	/**ambiguous_origin*/
	MasterTimeout: Time;
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
interface Request {
}
/**namespace:CommonOptions.TimeUnit */
/**custom_serialization*/
interface Time {
	Factor: double;
	Interval: TimeUnit;
	Milliseconds: double;
}
/**namespace:Cat.CatAllocation */
interface CatAllocationRequest extends Request {
	/**ambiguous_origin*/
	Bytes: Bytes;
	/**ambiguous_origin*/
	Local: boolean;
	/**ambiguous_origin*/
	MasterTimeout: Time;
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
interface CatCountRequest extends Request {
	/**ambiguous_origin*/
	Local: boolean;
	/**ambiguous_origin*/
	MasterTimeout: Time;
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
interface CatFielddataRequest extends Request {
	/**ambiguous_origin*/
	Bytes: Bytes;
	/**ambiguous_origin*/
	Local: boolean;
	/**ambiguous_origin*/
	MasterTimeout: Time;
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
interface CatHealthRequest extends Request {
	/**ambiguous_origin*/
	Local: boolean;
	/**ambiguous_origin*/
	MasterTimeout: Time;
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
interface CatIndicesRequest extends Request {
	/**ambiguous_origin*/
	Bytes: Bytes;
	/**ambiguous_origin*/
	Local: boolean;
	/**ambiguous_origin*/
	MasterTimeout: Time;
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
interface CatMasterRequest extends Request {
	/**ambiguous_origin*/
	Local: boolean;
	/**ambiguous_origin*/
	MasterTimeout: Time;
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
interface CatNodesRequest extends Request {
	/**ambiguous_origin*/
	Local: boolean;
	/**ambiguous_origin*/
	MasterTimeout: Time;
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
interface CatPendingTasksRequest extends Request {
	/**ambiguous_origin*/
	Local: boolean;
	/**ambiguous_origin*/
	MasterTimeout: Time;
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
interface CatPluginsRequest extends Request {
	/**ambiguous_origin*/
	Local: boolean;
	/**ambiguous_origin*/
	MasterTimeout: Time;
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
interface CatRecoveryRequest extends Request {
	/**ambiguous_origin*/
	Bytes: Bytes;
	/**ambiguous_origin*/
	MasterTimeout: Time;
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
interface CatSegmentsRequest extends Request {
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
interface CatShardsRequest extends Request {
	/**ambiguous_origin*/
	Local: boolean;
	/**ambiguous_origin*/
	MasterTimeout: Time;
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
interface CatThreadPoolRequest extends Request {
	/**ambiguous_origin*/
	Local: boolean;
	/**ambiguous_origin*/
	MasterTimeout: Time;
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
interface ClusterHealthRequest extends Request {
	/**ambiguous_origin*/
	Level: Level;
	/**ambiguous_origin*/
	Local: boolean;
	/**ambiguous_origin*/
	MasterTimeout: Time;
	/**ambiguous_origin*/
	Timeout: Time;
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
interface ClusterHealthResponse extends Response {
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
	indices: Map<string, IndexHealthStats>;
}
/**namespace:DefaultLanguageConstruct */
interface Response {
}
/**namespace:Cluster.ClusterHealth */
interface IndexHealthStats {
	status: string;
	number_of_shards: integer;
	number_of_replicas: integer;
	active_primary_shards: integer;
	active_shards: integer;
	relocating_shards: integer;
	initializing_shards: integer;
	unassigned_shards: integer;
	/**custom_serialization */
	shards: Map<string, ShardHealthStats>;
}
/**namespace:Cluster.ClusterHealth */
interface ShardHealthStats {
	status: string;
	primary_active: boolean;
	active_shards: integer;
	relocating_shards: integer;
	initializing_shards: integer;
	unassigned_shards: integer;
}
/**namespace:Cluster.ClusterPendingTasks */
interface ClusterPendingTasksRequest extends Request {
	/**ambiguous_origin*/
	Local: boolean;
	/**ambiguous_origin*/
	MasterTimeout: Time;
	/**ambiguous_origin*/
	Source: string;
	/**ambiguous_origin*/
	FilterPath: string;
}
/**namespace:Cluster.ClusterPendingTasks */
interface ClusterPendingTasksResponse extends Response {
	tasks: PendingTask[];
}
/**namespace:Cluster.ClusterPendingTasks */
interface PendingTask {
	insert_order: integer;
	priority: string;
	source: string;
	time_in_queue_millis: integer;
	time_in_queue: string;
}
/**namespace:Cluster.ClusterReroute */
/**custom_serialization*/
interface ClusterRerouteRequest extends Request {
	commands: ClusterRerouteCommand[];
	/**ambiguous_origin*/
	DryRun: boolean;
	/**ambiguous_origin*/
	Explain: boolean;
	/**ambiguous_origin*/
	Metric: string[];
	/**ambiguous_origin*/
	MasterTimeout: Time;
	/**ambiguous_origin*/
	Timeout: Time;
	/**ambiguous_origin*/
	Source: string;
	/**ambiguous_origin*/
	FilterPath: string;
}
/**namespace:Cluster.ClusterReroute.Commands */
interface ClusterRerouteCommand {
	Name: string;
}
/**namespace:Cluster.ClusterReroute */
interface ClusterRerouteResponse extends Response {
	Version: integer;
	state: ClusterRerouteState;
	explanations: ClusterRerouteExplanation[];
}
/**namespace:Cluster.ClusterReroute */
interface ClusterRerouteState {
	version: integer;
	master_node: string;
	blocks: BlockState;
	/**custom_serialization */
	nodes: Map<string, NodeState>;
	routing_table: RoutingTableState;
	routing_nodes: RoutingNodesState;
}
/**namespace:Cluster.ClusterState */
interface BlockState {
	read_only: boolean;
}
/**namespace:Cluster.ClusterState */
interface NodeState {
	name: string;
	transport_address: string;
	/**custom_serialization */
	attributes: Map<string, string>;
}
/**namespace:Cluster.ClusterState */
interface RoutingTableState {
	/**custom_serialization */
	indices: Map<string, IndexRoutingTable>;
}
/**namespace:Cluster.ClusterState */
interface IndexRoutingTable {
	/**custom_serialization */
	shards: Map<string, RoutingShard[]>;
}
/**namespace:Cluster.ClusterState */
interface RoutingShard {
	allocation_id: AllocationId;
	state: string;
	primary: boolean;
	node: string;
	relocating_node: string;
	shard: integer;
	version: long;
	index: string;
}
/**namespace:Cluster.ClusterState */
interface AllocationId {
	id: string;
}
/**namespace:Cluster.ClusterState */
interface RoutingNodesState {
	unassigned: RoutingShard[];
	nodes: Map<string, RoutingShard[]>;
}
/**namespace:Cluster.ClusterReroute */
interface ClusterRerouteExplanation {
	command: string;
	parameters: ClusterRerouteParameters;
	decisions: ClusterRerouteDecision[];
}
/**namespace:Cluster.ClusterReroute */
interface ClusterRerouteParameters {
	index: string;
	shard: integer;
	from_node: string;
	to_node: string;
	node: string;
	allow_primary: boolean;
}
/**namespace:Cluster.ClusterReroute */
interface ClusterRerouteDecision {
	decider: string;
	decision: string;
	explanation: string;
}
/**namespace:Cluster.ClusterSettings.ClusterGetSettings */
interface ClusterGetSettingsRequest extends Request {
	/**ambiguous_origin*/
	FlatSettings: boolean;
	/**ambiguous_origin*/
	MasterTimeout: Time;
	/**ambiguous_origin*/
	Timeout: Time;
	/**ambiguous_origin*/
	Source: string;
	/**ambiguous_origin*/
	FilterPath: string;
}
/**namespace:Cluster.ClusterSettings.ClusterGetSettings */
interface ClusterGetSettingsResponse extends Response {
	persistent: Map<string, any>;
	transient: Map<string, any>;
}
/**namespace:Cluster.ClusterSettings.ClusterPutSettings */
interface ClusterPutSettingsRequest extends Request {
	persistent: Map<string, any>;
	transient: Map<string, any>;
	/**ambiguous_origin*/
	FlatSettings: boolean;
	/**ambiguous_origin*/
	MasterTimeout: Time;
	/**ambiguous_origin*/
	Timeout: Time;
	/**ambiguous_origin*/
	Source: string;
	/**ambiguous_origin*/
	FilterPath: string;
}
/**namespace:Cluster.ClusterSettings.ClusterPutSettings */
interface ClusterPutSettingsResponse extends Response {
	acknowledged: boolean;
	persistent: Map<string, any>;
	transient: Map<string, any>;
}
/**namespace:Cluster.ClusterState */
interface ClusterStateRequest extends Request {
	/**ambiguous_origin*/
	Local: boolean;
	/**ambiguous_origin*/
	MasterTimeout: Time;
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
interface ClusterStateResponse extends Response {
	cluster_name: string;
	master_node: string;
	state_uuid: string;
	version: long;
	/**custom_serialization */
	nodes: Map<string, NodeState>;
	metadata: MetadataState;
	routing_table: RoutingTableState;
	routing_nodes: RoutingNodesState;
	blocks: BlockState;
}
/**namespace:Cluster.ClusterState */
interface MetadataState {
	/**custom_serialization */
	templates: Map<string, TemplateMapping>;
	cluster_uuid: string;
	/**custom_serialization */
	indices: Map<string, MetadataIndexState>;
}
/**namespace:Indices.IndexSettings.IndexTemplates.GetIndexTemplate */
interface TemplateMapping {
	template: string;
	order: integer;
	settings: Map<string, any>;
	mappings: Map<TypeName, TypeMapping>;
	warmers: Map<TypeName, Warmer>;
	aliases: Map<IndexName, Alias>;
}
/**namespace:CommonAbstractions.Infer.TypeName */
interface TypeName {
	Name: string;
}
/**namespace:Mapping.Transform */
/**custom_serialization*/
interface MappingTransform {
	script: string;
	script_file: string;
	params: Map<string, string>;
	lang: string;
}
/**namespace:Mapping.MetaFields.Source */
/**custom_serialization*/
interface SourceField {
	enabled: boolean;
	compress: boolean;
	compress_threshold: string;
	includes: string[];
	excludes: string[];
}
/**namespace:Mapping.MetaFields.All */
/**custom_serialization*/
interface AllField {
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
interface ParentField {
	type: TypeName;
}
/**namespace:Mapping.MetaFields.Routing */
/**custom_serialization*/
interface RoutingField {
	required: boolean;
}
/**namespace:Mapping.MetaFields.Index */
/**custom_serialization*/
interface IndexField {
	enabled: boolean;
}
/**namespace:Mapping.MetaFields.Size */
/**custom_serialization*/
interface SizeField {
	enabled: boolean;
}
/**namespace:Mapping.MetaFields.Timestamp */
/**custom_serialization*/
interface TimestampField {
	enabled: boolean;
	path: Field;
	format: string;
	default: string;
	ignore_missing: boolean;
}
/**namespace:CommonAbstractions.Infer.Field */
interface Field {
	Name: string;
	Boost: double;
}
/**namespace:Mapping.MetaFields.FieldNames */
/**custom_serialization*/
interface FieldNamesField {
	enabled: boolean;
}
/**namespace:Mapping.MetaFields.Ttl */
/**custom_serialization*/
interface TtlField {
	enabled: boolean;
	default: Time;
}
/**namespace:Mapping.DynamicTemplate */
/**custom_serialization*/
interface DynamicTemplate {
	match: string;
	unmatch: string;
	match_mapping_type: string;
	path_match: string;
	path_unmatch: string;
	mapping: Property;
}
/**namespace:Mapping.Types */
interface Property {
	Name: PropertyName;
	type: TypeName;
	index_name: string;
	store: boolean;
	doc_values: boolean;
	fields: Map<PropertyName, Property>;
	similarity: SimilarityOption;
	copy_to: Field[];
}
/**namespace:CommonAbstractions.Infer.PropertyName */
interface PropertyName {
	Name: string;
}
/**namespace:Indices.Warmers */
interface Warmer {
	types: TypeName[];
	source: SearchRequest;
}
/**namespace:CommonAbstractions.Infer.IndexName */
interface IndexName {
	Name: string;
}
/**namespace:Search.Search.Sort */
interface Sort {
	SortKey: Field;
	missing: string;
	order: SortOrder;
	mode: SortMode;
	nested_filter: QueryContainer;
	nested_path: Field;
}
/**namespace:QueryDsl.Abstractions.Container */
/**custom_serialization*/
interface QueryContainer {
}
/**namespace:Search.Suggesters */
/**custom_serialization*/
interface SuggestBucket {
	text: string;
	term: TermSuggester;
	phrase: PhraseSuggester;
	completion: CompletionSuggester;
}
/**namespace:Search.Suggesters.TermSuggester */
/**custom_serialization*/
interface TermSuggester {
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
interface PhraseSuggester {
	gram_size: integer;
	real_word_error_likelihood: double;
	confidence: double;
	max_errors: double;
	separator: string;
	direct_generator: DirectGenerator[];
	highlight: PhraseSuggestHighlight;
	collate: PhraseSuggestCollate;
}
/**namespace:Search.Suggesters.PhraseSuggester */
/**custom_serialization*/
interface DirectGenerator {
	field: Field;
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
interface PhraseSuggestHighlight {
	pre_tag: string;
	post_tag: string;
}
/**namespace:Search.Suggesters.PhraseSuggester */
/**custom_serialization*/
interface PhraseSuggestCollate {
	query: Script;
	prune: boolean;
}
/**namespace:CommonOptions.Scripting */
/**custom_serialization*/
interface Script {
	/**custom_serialization */
	params: Map<string, any>;
	lang: string;
}
/**namespace:Search.Suggesters.CompletionSuggester */
/**custom_serialization*/
interface CompletionSuggester {
	fuzzy: FuzzySuggester;
	context: Map<string, any>;
}
/**namespace:Search.Suggesters.CompletionSuggester */
/**custom_serialization*/
interface FuzzySuggester {
	transpositions: boolean;
	min_length: integer;
	prefix_length: integer;
	fuzziness: Fuzziness;
	unicode_aware: boolean;
}
/**namespace:Search.Search.Highlighting */
/**custom_serialization*/
interface Highlight {
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
	fields: Map<Field, HighlightField>;
	require_field_match: boolean;
	boundary_chars: string;
}
/**namespace:Search.Search.Highlighting */
/**custom_serialization*/
interface HighlightField {
	Field: Field;
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
	matched_fields: Field[];
	highlight_query: QueryContainer;
}
/**namespace:Search.Search.Rescoring */
/**custom_serialization*/
interface Rescore {
	window_size: integer;
	query: RescoreQuery;
}
/**namespace:Search.Search.Rescoring */
/**custom_serialization*/
interface RescoreQuery {
	rescore_query: QueryContainer;
	query_weight: double;
	rescore_query_weight: double;
	score_mode: ScoreMode;
}
/**namespace:CommonOptions.Scripting */
/**custom_serialization*/
interface ScriptField {
	script: Script;
}
/**namespace:Search.Search.SourceFiltering */
/**custom_serialization*/
interface SourceFilter {
	include: Field[];
	exclude: Field[];
}
/**namespace:Aggregations */
/**custom_serialization*/
interface AggregationContainer {
	/**custom_serialization */
	meta: Map<string, any>;
	avg: AverageAggregation;
	date_histogram: DateHistogramAggregation;
	percentiles: PercentilesAggregation;
	date_range: DateRangeAggregation;
	extended_stats: ExtendedStatsAggregation;
	filter: FilterAggregation;
	filters: FiltersAggregation;
	geo_distance: GeoDistanceAggregation;
	geohash_grid: GeoHashGridAggregation;
	geo_bounds: GeoBoundsAggregation;
	histogram: HistogramAggregation;
	global: GlobalAggregation;
	ip_range: IpRangeAggregation;
	max: MaxAggregation;
	min: MinAggregation;
	cardinality: CardinalityAggregation;
	missing: MissingAggregation;
	nested: NestedAggregation;
	reverse_nested: ReverseNestedAggregation;
	range: RangeAggregation;
	stats: StatsAggregator;
	sum: SumAggregation;
	terms: TermsAggregation;
	significant_terms: SignificantTermsAggregation;
	value_count: ValueCountAggregation;
	percentile_ranks: PercentileRanksAggregation;
	top_hits: TopHitsAggregation;
	children: ChildrenAggregation;
	scripted_metric: ScriptedMetricAggregation;
	avg_bucket: AverageBucketAggregation;
	derivative: DerivativeAggregation;
	max_bucket: MaxBucketAggregation;
	min_bucket: MinBucketAggregation;
	sum_bucket: SumBucketAggregation;
	moving_avg: MovingAverageAggregation;
	cumulative_sum: CumulativeSumAggregation;
	serial_diff: SerialDifferencingAggregation;
	bucket_script: BucketScriptAggregation;
	bucket_selector: BucketSelectorAggregation;
	sampler: SamplerAggregation;
	aggs: Map<string, AggregationContainer>;
}
/**namespace:Aggregations.Metric.Average */
interface AverageAggregation {
}
/**namespace:Aggregations.Bucket.DateHistogram */
interface DateHistogramAggregation {
	field: Field;
	script: Script;
	params: Map<string, any>;
	interval: Union<DateInterval, Time>;
	format: string;
	min_doc_count: integer;
	time_zone: string;
	factor: integer;
	offset: string;
	order: HistogramOrder;
	extended_bounds: ExtendedBounds<Date>;
	missing: Date;
}
/**namespace:CommonAbstractions.Union */
/**custom_serialization*/
interface Union<TFirst, TSecond> {
}
/**namespace:Aggregations.Bucket.Histogram */
/**custom_serialization*/
interface HistogramOrder {
	Key: string;
	Order: SortOrder;
	CountAscending: HistogramOrder;
	CountDescending: HistogramOrder;
	KeyAscending: HistogramOrder;
	KeyDescending: HistogramOrder;
}
/**namespace:Aggregations.Bucket.Histogram */
interface ExtendedBounds<T> {
	min: T;
	max: T;
}
/**namespace:Aggregations.Metric.Percentiles */
interface PercentilesAggregation {
	Percents: double[];
	Method: PercentilesMethod;
}
/**namespace:Aggregations.Metric.Percentiles.Methods */
interface PercentilesMethod {
}
/**namespace:Aggregations.Bucket.DateRange */
interface DateRangeAggregation {
	field: Field;
	format: string;
	ranges: DateRangeExpression[];
}
/**namespace:Aggregations.Bucket.DateRange */
/**custom_serialization*/
interface DateRangeExpression {
	from: DateMath;
	to: DateMath;
	key: string;
}
/**namespace:CommonOptions.DateMath */
/**custom_serialization*/
interface DateMath {
	Now: DateMathExpression;
}
/**namespace:CommonOptions.DateMath */
/**custom_serialization*/
interface DateMathExpression extends DateMath {
}
/**namespace:Aggregations.Metric.ExtendedStats */
interface ExtendedStatsAggregation {
}
/**namespace:Aggregations.Bucket.Filter */
interface FilterAggregation {
	filter: QueryContainer;
}
/**namespace:Aggregations.Bucket.Filters */
interface FiltersAggregation {
	filters: Union<Map<string, QueryContainer>, QueryContainer[]>;
	other_bucket: boolean;
	other_bucket_key: string;
}
/**namespace:QueryDsl.Abstractions.Container */
/**custom_serialization*/
interface QueryContainer {
	IsConditionless: boolean;
	IsStrict: boolean;
	IsVerbatim: boolean;
	RawQuery: RawQuery;
	bool: BoolQuery;
	match_all: MatchAllQuery;
	term: TermQuery;
	wildcard: WildcardQuery;
	prefix: PrefixQuery;
	boosting: BoostingQuery;
	ids: IdsQuery;
	limit: LimitQuery;
	constant_score: ConstantScoreQuery;
	dis_max: DisMaxQuery;
	multi_match: MultiMatchQuery;
	match: MatchQuery;
	fuzzy: FuzzyQuery;
	geo_shape: GeoShapeQuery;
	common: CommonTermsQuery;
	terms: TermsQuery;
	range: RangeQuery;
	regexp: RegexpQuery;
	has_child: HasChildQuery;
	has_parent: HasParentQuery;
	span_term: SpanTermQuery;
	simple_query_string: SimpleQueryStringQuery;
	query_string: QueryStringQuery;
	mlt: MoreLikeThisQuery;
	span_first: SpanFirstQuery;
	span_or: SpanOrQuery;
	span_near: SpanNearQuery;
	span_not: SpanNotQuery;
	span_containing: SpanContainingQuery;
	span_within: SpanWithinQuery;
	span_multi: SpanMultiTermQuery;
	nested: NestedQuery;
	indices: IndicesQuery;
	function_score: FunctionScoreQuery;
	template: TemplateQuery;
	geo_bounding_box: GeoBoundingBoxQuery;
	geo_distance: GeoDistanceQuery;
	geo_polygon: GeoPolygonQuery;
	geo_distance_range: GeoDistanceRangeQuery;
	geohash_cell: GeoHashCellQuery;
	script: ScriptQuery;
	exists: ExistsQuery;
	missing: MissingQuery;
	type: TypeQuery;
	filtered: FilteredQuery;
	and: AndQuery;
	or: OrQuery;
	not: NotQuery;
}
/**namespace:QueryDsl.NestSpecific */
interface RawQuery {
	Raw: string;
}
/**namespace:QueryDsl.Compound.Bool */
/**custom_serialization*/
interface BoolQuery {
	must: QueryContainer[];
	must_not: QueryContainer[];
	should: QueryContainer[];
	filter: QueryContainer[];
	minimum_should_match: MinimumShouldMatch;
	disable_coord: boolean;
	Locked: boolean;
}
/**namespace:CommonOptions.MinimumShouldMatch */
/**custom_serialization*/
interface MinimumShouldMatch extends Union<integer, string> {
}
/**namespace:QueryDsl */
/**custom_serialization*/
interface MatchAllQuery {
	norm_field: string;
}
/**namespace:QueryDsl.TermLevel.Term */
/**custom_serialization*/
interface TermQuery {
	value: any;
}
/**namespace:QueryDsl.TermLevel.Wildcard */
/**custom_serialization*/
interface WildcardQuery {
	/**custom_serialization */
	rewrite: RewriteMultiTerm;
}
/**namespace:QueryDsl.TermLevel.Prefix */
/**custom_serialization*/
interface PrefixQuery {
	/**custom_serialization */
	rewrite: RewriteMultiTerm;
}
/**namespace:QueryDsl.Compound.Boosting */
/**custom_serialization*/
interface BoostingQuery {
	positive: QueryContainer;
	negative: QueryContainer;
	negative_boost: double;
}
/**namespace:QueryDsl.TermLevel.Ids */
/**custom_serialization*/
interface IdsQuery {
	types: Types;
	values: Id[];
}
/**namespace:CommonAbstractions.Infer.Types */
/**custom_serialization*/
interface Types extends Union<AllTypesMarker, ManyTypes> {
	All: AllTypesMarker;
	AllTypes: AllTypesMarker;
}
/**namespace:CommonAbstractions.Infer.Id */
/**custom_serialization*/
interface Id {
}
/**namespace:QueryDsl.Compound.Limit */
/**custom_serialization*/
interface LimitQuery {
	limit: integer;
}
/**namespace:QueryDsl.Compound.ConstantScore */
/**custom_serialization*/
interface ConstantScoreQuery {
	filter: QueryContainer;
}
/**namespace:QueryDsl.Compound.Dismax */
/**custom_serialization*/
interface DisMaxQuery {
	tie_breaker: double;
	queries: QueryContainer[];
}
/**namespace:QueryDsl.FullText.MultiMatch */
/**custom_serialization*/
interface MultiMatchQuery {
	/**custom_serialization */
	type: TextQueryType;
	query: string;
	analyzer: string;
	/**custom_serialization */
	fuzzy_rewrite: RewriteMultiTerm;
	fuzziness: Fuzziness;
	cutoff_frequency: double;
	prefix_length: integer;
	max_expansions: integer;
	slop: integer;
	lenient: boolean;
	use_dis_max: boolean;
	tie_breaker: double;
	minimum_should_match: MinimumShouldMatch;
	operator: Operator;
	fields: Field[];
	zero_terms_query: ZeroTermsQuery;
}
/**namespace:CommonOptions.Fuzziness */
/**custom_serialization*/
interface Fuzziness {
	Auto: boolean;
	EditDistance: integer;
	Ratio: double;
}
/**namespace:QueryDsl.FullText.Match */
/**custom_serialization*/
interface MatchQuery {
	type: string;
	query: string;
	analyzer: string;
	/**custom_serialization */
	fuzzy_rewrite: RewriteMultiTerm;
	fuzziness: Fuzziness;
	fuzzy_transpositions: boolean;
	cutoff_frequency: double;
	prefix_length: integer;
	max_expansions: integer;
	slop: integer;
	lenient: boolean;
	minimum_should_match: MinimumShouldMatch;
	operator: Operator;
	zero_terms_query: ZeroTermsQuery;
}
/**namespace:QueryDsl.TermLevel.Fuzzy */
/**custom_serialization*/
interface FuzzyQuery {
	prefix_length: integer;
	rewrite: RewriteMultiTerm;
	max_expansions: integer;
	transpositions: boolean;
}
/**namespace:QueryDsl.Geo.Shape */
/**custom_serialization*/
interface GeoShapeQuery {
}
/**namespace:QueryDsl.FullText.CommonTerms */
/**custom_serialization*/
interface CommonTermsQuery {
	query: string;
	cutoff_frequency: double;
	/**custom_serialization */
	low_freq_operator: Operator;
	/**custom_serialization */
	high_freq_operator: Operator;
	minimum_should_match: MinimumShouldMatch;
	analyzer: string;
	disable_coord: boolean;
}
/**namespace:QueryDsl.TermLevel.Terms */
/**custom_serialization*/
interface TermsQuery {
	MinimumShouldMatch: MinimumShouldMatch;
	DisableCoord: boolean;
	Terms: any[];
	TermsLookup: FieldLookup;
}
/**namespace:QueryDsl.Abstractions.FieldLookup */
/**custom_serialization*/
interface FieldLookup {
	index: IndexName;
	type: TypeName;
	id: Id;
	path: Field;
}
/**namespace:QueryDsl.TermLevel.Range */
/**custom_serialization*/
interface RangeQuery {
}
/**namespace:QueryDsl.TermLevel.Regexp */
/**custom_serialization*/
interface RegexpQuery {
	value: string;
	flags: string;
	max_determinized_states: integer;
}
/**namespace:QueryDsl.Joining.HasChild */
/**custom_serialization*/
interface HasChildQuery {
	type: TypeName;
	score_mode: ChildScoreMode;
	min_children: integer;
	max_children: integer;
	query: QueryContainer;
	inner_hits: InnerHits;
}
/**namespace:Search.Search.InnerHits */
/**custom_serialization*/
interface InnerHits {
	name: string;
	from: integer;
	size: integer;
	sort: Sort[];
	highlight: Highlight;
	explain: boolean;
	_source: SourceFilter;
	version: boolean;
	fielddata_fields: Field[];
	script_fields: Map<string, ScriptField>;
}
/**namespace:QueryDsl.Joining.HasParent */
/**custom_serialization*/
interface HasParentQuery {
	type: TypeName;
	score_mode: ParentScoreMode;
	query: QueryContainer;
	inner_hits: InnerHits;
}
/**namespace:QueryDsl.Span.Term */
/**custom_serialization*/
interface SpanTermQuery {
}
/**namespace:QueryDsl.FullText.SimpleQueryString */
/**custom_serialization*/
interface SimpleQueryStringQuery {
	fields: Field[];
	query: string;
	analyzer: string;
	default_operator: Operator;
	flags: SimpleQueryStringFlags;
	locale: string;
	lowercase_expanded_terms: boolean;
	lenient: boolean;
	analyze_wildcard: boolean;
	minimum_should_match: MinimumShouldMatch;
}
/**namespace:QueryDsl.FullText.QueryString */
/**custom_serialization*/
interface QueryStringQuery {
	query: string;
	default_field: Field;
	default_operator: Operator;
	analyzer: string;
	quote_analyzer: string;
	allow_leading_wildcard: boolean;
	lowercase_expanded_terms: boolean;
	enable_position_increments: boolean;
	fuzzy_max_expansions: integer;
	fuziness: Fuzziness;
	fuzzy_prefix_length: integer;
	phrase_slop: double;
	analyze_wildcard: boolean;
	auto_generate_phrase_queries: boolean;
	max_determinized_states: integer;
	minimum_should_match: MinimumShouldMatch;
	lenient: boolean;
	locale: string;
	time_zone: string;
	fields: Field[];
	use_dis_max: boolean;
	tie_breaker: double;
	rewrite: RewriteMultiTerm;
	fuzzy_rewrite: RewriteMultiTerm;
	quote_field_suffix: string;
	escape: boolean;
}
/**namespace:QueryDsl.Specialized.MoreLikeThis */
/**custom_serialization*/
interface MoreLikeThisQuery {
	fields: Field[];
	like: Like[];
	unlike: Like[];
	max_query_terms: integer;
	min_term_freq: integer;
	min_doc_freq: integer;
	max_doc_freq: integer;
	min_word_len: integer;
	max_word_len: integer;
	stop_words: StopWords;
	analyzer: string;
	minimum_should_match: MinimumShouldMatch;
	boost_terms: double;
	include: boolean;
}
/**namespace:QueryDsl.Specialized.MoreLikeThis.Like */
/**custom_serialization*/
interface Like extends Union<string, LikeDocument> {
}
/**namespace:QueryDsl.Specialized.MoreLikeThis.Like */
/**custom_serialization*/
interface LikeDocument {
	_index: IndexName;
	_type: TypeName;
	_id: Id;
	fields: Field[];
	_routing: string;
	doc: any;
	per_field_analyzer: Map<Field, string>;
	CanBeFlattened: boolean;
}
/**namespace:Analysis */
/**custom_serialization*/
interface StopWords extends Union<string, string[]> {
}
/**namespace:QueryDsl.Span.First */
/**custom_serialization*/
interface SpanFirstQuery {
	match: SpanQuery;
	end: integer;
}
/**namespace:QueryDsl.Span */
/**custom_serialization*/
interface SpanQuery {
	span_term: SpanTermQuery;
	span_first: SpanFirstQuery;
	span_near: SpanNearQuery;
	span_or: SpanOrQuery;
	span_not: SpanNotQuery;
	span_containing: SpanContainingQuery;
	span_within: SpanWithinQuery;
	span_multi: SpanMultiTermQuery;
}
/**namespace:QueryDsl.Span.Near */
/**custom_serialization*/
interface SpanNearQuery {
	clauses: SpanQuery[];
	slop: integer;
	in_order: boolean;
	collect_payloads: boolean;
}
/**namespace:QueryDsl.Span.Or */
/**custom_serialization*/
interface SpanOrQuery {
	clauses: SpanQuery[];
}
/**namespace:QueryDsl.Span.Not */
/**custom_serialization*/
interface SpanNotQuery {
	include: SpanQuery;
	exclude: SpanQuery;
	pre: integer;
	post: integer;
	dist: integer;
}
/**namespace:QueryDsl.Span.Containing */
/**custom_serialization*/
interface SpanContainingQuery {
	little: SpanQuery;
	big: SpanQuery;
}
/**namespace:QueryDsl.Span.Within */
/**custom_serialization*/
interface SpanWithinQuery {
	little: SpanQuery;
	big: SpanQuery;
}
/**namespace:QueryDsl.Span.MultiTerm */
/**custom_serialization*/
interface SpanMultiTermQuery {
	match: QueryContainer;
}
/**namespace:QueryDsl.Joining.Nested */
/**custom_serialization*/
interface NestedQuery {
	score_mode: NestedScoreMode;
	query: QueryContainer;
	path: Field;
	inner_hits: InnerHits;
}
/**namespace:QueryDsl.Compound.Indices */
/**custom_serialization*/
interface IndicesQuery {
	/**custom_serialization */
	indices: Indices;
	query: QueryContainer;
	/**custom_serialization */
	no_match_query: QueryContainer;
}
/**namespace:CommonAbstractions.Infer.Indices */
/**custom_serialization*/
interface Indices extends Union<AllIndicesMarker, ManyIndices> {
	All: Indices;
	AllIndices: Indices;
}
/**namespace:QueryDsl.Compound.FunctionScore */
/**custom_serialization*/
interface FunctionScoreQuery {
	query: QueryContainer;
	functions: ScoreFunction[];
	max_boost: double;
	score_mode: FunctionScoreMode;
	boost_mode: FunctionBoostMode;
	min_score: double;
}
/**namespace:QueryDsl.Compound.FunctionScore.Functions */
interface ScoreFunction {
	filter: QueryContainer;
	weight: double;
}
/**namespace:QueryDsl.Specialized.Template */
/**custom_serialization*/
interface TemplateQuery {
	file: string;
	inline: string;
	id: Id;
	params: Map<string, any>;
}
/**namespace:QueryDsl.Geo.BoundingBox */
/**custom_serialization*/
interface GeoBoundingBoxQuery {
	BoundingBox: BoundingBox;
	type: GeoExecution;
	coerce: boolean;
	ignore_malformed: boolean;
	validation_method: GeoValidationMethod;
}
/**namespace:QueryDsl.Geo.BoundingBox */
/**custom_serialization*/
interface BoundingBox {
	top_left: GeoLocation;
	bottom_right: GeoLocation;
}
/**namespace:QueryDsl.Geo */
interface GeoLocation {
	lat: double;
	lon: double;
}
/**namespace:QueryDsl.Geo.Distance */
/**custom_serialization*/
interface GeoDistanceQuery {
	Location: GeoLocation;
	distance: Distance;
	optimize_bbox: GeoOptimizeBBox;
	distance_type: GeoDistanceType;
	coerce: boolean;
	ignore_malformed: boolean;
	validation_method: GeoValidationMethod;
}
/**namespace:CommonOptions.Geo */
/**custom_serialization*/
interface Distance {
	Precision: double;
	Unit: DistanceUnit;
}
/**namespace:QueryDsl.Geo.Polygon */
/**custom_serialization*/
interface GeoPolygonQuery {
	Points: GeoLocation[];
	coerce: boolean;
	ignore_malformed: boolean;
	validation_method: GeoValidationMethod;
}
/**namespace:QueryDsl.Geo.DistanceRange */
/**custom_serialization*/
interface GeoDistanceRangeQuery {
	Location: GeoLocation;
	gte: Distance;
	lte: Distance;
	gt: Distance;
	lt: Distance;
	distance_type: GeoDistanceType;
	optimize_bbox: GeoOptimizeBBox;
	coerce: boolean;
	ignore_malformed: boolean;
	validation_method: GeoValidationMethod;
}
/**namespace:QueryDsl.Geo.HashCell */
/**custom_serialization*/
interface GeoHashCellQuery {
	Location: GeoLocation;
	precision: Union<integer, Distance>;
	neighbors: boolean;
}
/**namespace:QueryDsl.Specialized.Script */
/**custom_serialization*/
interface ScriptQuery {
	inline: string;
	id: Id;
	file: string;
	/**custom_serialization */
	params: Map<string, any>;
	lang: string;
}
/**namespace:QueryDsl.TermLevel.Exists */
/**custom_serialization*/
interface ExistsQuery {
	field: Field;
}
/**namespace:QueryDsl.TermLevel.Missing */
/**custom_serialization*/
interface MissingQuery {
	field: Field;
	existence: boolean;
	null_value: boolean;
}
/**namespace:QueryDsl.TermLevel.Type */
/**custom_serialization*/
interface TypeQuery {
	value: TypeName;
}
/**namespace:QueryDsl.Compound.Filtered */
/**custom_serialization*/
interface FilteredQuery {
	query: QueryContainer;
	filter: QueryContainer;
}
/**namespace:QueryDsl.Compound.And */
/**custom_serialization*/
interface AndQuery {
	filters: QueryContainer[];
}
/**namespace:QueryDsl.Compound.Or */
/**custom_serialization*/
interface OrQuery {
	filters: QueryContainer[];
}
/**namespace:QueryDsl.Compound.Not */
/**custom_serialization*/
interface NotQuery {
	filters: QueryContainer[];
}
/**namespace:Aggregations.Bucket.GeoDistance */
interface GeoDistanceAggregation {
	field: Field;
	origin: GeoLocation;
	unit: DistanceUnit;
	distance_type: GeoDistanceType;
	ranges: Range[];
}
/**namespace:CommonOptions.Range */
/**custom_serialization*/
interface Range {
	from: double;
	to: double;
	key: string;
}
/**namespace:Aggregations.Bucket.GeoHashGrid */
interface GeoHashGridAggregation {
	field: Field;
	size: integer;
	shard_size: integer;
	precision: GeoHashPrecision;
}
/**namespace:Aggregations.Metric.GeoBounds */
interface GeoBoundsAggregation {
	wrap_longitude: boolean;
}
/**namespace:Aggregations.Bucket.Histogram */
interface HistogramAggregation {
	field: Field;
	script: Script;
	interval: double;
	min_doc_count: integer;
	order: HistogramOrder;
	extended_bounds: ExtendedBounds<double>;
	pre_offset: long;
	post_offset: long;
	missing: double;
}
/**namespace:Aggregations.Bucket.Global */
interface GlobalAggregation {
}
/**namespace:Aggregations.Bucket.IpRange */
interface IpRangeAggregation {
	field: Field;
	ranges: IpRange[];
}
/**namespace:Aggregations.Bucket.IpRange */
/**custom_serialization*/
interface IpRange {
	from: string;
	to: string;
	mask: string;
}
/**namespace:Aggregations.Metric.Max */
interface MaxAggregation {
}
/**namespace:Aggregations.Metric.Min */
interface MinAggregation {
}
/**namespace:Aggregations.Metric.Cardinality */
interface CardinalityAggregation {
	precision_threshold: integer;
	rehash: boolean;
}
/**namespace:Aggregations.Bucket.Missing */
interface MissingAggregation {
	field: Field;
}
/**namespace:Aggregations.Bucket.Nested */
interface NestedAggregation {
	path: Field;
}
/**namespace:Aggregations.Bucket.ReverseNested */
interface ReverseNestedAggregation {
	path: Field;
}
/**namespace:Aggregations.Bucket.Range */
interface RangeAggregation {
	field: Field;
	script: Script;
	ranges: Range[];
}
/**namespace:Aggregations.Metric.Stats */
interface StatsAggregator {
}
/**namespace:Aggregations.Metric.Sum */
interface SumAggregation {
}
/**namespace:Aggregations.Bucket.Terms */
interface TermsAggregation {
	field: Field;
	script: Script;
	size: integer;
	shard_size: integer;
	min_doc_count: integer;
	execution_hint: TermsAggregationExecutionHint;
	order: TermsOrder[];
	include: TermsIncludeExclude;
	exclude: TermsIncludeExclude;
	collect_mode: TermsAggregationCollectMode;
	show_term_doc_error_count: boolean;
	missing: string;
}
/**namespace:Aggregations.Bucket.Terms */
/**custom_serialization*/
interface TermsOrder {
	Key: string;
	Order: SortOrder;
	CountAscending: TermsOrder;
	CountDescending: TermsOrder;
	TermAscending: TermsOrder;
	TermDescending: TermsOrder;
}
/**namespace:Aggregations.Bucket.Terms */
/**custom_serialization*/
interface TermsIncludeExclude {
	pattern: string;
	flags: string;
	Values: string[];
}
/**namespace:Aggregations.Bucket.SignificantTerms */
interface SignificantTermsAggregation {
	field: Field;
	size: integer;
	shard_size: integer;
	min_doc_count: integer;
	execution_hint: TermsAggregationExecutionHint;
	include: Map<string, string>;
	exclude: Map<string, string>;
	mutual_information: MutualInformationHeuristic;
	chi_square: ChiSquareHeuristic;
	gnd: GoogleNormalizedDistanceHeuristic;
	percentage: PercentageScoreHeuristic;
	script_heuristic: ScriptedHeuristic;
	background_filter: QueryContainer;
}
/**namespace:Aggregations.Bucket.SignificantTerms.Heuristics */
/**custom_serialization*/
interface MutualInformationHeuristic {
	include_negatives: boolean;
	background_is_superset: boolean;
}
/**namespace:Aggregations.Bucket.SignificantTerms.Heuristics */
/**custom_serialization*/
interface ChiSquareHeuristic {
	include_negatives: boolean;
	background_is_superset: boolean;
}
/**namespace:Aggregations.Bucket.SignificantTerms.Heuristics */
/**custom_serialization*/
interface GoogleNormalizedDistanceHeuristic {
	background_is_superset: boolean;
}
/**namespace:Aggregations.Bucket.SignificantTerms.Heuristics */
/**custom_serialization*/
interface PercentageScoreHeuristic {
}
/**namespace:Aggregations.Bucket.SignificantTerms.Heuristics */
/**custom_serialization*/
interface ScriptedHeuristic {
	script: Script;
}
/**namespace:Aggregations.Metric.ValueCount */
interface ValueCountAggregation {
}
/**namespace:Aggregations.Metric.PercentileRanks */
interface PercentileRanksAggregation {
	Values: double[];
	Method: PercentilesMethod;
}
/**namespace:Aggregations.Metric.TopHits */
interface TopHitsAggregation {
	from: integer;
	size: integer;
	sort: Sort[];
	_source: SourceFilter;
	highlight: Highlight;
	explain: boolean;
	/**custom_serialization */
	script_fields: Map<string, ScriptField>;
	fielddata_fields: Field[];
	version: boolean;
}
/**namespace:Aggregations.Bucket.Children */
interface ChildrenAggregation {
	type: TypeName;
}
/**namespace:Aggregations.Metric.ScriptedMetric */
interface ScriptedMetricAggregation {
	init_script: Script;
	map_script: Script;
	combine_script: Script;
	reduce_script: Script;
	params: Map<string, any>;
}
/**namespace:Aggregations.Pipeline.AverageBucket */
interface AverageBucketAggregation {
}
/**namespace:Aggregations.Pipeline.Derivative */
interface DerivativeAggregation {
}
/**namespace:Aggregations.Pipeline.MaxBucket */
interface MaxBucketAggregation {
}
/**namespace:Aggregations.Pipeline.MinBucket */
interface MinBucketAggregation {
}
/**namespace:Aggregations.Pipeline.SumBucket */
interface SumBucketAggregation {
}
/**namespace:Aggregations.Pipeline.MovingAverage */
interface MovingAverageAggregation {
	Model: MovingAverageModel;
	window: integer;
	minimize: boolean;
	predict: integer;
}
/**namespace:Aggregations.Pipeline.MovingAverage.Models */
interface MovingAverageModel {
	Name: string;
}
/**namespace:Aggregations.Pipeline.CumulativeSum */
interface CumulativeSumAggregation {
}
/**namespace:Aggregations.Pipeline.SerialDifferencing */
interface SerialDifferencingAggregation {
	lag: integer;
}
/**namespace:Aggregations.Pipeline.BucketScript */
interface BucketScriptAggregation {
	script: Script;
}
/**namespace:Aggregations.Pipeline.BucketSelector */
interface BucketSelectorAggregation {
	script: Script;
}
/**namespace:Aggregations.Bucket.Sampler */
interface SamplerAggregation {
	shard_size: integer;
	field: Field;
	max_docs_per_value: integer;
	script: Script;
	execution_hint: SamplerAggregationExecutionHint;
}
/**namespace:Search.Search.InnerHits */
/**custom_serialization*/
interface InnerHitsContainer {
	type: Map<TypeName, GlobalInnerHit>;
	path: Map<Field, GlobalInnerHit>;
}
/**namespace:Search.Search.InnerHits */
/**custom_serialization*/
interface GlobalInnerHit {
	query: QueryContainer;
	inner_hits: Map<string, InnerHitsContainer>;
}
/**namespace:Indices.AliasManagement */
/**custom_serialization*/
interface Alias {
	filter: QueryContainer;
	routing: string;
	index_routing: string;
	search_routing: string;
}
/**namespace:Cluster.ClusterState */
interface MetadataIndexState {
	state: string;
	/**custom_serialization */
	settings: string[];
	mappings: Map<TypeName, TypeMapping>;
	aliases: string[];
}
/**namespace:Cluster.ClusterStats */
interface ClusterStatsRequest extends Request {
	/**ambiguous_origin*/
	FlatSettings: boolean;
	/**ambiguous_origin*/
	Human: boolean;
	/**ambiguous_origin*/
	Timeout: Time;
	/**ambiguous_origin*/
	Source: string;
	/**ambiguous_origin*/
	FilterPath: string;
}
/**namespace:Cluster.ClusterStats */
interface ClusterStatsResponse extends Response {
	cluster_name: string;
	timestamp: long;
	status: ClusterStatus;
	indices: ClusterIndicesStats;
	nodes: ClusterNodesStats;
}
/**namespace:Cluster.ClusterStats */
interface ClusterIndicesStats {
	completion: CompletionStats;
	count: long;
	docs: DocStats;
	fielddata: FielddataStats;
	percolate: PercolateStats;
	query_cache: QueryCacheStats;
	segments: SegmentsStats;
	shards: ClusterIndicesShardsStats;
	store: StoreStats;
}
/**namespace:CommonOptions.Stats */
interface CompletionStats {
	size: string;
	size_in_bytes: long;
}
/**namespace:CommonOptions.Stats */
interface DocStats {
	count: long;
	deleted: long;
}
/**namespace:CommonOptions.Stats */
interface FielddataStats {
	evictions: long;
	memory_size: string;
	memory_size_in_bytes: long;
}
/**namespace:CommonOptions.Stats */
interface PercolateStats {
	total: long;
	time: string;
	time_in_millis: long;
	current: long;
	memory_size: string;
	memory_size_in_bytes: long;
	queries: long;
}
/**namespace:CommonOptions.Stats */
interface QueryCacheStats {
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
interface SegmentsStats {
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
interface ClusterIndicesShardsStats {
	total: double;
	primaries: double;
	replication: double;
	index: ClusterIndicesShardsIndexStats;
}
/**namespace:Cluster.ClusterStats */
interface ClusterIndicesShardsIndexStats {
	shards: ClusterShardMetrics;
	primaries: ClusterShardMetrics;
	replication: ClusterShardMetrics;
}
/**namespace:Cluster.ClusterStats */
interface ClusterShardMetrics {
	min: double;
	max: double;
	avg: double;
}
/**namespace:CommonOptions.Stats */
interface StoreStats {
	size: string;
	size_in_bytes: double;
	throttle_time: string;
	throttle_time_in_millis: long;
}
/**namespace:Cluster.ClusterStats */
interface ClusterNodesStats {
	count: ClusterNodeCount;
	versions: string[];
	os: ClusterOperatingSystemStats;
	process: ClusterProcess;
	jvm: ClusterJvm;
	fs: ClusterFileSystem;
	plugins: PluginStats[];
}
/**namespace:Cluster.ClusterStats */
interface ClusterNodeCount {
	total: integer;
	master_only: integer;
	data_only: integer;
	master_data: integer;
	client: integer;
}
/**namespace:Cluster.ClusterStats */
interface ClusterOperatingSystemStats {
	available_processors: integer;
	mem: ClusterOperatingSystemMemory;
	names: ClusterOperatingSystemName[];
}
/**namespace:Cluster.ClusterStats */
interface ClusterOperatingSystemMemory {
	total: string;
	total_in_bytes: long;
}
/**namespace:Cluster.ClusterStats */
interface ClusterOperatingSystemName {
	count: integer;
	name: string;
}
/**namespace:Cluster.ClusterStats */
interface ClusterProcess {
	cpu: ClusterProcessCpu;
	open_file_descriptors: ClusterProcessOpenFileDescriptors;
}
/**namespace:Cluster.ClusterStats */
interface ClusterProcessCpu {
	percent: integer;
}
/**namespace:Cluster.ClusterStats */
interface ClusterProcessOpenFileDescriptors {
	min: long;
	max: long;
	avg: long;
}
/**namespace:Cluster.ClusterStats */
interface ClusterJvm {
	max_uptime: string;
	max_uptime_in_millis: long;
	versions: ClusterJvmVersion[];
	mem: ClusterJvmMemory;
	threads: long;
}
/**namespace:Cluster.ClusterStats */
interface ClusterJvmVersion {
	version: string;
	vm_name: string;
	vm_version: string;
	vm_vendor: string;
	count: integer;
}
/**namespace:Cluster.ClusterStats */
interface ClusterJvmMemory {
	heap_used: string;
	heap_used_in_bytes: long;
	heap_max: string;
	heap_max_in_bytes: long;
}
/**namespace:Cluster.ClusterStats */
interface ClusterFileSystem {
	total: string;
	total_in_bytes: long;
	free: string;
	free_in_bytes: long;
	available: string;
	available_in_bytes: long;
}
/**namespace:CommonOptions.Stats */
interface PluginStats {
	name: string;
	version: string;
	description: string;
	classname: string;
	jvm: boolean;
	isolated: boolean;
	site: boolean;
}
/**namespace:Cluster.NodesHotThreads */
interface NodesHotThreadsRequest extends Request {
	/**ambiguous_origin*/
	Interval: Time;
	/**ambiguous_origin*/
	Snapshots: long;
	/**ambiguous_origin*/
	Threads: long;
	/**ambiguous_origin*/
	IgnoreIdleThreads: boolean;
	/**ambiguous_origin*/
	ThreadType: ThreadType;
	/**ambiguous_origin*/
	Timeout: Time;
	/**ambiguous_origin*/
	Source: string;
	/**ambiguous_origin*/
	FilterPath: string;
}
/**namespace:Cluster.NodesHotThreads */
interface NodesHotThreadsResponse extends Response {
	HotThreads: HotThreadInformation[];
}
/**namespace:Cluster.NodesHotThreads */
interface HotThreadInformation {
	NodeName: string;
	NodeId: string;
	Threads: string[];
	Hosts: string[];
}
/**namespace:Cluster.NodesInfo */
interface NodesInfoRequest extends Request {
	/**ambiguous_origin*/
	FlatSettings: boolean;
	/**ambiguous_origin*/
	Human: boolean;
	/**ambiguous_origin*/
	Timeout: Time;
	/**ambiguous_origin*/
	Source: string;
	/**ambiguous_origin*/
	FilterPath: string;
}
/**namespace:Cluster.NodesInfo */
interface NodesInfoResponse extends Response {
	cluster_name: string;
	/**custom_serialization */
	nodes: Map<string, NodeInfo>;
}
/**namespace:Cluster.NodesInfo */
interface NodeInfo {
	name: string;
	transport_address: string;
	host: string;
	ip: string;
	version: string;
	build: string;
	http_address: string;
	/**custom_serialization */
	settings: string[];
	os: NodeOperatingSystemInfo;
	process: NodeProcessInfo;
	jvm: NodeJvmInfo;
	/**custom_serialization */
	thread_pool: Map<string, NodeThreadPoolInfo>;
	network: NodeInfoNetwork;
	transport: NodeInfoTransport;
	http: NodeInfoHttp;
	plugins: PluginStats[];
}
/**namespace:Cluster.NodesInfo */
interface NodeOperatingSystemInfo {
	name: string;
	arch: string;
	version: string;
	refresh_interval_in_millis: integer;
	available_processors: integer;
	cpu: NodeInfoOSCPU;
	mem: NodeInfoMemory;
	swap: NodeInfoMemory;
}
/**namespace:Cluster.NodesInfo */
interface NodeInfoOSCPU {
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
interface NodeInfoMemory {
	total: string;
	total_in_bytes: long;
}
/**namespace:Cluster.NodesInfo */
interface NodeProcessInfo {
	refresh_interval: string;
	refresh_interval_in_millis: long;
	id: long;
}
/**namespace:Cluster.NodesInfo */
interface NodeJvmInfo {
	pid: integer;
	version: string;
	vm_name: string;
	vm_version: string;
	vm_vendor: string;
	memory_pools: string[];
	gc_collectors: string[];
	start_time_in_millis: long;
	mem: NodeInfoJVMMemory;
}
/**namespace:Cluster.NodesInfo */
interface NodeInfoJVMMemory {
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
interface NodeThreadPoolInfo {
	type: string;
	min: integer;
	max: integer;
	queue_size: integer;
	keep_alive: string;
}
/**namespace:Cluster.NodesInfo */
interface NodeInfoNetwork {
	refresh_interval: integer;
	primary_interface: NodeInfoNetworkInterface;
}
/**namespace:Cluster.NodesInfo */
interface NodeInfoNetworkInterface {
	address: string;
	name: string;
	mac_address: string;
}
/**namespace:Cluster.NodesInfo */
interface NodeInfoTransport {
	bound_address: string[];
	publish_address: string;
}
/**namespace:Cluster.NodesInfo */
interface NodeInfoHttp {
	bound_address: string[];
	publish_address: string;
	max_content_length: string;
	max_content_length_in_bytes: long;
}
/**namespace:Cluster.NodesStats */
interface NodesStatsRequest extends Request {
	/**ambiguous_origin*/
	CompletionFields: Field[];
	/**ambiguous_origin*/
	FielddataFields: Field[];
	/**ambiguous_origin*/
	Fields: Field[];
	/**ambiguous_origin*/
	Groups: boolean;
	/**ambiguous_origin*/
	Human: boolean;
	/**ambiguous_origin*/
	Level: Level;
	/**ambiguous_origin*/
	Types: string[];
	/**ambiguous_origin*/
	Timeout: Time;
	/**ambiguous_origin*/
	Source: string;
	/**ambiguous_origin*/
	FilterPath: string;
}
/**namespace:Cluster.NodesStats */
interface NodesStatsResponse extends Response {
	cluster_name: string;
	/**custom_serialization */
	nodes: Map<string, NodeStats>;
}
/**namespace:Cluster.NodesStats */
interface NodeStats {
	timestamp: long;
	name: string;
	transport_address: string;
	host: string;
	ip: string[];
	indices: IndexStats;
	os: OperatingSystemStats;
	process: ProcessStats;
	script: ScriptStats;
	jvm: NodeJvmStats;
	/**custom_serialization */
	thread_pool: Map<string, ThreadCountStats>;
	/**custom_serialization */
	breakers: Map<string, BreakerStats>;
	fs: FileSystemStats;
	transport: TransportStats;
	http: HttpStats;
}
/**namespace:Indices.Monitoring.IndicesStats */
interface IndexStats {
	docs: DocStats;
	store: StoreStats;
	indexing: IndexingStats;
	get: GetStats;
	search: SearchStats;
	merges: MergesStats;
	refresh: RefreshStats;
	flush: FlushStats;
	warmer: WarmerStats;
	query_cache: QueryCacheStats;
	fielddata: FielddataStats;
	percolate: PercolateStats;
	completion: CompletionStats;
	segments: SegmentsStats;
	translog: TranslogStats;
	suggest: SuggestStats;
	request_cache: RequestCacheStats;
	recovery: RecoveryStats;
}
/**namespace:CommonOptions.Stats */
interface IndexingStats {
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
	types: Map<string, IndexingStats>;
}
/**namespace:CommonOptions.Stats */
interface GetStats {
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
interface SearchStats {
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
interface MergesStats {
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
interface RefreshStats {
	total: long;
	total_time: string;
	total_time_in_millis: long;
}
/**namespace:CommonOptions.Stats */
interface FlushStats {
	total: long;
	total_time: string;
	total_time_in_millis: long;
}
/**namespace:CommonOptions.Stats */
interface WarmerStats {
	current: long;
	total: long;
	total_time: string;
	total_time_in_millis: long;
}
/**namespace:CommonOptions.Stats */
interface TranslogStats {
	operations: long;
	size: string;
	size_in_bytes: long;
}
/**namespace:CommonOptions.Stats */
interface SuggestStats {
	current: long;
	total: long;
	total_time: string;
	total_time_in_millis: long;
}
/**namespace:CommonOptions.Stats */
interface RequestCacheStats {
	evictions: long;
	hit_count: long;
	memory_size: string;
	memory_size_in_bytes: long;
	miss_count: long;
}
/**namespace:CommonOptions.Stats */
interface RecoveryStats {
	current_as_source: long;
	current_as_target: long;
	throttle_time: string;
	throttle_time_in_millis: long;
}
/**namespace:Cluster.NodesStats */
interface OperatingSystemStats {
	timestamp: long;
	load_average: float;
	mem: ExtendedMemoryStats;
	swap: OsMemoryStats;
}
/**namespace:Cluster.NodesStats */
interface ProcessStats {
	timestamp: long;
	open_file_descriptors: integer;
	cpu: CPUStats;
	mem: ProcessMemoryStats;
}
/**namespace:Cluster.NodesStats */
interface ScriptStats {
	cache_evictions: long;
	compilations: long;
}
/**namespace:Cluster.NodesStats */
interface NodeJvmStats {
	timestamp: long;
	uptime: string;
	uptime_in_millis: long;
	mem: MemoryStats;
	threads: ThreadStats;
	gc: GarbageCollectionStats;
	/**custom_serialization */
	buffer_pools: Map<string, NodeBufferPool>;
	classes: JvmClassesStats;
}
/**namespace:Cluster.NodesStats */
interface ThreadCountStats {
	threads: long;
	queue: long;
	active: long;
	rejected: long;
	largest: long;
	completed: long;
}
/**namespace:Cluster.NodesStats */
interface BreakerStats {
	estimated_size: string;
	estimated_size_in_bytes: long;
	limit_size: string;
	limit_size_in_bytes: long;
	overhead: float;
	tripped: float;
}
/**namespace:Cluster.NodesStats */
interface FileSystemStats {
	timestamp: long;
	total: TotalFileSystemStats;
	data: DataPathStats[];
}
/**namespace:Cluster.NodesStats */
interface TransportStats {
	server_open: integer;
	rx_count: long;
	rx_size: string;
	rx_size_in_bytes: long;
	tx_count: long;
	tx_size: string;
	tx_size_in_bytes: long;
}
/**namespace:Cluster.NodesStats */
interface HttpStats {
	current_open: integer;
	total_opened: long;
}
/**namespace:Cluster.Ping */
interface PingRequest extends Request {
	/**ambiguous_origin*/
	Source: string;
	/**ambiguous_origin*/
	FilterPath: string;
}
/**namespace:Cluster.Ping */
interface PingResponse extends Response {
}
/**namespace:Cluster.RootNodeInfo */
interface RootNodeInfoRequest extends Request {
	/**ambiguous_origin*/
	Source: string;
	/**ambiguous_origin*/
	FilterPath: string;
}
/**namespace:Cluster.RootNodeInfo */
interface RootNodeInfoResponse extends Response {
	name: string;
	tagline: string;
	version: ElasticsearchVersionInfo;
}
/**namespace:CommonAbstractions.Response */
interface ElasticsearchVersionInfo {
	Number: string;
	snapshot_build: boolean;
	lucene_version: string;
}
/**namespace:CommonAbstractions.Request */
interface RequestDescriptorBase<TDescriptor, TParameters, TInterface> extends Request {
}
/**namespace:CommonAbstractions.Response */
interface AcknowledgedResponseBase extends Response {
	acknowledged: boolean;
}
/**namespace:CommonAbstractions.Response */
interface DictionaryResponseBase<TKey, TValue> extends Response {
}
/**namespace:CommonAbstractions.Response */
interface IndicesResponseBase extends Response {
	acknowledged: boolean;
	_shards: ShardsMetaData;
}
/**namespace:CommonOptions.Hit */
interface ShardsMetaData {
	Total: integer;
	Successful: integer;
	Failed: integer;
	failures: ShardFailure[];
}
/**namespace:CommonOptions.Failures */
interface ShardFailure {
	index: string;
	shard: integer;
	node: string;
	reason: ShardFailureReason;
}
/**namespace:CommonOptions.Failures */
interface ShardFailureReason {
	Type: string;
	Reason: string;
	caused_by: CausedBy;
}
/**namespace:CommonOptions.Failures */
interface CausedBy {
	Type: string;
	Reason: string;
}
/**namespace:CommonAbstractions.Response */
interface ShardsOperationResponseBase extends Response {
	_shards: ShardsMetaData;
}
/**namespace:Document.Multiple.Bulk */
/**custom_serialization*/
interface BulkRequest extends Request {
	Operations: BulkOperation[];
	/**ambiguous_origin*/
	Consistency: Consistency;
	/**ambiguous_origin*/
	Refresh: boolean;
	/**ambiguous_origin*/
	Routing: string;
	/**ambiguous_origin*/
	Timeout: Time;
	/**ambiguous_origin*/
	Fields: Field[];
	/**ambiguous_origin*/
	Source: string;
	/**ambiguous_origin*/
	FilterPath: string;
}
/**namespace:Document.Multiple.Bulk.BulkOperation */
interface BulkOperation {
	Operation: string;
	_index: IndexName;
	_type: TypeName;
	_id: Id;
	_version: long;
	/**custom_serialization */
	_version_type: VersionType;
	_routing: string;
	_parent: Id;
	_timestamp: long;
	_ttl: Time;
	_retry_on_conflict: integer;
}
/**namespace:Document.Multiple.Bulk */
interface BulkResponse extends Response {
	IsValid: boolean;
	took: integer;
	errors: boolean;
	items: BulkResponseItemBase[];
	ItemsWithErrors: BulkResponseItemBase[];
}
/**namespace:Document.Multiple.Bulk.BulkResponseItem */
/**custom_serialization*/
interface BulkResponseItemBase {
	Operation: string;
	_index: string;
	_type: string;
	_id: string;
	_version: long;
	status: integer;
	error: BulkError;
	_shards: ShardsMetaData;
	IsValid: boolean;
}
/**namespace:CommonOptions.Failures */
interface BulkError {
	index: string;
	shard: integer;
	type: string;
	reason: string;
}
/**namespace:Document.Multiple.DeleteByQuery */
interface DeleteByQueryRequest extends Request {
	query: QueryContainer;
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
	Timeout: Time;
	/**ambiguous_origin*/
	FilterPath: string;
}
/**namespace:Document.Multiple.DeleteByQuery */
interface DeleteByQueryResponse extends Response {
	/**custom_serialization */
	_indices: Map<string, DeleteByQueryIndicesResult>;
	took: long;
	timed_out: boolean;
}
/**namespace:Document.Multiple.DeleteByQuery */
interface DeleteByQueryIndicesResult {
	found: long;
	deleted: long;
	missing: long;
	failed: long;
}
/**namespace:Document.Multiple.MultiGet.Request */
/**custom_serialization*/
interface MultiGetRequest extends Request {
	docs: MultiGetOperation[];
	/**ambiguous_origin*/
	Fields: Field[];
	/**ambiguous_origin*/
	Preference: string;
	/**ambiguous_origin*/
	Realtime: boolean;
	/**ambiguous_origin*/
	Refresh: boolean;
	/**ambiguous_origin*/
	SourceEnabled: string[];
	/**ambiguous_origin*/
	SourceExclude: Field[];
	/**ambiguous_origin*/
	SourceInclude: Field[];
	/**ambiguous_origin*/
	Source: string;
	/**ambiguous_origin*/
	FilterPath: string;
}
/**namespace:Document.Multiple.MultiGet.Request */
/**custom_serialization*/
interface MultiGetOperation {
	_index: IndexName;
	_type: TypeName;
	_id: Id;
	fields: Field[];
	_routing: string;
	_source: Union<boolean, SourceFilter>;
	CanBeFlattened: boolean;
}
/**namespace:Document.Multiple.MultiGet.Response */
interface MultiGetResponse extends Response {
	Documents: MultiGetHit<any>[];
}
/**namespace:Document.Multiple.MultiGet.Response */
interface MultiGetHit<T> {
	Source: T;
	Index: string;
	Found: boolean;
	Type: string;
	Version: long;
	Id: string;
}
/**namespace:Document.Multiple.MultiTermVectors */
interface MultiTermVectorsRequest extends Request {
	docs: MultiTermVectorOperation[];
	/**ambiguous_origin*/
	TermStatistics: boolean;
	/**ambiguous_origin*/
	FieldStatistics: boolean;
	/**ambiguous_origin*/
	Fields: Field[];
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
interface MultiTermVectorOperation {
	_index: IndexName;
	_type: TypeName;
	_id: Id;
	doc: any;
	fields: Field[];
	offsets: boolean;
	payloads: boolean;
	positions: boolean;
	term_statistics: boolean;
	field_statistics: boolean;
}
/**namespace:Document.Multiple.MultiTermVectors */
interface MultiTermVectorsResponse extends Response {
	docs: TermVectorsResponse[];
}
/**namespace:Document.Single.TermVectors */
interface TermVectorsResponse extends Response {
	found: boolean;
	term_vectors: Map<string, TermVector>;
}
/**namespace:Document.Single.TermVectors */
interface TermVector {
	field_statistics: FieldStatistics;
	terms: Map<string, TermVectorTerm>;
}
/**namespace:Document.Single.TermVectors */
interface FieldStatistics {
	doc_count: integer;
	sum_doc_freq: integer;
	sum_ttf: integer;
}
/**namespace:Document.Single.TermVectors */
interface TermVectorTerm {
	doc_freq: integer;
	term_freq: integer;
	tokens: Token[];
	ttf: integer;
}
/**namespace:Document.Single.TermVectors */
interface Token {
	end_offset: integer;
	payload: string;
	position: integer;
	start_offset: integer;
}
/**namespace:Document.Single.Delete */
interface DeleteRequest extends Request {
	/**ambiguous_origin*/
	Consistency: Consistency;
	/**ambiguous_origin*/
	Parent: string;
	/**ambiguous_origin*/
	Refresh: boolean;
	/**ambiguous_origin*/
	Routing: string;
	/**ambiguous_origin*/
	Timeout: Time;
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
interface DeleteResponse extends Response {
	_index: string;
	_type: string;
	_id: string;
	_version: string;
	found: boolean;
}
/**namespace:Document.Single.Exists */
interface DocumentExistsRequest extends Request {
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
interface GetRequest extends Request {
	/**ambiguous_origin*/
	Fields: Field[];
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
	SourceExclude: Field[];
	/**ambiguous_origin*/
	SourceInclude: Field[];
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
interface GetResponse<T> extends Response {
	_index: string;
	_type: string;
	_id: string;
	_version: long;
	found: boolean;
	_source: T;
	fields: Map<string, any>;
}
/**namespace:Document.Single.Index */
interface IndexRequest<TDocument> extends Request {
	Document: TDocument;
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
	Timeout: Time;
	/**ambiguous_origin*/
	Timestamp: Time;
	/**ambiguous_origin*/
	Ttl: Time;
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
interface IndexResponse extends Response {
	_index: string;
	_type: string;
	_id: string;
	_version: long;
	created: boolean;
}
/**namespace:Document.Single.Source */
interface SourceRequest extends Request {
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
	SourceExclude: Field[];
	/**ambiguous_origin*/
	SourceInclude: Field[];
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
interface TermVectorsRequest<TDocument> extends Request {
	doc: TDocument;
	per_field_analyzer: Map<Field, string>;
	/**ambiguous_origin*/
	TermStatistics: boolean;
	/**ambiguous_origin*/
	FieldStatistics: boolean;
	/**ambiguous_origin*/
	Dfs: boolean;
	/**ambiguous_origin*/
	Fields: Field[];
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
interface UpdateRequest<TDocument, TPartialDocument> extends Request {
	/**ambiguous_origin*/
	script: string;
	script_file: string;
	lang: string;
	/**custom_serialization */
	params: Map<string, any>;
	upsert: TDocument;
	doc_as_upsert: boolean;
	doc: TPartialDocument;
	detect_noop: boolean;
	Fields: Field[];
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
	Timeout: Time;
	/**ambiguous_origin*/
	Timestamp: Time;
	/**ambiguous_origin*/
	Ttl: Time;
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
interface UpdateResponse<T> extends Response {
	_shards: ShardsMetaData;
	_index: string;
	_type: string;
	_id: string;
	_version: long;
	get: InstantGet<T>;
}
/**namespace:Search.Explain */
interface InstantGet<T> {
	found: boolean;
	_source: T;
	fields: Map<string, any>;
}
/**namespace:Indices.AliasManagement.Alias */
interface BulkAliasRequest extends Request {
	actions: AliasAction[];
	/**ambiguous_origin*/
	Timeout: Time;
	/**ambiguous_origin*/
	MasterTimeout: Time;
	/**ambiguous_origin*/
	Source: string;
	/**ambiguous_origin*/
	FilterPath: string;
}
/**namespace:Indices.AliasManagement.Alias.Actions */
interface AliasAction {
}
/**namespace:Indices.AliasManagement.Alias */
interface BulkAliasResponse extends Response {
}
/**namespace:Indices.AliasManagement.AliasExists */
interface AliasExistsRequest extends Request {
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
interface DeleteAliasRequest extends Request {
	/**ambiguous_origin*/
	Timeout: Time;
	/**ambiguous_origin*/
	MasterTimeout: Time;
	/**ambiguous_origin*/
	Source: string;
	/**ambiguous_origin*/
	FilterPath: string;
}
/**namespace:Indices.AliasManagement.DeleteAlias */
interface DeleteAliasResponse extends Response {
}
/**namespace:Indices.AliasManagement.GetAlias */
interface GetAliasRequest extends Request {
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
interface GetAliasesRequest extends Request {
	Alias: string;
	/**ambiguous_origin*/
	Timeout: Time;
	/**ambiguous_origin*/
	Local: boolean;
	/**ambiguous_origin*/
	Source: string;
	/**ambiguous_origin*/
	FilterPath: string;
}
/**namespace:Indices.AliasManagement.GetAliases */
interface GetAliasesResponse extends Response {
	Indices: Map<string, AliasDefinition[]>;
}
/**namespace:Indices.AliasManagement */
interface AliasDefinition {
	Name: string;
	filter: QueryContainer;
	routing: string;
	index_routing: string;
	search_routing: string;
}
/**namespace:Indices.AliasManagement.PutAlias */
interface PutAliasRequest extends Request {
	routing: string;
	filter: QueryContainer;
	/**ambiguous_origin*/
	Timeout: Time;
	/**ambiguous_origin*/
	MasterTimeout: Time;
	/**ambiguous_origin*/
	Source: string;
	/**ambiguous_origin*/
	FilterPath: string;
}
/**namespace:Indices.AliasManagement.PutAlias */
interface PutAliasResponse extends Response {
}
/**namespace:Indices.Analyze */
interface AnalyzeRequest extends Request {
	/**ambiguous_origin*/
	Analyzer: string;
	/**ambiguous_origin*/
	CharFilters: string[];
	/**ambiguous_origin*/
	Field: Field;
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
interface AnalyzeResponse extends Response {
	tokens: AnalyzeToken[];
}
/**namespace:Indices.Analyze */
interface AnalyzeToken {
	token: string;
	type: string;
	start_offset: integer;
	end_offset: integer;
	position: integer;
}
/**namespace:Indices.IndexManagement.CreateIndex */
/**custom_serialization*/
interface CreateIndexRequest extends Request {
	Settings: Map<string, any>;
	Mappings: Map<TypeName, TypeMapping>;
	Warmers: Map<TypeName, Warmer>;
	Aliases: Map<IndexName, Alias>;
	Similarity: Map<string, Similarity>;
	/**ambiguous_origin*/
	Timeout: Time;
	/**ambiguous_origin*/
	MasterTimeout: Time;
	/**ambiguous_origin*/
	UpdateAllTypes: boolean;
	/**ambiguous_origin*/
	Source: string;
	/**ambiguous_origin*/
	FilterPath: string;
}
/**namespace:IndexModules.Similarity */
interface Similarity {
	type: string;
}
/**namespace:Indices.IndexManagement.CreateIndex */
interface CreateIndexResponse extends Response {
}
/**namespace:Indices.IndexManagement.DeleteIndex */
interface DeleteIndexRequest extends Request {
	/**ambiguous_origin*/
	Timeout: Time;
	/**ambiguous_origin*/
	MasterTimeout: Time;
	/**ambiguous_origin*/
	Source: string;
	/**ambiguous_origin*/
	FilterPath: string;
}
/**namespace:Indices.IndexManagement.DeleteIndex */
interface DeleteIndexResponse extends Response {
}
/**namespace:Indices.IndexManagement.GetIndex */
interface GetIndexRequest extends Request {
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
interface GetIndexResponse extends Response {
	Indices: Map<string, IndexState>;
}
/**namespace:Indices.IndexManagement.IndicesExists */
interface IndexExistsRequest extends Request {
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
interface ExistsResponse extends Response {
	Exists: boolean;
}
/**namespace:Indices.IndexManagement.OpenCloseIndex.CloseIndex */
interface CloseIndexRequest extends Request {
	/**ambiguous_origin*/
	Timeout: Time;
	/**ambiguous_origin*/
	MasterTimeout: Time;
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
interface CloseIndexResponse extends Response {
}
/**namespace:Indices.IndexManagement.OpenCloseIndex.OpenIndex */
interface OpenIndexRequest extends Request {
	/**ambiguous_origin*/
	Timeout: Time;
	/**ambiguous_origin*/
	MasterTimeout: Time;
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
interface OpenIndexResponse extends Response {
}
/**namespace:Indices.IndexManagement.TypesExists */
interface TypeExistsRequest extends Request {
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
interface GetIndexSettingsRequest extends Request {
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
interface GetIndexSettingsResponse extends Response {
	Indices: Map<string, IndexState>;
}
/**namespace:IndexModules.IndexSettings */
/**custom_serialization*/
interface IndexState {
	settings: Map<string, any>;
	aliases: Map<IndexName, Alias>;
	warmers: Map<TypeName, Warmer>;
	mappings: Map<TypeName, TypeMapping>;
	similarity: Map<string, Similarity>;
}
/**namespace:Indices.IndexSettings.IndexTemplates.DeleteIndexTemplate */
interface DeleteIndexTemplateRequest extends Request {
	/**ambiguous_origin*/
	Timeout: Time;
	/**ambiguous_origin*/
	MasterTimeout: Time;
	/**ambiguous_origin*/
	Source: string;
	/**ambiguous_origin*/
	FilterPath: string;
}
/**namespace:Indices.IndexSettings.IndexTemplates.DeleteIndexTemplate */
interface DeleteIndexTemplateResponse extends Response {
}
/**namespace:Indices.IndexSettings.IndexTemplates.GetIndexTemplate */
interface GetIndexTemplateRequest extends Request {
	/**ambiguous_origin*/
	FlatSettings: boolean;
	/**ambiguous_origin*/
	MasterTimeout: Time;
	/**ambiguous_origin*/
	Local: boolean;
	/**ambiguous_origin*/
	Source: string;
	/**ambiguous_origin*/
	FilterPath: string;
}
/**namespace:Indices.IndexSettings.IndexTemplates.GetIndexTemplate */
/**custom_serialization*/
interface GetIndexTemplateResponse extends Response {
	TemplateMappings: Map<string, TemplateMapping>;
}
/**namespace:Indices.IndexSettings.IndexTemplates.IndexTemplateExists */
interface IndexTemplateExistsRequest extends Request {
	/**ambiguous_origin*/
	MasterTimeout: Time;
	/**ambiguous_origin*/
	Local: boolean;
	/**ambiguous_origin*/
	Source: string;
	/**ambiguous_origin*/
	FilterPath: string;
}
/**namespace:Indices.IndexSettings.IndexTemplates.PutIndexTemplate */
interface PutIndexTemplateRequest extends Request {
	Template: string;
	Order: integer;
	Settings: Map<string, any>;
	Mappings: Map<TypeName, TypeMapping>;
	Warmers: Map<TypeName, Warmer>;
	Aliases: Map<IndexName, Alias>;
	/**ambiguous_origin*/
	Create: boolean;
	/**ambiguous_origin*/
	Timeout: Time;
	/**ambiguous_origin*/
	MasterTimeout: Time;
	/**ambiguous_origin*/
	FlatSettings: boolean;
	/**ambiguous_origin*/
	Source: string;
	/**ambiguous_origin*/
	FilterPath: string;
}
/**namespace:Indices.IndexSettings.IndexTemplates.PutIndexTemplate */
interface PutIndexTemplateResponse extends Response {
}
/**namespace:Indices.IndexSettings.UpdateIndexSettings */
interface UpdateIndexSettingsResponse extends Response {
}
/**namespace:Indices.MappingManagement.GetFieldMapping */
interface GetFieldMappingRequest extends Request {
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
interface GetFieldMappingResponse extends Response {
	Indices: Map<string, TypeFieldMappings>;
}
/**namespace:Indices.MappingManagement.GetFieldMapping */
interface TypeFieldMappings {
	mappings: Map<string, Map<string, FieldMapping>>;
}
/**namespace:Indices.MappingManagement.GetFieldMapping */
interface FieldMapping {
	full_name: string;
	/**custom_serialization */
	mapping: Map<string, FieldMapping>;
}
/**namespace:Mapping.MetaFields */
interface FieldMapping {
}
/**namespace:Indices.MappingManagement.GetMapping */
interface GetMappingRequest extends Request {
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
interface GetMappingResponse extends Response {
	IsValid: boolean;
	Mappings: Map<string, TypeMapping[]>;
	Mapping: TypeMapping;
}
/**namespace:Mapping */
/**custom_serialization*/
interface TypeMapping {
	_all: AllField;
	analyzer: string;
	date_detection: boolean;
	dynamic: DynamicMapping;
	dynamic_date_formats: string[];
	dynamic_templates: Map<string, DynamicTemplate>;
	_field_names: FieldNamesField;
	_index: IndexField;
	/**custom_serialization */
	_meta: Map<string, any>;
	numeric_detection: boolean;
	_parent: ParentField;
	properties: Map<PropertyName, Property>;
	_routing: RoutingField;
	search_analyzer: string;
	_size: SizeField;
	_source: SourceField;
	_timestamp: TimestampField;
	/**custom_serialization */
	transform: MappingTransform[];
	_ttl: TtlField;
}
/**namespace:Indices.MappingManagement.PutMapping */
/**custom_serialization*/
interface PutMappingRequest extends Request {
	AllField: AllField;
	DateDetection: boolean;
	DynamicDateFormats: string[];
	DynamicTemplates: Map<string, DynamicTemplate>;
	Dynamic: DynamicMapping;
	Analyzer: string;
	SearchAnalyzer: string;
	FieldNamesField: FieldNamesField;
	IndexField: IndexField;
	Meta: Map<string, any>;
	NumericDetection: boolean;
	ParentField: ParentField;
	Properties: Map<PropertyName, Property>;
	RoutingField: RoutingField;
	SizeField: SizeField;
	SourceField: SourceField;
	TimestampField: TimestampField;
	Transform: MappingTransform[];
	TtlField: TtlField;
	/**ambiguous_origin*/
	Timeout: Time;
	/**ambiguous_origin*/
	MasterTimeout: Time;
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
interface PutMappingResponse extends Response {
}
/**namespace:Indices.Monitoring.IndicesRecovery */
interface RecoveryStatusRequest extends Request {
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
interface RecoveryStatusResponse extends Response {
	/**custom_serialization */
	Indices: Map<string, RecoveryStatus>;
}
/**namespace:Indices.Monitoring.IndicesRecovery */
interface RecoveryStatus {
	shards: ShardRecovery[];
}
/**namespace:Indices.Monitoring.IndicesRecovery */
interface ShardRecovery {
	id: long;
	type: string;
	stage: string;
	primary: boolean;
	start_time: Date;
	stop_time: Date;
	total_time_in_millis: long;
	source: RecoveryOrigin;
	target: RecoveryOrigin;
	index: RecoveryIndexStatus;
	translog: RecoveryTranslogStatus;
	start: RecoveryStartStatus;
}
/**namespace:Indices.Monitoring.IndicesRecovery */
interface RecoveryOrigin {
	id: string;
	hostname: string;
	ip: string;
	name: string;
}
/**namespace:Indices.Monitoring.IndicesRecovery */
interface RecoveryIndexStatus {
	total_time_in_millis: long;
	bytes: RecoveryBytes;
	files: RecoveryFiles;
}
/**namespace:Indices.Monitoring.IndicesRecovery */
interface RecoveryBytes {
	total: long;
	reused: long;
	recovered: long;
	percent: string;
}
/**namespace:Indices.Monitoring.IndicesRecovery */
interface RecoveryFiles {
	total: long;
	reused: long;
	recovered: long;
	percent: string;
	details: RecoveryFileDetails[];
}
/**namespace:Indices.Monitoring.IndicesRecovery */
interface RecoveryFileDetails {
	name: string;
	length: long;
	recovered: long;
}
/**namespace:Indices.Monitoring.IndicesRecovery */
interface RecoveryTranslogStatus {
	recovered: long;
	total: long;
	percent: string;
	total_on_start: long;
	total_time: string;
	total_time_in_millis: long;
}
/**namespace:Indices.Monitoring.IndicesRecovery */
interface RecoveryStartStatus {
	check_index_time: long;
	total_time_in_millis: string;
}
/**namespace:Indices.Monitoring.IndicesSegments */
interface SegmentsRequest extends Request {
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
interface SegmentsResponse extends Response {
	_shards: ShardsMetaData;
	/**custom_serialization */
	indices: Map<string, IndexSegment>;
}
/**namespace:Indices.Monitoring.IndicesSegments */
interface IndexSegment {
	/**custom_serialization */
	shards: Map<string, ShardsSegment>;
}
/**namespace:Indices.Monitoring.IndicesSegments */
/**custom_serialization*/
interface ShardsSegment {
	num_committed_segments: integer;
	num_search_segments: integer;
	routing: ShardSegmentRouting;
	/**custom_serialization */
	Segments: Map<string, Segment>;
}
/**namespace:Indices.Monitoring.IndicesSegments */
interface ShardSegmentRouting {
	state: string;
	primary: boolean;
	node: string;
}
/**namespace:Indices.Monitoring.IndicesSegments */
interface Segment {
	generation: integer;
	num_docs: long;
	deleted_docs: long;
	size: string;
	size_in_bytes: double;
	committed: boolean;
	Search: boolean;
}
/**namespace:Indices.Monitoring.IndicesStats */
interface IndicesStatsRequest extends Request {
	Types: TypeName[];
	/**ambiguous_origin*/
	CompletionFields: Field[];
	/**ambiguous_origin*/
	FielddataFields: Field[];
	/**ambiguous_origin*/
	Fields: Field[];
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
interface IndicesStatsResponse extends Response {
	_shards: ShardsMetaData;
	_all: IndicesStats;
	/**custom_serialization */
	indices: Map<string, IndicesStats>;
}
/**namespace:Indices.Monitoring.IndicesStats */
interface IndicesStats {
	primaries: IndexStats;
	total: IndexStats;
}
/**namespace:Indices.StatusManagement.ClearCache */
interface ClearCacheRequest extends Request {
	/**ambiguous_origin*/
	FieldData: boolean;
	/**ambiguous_origin*/
	Fields: Field[];
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
interface ClearCacheResponse extends Response {
}
/**namespace:Indices.StatusManagement.Flush */
interface FlushRequest extends Request {
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
interface FlushResponse extends Response {
}
/**namespace:Indices.StatusManagement.Optimize */
interface OptimizeRequest extends Request {
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
interface OptimizeResponse extends Response {
}
/**namespace:Indices.StatusManagement.Refresh */
interface RefreshRequest extends Request {
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
interface RefreshResponse extends Response {
}
/**namespace:Indices.StatusManagement.SyncedFlush */
interface SyncedFlushRequest extends Request {
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
interface SyncedFlushResponse extends Response {
}
/**namespace:Indices.StatusManagement.Upgrade */
interface UpgradeRequest extends Request {
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
interface UpgradeResponse extends Response {
	_shards: ShardsMetaData;
}
/**namespace:Indices.StatusManagement.Upgrade.UpgradeStatus */
interface UpgradeStatusRequest extends Request {
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
interface UpgradeStatusResponse extends Response {
	/**custom_serialization */
	Upgrades: Map<string, UpgradeStatus>;
	SizeInBytes: long;
	SizeToUpgradeInBytes: string;
	SizeToUpgradeAncientInBytes: string;
}
/**namespace:Indices.StatusManagement.Upgrade.UpgradeStatus */
interface UpgradeStatus {
	size: string;
	size_in_bytes: long;
	size_to_upgrade: string;
	size_to_upgrade_in_bytes: string;
	size_to_upgrade_ancient_in_bytes: string;
}
/**namespace:Indices.Warmers.DeleteWarmer */
interface DeleteWarmerRequest extends Request {
	/**ambiguous_origin*/
	MasterTimeout: Time;
	/**ambiguous_origin*/
	Source: string;
	/**ambiguous_origin*/
	FilterPath: string;
}
/**namespace:Indices.Warmers.DeleteWarmer */
interface DeleteWarmerResponse extends Response {
}
/**namespace:Indices.Warmers.GetWarmer */
interface GetWarmerRequest extends Request {
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
interface GetWarmerResponse extends Response {
	/**custom_serialization */
	Indices: Map<string, Map<TypeName, Warmer>>;
}
/**namespace:Indices.Warmers.PutWarmer */
/**custom_serialization*/
interface PutWarmerRequest extends Request {
	Search: SearchRequest;
	/**ambiguous_origin*/
	MasterTimeout: Time;
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
interface PutWarmerResponse extends Response {
}
/**namespace:Modules.Scripting.DeleteScript */
interface DeleteScriptRequest extends Request {
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
interface DeleteScriptResponse extends Response {
}
/**namespace:Modules.Scripting.GetScript */
interface GetScriptRequest extends Request {
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
interface GetScriptResponse extends Response {
	script: string;
}
/**namespace:Modules.Scripting.PutScript */
interface PutScriptRequest extends Request {
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
interface PutScriptResponse extends Response {
}
/**namespace:Modules.SnapshotAndRestore.Repositories.CreateRepository */
/**custom_serialization*/
interface CreateRepositoryRequest extends Request {
	Repository: SnapshotRepository;
	/**ambiguous_origin*/
	MasterTimeout: Time;
	/**ambiguous_origin*/
	Timeout: Time;
	/**ambiguous_origin*/
	Verify: boolean;
	/**ambiguous_origin*/
	Source: string;
	/**ambiguous_origin*/
	FilterPath: string;
}
/**namespace:Modules.SnapshotAndRestore.Repositories */
interface SnapshotRepository {
	type: string;
}
/**namespace:Modules.SnapshotAndRestore.Repositories.CreateRepository */
interface CreateRepositoryResponse extends Response {
}
/**namespace:Modules.SnapshotAndRestore.Repositories.DeleteRepository */
interface DeleteRepositoryRequest extends Request {
	/**ambiguous_origin*/
	MasterTimeout: Time;
	/**ambiguous_origin*/
	Timeout: Time;
	/**ambiguous_origin*/
	Source: string;
	/**ambiguous_origin*/
	FilterPath: string;
}
/**namespace:Modules.SnapshotAndRestore.Repositories.DeleteRepository */
interface DeleteRepositoryResponse extends Response {
}
/**namespace:Modules.SnapshotAndRestore.Repositories.GetRepository */
interface GetRepositoryRequest extends Request {
	/**ambiguous_origin*/
	MasterTimeout: Time;
	/**ambiguous_origin*/
	Local: boolean;
	/**ambiguous_origin*/
	Source: string;
	/**ambiguous_origin*/
	FilterPath: string;
}
/**namespace:Modules.SnapshotAndRestore.Repositories.GetRepository */
/**custom_serialization*/
interface GetRepositoryResponse extends Response {
	Repositories: Map<string, SnapshotRepository>;
}
/**namespace:Modules.SnapshotAndRestore.Repositories.VerifyRepository */
interface VerifyRepositoryRequest extends Request {
	/**ambiguous_origin*/
	MasterTimeout: Time;
	/**ambiguous_origin*/
	Timeout: Time;
	/**ambiguous_origin*/
	Source: string;
	/**ambiguous_origin*/
	FilterPath: string;
}
/**namespace:Modules.SnapshotAndRestore.Repositories.VerifyRepository */
interface VerifyRepositoryResponse extends Response {
	/**custom_serialization */
	nodes: Map<string, CompactNodeInfo>;
}
/**namespace:Modules.SnapshotAndRestore.Repositories.VerifyRepository */
interface CompactNodeInfo {
	name: string;
}
/**namespace:Modules.SnapshotAndRestore.Restore */
interface RestoreRequest extends Request {
	indices: Indices;
	ignore_unavailable: boolean;
	include_global_state: boolean;
	rename_pattern: string;
	rename_replacement: string;
	index_settings: UpdateIndexSettingsRequest;
	ignore_index_settings: string[];
	/**ambiguous_origin*/
	MasterTimeout: Time;
	/**ambiguous_origin*/
	WaitForCompletion: boolean;
	/**ambiguous_origin*/
	Source: string;
	/**ambiguous_origin*/
	FilterPath: string;
}
/**namespace:Indices.IndexSettings.UpdateIndexSettings */
/**custom_serialization*/
interface UpdateIndexSettingsRequest extends Request {
	IndexSettings: Map<string, any>;
	/**ambiguous_origin*/
	MasterTimeout: Time;
	/**ambiguous_origin*/
	IgnoreUnavailable: boolean;
	/**ambiguous_origin*/
	AllowNoIndices: boolean;
	/**ambiguous_origin*/
	ExpandWildcards: ExpandWildcards;
	/**ambiguous_origin*/
	FlatSettings: boolean;
	/**ambiguous_origin*/
	Source: string;
	/**ambiguous_origin*/
	FilterPath: string;
}
/**namespace:Modules.SnapshotAndRestore.Restore */
interface RestoreResponse extends Response {
	snapshot: SnapshotRestore;
}
/**namespace:Modules.SnapshotAndRestore.Restore */
interface SnapshotRestore {
	snapshot: string;
	indices: IndexName[];
	shards: ShardsMetaData;
}
/**namespace:Modules.SnapshotAndRestore.Snapshot.DeleteSnapshot */
interface DeleteSnapshotRequest extends Request {
	/**ambiguous_origin*/
	MasterTimeout: Time;
	/**ambiguous_origin*/
	Source: string;
	/**ambiguous_origin*/
	FilterPath: string;
}
/**namespace:Modules.SnapshotAndRestore.Snapshot.DeleteSnapshot */
interface DeleteSnapshotResponse extends Response {
}
/**namespace:Modules.SnapshotAndRestore.Snapshot.GetSapshot */
interface GetSnapshotRequest extends Request {
	/**ambiguous_origin*/
	MasterTimeout: Time;
	/**ambiguous_origin*/
	Source: string;
	/**ambiguous_origin*/
	FilterPath: string;
}
/**namespace:Modules.SnapshotAndRestore.Snapshot.GetSapshot */
interface GetSnapshotResponse extends Response {
	snapshots: Snapshot[];
}
/**namespace:Modules.SnapshotAndRestore.Snapshot */
interface Snapshot {
	snapshot: string;
	indices: IndexName[];
	state: string;
	start_time: Date;
	start_time_in_millis: long;
	end_time: Date;
	end_time_in_millis: long;
	duration_in_millis: long;
	shards: ShardsMetaData;
	failures: SnapshotShardFailure[];
	Failures: string[];
}
/**namespace:Modules.SnapshotAndRestore.Snapshot */
interface SnapshotShardFailure {
	node_id: string;
	index: string;
	shard_id: string;
	reason: string;
	status: string;
}
/**namespace:Modules.SnapshotAndRestore.Snapshot.Snapshot */
interface SnapshotRequest extends Request {
	/**custom_serialization */
	indices: Indices;
	ignore_unavailable: boolean;
	include_global_state: boolean;
	partial: boolean;
	/**ambiguous_origin*/
	MasterTimeout: Time;
	/**ambiguous_origin*/
	WaitForCompletion: boolean;
	/**ambiguous_origin*/
	Source: string;
	/**ambiguous_origin*/
	FilterPath: string;
}
/**namespace:Modules.SnapshotAndRestore.Snapshot.Snapshot */
interface SnapshotResponse extends Response {
	accepted: boolean;
	snapshot: Snapshot;
}
/**namespace:Modules.SnapshotAndRestore.Snapshot.SnapshotStatus */
interface SnapshotStatusRequest extends Request {
	/**ambiguous_origin*/
	MasterTimeout: Time;
	/**ambiguous_origin*/
	Source: string;
	/**ambiguous_origin*/
	FilterPath: string;
}
/**namespace:Modules.SnapshotAndRestore.Snapshot.SnapshotStatus */
interface SnapshotStatusResponse extends Response {
	snapshots: SnapshotStatus[];
}
/**namespace:Modules.SnapshotAndRestore.Snapshot.SnapshotStatus */
interface SnapshotStatus {
	snapshot: string;
	repository: string;
	state: string;
	shards_stats: SnapshotShardsStats;
	stats: SnapshotStats;
	indices: Map<string, SnapshotIndexStats>;
}
/**namespace:Modules.SnapshotAndRestore.Snapshot.SnapshotStatus */
interface SnapshotShardsStats {
	initializing: long;
	started: long;
	finalizing: long;
	done: long;
	failed: long;
	total: long;
}
/**namespace:Modules.SnapshotAndRestore.Snapshot.SnapshotStatus */
interface SnapshotStats {
	number_of_files: long;
	processed_files: long;
	total_size_in_bytes: long;
	processed_size_in_bytes: long;
	start_time_in_millis: long;
	time_in_millis: long;
}
/**namespace:Modules.SnapshotAndRestore.Snapshot.SnapshotStatus */
interface SnapshotIndexStats {
	shards_stats: SnapshotShardsStats;
	stats: SnapshotStats;
	shards: Map<string, SnapshotShardsStats>;
}
/**namespace:Search.Count */
/**custom_serialization*/
interface CountRequest extends Request {
	query: QueryContainer;
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
interface CountResponse extends Response {
	count: long;
	_shards: ShardsMetaData;
}
/**namespace:Search.Explain */
interface ExplainRequest<TDocument> extends Request {
	query: QueryContainer;
	/**ambiguous_origin*/
	AnalyzeWildcard: boolean;
	/**ambiguous_origin*/
	Analyzer: string;
	/**ambiguous_origin*/
	DefaultOperator: DefaultOperator;
	/**ambiguous_origin*/
	Df: string;
	/**ambiguous_origin*/
	Fields: Field[];
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
	SourceExclude: Field[];
	/**ambiguous_origin*/
	SourceInclude: Field[];
	/**ambiguous_origin*/
	Source: string;
	/**ambiguous_origin*/
	FilterPath: string;
}
/**namespace:Search.Explain */
interface ExplainResponse<T> extends Response {
	matched: boolean;
	explanation: ExplanationDetail;
	get: InstantGet<T>;
}
/**namespace:Search.Explain */
interface ExplanationDetail {
	value: float;
	description: string;
	details: ExplanationDetail[];
}
/**namespace:Search.FieldStats */
interface FieldStatsRequest extends Request {
	fields: Field[];
	index_constraints: Map<Field, IndexConstraint>;
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
interface IndexConstraint {
	min_value: IndexConstraintComparison;
	max_value: IndexConstraintComparison;
}
/**namespace:Search.FieldStats */
interface IndexConstraintComparison {
	gte: string;
	gt: string;
	lte: string;
	lt: string;
	format: string;
}
/**namespace:Search.FieldStats */
interface FieldStatsResponse extends Response {
	_shards: ShardsMetaData;
	indices: Map<string, FieldStats>;
}
/**namespace:Search.FieldStats */
interface FieldStats {
	fields: Map<string, FieldStatsField>;
}
/**namespace:Search.FieldStats */
interface FieldStatsField {
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
interface MultiSearchRequest extends Request {
	Operations: Map<string, SearchRequest>;
	/**ambiguous_origin*/
	SearchType: SearchType;
	/**ambiguous_origin*/
	Source: string;
	/**ambiguous_origin*/
	FilterPath: string;
}
/**namespace:Search.MultiSearch */
interface MultiSearchResponse extends Response {
	IsValid: boolean;
	TotalResponses: integer;
	AllResponses: Response[];
}
/**namespace:CommonAbstractions.Response */
interface Response {
	ServerError: ServerError;
}
/**namespace:Search.Percolator.MultiPercolate */
/**custom_serialization*/
interface MultiPercolateRequest extends Request {
	Percolations: PercolateOperation[];
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
interface PercolateOperation {
	MultiPercolateName: string;
	size: integer;
	track_scores: boolean;
	sort: Sort[];
	highlight: Highlight;
	query: QueryContainer;
	filter: QueryContainer;
	aggs: Map<string, AggregationContainer>;
}
/**namespace:Search.Percolator.MultiPercolate */
interface MultiPercolateResponse extends Response {
	IsValid: boolean;
	Responses: PercolateResponse[];
}
/**namespace:Search.Percolator.Percolate */
interface PercolateResponse extends Response {
	matches: PercolatorMatch[];
}
/**namespace:Search.Percolator.Percolate */
interface PercolateCountResponse extends Response {
	took: integer;
	total: long;
	_shards: ShardsMetaData;
	ServerError: ServerError;
}
/**namespace:Search.Percolator.Percolate */
interface PercolatorMatch {
	highlight: Map<string, string[]>;
	_id: string;
	_index: string;
	_score: double;
}
/**namespace:Search.Percolator.Percolate */
interface PercolateRequest<TDocument> extends Request {
	MultiPercolateName: string;
	Highlight: Highlight;
	Query: QueryContainer;
	Filter: QueryContainer;
	Aggregations: Map<string, AggregationContainer>;
	Size: integer;
	TrackScores: boolean;
	doc: TDocument;
	Sort: Sort[];
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
interface PercolateCountRequest<TDocument> extends Request {
	MultiPercolateName: string;
	Size: integer;
	TrackScores: boolean;
	Sort: Sort[];
	Highlight: Highlight;
	Query: QueryContainer;
	Filter: QueryContainer;
	Aggregations: Map<string, AggregationContainer>;
	doc: TDocument;
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
interface RegisterPercolatorRequest extends Request {
	Metadata: Map<string, any>;
	Query: QueryContainer;
}
/**namespace:Search.Percolator.RegisterPercolator */
interface RegisterPercolatorResponse extends Response {
	created: boolean;
	_index: string;
	_type: string;
	_id: string;
	_version: integer;
}
/**namespace:Search.Percolator.UnregisterPercolator */
interface UnregisterPercolatorRequest extends Request {
}
/**namespace:Search.Percolator.UnregisterPercolator */
interface UnregisterPercolatorResponse extends Response {
	found: boolean;
	_index: string;
	_type: string;
	_id: string;
	_version: integer;
}
/**namespace:Search.Scroll.ClearScroll */
interface ClearScrollRequest extends Request {
	scroll_id: string[];
	/**ambiguous_origin*/
	Source: string;
	/**ambiguous_origin*/
	FilterPath: string;
}
/**namespace:Search.Scroll.ClearScroll */
interface ClearScrollResponse extends Response {
}
/**namespace:Search.Scroll.Scroll */
interface ScrollRequest extends Request {
	CovariantTypes: Types;
	scroll: Time;
	scroll_id: string;
	/**ambiguous_origin*/
	Source: string;
	/**ambiguous_origin*/
	FilterPath: string;
}
/**namespace:Search.Search.Hits */
interface Hit<T> {
	fields: Map<string, any>;
	_source: T;
	_index: string;
	/**custom_serialization */
	inner_hits: Map<string, InnerHitsResult>;
	_score: double;
	_type: string;
	_version: long;
	_id: string;
	_parent: string;
	_routing: string;
	_timestamp: long;
	_ttl: long;
	sort: any[];
	Highlights: Map<string, HighlightHit>;
	_explanation: Explanation;
	matched_queries: string[];
}
/**namespace:Search.Search.Hits */
interface InnerHitsResult {
	hits: InnerHitsMetaData;
}
/**namespace:Search.Search.Hits */
interface InnerHitsMetaData {
	total: long;
	max_score: double;
	hits: Hit<LazyDocument>[];
}
/**namespace:Search.Search.Highlighting */
interface HighlightHit {
	DocumentId: string;
	Field: string;
	Highlights: string[];
}
/**namespace:Search.Explain */
interface Explanation {
	value: float;
	description: string;
	details: ExplanationDetail[];
}
/**namespace:CommonAbstractions.LazyDocument */
/**custom_serialization*/
interface LazyDocument {
}
/**namespace:Search.Search */
/**custom_serialization*/
interface SearchRequest extends Request {
	timeout: string;
	from: integer;
	size: integer;
	explain: boolean;
	version: boolean;
	track_scores: boolean;
	min_score: double;
	terminate_after: long;
	fields: Field[];
	fielddata_fields: Field[];
	script_fields: Map<string, ScriptField>;
	/**custom_serialization */
	_source: SourceFilter;
	sort: Sort[];
	/**custom_serialization */
	indices_boost: Map<IndexName, double>;
	post_filter: QueryContainer;
	inner_hits: Map<string, InnerHitsContainer>;
	query: QueryContainer;
	rescore: Rescore;
	suggest: Map<string, SuggestBucket>;
	highlight: Highlight;
	aggs: Map<string, AggregationContainer>;
	/**ambiguous_origin*/
	Analyzer: string;
	/**ambiguous_origin*/
	AnalyzeWildcard: boolean;
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
	Lenient: boolean;
	/**ambiguous_origin*/
	LowercaseExpandedTerms: boolean;
	/**ambiguous_origin*/
	Preference: string;
	/**ambiguous_origin*/
	Routing: string[];
	/**ambiguous_origin*/
	Scroll: Time;
	/**ambiguous_origin*/
	SearchType: SearchType;
	/**ambiguous_origin*/
	Stats: string[];
	/**ambiguous_origin*/
	SuggestField: Field;
	/**ambiguous_origin*/
	SuggestMode: SuggestMode;
	/**ambiguous_origin*/
	SuggestSize: long;
	/**ambiguous_origin*/
	SuggestText: string;
	/**ambiguous_origin*/
	RequestCache: boolean;
	/**ambiguous_origin*/
	FilterPath: string;
}
/**namespace:Search.Search */
interface SearchResponse<T> extends Response {
	_shards: ShardsMetaData;
	hits: HitsMetaData<T>;
	/**custom_serialization */
	aggregations: Map<string, Aggregate>;
	Aggs: AggregationsHelper;
	suggest: Map<string, Suggest[]>;
	took: integer;
	timed_out: boolean;
	terminated_early: boolean;
	_scroll_id: string;
	Total: long;
	MaxScore: double;
	Documents: T[];
	Hits: Hit<T>[];
	Fields: Map<string, any>;
	Highlights: Map<string, Map<string, HighlightHit>>;
}
/**namespace:Search.Search.Hits */
interface HitsMetaData<T> {
	total: long;
	max_score: double;
	hits: Hit<T>[];
}
/**namespace:Aggregations */
interface Aggregate {
	Meta: Map<string, any>;
}
/**namespace:Aggregations */
interface AggregationsHelper {
	Aggregations: Map<string, Aggregate>;
}
/**namespace:Search.Suggesters */
interface Suggest {
	length: integer;
	offset: integer;
	text: string;
	options: SuggestOption[];
}
/**namespace:Search.Suggesters */
/**custom_serialization*/
interface SuggestOption {
	freq: integer;
	score: double;
	text: string;
	highlighted: string;
}
/**namespace:Search.SearchExists */
/**custom_serialization*/
interface SearchExistsRequest extends Request {
	query: QueryContainer;
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
interface SearchShardsRequest extends Request {
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
interface SearchShardsResponse extends Response {
	shards: SearchShard[][];
	nodes: Map<string, SearchNode>;
}
/**namespace:Search.SearchShards */
interface SearchShard {
	state: string;
	primary: boolean;
	node: string;
	relocating_node: string;
	shard: integer;
	index: string;
}
/**namespace:Search.SearchShards */
interface SearchNode {
	name: string;
	transport_address: string;
}
/**namespace:Search.SearchTemplate */
interface SearchTemplateRequest extends Request {
	template: string;
	file: string;
	id: string;
	params: Map<string, any>;
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
	Scroll: Time;
	/**ambiguous_origin*/
	SearchType: SearchType;
	/**ambiguous_origin*/
	Source: string;
	/**ambiguous_origin*/
	FilterPath: string;
}
/**namespace:Search.SearchTemplate.DeleteSearchTemplate */
interface DeleteSearchTemplateRequest extends Request {
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
interface DeleteSearchTemplateResponse extends Response {
}
/**namespace:Search.SearchTemplate.GetSearchTemplate */
interface GetSearchTemplateRequest extends Request {
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
interface GetSearchTemplateResponse extends Response {
	template: string;
}
/**namespace:Search.SearchTemplate.PutSearchTemplate */
/**custom_serialization*/
interface PutSearchTemplateRequest extends Request {
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
interface PutSearchTemplateResponse extends Response {
}
/**namespace:Search.Suggesters.Suggest */
/**custom_serialization*/
interface SuggestRequest extends Request {
	GlobalText: string;
	Suggest: Map<string, SuggestBucket>;
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
interface SuggestResponse extends Response {
	Shards: ShardsMetaData;
	Suggestions: Map<string, Suggest[]>;
}
/**namespace:Search.Validate */
interface ValidateQueryRequest extends Request {
	query: QueryContainer;
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
interface ValidateQueryResponse extends Response {
	valid: boolean;
	_shards: ShardsMetaData;
	explanations: ValidationExplanation[];
}
/**namespace:Search.Validate */
interface ValidationExplanation {
	index: string;
	valid: boolean;
	error: string;
	explanation: string;
}
/**namespace:DefaultLanguageConstruct */
interface CatHelpRequest extends Request {
	/**ambiguous_origin*/
	Help: boolean;
	/**ambiguous_origin*/
	Source: string;
	/**ambiguous_origin*/
	FilterPath: string;
}
/**namespace:DefaultLanguageConstruct */
interface CatNodeattrsRequest extends Request {
	/**ambiguous_origin*/
	Local: boolean;
	/**ambiguous_origin*/
	MasterTimeout: Time;
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
interface IndicesShardStoresRequest extends Request {
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
interface RenderSearchTemplateRequest extends Request {
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
interface ServerError {
	Error: Error;
	Status: integer;
}
/**namespace:DefaultLanguageConstruct */
interface Error {
	Index: string;
	Reason: string;
	ResourceId: string;
	ResourceType: string;
	Type: string;
	RootCause: RootCause[];
}
/**namespace:DefaultLanguageConstruct */
interface RootCause {
	Index: string;
	Reason: string;
	ResourceId: string;
	ResourceType: string;
	Type: string;
}
/**namespace:DefaultLanguageConstruct */
interface Map<TKey, TValue> {
	Key: TKey;
	Value: TValue;
}
/**namespace:CommonAbstractions.Infer.Types */
interface AllTypesMarker {
}
/**namespace:CommonAbstractions.Infer.Types */
interface ManyTypes {
	Types: TypeName[];
}
/**namespace:CommonAbstractions.Infer.Indices */
interface AllIndicesMarker {
}
/**namespace:CommonAbstractions.Infer.Indices */
interface ManyIndices {
	Indices: IndexName[];
}
/**namespace:Cluster.NodesStats */
interface ExtendedMemoryStats extends OsMemoryStats {
	free_percent: integer;
	used_percent: integer;
}
/**namespace:Cluster.NodesStats */
interface OsMemoryStats {
	total: string;
	total_in_bytes: long;
	free: string;
	free_in_bytes: long;
	used: string;
	used_in_bytes: long;
}
/**namespace:Cluster.NodesStats */
interface CPUStats {
	percent: integer;
	sys: string;
	sys_in_millis: long;
	user: string;
	user_in_millis: long;
	total: string;
	total_in_millis: long;
}
/**namespace:Cluster.NodesStats */
interface ProcessMemoryStats {
	resident: string;
	resident_in_bytes: long;
	share: string;
	share_in_bytes: long;
	total_virtual: string;
	total_virtual_in_bytes: long;
}
/**namespace:Cluster.NodesStats */
interface MemoryStats {
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
	pools: Map<string, JVMPool>;
}
/**namespace:Cluster.NodesStats */
interface ThreadStats {
	count: long;
	peak_count: long;
}
/**namespace:Cluster.NodesStats */
interface GarbageCollectionStats {
	/**custom_serialization */
	collectors: Map<string, GarbageCollectionGenerationStats>;
}
/**namespace:Cluster.NodesStats */
interface GarbageCollectionGenerationStats {
	collection_count: long;
	collection_time: string;
	collection_time_in_millis: long;
}
/**namespace:Cluster.NodesStats */
interface NodeBufferPool {
	count: long;
	used: string;
	used_in_bytes: long;
	total_capacity: string;
	total_capacity_in_bytes: long;
}
/**namespace:Cluster.NodesStats */
interface JvmClassesStats {
	current_loaded_count: long;
	total_loaded_count: long;
	total_unloaded_count: long;
}
/**namespace:Cluster.NodesStats */
interface JVMPool {
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
interface TotalFileSystemStats {
	available: string;
	available_in_bytes: long;
	free: string;
	free_in_bytes: long;
	total: string;
	total_in_bytes: long;
}
/**namespace:Cluster.NodesStats */
interface DataPathStats {
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
