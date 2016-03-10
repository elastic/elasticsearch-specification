var DateInterval;
(function (DateInterval) {
    DateInterval[DateInterval["second"] = 0] = "second";
    DateInterval[DateInterval["minute"] = 1] = "minute";
    DateInterval[DateInterval["hour"] = 2] = "hour";
    DateInterval[DateInterval["day"] = 3] = "day";
    DateInterval[DateInterval["week"] = 4] = "week";
    DateInterval[DateInterval["month"] = 5] = "month";
    DateInterval[DateInterval["quarter"] = 6] = "quarter";
    DateInterval[DateInterval["year"] = 7] = "year";
})(DateInterval || (DateInterval = {}));
var TimeUnit;
(function (TimeUnit) {
    TimeUnit[TimeUnit["ms"] = 0] = "ms";
    TimeUnit[TimeUnit["s"] = 1] = "s";
    TimeUnit[TimeUnit["m"] = 2] = "m";
    TimeUnit[TimeUnit["h"] = 3] = "h";
    TimeUnit[TimeUnit["d"] = 4] = "d";
    TimeUnit[TimeUnit["w"] = 5] = "w";
    TimeUnit[TimeUnit["M"] = 6] = "M";
    TimeUnit[TimeUnit["y"] = 7] = "y";
})(TimeUnit || (TimeUnit = {}));
var SimilarityOption;
(function (SimilarityOption) {
    SimilarityOption[SimilarityOption["default"] = 0] = "default";
    SimilarityOption[SimilarityOption["BM25"] = 1] = "BM25";
})(SimilarityOption || (SimilarityOption = {}));
var DynamicMapping;
(function (DynamicMapping) {
    DynamicMapping[DynamicMapping["allow"] = 0] = "allow";
    DynamicMapping[DynamicMapping["ignore"] = 1] = "ignore";
    DynamicMapping[DynamicMapping["strict"] = 2] = "strict";
})(DynamicMapping || (DynamicMapping = {}));
var SortOrder;
(function (SortOrder) {
    SortOrder[SortOrder["asc"] = 0] = "asc";
    SortOrder[SortOrder["desc"] = 1] = "desc";
})(SortOrder || (SortOrder = {}));
var SortMode;
(function (SortMode) {
    SortMode[SortMode["min"] = 0] = "min";
    SortMode[SortMode["max"] = 1] = "max";
    SortMode[SortMode["sum"] = 2] = "sum";
    SortMode[SortMode["avg"] = 3] = "avg";
})(SortMode || (SortMode = {}));
var HighlighterType;
(function (HighlighterType) {
    HighlighterType[HighlighterType["plain"] = 0] = "plain";
    HighlighterType[HighlighterType["postings"] = 1] = "postings";
    HighlighterType[HighlighterType["fvh"] = 2] = "fvh";
})(HighlighterType || (HighlighterType = {}));
var ScoreMode;
(function (ScoreMode) {
    ScoreMode[ScoreMode["avg"] = 0] = "avg";
    ScoreMode[ScoreMode["first"] = 1] = "first";
    ScoreMode[ScoreMode["max"] = 2] = "max";
    ScoreMode[ScoreMode["min"] = 3] = "min";
    ScoreMode[ScoreMode["multiply"] = 4] = "multiply";
    ScoreMode[ScoreMode["total"] = 5] = "total";
    ScoreMode[ScoreMode["sum"] = 6] = "sum";
})(ScoreMode || (ScoreMode = {}));
var RewriteMultiTerm;
(function (RewriteMultiTerm) {
    RewriteMultiTerm[RewriteMultiTerm["constant_score"] = 0] = "constant_score";
    RewriteMultiTerm[RewriteMultiTerm["scoring_boolean"] = 1] = "scoring_boolean";
    RewriteMultiTerm[RewriteMultiTerm["constant_score_boolean"] = 2] = "constant_score_boolean";
    RewriteMultiTerm[RewriteMultiTerm["top_terms_N"] = 3] = "top_terms_N";
    RewriteMultiTerm[RewriteMultiTerm["top_terms_boost_N"] = 4] = "top_terms_boost_N";
    RewriteMultiTerm[RewriteMultiTerm["top_terms_blended_freqs_N"] = 5] = "top_terms_blended_freqs_N";
})(RewriteMultiTerm || (RewriteMultiTerm = {}));
var TextQueryType;
(function (TextQueryType) {
    TextQueryType[TextQueryType["best_fields"] = 0] = "best_fields";
    TextQueryType[TextQueryType["most_fields"] = 1] = "most_fields";
    TextQueryType[TextQueryType["cross_fields"] = 2] = "cross_fields";
    TextQueryType[TextQueryType["phrase"] = 3] = "phrase";
    TextQueryType[TextQueryType["phrase_prefix"] = 4] = "phrase_prefix";
})(TextQueryType || (TextQueryType = {}));
var Operator;
(function (Operator) {
    Operator[Operator["and"] = 0] = "and";
    Operator[Operator["or"] = 1] = "or";
})(Operator || (Operator = {}));
var ZeroTermsQuery;
(function (ZeroTermsQuery) {
    ZeroTermsQuery[ZeroTermsQuery["all"] = 0] = "all";
    ZeroTermsQuery[ZeroTermsQuery["none"] = 1] = "none";
})(ZeroTermsQuery || (ZeroTermsQuery = {}));
var ChildScoreMode;
(function (ChildScoreMode) {
    ChildScoreMode[ChildScoreMode["none"] = 0] = "none";
    ChildScoreMode[ChildScoreMode["avg"] = 1] = "avg";
    ChildScoreMode[ChildScoreMode["sum"] = 2] = "sum";
    ChildScoreMode[ChildScoreMode["max"] = 3] = "max";
    ChildScoreMode[ChildScoreMode["min"] = 4] = "min";
})(ChildScoreMode || (ChildScoreMode = {}));
var ParentScoreMode;
(function (ParentScoreMode) {
    ParentScoreMode[ParentScoreMode["none"] = 0] = "none";
    ParentScoreMode[ParentScoreMode["score"] = 1] = "score";
})(ParentScoreMode || (ParentScoreMode = {}));
var SimpleQueryStringFlags;
(function (SimpleQueryStringFlags) {
    SimpleQueryStringFlags[SimpleQueryStringFlags["NONE"] = 1] = "NONE";
    SimpleQueryStringFlags[SimpleQueryStringFlags["AND"] = 2] = "AND";
    SimpleQueryStringFlags[SimpleQueryStringFlags["OR"] = 4] = "OR";
    SimpleQueryStringFlags[SimpleQueryStringFlags["NOT"] = 8] = "NOT";
    SimpleQueryStringFlags[SimpleQueryStringFlags["PREFIX"] = 16] = "PREFIX";
    SimpleQueryStringFlags[SimpleQueryStringFlags["PHRASE"] = 32] = "PHRASE";
    SimpleQueryStringFlags[SimpleQueryStringFlags["PRECEDENCE"] = 64] = "PRECEDENCE";
    SimpleQueryStringFlags[SimpleQueryStringFlags["ESCAPE"] = 128] = "ESCAPE";
    SimpleQueryStringFlags[SimpleQueryStringFlags["WHITESPACE"] = 256] = "WHITESPACE";
    SimpleQueryStringFlags[SimpleQueryStringFlags["FUZZY"] = 512] = "FUZZY";
    SimpleQueryStringFlags[SimpleQueryStringFlags["NEAR"] = 1024] = "NEAR";
    SimpleQueryStringFlags[SimpleQueryStringFlags["SLOP"] = 2048] = "SLOP";
    SimpleQueryStringFlags[SimpleQueryStringFlags["ALL"] = 4096] = "ALL";
})(SimpleQueryStringFlags || (SimpleQueryStringFlags = {}));
var NestedScoreMode;
(function (NestedScoreMode) {
    NestedScoreMode[NestedScoreMode["avg"] = 0] = "avg";
    NestedScoreMode[NestedScoreMode["total"] = 1] = "total";
    NestedScoreMode[NestedScoreMode["max"] = 2] = "max";
    NestedScoreMode[NestedScoreMode["none"] = 3] = "none";
})(NestedScoreMode || (NestedScoreMode = {}));
var FunctionScoreMode;
(function (FunctionScoreMode) {
    FunctionScoreMode[FunctionScoreMode["multiply"] = 0] = "multiply";
    FunctionScoreMode[FunctionScoreMode["sum"] = 1] = "sum";
    FunctionScoreMode[FunctionScoreMode["avg"] = 2] = "avg";
    FunctionScoreMode[FunctionScoreMode["first"] = 3] = "first";
    FunctionScoreMode[FunctionScoreMode["max"] = 4] = "max";
    FunctionScoreMode[FunctionScoreMode["min"] = 5] = "min";
})(FunctionScoreMode || (FunctionScoreMode = {}));
var FunctionBoostMode;
(function (FunctionBoostMode) {
    FunctionBoostMode[FunctionBoostMode["multiply"] = 0] = "multiply";
    FunctionBoostMode[FunctionBoostMode["replace"] = 1] = "replace";
    FunctionBoostMode[FunctionBoostMode["sum"] = 2] = "sum";
    FunctionBoostMode[FunctionBoostMode["avg"] = 3] = "avg";
    FunctionBoostMode[FunctionBoostMode["max"] = 4] = "max";
    FunctionBoostMode[FunctionBoostMode["min"] = 5] = "min";
})(FunctionBoostMode || (FunctionBoostMode = {}));
var GeoExecution;
(function (GeoExecution) {
    GeoExecution[GeoExecution["memory"] = 0] = "memory";
    GeoExecution[GeoExecution["indexed"] = 1] = "indexed";
})(GeoExecution || (GeoExecution = {}));
var GeoValidationMethod;
(function (GeoValidationMethod) {
    GeoValidationMethod[GeoValidationMethod["coerce"] = 0] = "coerce";
    GeoValidationMethod[GeoValidationMethod["ignore_malformed"] = 1] = "ignore_malformed";
    GeoValidationMethod[GeoValidationMethod["strict"] = 2] = "strict";
})(GeoValidationMethod || (GeoValidationMethod = {}));
var DistanceUnit;
(function (DistanceUnit) {
    DistanceUnit[DistanceUnit["in"] = 0] = "in";
    DistanceUnit[DistanceUnit["ft"] = 1] = "ft";
    DistanceUnit[DistanceUnit["yd"] = 2] = "yd";
    DistanceUnit[DistanceUnit["mi"] = 3] = "mi";
    DistanceUnit[DistanceUnit["nmi"] = 4] = "nmi";
    DistanceUnit[DistanceUnit["km"] = 5] = "km";
    DistanceUnit[DistanceUnit["m"] = 6] = "m";
    DistanceUnit[DistanceUnit["cm"] = 7] = "cm";
    DistanceUnit[DistanceUnit["mm"] = 8] = "mm";
})(DistanceUnit || (DistanceUnit = {}));
var GeoOptimizeBBox;
(function (GeoOptimizeBBox) {
    GeoOptimizeBBox[GeoOptimizeBBox["memory"] = 0] = "memory";
    GeoOptimizeBBox[GeoOptimizeBBox["indexed"] = 1] = "indexed";
    GeoOptimizeBBox[GeoOptimizeBBox["none"] = 2] = "none";
})(GeoOptimizeBBox || (GeoOptimizeBBox = {}));
var GeoDistanceType;
(function (GeoDistanceType) {
    GeoDistanceType[GeoDistanceType["sloppy_arc"] = 0] = "sloppy_arc";
    GeoDistanceType[GeoDistanceType["arc"] = 1] = "arc";
    GeoDistanceType[GeoDistanceType["plane"] = 2] = "plane";
})(GeoDistanceType || (GeoDistanceType = {}));
var GeoHashPrecision;
(function (GeoHashPrecision) {
    GeoHashPrecision[GeoHashPrecision["Precision1"] = 1] = "Precision1";
    GeoHashPrecision[GeoHashPrecision["Precision2"] = 2] = "Precision2";
    GeoHashPrecision[GeoHashPrecision["Precision3"] = 3] = "Precision3";
    GeoHashPrecision[GeoHashPrecision["Precision4"] = 4] = "Precision4";
    GeoHashPrecision[GeoHashPrecision["Precision5"] = 5] = "Precision5";
    GeoHashPrecision[GeoHashPrecision["Precision6"] = 6] = "Precision6";
    GeoHashPrecision[GeoHashPrecision["Precision7"] = 7] = "Precision7";
    GeoHashPrecision[GeoHashPrecision["Precision8"] = 8] = "Precision8";
    GeoHashPrecision[GeoHashPrecision["Precision9"] = 9] = "Precision9";
    GeoHashPrecision[GeoHashPrecision["Precision10"] = 10] = "Precision10";
    GeoHashPrecision[GeoHashPrecision["Precision11"] = 11] = "Precision11";
    GeoHashPrecision[GeoHashPrecision["Precision12"] = 12] = "Precision12";
})(GeoHashPrecision || (GeoHashPrecision = {}));
var TermsAggregationExecutionHint;
(function (TermsAggregationExecutionHint) {
    TermsAggregationExecutionHint[TermsAggregationExecutionHint["map"] = 0] = "map";
    TermsAggregationExecutionHint[TermsAggregationExecutionHint["global_ordinals"] = 1] = "global_ordinals";
    TermsAggregationExecutionHint[TermsAggregationExecutionHint["global_ordinals_hash"] = 2] = "global_ordinals_hash";
    TermsAggregationExecutionHint[TermsAggregationExecutionHint["global_ordinals_low_cardinality"] = 3] = "global_ordinals_low_cardinality";
})(TermsAggregationExecutionHint || (TermsAggregationExecutionHint = {}));
var TermsAggregationCollectMode;
(function (TermsAggregationCollectMode) {
    TermsAggregationCollectMode[TermsAggregationCollectMode["depth_first"] = 0] = "depth_first";
    TermsAggregationCollectMode[TermsAggregationCollectMode["breadth_first"] = 1] = "breadth_first";
})(TermsAggregationCollectMode || (TermsAggregationCollectMode = {}));
var SamplerAggregationExecutionHint;
(function (SamplerAggregationExecutionHint) {
    SamplerAggregationExecutionHint[SamplerAggregationExecutionHint["map"] = 0] = "map";
    SamplerAggregationExecutionHint[SamplerAggregationExecutionHint["global_ordinals"] = 1] = "global_ordinals";
    SamplerAggregationExecutionHint[SamplerAggregationExecutionHint["bytes_hash"] = 2] = "bytes_hash";
})(SamplerAggregationExecutionHint || (SamplerAggregationExecutionHint = {}));
var ClusterStatus;
(function (ClusterStatus) {
    ClusterStatus[ClusterStatus["green"] = 0] = "green";
    ClusterStatus[ClusterStatus["yellow"] = 1] = "yellow";
    ClusterStatus[ClusterStatus["red"] = 2] = "red";
})(ClusterStatus || (ClusterStatus = {}));
var HttpMethod;
(function (HttpMethod) {
    HttpMethod[HttpMethod["GET"] = 0] = "GET";
    HttpMethod[HttpMethod["POST"] = 1] = "POST";
    HttpMethod[HttpMethod["PUT"] = 2] = "PUT";
    HttpMethod[HttpMethod["DELETE"] = 3] = "DELETE";
    HttpMethod[HttpMethod["HEAD"] = 4] = "HEAD";
})(HttpMethod || (HttpMethod = {}));
var Bytes;
(function (Bytes) {
    Bytes[Bytes["b"] = 0] = "b";
    Bytes[Bytes["k"] = 1] = "k";
    Bytes[Bytes["m"] = 2] = "m";
    Bytes[Bytes["g"] = 3] = "g";
})(Bytes || (Bytes = {}));
var Level;
(function (Level) {
    Level[Level["cluster"] = 0] = "cluster";
    Level[Level["indices"] = 1] = "indices";
    Level[Level["shards"] = 2] = "shards";
})(Level || (Level = {}));
var WaitForStatus;
(function (WaitForStatus) {
    WaitForStatus[WaitForStatus["green"] = 0] = "green";
    WaitForStatus[WaitForStatus["yellow"] = 1] = "yellow";
    WaitForStatus[WaitForStatus["red"] = 2] = "red";
})(WaitForStatus || (WaitForStatus = {}));
var ExpandWildcards;
(function (ExpandWildcards) {
    ExpandWildcards[ExpandWildcards["open"] = 0] = "open";
    ExpandWildcards[ExpandWildcards["closed"] = 1] = "closed";
    ExpandWildcards[ExpandWildcards["none"] = 2] = "none";
    ExpandWildcards[ExpandWildcards["all"] = 3] = "all";
})(ExpandWildcards || (ExpandWildcards = {}));
var SuggestMode;
(function (SuggestMode) {
    SuggestMode[SuggestMode["missing"] = 0] = "missing";
    SuggestMode[SuggestMode["popular"] = 1] = "popular";
    SuggestMode[SuggestMode["always"] = 2] = "always";
})(SuggestMode || (SuggestMode = {}));
var SearchType;
(function (SearchType) {
    SearchType[SearchType["query_then_fetch"] = 0] = "query_then_fetch";
    SearchType[SearchType["query_and_fetch"] = 1] = "query_and_fetch";
    SearchType[SearchType["dfs_query_then_fetch"] = 2] = "dfs_query_then_fetch";
    SearchType[SearchType["dfs_query_and_fetch"] = 3] = "dfs_query_and_fetch";
    SearchType[SearchType["count"] = 4] = "count";
    SearchType[SearchType["scan"] = 5] = "scan";
})(SearchType || (SearchType = {}));
var ThreadType;
(function (ThreadType) {
    ThreadType[ThreadType["cpu"] = 0] = "cpu";
    ThreadType[ThreadType["wait"] = 1] = "wait";
    ThreadType[ThreadType["block"] = 2] = "block";
})(ThreadType || (ThreadType = {}));
var VersionType;
(function (VersionType) {
    VersionType[VersionType["internal"] = 0] = "internal";
    VersionType[VersionType["external"] = 1] = "external";
    VersionType[VersionType["external_gte"] = 2] = "external_gte";
    VersionType[VersionType["force"] = 3] = "force";
})(VersionType || (VersionType = {}));
var Consistency;
(function (Consistency) {
    Consistency[Consistency["one"] = 0] = "one";
    Consistency[Consistency["quorum"] = 1] = "quorum";
    Consistency[Consistency["all"] = 2] = "all";
})(Consistency || (Consistency = {}));
var DefaultOperator;
(function (DefaultOperator) {
    DefaultOperator[DefaultOperator["AND"] = 0] = "AND";
    DefaultOperator[DefaultOperator["OR"] = 1] = "OR";
})(DefaultOperator || (DefaultOperator = {}));
var OpType;
(function (OpType) {
    OpType[OpType["index"] = 0] = "index";
    OpType[OpType["create"] = 1] = "create";
})(OpType || (OpType = {}));
var Format;
(function (Format) {
    Format[Format["detailed"] = 0] = "detailed";
    Format[Format["text"] = 1] = "text";
})(Format || (Format = {}));
var PercolateFormat;
(function (PercolateFormat) {
    PercolateFormat[PercolateFormat["ids"] = 0] = "ids";
})(PercolateFormat || (PercolateFormat = {}));
