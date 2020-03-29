export declare type Uri = string;
export declare type Date = string;
export declare type TimeSpan = string;
export declare type SourceDocument = Record<string, any>;
export declare type short = number;
export declare type byte = number;
export declare type integer = number;
export declare type long = number;
export declare type float = number;
export declare type double = number;
export interface PlainRequestBase<TParameters> {
    error_trace: boolean;
    filter_path: string[];
    human: boolean;
    pretty: boolean;
    source_query_string: string;
}
export interface Aggregate {
    meta: Record<string, object>;
}
export interface Aggregation {
    meta: Record<string, object>;
    name: string;
}
export interface AggregationContainer {
    adjacency_matrix: AdjacencyMatrixAggregation;
    aggs: Record<string, AggregationContainer>;
    avg: AverageAggregation;
    avg_bucket: AverageBucketAggregation;
    bucket_script: BucketScriptAggregation;
    bucket_selector: BucketSelectorAggregation;
    bucket_sort: BucketSortAggregation;
    cardinality: CardinalityAggregation;
    children: ChildrenAggregation;
    composite: CompositeAggregation;
    cumulative_sum: CumulativeSumAggregation;
    cumulative_cardinality: CumulativeCardinalityAggregation;
    date_histogram: DateHistogramAggregation;
    auto_date_histogram: AutoDateHistogramAggregation;
    date_range: DateRangeAggregation;
    derivative: DerivativeAggregation;
    extended_stats: ExtendedStatsAggregation;
    extended_stats_bucket: ExtendedStatsBucketAggregation;
    filter: FilterAggregation;
    filters: FiltersAggregation;
    geo_bounds: GeoBoundsAggregation;
    geo_centroid: GeoCentroidAggregation;
    geo_distance: GeoDistanceAggregation;
    geohash_grid: GeoHashGridAggregation;
    geotile_grid: GeoTileGridAggregation;
    global: GlobalAggregation;
    histogram: HistogramAggregation;
    ip_range: IpRangeAggregation;
    matrix_stats: MatrixStatsAggregation;
    max: MaxAggregation;
    max_bucket: MaxBucketAggregation;
    meta: Record<string, object>;
    min: MinAggregation;
    min_bucket: MinBucketAggregation;
    missing: MissingAggregation;
    moving_avg: MovingAverageAggregation;
    moving_fn: MovingFunctionAggregation;
    nested: NestedAggregation;
    parent: ParentAggregation;
    percentile_ranks: PercentileRanksAggregation;
    percentiles: PercentilesAggregation;
    percentiles_bucket: PercentilesBucketAggregation;
    range: RangeAggregation;
    rare_terms: RareTermsAggregation;
    reverse_nested: ReverseNestedAggregation;
    sampler: SamplerAggregation;
    scripted_metric: ScriptedMetricAggregation;
    serial_diff: SerialDifferencingAggregation;
    significant_terms: SignificantTermsAggregation;
    significant_text: SignificantTextAggregation;
    stats: StatsAggregation;
    stats_bucket: StatsBucketAggregation;
    sum: SumAggregation;
    sum_bucket: SumBucketAggregation;
    terms: TermsAggregation;
    top_hits: TopHitsAggregation;
    value_count: ValueCountAggregation;
    weighted_avg: WeightedAverageAggregation;
    median_absolute_deviation: MedianAbsoluteDeviationAggregation;
}
export interface BucketAggregation {
    aggregations: Record<string, AggregationContainer>;
}
export interface AdjacencyMatrixAggregation {
    filters: Record<string, QueryContainer>;
}
export interface AutoDateHistogramAggregation {
    field: Field;
    buckets: integer;
    format: string;
    missing: Date;
    offset: string;
    params: Record<string, object>;
    script: Script;
    time_zone: string;
    minimum_interval: MinimumInterval;
}
export interface ChildrenAggregation {
    type: RelationName;
}
export interface CompositeAggregation {
    after: Record<string, object>;
    size: integer;
    sources: CompositeAggregationSource[];
}
export interface CompositeAggregationSource {
    field: Field;
    missing_bucket: boolean;
    name: string;
    order: SortOrder;
    source_type: string;
}
export interface DateHistogramAggregation {
    extended_bounds: ExtendedBounds<DateMath>;
    field: Field;
    format: string;
    interval: DateInterval | Time;
    calendar_interval: DateInterval | Time;
    fixed_interval: DateInterval | Time;
    min_doc_count: integer;
    missing: Date;
    offset: string;
    order: HistogramOrder;
    params: Record<string, object>;
    script: Script;
    time_zone: string;
}
export interface DateRangeAggregation {
    field: Field;
    format: string;
    missing: object;
    ranges: DateRangeExpression[];
    time_zone: string;
}
export interface DateRangeExpression {
    from: DateMath;
    key: string;
    to: DateMath;
}
export interface FilterAggregation {
    filter: QueryContainer;
}
export interface FiltersAggregation {
    filters: Record<string, QueryContainer> | QueryContainer[];
    other_bucket: boolean;
    other_bucket_key: string;
}
export interface GeoDistanceAggregation {
    distance_type: GeoDistanceType;
    field: Field;
    origin: GeoLocation;
    ranges: AggregationRange[];
    unit: DistanceUnit;
}
export interface GeoHashGridAggregation {
    field: Field;
    precision: GeoHashPrecision;
    shard_size: integer;
    size: integer;
}
export interface GeoTileGridAggregation {
    field: Field;
    precision: GeoTilePrecision;
    shard_size: integer;
    size: integer;
}
export interface GlobalAggregation {
}
export interface ExtendedBounds<T> {
    max: T;
    min: T;
}
export interface HistogramAggregation {
    extended_bounds: ExtendedBounds<double>;
    field: Field;
    interval: double;
    min_doc_count: integer;
    missing: double;
    offset: double;
    order: HistogramOrder;
    script: Script;
}
export interface HistogramOrder {
    count_ascending: HistogramOrder;
    count_descending: HistogramOrder;
    key: string;
    key_ascending: HistogramOrder;
    key_descending: HistogramOrder;
    order: SortOrder;
}
export interface IpRangeAggregation {
    field: Field;
    ranges: IpRangeAggregationRange[];
}
export interface IpRangeAggregationRange {
    from: string;
    mask: string;
    to: string;
}
export interface MissingAggregation {
    field: Field;
}
export interface NestedAggregation {
    path: Field;
}
export interface ParentAggregation {
    type: RelationName;
}
export interface RangeAggregation {
    field: Field;
    ranges: AggregationRange[];
    script: Script;
}
export interface RareTermsAggregation {
    exclude: TermsExclude;
    field: Field;
    include: TermsInclude;
    max_doc_count: long;
    missing: object;
    precision: double;
}
export interface ReverseNestedAggregation {
    path: Field;
}
export interface SamplerAggregation {
    execution_hint: SamplerAggregationExecutionHint;
    max_docs_per_value: integer;
    script: Script;
    shard_size: integer;
}
export interface IncludeExclude {
    pattern: string;
    values: string[];
}
export interface SignificantTermsAggregation {
    background_filter: QueryContainer;
    chi_square: ChiSquareHeuristic;
    exclude: IncludeExclude;
    execution_hint: TermsAggregationExecutionHint;
    field: Field;
    gnd: GoogleNormalizedDistanceHeuristic;
    include: IncludeExclude;
    min_doc_count: long;
    mutual_information: MutualInformationHeuristic;
    percentage: PercentageScoreHeuristic;
    script_heuristic: ScriptedHeuristic;
    shard_min_doc_count: long;
    shard_size: integer;
    size: integer;
}
export interface ChiSquareHeuristic {
    background_is_superset: boolean;
    include_negatives: boolean;
}
export interface GoogleNormalizedDistanceHeuristic {
    background_is_superset: boolean;
}
export interface MutualInformationHeuristic {
    background_is_superset: boolean;
    include_negatives: boolean;
}
export interface PercentageScoreHeuristic {
}
export interface ScriptedHeuristic {
    script: Script;
}
export interface SignificantTextAggregation {
    background_filter: QueryContainer;
    chi_square: ChiSquareHeuristic;
    exclude: IncludeExclude;
    execution_hint: TermsAggregationExecutionHint;
    field: Field;
    filter_duplicate_text: boolean;
    gnd: GoogleNormalizedDistanceHeuristic;
    include: IncludeExclude;
    min_doc_count: long;
    mutual_information: MutualInformationHeuristic;
    percentage: PercentageScoreHeuristic;
    script_heuristic: ScriptedHeuristic;
    shard_min_doc_count: long;
    shard_size: integer;
    size: integer;
    source_fields: Field[];
}
export interface TermsAggregation {
    collect_mode: TermsAggregationCollectMode;
    exclude: TermsExclude;
    execution_hint: TermsAggregationExecutionHint;
    field: Field;
    include: TermsInclude;
    min_doc_count: integer;
    missing: object;
    order: TermsOrder[];
    script: Script;
    shard_size: integer;
    show_term_doc_count_error: boolean;
    size: integer;
}
export interface TermsExclude {
    pattern: string;
    values: string[];
}
export interface TermsInclude {
    num_partitions: long;
    partition: long;
    pattern: string;
    values: string[];
}
export interface TermsOrder {
    count_ascending: TermsOrder;
    count_descending: TermsOrder;
    key: string;
    key_ascending: TermsOrder;
    key_descending: TermsOrder;
    order: SortOrder;
}
export interface MatrixAggregation {
    fields: Field[];
    missing: Record<Field, double>;
}
export interface MatrixStatsAggregation {
    mode: MatrixStatsMode;
}
export interface MetricAggregation {
    field: Field;
    missing: double;
    script: Script;
}
export interface AverageAggregation {
}
export interface CardinalityAggregation {
    precision_threshold: integer;
    rehash: boolean;
}
export interface ExtendedStatsAggregation {
    sigma: double;
}
export interface GeoBoundsAggregation {
    wrap_longitude: boolean;
}
export interface GeoCentroidAggregation {
}
export interface MaxAggregation {
}
export interface MedianAbsoluteDeviationAggregation {
    compression: double;
}
export interface MinAggregation {
}
export interface PercentileRanksAggregation {
    method: PercentilesMethod;
    values: double[];
    keyed: boolean;
}
export interface PercentilesAggregation {
    method: PercentilesMethod;
    percents: double[];
    keyed: boolean;
}
export interface PercentilesMethod {
}
export interface ScriptedMetricAggregation {
    combine_script: Script;
    init_script: Script;
    map_script: Script;
    params: Record<string, object>;
    reduce_script: Script;
}
export interface StatsAggregation {
}
export interface SumAggregation {
}
export interface TopHitsAggregation {
    docvalue_fields: Field[];
    explain: boolean;
    from: integer;
    highlight: Highlight;
    script_fields: Record<string, ScriptField>;
    size: integer;
    sort: Sort[];
    _source: boolean | SourceFilter;
    stored_fields: Field[];
    track_scores: boolean;
    version: boolean;
}
export interface ValueCountAggregation {
}
export interface WeightedAverageAggregation {
    format: string;
    value: WeightedAverageValue;
    value_type: ValueType;
    weight: WeightedAverageValue;
}
export interface WeightedAverageValue {
    field: Field;
    missing: double;
    script: Script;
}
export interface BucketsPath {
}
export interface PipelineAggregation {
    buckets_path: BucketsPath;
    format: string;
    gap_policy: GapPolicy;
}
export interface AverageBucketAggregation {
}
export interface BucketScriptAggregation {
    script: Script;
}
export interface BucketSelectorAggregation {
    script: Script;
}
export interface BucketSortAggregation {
    from: integer;
    gap_policy: GapPolicy;
    size: integer;
    sort: Sort[];
}
export interface CumulativeCardinalityAggregation {
}
export interface CumulativeSumAggregation {
}
export interface DerivativeAggregation {
}
export interface ExtendedStatsBucketAggregation {
    sigma: double;
}
export interface MaxBucketAggregation {
}
export interface MinBucketAggregation {
}
export interface MovingAverageAggregation {
    minimize: boolean;
    model: MovingAverageModel;
    predict: integer;
    window: integer;
}
export interface MovingAverageModel {
    name: string;
}
export interface MovingFunctionAggregation {
    script: string;
    window: integer;
    shift: integer;
}
export interface PercentilesBucketAggregation {
    percents: double[];
}
export interface SerialDifferencingAggregation {
    lag: integer;
}
export interface StatsBucketAggregation {
}
export interface SumBucketAggregation {
}
export declare type StopWords = string | string[];
export interface AnalyzerBase {
    type: string;
    version: string;
}
export interface CustomAnalyzer {
    char_filter: string[];
    filter: string[];
    position_offset_gap: integer;
    tokenizer: string;
}
export interface FingerprintAnalyzer {
    max_output_size: integer;
    preserve_original: boolean;
    separator: string;
    stopwords: StopWords;
    stopwords_path: string;
}
export interface IAnalyzer {
    type: string;
    version: string;
}
export interface KeywordAnalyzer {
}
export interface LanguageAnalyzer {
    language: Language;
    stem_exclusion: string[];
    stopwords: StopWords;
    stopwords_path: string;
    type: string;
}
export interface NoriAnalyzer {
    decompound_mode: NoriDecompoundMode;
    stoptags: string[];
    user_dictionary: string;
}
export interface PatternAnalyzer {
    flags: string;
    lowercase: boolean;
    pattern: string;
    stopwords: StopWords;
}
export interface SimpleAnalyzer {
}
export interface SnowballAnalyzer {
    language: SnowballLanguage;
    stopwords: StopWords;
}
export interface StandardAnalyzer {
    max_token_length: integer;
    stopwords: StopWords;
}
export interface StopAnalyzer {
    stopwords: StopWords;
    stopwords_path: string;
}
export interface WhitespaceAnalyzer {
}
export interface CharFilterBase {
    type: string;
    version: string;
}
export interface HtmlStripCharFilter {
}
export interface ICharFilter {
    type: string;
    version: string;
}
export interface MappingCharFilter {
    mappings: string[];
    mappings_path: string;
}
export interface PatternReplaceCharFilter {
    flags: string;
    pattern: string;
    replacement: string;
}
export interface IcuAnalyzer {
    method: IcuNormalizationType;
    mode: IcuNormalizationMode;
}
export interface IcuCollationTokenFilter {
    alternate: IcuCollationAlternate;
    caseFirst: IcuCollationCaseFirst;
    caseLevel: boolean;
    country: string;
    decomposition: IcuCollationDecomposition;
    hiraganaQuaternaryMode: boolean;
    language: string;
    numeric: boolean;
    strength: IcuCollationStrength;
    variableTop: string;
    variant: string;
}
export interface IcuFoldingTokenFilter {
    unicode_set_filter: string;
}
export interface IcuNormalizationCharFilter {
    mode: IcuNormalizationMode;
    name: IcuNormalizationType;
}
export interface IcuNormalizationTokenFilter {
    name: IcuNormalizationType;
}
export interface IcuTokenizer {
    rule_files: string;
}
export interface IcuTransformTokenFilter {
    dir: IcuTransformDirection;
    id: string;
}
export interface KuromojiAnalyzer {
    mode: KuromojiTokenizationMode;
    user_dictionary: string;
}
export interface KuromojiIterationMarkCharFilter {
    normalize_kana: boolean;
    normalize_kanji: boolean;
}
export interface KuromojiPartOfSpeechTokenFilter {
    stoptags: string[];
}
export interface KuromojiReadingFormTokenFilter {
    use_romaji: boolean;
}
export interface KuromojiStemmerTokenFilter {
    minimum_length: integer;
}
export interface KuromojiTokenizer {
    discard_punctuation: boolean;
    mode: KuromojiTokenizationMode;
    nbest_cost: integer;
    nbest_examples: string;
    user_dictionary: string;
    user_dictionary_rules: string[];
}
export interface PhoneticTokenFilter {
    encoder: PhoneticEncoder;
    languageset: PhoneticLanguage[];
    max_code_len: integer;
    name_type: PhoneticNameType;
    replace: boolean;
    rule_type: PhoneticRuleType;
}
export interface AsciiFoldingTokenFilter {
    preserve_original: boolean;
}
export interface CommonGramsTokenFilter {
    common_words: string[];
    common_words_path: string;
    ignore_case: boolean;
    query_mode: boolean;
}
export interface ConditionTokenFilter {
    script: Script;
    filter: string[];
}
export interface ElisionTokenFilter {
    articles: string[];
    articles_case: boolean;
}
export interface FingerprintTokenFilter {
    max_output_size: integer;
    separator: string;
}
export interface HunspellTokenFilter {
    dedup: boolean;
    dictionary: string;
    locale: string;
    longest_only: boolean;
}
export interface ITokenFilter {
    type: string;
    version: string;
}
export interface KStemTokenFilter {
}
export interface KeepTypesTokenFilter {
    mode: KeepTypesMode;
    types: string[];
}
export interface KeepWordsTokenFilter {
    keep_words: string[];
    keep_words_case: boolean;
    keep_words_path: string;
}
export interface KeywordMarkerTokenFilter {
    ignore_case: boolean;
    keywords: string[];
    keywords_path: string;
    keywords_pattern: string;
}
export interface LengthTokenFilter {
    max: integer;
    min: integer;
}
export interface LimitTokenCountTokenFilter {
    consume_all_tokens: boolean;
    max_token_count: integer;
}
export interface LowercaseTokenFilter {
    language: string;
}
export interface MultiplexerTokenFilter {
    filters: string[];
    preserve_original: boolean;
}
export interface NGramTokenFilter {
    max_gram: integer;
    min_gram: integer;
}
export interface NoriPartOfSpeechTokenFilter {
    stoptags: string[];
}
export interface PatternCaptureTokenFilter {
    patterns: string[];
    preserve_original: boolean;
}
export interface PatternReplaceTokenFilter {
    flags: string;
    pattern: string;
    replacement: string;
}
export interface PorterStemTokenFilter {
}
export interface PredicateTokenFilter {
    script: Script;
}
export interface RemoveDuplicatesTokenFilter {
}
export interface ReverseTokenFilter {
}
export interface SnowballTokenFilter {
    language: SnowballLanguage;
}
export interface StemmerOverrideTokenFilter {
    rules: string[];
    rules_path: string;
}
export interface StemmerTokenFilter {
    language: string;
}
export interface TokenFilterBase {
    type: string;
    version: string;
}
export interface TrimTokenFilter {
}
export interface TruncateTokenFilter {
    length: integer;
}
export interface UniqueTokenFilter {
    only_on_same_position: boolean;
}
export interface UppercaseTokenFilter {
}
export interface CompoundWordTokenFilterBase {
    hyphenation_patterns_path: string;
    max_subword_size: integer;
    min_subword_size: integer;
    min_word_size: integer;
    only_longest_match: boolean;
    word_list: string[];
    word_list_path: string;
}
export interface DictionaryDecompounderTokenFilter {
}
export interface HyphenationDecompounderTokenFilter {
}
export interface DelimitedPayloadTokenFilter {
    delimiter: string;
    encoding: DelimitedPayloadEncoding;
}
export interface EdgeNGramTokenFilter {
    max_gram: integer;
    min_gram: integer;
    side: EdgeNGramSide;
}
export interface ShingleTokenFilter {
    filler_token: string;
    max_shingle_size: integer;
    min_shingle_size: integer;
    output_unigrams: boolean;
    output_unigrams_if_no_shingles: boolean;
    token_separator: string;
}
export interface StopTokenFilter {
    ignore_case: boolean;
    remove_trailing: boolean;
    stopwords: StopWords;
    stopwords_path: string;
}
export interface SynonymGraphTokenFilter {
    expand: boolean;
    format: SynonymFormat;
    lenient: boolean;
    synonyms: string[];
    synonyms_path: string;
    tokenizer: string;
}
export interface SynonymTokenFilter {
    expand: boolean;
    format: SynonymFormat;
    lenient: boolean;
    synonyms: string[];
    synonyms_path: string;
    tokenizer: string;
}
export interface WordDelimiterTokenFilter {
    catenate_all: boolean;
    catenate_numbers: boolean;
    catenate_words: boolean;
    generate_number_parts: boolean;
    generate_word_parts: boolean;
    preserve_original: boolean;
    protected_words: string[];
    protected_words_path: string;
    split_on_case_change: boolean;
    split_on_numerics: boolean;
    stem_english_possessive: boolean;
    type_table: string[];
    type_table_path: string;
}
export interface WordDelimiterGraphTokenFilter {
    adjust_offsets: boolean;
    catenate_all: boolean;
    catenate_numbers: boolean;
    catenate_words: boolean;
    generate_number_parts: boolean;
    generate_word_parts: boolean;
    preserve_original: boolean;
    protected_words: string[];
    protected_words_path: string;
    split_on_case_change: boolean;
    split_on_numerics: boolean;
    stem_english_possessive: boolean;
    type_table: string[];
    type_table_path: string;
}
export interface CharGroupTokenizer {
    tokenize_on_chars: string[];
}
export interface ITokenizer {
    type: string;
    version: string;
}
export interface KeywordTokenizer {
    buffer_size: integer;
}
export interface LetterTokenizer {
}
export interface LowercaseTokenizer {
}
export interface NoriTokenizer {
    decompound_mode: NoriDecompoundMode;
    user_dictionary: string;
    user_dictionary_rules: string[];
}
export interface PathHierarchyTokenizer {
    buffer_size: integer;
    delimiter: string;
    replacement: string;
    reverse: boolean;
    skip: integer;
}
export interface PatternTokenizer {
    flags: string;
    group: integer;
    pattern: string;
}
export interface StandardTokenizer {
    max_token_length: integer;
}
export interface TokenizerBase {
    type: string;
    version: string;
}
export interface UaxEmailUrlTokenizer {
    max_token_length: integer;
}
export interface WhitespaceTokenizer {
    max_token_length: integer;
}
export interface EdgeNGramTokenizer {
    max_gram: integer;
    min_gram: integer;
    token_chars: TokenChar[];
}
export interface NGramTokenizer {
    max_gram: integer;
    min_gram: integer;
    token_chars: TokenChar[];
}
export interface CatResponse<TCatRecord> {
    records: TCatRecord[];
}
export interface ICatRecord {
}
export interface CatAliasesRecord {
    alias: string;
    filter: string;
    index: string;
    indexRouting: string;
    searchRouting: string;
}
export interface CatAliasesRequest {
    format: string;
    headers: string[];
    help: boolean;
    local: boolean;
    master_timeout: Time;
    sort_by_columns: string[];
    verbose: boolean;
}
export interface CatAliasesResponse {
    records: CatAliasesRecord[];
}
export interface CatAllocationRecord {
    diskAvail: string;
    diskRatio: string;
    diskUsed: string;
    ip: string;
    node: string;
    shards: string;
}
export interface CatAllocationRequest {
    bytes: Bytes;
    format: string;
    headers: string[];
    help: boolean;
    local: boolean;
    master_timeout: Time;
    sort_by_columns: string[];
    verbose: boolean;
}
export interface CatAllocationResponse {
    records: CatAllocationRecord[];
}
export interface CatCountRecord {
    count: string;
    epoch: string;
    timestamp: string;
}
export interface CatCountRequest {
    format: string;
    headers: string[];
    help: boolean;
    local: boolean;
    master_timeout: Time;
    sort_by_columns: string[];
    verbose: boolean;
}
export interface CatCountResponse {
    records: CatCountRecord[];
}
export interface CatFielddataRecord {
    field: string;
    host: string;
    id: string;
    ip: string;
    node: string;
    size: string;
}
export interface CatFielddataRequest {
    bytes: Bytes;
    format: string;
    headers: string[];
    help: boolean;
    local: boolean;
    master_timeout: Time;
    sort_by_columns: string[];
    verbose: boolean;
}
export interface CatFielddataResponse {
    records: CatFielddataRecord[];
}
export interface CatHealthRecord {
    cluster: string;
    epoch: string;
    init: string;
    "node.data": string;
    "node.total": string;
    pending_tasks: string;
    pri: string;
    relo: string;
    shards: string;
    status: string;
    timestamp: string;
    unassign: string;
}
export interface CatHealthRequest {
    format: string;
    headers: string[];
    help: boolean;
    include_timestamp: boolean;
    local: boolean;
    master_timeout: Time;
    sort_by_columns: string[];
    verbose: boolean;
}
export interface CatHealthResponse {
    records: CatHealthRecord[];
}
export interface CatHelpRecord {
    endpoint: string;
}
export interface CatHelpRequest {
    help: boolean;
    sort_by_columns: string[];
}
export interface CatHelpResponse {
    records: CatHelpRecord[];
}
export interface CatIndicesRecord {
    "docs.count": string;
    "docs.deleted": string;
    health: string;
    index: string;
    uuid: string;
    pri: string;
    "pri.store.size": string;
    rep: string;
    status: string;
    "store.size": string;
    tm: string;
}
export interface CatIndicesRequest {
    bytes: Bytes;
    format: string;
    headers: string[];
    health: Health;
    help: boolean;
    include_unloaded_segments: boolean;
    local: boolean;
    master_timeout: Time;
    pri: boolean;
    sort_by_columns: string[];
    verbose: boolean;
}
export interface CatIndicesResponse {
    records: CatIndicesRecord[];
}
export interface CatMasterRecord {
    id: string;
    ip: string;
    node: string;
}
export interface CatMasterRequest {
    format: string;
    headers: string[];
    help: boolean;
    local: boolean;
    master_timeout: Time;
    sort_by_columns: string[];
    verbose: boolean;
}
export interface CatMasterResponse {
    records: CatMasterRecord[];
}
export interface CatNodeAttributesRecord {
    attr: string;
    host: string;
    id: string;
    ip: string;
    node: string;
    port: long;
    pid: long;
    value: string;
}
export interface CatNodeAttributesRequest {
    format: string;
    headers: string[];
    help: boolean;
    local: boolean;
    master_timeout: Time;
    sort_by_columns: string[];
    verbose: boolean;
}
export interface CatNodeAttributesResponse {
    records: CatNodeAttributesRecord[];
}
export interface CatNodesRecord {
    build: string;
    completion_size: string;
    cpu: string;
    disk_available: string;
    fielddata_evictions: string;
    fielddata_memory: string;
    file_descriptor_current: integer;
    file_descriptor_max: integer;
    file_descriptor_percent: integer;
    filter_cache_evictions: string;
    filter_cache_memory: string;
    flush_total: string;
    flush_total_time: string;
    get_current: string;
    get_exists_time: string;
    get_exists_total: string;
    get_missing_time: string;
    get_missing_total: string;
    get_time: string;
    get_total: string;
    heap_current: string;
    heap_max: string;
    heap_percent: string;
    id_cache_memory: string;
    indexing_delete_current: string;
    indexing_delete_time: string;
    indexing_delete_total: string;
    indexing_index_current: string;
    indexing_index_time: string;
    indexing_index_total: string;
    ip: string;
    jdk: string;
    load_15m: string;
    load_5m: string;
    load_1m: string;
    master: string;
    merges_current: string;
    merges_current_docs: string;
    merges_current_size: string;
    merges_total: string;
    merges_total_docs: string;
    merges_total_time: string;
    name: string;
    node_id: string;
    node_role: string;
    percolate_current: string;
    percolate_memory: string;
    percolate_queries: string;
    percolate_time: string;
    percolate_total: string;
    pid: string;
    port: string;
    ram_current: string;
    ram_max: string;
    ram_percent: string;
    refresh_time: string;
    refresh_total: string;
    search_fetch_current: string;
    search_fetch_time: string;
    search_fetch_total: string;
    search_open_contexts: string;
    search_query_current: string;
    search_query_time: string;
    search_query_total: string;
    segments_count: string;
    segments_index_writer_max_memory: string;
    segments_index_writer_memory: string;
    segments_memory: string;
    segments_version_map_memory: string;
    uptime: string;
    version: string;
}
export interface CatNodesRequest {
    format: string;
    full_id: boolean;
    headers: string[];
    help: boolean;
    local: boolean;
    master_timeout: Time;
    sort_by_columns: string[];
    verbose: boolean;
}
export interface CatNodesResponse {
    records: CatNodesRecord[];
}
export interface CatPendingTasksRecord {
    insertOrder: integer;
    priority: string;
    source: string;
    timeInQueue: string;
}
export interface CatPendingTasksRequest {
    format: string;
    headers: string[];
    help: boolean;
    local: boolean;
    master_timeout: Time;
    sort_by_columns: string[];
    verbose: boolean;
}
export interface CatPendingTasksResponse {
    records: CatPendingTasksRecord[];
}
export interface CatPluginsRecord {
    component: string;
    description: string;
    id: string;
    isolation: string;
    name: string;
    type: string;
    url: string;
    version: string;
}
export interface CatPluginsRequest {
    format: string;
    headers: string[];
    help: boolean;
    local: boolean;
    master_timeout: Time;
    sort_by_columns: string[];
    verbose: boolean;
}
export interface CatPluginsResponse {
    records: CatPluginsRecord[];
}
export interface CatRecoveryRecord {
    bytes: string;
    bytes_percent: string;
    bytes_recovered: string;
    bytes_total: string;
    files: string;
    files_percent: string;
    files_recovered: string;
    files_total: string;
    index: string;
    repository: string;
    shard: string;
    snapshot: string;
    source_host: string;
    source_node: string;
    stage: string;
    target_host: string;
    target_node: string;
    time: string;
    translog_ops: long;
    translog_ops_percent: string;
    translog_ops_recovered: long;
    type: string;
}
export interface CatRecoveryRequest {
    bytes: Bytes;
    format: string;
    headers: string[];
    help: boolean;
    master_timeout: Time;
    sort_by_columns: string[];
    verbose: boolean;
}
export interface CatRecoveryResponse {
    records: CatRecoveryRecord[];
}
export interface CatRepositoriesRecord {
    id: string;
    type: string;
}
export interface CatRepositoriesRequest {
    format: string;
    headers: string[];
    help: boolean;
    local: boolean;
    master_timeout: Time;
    sort_by_columns: string[];
    verbose: boolean;
}
export interface CatRepositoriesResponse {
    records: CatRepositoriesRecord[];
}
export interface CatSegmentsRecord {
    committed: string;
    compound: string;
    "docs.count": string;
    "docs.deleted": string;
    generation: string;
    id: string;
    index: string;
    ip: string;
    prirep: string;
    searchable: string;
    segment: string;
    shard: string;
    size: string;
    "size.memory": string;
    version: string;
}
export interface CatSegmentsRequest {
    bytes: Bytes;
    format: string;
    headers: string[];
    help: boolean;
    sort_by_columns: string[];
    verbose: boolean;
}
export interface CatSegmentsResponse {
    records: CatSegmentsRecord[];
}
export interface CatShardsRecord {
    "completion.size": string;
    docs: string;
    "fielddata.evictions": string;
    "fielddata.memory_size": string;
    "filter_cache.memory_size": string;
    "flush.total": string;
    "flush.total_time": string;
    "get.current": string;
    "get.exists_time": string;
    "get.exists_total": string;
    "get.missing_time": string;
    "get.missing_total": string;
    "get.time": string;
    "get.total": string;
    id: string;
    "id_cache.memory_size": string;
    index: string;
    "indexing.delete_current": string;
    "indexing.delete_time": string;
    "indexing.delete_total": string;
    "indexing.index_current": string;
    "indexing.index_time": string;
    "indexing.index_total": string;
    ip: string;
    "merges.current": string;
    "merges.current_docs": string;
    "merges.current_size": string;
    "merges.total_docs": string;
    "merges.total_size": string;
    "merges.total_time": string;
    node: string;
    "percolate.current": string;
    "percolate.memory_size": string;
    "percolate.queries": string;
    "percolate.time": string;
    "percolate.total": string;
    prirep: string;
    "refresh.time": string;
    "refresh.total": string;
    "search.fetch_current": string;
    "search.fetch_time": string;
    "search.fetch_total": string;
    "search.open_contexts": string;
    "search.query_current": string;
    "search.query_time": string;
    "search.query_total": string;
    "segments.count": string;
    "segments.fixed_bitset_memory": string;
    "segments.index_writer_max_memory": string;
    "segments.index_writer_memory": string;
    "segments.memory": string;
    "segments.version_map_memory": string;
    shard: string;
    state: string;
    store: string;
    "warmer.current": string;
    "warmer.total": string;
    "warmer.total_time": string;
}
export interface CatShardsRequest {
    bytes: Bytes;
    format: string;
    headers: string[];
    help: boolean;
    local: boolean;
    master_timeout: Time;
    sort_by_columns: string[];
    verbose: boolean;
}
export interface CatShardsResponse {
    records: CatShardsRecord[];
}
export interface CatSnapshotsRecord {
    duration: Time;
    end_epoch: long;
    end_time: string;
    failed_shards: long;
    id: string;
    indices: long;
    start_epoch: long;
    start_time: string;
    status: string;
    successful_shards: long;
    total_shards: long;
}
export interface CatSnapshotsRequest {
    format: string;
    headers: string[];
    help: boolean;
    ignore_unavailable: boolean;
    master_timeout: Time;
    sort_by_columns: string[];
    verbose: boolean;
}
export interface CatSnapshotsResponse {
    records: CatSnapshotsRecord[];
}
export interface CatTasksRecord {
    action: string;
    ip: string;
    node: string;
    parent_task_id: string;
    running_time: string;
    start_time: string;
    task_id: string;
    timestamp: string;
    type: string;
}
export interface CatTasksRequest {
    actions: string[];
    detailed: boolean;
    format: string;
    headers: string[];
    help: boolean;
    node_id: string[];
    parent_task: long;
    sort_by_columns: string[];
    verbose: boolean;
}
export interface CatTasksResponse {
    records: CatTasksRecord[];
}
export interface CatTemplatesRecord {
    index_patterns: string;
    name: string;
    order: long;
    version: long;
}
export interface CatTemplatesRequest {
    format: string;
    headers: string[];
    help: boolean;
    local: boolean;
    master_timeout: Time;
    sort_by_columns: string[];
    verbose: boolean;
}
export interface CatTemplatesResponse {
    records: CatTemplatesRecord[];
}
export interface CatThreadPoolRecord {
    active: integer;
    completed: long;
    core: integer;
    ephemeral_node_id: string;
    host: string;
    ip: string;
    keep_alive: Time;
    largest: integer;
    max: integer;
    name: string;
    node_id: string;
    node_name: string;
    pool_size: integer;
    port: integer;
    pid: integer;
    queue: integer;
    queue_size: integer;
    rejected: long;
    size: integer;
    type: string;
}
export interface CatThreadPoolRequest {
    format: string;
    headers: string[];
    help: boolean;
    local: boolean;
    master_timeout: Time;
    size: Size;
    sort_by_columns: string[];
    verbose: boolean;
}
export interface CatThreadPoolResponse {
    records: CatThreadPoolRecord[];
}
export interface NodeStatistics {
    failed: integer;
    successful: integer;
    total: integer;
    failures: ErrorCause[];
}
export interface NodesResponseBase {
    _nodes: NodeStatistics;
}
export interface AllocationDecision {
    decider: string;
    decision: AllocationExplainDecision;
    explanation: string;
}
export interface AllocationStore {
    allocation_id: string;
    found: boolean;
    in_sync: boolean;
    matching_size_in_bytes: long;
    matching_sync_id: boolean;
    store_exception: string;
}
export interface ClusterAllocationExplainRequest {
    index: IndexName;
    primary: boolean;
    shard: integer;
    include_disk_info: boolean;
    include_yes_decisions: boolean;
}
export interface ClusterAllocationExplainResponse {
    allocate_explanation: string;
    allocation_delay: string;
    allocation_delay_in_millis: long;
    can_allocate: Decision;
    can_move_to_other_node: Decision;
    can_rebalance_cluster: Decision;
    can_rebalance_cluster_decisions: AllocationDecision[];
    can_rebalance_to_other_node: Decision;
    can_remain_decisions: AllocationDecision[];
    can_remain_on_current_node: Decision;
    configured_delay: string;
    configured_delay_in_mills: long;
    current_node: CurrentNode;
    current_state: string;
    index: string;
    move_explanation: string;
    node_allocation_decisions: NodeAllocationExplanation[];
    primary: boolean;
    rebalance_explanation: string;
    remaining_delay: string;
    remaining_delay_in_millis: long;
    shard: integer;
    unassigned_info: UnassignedInformation;
}
export interface CurrentNode {
    id: string;
    name: string;
    attributes: Record<string, string>;
    transport_address: string;
    weight_ranking: integer;
}
export interface NodeAllocationExplanation {
    deciders: AllocationDecision[];
    node_attributes: Record<string, string>;
    node_decision: Decision;
    node_id: string;
    node_name: string;
    store: AllocationStore;
    transport_address: string;
    weight_ranking: integer;
}
export interface UnassignedInformation {
    at: Date;
    last_allocation_status: string;
    reason: UnassignedInformationReason;
}
export interface ClusterHealthRequest {
    expand_wildcards: ExpandWildcards;
    level: Level;
    local: boolean;
    master_timeout: Time;
    timeout: Time;
    wait_for_active_shards: string;
    wait_for_events: WaitForEvents;
    wait_for_no_initializing_shards: boolean;
    wait_for_no_relocating_shards: boolean;
    wait_for_nodes: string;
    wait_for_status: WaitForStatus;
}
export interface ClusterHealthResponse {
    active_primary_shards: integer;
    active_shards: integer;
    active_shards_percent_as_number: double;
    cluster_name: string;
    delayed_unassigned_shards: integer;
    indices: Record<IndexName, IndexHealthStats>;
    initializing_shards: integer;
    number_of_data_nodes: integer;
    number_of_in_flight_fetch: integer;
    number_of_nodes: integer;
    number_of_pending_tasks: integer;
    relocating_shards: integer;
    status: Health;
    task_max_waiting_in_queue_millis: long;
    timed_out: boolean;
    unassigned_shards: integer;
}
export interface IndexHealthStats {
    active_primary_shards: integer;
    active_shards: integer;
    initializing_shards: integer;
    number_of_replicas: integer;
    number_of_shards: integer;
    relocating_shards: integer;
    shards: Record<string, ShardHealthStats>;
    status: Health;
    unassigned_shards: integer;
}
export interface ShardHealthStats {
    active_shards: integer;
    initializing_shards: integer;
    primary_active: boolean;
    relocating_shards: integer;
    status: Health;
    unassigned_shards: integer;
}
export interface ClusterPendingTasksRequest {
    local: boolean;
    master_timeout: Time;
}
export interface ClusterPendingTasksResponse {
    tasks: PendingTask[];
}
export interface PendingTask {
    insert_order: integer;
    priority: string;
    source: string;
    time_in_queue: string;
    time_in_queue_millis: integer;
}
export interface ClusterRerouteDecision {
    decider: string;
    decision: string;
    explanation: string;
}
export interface ClusterRerouteExplanation {
    command: string;
    decisions: ClusterRerouteDecision[];
    parameters: ClusterRerouteParameters;
}
export interface ClusterRerouteParameters {
    allow_primary: boolean;
    from_node: string;
    index: string;
    node: string;
    shard: integer;
    to_node: string;
}
export interface ClusterRerouteRequest {
    commands: ClusterRerouteCommand[];
    dry_run: boolean;
    explain: boolean;
    master_timeout: Time;
    metric: string[];
    retry_failed: boolean;
    timeout: Time;
}
export interface ClusterRerouteResponse {
    explanations: ClusterRerouteExplanation[];
    state: string[];
}
export interface ClusterRerouteCommand {
    name: string;
}
export interface ClusterGetSettingsRequest {
    flat_settings: boolean;
    include_defaults: boolean;
    master_timeout: Time;
    timeout: Time;
}
export interface ClusterGetSettingsResponse {
    persistent: Record<string, object>;
    transient: Record<string, object>;
}
export interface ClusterPutSettingsRequest {
    persistent: Record<string, object>;
    transient: Record<string, object>;
    flat_settings: boolean;
    master_timeout: Time;
    timeout: Time;
}
export interface ClusterPutSettingsResponse {
    acknowledged: boolean;
    persistent: Record<string, object>;
    transient: Record<string, object>;
}
export interface ClusterStateRequest {
    allow_no_indices: boolean;
    expand_wildcards: ExpandWildcards;
    flat_settings: boolean;
    ignore_unavailable: boolean;
    local: boolean;
    master_timeout: Time;
    wait_for_metadata_version: long;
    wait_for_timeout: Time;
}
export interface ClusterStateResponse {
    state: string[];
    cluster_name: string;
    cluster_uuid: string;
    master_node: string;
    state_uuid: string;
    version: long;
}
export interface ClusterFileSystem {
    available_in_bytes: long;
    free_in_bytes: long;
    total_in_bytes: long;
}
export interface ClusterIndicesShardsIndexStats {
    primaries: ClusterShardMetrics;
    replication: ClusterShardMetrics;
    shards: ClusterShardMetrics;
}
export interface ClusterIndicesShardsStats {
    index: ClusterIndicesShardsIndexStats;
    primaries: double;
    replication: double;
    total: double;
}
export interface ClusterIndicesStats {
    completion: CompletionStats;
    count: long;
    docs: DocStats;
    fielddata: FielddataStats;
    query_cache: QueryCacheStats;
    segments: SegmentsStats;
    shards: ClusterIndicesShardsStats;
    store: StoreStats;
}
export interface ClusterJvm {
    max_uptime_in_millis: long;
    mem: ClusterJvmMemory;
    threads: long;
    versions: ClusterJvmVersion[];
}
export interface ClusterJvmMemory {
    heap_max_in_bytes: long;
    heap_used_in_bytes: long;
}
export interface ClusterJvmVersion {
    bundled_jdk: boolean;
    count: integer;
    using_bundled_jdk: boolean;
    version: string;
    vm_name: string;
    vm_vendor: string;
    vm_version: string;
}
export interface ClusterNetworkTypes {
    http_types: Record<string, integer>;
    transport_types: Record<string, integer>;
}
export interface ClusterNodeCount {
    coordinating_only: integer;
    data: integer;
    ingest: integer;
    master: integer;
    total: integer;
    voting_only: integer;
}
export interface ClusterNodesStats {
    count: ClusterNodeCount;
    discovery_types: Record<string, integer>;
    fs: ClusterFileSystem;
    jvm: ClusterJvm;
    network_types: ClusterNetworkTypes;
    os: ClusterOperatingSystemStats;
    packaging_types: NodePackagingType[];
    plugins: PluginStats[];
    process: ClusterProcess;
    versions: string[];
}
export interface ClusterOperatingSystemName {
    count: integer;
    name: string;
}
export interface ClusterOperatingSystemStats {
    allocated_processors: integer;
    available_processors: integer;
    mem: OperatingSystemMemoryInfo;
    names: ClusterOperatingSystemName[];
    pretty_names: ClusterOperatingSystemPrettyNane[];
}
export interface ClusterProcess {
    cpu: ClusterProcessCpu;
    open_file_descriptors: ClusterProcessOpenFileDescriptors;
}
export interface ClusterProcessCpu {
    percent: integer;
}
export interface ClusterProcessOpenFileDescriptors {
    avg: long;
    max: long;
    min: long;
}
export interface ClusterShardMetrics {
    avg: double;
    max: double;
    min: double;
}
export interface ClusterStatsRequest {
    flat_settings: boolean;
    timeout: Time;
}
export interface ClusterStatsResponse {
    cluster_name: string;
    cluster_uuid: string;
    indices: ClusterIndicesStats;
    nodes: ClusterNodesStats;
    status: ClusterStatus;
    timestamp: long;
}
export interface NodePackagingType {
    count: integer;
    flavor: string;
    type: string;
}
export interface OperatingSystemMemoryInfo {
    free_in_bytes: long;
    free_percent: integer;
    total_in_bytes: long;
    used_in_bytes: long;
    used_percent: integer;
}
export interface HotThreadInformation {
    hosts: string[];
    node_id: string;
    node_name: string;
    threads: string[];
}
export interface NodesHotThreadsRequest {
    ignore_idle_threads: boolean;
    interval: Time;
    snapshots: long;
    thread_type: ThreadType;
    threads: long;
    timeout: Time;
}
export interface NodesHotThreadsResponse {
    hot_threads: HotThreadInformation[];
}
export interface ClusterOperatingSystemPrettyNane {
    count: integer;
    pretty_name: string;
}
export interface NodeInfo {
    build_hash: string;
    host: string;
    http: NodeInfoHttp;
    ip: string;
    jvm: NodeJvmInfo;
    name: string;
    network: NodeInfoNetwork;
    os: NodeOperatingSystemInfo;
    plugins: PluginStats[];
    process: NodeProcessInfo;
    roles: NodeRole[];
    settings: string[];
    thread_pool: Record<string, NodeThreadPoolInfo>;
    transport: NodeInfoTransport;
    transport_address: string;
    version: string;
}
export interface NodeInfoHttp {
    bound_address: string[];
    max_content_length: string;
    max_content_length_in_bytes: long;
    publish_address: string;
}
export interface NodeInfoJvmMemory {
    direct_max: string;
    direct_max_in_bytes: long;
    heap_init: string;
    heap_init_in_bytes: long;
    heap_max: string;
    heap_max_in_bytes: long;
    non_heap_init: string;
    non_heap_init_in_bytes: long;
    non_heap_max: string;
    non_heap_max_in_bytes: long;
}
export interface NodeInfoMemory {
    total: string;
    total_in_bytes: long;
}
export interface NodeInfoNetwork {
    primary_interface: NodeInfoNetworkInterface;
    refresh_interval: integer;
}
export interface NodeInfoNetworkInterface {
    address: string;
    mac_address: string;
    name: string;
}
export interface NodeInfoOSCPU {
    cache_size: string;
    cache_size_in_bytes: integer;
    cores_per_socket: integer;
    mhz: integer;
    model: string;
    total_cores: integer;
    total_sockets: integer;
    vendor: string;
}
export interface NodeInfoTransport {
    bound_address: string[];
    publish_address: string;
}
export interface NodeJvmInfo {
    gc_collectors: string[];
    mem: NodeInfoJvmMemory;
    memory_pools: string[];
    pid: integer;
    start_time_in_millis: long;
    version: string;
    vm_name: string;
    vm_vendor: string;
    vm_version: string;
}
export interface NodeOperatingSystemInfo {
    arch: string;
    available_processors: integer;
    cpu: NodeInfoOSCPU;
    mem: NodeInfoMemory;
    name: string;
    pretty_name: string;
    refresh_interval_in_millis: integer;
    swap: NodeInfoMemory;
    version: string;
}
export interface NodeProcessInfo {
    id: long;
    mlockall: boolean;
    refresh_interval_in_millis: long;
}
export interface NodeThreadPoolInfo {
    keep_alive: string;
    max: integer;
    core: integer;
    size: integer;
    queue_size: integer;
    type: string;
}
export interface NodesInfoRequest {
    flat_settings: boolean;
    timeout: Time;
}
export interface NodesInfoResponse {
    cluster_name: string;
    nodes: Record<string, NodeInfo>;
}
export interface AdaptiveSelectionStats {
    avg_queue_size: long;
    avg_response_time: long;
    avg_response_time_ns: long;
    avg_service_time: string;
    avg_service_time_ns: long;
    outgoing_searches: long;
    rank: string;
}
export interface BreakerStats {
    estimated_size: string;
    estimated_size_in_bytes: long;
    limit_size: string;
    limit_size_in_bytes: long;
    overhead: float;
    tripped: float;
}
export interface CPUStats {
    percent: integer;
    sys: string;
    sys_in_millis: long;
    total: string;
    total_in_millis: long;
    user: string;
    user_in_millis: long;
}
export interface DataPathStats {
    available: string;
    available_in_bytes: long;
    disk_queue: string;
    disk_reads: long;
    disk_read_size: string;
    disk_read_size_in_bytes: long;
    disk_writes: long;
    disk_write_size: string;
    disk_write_size_in_bytes: long;
    free: string;
    free_in_bytes: long;
    mount: string;
    path: string;
    total: string;
    total_in_bytes: long;
    type: string;
}
export interface ExtendedMemoryStats {
    free_percent: integer;
    used_percent: integer;
}
export interface FileSystemStats {
    data: DataPathStats[];
    timestamp: long;
    total: TotalFileSystemStats;
}
export interface GarbageCollectionGenerationStats {
    collection_count: long;
    collection_time: string;
    collection_time_in_millis: long;
}
export interface GarbageCollectionStats {
    collectors: Record<string, GarbageCollectionGenerationStats>;
}
export interface HttpStats {
    current_open: integer;
    total_opened: long;
}
export interface JvmClassesStats {
    current_loaded_count: long;
    total_loaded_count: long;
    total_unloaded_count: long;
}
export interface JvmPool {
    max: string;
    max_in_bytes: long;
    peak_max: string;
    peak_max_in_bytes: long;
    peak_used: string;
    peak_used_in_bytes: long;
    used: string;
    used_in_bytes: long;
}
export interface LoadAverageStats {
    "15m": float;
    "5m": float;
    "1m": float;
}
export interface MemoryStats {
    resident: string;
    resident_in_bytes: long;
    share: string;
    share_in_bytes: long;
    total_virtual: string;
    total_virtual_in_bytes: long;
}
export interface NodeBufferPool {
    count: long;
    total_capacity: string;
    total_capacity_in_bytes: long;
    used: string;
    used_in_bytes: long;
}
export interface NodeJvmStats {
    buffer_pools: Record<string, NodeBufferPool>;
    classes: JvmClassesStats;
    gc: GarbageCollectionStats;
    mem: MemoryStats;
    threads: ThreadStats;
    timestamp: long;
    uptime: string;
    uptime_in_millis: long;
}
export interface NodeStats {
    adaptive_selection: Record<string, AdaptiveSelectionStats>;
    breakers: Record<string, BreakerStats>;
    fs: FileSystemStats;
    host: string;
    http: HttpStats;
    indices: IndexStats;
    ingest: NodeIngestStats;
    ip: string[];
    jvm: NodeJvmStats;
    name: string;
    os: OperatingSystemStats;
    process: ProcessStats;
    roles: NodeRole[];
    script: ScriptStats;
    thread_pool: Record<string, ThreadCountStats>;
    timestamp: long;
    transport: TransportStats;
    transport_address: string;
}
export interface NodesStatsRequest {
    completion_fields: Field[];
    fielddata_fields: Field[];
    fields: Field[];
    groups: boolean;
    include_segment_file_sizes: boolean;
    level: Level;
    timeout: Time;
    types: string[];
}
export interface NodesStatsResponse {
    cluster_name: string;
    nodes: Record<string, NodeStats>;
}
export interface OperatingSystemStats {
    cpu: CPUStats;
    mem: ExtendedMemoryStats;
    swap: MemoryStats;
    timestamp: long;
}
export interface ProcessStats {
    cpu: CPUStats;
    mem: MemoryStats;
    open_file_descriptors: integer;
    timestamp: long;
}
export interface ScriptStats {
    cache_evictions: long;
    compilations: long;
}
export interface ThreadCountStats {
    active: long;
    completed: long;
    largest: long;
    queue: long;
    rejected: long;
    threads: long;
}
export interface ThreadStats {
    count: long;
    peak_count: long;
}
export interface TotalFileSystemStats {
    available: string;
    available_in_bytes: long;
    free: string;
    free_in_bytes: long;
    total: string;
    total_in_bytes: long;
}
export interface TransportStats {
    rx_count: long;
    rx_size: string;
    rx_size_in_bytes: long;
    server_open: integer;
    tx_count: long;
    tx_size: string;
    tx_size_in_bytes: long;
}
export interface IngestStats {
    count: long;
    current: long;
    failed: long;
    time_in_millis: long;
    processors: KeyedProcessorStats[];
}
export interface KeyedProcessorStats {
    type: string;
    statistics: ProcessStats;
}
export interface NodeIngestStats {
    pipelines: Record<string, IngestStats>;
    total: IngestStats;
}
export interface NodeUsageInformation {
    rest_actions: Record<string, integer>;
    since: Date;
    timestamp: Date;
}
export interface NodesUsageRequest {
    timeout: Time;
}
export interface NodesUsageResponse {
    cluster_name: string;
    nodes: Record<string, NodeUsageInformation>;
}
export interface PingRequest {
}
export interface PingResponse {
}
export interface ReloadSecureSettingsRequest {
    timeout: Time;
}
export interface ReloadSecureSettingsResponse {
    cluster_name: string;
    nodes: Record<string, NodeStats>;
}
export interface RemoteInfo {
    connected: boolean;
    skip_unavailable: boolean;
    initial_connect_timeout: Time;
    max_connections_per_cluster: integer;
    num_nodes_connected: long;
    seeds: string[];
}
export interface RemoteInfoRequest {
}
export interface RemoteInfoResponse extends ResponseBase, Record<string, any> {
    remotes: Record<string, RemoteInfo>;
}
export interface RootNodeInfoRequest {
}
export interface RootNodeInfoResponse {
    name: string;
    cluster_name: string;
    cluster_uuid: string;
    version: ElasticsearchVersionInfo;
    tagline: string;
}
export interface CancelTasksRequest {
    actions: string[];
    nodes: string[];
    parent_task_id: string;
}
export interface CancelTasksResponse {
    is_valid: boolean;
    node_failures: ErrorCause[];
    nodes: Record<string, TaskExecutingNode>;
}
export interface GetTaskRequest {
    timeout: Time;
    wait_for_completion: boolean;
}
export interface GetTaskResponse {
    completed: boolean;
    task: TaskInfo;
}
export interface TaskInfo {
    action: string;
    cancellable: boolean;
    children: TaskInfo[];
    description: string;
    headers: Record<string, string>;
    id: long;
    node: string;
    running_time_in_nanos: long;
    start_time_in_millis: long;
    status: TaskStatus;
    type: string;
}
export interface ListTasksRequest {
    actions: string[];
    detailed: boolean;
    group_by: GroupBy;
    nodes: string[];
    parent_task_id: string;
    timeout: Time;
    wait_for_completion: boolean;
}
export interface ListTasksResponse {
    is_valid: boolean;
    node_failures: ErrorCause[];
    nodes: Record<string, TaskExecutingNode>;
}
export interface TaskExecutingNode {
    attributes: Record<string, string>;
    host: string;
    ip: string;
    name: string;
    roles: string[];
    tasks: Record<TaskId, TaskState>;
    transport_address: string;
}
export interface TaskRetries {
    bulk: integer;
    search: integer;
}
export interface TaskState {
    action: string;
    cancellable: boolean;
    description: string;
    headers: Record<string, string>;
    id: long;
    node: string;
    parent_task_id: TaskId;
    running_time_in_nanos: long;
    start_time_in_millis: long;
    status: TaskStatus;
    type: string;
}
export interface TaskStatus {
    batches: long;
    created: long;
    deleted: long;
    noops: long;
    requests_per_second: float;
    retries: TaskRetries;
    throttled_millis: long;
    throttled_until_millis: long;
    total: long;
    updated: long;
    version_conflicts: long;
}
export interface Connection {
}
export interface ConnectionPool {
    last_update: Date;
    max_retries: integer;
    nodes: Node[];
    sniffed_on_startup: boolean;
    supports_pinging: boolean;
    supports_reseeding: boolean;
    using_ssl: boolean;
}
export interface CustomResponseBuilderBase {
}
export interface Dictionary<TKey, TValue> {
    key: TKey;
    value: TValue;
}
export interface ElasticsearchResponse {
}
export interface ElasticsearchSerializer {
}
export interface ElasticsearchUrlFormatter {
}
export interface ErrorCause {
    additional_properties: Record<string, object>;
    bytes_limit: long;
    bytes_wanted: long;
    caused_by: ErrorCause;
    column: integer;
    failed_shards: ShardFailure[];
    grouped: boolean;
    index: string;
    index_u_u_i_d: string;
    language: string;
    licensed_expired_feature: string;
    line: integer;
    phase: string;
    reason: string;
    resource_id: string[];
    resource_type: string;
    script: string;
    script_stack: string[];
    shard: integer;
    stack_trace: string;
    type: string;
}
export interface MainError {
    headers: Record<string, string>;
    root_cause: ErrorCause[];
}
export interface MemoryStreamFactory {
}
export interface PostData {
    disable_direct_streaming: boolean;
    type: PostType;
    written_bytes: short[];
}
export interface ServerError {
    error: MainError;
    status: integer;
}
export interface ShardFailure {
    index: string;
    node: string;
    reason: ErrorCause;
    shard: integer;
    status: string;
}
export interface UrlParameter {
}
export interface Descriptor {
}
export declare type Field = string;
export declare type Id = string;
export declare type Ids = string;
export declare type IndexName = string;
export declare type Indices = string;
export declare type Routing = string;
export declare type LongId = string;
export declare type IndexMetrics = string;
export declare type Metrics = string;
export declare type Name = string;
export declare type Names = string;
export declare type NodeIds = string;
export declare type PropertyName = string;
export declare type RelationName = string;
export declare type TaskId = string;
export declare type Timestamp = string;
export interface LazyDocument {
}
export interface RequestBase {
}
export interface AcknowledgedResponseBase {
    acknowledged: boolean;
    is_valid: boolean;
}
export interface DictionaryResponseBase<TKey, TValue> {
}
export interface DynamicResponseBase {
}
export interface ElasticsearchVersionInfo {
    lucene_version: string;
    number: string;
    build_flavor: string;
    build_type: string;
    build_hash: string;
    build_date: Date;
    build_snapshot: boolean;
    minimum_wire_compatibility_version: string;
    minimum_index_compatibility_version: string;
}
export interface IResponse {
    error: ServerError;
}
export interface IndicesResponseBase {
    _shards: ShardStatistics;
}
export interface ResponseBase {
    error: ServerError;
}
export interface ShardsOperationResponseBase {
    _shards: ShardStatistics;
}
export interface Union<TFirst, TSecond> {
}
export interface DateMath {
}
export interface DateMathExpression {
}
export interface DateMathTime {
    factor: integer;
    interval: DateMathTimeUnit;
}
export interface Fuzziness {
    auto: boolean;
    low: integer;
    high: integer;
    edit_distance: integer;
    ratio: double;
}
export interface Distance {
    precision: double;
    unit: DistanceUnit;
}
export interface ClusterStatistics {
    skipped: integer;
    successful: integer;
    total: integer;
}
export interface ShardStatistics {
    failed: integer;
    failures: ShardFailure[];
    successful: integer;
    total: integer;
}
export declare type MinimumShouldMatch = integer | string;
export interface AggregationRange {
    from: double;
    key: string;
    to: double;
}
export interface InlineScript {
    source: string;
}
export interface Script {
    lang: string;
    params: Record<string, object>;
}
export interface ScriptField {
    script: Script;
}
export interface CompletionStats {
    size_in_bytes: long;
}
export interface DocStats {
    count: long;
    deleted: long;
}
export interface FielddataStats {
    evictions: long;
    memory_size_in_bytes: long;
}
export interface FlushStats {
    periodic: long;
    total: long;
    total_time: string;
    total_time_in_millis: long;
}
export interface GetStats {
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
export interface IndexingStats {
    index_current: long;
    delete_current: long;
    delete_time: string;
    delete_time_in_millis: long;
    delete_total: long;
    is_throttled: boolean;
    noop_update_total: long;
    throttle_time: string;
    throttle_time_in_millis: long;
    index_time: string;
    index_time_in_millis: long;
    index_total: long;
    types: Record<string, IndexingStats>;
}
export interface MergesStats {
    current: long;
    current_docs: long;
    current_size: string;
    current_size_in_bytes: long;
    total: long;
    total_auto_throttle: string;
    total_auto_throttle_in_bytes: long;
    total_docs: long;
    total_size: string;
    total_size_in_bytes: long;
    total_stopped_time: string;
    total__stopped_time_in_millis: long;
    total_throttled_time: string;
    total_throttled_time_in_millis: long;
    total_time: string;
    total_time_in_millis: long;
}
export interface PluginStats {
    classname: string;
    description: string;
    elasticsearch_version: string;
    extended_plugins: string[];
    name: string;
    has_native_controller: boolean;
    java_version: string;
    version: string;
}
export interface QueryCacheStats {
    cache_count: long;
    cache_size: long;
    evictions: long;
    hit_count: long;
    memory_size_in_bytes: long;
    miss_count: long;
    total_count: long;
}
export interface RecoveryStats {
    current_as_source: long;
    current_as_target: long;
    throttle_time: string;
    throttle_time_in_millis: long;
}
export interface RefreshStats {
    total: long;
    total_time: string;
    total_time_in_millis: long;
    external_total: long;
    external_total_time_in_millis: long;
}
export interface RequestCacheStats {
    evictions: long;
    hit_count: long;
    memory_size: string;
    memory_size_in_bytes: long;
    miss_count: long;
}
export interface SearchStats {
    fetch_current: long;
    fetch_time_in_millis: long;
    fetch_total: long;
    open_contexts: long;
    query_current: long;
    query_time_in_millis: long;
    query_total: long;
    scroll_current: long;
    scroll_time_in_millis: long;
    scroll_total: long;
    suggest_current: long;
    suggest_time_in_millis: long;
    suggest_total: long;
}
export interface SegmentsStats {
    count: long;
    doc_values_memory_in_bytes: long;
    fixed_bit_set_memory_in_bytes: long;
    index_writer_max_memory_in_bytes: long;
    index_writer_memory_in_bytes: long;
    max_unsafe_auto_id_timestamp: long;
    memory_in_bytes: long;
    norms_memory_in_bytes: long;
    points_memory_in_bytes: long;
    stored_fields_memory_in_bytes: long;
    terms_memory_in_bytes: long;
    term_vectors_memory_in_bytes: long;
    version_map_memory_in_bytes: long;
    file_sizes: Record<string, ShardFileSizeInfo>;
}
export interface StoreStats {
    size: string;
    size_in_bytes: double;
}
export interface TranslogStats {
    earliest_last_modified_age: long;
    operations: long;
    size: string;
    size_in_bytes: long;
    uncommitted_operations: integer;
    uncommitted_size: string;
    uncommitted_size_in_bytes: long;
}
export interface WarmerStats {
    current: long;
    total: long;
    total_time: string;
    total_time_in_millis: long;
}
export interface Time {
    factor: double;
    interval: TimeUnit;
    milliseconds: double;
    minus_one: Time;
    zero: Time;
}
export interface BulkIndexByScrollFailure {
    cause: MainError;
    id: string;
    index: string;
    status: integer;
    type: string;
}
export interface Retries {
    bulk: long;
    search: long;
}
export interface BulkRequest {
    operations: BulkOperation[];
    pipeline: string;
    refresh: Refresh;
    routing: Routing;
    source_enabled: boolean;
    source_excludes: Field[];
    source_includes: Field[];
    timeout: Time;
    type_query_string: string;
    wait_for_active_shards: string;
}
export interface BulkResponse {
    errors: boolean;
    is_valid: boolean;
    items: BulkResponseItemBase[];
    items_with_errors: BulkResponseItemBase[];
    took: long;
}
export interface BulkOperation {
    _id: Id;
    _index: IndexName;
    operation: string;
    retry_on_conflict: integer;
    routing: Routing;
    version: long;
    version_type: VersionType;
}
export interface BulkResponseItemBase {
    error: MainError;
    _id: string;
    _index: string;
    operation: string;
    _primary_term: long;
    result: string;
    _seq_no: long;
    _shards: ShardStatistics;
    status: integer;
    _type: string;
    _version: long;
    is_valid: boolean;
}
export interface DeleteByQueryRequest {
    query: QueryContainer;
    slice: SlicedScroll;
    max_docs: long;
    allow_no_indices: boolean;
    analyze_wildcard: boolean;
    analyzer: string;
    conflicts: Conflicts;
    default_operator: DefaultOperator;
    df: string;
    expand_wildcards: ExpandWildcards;
    from: long;
    ignore_unavailable: boolean;
    lenient: boolean;
    preference: string;
    query_on_query_string: string;
    refresh: boolean;
    request_cache: boolean;
    requests_per_second: long;
    routing: Routing;
    scroll: Time;
    scroll_size: long;
    search_timeout: Time;
    search_type: SearchType;
    size: long;
    slices: long;
    sort: string[];
    source_enabled: boolean;
    source_excludes: Field[];
    source_includes: Field[];
    stats: string[];
    terminate_after: long;
    timeout: Time;
    version: boolean;
    wait_for_active_shards: string;
    wait_for_completion: boolean;
}
export interface DeleteByQueryResponse {
    is_valid: boolean;
    batches: long;
    deleted: long;
    failures: BulkIndexByScrollFailure[];
    noops: long;
    requests_per_second: float;
    retries: Retries;
    slice_id: integer;
    task: TaskId;
    throttled_millis: long;
    throttled_until_millis: long;
    timed_out: boolean;
    took: long;
    total: long;
    version_conflicts: long;
}
export interface DeleteByQueryRethrottleRequest {
    requests_per_second: long;
}
export interface MultiGetOperation {
    can_be_flattened: boolean;
    _id: Id;
    _index: IndexName;
    routing: string;
    _source: boolean | SourceFilter;
    stored_fields: Field[];
    version: long;
    version_type: VersionType;
}
export interface MultiGetRequest {
    stored_fields: Field[];
    docs: MultiGetOperation[];
    preference: string;
    realtime: boolean;
    refresh: boolean;
    routing: Routing;
    source_enabled: boolean;
    source_excludes: Field[];
    source_includes: Field[];
}
export interface MultiGetHit<TDocument> {
    error: MainError;
    found: boolean;
    id: string;
    index: string;
    routing: string;
    source: TDocument;
    type: string;
    version: long;
    sequence_number: long;
    primary_term: long;
}
export interface MultiGetResponse {
    hits: MultiGetHit<any>[];
    is_valid: boolean;
}
export interface MultiTermVectorOperation {
    doc: object;
    field_statistics: boolean;
    filter: TermVectorFilter;
    _id: Id;
    _index: IndexName;
    offsets: boolean;
    payloads: boolean;
    positions: boolean;
    routing: Routing;
    fields: Field[];
    term_statistics: boolean;
    version: long;
    version_type: VersionType;
}
export interface MultiTermVectorsRequest {
    docs: MultiTermVectorOperation[];
    ids: Id[];
    field_statistics: boolean;
    fields: Field[];
    offsets: boolean;
    payloads: boolean;
    positions: boolean;
    preference: string;
    realtime: boolean;
    routing: Routing;
    term_statistics: boolean;
    version: long;
    version_type: VersionType;
}
export interface MultiTermVectorsResponse {
    docs: TermVectors[];
}
export interface ReindexDestination {
    index: IndexName;
    op_type: OpType;
    routing: ReindexRouting;
    version_type: VersionType;
}
export interface ReindexOnServerRequest {
    conflicts: Conflicts;
    dest: ReindexDestination;
    script: Script;
    size: long;
    max_docs: long;
    source: ReindexSource;
    refresh: boolean;
    requests_per_second: long;
    scroll: Time;
    slices: long;
    timeout: Time;
    wait_for_active_shards: string;
    wait_for_completion: boolean;
}
export interface ReindexOnServerResponse {
    is_valid: boolean;
    batches: long;
    created: long;
    failures: BulkIndexByScrollFailure[];
    noops: long;
    retries: Retries;
    slice_id: integer;
    task: TaskId;
    timed_out: boolean;
    took: Time;
    total: long;
    updated: long;
    version_conflicts: long;
}
export interface ReindexRouting {
}
export interface ReindexSource {
    index: Indices;
    query: QueryContainer;
    remote: RemoteSource;
    size: integer;
    slice: SlicedScroll;
    sort: Sort[];
    _source: Field[];
}
export interface RemoteSource {
    host: Uri;
    password: string;
    username: string;
}
export interface ReindexNode {
    attributes: Record<string, string>;
    host: string;
    ip: string;
    name: string;
    roles: string[];
    tasks: Record<TaskId, ReindexTask>;
    transport_address: string;
}
export interface ReindexRethrottleRequest {
    requests_per_second: long;
}
export interface ReindexRethrottleResponse {
    nodes: Record<string, ReindexNode>;
}
export interface ReindexStatus {
    batches: long;
    created: long;
    deleted: long;
    noops: long;
    requests_per_second: float;
    retries: Retries;
    throttled_millis: long;
    throttled_until_millis: long;
    total: long;
    updated: long;
    version_conflicts: long;
}
export interface ReindexTask {
    action: string;
    cancellable: boolean;
    description: string;
    id: long;
    node: string;
    running_time_in_nanos: long;
    start_time_in_millis: long;
    status: ReindexStatus;
    type: string;
}
export interface UpdateByQueryRequest {
    slice: SlicedScroll;
    query: QueryContainer;
    script: Script;
    max_docs: long;
    allow_no_indices: boolean;
    analyze_wildcard: boolean;
    analyzer: string;
    conflicts: Conflicts;
    default_operator: DefaultOperator;
    df: string;
    expand_wildcards: ExpandWildcards;
    from: long;
    ignore_unavailable: boolean;
    lenient: boolean;
    pipeline: string;
    preference: string;
    query_on_query_string: string;
    refresh: boolean;
    request_cache: boolean;
    requests_per_second: long;
    routing: Routing;
    scroll: Time;
    scroll_size: long;
    search_timeout: Time;
    search_type: SearchType;
    size: long;
    slices: long;
    sort: string[];
    source_enabled: boolean;
    source_excludes: Field[];
    source_includes: Field[];
    stats: string[];
    terminate_after: long;
    timeout: Time;
    version: boolean;
    version_type: boolean;
    wait_for_active_shards: string;
    wait_for_completion: boolean;
}
export interface UpdateByQueryResponse {
    is_valid: boolean;
    batches: long;
    failures: BulkIndexByScrollFailure[];
    noops: long;
    requests_per_second: float;
    retries: Retries;
    task: TaskId;
    timed_out: boolean;
    took: long;
    total: long;
    updated: long;
    version_conflicts: long;
}
export interface UpdateByQueryRethrottleRequest {
    requests_per_second: long;
}
export interface WriteResponseBase {
    _id: string;
    _index: string;
    _primary_term: long;
    result: Result;
    _seq_no: long;
    _shards: ShardStatistics;
    _type: string;
    _version: long;
}
export interface CreateRequest<TDocument> {
    document: TDocument;
    pipeline: string;
    refresh: Refresh;
    routing: Routing;
    timeout: Time;
    version: long;
    version_type: VersionType;
    wait_for_active_shards: string;
}
export interface CreateResponse {
    is_valid: boolean;
}
export interface DeleteRequest {
    if_primary_term: long;
    if_sequence_number: long;
    refresh: Refresh;
    routing: Routing;
    timeout: Time;
    version: long;
    version_type: VersionType;
    wait_for_active_shards: string;
}
export interface DeleteResponse {
    is_valid: boolean;
}
export interface DocumentExistsRequest {
    preference: string;
    realtime: boolean;
    refresh: boolean;
    routing: Routing;
    source_enabled: boolean;
    source_excludes: Field[];
    source_includes: Field[];
    stored_fields: Field[];
    version: long;
    version_type: VersionType;
}
export interface GetRequest {
    preference: string;
    realtime: boolean;
    refresh: boolean;
    routing: Routing;
    source_enabled: boolean;
    source_excludes: Field[];
    source_includes: Field[];
    stored_fields: Field[];
    version: long;
    version_type: VersionType;
}
export interface GetResponse<TDocument> {
    fields: Record<string, LazyDocument>;
    found: boolean;
    _id: string;
    _index: string;
    _primary_term: long;
    _routing: string;
    _seq_no: long;
    _source: TDocument;
    _type: string;
    _version: long;
}
export interface IndexRequest<TDocument> {
    document: TDocument;
    if_primary_term: long;
    if_sequence_number: long;
    op_type: OpType;
    pipeline: string;
    refresh: Refresh;
    routing: Routing;
    timeout: Time;
    version: long;
    version_type: VersionType;
    wait_for_active_shards: string;
}
export interface IndexResponse {
    is_valid: boolean;
}
export interface SourceRequest {
    preference: string;
    realtime: boolean;
    refresh: boolean;
    routing: Routing;
    source_enabled: boolean;
    source_excludes: Field[];
    source_includes: Field[];
    version: long;
    version_type: VersionType;
}
export interface SourceResponse<TDocument> {
    body: TDocument;
}
export interface SourceExistsRequest {
    preference: string;
    realtime: boolean;
    refresh: boolean;
    routing: Routing;
    source_enabled: boolean;
    source_excludes: Field[];
    source_includes: Field[];
    version: long;
    version_type: VersionType;
}
export interface FieldStatistics {
    doc_count: integer;
    sum_doc_freq: integer;
    sum_ttf: integer;
}
export interface TermVector {
    field_statistics: FieldStatistics;
    terms: Record<string, TermVectorTerm>;
}
export interface TermVectorFilter {
    max_doc_freq: integer;
    max_num_terms: integer;
    max_term_freq: integer;
    max_word_length: integer;
    min_doc_freq: integer;
    min_term_freq: integer;
    min_word_length: integer;
}
export interface TermVectorTerm {
    doc_freq: integer;
    term_freq: integer;
    score: double;
    tokens: Token[];
    ttf: integer;
}
export interface TermVectors {
    found: boolean;
    id: string;
    index: string;
    term_vectors: Record<Field, TermVector>;
    took: long;
    version: long;
}
export interface TermVectorsRequest<TDocument> {
    doc: TDocument;
    filter: TermVectorFilter;
    per_field_analyzer: Record<Field, string>;
    field_statistics: boolean;
    fields: Field[];
    offsets: boolean;
    payloads: boolean;
    positions: boolean;
    preference: string;
    realtime: boolean;
    routing: Routing;
    term_statistics: boolean;
    version: long;
    version_type: VersionType;
}
export interface TermVectorsResponse {
    is_valid: boolean;
    found: boolean;
    _id: string;
    _index: string;
    term_vectors: Record<Field, TermVector>;
    took: long;
    _type: string;
    _version: long;
}
export interface Token {
    end_offset: integer;
    payload: string;
    position: integer;
    start_offset: integer;
}
export interface UpdateRequest<TDocument, TPartialDocument> {
    detect_noop: boolean;
    doc: TPartialDocument;
    doc_as_upsert: boolean;
    script: Script;
    scripted_upsert: boolean;
    _source: boolean | SourceFilter;
    upsert: TDocument;
    if_primary_term: long;
    if_sequence_number: long;
    lang: string;
    refresh: Refresh;
    retry_on_conflict: long;
    routing: Routing;
    source_enabled: boolean;
    timeout: Time;
    wait_for_active_shards: string;
}
export interface UpdateResponse<TDocument> {
    is_valid: boolean;
    get: InlineGet<TDocument>;
}
export interface IndexState {
    aliases: Record<IndexName, Alias>;
    mappings: TypeMapping;
    settings: Record<string, object>;
}
export interface Alias {
    filter: QueryContainer;
    index_routing: Routing;
    is_write_index: boolean;
    routing: Routing;
    search_routing: Routing;
}
export interface AliasDefinition {
    filter: QueryContainer;
    index_routing: string;
    is_write_index: boolean;
    routing: string;
    search_routing: string;
}
export interface BulkAliasRequest {
    actions: AliasAction[];
    master_timeout: Time;
    timeout: Time;
}
export interface BulkAliasResponse {
}
export interface AliasAction {
}
export interface AliasExistsRequest {
    allow_no_indices: boolean;
    expand_wildcards: ExpandWildcards;
    ignore_unavailable: boolean;
    local: boolean;
}
export interface DeleteAliasRequest {
    master_timeout: Time;
    timeout: Time;
}
export interface DeleteAliasResponse {
}
export interface GetAliasRequest {
    allow_no_indices: boolean;
    expand_wildcards: ExpandWildcards;
    ignore_unavailable: boolean;
    local: boolean;
}
export interface GetAliasResponse extends ResponseBase, Record<IndexName, any> {
    indices: Record<IndexName, IndexAliases>;
    is_valid: boolean;
}
export interface IndexAliases {
    aliases: Record<string, AliasDefinition>;
}
export interface PutAliasRequest {
    filter: QueryContainer;
    index_routing: Routing;
    is_write_index: boolean;
    routing: Routing;
    search_routing: Routing;
    master_timeout: Time;
    timeout: Time;
}
export interface PutAliasResponse {
}
export interface AnalyzeDetail {
    charfilters: CharFilterDetail[];
    custom_analyzer: boolean;
    tokenfilters: TokenDetail[];
    tokenizer: TokenDetail;
}
export interface AnalyzeRequest {
    analyzer: string;
    attributes: string[];
    char_filter: string | ICharFilter[];
    explain: boolean;
    field: Field;
    filter: string | ITokenFilter[];
    normalizer: string;
    text: string[];
    tokenizer: string | ITokenizer;
}
export interface AnalyzeResponse {
    detail: AnalyzeDetail;
    tokens: AnalyzeToken[];
}
export interface AnalyzeToken {
    end_offset: long;
    position: long;
    position_length: long;
    start_offset: long;
    token: string;
    type: string;
}
export interface CharFilterDetail {
    filtered_text: string[];
    name: string;
}
export interface ExplainAnalyzeToken {
    bytes: string;
    end_offset: long;
    keyword: boolean;
    position: long;
    positionLength: long;
    start_offset: long;
    termFrequency: long;
    token: string;
    type: string;
}
export interface TokenDetail {
    name: string;
    tokens: ExplainAnalyzeToken[];
}
export interface CloneIndexRequest {
    aliases: Record<IndexName, Alias>;
    settings: Record<string, object>;
    master_timeout: Time;
    timeout: Time;
    wait_for_active_shards: string;
}
export interface CloneIndexResponse {
    shards_acknowledged: boolean;
    index: string;
}
export interface CreateIndexRequest {
    aliases: Record<IndexName, Alias>;
    mappings: TypeMapping;
    settings: Record<string, object>;
    include_type_name: boolean;
    master_timeout: Time;
    timeout: Time;
    wait_for_active_shards: string;
}
export interface CreateIndexResponse {
    shards_acknowledged: boolean;
    index: string;
}
export interface DeleteIndexRequest {
    allow_no_indices: boolean;
    expand_wildcards: ExpandWildcards;
    ignore_unavailable: boolean;
    master_timeout: Time;
    timeout: Time;
}
export interface DeleteIndexResponse {
}
export interface FreezeIndexRequest {
    allow_no_indices: boolean;
    expand_wildcards: ExpandWildcards;
    ignore_unavailable: boolean;
    master_timeout: Time;
    timeout: Time;
    wait_for_active_shards: string;
}
export interface FreezeIndexResponse {
    shards_acknowledged: boolean;
}
export interface GetIndexRequest {
    allow_no_indices: boolean;
    expand_wildcards: ExpandWildcards;
    flat_settings: boolean;
    ignore_unavailable: boolean;
    include_defaults: boolean;
    include_type_name: boolean;
    local: boolean;
    master_timeout: Time;
}
export interface GetIndexResponse extends ResponseBase, Record<IndexName, any> {
}
export interface ExistsResponse {
    exists: boolean;
}
export interface IndexExistsRequest {
    allow_no_indices: boolean;
    expand_wildcards: ExpandWildcards;
    flat_settings: boolean;
    ignore_unavailable: boolean;
    include_defaults: boolean;
    local: boolean;
}
export interface CloseIndexRequest {
    allow_no_indices: boolean;
    expand_wildcards: ExpandWildcards;
    ignore_unavailable: boolean;
    master_timeout: Time;
    timeout: Time;
    wait_for_active_shards: string;
}
export interface CloseIndexResponse {
    indices: Record<string, CloseIndexResult>;
    shards_acknowledged: boolean;
}
export interface CloseIndexResult {
    closed: boolean;
    shards: Record<string, CloseShardResult>;
}
export interface CloseShardResult {
    failures: ShardFailure[];
}
export interface OpenIndexRequest {
    allow_no_indices: boolean;
    expand_wildcards: ExpandWildcards;
    ignore_unavailable: boolean;
    master_timeout: Time;
    timeout: Time;
    wait_for_active_shards: string;
}
export interface OpenIndexResponse {
}
export interface RolloverConditions {
    max_age: Time;
    max_docs: long;
    max_size: string;
}
export interface RolloverIndexRequest {
    aliases: Record<IndexName, Alias>;
    conditions: RolloverConditions;
    mappings: TypeMapping;
    settings: Record<string, object>;
    dry_run: boolean;
    include_type_name: boolean;
    master_timeout: Time;
    timeout: Time;
    wait_for_active_shards: string;
}
export interface RolloverIndexResponse {
    conditions: Record<string, boolean>;
    dry_run: boolean;
    new_index: string;
    old_index: string;
    rolled_over: boolean;
    shards_acknowledged: boolean;
}
export interface ShrinkIndexRequest {
    aliases: Record<IndexName, Alias>;
    settings: Record<string, object>;
    master_timeout: Time;
    timeout: Time;
    wait_for_active_shards: string;
}
export interface ShrinkIndexResponse {
    shards_acknowledged: boolean;
}
export interface SplitIndexRequest {
    aliases: Record<IndexName, Alias>;
    settings: Record<string, object>;
    master_timeout: Time;
    timeout: Time;
    wait_for_active_shards: string;
}
export interface SplitIndexResponse {
    shards_acknowledged: boolean;
}
export interface TypeExistsRequest {
    allow_no_indices: boolean;
    expand_wildcards: ExpandWildcards;
    ignore_unavailable: boolean;
    local: boolean;
}
export interface UnfreezeIndexRequest {
    allow_no_indices: boolean;
    expand_wildcards: ExpandWildcards;
    ignore_unavailable: boolean;
    master_timeout: Time;
    timeout: Time;
    wait_for_active_shards: string;
}
export interface UnfreezeIndexResponse {
    shards_acknowledged: boolean;
}
export interface GetIndexSettingsRequest {
    allow_no_indices: boolean;
    expand_wildcards: ExpandWildcards;
    flat_settings: boolean;
    ignore_unavailable: boolean;
    include_defaults: boolean;
    local: boolean;
    master_timeout: Time;
}
export interface GetIndexSettingsResponse extends ResponseBase, Record<IndexName, any> {
    indices: Record<IndexName, IndexState>;
}
export interface DeleteIndexTemplateRequest {
    master_timeout: Time;
    timeout: Time;
}
export interface DeleteIndexTemplateResponse {
}
export interface GetIndexTemplateRequest {
    flat_settings: boolean;
    include_type_name: boolean;
    local: boolean;
    master_timeout: Time;
}
export interface GetIndexTemplateResponse extends ResponseBase, Record<string, any> {
    template_mappings: Record<string, TemplateMapping>;
}
export interface TemplateMapping {
    aliases: Record<IndexName, Alias>;
    index_patterns: string[];
    mappings: TypeMapping;
    order: integer;
    settings: Record<string, object>;
    version: integer;
}
export interface IndexTemplateExistsRequest {
    flat_settings: boolean;
    local: boolean;
    master_timeout: Time;
}
export interface PutIndexTemplateRequest {
    aliases: Record<IndexName, Alias>;
    index_patterns: string[];
    mappings: TypeMapping;
    order: integer;
    settings: Record<string, object>;
    version: integer;
    create: boolean;
    flat_settings: boolean;
    include_type_name: boolean;
    master_timeout: Time;
    timeout: Time;
}
export interface PutIndexTemplateResponse {
}
export interface UpdateIndexSettingsRequest {
    index_settings: Record<string, object>;
    allow_no_indices: boolean;
    expand_wildcards: ExpandWildcards;
    flat_settings: boolean;
    ignore_unavailable: boolean;
    master_timeout: Time;
    preserve_existing: boolean;
    timeout: Time;
}
export interface UpdateIndexSettingsResponse {
}
export interface GetFieldMappingRequest {
    allow_no_indices: boolean;
    expand_wildcards: ExpandWildcards;
    ignore_unavailable: boolean;
    include_defaults: boolean;
    include_type_name: boolean;
    local: boolean;
}
export interface GetFieldMappingResponse extends ResponseBase, Record<IndexName, any> {
    indices: Record<IndexName, TypeFieldMappings>;
    is_valid: boolean;
}
export interface TypeFieldMappings {
    mappings: Record<Field, FieldMapping>;
}
export interface GetMappingRequest {
    allow_no_indices: boolean;
    expand_wildcards: ExpandWildcards;
    ignore_unavailable: boolean;
    include_type_name: boolean;
    local: boolean;
    master_timeout: Time;
}
export interface GetMappingResponse extends ResponseBase, Record<IndexName, any> {
    indices: Record<IndexName, IndexMappings>;
}
export interface IndexMappings {
    item: TypeMapping;
    mappings: TypeMapping;
}
export interface PutMappingRequest {
    all_field: AllField;
    date_detection: boolean;
    dynamic: boolean | DynamicMapping;
    dynamic_date_formats: string[];
    dynamic_templates: Record<string, DynamicTemplate>;
    field_names_field: FieldNamesField;
    index_field: IndexField;
    meta: Record<string, object>;
    numeric_detection: boolean;
    properties: Record<PropertyName, IProperty>;
    routing_field: RoutingField;
    size_field: SizeField;
    source_field: SourceField;
    allow_no_indices: boolean;
    expand_wildcards: ExpandWildcards;
    ignore_unavailable: boolean;
    include_type_name: boolean;
    master_timeout: Time;
    timeout: Time;
}
export interface PutMappingResponse {
}
export interface RecoveryBytes {
    percent: string;
    recovered: long;
    reused: long;
    total: long;
}
export interface RecoveryFileDetails {
    length: long;
    name: string;
    recovered: long;
}
export interface RecoveryFiles {
    details: RecoveryFileDetails[];
    percent: string;
    recovered: long;
    reused: long;
    total: long;
}
export interface RecoveryIndexStatus {
    bytes: RecoveryBytes;
    files: RecoveryFiles;
    size: RecoveryBytes;
    source_throttle_time_in_millis: long;
    target_throttle_time_in_millis: long;
    total_time_in_millis: long;
}
export interface RecoveryOrigin {
    hostname: string;
    id: string;
    ip: string;
    name: string;
}
export interface RecoveryStartStatus {
    check_index_time: long;
    total_time_in_millis: string;
}
export interface RecoveryStatus {
    shards: ShardRecovery[];
}
export interface RecoveryStatusRequest {
    active_only: boolean;
    detailed: boolean;
}
export interface RecoveryStatusResponse extends ResponseBase, Record<IndexName, any> {
    indices: Record<IndexName, RecoveryStatus>;
}
export interface RecoveryTranslogStatus {
    percent: string;
    recovered: long;
    total: long;
    total_on_start: long;
    total_time: string;
    total_time_in_millis: long;
}
export interface RecoveryVerifyIndex {
    check_index_time_in_millis: long;
    total_time_in_millis: long;
}
export interface ShardRecovery {
    id: long;
    index: RecoveryIndexStatus;
    primary: boolean;
    source: RecoveryOrigin;
    stage: string;
    start: RecoveryStartStatus;
    start_time_in_millis: Date;
    stop_time_in_millis: Date;
    target: RecoveryOrigin;
    total_time_in_millis: long;
    translog: RecoveryTranslogStatus;
    type: string;
    verify_index: RecoveryVerifyIndex;
}
export interface IndexSegment {
    shards: Record<string, ShardsSegment>;
}
export interface Segment {
    attributes: Record<string, string>;
    committed: boolean;
    compound: boolean;
    deleted_docs: long;
    generation: integer;
    memory_in_bytes: double;
    search: boolean;
    size_in_bytes: double;
    num_docs: long;
    version: string;
}
export interface SegmentsRequest {
    allow_no_indices: boolean;
    expand_wildcards: ExpandWildcards;
    ignore_unavailable: boolean;
    verbose: boolean;
}
export interface SegmentsResponse {
    indices: Record<string, IndexSegment>;
    _shards: ShardStatistics;
}
export interface ShardSegmentRouting {
    node: string;
    primary: boolean;
    state: string;
}
export interface ShardsSegment {
    num_committed_segments: integer;
    routing: ShardSegmentRouting;
    num_search_segments: integer;
    segments: Record<string, Segment>;
}
export interface IndicesShardStores {
    shards: Record<string, ShardStoreWrapper>;
}
export interface IndicesShardStoresRequest {
    allow_no_indices: boolean;
    expand_wildcards: ExpandWildcards;
    ignore_unavailable: boolean;
    status: string[];
}
export interface IndicesShardStoresResponse {
    indices: Record<string, IndicesShardStores>;
}
export interface ShardStore {
    allocation: ShardStoreAllocation;
    allocation_id: string;
    attributes: Record<string, object>;
    id: string;
    legacy_version: long;
    name: string;
    store_exception: ShardStoreException;
    transport_address: string;
}
export interface ShardStoreException {
    reason: string;
    type: string;
}
export interface ShardStoreWrapper {
    stores: ShardStore[];
}
export interface IndexStats {
    completion: CompletionStats;
    docs: DocStats;
    fielddata: FielddataStats;
    flush: FlushStats;
    get: GetStats;
    indexing: IndexingStats;
    merges: MergesStats;
    query_cache: QueryCacheStats;
    recovery: RecoveryStats;
    refresh: RefreshStats;
    request_cache: RequestCacheStats;
    search: SearchStats;
    segments: SegmentsStats;
    store: StoreStats;
    translog: TranslogStats;
    warmer: WarmerStats;
}
export interface IndicesStats {
    primaries: IndexStats;
    shards: Record<string, ShardStats[]>;
    total: IndexStats;
    uuid: string;
}
export interface IndicesStatsRequest {
    completion_fields: Field[];
    expand_wildcards: ExpandWildcards;
    fielddata_fields: Field[];
    fields: Field[];
    forbid_closed_indices: boolean;
    groups: string[];
    include_segment_file_sizes: boolean;
    include_unloaded_segments: boolean;
    level: Level;
}
export interface IndicesStatsResponse {
    indices: Record<string, IndicesStats>;
    _shards: ShardStatistics;
    _all: IndicesStats;
}
export interface ShardCommit {
    generation: integer;
    id: string;
    num_docs: long;
    user_data: Record<string, string>;
}
export interface ShardCompletion {
    size_in_bytes: long;
}
export interface ShardDocs {
    count: long;
    deleted: long;
}
export interface ShardFielddata {
    evictions: long;
    memory_size_in_bytes: long;
}
export interface ShardFileSizeInfo {
    description: string;
    size_in_bytes: long;
}
export interface ShardFlush {
    total: long;
    total_time_in_millis: long;
}
export interface ShardGet {
    current: long;
    exists_time_in_millis: long;
    exists_total: long;
    missing_time_in_millis: long;
    missing_total: long;
    time_in_millis: long;
    total: long;
}
export interface ShardIndexing {
    delete_current: long;
    delete_time_in_millis: long;
    delete_total: long;
    index_current: long;
    index_failed: long;
    index_time_in_millis: long;
    index_total: long;
    is_throttled: boolean;
    noop_update_total: long;
    throttle_time_in_millis: long;
}
export interface ShardMerges {
    current: long;
    current_docs: long;
    current_size_in_bytes: long;
    total: long;
    total_auto_throttle_in_bytes: long;
    total_docs: long;
    total_size_in_bytes: long;
    total_stopped_time_in_millis: long;
    total_throttled_time_in_millis: long;
    total_time_in_millis: long;
}
export interface ShardPath {
    data_path: string;
    is_custom_data_path: boolean;
    state_path: string;
}
export interface ShardQueryCache {
    cache_count: long;
    cache_size: long;
    evictions: long;
    hit_count: long;
    memory_size_in_bytes: long;
    miss_count: long;
    total_count: long;
}
export interface ShardRefresh {
    listeners: long;
    total: long;
    total_time_in_millis: long;
}
export interface ShardRequestCache {
    evictions: long;
    hit_count: long;
    memory_size_in_bytes: long;
    miss_count: long;
}
export interface ShardRouting {
    node: string;
    primary: boolean;
    relocating_node: string;
    state: ShardRoutingState;
}
export interface ShardSearch {
    fetch_current: long;
    fetch_time_in_millis: long;
    fetch_total: long;
    open_contexts: long;
    query_current: long;
    query_time_in_millis: long;
    query_total: long;
    scroll_current: long;
    scroll_time_in_millis: long;
    scroll_total: long;
    suggest_current: long;
    suggest_time_in_millis: long;
    suggest_total: long;
}
export interface ShardSegments {
    count: long;
    doc_values_memory_in_bytes: long;
    file_sizes: Record<string, ShardFileSizeInfo>;
    fixed_bit_set_memory_in_bytes: long;
    index_writer_memory_in_bytes: long;
    max_unsafe_auto_id_timestamp: long;
    memory_in_bytes: long;
    norms_memory_in_bytes: long;
    points_memory_in_bytes: long;
    stored_fields_memory_in_bytes: long;
    terms_memory_in_bytes: long;
    term_vectors_memory_in_bytes: long;
    version_map_memory_in_bytes: long;
}
export interface ShardSequenceNumber {
    global_checkpoint: long;
    local_checkpoint: long;
    max_seq_no: long;
}
export interface ShardStats {
    commit: ShardCommit;
    completion: ShardCompletion;
    docs: ShardDocs;
    fielddata: ShardFielddata;
    flush: ShardFlush;
    get: ShardGet;
    indexing: ShardIndexing;
    merges: ShardMerges;
    shard_path: ShardPath;
    query_cache: ShardQueryCache;
    recovery: ShardStatsRecovery;
    refresh: ShardRefresh;
    request_cache: ShardRequestCache;
    routing: ShardRouting;
    search: ShardSearch;
    segments: ShardSegments;
    seq_no: ShardSequenceNumber;
    store: ShardStatsStore;
    translog: ShardTransactionLog;
    warmer: ShardWarmer;
}
export interface ShardStatsRecovery {
    current_as_source: long;
    current_as_target: long;
    throttle_time_in_millis: long;
}
export interface ShardStatsStore {
    size_in_bytes: long;
}
export interface ShardTransactionLog {
    operations: long;
    size_in_bytes: long;
    uncommitted_operations: long;
    uncommitted_size_in_bytes: long;
}
export interface ShardWarmer {
    current: long;
    total: long;
    total_time_in_millis: long;
}
export interface ClearCacheRequest {
    allow_no_indices: boolean;
    expand_wildcards: ExpandWildcards;
    fielddata: boolean;
    fields: Field[];
    ignore_unavailable: boolean;
    query: boolean;
    request: boolean;
}
export interface ClearCacheResponse {
}
export interface FlushRequest {
    allow_no_indices: boolean;
    expand_wildcards: ExpandWildcards;
    force: boolean;
    ignore_unavailable: boolean;
    wait_if_ongoing: boolean;
}
export interface FlushResponse {
}
export interface ForceMergeRequest {
    allow_no_indices: boolean;
    expand_wildcards: ExpandWildcards;
    flush: boolean;
    ignore_unavailable: boolean;
    max_num_segments: long;
    only_expunge_deletes: boolean;
}
export interface ForceMergeResponse {
}
export interface RefreshRequest {
    allow_no_indices: boolean;
    expand_wildcards: ExpandWildcards;
    ignore_unavailable: boolean;
}
export interface RefreshResponse {
}
export interface SyncedFlushRequest {
    allow_no_indices: boolean;
    expand_wildcards: ExpandWildcards;
    ignore_unavailable: boolean;
}
export interface SyncedFlushResponse {
}
export interface Pipeline {
    description: string;
    on_failure: Processor[];
    processors: Processor[];
}
export interface Processor {
    name: string;
    on_failure: Processor[];
    if: string;
    tag: string;
    ignore_failure: boolean;
}
export interface DeletePipelineRequest {
    master_timeout: Time;
    timeout: Time;
}
export interface DeletePipelineResponse {
}
export interface GetPipelineRequest {
    master_timeout: Time;
}
export interface GetPipelineResponse extends ResponseBase, Record<string, any> {
    pipelines: Record<string, Pipeline>;
}
export interface GrokProcessorPatternsRequest {
}
export interface GrokProcessorPatternsResponse {
    patterns: Record<string, string>;
}
export interface PutPipelineRequest {
    description: string;
    on_failure: Processor[];
    processors: Processor[];
    master_timeout: Time;
    timeout: Time;
}
export interface PutPipelineResponse {
}
export interface DocumentSimulation {
    _id: string;
    _index: string;
    _ingest: Ingest;
    _parent: string;
    _routing: string;
    _source: LazyDocument;
    _type: string;
}
export interface Ingest {
    timestamp: Date;
}
export interface PipelineSimulation {
    doc: DocumentSimulation;
    processor_results: PipelineSimulation[];
    tag: string;
}
export interface SimulatePipelineDocument {
    _id: Id;
    _index: IndexName;
    _source: object;
}
export interface SimulatePipelineRequest {
    docs: SimulatePipelineDocument[];
    pipeline: Pipeline;
    verbose: boolean;
}
export interface SimulatePipelineResponse {
    docs: PipelineSimulation[];
}
export interface TypeMapping {
    all_field: AllField;
    date_detection: boolean;
    dynamic: boolean | DynamicMapping;
    dynamic_date_formats: string[];
    dynamic_templates: Record<string, DynamicTemplate>;
    _field_names: FieldNamesField;
    index_field: IndexField;
    _meta: Record<string, object>;
    numeric_detection: boolean;
    properties: Record<PropertyName, IProperty>;
    _routing: RoutingField;
    _size: SizeField;
    _source: SourceField;
}
export interface DynamicTemplate {
    mapping: IProperty;
    match: string;
    match_mapping_type: string;
    match_pattern: MatchType;
    path_match: string;
    path_unmatch: string;
    unmatch: string;
}
export interface FieldMapping {
}
export interface AllField {
    analyzer: string;
    enabled: boolean;
    omit_norms: boolean;
    search_analyzer: string;
    similarity: string;
    store: boolean;
    store_term_vector_offsets: boolean;
    store_term_vector_payloads: boolean;
    store_term_vector_positions: boolean;
    store_term_vectors: boolean;
}
export interface FieldNamesField {
    enabled: boolean;
}
export interface IndexField {
    enabled: boolean;
}
export interface RoutingField {
    required: boolean;
}
export interface SizeField {
    enabled: boolean;
}
export interface SourceField {
    compress: boolean;
    compress_threshold: string;
    enabled: boolean;
    excludes: string[];
    includes: string[];
}
export interface CorePropertyBase {
    copy_to: Field[];
    fields: Record<PropertyName, IProperty>;
    similarity: string;
    store: boolean;
}
export interface DocValuesPropertyBase {
    doc_values: boolean;
}
export interface IProperty {
    local_metadata: Record<string, object>;
    name: PropertyName;
    type: string;
}
export interface PropertyBase {
    local_metadata: Record<string, object>;
    name: PropertyName;
    type: string;
}
export interface PropertyWithClrOrigin {
}
export interface FlattenedProperty {
    boost: double;
    depth_limit: integer;
    doc_values: boolean;
    eager_global_ordinals: boolean;
    ignore_above: integer;
    index: boolean;
    index_options: IndexOptions;
    null_value: string;
    similarity: string;
    split_queries_on_whitespace: boolean;
}
export interface NestedProperty {
    include_in_parent: boolean;
    include_in_root: boolean;
}
export interface ObjectProperty {
    dynamic: boolean | DynamicMapping;
    enabled: boolean;
    properties: Record<PropertyName, IProperty>;
}
export interface BinaryProperty {
}
export interface BooleanProperty {
    boost: double;
    fielddata: NumericFielddata;
    index: boolean;
    null_value: boolean;
}
export interface DateProperty {
    boost: double;
    fielddata: NumericFielddata;
    format: string;
    ignore_malformed: boolean;
    index: boolean;
    null_value: Date;
    precision_step: integer;
}
export interface DateNanosProperty {
    boost: double;
    format: string;
    ignore_malformed: boolean;
    index: boolean;
    null_value: Date;
    precision_step: integer;
}
export interface JoinProperty {
    relations: Record<RelationName, RelationName[]>;
}
export interface KeywordProperty {
    boost: double;
    eager_global_ordinals: boolean;
    ignore_above: integer;
    index: boolean;
    index_options: IndexOptions;
    normalizer: string;
    norms: boolean;
    null_value: string;
    split_queries_on_whitespace: boolean;
}
export interface NumberProperty {
    boost: double;
    coerce: boolean;
    fielddata: NumericFielddata;
    ignore_malformed: boolean;
    index: boolean;
    null_value: double;
    scaling_factor: double;
}
export interface PercolatorProperty {
}
export interface RangePropertyBase {
    boost: double;
    coerce: boolean;
    index: boolean;
}
export interface DateRangeProperty {
    format: string;
}
export interface DoubleRangeProperty {
}
export interface FloatRangeProperty {
}
export interface IntegerRangeProperty {
}
export interface IpRangeProperty {
}
export interface LongRangeProperty {
}
export interface RankFeatureProperty {
    positive_score_impact: boolean;
}
export interface RankFeaturesProperty {
}
export interface SearchAsYouTypeProperty {
    analyzer: string;
    index: boolean;
    index_options: IndexOptions;
    max_shingle_size: integer;
    norms: boolean;
    search_analyzer: string;
    search_quote_analyzer: string;
    term_vector: TermVectorOption;
}
export interface TextIndexPrefixes {
    max_chars: integer;
    min_chars: integer;
}
export interface TextProperty {
    analyzer: string;
    boost: double;
    eager_global_ordinals: boolean;
    fielddata: boolean;
    fielddata_frequency_filter: FielddataFrequencyFilter;
    index: boolean;
    index_options: IndexOptions;
    index_phrases: boolean;
    index_prefixes: TextIndexPrefixes;
    norms: boolean;
    position_increment_gap: integer;
    search_analyzer: string;
    search_quote_analyzer: string;
    term_vector: TermVectorOption;
}
export interface GeoPointProperty {
    ignore_malformed: boolean;
    ignore_z_value: boolean;
    null_value: GeoLocation;
}
export interface GeoShapeProperty {
    ignore_malformed: boolean;
    ignore_z_value: boolean;
    orientation: GeoOrientation;
    strategy: GeoStrategy;
    coerce: boolean;
}
export interface CompletionProperty {
    analyzer: string;
    contexts: SuggestContext[];
    max_input_length: integer;
    preserve_position_increments: boolean;
    preserve_separators: boolean;
    search_analyzer: string;
}
export interface SuggestContext {
    name: string;
    path: Field;
    type: string;
}
export interface FieldAliasProperty {
    path: Field;
}
export interface GenericProperty {
    analyzer: string;
    boost: double;
    fielddata: StringFielddata;
    ignore_above: integer;
    index: boolean;
    index_options: IndexOptions;
    norms: boolean;
    null_value: string;
    position_increment_gap: integer;
    search_analyzer: string;
    term_vector: TermVectorOption;
    type: string;
}
export interface IpProperty {
    boost: double;
    index: boolean;
    null_value: string;
}
export interface Murmur3HashProperty {
}
export interface ShapeProperty {
    ignore_malformed: boolean;
    ignore_z_value: boolean;
    orientation: ShapeOrientation;
    coerce: boolean;
}
export interface TokenCountProperty {
    analyzer: string;
    boost: double;
    index: boolean;
    null_value: double;
}
export interface IndicesModuleSettings {
    circuit_breaker_settings: CircuitBreakerSettings;
    fielddata_settings: FielddataSettings;
    qeueries_cache_size: string;
    recovery_settings: IndicesRecoverySettings;
}
export interface CircuitBreakerSettings {
    fielddata_limit: string;
    fielddata_overhead: float;
    request_limit: string;
    request_overhead: float;
    total_limit: string;
}
export interface Fielddata {
    filter: FielddataFilter;
    loading: FielddataLoading;
}
export interface FielddataFilter {
    frequency: FielddataFrequencyFilter;
    regex: FielddataRegexFilter;
}
export interface FielddataFrequencyFilter {
    max: double;
    min: double;
    min_segment_size: integer;
}
export interface FielddataRegexFilter {
    pattern: string;
}
export interface FielddataSettings {
    cache_expire: Time;
    cache_size: string;
}
export interface NumericFielddata {
    format: NumericFielddataFormat;
}
export interface StringFielddata {
    format: StringFielddataFormat;
}
export interface IndicesRecoverySettings {
    compress: boolean;
    concurrent_small_file_streams: integer;
    concurrent_streams: integer;
    file_chunk_size: string;
    max_bytes_per_second: string;
    translog_operations: integer;
    translog_size: string;
}
export interface StoredScript {
    lang: string;
    source: string;
}
export interface DeleteScriptRequest {
    master_timeout: Time;
    timeout: Time;
}
export interface DeleteScriptResponse {
}
export interface ExecutePainlessScriptRequest {
    context: string;
    context_setup: PainlessContextSetup;
    script: InlineScript;
}
export interface ExecutePainlessScriptResponse<TResult> {
    result: TResult;
}
export interface PainlessContextSetup {
    document: object;
    index: IndexName;
    query: QueryContainer;
}
export interface GetScriptRequest {
    master_timeout: Time;
}
export interface GetScriptResponse {
    script: StoredScript;
}
export interface PutScriptRequest {
    script: StoredScript;
    master_timeout: Time;
    timeout: Time;
}
export interface PutScriptResponse {
}
export interface SnapshotRepository {
    type: string;
}
export interface CleanupRepositoryRequest {
    master_timeout: Time;
    timeout: Time;
}
export interface CleanupRepositoryResponse {
    results: CleanupRepositoryResults;
}
export interface CleanupRepositoryResults {
    deleted_bytes: long;
    deleted_blobs: long;
}
export interface CreateRepositoryRequest {
    repository: SnapshotRepository;
    master_timeout: Time;
    timeout: Time;
    verify: boolean;
}
export interface CreateRepositoryResponse {
}
export interface DeleteRepositoryRequest {
    master_timeout: Time;
    timeout: Time;
}
export interface DeleteRepositoryResponse {
}
export interface GetRepositoryRequest {
    local: boolean;
    master_timeout: Time;
}
export interface GetRepositoryResponse {
    repositories: Record<string, SnapshotRepository>;
}
export interface CompactNodeInfo {
    name: string;
}
export interface VerifyRepositoryRequest {
    master_timeout: Time;
    timeout: Time;
}
export interface VerifyRepositoryResponse {
    nodes: Record<string, CompactNodeInfo>;
}
export interface RestoreRequest {
    ignore_index_settings: string[];
    ignore_unavailable: boolean;
    include_aliases: boolean;
    include_global_state: boolean;
    index_settings: UpdateIndexSettingsRequest;
    indices: Indices;
    partial: boolean;
    rename_pattern: string;
    rename_replacement: string;
    master_timeout: Time;
    wait_for_completion: boolean;
}
export interface RestoreResponse {
    snapshot: SnapshotRestore;
}
export interface SnapshotRestore {
    indices: IndexName[];
    snapshot: string;
    shards: ShardStatistics;
}
export interface Snapshot {
    duration_in_millis: long;
    end_time: Date;
    end_time_in_millis: long;
    failures: SnapshotShardFailure[];
    indices: IndexName[];
    snapshot: string;
    shards: ShardStatistics;
    start_time: Date;
    start_time_in_millis: long;
    state: string;
    metadata: Record<string, object>;
}
export interface SnapshotShardFailure {
    index: string;
    node_id: string;
    reason: string;
    shard_id: string;
    status: string;
}
export interface DeleteSnapshotRequest {
    master_timeout: Time;
}
export interface DeleteSnapshotResponse {
}
export interface GetSnapshotRequest {
    ignore_unavailable: boolean;
    master_timeout: Time;
    verbose: boolean;
}
export interface GetSnapshotResponse {
    snapshots: Snapshot[];
}
export interface SnapshotRequest {
    ignore_unavailable: boolean;
    include_global_state: boolean;
    indices: Indices;
    partial: boolean;
    metadata: Record<string, object>;
    master_timeout: Time;
    wait_for_completion: boolean;
}
export interface SnapshotResponse {
    accepted: boolean;
    snapshot: Snapshot;
}
export interface FileCountSnapshotStats {
    file_count: integer;
    size_in_bytes: long;
}
export interface SnapshotIndexStats {
    shards: Record<string, SnapshotShardsStats>;
    shards_stats: SnapshotShardsStats;
    stats: SnapshotStats;
}
export interface SnapshotShardsStats {
    done: long;
    failed: long;
    finalizing: long;
    initializing: long;
    started: long;
    total: long;
}
export interface SnapshotStats {
    incremental: FileCountSnapshotStats;
    total: FileCountSnapshotStats;
    start_time_in_millis: long;
    time_in_millis: long;
}
export interface SnapshotStatus {
    include_global_state: boolean;
    indices: Record<string, SnapshotIndexStats>;
    repository: string;
    shards_stats: SnapshotShardsStats;
    snapshot: string;
    state: string;
    stats: SnapshotStats;
    uuid: string;
}
export interface SnapshotStatusRequest {
    ignore_unavailable: boolean;
    master_timeout: Time;
}
export interface SnapshotStatusResponse {
    snapshots: SnapshotStatus[];
}
export interface MatchAllQuery {
    norm_field: string;
}
export interface MatchNoneQuery {
}
export interface QueryContainer {
    bool: BoolQuery;
    boosting: BoostingQuery;
    common: CommonTermsQuery;
    constant_score: ConstantScoreQuery;
    dis_max: DisMaxQuery;
    exists: ExistsQuery;
    function_score: FunctionScoreQuery;
    fuzzy: FuzzyQuery;
    geo_bounding_box: GeoBoundingBoxQuery;
    geo_distance: GeoDistanceQuery;
    geo_polygon: GeoPolygonQuery;
    geo_shape: GeoShapeQuery;
    shape: ShapeQuery;
    has_child: HasChildQuery;
    has_parent: HasParentQuery;
    ids: IdsQuery;
    intervals: IntervalsQuery;
    is_conditionless: boolean;
    is_strict: boolean;
    is_verbatim: boolean;
    is_writable: boolean;
    match: MatchQuery;
    match_all: MatchAllQuery;
    match_none: MatchNoneQuery;
    match_phrase: MatchPhraseQuery;
    match_phrase_prefix: MatchPhrasePrefixQuery;
    more_like_this: MoreLikeThisQuery;
    multi_match: MultiMatchQuery;
    nested: NestedQuery;
    parent_id: ParentIdQuery;
    percolate: PercolateQuery;
    prefix: PrefixQuery;
    query_string: QueryStringQuery;
    range: RangeQuery;
    raw_query: RawQuery;
    regexp: RegexpQuery;
    script: ScriptQuery;
    script_score: ScriptScoreQuery;
    simple_query_string: SimpleQueryStringQuery;
    span_containing: SpanContainingQuery;
    field_masking_span: SpanFieldMaskingQuery;
    span_first: SpanFirstQuery;
    span_multi: SpanMultiTermQuery;
    span_near: SpanNearQuery;
    span_not: SpanNotQuery;
    span_or: SpanOrQuery;
    span_term: SpanTermQuery;
    span_within: SpanWithinQuery;
    term: TermQuery;
    terms: TermsQuery;
    terms_set: TermsSetQuery;
    wildcard: WildcardQuery;
    rank_feature: RankFeatureQuery;
    distance_feature: DistanceFeatureQuery;
    pinned: PinnedQuery;
}
export interface FieldLookup {
    id: Id;
    index: IndexName;
    path: Field;
    routing: Routing;
}
export interface FieldNameQuery {
    field: Field;
}
export interface Query {
    boost: double;
    conditionless: boolean;
    is_strict: boolean;
    is_verbatim: boolean;
    is_writable: boolean;
    _name: string;
}
export interface BoolQuery {
    filter: QueryContainer[];
    locked: boolean;
    minimum_should_match: MinimumShouldMatch;
    must: QueryContainer[];
    must_not: QueryContainer[];
    should: QueryContainer[];
}
export interface BoostingQuery {
    negative_boost: double;
    negative: QueryContainer;
    positive: QueryContainer;
}
export interface ConstantScoreQuery {
    filter: QueryContainer;
}
export interface DisMaxQuery {
    queries: QueryContainer[];
    tie_breaker: double;
}
export interface FunctionScoreQuery {
    boost_mode: FunctionBoostMode;
    functions: ScoreFunction[];
    max_boost: double;
    min_score: double;
    query: QueryContainer;
    score_mode: FunctionScoreMode;
}
export interface ScoreFunction {
    filter: QueryContainer;
    weight: double;
}
export interface CommonTermsQuery {
    analyzer: string;
    cutoff_frequency: double;
    high_freq_operator: Operator;
    low_freq_operator: Operator;
    minimum_should_match: MinimumShouldMatch;
    query: string;
}
export interface Intervals {
    filter: IntervalsFilter;
}
export interface IntervalsAllOf {
    intervals: IntervalsContainer[];
    max_gaps: integer;
    ordered: boolean;
}
export interface IntervalsAnyOf {
    intervals: IntervalsContainer[];
}
export interface IntervalsContainer {
    all_of: IntervalsAllOf;
    any_of: IntervalsAnyOf;
    match: IntervalsMatch;
    prefix: IntervalsPrefix;
    wildcard: IntervalsWildcard;
}
export interface IntervalsFilter {
    after: IntervalsContainer;
    before: IntervalsContainer;
    contained_by: IntervalsContainer;
    containing: IntervalsContainer;
    not_contained_by: IntervalsContainer;
    not_containing: IntervalsContainer;
    not_overlapping: IntervalsContainer;
    overlapping: IntervalsContainer;
    script: Script;
}
export interface IntervalsMatch {
    analyzer: string;
    max_gaps: integer;
    ordered: boolean;
    query: string;
    use_field: Field;
}
export interface IntervalsNoFilter {
}
export interface IntervalsPrefix {
    analyzer: string;
    prefix: string;
    use_field: Field;
}
export interface IntervalsQuery {
}
export interface IntervalsWildcard {
    analyzer: string;
    pattern: string;
    use_field: Field;
}
export interface MatchQuery {
    analyzer: string;
    auto_generate_synonyms_phrase_query: boolean;
    cutoff_frequency: double;
    fuzziness: Fuzziness;
    fuzzy_rewrite: MultiTermQueryRewrite;
    fuzzy_transpositions: boolean;
    lenient: boolean;
    max_expansions: integer;
    minimum_should_match: MinimumShouldMatch;
    operator: Operator;
    prefix_length: integer;
    query: string;
    zero_terms_query: ZeroTermsQuery;
}
export interface MatchPhraseQuery {
    analyzer: string;
    query: string;
    slop: integer;
}
export interface MatchPhrasePrefixQuery {
    analyzer: string;
    max_expansions: integer;
    query: string;
    slop: integer;
    zero_terms_query: ZeroTermsQuery;
}
export interface MultiMatchQuery {
    analyzer: string;
    auto_generate_synonyms_phrase_query: boolean;
    cutoff_frequency: double;
    fields: Field[];
    fuzziness: Fuzziness;
    fuzzy_rewrite: MultiTermQueryRewrite;
    fuzzy_transpositions: boolean;
    lenient: boolean;
    max_expansions: integer;
    minimum_should_match: MinimumShouldMatch;
    operator: Operator;
    prefix_length: integer;
    query: string;
    slop: integer;
    tie_breaker: double;
    type: TextQueryType;
    use_dis_max: boolean;
    zero_terms_query: ZeroTermsQuery;
}
export interface QueryStringQuery {
    allow_leading_wildcard: boolean;
    analyzer: string;
    analyze_wildcard: boolean;
    auto_generate_synonyms_phrase_query: boolean;
    default_field: Field;
    default_operator: Operator;
    enable_position_increments: boolean;
    escape: boolean;
    fields: Field[];
    fuzziness: Fuzziness;
    fuzzy_max_expansions: integer;
    fuzzy_prefix_length: integer;
    fuzzy_rewrite: MultiTermQueryRewrite;
    fuzzy_transpositions: boolean;
    lenient: boolean;
    max_determinized_states: integer;
    minimum_should_match: MinimumShouldMatch;
    phrase_slop: double;
    query: string;
    quote_analyzer: string;
    quote_field_suffix: string;
    rewrite: MultiTermQueryRewrite;
    tie_breaker: double;
    time_zone: string;
    type: TextQueryType;
}
export interface SimpleQueryStringQuery {
    analyzer: string;
    analyze_wildcard: boolean;
    auto_generate_synonyms_phrase_query: boolean;
    default_operator: Operator;
    fields: Field[];
    flags: SimpleQueryStringFlags;
    fuzzy_max_expansions: integer;
    fuzzy_prefix_length: integer;
    fuzzy_transpositions: boolean;
    lenient: boolean;
    minimum_should_match: MinimumShouldMatch;
    query: string;
    quote_field_suffix: string;
}
export interface GeoCoordinate {
    z: double;
}
export interface GeoLocation {
    lat: double;
    lon: double;
}
export interface BoundingBox {
    bottom_right: GeoLocation;
    top_left: GeoLocation;
    wkt: string;
}
export interface GeoBoundingBoxQuery {
    bounding_box: BoundingBox;
    type: GeoExecution;
    validation_method: GeoValidationMethod;
}
export interface GeoDistanceQuery {
    distance: Distance;
    distance_type: GeoDistanceType;
    location: GeoLocation;
    validation_method: GeoValidationMethod;
}
export interface GeoPolygonQuery {
    points: GeoLocation[];
    validation_method: GeoValidationMethod;
}
export interface GeoShape {
    type: string;
}
export interface GeoShapeQuery {
    ignore_unmapped: boolean;
    indexed_shape: FieldLookup;
    relation: GeoShapeRelation;
    shape: GeoShape;
}
export interface HasChildQuery {
    ignore_unmapped: boolean;
    inner_hits: InnerHits;
    max_children: integer;
    min_children: integer;
    query: QueryContainer;
    score_mode: ChildScoreMode;
    type: RelationName;
}
export interface HasParentQuery {
    ignore_unmapped: boolean;
    inner_hits: InnerHits;
    parent_type: RelationName;
    query: QueryContainer;
    score: boolean;
}
export interface NestedQuery {
    ignore_unmapped: boolean;
    inner_hits: InnerHits;
    path: Field;
    query: QueryContainer;
    score_mode: NestedScoreMode;
}
export interface ParentIdQuery {
    id: Id;
    ignore_unmapped: boolean;
    type: RelationName;
}
export interface MultiTermQueryRewrite {
    constant_score: MultiTermQueryRewrite;
    constant_score_boolean: MultiTermQueryRewrite;
    rewrite: RewriteMultiTerm;
    scoring_boolean: MultiTermQueryRewrite;
    size: integer;
}
export interface RawQuery {
    raw: string;
}
export interface SpanQuery {
    span_containing: SpanContainingQuery;
    field_masking_span: SpanFieldMaskingQuery;
    span_first: SpanFirstQuery;
    span_gap: SpanGapQuery;
    span_multi: SpanMultiTermQuery;
    span_near: SpanNearQuery;
    span_not: SpanNotQuery;
    span_or: SpanOrQuery;
    span_term: SpanTermQuery;
    span_within: SpanWithinQuery;
}
export interface SpanSubQuery {
}
export interface SpanContainingQuery {
    big: SpanQuery;
    little: SpanQuery;
}
export interface SpanFieldMaskingQuery {
    field: Field;
    query: SpanQuery;
}
export interface SpanFirstQuery {
    end: integer;
    match: SpanQuery;
}
export interface SpanGapQuery {
    field: Field;
    width: integer;
}
export interface SpanMultiTermQuery {
    match: QueryContainer;
}
export interface SpanNearQuery {
    clauses: SpanQuery[];
    in_order: boolean;
    slop: integer;
}
export interface SpanNotQuery {
    dist: integer;
    exclude: SpanQuery;
    include: SpanQuery;
    post: integer;
    pre: integer;
}
export interface SpanOrQuery {
    clauses: SpanQuery[];
}
export interface SpanTermQuery {
}
export interface SpanWithinQuery {
    big: SpanQuery;
    little: SpanQuery;
}
export interface DistanceFeatureQuery {
    origin: GeoCoordinate | DateMath;
    pivot: Distance | Time;
}
export interface MoreLikeThisQuery {
    analyzer: string;
    boost_terms: double;
    fields: Field[];
    include: boolean;
    like: Like[];
    max_doc_freq: integer;
    max_query_terms: integer;
    max_word_length: integer;
    min_doc_freq: integer;
    minimum_should_match: MinimumShouldMatch;
    min_term_freq: integer;
    min_word_length: integer;
    per_field_analyzer: Record<Field, string>;
    routing: Routing;
    stop_words: StopWords;
    unlike: Like[];
    version: long;
    version_type: VersionType;
}
export declare type Like = string | LikeDocument;
export interface LikeDocument {
    doc: object;
    fields: Field[];
    _id: Id;
    _index: IndexName;
    per_field_analyzer: Record<Field, string>;
    routing: Routing;
}
export interface PercolateQuery {
    document: object;
    documents: object[];
    field: Field;
    id: Id;
    index: IndexName;
    preference: string;
    routing: Routing;
    version: long;
}
export interface PinnedQuery {
    ids: Id[];
    organic: QueryContainer;
}
export interface RankFeatureFunction {
}
export interface RankFeatureQuery {
    function: RankFeatureFunction;
}
export interface ScriptQuery {
    script: Script;
}
export interface ScriptScoreQuery {
    query: QueryContainer;
    script: Script;
}
export interface ShapeQuery {
    ignore_unmapped: boolean;
    indexed_shape: FieldLookup;
    relation: ShapeRelation;
    shape: GeoShape;
}
export interface ExistsQuery {
    field: Field;
}
export interface FuzzyQuery {
    max_expansions: integer;
    prefix_length: integer;
    rewrite: MultiTermQueryRewrite;
    transpositions: boolean;
}
export interface IdsQuery {
    values: Id[];
}
export interface PrefixQuery {
    rewrite: MultiTermQueryRewrite;
}
export interface RangeQuery {
}
export interface RegexpQuery {
    flags: string;
    max_determinized_states: integer;
    value: string;
}
export interface TermQuery {
    value: object;
}
export interface TermsQuery {
    terms: object[];
    terms_lookup: FieldLookup;
}
export interface TermsSetQuery {
    minimum_should_match_field: Field;
    minimum_should_match_script: Script;
    terms: object[];
}
export interface WildcardQuery {
    rewrite: MultiTermQueryRewrite;
}
export interface TypedSearchRequest {
}
export interface CountRequest {
    allow_no_indices: boolean;
    analyze_wildcard: boolean;
    analyzer: string;
    default_operator: DefaultOperator;
    df: string;
    expand_wildcards: ExpandWildcards;
    ignore_throttled: boolean;
    ignore_unavailable: boolean;
    lenient: boolean;
    min_score: double;
    preference: string;
    query_on_query_string: string;
    routing: Routing;
    terminate_after: long;
    query: QueryContainer;
}
export interface CountResponse {
    count: long;
    _shards: ShardStatistics;
}
export interface ExplainRequest {
    analyze_wildcard: boolean;
    analyzer: string;
    default_operator: DefaultOperator;
    df: string;
    lenient: boolean;
    preference: string;
    query_on_query_string: string;
    routing: Routing;
    source_enabled: boolean;
    source_excludes: Field[];
    source_includes: Field[];
    query: QueryContainer;
    stored_fields: Field[];
}
export interface ExplainResponse<TDocument> {
    explanation: ExplanationDetail;
    get: InlineGet<TDocument>;
    matched: boolean;
}
export interface Explanation {
    description: string;
    details: ExplanationDetail[];
    value: float;
}
export interface ExplanationDetail {
    description: string;
    details: ExplanationDetail[];
    value: float;
}
export interface InlineGet<TDocument> {
    fields: Record<string, LazyDocument>;
    found: boolean;
    _source: TDocument;
}
export interface FieldCapabilities {
    aggregatable: boolean;
    indices: Indices;
    non_aggregatable_indices: Indices;
    non_searchable_indices: Indices;
    searchable: boolean;
}
export interface FieldCapabilitiesRequest {
    allow_no_indices: boolean;
    expand_wildcards: ExpandWildcards;
    fields: Field[];
    ignore_unavailable: boolean;
    include_unmapped: boolean;
}
export interface FieldCapabilitiesResponse {
    fields: Record<Field, Record<string, FieldCapabilities>>;
}
export interface MultiSearchRequest {
    ccs_minimize_roundtrips: boolean;
    max_concurrent_searches: long;
    max_concurrent_shard_requests: long;
    pre_filter_shard_size: long;
    search_type: SearchType;
    total_hits_as_integer: boolean;
    typed_keys: boolean;
    operations: Record<string, SearchRequest>;
}
export interface MultiSearchResponse {
    took: long;
    all_responses: IResponse[];
    is_valid: boolean;
    total_responses: integer;
}
export interface MultiSearchTemplateRequest {
    ccs_minimize_roundtrips: boolean;
    max_concurrent_searches: long;
    search_type: SearchType;
    total_hits_as_integer: boolean;
    typed_keys: boolean;
    operations: Record<string, SearchTemplateRequest>;
}
export interface ClearScrollRequest {
    scroll_id: string[];
}
export interface ClearScrollResponse {
}
export interface ScrollRequest {
    total_hits_as_integer: boolean;
    scroll: Time;
    scroll_id: string;
}
export interface SlicedScroll {
    field: Field;
    id: integer;
    max: integer;
}
export interface SearchRequest {
    allow_no_indices: boolean;
    allow_partial_search_results: boolean;
    analyze_wildcard: boolean;
    analyzer: string;
    batched_reduce_size: long;
    ccs_minimize_roundtrips: boolean;
    default_operator: DefaultOperator;
    df: string;
    expand_wildcards: ExpandWildcards;
    ignore_throttled: boolean;
    ignore_unavailable: boolean;
    lenient: boolean;
    max_concurrent_shard_requests: long;
    pre_filter_shard_size: long;
    preference: string;
    request_cache: boolean;
    routing: Routing;
    scroll: Time;
    search_type: SearchType;
    sequence_number_primary_term: boolean;
    stats: string[];
    suggest_field: Field;
    suggest_mode: SuggestMode;
    suggest_size: long;
    suggest_text: string;
    total_hits_as_integer: boolean;
    typed_keys: boolean;
    aggs: Record<string, AggregationContainer>;
    collapse: FieldCollapse;
    docvalue_fields: Field[];
    explain: boolean;
    from: integer;
    highlight: Highlight;
    indices_boost: Record<IndexName, double>;
    min_score: double;
    post_filter: QueryContainer;
    profile: boolean;
    query: QueryContainer;
    rescore: Rescore[];
    script_fields: Record<string, ScriptField>;
    search_after: object[];
    size: integer;
    slice: SlicedScroll;
    sort: Sort[];
    _source: boolean | SourceFilter;
    stored_fields: Field[];
    suggest: Record<string, SuggestBucket>;
    terminate_after: long;
    timeout: string;
    track_scores: boolean;
    track_total_hits: boolean;
    version: boolean;
}
export interface SearchResponse<TDocument> {
    aggregations: Record<string, Aggregate>;
    _clusters: ClusterStatistics;
    fields: Record<string, LazyDocument>;
    hits: HitsMetadata<TDocument>;
    max_score: double;
    num_reduce_phases: long;
    profile: Profile;
    _scroll_id: string;
    _shards: ShardStatistics;
    suggest: SuggestDictionary<TDocument>;
    terminated_early: boolean;
    timed_out: boolean;
    took: long;
    total: long;
}
export interface FieldCollapse {
    field: Field;
    inner_hits: InnerHits;
    max_concurrent_group_searches: integer;
}
export interface Highlight {
    boundary_chars: string;
    boundary_max_scan: integer;
    boundary_scanner: BoundaryScanner;
    boundary_scanner_locale: string;
    encoder: HighlighterEncoder;
    fields: Record<Field, HighlightField>;
    fragmenter: HighlighterFragmenter;
    fragment_offset: integer;
    fragment_size: integer;
    max_fragment_length: integer;
    no_match_size: integer;
    number_of_fragments: integer;
    order: HighlighterOrder;
    post_tags: string[];
    pre_tags: string[];
    require_field_match: boolean;
    tags_schema: HighlighterTagsSchema;
}
export interface HighlightField {
    boundary_chars: string;
    boundary_max_scan: integer;
    boundary_scanner: BoundaryScanner;
    boundary_scanner_locale: string;
    field: Field;
    force_source: boolean;
    fragmenter: HighlighterFragmenter;
    fragment_offset: integer;
    fragment_size: integer;
    highlight_query: QueryContainer;
    matched_fields: Field[];
    max_fragment_length: integer;
    no_match_size: integer;
    number_of_fragments: integer;
    order: HighlighterOrder;
    phrase_limit: integer;
    post_tags: string[];
    pre_tags: string[];
    require_field_match: boolean;
    tags_schema: HighlighterTagsSchema;
    type: HighlighterType | string;
}
export interface Hit<TDocument> {
    _explanation: Explanation;
    fields: Record<string, LazyDocument>;
    highlight: Record<string, string[]>;
    inner_hits: Record<string, InnerHitsResult>;
    matched_queries: string[];
    _nested: NestedIdentity;
    _score: double;
    sort: object[];
}
export interface HitMetadata<TDocument> {
    _id: string;
    _index: string;
    _primary_term: long;
    _routing: string;
    _seq_no: long;
    _source: TDocument;
    _type: string;
    _version: long;
}
export interface HitsMetadata<T> {
    hits: Hit<T>[];
    max_score: double;
    total: TotalHits;
}
export interface InnerHitsMetadata {
    hits: Hit<LazyDocument>[];
    max_score: double;
    total: TotalHits;
}
export interface InnerHitsResult {
    hits: InnerHitsMetadata;
}
export interface NestedIdentity {
    field: Field;
    _nested: NestedIdentity;
    offset: integer;
}
export interface TotalHits {
    relation: TotalHitsRelation;
    value: long;
}
export interface InnerHits {
    collapse: FieldCollapse;
    docvalue_fields: Field[];
    explain: boolean;
    from: integer;
    highlight: Highlight;
    ignore_unmapped: boolean;
    name: string;
    script_fields: Record<string, ScriptField>;
    size: integer;
    sort: Sort[];
    _source: boolean | SourceFilter;
    version: boolean;
}
export interface AggregationBreakdown {
    build_aggregation: long;
    build_aggregation_count: long;
    collect: long;
    collect_count: long;
    initialize: long;
    intialize_count: long;
    reduce: long;
    reduce_count: long;
}
export interface AggregationProfile {
    breakdown: AggregationBreakdown;
    description: string;
    time_in_nanos: long;
    type: string;
}
export interface Collector {
    children: Collector[];
    name: string;
    reason: string;
    time_in_nanos: long;
}
export interface Profile {
    shards: ShardProfile[];
}
export interface QueryBreakdown {
    advance: long;
    build_scorer: long;
    create_weight: long;
    match: long;
    next_doc: long;
    score: long;
}
export interface QueryProfile {
    breakdown: QueryBreakdown;
    children: QueryProfile[];
    description: string;
    time_in_nanos: long;
    type: string;
}
export interface SearchProfile {
    collector: Collector[];
    query: QueryProfile[];
    rewrite_time: long;
}
export interface ShardProfile {
    aggregations: AggregationProfile[];
    id: string;
    searches: SearchProfile[];
}
export interface Rescore {
    query: RescoreQuery;
    window_size: integer;
}
export interface RescoreQuery {
    rescore_query: QueryContainer;
    query_weight: double;
    rescore_query_weight: double;
    score_mode: ScoreMode;
}
export interface NestedSort {
    filter: QueryContainer;
    nested: NestedSort;
    path: Field;
}
export interface Sort {
    missing: object;
    mode: SortMode;
    numeric_type: NumericType;
    nested: NestedSort;
    order: SortOrder;
    sort_key: Field;
}
export interface SourceFilter {
    excludes: Field[];
    includes: Field[];
}
export interface SearchNode {
    name: string;
    transport_address: string;
}
export interface SearchShard {
    index: string;
    node: string;
    primary: boolean;
    relocating_node: string;
    shard: integer;
    state: string;
}
export interface SearchShardsRequest {
    allow_no_indices: boolean;
    expand_wildcards: ExpandWildcards;
    ignore_unavailable: boolean;
    local: boolean;
    preference: string;
    routing: Routing;
}
export interface SearchShardsResponse {
    nodes: Record<string, SearchNode>;
    shards: SearchShard[][];
}
export interface SearchTemplateRequest {
    allow_no_indices: boolean;
    ccs_minimize_roundtrips: boolean;
    expand_wildcards: ExpandWildcards;
    explain: boolean;
    ignore_throttled: boolean;
    ignore_unavailable: boolean;
    preference: string;
    profile: boolean;
    routing: Routing;
    scroll: Time;
    search_type: SearchType;
    total_hits_as_integer: boolean;
    typed_keys: boolean;
    id: string;
    params: Record<string, object>;
    source: string;
}
export interface RenderSearchTemplateRequest {
    file: string;
    params: Record<string, object>;
    source: string;
}
export interface RenderSearchTemplateResponse {
    template_output: LazyDocument;
}
export interface Suggest<T> {
    length: integer;
    offset: integer;
    options: SuggestOption<T>[];
    text: string;
}
export interface SuggestBucket {
    completion: CompletionSuggester;
    phrase: PhraseSuggester;
    prefix: string;
    regex: string;
    term: TermSuggester;
    text: string;
}
export interface SuggestDictionary<T> {
    item: Suggest<T>[];
    keys: string[];
    values: Suggest<T>[][];
}
export interface SuggestOption<TDocument> {
    collate_match: boolean;
    contexts: Record<string, Context[]>;
    _score: double;
    fields: Record<string, LazyDocument>;
    freq: long;
    highlighted: string;
    _id: string;
    _index: IndexName;
    score: double;
    _source: TDocument;
    text: string;
}
export interface Suggester {
    analyzer: string;
    field: Field;
    size: integer;
}
export interface CompletionSuggester {
    contexts: Record<string, SuggestContextQuery[]>;
    fuzzy: SuggestFuzziness;
    prefix: string;
    regex: string;
    skip_duplicates: boolean;
}
export interface SuggestFuzziness {
    fuzziness: Fuzziness;
    min_length: integer;
    prefix_length: integer;
    transpositions: boolean;
    unicode_aware: boolean;
}
export declare type Context = string | GeoLocation;
export interface SuggestContextQuery {
    boost: double;
    context: Context;
    neighbours: Distance[] | integer[];
    precision: Distance | integer;
    prefix: boolean;
}
export interface DirectGenerator {
    field: Field;
    max_edits: integer;
    max_inspections: float;
    max_term_freq: float;
    min_doc_freq: float;
    min_word_length: integer;
    post_filter: string;
    pre_filter: string;
    prefix_length: integer;
    size: integer;
    suggest_mode: SuggestMode;
}
export interface PhraseSuggestCollate {
    params: Record<string, object>;
    prune: boolean;
    query: PhraseSuggestCollateQuery;
}
export interface PhraseSuggestCollateQuery {
    id: Id;
    source: string;
}
export interface PhraseSuggestHighlight {
    post_tag: string;
    pre_tag: string;
}
export interface PhraseSuggester {
    collate: PhraseSuggestCollate;
    confidence: double;
    direct_generator: DirectGenerator[];
    force_unigrams: boolean;
    gram_size: integer;
    highlight: PhraseSuggestHighlight;
    max_errors: double;
    real_word_error_likelihood: double;
    separator: string;
    shard_size: integer;
    smoothing: SmoothingModelContainer;
    text: string;
    token_limit: integer;
}
export interface LaplaceSmoothingModel {
    alpha: double;
}
export interface LinearInterpolationSmoothingModel {
    bigram_lambda: double;
    trigram_lambda: double;
    unigram_lambda: double;
}
export interface SmoothingModel {
}
export interface SmoothingModelContainer {
    laplace: LaplaceSmoothingModel;
    linear_interpolation: LinearInterpolationSmoothingModel;
    stupid_backoff: StupidBackoffSmoothingModel;
}
export interface StupidBackoffSmoothingModel {
    discount: double;
}
export interface TermSuggester {
    lowercase_terms: boolean;
    max_edits: integer;
    max_inspections: integer;
    max_term_freq: float;
    min_doc_freq: float;
    min_word_length: integer;
    prefix_length: integer;
    shard_size: integer;
    sort: SuggestSort;
    string_distance: StringDistance;
    suggest_mode: SuggestMode;
    text: string;
}
export interface ValidateQueryRequest {
    all_shards: boolean;
    allow_no_indices: boolean;
    analyze_wildcard: boolean;
    analyzer: string;
    default_operator: DefaultOperator;
    df: string;
    expand_wildcards: ExpandWildcards;
    explain: boolean;
    ignore_unavailable: boolean;
    lenient: boolean;
    query_on_query_string: string;
    rewrite: boolean;
    query: QueryContainer;
}
export interface ValidateQueryResponse {
    explanations: ValidationExplanation[];
    _shards: ShardStatistics;
    valid: boolean;
}
export interface ValidationExplanation {
    error: string;
    explanation: string;
    index: string;
    valid: boolean;
}
export interface CreateAutoFollowPatternRequest {
    remote_cluster: string;
    leader_index_patterns: string[];
    follow_index_pattern: string;
    max_read_request_operation_count: integer;
    max_outstanding_read_requests: long;
    max_read_request_size: string;
    max_write_request_operation_count: integer;
    max_write_request_size: string;
    max_outstanding_write_requests: integer;
    max_write_buffer_count: integer;
    max_write_buffer_size: string;
    max_retry_delay: Time;
    max_poll_timeout: Time;
}
export interface CreateAutoFollowPatternResponse {
}
export interface DeleteAutoFollowPatternRequest {
}
export interface DeleteAutoFollowPatternResponse {
}
export interface AutoFollowPattern {
    follow_index_pattern: string;
    leader_index_patterns: string[];
    max_outstanding_read_requests: long;
    max_outstanding_write_requests: integer;
    read_poll_timeout: Time;
    max_read_request_operation_count: integer;
    max_read_request_size: string;
    max_retry_delay: Time;
    max_write_buffer_count: integer;
    max_write_buffer_size: string;
    max_write_request_operation_count: integer;
    max_write_request_size: string;
    remote_cluster: string;
}
export interface GetAutoFollowPatternRequest {
}
export interface GetAutoFollowPatternResponse {
    patterns: Record<string, AutoFollowPattern>;
}
export interface CreateFollowIndexRequest {
    wait_for_active_shards: string;
    remote_cluster: string;
    leader_index: IndexName;
    max_read_request_operation_count: long;
    max_outstanding_read_requests: long;
    max_read_request_size: string;
    max_write_request_operation_count: long;
    max_write_request_size: string;
    max_outstanding_write_requests: long;
    max_write_buffer_count: long;
    max_write_buffer_size: string;
    max_retry_delay: Time;
    read_poll_timeout: Time;
}
export interface CreateFollowIndexResponse {
    follow_index_created: boolean;
    follow_index_shards_acked: boolean;
    index_following_started: boolean;
}
export interface FollowIndexReadException {
    from_seq_no: long;
    retries: integer;
    exception: ErrorCause;
}
export interface FollowIndexShardStats {
    bytes_read: long;
    failed_read_requests: long;
    failed_write_requests: long;
    follower_global_checkpoint: long;
    follower_index: string;
    follower_mapping_version: long;
    follower_max_seq_no: long;
    follower_settings_version: long;
    follower_aliases_version: long;
    last_requested_seq_no: long;
    leader_global_checkpoint: long;
    leader_index: string;
    leader_max_seq_no: long;
    operations_read: long;
    operations_written: long;
    outstanding_read_requests: integer;
    outstanding_write_requests: integer;
    remote_cluster: string;
    shard_id: integer;
    successful_read_requests: long;
    successful_write_requests: long;
    total_read_remote_exec_time_millis: long;
    total_read_time_millis: long;
    total_write_time_millis: long;
    write_buffer_operation_count: long;
    write_buffer_size_in_bytes: long;
    read_exceptions: FollowIndexReadException[];
    time_since_last_read_millis: long;
    fatal_exception: ErrorCause;
}
export interface FollowIndexStats {
    index: string;
    shards: FollowIndexShardStats[];
}
export interface FollowIndexStatsRequest {
}
export interface FollowIndexStatsResponse {
    indices: FollowIndexStats[];
}
export interface FollowConfig {
    max_read_request_operation_count: integer;
    max_read_request_size: string;
    max_outstanding_read_requests: integer;
    max_write_request_operation_count: integer;
    max_write_request_size: string;
    max_outstanding_write_requests: integer;
    max_write_buffer_count: integer;
    max_write_buffer_size: string;
    max_retry_delay: Time;
    read_poll_timeout: Time;
}
export interface FollowInfoRequest {
}
export interface FollowInfoResponse {
    follower_indices: FollowerInfo[];
}
export interface FollowerInfo {
    follower_index: string;
    remote_cluster: string;
    leader_index: string;
    status: FollowerIndexStatus;
    parameters: FollowConfig;
}
export interface ForgetFollowerIndexRequest {
    follower_cluster: string;
    follower_index: IndexName;
    follower_index_uuid: string;
    leader_remote_cluster: string;
}
export interface ForgetFollowerIndexResponse {
    _shards: ShardStatistics;
}
export interface PauseFollowIndexRequest {
}
export interface PauseFollowIndexResponse {
}
export interface ResumeFollowIndexRequest {
    max_read_request_operation_count: long;
    max_outstanding_read_requests: long;
    max_read_request_size: string;
    max_write_request_operation_count: long;
    max_write_request_size: string;
    max_outstanding_write_requests: long;
    max_write_buffer_count: long;
    max_write_buffer_size: string;
    max_retry_delay: Time;
    read_poll_timeout: Time;
}
export interface ResumeFollowIndexResponse {
}
export interface UnfollowIndexRequest {
}
export interface UnfollowIndexResponse {
}
export interface AutoFollowedCluster {
    cluster_name: string;
    time_since_last_check_millis: Date;
    last_seen_metadata_version: long;
}
export interface CcrAutoFollowStats {
    number_of_failed_follow_indices: long;
    number_of_failed_remote_cluster_state_requests: long;
    number_of_successful_follow_indices: long;
    recent_auto_follow_errors: ErrorCause[];
    auto_followed_clusters: AutoFollowedCluster[];
}
export interface CcrFollowStats {
    indices: FollowIndexStats[];
}
export interface CcrStatsRequest {
}
export interface CcrStatsResponse {
    auto_follow_stats: CcrAutoFollowStats;
    follow_stats: CcrFollowStats;
}
export interface GraphExploreRequest {
    routing: Routing;
    timeout: Time;
    connections: Hop;
    controls: GraphExploreControls;
    query: QueryContainer;
    vertices: GraphVertexDefinition[];
}
export interface GraphExploreResponse {
    connections: GraphConnection[];
    failures: ShardFailure[];
    timed_out: boolean;
    took: long;
    vertices: GraphVertex[];
}
export interface GraphExploreControls {
    sample_diversity: SampleDiversity;
    sample_size: integer;
    timeout: Time;
    use_significance: boolean;
}
export interface GraphVertexDefinition {
    exclude: string[];
    field: Field;
    include: GraphVertexInclude[];
    min_doc_count: long;
    shard_min_doc_count: long;
    size: integer;
}
export interface GraphVertexInclude {
    boost: double;
    term: string;
}
export interface Hop {
    connections: Hop;
    query: QueryContainer;
    vertices: GraphVertexDefinition[];
}
export interface SampleDiversity {
    field: Field;
    max_docs_per_value: integer;
}
export interface GraphConnection {
    doc_count: long;
    source: long;
    target: long;
    weight: double;
}
export interface GraphVertex {
    depth: long;
    field: string;
    term: string;
    weight: double;
}
export interface Phase {
    actions: Record<string, LifecycleAction>;
    min_age: Time;
}
export interface Phases {
    cold: Phase;
    delete: Phase;
    hot: Phase;
    warm: Phase;
}
export interface Policy {
    phases: Phases;
}
export interface LifecycleAction {
}
export interface DeleteLifecycleRequest {
}
export interface DeleteLifecycleResponse {
}
export interface ExplainLifecycleRequest {
    only_errors: boolean;
    only_managed: boolean;
}
export interface ExplainLifecycleResponse {
    indices: Record<string, LifecycleExplain>;
}
export interface LifecycleExplain {
    action: string;
    action_time_millis: Date;
    failed_step: string;
    index: IndexName;
    lifecycle_date_millis: Date;
    managed: boolean;
    phase: string;
    phase_time_millis: Date;
    policy: string;
    step: string;
    step_info: Record<string, object>;
    step_time_millis: Date;
    age: Time;
}
export interface GetLifecycleRequest {
}
export interface GetLifecycleResponse extends ResponseBase, Record<string, any> {
    policies: Record<string, LifecyclePolicy>;
}
export interface LifecyclePolicy {
    modified_date: Date;
    policy: Policy;
    version: integer;
}
export interface GetIlmStatusRequest {
}
export interface GetIlmStatusResponse {
    operation_mode: LifecycleOperationMode;
}
export interface MoveToStepRequest {
    current_step: StepKey;
    next_step: StepKey;
}
export interface MoveToStepResponse {
}
export interface StepKey {
    action: string;
    name: string;
    phase: string;
}
export interface PutLifecycleRequest {
    policy: Policy;
}
export interface PutLifecycleResponse {
}
export interface RemovePolicyRequest {
}
export interface RemovePolicyResponse {
    failed_indexes: string[];
    has_failures: boolean;
}
export interface RetryIlmRequest {
}
export interface RetryIlmResponse {
}
export interface StartIlmRequest {
}
export interface StartIlmResponse {
}
export interface StopIlmRequest {
}
export interface StopIlmResponse {
}
export interface MinimalLicenseInformation {
    expiry_date_in_millis: long;
    mode: LicenseType;
    status: LicenseStatus;
    type: LicenseType;
    uid: string;
}
export interface NativeCodeInformation {
    build_hash: string;
    version: string;
}
export interface XPackBuildInformation {
    date: Date;
    hash: string;
}
export interface XPackFeature {
    available: boolean;
    description: string;
    enabled: boolean;
    native_code_info: NativeCodeInformation;
}
export interface XPackFeatures {
    ccr: XPackFeature;
    data_frame: XPackFeature;
    flattened: XPackFeature;
    data_science: XPackFeature;
    graph: XPackFeature;
    ilm: XPackFeature;
    logstash: XPackFeature;
    ml: XPackFeature;
    monitoring: XPackFeature;
    rollup: XPackFeature;
    security: XPackFeature;
    sql: XPackFeature;
    vectors: XPackFeature;
    watcher: XPackFeature;
}
export interface XPackInfoRequest {
    categories: string[];
}
export interface XPackInfoResponse {
    build: XPackBuildInformation;
    features: XPackFeatures;
    license: MinimalLicenseInformation;
    tagline: string;
}
export interface AlertingCount {
    active: long;
    total: long;
}
export interface AlertingExecution {
    actions: Record<string, ExecutionAction>;
}
export interface AlertingInput {
    input: Record<string, AlertingCount>;
    trigger: Record<string, AlertingCount>;
}
export interface AlertingUsage {
    count: AlertingCount;
    execution: AlertingExecution;
    watch: AlertingInput;
}
export interface AuditUsage {
    outputs: string[];
}
export interface CcrUsage {
    auto_follow_patterns_count: integer;
    follower_indices_count: integer;
}
export interface DataFeed {
    count: long;
}
export interface ExecutionAction {
    total: long;
    total_in_ms: long;
}
export interface ForecastStatistics {
    forecasted_jobs: long;
    memory_bytes: JobStatistics;
    processing_time_ms: JobStatistics;
    records: JobStatistics;
    status: Record<string, long>;
    total: long;
}
export interface IlmPolicyStatistics {
    phases: Phases;
    indices_managed: integer;
}
export interface IlmUsage {
    policy_count: integer;
    policy_stats: IlmPolicyStatistics[];
}
export interface IpFilterUsage {
    http: boolean;
    transport: boolean;
}
export interface Job {
    analysis_config: AnalysisConfig;
    analysis_limits: AnalysisLimits;
    background_persist_interval: Time;
    create_time: Date;
    data_description: DataDescription;
    description: string;
    finished_time: Date;
    job_id: string;
    job_type: string;
    model_plot: ModelPlotConfig;
    model_snapshot_id: string;
    model_snapshot_retention_days: long;
    renormalization_window_days: long;
    results_index_name: string;
    results_retention_days: long;
}
export interface JobStatistics {
    avg: double;
    max: double;
    min: double;
    total: double;
}
export interface MachineLearningUsage {
    node_count: integer;
    datafeeds: Record<string, DataFeed>;
    jobs: Record<string, Job>;
}
export interface MonitoringUsage {
    collection_enabled: boolean;
    enabled_exporters: Record<string, long>;
}
export interface QueryUsage {
    total: integer;
    paging: integer;
    failed: integer;
    count: integer;
}
export interface RealmUsage {
    name: string[];
    order: long[];
    size: long[];
}
export interface RoleMappingUsage {
    enabled: integer;
    size: integer;
}
export interface RoleUsage {
    dls: boolean;
    fls: boolean;
    size: long;
}
export interface SecurityFeatureToggle {
    enabled: boolean;
}
export interface SecurityUsage {
    anonymous: SecurityFeatureToggle;
    audit: AuditUsage;
    ipfilter: IpFilterUsage;
    realms: Record<string, RealmUsage>;
    role_mapping: Record<string, RoleMappingUsage>;
    roles: Record<string, RoleUsage>;
    ssl: SslUsage;
    system_key: SecurityFeatureToggle;
}
export interface SqlUsage {
    features: Record<string, integer>;
    queries: Record<string, QueryUsage>;
}
export interface SslUsage {
    http: SecurityFeatureToggle;
    transport: SecurityFeatureToggle;
}
export interface VectorUsage {
    dense_vector_fields_count: integer;
    sparse_vector_fields_count: integer;
    dense_vector_dims_avg_count: integer;
}
export interface XPackUsage {
    available: boolean;
    enabled: boolean;
}
export interface XPackUsageRequest {
    master_timeout: Time;
}
export interface XPackUsageResponse {
    sql: SqlUsage;
    rollup: XPackUsage;
    data_frame: XPackUsage;
    flattened: XPackUsage;
    data_science: XPackUsage;
    ilm: IlmUsage;
    ccr: CcrUsage;
    watcher: AlertingUsage;
    graph: XPackUsage;
    logstash: XPackUsage;
    ml: MachineLearningUsage;
    monitoring: MonitoringUsage;
    security: SecurityUsage;
    vectors: VectorUsage;
    voting_only: XPackUsage;
}
export interface DeleteLicenseRequest {
}
export interface DeleteLicenseResponse {
}
export interface GetBasicLicenseStatusRequest {
}
export interface GetBasicLicenseStatusResponse {
    eligible_to_start_basic: boolean;
}
export interface GetLicenseRequest {
    local: boolean;
}
export interface GetLicenseResponse {
    is_valid: boolean;
    license: LicenseInformation;
}
export interface License {
    expiry_date_in_millis: long;
    issue_date_in_millis: long;
    issued_to: string;
    issuer: string;
    max_nodes: long;
    signature: string;
    type: LicenseType;
    uid: string;
}
export interface LicenseInformation {
    expiry_date: Date;
    expiry_date_in_millis: long;
    issue_date: Date;
    issue_date_in_millis: long;
    issued_to: string;
    issuer: string;
    max_nodes: long;
    status: LicenseStatus;
    type: LicenseType;
    uid: string;
}
export interface GetTrialLicenseStatusRequest {
}
export interface GetTrialLicenseStatusResponse {
    eligible_to_start_trial: boolean;
}
export interface LicenseAcknowledgement {
    license: string[];
    message: string;
}
export interface PostLicenseRequest {
    acknowledge: boolean;
    license: License;
}
export interface PostLicenseResponse {
    acknowledge: LicenseAcknowledgement;
    acknowledged: boolean;
    license_status: LicenseStatus;
}
export interface StartBasicLicenseRequest {
    acknowledge: boolean;
}
export interface StartBasicLicenseResponse {
    acknowledge: Record<string, string[]>;
    basic_was_started: boolean;
    error_message: string;
}
export interface StartTrialLicenseRequest {
    acknowledge: boolean;
    type_query_string: string;
}
export interface StartTrialLicenseResponse {
    error_message: string;
    trial_was_started: boolean;
}
export interface CloseJobRequest {
    allow_no_jobs: boolean;
    force: boolean;
    timeout: Time;
}
export interface CloseJobResponse {
    closed: boolean;
}
export interface ChunkingConfig {
    mode: ChunkingMode;
    time_span: Time;
}
export interface DatafeedConfig {
    aggregations: Record<string, AggregationContainer>;
    chunking_config: ChunkingConfig;
    datafeed_id: string;
    frequency: Time;
    indices: Indices;
    job_id: string;
    query: QueryContainer;
    query_delay: Time;
    script_fields: Record<string, ScriptField>;
    scroll_size: integer;
}
export interface DatafeedStats {
    assignment_explanation: string;
    datafeed_id: string;
    node: DiscoveryNode;
    state: DatafeedState;
    timing_stats: DatafeedTimingStats;
}
export interface DatafeedTimingStats {
    bucket_count: long;
    exponential_average_search_time_per_hour_ms: double;
    job_id: string;
    search_count: long;
    total_search_time_ms: double;
}
export interface DiscoveryNode {
    attributes: Record<string, string>;
    ephemeral_id: string;
    id: string;
    name: string;
    transport_address: string;
}
export interface DeleteCalendarRequest {
}
export interface DeleteCalendarResponse {
}
export interface DeleteCalendarEventRequest {
}
export interface DeleteCalendarEventResponse {
}
export interface DeleteCalendarJobRequest {
}
export interface DeleteCalendarJobResponse {
    calendar_id: string;
    description: string;
    job_ids: Id[];
}
export interface DeleteDatafeedRequest {
    force: boolean;
}
export interface DeleteDatafeedResponse {
}
export interface DeleteExpiredDataRequest {
}
export interface DeleteExpiredDataResponse {
    deleted: boolean;
}
export interface DeleteFilterRequest {
}
export interface DeleteFilterResponse {
}
export interface DeleteForecastRequest {
    allow_no_forecasts: boolean;
    timeout: Time;
}
export interface DeleteForecastResponse {
}
export interface DeleteJobRequest {
    force: boolean;
    wait_for_completion: boolean;
}
export interface DeleteJobResponse {
}
export interface DeleteModelSnapshotRequest {
}
export interface DeleteModelSnapshotResponse {
}
export interface FlushJobRequest {
    skip_time: string;
    advance_time: Date;
    calc_interim: boolean;
    end: Date;
    start: Date;
}
export interface FlushJobResponse {
    flushed: boolean;
}
export interface ForecastJobRequest {
    duration: Time;
    expires_in: Time;
}
export interface ForecastJobResponse {
    forecast_id: string;
}
export interface GetAnomalyRecordsRequest {
    desc: boolean;
    end: Date;
    exclude_interim: boolean;
    page: Page;
    record_score: double;
    sort: Field;
    start: Date;
}
export interface GetAnomalyRecordsResponse {
    count: long;
    records: AnomalyRecord[];
}
export interface GetBucketsRequest {
    anomaly_score: double;
    desc: boolean;
    end: Date;
    exclude_interim: boolean;
    expand: boolean;
    page: Page;
    sort: Field;
    start: Date;
}
export interface GetBucketsResponse {
    buckets: Bucket[];
    count: long;
}
export interface GetCalendarEventsRequest {
    end: Date;
    job_id: string;
    start: string;
    from: integer;
    size: integer;
}
export interface GetCalendarEventsResponse {
    count: integer;
    events: ScheduledEvent[];
}
export interface Calendar {
    calendar_id: string;
    job_ids: string[];
    description: string;
}
export interface GetCalendarsRequest {
    page: Page;
}
export interface GetCalendarsResponse {
    count: long;
    calendars: Calendar[];
}
export interface GetCategoriesRequest {
    page: Page;
}
export interface GetCategoriesResponse {
    categories: CategoryDefinition[];
    count: long;
}
export interface GetDatafeedStatsRequest {
    allow_no_datafeeds: boolean;
}
export interface GetDatafeedStatsResponse {
    count: long;
    datafeeds: DatafeedStats[];
}
export interface GetDatafeedsRequest {
    allow_no_datafeeds: boolean;
}
export interface GetDatafeedsResponse {
    count: long;
    datafeeds: DatafeedConfig[];
}
export interface Filter {
    description: string;
    filter_id: string;
    items: string[];
}
export interface GetFiltersRequest {
    from: integer;
    size: integer;
}
export interface GetFiltersResponse {
    count: long;
    filters: Filter[];
}
export interface GetInfluencersRequest {
    descending: boolean;
    end: Date;
    exclude_interim: boolean;
    influencer_score: double;
    page: Page;
    sort: Field;
    start: Date;
}
export interface GetInfluencersResponse {
    count: long;
    influencers: BucketInfluencer[];
}
export interface GetJobStatsRequest {
    allow_no_jobs: boolean;
}
export interface GetJobStatsResponse {
    count: long;
    jobs: JobStats[];
}
export interface GetJobsRequest {
    allow_no_jobs: boolean;
}
export interface GetJobsResponse {
    count: long;
    jobs: Job[];
}
export interface GetModelSnapshotsRequest {
    desc: boolean;
    end: Date;
    page: Page;
    sort: Field;
    start: Date;
}
export interface GetModelSnapshotsResponse {
    count: long;
    model_snapshots: ModelSnapshot[];
}
export interface GetOverallBucketsRequest {
    allow_no_jobs: boolean;
    bucket_span: Time;
    end: Date;
    exclude_interim: boolean;
    overall_score: double;
    start: Date;
    top_n: integer;
}
export interface GetOverallBucketsResponse {
    count: long;
    overall_buckets: OverallBucket[];
}
export interface Page {
    from: integer;
    size: integer;
}
export interface AnalysisConfig {
    bucket_span: Time;
    categorization_field_name: Field;
    categorization_filters: string[];
    detectors: Detector[];
    influencers: Field[];
    latency: Time;
    multivariate_by_fields: boolean;
    summary_count_field_name: Field;
}
export interface AnalysisLimits {
    categorization_examples_limit: long;
    model_memory_limit: string;
}
export interface AnalysisMemoryLimit {
    model_memory_limit: string;
}
export interface DataDescription {
    format: string;
    time_field: Field;
    time_format: string;
}
export interface JobForecastStatistics {
    memory_bytes: JobStatistics;
    processing_time_ms: JobStatistics;
    records: JobStatistics;
    status: Record<string, long>;
    total: long;
}
export interface JobStats {
    assignment_explanation: string;
    data_counts: DataCounts;
    forecasts_stats: JobForecastStatistics;
    job_id: string;
    model_size_stats: ModelSizeStats;
    node: DiscoveryNode;
    open_time: Time;
    state: JobState;
    timing_stats: TimingStats;
}
export interface ModelPlotConfig {
    terms: Field[];
}
export interface ModelPlotConfigEnabled {
    enabled: boolean;
}
export interface TimingStats {
    job_id: string;
    bucket_count: long;
    minimum_bucket_processing_time_ms: double;
    maximum_bucket_processing_time_ms: double;
    average_bucket_processing_time_ms: double;
    exponential_average_bucket_processing_time_ms: double;
    exponential_average_bucket_processing_time_per_hour_ms: double;
}
export interface DetectionRule {
    actions: RuleAction[];
    conditions: RuleCondition[];
    scope: Record<Field, FilterRef>;
}
export interface Detector {
    custom_rules: DetectionRule[];
    detector_description: string;
    detector_index: integer;
    exclude_frequent: ExcludeFrequent;
    function: string;
    use_null: boolean;
}
export interface FilterRef {
    filter_id: Id;
    filter_type: RuleFilterType;
}
export interface RuleCondition {
    applies_to: AppliesTo;
    operator: ConditionOperator;
    value: double;
}
export interface DataCounts {
    bucket_count: long;
    earliest_record_timestamp: Date;
    empty_bucket_count: long;
    input_bytes: long;
    input_field_count: long;
    input_record_count: long;
    invalid_date_count: long;
    job_id: string;
    last_data_time: Date;
    latest_empty_bucket_timestamp: Date;
    latest_record_timestamp: Date;
    latest_sparse_bucket_timestamp: Date;
    missing_field_count: long;
    out_of_order_timestamp_count: long;
    processed_field_count: long;
    processed_record_count: long;
    sparse_bucket_count: long;
}
export interface ModelSizeStats {
    bucket_allocation_failures_count: long;
    job_id: string;
    log_time: Date;
    memory_status: MemoryStatus;
    model_bytes: long;
    result_type: string;
    timestamp: Date;
    total_by_field_count: long;
    total_over_field_count: long;
    total_partition_field_count: long;
}
export interface ModelSnapshot {
    description: string;
    job_id: string;
    latest_record_time_stamp: Date;
    latest_result_time_stamp: Date;
    model_size_stats: ModelSizeStats;
    retain: boolean;
    snapshot_doc_count: long;
    snapshot_id: string;
    timestamp: Date;
}
export interface AnomalyCause {
    actual: double[];
    by_field_name: string;
    by_field_value: string;
    correlated_by_field_value: string;
    field_name: string;
    function: string;
    function_description: string;
    influencers: Influence[];
    over_field_name: string;
    over_field_value: string;
    partition_field_name: string;
    partition_field_value: string;
    probability: double;
    typical: double[];
}
export interface AnomalyRecord {
    actual: double[];
    bucket_span: Time;
    by_field_name: string;
    by_field_value: string;
    causes: AnomalyCause[];
    detector_index: integer;
    field_name: string;
    function: string;
    function_description: string;
    influencers: Influence[];
    initial_record_score: double;
    is_interim: boolean;
    job_id: string;
    over_field_name: string;
    over_field_value: string;
    partition_field_name: string;
    partition_field_value: string;
    probability: double;
    record_score: double;
    result_type: string;
    timestamp: Date;
    typical: double[];
}
export interface Bucket {
    anomaly_score: double;
    bucket_influencers: BucketInfluencer[];
    bucket_span: Time;
    event_count: long;
    initial_anomaly_score: double;
    is_interim: boolean;
    job_id: string;
    partition_scores: PartitionScore[];
    processing_time_ms: double;
    result_type: string;
    timestamp: Date;
}
export interface BucketInfluencer {
    bucket_span: long;
    influencer_field_name: string;
    influencer_field_value: string;
    influencer_score: double;
    initial_influencer_score: double;
    is_interim: boolean;
    job_id: string;
    probability: double;
    result_type: string;
    timestamp: Date;
}
export interface CategoryDefinition {
    category_id: long;
    examples: string[];
    job_id: string;
    max_matching_length: long;
    regex: string;
    terms: string;
}
export interface Influence {
    influencer_field_name: string;
    influencer_field_values: string[];
}
export interface OverallBucket {
    bucket_span: long;
    is_interim: boolean;
    jobs: OverallBucketJobInfo[];
    overall_score: double;
    result_type: string;
    timestamp: Date;
}
export interface OverallBucketJobInfo {
    job_id: string;
    max_anomaly_score: double;
}
export interface PartitionScore {
    initial_record_score: double;
    partition_field_name: string;
    partition_field_value: string;
    probability: double;
    record_score: double;
}
export interface AnomalyDetectors {
    model_memory_limit: string;
    categorization_examples_limit: integer;
    model_snapshot_retention_days: integer;
}
export interface Datafeeds {
    scroll_size: integer;
}
export interface Defaults {
    anomaly_detectors: AnomalyDetectors;
    datafeeds: Datafeeds;
}
export interface Limits {
    max_model_memory_limit: string;
}
export interface MachineLearningInfoRequest {
}
export interface MachineLearningInfoResponse {
    defaults: Defaults;
    limits: Limits;
    upgrade_mode: boolean;
}
export interface OpenJobRequest {
    timeout: Time;
}
export interface OpenJobResponse {
    opened: boolean;
}
export interface PostCalendarEventsRequest {
    events: ScheduledEvent[];
}
export interface PostCalendarEventsResponse {
    events: ScheduledEvent[];
}
export interface ScheduledEvent {
    calendar_id: Id;
    description: string;
    start_time: Date;
    end_time: Date;
    event_id: Id;
}
export interface PostJobDataRequest {
    reset_end: Date;
    reset_start: Date;
    data: object[];
}
export interface PostJobDataResponse {
    bucket_count: long;
    earliest_record_timestamp: Date;
    empty_bucket_count: long;
    input_bytes: long;
    input_field_count: long;
    input_record_count: long;
    invalid_date_count: long;
    job_id: string;
    last_data_time: Date;
    latest_record_timestamp: Date;
    missing_field_count: long;
    out_of_order_timestamp_count: long;
    processed_field_count: long;
    processed_record_count: long;
    sparse_bucket_count: long;
}
export interface PreviewDatafeedRequest {
}
export interface PreviewDatafeedResponse<TDocument> {
    data: TDocument[];
}
export interface PutCalendarRequest {
    description: string;
}
export interface PutCalendarResponse {
    calendar_id: string;
    description: string;
    job_ids: string[];
}
export interface PutCalendarJobRequest {
}
export interface PutCalendarJobResponse {
    calendar_id: string;
    description: string;
    job_ids: string[];
}
export interface PutDatafeedRequest {
    aggregations: Record<string, AggregationContainer>;
    chunking_config: ChunkingConfig;
    frequency: Time;
    indices: Indices;
    job_id: Id;
    query: QueryContainer;
    query_delay: Time;
    script_fields: Record<string, ScriptField>;
    scroll_size: integer;
}
export interface PutDatafeedResponse {
    aggregations: Record<string, AggregationContainer>;
    chunking_config: ChunkingConfig;
    datafeed_id: string;
    frequency: Time;
    indices: Indices;
    job_id: string;
    query: QueryContainer;
    query_delay: Time;
    script_fields: Record<string, ScriptField>;
    scroll_size: integer;
}
export interface PutFilterRequest {
    description: string;
    items: string[];
}
export interface PutFilterResponse {
    description: string;
    filter_id: string;
    items: string[];
}
export interface PutJobRequest {
    analysis_config: AnalysisConfig;
    analysis_limits: AnalysisLimits;
    data_description: DataDescription;
    description: string;
    model_plot: ModelPlotConfig;
    model_snapshot_retention_days: long;
    results_index_name: IndexName;
}
export interface PutJobResponse {
    analysis_config: AnalysisConfig;
    analysis_limits: AnalysisLimits;
    background_persist_interval: Time;
    create_time: Date;
    data_description: DataDescription;
    description: string;
    job_id: string;
    job_type: string;
    model_plot: ModelPlotConfig;
    model_snapshot_id: string;
    model_snapshot_retention_days: long;
    renormalization_window_days: long;
    results_index_name: string;
    results_retention_days: long;
}
export interface RevertModelSnapshotRequest {
    delete_intervening_results: boolean;
}
export interface RevertModelSnapshotResponse {
    model: ModelSnapshot;
}
export interface StartDatafeedRequest {
    end: Date;
    start: Date;
    timeout: Time;
}
export interface StartDatafeedResponse {
    started: boolean;
}
export interface StopDatafeedRequest {
    allow_no_datafeeds: boolean;
    force: boolean;
    timeout: Time;
}
export interface StopDatafeedResponse {
    stopped: boolean;
}
export interface UpdateDatafeedRequest {
    aggregations: Record<string, AggregationContainer>;
    chunking_config: ChunkingConfig;
    frequency: Time;
    indices: Indices;
    job_id: Id;
    query: QueryContainer;
    query_delay: Time;
    script_fields: Record<string, ScriptField>;
    scroll_size: integer;
}
export interface UpdateDatafeedResponse {
    aggregations: Record<string, AggregationContainer>;
    chunking_config: ChunkingConfig;
    datafeed_id: string;
    frequency: Time;
    indices: Indices;
    job_id: string;
    query: QueryContainer;
    query_delay: Time;
    script_fields: Record<string, ScriptField>;
    scroll_size: integer;
}
export interface UpdateFilterRequest {
    add_items: string[];
    description: string;
    remove_items: string[];
}
export interface UpdateFilterResponse {
    description: string;
    filter_id: string;
    items: string[];
}
export interface UpdateJobRequest {
    analysis_limits: AnalysisMemoryLimit;
    background_persist_interval: Time;
    custom_settings: Record<string, object>;
    description: string;
    model_plot_config: ModelPlotConfigEnabled;
    model_snapshot_retention_days: long;
    renormalization_window_days: long;
    results_retention_days: long;
}
export interface UpdateJobResponse {
}
export interface UpdateModelSnapshotRequest {
    description: string;
    retain: boolean;
}
export interface UpdateModelSnapshotResponse {
    model: ModelSnapshot;
}
export interface ValidateDetectorRequest {
    detector: Detector;
}
export interface ValidateDetectorResponse {
}
export interface ValidateJobRequest {
    analysis_config: AnalysisConfig;
    analysis_limits: AnalysisLimits;
    data_description: DataDescription;
    description: string;
    model_plot: ModelPlotConfig;
    model_snapshot_retention_days: long;
    results_index_name: IndexName;
}
export interface ValidateJobResponse {
}
export interface DeprecationInfo {
    details: string;
    level: DeprecationWarningLevel;
    message: string;
    url: string;
}
export interface DeprecationInfoRequest {
}
export interface DeprecationInfoResponse {
    cluster_settings: DeprecationInfo[];
    index_settings: Record<string, DeprecationInfo[]>;
    node_settings: DeprecationInfo[];
}
export interface CreateRollupJobRequest {
    cron: string;
    groups: RollupGroupings;
    index_pattern: string;
    metrics: RollupFieldMetric[];
    page_size: long;
    rollup_index: IndexName;
}
export interface CreateRollupJobResponse {
}
export interface DeleteRollupJobRequest {
}
export interface DeleteRollupJobResponse {
}
export interface GetRollupCapabilitiesRequest {
}
export interface GetRollupCapabilitiesResponse extends ResponseBase, Record<IndexName, any> {
    indices: Record<IndexName, RollupCapabilities>;
}
export interface RollupCapabilities {
    rollup_jobs: RollupCapabilitiesJob[];
}
export interface RollupCapabilitiesJob {
    fields: Record<Field, Record<string, object>>;
    index_pattern: string;
    job_id: string;
    rollup_index: string;
}
export interface GetRollupIndexCapabilitiesRequest {
}
export interface GetRollupIndexCapabilitiesResponse extends ResponseBase, Record<IndexName, any> {
    indices: Record<IndexName, RollupIndexCapabilities>;
}
export interface RollupIndexCapabilities {
    rollup_jobs: RollupIndexCapabilitiesJob[];
}
export interface RollupIndexCapabilitiesJob {
    fields: Record<Field, Record<string, string>>;
    index_pattern: string;
    job_id: string;
    rollup_index: string;
}
export interface GetRollupJobRequest {
}
export interface GetRollupJobResponse {
    jobs: RollupJobInformation[];
}
export interface RollupJobConfiguration {
    cron: string;
    groups: RollupGroupings;
    id: string;
    index_pattern: string;
    metrics: RollupFieldMetric[];
    page_size: long;
    rollup_index: IndexName;
    timeout: Time;
}
export interface RollupJobInformation {
    config: RollupJobConfiguration;
    stats: RollupJobStats;
    status: RollupJobStatus;
}
export interface RollupJobStats {
    documents_processed: long;
    pages_processed: long;
    rollups_indexed: long;
    trigger_count: long;
    search_failures: long;
    index_failures: long;
    index_time_in_ms: long;
    index_total: long;
    search_time_in_ms: long;
    search_total: long;
}
export interface RollupJobStatus {
    current_position: Record<string, object>;
    job_state: IndexingJobState;
    upgraded_doc_id: boolean;
}
export interface DateHistogramRollupGrouping {
    delay: Time;
    field: Field;
    format: string;
    interval: Time;
    time_zone: string;
}
export interface HistogramRollupGrouping {
    fields: Field[];
    interval: long;
}
export interface RollupFieldMetric {
    field: Field;
    metrics: RollupMetric[];
}
export interface RollupGroupings {
    date_histogram: DateHistogramRollupGrouping;
    histogram: HistogramRollupGrouping;
    terms: TermsRollupGrouping;
}
export interface TermsRollupGrouping {
    fields: Field[];
}
export interface RollupSearchRequest {
    total_hits_as_integer: boolean;
    typed_keys: boolean;
    aggs: Record<string, AggregationContainer>;
    query: QueryContainer;
    size: integer;
}
export interface RollupSearchResponse<TDocument> {
}
export interface StartRollupJobRequest {
}
export interface StartRollupJobResponse {
    started: boolean;
}
export interface StopRollupJobRequest {
    timeout: Time;
    wait_for_completion: boolean;
}
export interface StopRollupJobResponse {
    stopped: boolean;
}
export interface SecurityNode {
    name: string;
}
export interface ApiKeyPrivileges {
    names: string[];
    privileges: string[];
}
export interface ApiKeyRole {
    cluster: string[];
    index: ApiKeyPrivileges[];
}
export interface CreateApiKeyRequest {
    refresh: Refresh;
    expiration: Time;
    name: string;
    role_descriptors: Record<string, ApiKeyRole>;
}
export interface CreateApiKeyResponse {
    id: string;
    name: string;
    expiration: Date;
    api_key: string;
}
export interface ApiKeys {
    creation: Date;
    expiration: Date;
    id: string;
    invalidated: boolean;
    name: string;
    realm: string;
    username: string;
}
export interface GetApiKeyRequest {
    id: string;
    name: string;
    realm_name: string;
    username: string;
}
export interface GetApiKeyResponse {
    api_keys: ApiKeys[];
}
export interface InvalidateApiKeyRequest {
    id: string;
    name: string;
    realm_name: string;
    username: string;
}
export interface InvalidateApiKeyResponse {
    error_count: integer;
    error_details: ErrorCause[];
    invalidated_api_keys: string[];
    previously_invalidated_api_keys: string[];
}
export interface AuthenticateRequest {
}
export interface AuthenticateResponse {
    email: string;
    full_name: string;
    metadata: Record<string, object>;
    roles: string[];
    username: string;
    authentication_realm: RealmInfo;
    lookup_realm: RealmInfo;
}
export interface RealmInfo {
    name: string;
    type: string;
}
export interface ClearCachedRealmsRequest {
    usernames: string[];
}
export interface ClearCachedRealmsResponse {
    cluster_name: string;
    nodes: Record<string, SecurityNode>;
}
export interface DeletePrivilegesRequest {
    refresh: Refresh;
}
export interface DeletePrivilegesResponse extends ResponseBase, Record<string, any> {
    applications: Record<string, Record<string, FoundUserPrivilege>>;
}
export interface FoundUserPrivilege {
    found: boolean;
}
export interface GetPrivilegesRequest {
}
export interface GetPrivilegesResponse extends ResponseBase, Record<string, any> {
    applications: Record<string, Record<string, PrivilegesActions>>;
}
export interface ApplicationGlobalUserPrivileges {
    manage: ManageUserPrivileges;
}
export interface ApplicationResourcePrivileges {
    application: string;
    privileges: string[];
    resources: string[];
}
export interface FieldSecuritySettings {
    except: string[];
    grant: string[];
}
export interface GetUserPrivilegesRequest {
}
export interface GetUserPrivilegesResponse {
    applications: ApplicationResourcePrivileges[];
    cluster: string[];
    global: GlobalPrivileges[];
    indices: UserIndicesPrivileges[];
    run_as: string[];
}
export interface GlobalPrivileges {
    application: ApplicationGlobalUserPrivileges;
}
export interface ManageUserPrivileges {
    applications: string[];
}
export interface QueryUserPrivileges {
    term: TermUserPrivileges;
}
export interface TermUserPrivileges {
    apps: boolean;
}
export interface UserIndicesPrivileges {
    field_security: FieldSecuritySettings;
    names: string[];
    privileges: string[];
    query: QueryUserPrivileges;
}
export interface ApplicationPrivilegesCheck {
    application: string;
    privileges: string[];
    resources: string[];
}
export interface HasPrivilegesRequest {
    application: ApplicationPrivilegesCheck[];
    cluster: string[];
    index: IndexPrivilegesCheck[];
}
export interface HasPrivilegesResponse {
    application: Record<string, ResourcePrivileges[]>;
    cluster: Record<string, boolean>;
    has_all_requested: boolean;
    index: ResourcePrivileges[];
    username: string;
}
export interface IndexPrivilegesCheck {
    names: string[];
    privileges: string[];
}
export interface ResourcePrivileges {
    privileges: Record<string, boolean>;
    resource: string;
}
export interface PrivilegesActions {
    actions: string[];
    metadata: Record<string, object>;
}
export interface PutPrivilegesRequest {
    refresh: Refresh;
    applications: Record<string, Record<string, PrivilegesActions>>;
}
export interface PutPrivilegesResponse extends ResponseBase, Record<string, any> {
    applications: Record<string, Record<string, PutPrivilegesStatus>>;
}
export interface PutPrivilegesStatus {
    created: boolean;
}
export interface FieldSecurity {
    except: Field[];
    grant: Field[];
}
export interface ClearCachedRolesRequest {
}
export interface ClearCachedRolesResponse {
    cluster_name: string;
    nodes: Record<string, SecurityNode>;
}
export interface DeleteRoleRequest {
    refresh: Refresh;
}
export interface DeleteRoleResponse {
    found: boolean;
}
export interface GetRoleRequest {
}
export interface GetRoleResponse extends ResponseBase, Record<string, any> {
    roles: Record<string, XPackRole>;
}
export interface XPackRole {
    cluster: string[];
    indices: IndicesPrivileges[];
    metadata: Record<string, object>;
    run_as: string[];
}
export interface ApplicationPrivileges {
    application: string;
    privileges: string[];
    resources: string[];
}
export interface IndicesPrivileges {
    field_security: FieldSecurity;
    names: Indices;
    privileges: string[];
    query: QueryContainer;
}
export interface PutRoleRequest {
    refresh: Refresh;
    applications: ApplicationPrivileges[];
    cluster: string[];
    global: Record<string, object>;
    indices: IndicesPrivileges[];
    metadata: Record<string, object>;
    run_as: string[];
}
export interface PutRoleResponse {
    role: PutRoleStatus;
}
export interface PutRoleStatus {
    created: boolean;
}
export interface DeleteRoleMappingRequest {
    refresh: Refresh;
}
export interface DeleteRoleMappingResponse {
    found: boolean;
}
export interface GetRoleMappingRequest {
}
export interface GetRoleMappingResponse extends ResponseBase, Record<string, any> {
    role_mappings: Record<string, XPackRoleMapping>;
}
export interface XPackRoleMapping {
    enabled: boolean;
    metadata: Record<string, object>;
    roles: string[];
    rules: RoleMappingRuleBase;
}
export interface PutRoleMappingRequest {
    refresh: Refresh;
    enabled: boolean;
    metadata: Record<string, object>;
    roles: string[];
    rules: RoleMappingRuleBase;
    run_as: string[];
}
export interface PutRoleMappingResponse {
    created: boolean;
    role_mapping: PutRoleMappingStatus;
}
export interface PutRoleMappingStatus {
    created: boolean;
}
export interface RoleMappingRuleBase {
}
export interface ChangePasswordRequest {
    refresh: Refresh;
    password: string;
}
export interface ChangePasswordResponse {
}
export interface DeleteUserRequest {
    refresh: Refresh;
}
export interface DeleteUserResponse {
    found: boolean;
}
export interface DisableUserRequest {
    refresh: Refresh;
}
export interface DisableUserResponse {
}
export interface EnableUserRequest {
    refresh: Refresh;
}
export interface EnableUserResponse {
}
export interface GetUserRequest {
}
export interface GetUserResponse extends ResponseBase, Record<string, any> {
    users: Record<string, XPackUser>;
}
export interface XPackUser {
    email: string;
    full_name: string;
    metadata: Record<string, object>;
    roles: string[];
    username: string;
}
export interface GetUserAccessTokenRequest {
    grant_type: AccessTokenGrantType;
    scope: string;
}
export interface GetUserAccessTokenResponse {
    access_token: string;
    expires_in: long;
    scope: string;
    type: string;
}
export interface InvalidateUserAccessTokenRequest {
}
export interface InvalidateUserAccessTokenResponse {
    invalidated_tokens: long;
    previously_invalidated_tokens: long;
    error_count: long;
    error_details: ErrorCause[];
}
export interface PutUserRequest {
    refresh: Refresh;
    email: string;
    full_name: string;
    metadata: Record<string, object>;
    password: string;
    password_hash: string;
    roles: string[];
}
export interface PutUserResponse {
    created: boolean;
}
export interface SnapshotLifecycleConfig {
    ignore_unavailable: boolean;
    include_global_state: boolean;
    indices: Indices;
}
export interface SnapshotLifecycleInProgress {
    name: string;
    uuid: string;
    state: string;
    start_time_millis: Date;
}
export interface SnapshotLifecycleInvocationRecord {
    snapshot_name: string;
    time: Date;
}
export interface SnapshotLifecyclePolicy {
    config: SnapshotLifecycleConfig;
    name: string;
    repository: string;
    schedule: CronExpression;
}
export interface SnapshotLifecyclePolicyMetadata {
    modified_date_millis: Date;
    next_execution_millis: Date;
    policy: SnapshotLifecyclePolicy;
    version: integer;
    in_progress: SnapshotLifecycleInProgress;
    last_success: SnapshotLifecycleInvocationRecord;
    last_failure: SnapshotLifecycleInvocationRecord;
}
export interface DeleteSnapshotLifecycleRequest {
}
export interface DeleteSnapshotLifecycleResponse {
}
export interface ExecuteSnapshotLifecycleRequest {
}
export interface ExecuteSnapshotLifecycleResponse {
    snapshot_name: string;
}
export interface GetSnapshotLifecycleRequest {
}
export interface GetSnapshotLifecycleResponse extends ResponseBase, Record<string, any> {
    policies: Record<string, SnapshotLifecyclePolicyMetadata>;
}
export interface PutSnapshotLifecycleRequest {
    config: SnapshotLifecycleConfig;
    name: string;
    repository: string;
    schedule: CronExpression;
}
export interface PutSnapshotLifecycleResponse {
}
export interface SqlRequest {
    fetch_size: integer;
    filter: QueryContainer;
    query: string;
    time_zone: string;
}
export interface ClearSqlCursorRequest {
    cursor: string;
}
export interface ClearSqlCursorResponse {
    succeeded: boolean;
}
export interface QuerySqlRequest {
    format: string;
    cursor: string;
    columnar: boolean;
    fetch_size: integer;
    filter: QueryContainer;
    query: string;
    time_zone: string;
}
export interface QuerySqlResponse {
    columns: SqlColumn[];
    cursor: string;
    rows: SqlValue[][];
    values: SqlValue[][];
}
export interface SqlColumn {
    name: string;
    type: string;
}
export interface SqlValue {
}
export interface TranslateSqlRequest {
    fetch_size: integer;
    filter: QueryContainer;
    query: string;
    time_zone: string;
}
export interface TranslateSqlResponse {
    result: SearchRequest;
}
export interface ClusterCertificateInformation {
    path: string;
    alias: string;
    format: string;
    subject_dn: string;
    serial_number: string;
    has_private_key: boolean;
    expiry: Date;
}
export interface GetCertificatesRequest {
}
export interface GetCertificatesResponse {
    certificates: ClusterCertificateInformation[];
}
export interface Watch {
    actions: Record<string, Action>;
    condition: ConditionContainer;
    input: InputContainer;
    metadata: Record<string, object>;
    status: WatchStatus;
    throttle_period: string;
    transform: TransformContainer;
    trigger: TriggerContainer;
}
export interface AcknowledgeState {
    state: AcknowledgementState;
    timestamp: Date;
}
export interface AcknowledgeWatchRequest {
}
export interface AcknowledgeWatchResponse {
    status: WatchStatus;
}
export interface ActionStatus {
    ack: AcknowledgeState;
    last_execution: ExecutionState;
    last_successful_execution: ExecutionState;
    last_throttle: ThrottleState;
}
export interface ActivationState {
    active: boolean;
    timestamp: Date;
}
export interface ExecutionState {
    successful: boolean;
    timestamp: Date;
}
export interface ThrottleState {
    reason: string;
    timestamp: Date;
}
export interface WatchStatus {
    actions: Record<string, ActionStatus>;
    last_checked: Date;
    last_met_condition: Date;
    state: ActivationState;
    version: integer;
}
export interface Action {
    action_type: ActionType;
    name: string;
    throttle_period: Time;
    foreach: string;
    max_iterations: integer;
    transform: TransformContainer;
    condition: ConditionContainer;
}
export interface EmailBody {
    html: string;
    text: string;
}
export interface PagerDutyContext {
    href: string;
    src: string;
    type: PagerDutyContextType;
}
export interface PagerDutyEvent {
    account: string;
    attach_payload: boolean;
    client: string;
    client_url: string;
    context: PagerDutyContext[];
    description: string;
    event_type: PagerDutyEventType;
    incident_key: string;
}
export interface SlackAttachment {
    author_icon: string;
    author_link: string;
    author_name: string;
    color: string;
    fallback: string;
    fields: SlackAttachmentField[];
    footer: string;
    footer_icon: string;
    image_url: string;
    pretext: string;
    text: string;
    thumb_url: string;
    title: string;
    title_link: string;
    ts: Date;
}
export interface SlackAttachmentField {
    short: boolean;
    title: string;
    value: string;
}
export interface SlackDynamicAttachment {
    attachment_template: SlackAttachment;
    list_path: string;
}
export interface SlackMessage {
    attachments: SlackAttachment[];
    dynamic_attachments: SlackDynamicAttachment;
    from: string;
    icon: string;
    text: string;
    to: string[];
}
export interface ActivateWatchRequest {
}
export interface ActivateWatchResponse {
    status: ActivationStatus;
}
export interface ActivationStatus {
    actions: Record<string, ActionStatus>;
    state: ActivationState;
}
export interface AlwaysCondition {
}
export interface ArrayCompareCondition {
    array_path: string;
    comparison: string;
    path: string;
    quantifier: Quantifier;
    value: object;
}
export interface CompareCondition {
    comparison: string;
    path: string;
    value: object;
}
export interface Condition {
}
export interface ConditionContainer {
    always: AlwaysCondition;
    array_compare: ArrayCompareCondition;
    compare: CompareCondition;
    never: NeverCondition;
    script: ScriptCondition;
}
export interface NeverCondition {
}
export interface ScriptCondition {
    lang: string;
    params: Record<string, object>;
}
export interface DeactivateWatchRequest {
}
export interface DeactivateWatchResponse {
    status: ActivationStatus;
}
export interface DeleteWatchRequest {
}
export interface DeleteWatchResponse {
    found: boolean;
    _id: string;
    _version: integer;
}
export interface ExecuteWatchRequest {
    debug: boolean;
    action_modes: Record<string, ActionExecutionMode>;
    alternative_input: Record<string, object>;
    ignore_condition: boolean;
    record_execution: boolean;
    simulated_actions: SimulatedActions;
    trigger_data: ScheduleTriggerEvent;
    watch: Watch;
}
export interface ExecuteWatchResponse {
    _id: string;
    watch_record: WatchRecord;
}
export interface ExecutionResult {
    actions: ExecutionResultAction[];
    condition: ExecutionResultCondition;
    execution_duration: integer;
    execution_time: Date;
    input: ExecutionResultInput;
}
export interface ExecutionResultAction {
    email: EmailActionResult;
    id: string;
    index: IndexActionResult;
    logging: LoggingActionResult;
    pagerduty: PagerDutyActionResult;
    reason: string;
    slack: SlackActionResult;
    status: Status;
    type: ActionType;
    webhook: WebhookActionResult;
}
export interface ExecutionResultCondition {
    met: boolean;
    status: Status;
    type: ConditionType;
}
export interface ExecutionResultInput {
    payload: Record<string, object>;
    status: Status;
    type: InputType;
}
export interface TriggerEventResult {
    manual: TriggerEventContainer;
    triggered_time: Date;
    type: string;
}
export interface WatchRecord {
    condition: ConditionContainer;
    input: InputContainer;
    messages: string[];
    metadata: Record<string, object>;
    result: ExecutionResult;
    state: ActionExecutionState;
    trigger_event: TriggerEventResult;
    user: string;
    node: string;
    watch_id: string;
}
export interface HttpInputRequestResult {
}
export interface HttpInputResponseResult {
    body: string;
    headers: Record<string, string[]>;
    status: integer;
}
export interface SimulatedActions {
    actions: string[];
    all: SimulatedActions;
    use_all: boolean;
}
export interface EmailActionResult {
    account: string;
    message: EmailResult;
    reason: string;
}
export interface EmailResult {
    bcc: string[];
    body: EmailBody;
    cc: string[];
    from: string;
    id: string;
    priority: EmailPriority;
    reply_to: string[];
    sent_date: Date;
    subject: string;
    to: string[];
}
export interface IndexActionResult {
    id: string;
    response: IndexActionResultIndexResponse;
}
export interface IndexActionResultIndexResponse {
    created: boolean;
    id: string;
    index: IndexName;
    result: Result;
    version: integer;
}
export interface LoggingActionResult {
    logged_text: string;
}
export interface PagerDutyActionEventResult {
    event: PagerDutyEvent;
    reason: string;
    request: HttpInputRequestResult;
    response: HttpInputResponseResult;
}
export interface PagerDutyActionResult {
    sent_event: PagerDutyActionEventResult;
}
export interface SlackActionMessageResult {
    message: SlackMessage;
    reason: string;
    request: HttpInputRequestResult;
    response: HttpInputResponseResult;
    status: Status;
    to: string;
}
export interface SlackActionResult {
    account: string;
    sent_messages: SlackActionMessageResult[];
}
export interface WebhookActionResult {
    request: HttpInputRequestResult;
    response: HttpInputResponseResult;
}
export interface GetWatchRequest {
}
export interface GetWatchResponse {
    found: boolean;
    _id: string;
    status: WatchStatus;
    watch: Watch;
}
export interface ChainInput {
    inputs: Record<string, InputContainer>;
}
export interface HttpInput {
    extract: string[];
    request: HttpInputRequest;
    response_content_type: ResponseContentType;
}
export interface HttpInputAuthentication {
    basic: HttpInputBasicAuthentication;
}
export interface HttpInputBasicAuthentication {
    password: string;
    username: string;
}
export interface HttpInputProxy {
    host: string;
    port: integer;
}
export interface HttpInputRequest {
    auth: HttpInputAuthentication;
    body: string;
    connection_timeout: Time;
    headers: Record<string, string>;
    host: string;
    method: HttpInputMethod;
    params: Record<string, string>;
    path: string;
    port: integer;
    proxy: HttpInputProxy;
    read_timeout: Time;
    scheme: ConnectionScheme;
    url: string;
}
export interface IndicesOptions {
    allow_no_indices: boolean;
    expand_wildcards: ExpandWildcards;
    ignore_unavailable: boolean;
}
export interface Input {
}
export interface InputContainer {
    chain: ChainInput;
    http: HttpInput;
    search: SearchInput;
    simple: SimpleInput;
}
export interface SearchInput {
    extract: string[];
    request: SearchInputRequest;
    timeout: Time;
}
export interface SearchInputRequest {
    body: SearchRequest;
    indices: IndexName[];
    indices_options: IndicesOptions;
    search_type: SearchType;
    template: SearchTemplateRequest;
}
export interface SimpleInput {
    payload: Record<string, object>;
}
export interface PutWatchRequest {
    active: boolean;
    if_primary_term: long;
    if_sequence_number: long;
    version: long;
    actions: Record<string, Action>;
    condition: ConditionContainer;
    input: InputContainer;
    metadata: Record<string, object>;
    throttle_period: string;
    transform: TransformContainer;
    trigger: TriggerContainer;
}
export interface PutWatchResponse {
    created: boolean;
    _id: string;
    _version: integer;
    _seq_no: long;
    _primary_term: long;
}
export interface RestartWatcherResponse {
}
export interface CronExpression {
}
export interface DailySchedule {
    at: string[] | TimeOfDay;
}
export interface HourlySchedule {
    minute: integer[];
}
export interface Interval {
    factor: long;
    unit: IntervalUnit;
}
export interface Schedule {
}
export interface ScheduleBase {
}
export interface ScheduleContainer {
    cron: CronExpression;
    daily: DailySchedule;
    hourly: HourlySchedule;
    interval: Interval;
    monthly: TimeOfMonth[];
    weekly: TimeOfWeek[];
    yearly: TimeOfYear[];
}
export interface ScheduleTriggerEvent {
    scheduled_time: Date | string;
    triggered_time: Date | string;
}
export interface TimeOfDay {
    hour: integer[];
    minute: integer[];
}
export interface TimeOfMonth {
    at: string[];
    on: integer[];
}
export interface TimeOfWeek {
    at: string[];
    on: Day[];
}
export interface TimeOfYear {
    at: string[];
    int: Month[];
    on: integer[];
}
export interface StartWatcherRequest {
}
export interface StartWatcherResponse {
}
export interface StopWatcherRequest {
}
export interface StopWatcherResponse {
}
export interface ChainTransform {
    transforms: TransformContainer[];
}
export interface ScriptTransform {
    lang: string;
    params: Record<string, object>;
}
export interface SearchTransform {
    request: SearchInputRequest;
    timeout: Time;
}
export interface Transform {
}
export interface TransformContainer {
    chain: ChainTransform;
    script: ScriptTransform;
    search: SearchTransform;
}
export interface TriggerContainer {
    schedule: ScheduleContainer;
}
export interface TriggerEvent {
}
export interface TriggerEventContainer {
    schedule: ScheduleTriggerEvent;
}
export interface ExecutionThreadPool {
    max_size: long;
    queue_size: long;
}
export interface WatchRecordQueuedStats {
    execution_time: Date;
    triggered_time: Date;
    watch_id: string;
    watch_record_id: string;
}
export interface WatchRecordStats {
    execution_phase: ExecutionPhase;
}
export interface WatcherNodeStats {
    current_watches: WatchRecordStats[];
    execution_thread_pool: ExecutionThreadPool;
    queued_watches: WatchRecordQueuedStats[];
    watch_count: long;
    watcher_state: WatcherState;
}
export interface WatcherStatsRequest {
    emit_stacktraces: boolean;
}
export interface WatcherStatsResponse {
    cluster_name: string;
    manually_stopped: boolean;
    stats: WatcherNodeStats[];
}
export declare enum MinimumInterval {
    second = "second",
    minute = "minute",
    hour = "hour",
    day = "day",
    month = "month",
    year = "year"
}
export declare enum DateInterval {
    second = "second",
    minute = "minute",
    hour = "hour",
    day = "day",
    week = "week",
    month = "month",
    quarter = "quarter",
    year = "year"
}
export declare enum GeoHashPrecision {
    Precision1 = "Precision1",
    Precision2 = "Precision2",
    Precision3 = "Precision3",
    Precision4 = "Precision4",
    Precision5 = "Precision5",
    Precision6 = "Precision6",
    Precision7 = "Precision7",
    Precision8 = "Precision8",
    Precision9 = "Precision9",
    Precision10 = "Precision10",
    Precision11 = "Precision11",
    Precision12 = "Precision12"
}
export declare enum GeoTilePrecision {
    Precision0 = "Precision0",
    Precision1 = "Precision1",
    Precision2 = "Precision2",
    Precision3 = "Precision3",
    Precision4 = "Precision4",
    Precision5 = "Precision5",
    Precision6 = "Precision6",
    Precision7 = "Precision7",
    Precision8 = "Precision8",
    Precision9 = "Precision9",
    Precision10 = "Precision10",
    Precision11 = "Precision11",
    Precision12 = "Precision12",
    Precision13 = "Precision13",
    Precision14 = "Precision14",
    Precision15 = "Precision15",
    Precision16 = "Precision16",
    Precision17 = "Precision17",
    Precision18 = "Precision18",
    Precision19 = "Precision19",
    Precision20 = "Precision20",
    Precision21 = "Precision21",
    Precision22 = "Precision22",
    Precision23 = "Precision23",
    Precision24 = "Precision24",
    Precision25 = "Precision25",
    Precision26 = "Precision26",
    Precision27 = "Precision27",
    Precision28 = "Precision28",
    Precision29 = "Precision29"
}
export declare enum SamplerAggregationExecutionHint {
    map = "map",
    global_ordinals = "global_ordinals",
    bytes_hash = "bytes_hash"
}
export declare enum TermsAggregationCollectMode {
    depth_first = "depth_first",
    breadth_first = "breadth_first"
}
export declare enum TermsAggregationExecutionHint {
    map = "map",
    global_ordinals = "global_ordinals",
    global_ordinals_hash = "global_ordinals_hash",
    global_ordinals_low_cardinality = "global_ordinals_low_cardinality"
}
export declare enum MatrixStatsMode {
    avg = "avg",
    min = "min",
    max = "max",
    sum = "sum",
    median = "median"
}
export declare enum ValueType {
    string = "string",
    long = "long",
    double = "double",
    number = "number",
    date = "date",
    date_nanos = "date_nanos",
    ip = "ip",
    numeric = "numeric",
    geo_point = "geo_point",
    boolean = "boolean"
}
export declare enum GapPolicy {
    skip = "skip",
    insert_zeros = "insert_zeros"
}
export declare enum HoltWintersType {
    add = "add",
    mult = "mult"
}
export declare enum AggregationVisitorScope {
    Unknown = "Unknown",
    Aggregation = "Aggregation",
    Bucket = "Bucket"
}
export declare enum Language {
    Arabic = "Arabic",
    Armenian = "Armenian",
    Basque = "Basque",
    Brazilian = "Brazilian",
    Bulgarian = "Bulgarian",
    Catalan = "Catalan",
    Chinese = "Chinese",
    Cjk = "Cjk",
    Czech = "Czech",
    Danish = "Danish",
    Dutch = "Dutch",
    English = "English",
    Finnish = "Finnish",
    French = "French",
    Galician = "Galician",
    German = "German",
    Greek = "Greek",
    Hindi = "Hindi",
    Hungarian = "Hungarian",
    Indonesian = "Indonesian",
    Irish = "Irish",
    Italian = "Italian",
    Latvian = "Latvian",
    Norwegian = "Norwegian",
    Persian = "Persian",
    Portuguese = "Portuguese",
    Romanian = "Romanian",
    Russian = "Russian",
    Sorani = "Sorani",
    Spanish = "Spanish",
    Swedish = "Swedish",
    Turkish = "Turkish",
    Thai = "Thai"
}
export declare enum SnowballLanguage {
    Armenian = "Armenian",
    Basque = "Basque",
    Catalan = "Catalan",
    Danish = "Danish",
    Dutch = "Dutch",
    English = "English",
    Finnish = "Finnish",
    French = "French",
    German = "German",
    German2 = "German2",
    Hungarian = "Hungarian",
    Italian = "Italian",
    Kp = "Kp",
    Lovins = "Lovins",
    Norwegian = "Norwegian",
    Porter = "Porter",
    Portuguese = "Portuguese",
    Romanian = "Romanian",
    Russian = "Russian",
    Spanish = "Spanish",
    Swedish = "Swedish",
    Turkish = "Turkish"
}
export declare enum IcuCollationAlternate {
    shifted = "shifted",
    "non-ignorable" = "non-ignorable"
}
export declare enum IcuCollationCaseFirst {
    lower = "lower",
    upper = "upper"
}
export declare enum IcuCollationDecomposition {
    no = "no",
    identical = "identical"
}
export declare enum IcuCollationStrength {
    primary = "primary",
    secondary = "secondary",
    tertiary = "tertiary",
    quaternary = "quaternary",
    identical = "identical"
}
export declare enum IcuNormalizationMode {
    decompose = "decompose",
    compose = "compose"
}
export declare enum IcuNormalizationType {
    nfc = "nfc",
    nfkc = "nfkc",
    nfkc_cf = "nfkc_cf"
}
export declare enum IcuTransformDirection {
    forward = "forward",
    reverse = "reverse"
}
export declare enum KuromojiTokenizationMode {
    normal = "normal",
    search = "search",
    extended = "extended"
}
export declare enum PhoneticEncoder {
    metaphone = "metaphone",
    double_metaphone = "double_metaphone",
    soundex = "soundex",
    refined_soundex = "refined_soundex",
    caverphone1 = "caverphone1",
    caverphone2 = "caverphone2",
    cologne = "cologne",
    nysiis = "nysiis",
    koelnerphonetik = "koelnerphonetik",
    haasephonetik = "haasephonetik",
    beider_morse = "beider_morse",
    daitch_mokotoff = "daitch_mokotoff"
}
export declare enum PhoneticLanguage {
    any = "any",
    comomon = "comomon",
    cyrillic = "cyrillic",
    english = "english",
    french = "french",
    german = "german",
    hebrew = "hebrew",
    hungarian = "hungarian",
    polish = "polish",
    romanian = "romanian",
    russian = "russian",
    spanish = "spanish"
}
export declare enum PhoneticNameType {
    generic = "generic",
    ashkenazi = "ashkenazi",
    sephardic = "sephardic"
}
export declare enum PhoneticRuleType {
    approx = "approx",
    exact = "exact"
}
export declare enum KeepTypesMode {
    include = "include",
    exclude = "exclude"
}
export declare enum DelimitedPayloadEncoding {
    int = "int",
    float = "float",
    identity = "identity"
}
export declare enum EdgeNGramSide {
    front = "front",
    back = "back"
}
export declare enum SynonymFormat {
    solr = "solr",
    wordnet = "wordnet"
}
export declare enum NoriDecompoundMode {
    discard = "discard",
    none = "none",
    mixed = "mixed"
}
export declare enum TokenChar {
    letter = "letter",
    digit = "digit",
    whitespace = "whitespace",
    punctuation = "punctuation",
    symbol = "symbol"
}
export declare enum ClusterStatus {
    green = "green",
    yellow = "yellow",
    red = "red"
}
export declare enum AllocationExplainDecision {
    NO = "NO",
    YES = "YES",
    THROTTLE = "THROTTLE",
    ALWAYS = "ALWAYS"
}
export declare enum Decision {
    yes = "yes",
    no = "no",
    worse_balance = "worse_balance",
    throttled = "throttled",
    awaiting_info = "awaiting_info",
    allocation_delayed = "allocation_delayed",
    no_valid_shard_copy = "no_valid_shard_copy",
    no_attempt = "no_attempt"
}
export declare enum StoreCopy {
    NONE = "NONE",
    AVAILABLE = "AVAILABLE",
    CORRUPT = "CORRUPT",
    IO_ERROR = "IO_ERROR",
    STALE = "STALE",
    UNKNOWN = "UNKNOWN"
}
export declare enum UnassignedInformationReason {
    INDEX_CREATED = "INDEX_CREATED",
    CLUSTER_RECOVERED = "CLUSTER_RECOVERED",
    INDEX_REOPENED = "INDEX_REOPENED",
    DANGLING_INDEX_IMPORTED = "DANGLING_INDEX_IMPORTED",
    NEW_INDEX_RESTORED = "NEW_INDEX_RESTORED",
    EXISTING_INDEX_RESTORED = "EXISTING_INDEX_RESTORED",
    REPLICA_ADDED = "REPLICA_ADDED",
    ALLOCATION_FAILED = "ALLOCATION_FAILED",
    NODE_LEFT = "NODE_LEFT",
    REROUTE_CANCELLED = "REROUTE_CANCELLED",
    REINITIALIZED = "REINITIALIZED",
    REALLOCATED_REPLICA = "REALLOCATED_REPLICA",
    PRIMARY_FAILED = "PRIMARY_FAILED",
    FORCED_EMPTY_PRIMARY = "FORCED_EMPTY_PRIMARY",
    MANUAL_ALLOCATION = "MANUAL_ALLOCATION"
}
export declare enum NodeRole {
    master = "master",
    data = "data",
    client = "client",
    ingest = "ingest",
    ml = "ml"
}
export declare enum Bytes {
    b = "b",
    k = "k",
    kb = "kb",
    m = "m",
    mb = "mb",
    g = "g",
    gb = "gb",
    t = "t",
    tb = "tb",
    p = "p",
    pb = "pb"
}
export declare enum Conflicts {
    abort = "abort",
    proceed = "proceed"
}
export declare enum DefaultOperator {
    AND = "AND",
    OR = "OR"
}
export declare enum ExpandWildcards {
    open = "open",
    closed = "closed",
    none = "none",
    all = "all"
}
export declare enum GeoShapeFormat {
    GeoJson = "GeoJson",
    WellKnownText = "WellKnownText"
}
export declare enum GroupBy {
    nodes = "nodes",
    parents = "parents",
    none = "none"
}
export declare enum Health {
    green = "green",
    yellow = "yellow",
    red = "red"
}
export declare enum HttpMethod {
    GET = "GET",
    POST = "POST",
    PUT = "PUT",
    DELETE = "DELETE",
    HEAD = "HEAD"
}
export declare enum Level {
    cluster = "cluster",
    indices = "indices",
    shards = "shards"
}
export declare enum OpType {
    index = "index",
    create = "create"
}
export declare enum PipelineFailure {
    BadAuthentication = "BadAuthentication",
    BadResponse = "BadResponse",
    PingFailure = "PingFailure",
    SniffFailure = "SniffFailure",
    CouldNotStartSniffOnStartup = "CouldNotStartSniffOnStartup",
    MaxTimeoutReached = "MaxTimeoutReached",
    MaxRetriesReached = "MaxRetriesReached",
    Unexpected = "Unexpected",
    BadRequest = "BadRequest",
    NoNodesAttempted = "NoNodesAttempted"
}
export declare enum PostType {
    ByteArray = "ByteArray",
    LiteralString = "LiteralString",
    EnumerableOfString = "EnumerableOfString",
    EnumerableOfObject = "EnumerableOfObject",
    Serializable = "Serializable"
}
export declare enum Refresh {
    true = "true",
    false = "false",
    wait_for = "wait_for"
}
export declare enum SearchType {
    query_then_fetch = "query_then_fetch",
    dfs_query_then_fetch = "dfs_query_then_fetch"
}
export declare enum Size {
    Raw = "Raw",
    k = "k",
    m = "m",
    g = "g",
    t = "t",
    p = "p"
}
export declare enum SuggestMode {
    missing = "missing",
    popular = "popular",
    always = "always"
}
export declare enum ThreadType {
    cpu = "cpu",
    wait = "wait",
    block = "block"
}
export declare enum VersionType {
    internal = "internal",
    external = "external",
    external_gte = "external_gte",
    force = "force"
}
export declare enum WaitForEvents {
    immediate = "immediate",
    urgent = "urgent",
    high = "high",
    normal = "normal",
    low = "low",
    languid = "languid"
}
export declare enum WaitForStatus {
    green = "green",
    yellow = "yellow",
    red = "red"
}
export declare enum DateMathOperation {
    "+" = "+",
    "-" = "-"
}
export declare enum DateMathTimeUnit {
    s = "s",
    m = "m",
    h = "h",
    d = "d",
    w = "w",
    M = "M",
    y = "y"
}
export declare enum DistanceUnit {
    in = "in",
    ft = "ft",
    yd = "yd",
    mi = "mi",
    nmi = "nmi",
    km = "km",
    m = "m",
    cm = "cm",
    mm = "mm"
}
export declare enum GeoDistanceType {
    arc = "arc",
    plane = "plane"
}
export declare enum GeoShapeRelation {
    intersects = "intersects",
    disjoint = "disjoint",
    within = "within",
    contains = "contains"
}
export declare enum ShapeRelation {
    intersects = "intersects",
    disjoint = "disjoint",
    within = "within"
}
export declare enum TimeUnit {
    nanos = "nanos",
    micros = "micros",
    ms = "ms",
    s = "s",
    m = "m",
    h = "h",
    d = "d"
}
export declare enum Result {
    Error = "Error",
    created = "created",
    updated = "updated",
    deleted = "deleted",
    not_found = "not_found",
    noop = "noop"
}
export declare enum RecoveryInitialShards {
    quorem = "quorem",
    "quorem-1" = "quorem-1",
    full = "full",
    "full-1" = "full-1"
}
export declare enum LogLevel {
    error = "error",
    warn = "warn",
    info = "info",
    debug = "debug",
    trace = "trace"
}
export declare enum IndexSortMissing {
    _first = "_first",
    _last = "_last"
}
export declare enum IndexSortMode {
    min = "min",
    max = "max"
}
export declare enum IndexSortOrder {
    asc = "asc",
    desc = "desc"
}
export declare enum FileSystemStorageImplementation {
    simplefs = "simplefs",
    niofs = "niofs",
    mmapfs = "mmapfs",
    default_fs = "default_fs"
}
export declare enum TranslogDurability {
    request = "request",
    async = "async"
}
export declare enum Normalization {
    no = "no",
    h1 = "h1",
    h2 = "h2",
    h3 = "h3",
    z = "z"
}
export declare enum DFIIndependenceMeasure {
    standardized = "standardized",
    saturated = "saturated",
    chisquared = "chisquared"
}
export declare enum DFRAfterEffect {
    no = "no",
    b = "b",
    l = "l"
}
export declare enum DFRBasicModel {
    be = "be",
    d = "d",
    g = "g",
    if = "if",
    in = "in",
    ine = "ine",
    p = "p"
}
export declare enum IBDistribution {
    ll = "ll",
    spl = "spl"
}
export declare enum IBLambda {
    df = "df",
    ttf = "ttf"
}
export declare enum ShardStoreAllocation {
    primary = "primary",
    replica = "replica",
    unused = "unused"
}
export declare enum ShardRoutingState {
    UNASSIGNED = "UNASSIGNED",
    INITIALIZING = "INITIALIZING",
    STARTED = "STARTED",
    RELOCATING = "RELOCATING"
}
export declare enum ConvertProcessorType {
    integer = "integer",
    long = "long",
    float = "float",
    double = "double",
    string = "string",
    boolean = "boolean",
    auto = "auto"
}
export declare enum DateRounding {
    s = "s",
    m = "m",
    h = "h",
    d = "d",
    w = "w",
    M = "M",
    y = "y"
}
export declare enum ShapeType {
    geo_shape = "geo_shape",
    shape = "shape"
}
export declare enum UserAgentProperty {
    NAME = "NAME",
    MAJOR = "MAJOR",
    MINOR = "MINOR",
    PATCH = "PATCH",
    OS = "OS",
    OS_NAME = "OS_NAME",
    OS_MAJOR = "OS_MAJOR",
    OS_MINOR = "OS_MINOR",
    DEVICE = "DEVICE",
    BUILD = "BUILD"
}
export declare enum DynamicMapping {
    strict = "strict"
}
export declare enum TermVectorOption {
    no = "no",
    yes = "yes",
    with_offsets = "with_offsets",
    with_positions = "with_positions",
    with_positions_offsets = "with_positions_offsets",
    with_positions_offsets_payloads = "with_positions_offsets_payloads"
}
export declare enum MatchType {
    simple = "simple",
    regex = "regex"
}
export declare enum FieldType {
    none = "none",
    geo_point = "geo_point",
    geo_shape = "geo_shape",
    ip = "ip",
    binary = "binary",
    keyword = "keyword",
    text = "text",
    search_as_you_type = "search_as_you_type",
    date = "date",
    date_nanos = "date_nanos",
    boolean = "boolean",
    completion = "completion",
    nested = "nested",
    object = "object",
    murmur3 = "murmur3",
    token_count = "token_count",
    percolator = "percolator",
    integer = "integer",
    long = "long",
    short = "short",
    byte = "byte",
    float = "float",
    half_float = "half_float",
    scaled_float = "scaled_float",
    double = "double",
    integer_range = "integer_range",
    float_range = "float_range",
    long_range = "long_range",
    double_range = "double_range",
    date_range = "date_range",
    ip_range = "ip_range",
    alias = "alias",
    join = "join",
    rank_feature = "rank_feature",
    rank_features = "rank_features",
    flattened = "flattened",
    shape = "shape"
}
export declare enum NumberType {
    float = "float",
    half_float = "half_float",
    scaled_float = "scaled_float",
    double = "double",
    integer = "integer",
    long = "long",
    short = "short",
    byte = "byte"
}
export declare enum RangeType {
    integer_range = "integer_range",
    float_range = "float_range",
    long_range = "long_range",
    double_range = "double_range",
    date_range = "date_range",
    ip_range = "ip_range"
}
export declare enum IndexOptions {
    docs = "docs",
    freqs = "freqs",
    positions = "positions",
    offsets = "offsets"
}
export declare enum GeoOrientation {
    ClockWise = "ClockWise",
    CounterClockWise = "CounterClockWise"
}
export declare enum GeoStrategy {
    recursive = "recursive",
    term = "term"
}
export declare enum GeoTree {
    geohash = "geohash",
    quadtree = "quadtree"
}
export declare enum ShapeOrientation {
    ClockWise = "ClockWise",
    CounterClockWise = "CounterClockWise"
}
export declare enum AllocationEnable {
    all = "all",
    primaries = "primaries",
    new_primaries = "new_primaries",
    none = "none"
}
export declare enum AllowRebalance {
    always = "always",
    indices_primaries_active = "indices_primaries_active",
    indices_all_active = "indices_all_active"
}
export declare enum RebalanceEnable {
    all = "all",
    primaries = "primaries",
    replicas = "replicas",
    none = "none"
}
export declare enum FielddataLoading {
    eager = "eager",
    eager_global_ordinals = "eager_global_ordinals"
}
export declare enum GeoPointFielddataFormat {
    array = "array",
    doc_values = "doc_values",
    compressed = "compressed",
    disabled = "disabled"
}
export declare enum NumericFielddataFormat {
    array = "array",
    disabled = "disabled"
}
export declare enum StringFielddataFormat {
    paged_bytes = "paged_bytes",
    disabled = "disabled"
}
export declare enum ScriptLang {
    painless = "painless",
    expression = "expression",
    mustache = "mustache"
}
export declare enum Operator {
    and = "and",
    or = "or"
}
export declare enum FunctionBoostMode {
    multiply = "multiply",
    replace = "replace",
    sum = "sum",
    avg = "avg",
    max = "max",
    min = "min"
}
export declare enum FunctionScoreMode {
    multiply = "multiply",
    sum = "sum",
    avg = "avg",
    first = "first",
    max = "max",
    min = "min"
}
export declare enum MultiValueMode {
    min = "min",
    max = "max",
    avg = "avg",
    sum = "sum"
}
export declare enum FieldValueFactorModifier {
    none = "none",
    log = "log",
    log1p = "log1p",
    log2p = "log2p",
    ln = "ln",
    ln1p = "ln1p",
    ln2p = "ln2p",
    square = "square",
    sqrt = "sqrt",
    reciprocal = "reciprocal"
}
export declare enum TextQueryType {
    best_fields = "best_fields",
    most_fields = "most_fields",
    cross_fields = "cross_fields",
    phrase = "phrase",
    phrase_prefix = "phrase_prefix",
    bool_prefix = "bool_prefix"
}
export declare enum ZeroTermsQuery {
    all = "all",
    none = "none"
}
export declare enum SimpleQueryStringFlags {
    NONE = "NONE",
    AND = "AND",
    OR = "OR",
    NOT = "NOT",
    PREFIX = "PREFIX",
    PHRASE = "PHRASE",
    PRECEDENCE = "PRECEDENCE",
    ESCAPE = "ESCAPE",
    WHITESPACE = "WHITESPACE",
    FUZZY = "FUZZY",
    NEAR = "NEAR",
    SLOP = "SLOP",
    ALL = "ALL"
}
export declare enum GeoValidationMethod {
    coerce = "coerce",
    ignore_malformed = "ignore_malformed",
    strict = "strict"
}
export declare enum GeoExecution {
    memory = "memory",
    indexed = "indexed"
}
export declare enum CharacterType {
    Whitespace = "Whitespace",
    Alpha = "Alpha",
    Comment = "Comment"
}
export declare enum TokenType {
    None = "None",
    Word = "Word",
    LParen = "LParen",
    RParen = "RParen",
    Comma = "Comma"
}
export declare enum ChildScoreMode {
    none = "none",
    avg = "avg",
    sum = "sum",
    max = "max",
    min = "min"
}
export declare enum NestedScoreMode {
    avg = "avg",
    sum = "sum",
    min = "min",
    max = "max",
    none = "none"
}
export declare enum RewriteMultiTerm {
    constant_score = "constant_score",
    scoring_boolean = "scoring_boolean",
    constant_score_boolean = "constant_score_boolean",
    top_terms_N = "top_terms_N",
    top_terms_boost_N = "top_terms_boost_N",
    top_terms_blended_freqs_N = "top_terms_blended_freqs_N"
}
export declare enum RangeRelation {
    within = "within",
    contains = "contains",
    intersects = "intersects"
}
export declare enum VisitorScope {
    Unknown = "Unknown",
    Query = "Query",
    Filter = "Filter",
    Must = "Must",
    MustNot = "MustNot",
    Should = "Should",
    PositiveQuery = "PositiveQuery",
    NegativeQuery = "NegativeQuery",
    Span = "Span"
}
export declare enum BoundaryScanner {
    chars = "chars",
    sentence = "sentence",
    word = "word"
}
export declare enum HighlighterEncoder {
    default = "default",
    html = "html"
}
export declare enum HighlighterFragmenter {
    simple = "simple",
    span = "span"
}
export declare enum HighlighterOrder {
    score = "score"
}
export declare enum HighlighterTagsSchema {
    styled = "styled"
}
export declare enum HighlighterType {
    plain = "plain",
    fvh = "fvh",
    unified = "unified"
}
export declare enum TotalHitsRelation {
    eq = "eq",
    gte = "gte"
}
export declare enum ScoreMode {
    avg = "avg",
    max = "max",
    min = "min",
    multiply = "multiply",
    total = "total"
}
export declare enum NumericType {
    long = "long",
    double = "double",
    date = "date",
    date_nanos = "date_nanos"
}
export declare enum SortMode {
    min = "min",
    max = "max",
    sum = "sum",
    avg = "avg",
    median = "median"
}
export declare enum SortOrder {
    asc = "asc",
    desc = "desc"
}
export declare enum SortSpecialField {
    _score = "_score",
    _doc = "_doc"
}
export declare enum StringDistance {
    internal = "internal",
    damerau_levenshtein = "damerau_levenshtein",
    levenshtein = "levenshtein",
    jaro_winkler = "jaro_winkler",
    ngram = "ngram"
}
export declare enum SuggestSort {
    score = "score",
    frequency = "frequency"
}
export declare enum FollowerIndexStatus {
    active = "active",
    paused = "paused"
}
export declare enum LifecycleOperationMode {
    RUNNING = "RUNNING",
    STOPPING = "STOPPING",
    STOPPED = "STOPPED"
}
export declare enum LicenseStatus {
    active = "active",
    valid = "valid",
    invalid = "invalid",
    expired = "expired"
}
export declare enum LicenseType {
    missing = "missing",
    trial = "trial",
    basic = "basic",
    standard = "standard",
    dev = "dev",
    silver = "silver",
    gold = "gold",
    platinum = "platinum"
}
export declare enum ChunkingMode {
    auto = "auto",
    manual = "manual",
    off = "off"
}
export declare enum DatafeedState {
    started = "started",
    stopped = "stopped",
    starting = "starting",
    stopping = "stopping"
}
export declare enum JobState {
    closing = "closing",
    closed = "closed",
    opened = "opened",
    failed = "failed",
    opening = "opening"
}
export declare enum MemoryStatus {
    ok = "ok",
    soft_limit = "soft_limit",
    hard_limit = "hard_limit"
}
export declare enum AppliesTo {
    actual = "actual",
    typical = "typical",
    diff_from_typical = "diff_from_typical",
    time = "time"
}
export declare enum ConditionOperator {
    gt = "gt",
    gte = "gte",
    lt = "lt",
    lte = "lte"
}
export declare enum CountFunction {
    Count = "Count",
    HighCount = "HighCount",
    LowCount = "LowCount"
}
export declare enum DistinctCountFunction {
    DistinctCount = "DistinctCount",
    LowDistinctCount = "LowDistinctCount",
    HighDistinctCount = "HighDistinctCount"
}
export declare enum GeographicFunction {
    LatLong = "LatLong"
}
export declare enum InfoContentFunction {
    InfoContent = "InfoContent",
    HighInfoContent = "HighInfoContent",
    LowInfoContent = "LowInfoContent"
}
export declare enum MetricFunction {
    Min = "Min",
    Max = "Max",
    Median = "Median",
    HighMedian = "HighMedian",
    LowMedian = "LowMedian",
    Mean = "Mean",
    HighMean = "HighMean",
    LowMean = "LowMean",
    Metric = "Metric",
    Varp = "Varp",
    HighVarp = "HighVarp",
    LowVarp = "LowVarp"
}
export declare enum NonNullSumFunction {
    NonNullSum = "NonNullSum",
    HighNonNullSum = "HighNonNullSum",
    LowNonNullSum = "LowNonNullSum"
}
export declare enum NonZeroCountFunction {
    NonZeroCount = "NonZeroCount",
    LowNonZeroCount = "LowNonZeroCount",
    HighNonZeroCount = "HighNonZeroCount"
}
export declare enum RareFunction {
    Rare = "Rare",
    FreqRare = "FreqRare"
}
export declare enum RuleAction {
    skip_result = "skip_result",
    skip_model_update = "skip_model_update"
}
export declare enum RuleFilterType {
    include = "include",
    exclude = "exclude"
}
export declare enum SumFunction {
    Sum = "Sum",
    HighSum = "HighSum",
    LowSum = "LowSum"
}
export declare enum TimeFunction {
    TimeOfDay = "TimeOfDay",
    TimeOfWeek = "TimeOfWeek"
}
export declare enum ExcludeFrequent {
    all = "all",
    none = "none",
    by = "by",
    over = "over"
}
export declare enum DeprecationWarningLevel {
    none = "none",
    info = "info",
    warning = "warning",
    critical = "critical"
}
export declare enum IndexingJobState {
    started = "started",
    indexing = "indexing",
    stopping = "stopping",
    stopped = "stopped",
    aborting = "aborting"
}
export declare enum RollupMetric {
    min = "min",
    max = "max",
    sum = "sum",
    avg = "avg",
    value_count = "value_count"
}
export declare enum AccessTokenGrantType {
    password = "password"
}
export declare enum AcknowledgementState {
    awaits_successful_execution = "awaits_successful_execution",
    ackable = "ackable",
    acked = "acked"
}
export declare enum ActionType {
    email = "email",
    webhook = "webhook",
    index = "index",
    logging = "logging",
    slack = "slack",
    pagerduty = "pagerduty"
}
export declare enum DataAttachmentFormat {
    json = "json",
    yaml = "yaml"
}
export declare enum EmailPriority {
    lowest = "lowest",
    low = "low",
    normal = "normal",
    high = "high",
    highest = "highest"
}
export declare enum PagerDutyContextType {
    link = "link",
    image = "image"
}
export declare enum PagerDutyEventType {
    trigger = "trigger",
    resolve = "resolve",
    acknowledge = "acknowledge"
}
export declare enum ConditionType {
    always = "always",
    never = "never",
    script = "script",
    compare = "compare",
    array_compare = "array_compare"
}
export declare enum Quantifier {
    some = "some",
    all = "all"
}
export declare enum ActionExecutionState {
    awaits_execution = "awaits_execution",
    checking = "checking",
    execution_not_needed = "execution_not_needed",
    throttled = "throttled",
    executed = "executed",
    failed = "failed",
    deleted_while_queued = "deleted_while_queued",
    not_executed_already_queued = "not_executed_already_queued"
}
export declare enum ActionExecutionMode {
    simulate = "simulate",
    force_simulate = "force_simulate",
    execute = "execute",
    force_execute = "force_execute",
    skip = "skip"
}
export declare enum Status {
    success = "success",
    failure = "failure",
    simulated = "simulated",
    throttled = "throttled"
}
export declare enum ConnectionScheme {
    http = "http",
    https = "https"
}
export declare enum HttpInputMethod {
    head = "head",
    get = "get",
    post = "post",
    put = "put",
    delete = "delete"
}
export declare enum InputType {
    http = "http",
    search = "search",
    simple = "simple"
}
export declare enum ResponseContentType {
    json = "json",
    yaml = "yaml",
    text = "text"
}
export declare enum Day {
    sunday = "sunday",
    monday = "monday",
    tuesday = "tuesday",
    wednesday = "wednesday",
    thursday = "thursday",
    friday = "friday",
    saturday = "saturday"
}
export declare enum IntervalUnit {
    s = "s",
    m = "m",
    h = "h",
    d = "d",
    w = "w"
}
export declare enum Month {
    january = "january",
    february = "february",
    march = "march",
    april = "april",
    may = "may",
    june = "june",
    july = "july",
    august = "august",
    september = "september",
    october = "october",
    november = "november",
    december = "december"
}
export declare enum ExecutionPhase {
    awaits_execution = "awaits_execution",
    started = "started",
    input = "input",
    condition = "condition",
    actions = "actions",
    watch_transform = "watch_transform",
    aborted = "aborted",
    finished = "finished"
}
export declare enum WatcherState {
    stopped = "stopped",
    starting = "starting",
    started = "started",
    stopping = "stopping"
}
