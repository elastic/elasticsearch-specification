"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var MinimumInterval;
(function (MinimumInterval) {
    MinimumInterval["second"] = "second";
    MinimumInterval["minute"] = "minute";
    MinimumInterval["hour"] = "hour";
    MinimumInterval["day"] = "day";
    MinimumInterval["month"] = "month";
    MinimumInterval["year"] = "year";
})(MinimumInterval = exports.MinimumInterval || (exports.MinimumInterval = {}));
var DateInterval;
(function (DateInterval) {
    DateInterval["second"] = "second";
    DateInterval["minute"] = "minute";
    DateInterval["hour"] = "hour";
    DateInterval["day"] = "day";
    DateInterval["week"] = "week";
    DateInterval["month"] = "month";
    DateInterval["quarter"] = "quarter";
    DateInterval["year"] = "year";
})(DateInterval = exports.DateInterval || (exports.DateInterval = {}));
var GeoHashPrecision;
(function (GeoHashPrecision) {
    GeoHashPrecision["Precision1"] = "Precision1";
    GeoHashPrecision["Precision2"] = "Precision2";
    GeoHashPrecision["Precision3"] = "Precision3";
    GeoHashPrecision["Precision4"] = "Precision4";
    GeoHashPrecision["Precision5"] = "Precision5";
    GeoHashPrecision["Precision6"] = "Precision6";
    GeoHashPrecision["Precision7"] = "Precision7";
    GeoHashPrecision["Precision8"] = "Precision8";
    GeoHashPrecision["Precision9"] = "Precision9";
    GeoHashPrecision["Precision10"] = "Precision10";
    GeoHashPrecision["Precision11"] = "Precision11";
    GeoHashPrecision["Precision12"] = "Precision12";
})(GeoHashPrecision = exports.GeoHashPrecision || (exports.GeoHashPrecision = {}));
var GeoTilePrecision;
(function (GeoTilePrecision) {
    GeoTilePrecision["Precision0"] = "Precision0";
    GeoTilePrecision["Precision1"] = "Precision1";
    GeoTilePrecision["Precision2"] = "Precision2";
    GeoTilePrecision["Precision3"] = "Precision3";
    GeoTilePrecision["Precision4"] = "Precision4";
    GeoTilePrecision["Precision5"] = "Precision5";
    GeoTilePrecision["Precision6"] = "Precision6";
    GeoTilePrecision["Precision7"] = "Precision7";
    GeoTilePrecision["Precision8"] = "Precision8";
    GeoTilePrecision["Precision9"] = "Precision9";
    GeoTilePrecision["Precision10"] = "Precision10";
    GeoTilePrecision["Precision11"] = "Precision11";
    GeoTilePrecision["Precision12"] = "Precision12";
    GeoTilePrecision["Precision13"] = "Precision13";
    GeoTilePrecision["Precision14"] = "Precision14";
    GeoTilePrecision["Precision15"] = "Precision15";
    GeoTilePrecision["Precision16"] = "Precision16";
    GeoTilePrecision["Precision17"] = "Precision17";
    GeoTilePrecision["Precision18"] = "Precision18";
    GeoTilePrecision["Precision19"] = "Precision19";
    GeoTilePrecision["Precision20"] = "Precision20";
    GeoTilePrecision["Precision21"] = "Precision21";
    GeoTilePrecision["Precision22"] = "Precision22";
    GeoTilePrecision["Precision23"] = "Precision23";
    GeoTilePrecision["Precision24"] = "Precision24";
    GeoTilePrecision["Precision25"] = "Precision25";
    GeoTilePrecision["Precision26"] = "Precision26";
    GeoTilePrecision["Precision27"] = "Precision27";
    GeoTilePrecision["Precision28"] = "Precision28";
    GeoTilePrecision["Precision29"] = "Precision29";
})(GeoTilePrecision = exports.GeoTilePrecision || (exports.GeoTilePrecision = {}));
var SamplerAggregationExecutionHint;
(function (SamplerAggregationExecutionHint) {
    SamplerAggregationExecutionHint["map"] = "map";
    SamplerAggregationExecutionHint["global_ordinals"] = "global_ordinals";
    SamplerAggregationExecutionHint["bytes_hash"] = "bytes_hash";
})(SamplerAggregationExecutionHint = exports.SamplerAggregationExecutionHint || (exports.SamplerAggregationExecutionHint = {}));
var TermsAggregationCollectMode;
(function (TermsAggregationCollectMode) {
    TermsAggregationCollectMode["depth_first"] = "depth_first";
    TermsAggregationCollectMode["breadth_first"] = "breadth_first";
})(TermsAggregationCollectMode = exports.TermsAggregationCollectMode || (exports.TermsAggregationCollectMode = {}));
var TermsAggregationExecutionHint;
(function (TermsAggregationExecutionHint) {
    TermsAggregationExecutionHint["map"] = "map";
    TermsAggregationExecutionHint["global_ordinals"] = "global_ordinals";
    TermsAggregationExecutionHint["global_ordinals_hash"] = "global_ordinals_hash";
    TermsAggregationExecutionHint["global_ordinals_low_cardinality"] = "global_ordinals_low_cardinality";
})(TermsAggregationExecutionHint = exports.TermsAggregationExecutionHint || (exports.TermsAggregationExecutionHint = {}));
var MatrixStatsMode;
(function (MatrixStatsMode) {
    MatrixStatsMode["avg"] = "avg";
    MatrixStatsMode["min"] = "min";
    MatrixStatsMode["max"] = "max";
    MatrixStatsMode["sum"] = "sum";
    MatrixStatsMode["median"] = "median";
})(MatrixStatsMode = exports.MatrixStatsMode || (exports.MatrixStatsMode = {}));
var ValueType;
(function (ValueType) {
    ValueType["string"] = "string";
    ValueType["long"] = "long";
    ValueType["double"] = "double";
    ValueType["number"] = "number";
    ValueType["date"] = "date";
    ValueType["date_nanos"] = "date_nanos";
    ValueType["ip"] = "ip";
    ValueType["numeric"] = "numeric";
    ValueType["geo_point"] = "geo_point";
    ValueType["boolean"] = "boolean";
})(ValueType = exports.ValueType || (exports.ValueType = {}));
var GapPolicy;
(function (GapPolicy) {
    GapPolicy["skip"] = "skip";
    GapPolicy["insert_zeros"] = "insert_zeros";
})(GapPolicy = exports.GapPolicy || (exports.GapPolicy = {}));
var HoltWintersType;
(function (HoltWintersType) {
    HoltWintersType["add"] = "add";
    HoltWintersType["mult"] = "mult";
})(HoltWintersType = exports.HoltWintersType || (exports.HoltWintersType = {}));
var AggregationVisitorScope;
(function (AggregationVisitorScope) {
    AggregationVisitorScope["Unknown"] = "Unknown";
    AggregationVisitorScope["Aggregation"] = "Aggregation";
    AggregationVisitorScope["Bucket"] = "Bucket";
})(AggregationVisitorScope = exports.AggregationVisitorScope || (exports.AggregationVisitorScope = {}));
var Language;
(function (Language) {
    Language["Arabic"] = "Arabic";
    Language["Armenian"] = "Armenian";
    Language["Basque"] = "Basque";
    Language["Brazilian"] = "Brazilian";
    Language["Bulgarian"] = "Bulgarian";
    Language["Catalan"] = "Catalan";
    Language["Chinese"] = "Chinese";
    Language["Cjk"] = "Cjk";
    Language["Czech"] = "Czech";
    Language["Danish"] = "Danish";
    Language["Dutch"] = "Dutch";
    Language["English"] = "English";
    Language["Finnish"] = "Finnish";
    Language["French"] = "French";
    Language["Galician"] = "Galician";
    Language["German"] = "German";
    Language["Greek"] = "Greek";
    Language["Hindi"] = "Hindi";
    Language["Hungarian"] = "Hungarian";
    Language["Indonesian"] = "Indonesian";
    Language["Irish"] = "Irish";
    Language["Italian"] = "Italian";
    Language["Latvian"] = "Latvian";
    Language["Norwegian"] = "Norwegian";
    Language["Persian"] = "Persian";
    Language["Portuguese"] = "Portuguese";
    Language["Romanian"] = "Romanian";
    Language["Russian"] = "Russian";
    Language["Sorani"] = "Sorani";
    Language["Spanish"] = "Spanish";
    Language["Swedish"] = "Swedish";
    Language["Turkish"] = "Turkish";
    Language["Thai"] = "Thai";
})(Language = exports.Language || (exports.Language = {}));
var SnowballLanguage;
(function (SnowballLanguage) {
    SnowballLanguage["Armenian"] = "Armenian";
    SnowballLanguage["Basque"] = "Basque";
    SnowballLanguage["Catalan"] = "Catalan";
    SnowballLanguage["Danish"] = "Danish";
    SnowballLanguage["Dutch"] = "Dutch";
    SnowballLanguage["English"] = "English";
    SnowballLanguage["Finnish"] = "Finnish";
    SnowballLanguage["French"] = "French";
    SnowballLanguage["German"] = "German";
    SnowballLanguage["German2"] = "German2";
    SnowballLanguage["Hungarian"] = "Hungarian";
    SnowballLanguage["Italian"] = "Italian";
    SnowballLanguage["Kp"] = "Kp";
    SnowballLanguage["Lovins"] = "Lovins";
    SnowballLanguage["Norwegian"] = "Norwegian";
    SnowballLanguage["Porter"] = "Porter";
    SnowballLanguage["Portuguese"] = "Portuguese";
    SnowballLanguage["Romanian"] = "Romanian";
    SnowballLanguage["Russian"] = "Russian";
    SnowballLanguage["Spanish"] = "Spanish";
    SnowballLanguage["Swedish"] = "Swedish";
    SnowballLanguage["Turkish"] = "Turkish";
})(SnowballLanguage = exports.SnowballLanguage || (exports.SnowballLanguage = {}));
var IcuCollationAlternate;
(function (IcuCollationAlternate) {
    IcuCollationAlternate["shifted"] = "shifted";
    IcuCollationAlternate["non-ignorable"] = "non-ignorable";
})(IcuCollationAlternate = exports.IcuCollationAlternate || (exports.IcuCollationAlternate = {}));
var IcuCollationCaseFirst;
(function (IcuCollationCaseFirst) {
    IcuCollationCaseFirst["lower"] = "lower";
    IcuCollationCaseFirst["upper"] = "upper";
})(IcuCollationCaseFirst = exports.IcuCollationCaseFirst || (exports.IcuCollationCaseFirst = {}));
var IcuCollationDecomposition;
(function (IcuCollationDecomposition) {
    IcuCollationDecomposition["no"] = "no";
    IcuCollationDecomposition["identical"] = "identical";
})(IcuCollationDecomposition = exports.IcuCollationDecomposition || (exports.IcuCollationDecomposition = {}));
var IcuCollationStrength;
(function (IcuCollationStrength) {
    IcuCollationStrength["primary"] = "primary";
    IcuCollationStrength["secondary"] = "secondary";
    IcuCollationStrength["tertiary"] = "tertiary";
    IcuCollationStrength["quaternary"] = "quaternary";
    IcuCollationStrength["identical"] = "identical";
})(IcuCollationStrength = exports.IcuCollationStrength || (exports.IcuCollationStrength = {}));
var IcuNormalizationMode;
(function (IcuNormalizationMode) {
    IcuNormalizationMode["decompose"] = "decompose";
    IcuNormalizationMode["compose"] = "compose";
})(IcuNormalizationMode = exports.IcuNormalizationMode || (exports.IcuNormalizationMode = {}));
var IcuNormalizationType;
(function (IcuNormalizationType) {
    IcuNormalizationType["nfc"] = "nfc";
    IcuNormalizationType["nfkc"] = "nfkc";
    IcuNormalizationType["nfkc_cf"] = "nfkc_cf";
})(IcuNormalizationType = exports.IcuNormalizationType || (exports.IcuNormalizationType = {}));
var IcuTransformDirection;
(function (IcuTransformDirection) {
    IcuTransformDirection["forward"] = "forward";
    IcuTransformDirection["reverse"] = "reverse";
})(IcuTransformDirection = exports.IcuTransformDirection || (exports.IcuTransformDirection = {}));
var KuromojiTokenizationMode;
(function (KuromojiTokenizationMode) {
    KuromojiTokenizationMode["normal"] = "normal";
    KuromojiTokenizationMode["search"] = "search";
    KuromojiTokenizationMode["extended"] = "extended";
})(KuromojiTokenizationMode = exports.KuromojiTokenizationMode || (exports.KuromojiTokenizationMode = {}));
var PhoneticEncoder;
(function (PhoneticEncoder) {
    PhoneticEncoder["metaphone"] = "metaphone";
    PhoneticEncoder["double_metaphone"] = "double_metaphone";
    PhoneticEncoder["soundex"] = "soundex";
    PhoneticEncoder["refined_soundex"] = "refined_soundex";
    PhoneticEncoder["caverphone1"] = "caverphone1";
    PhoneticEncoder["caverphone2"] = "caverphone2";
    PhoneticEncoder["cologne"] = "cologne";
    PhoneticEncoder["nysiis"] = "nysiis";
    PhoneticEncoder["koelnerphonetik"] = "koelnerphonetik";
    PhoneticEncoder["haasephonetik"] = "haasephonetik";
    PhoneticEncoder["beider_morse"] = "beider_morse";
    PhoneticEncoder["daitch_mokotoff"] = "daitch_mokotoff";
})(PhoneticEncoder = exports.PhoneticEncoder || (exports.PhoneticEncoder = {}));
var PhoneticLanguage;
(function (PhoneticLanguage) {
    PhoneticLanguage["any"] = "any";
    PhoneticLanguage["comomon"] = "comomon";
    PhoneticLanguage["cyrillic"] = "cyrillic";
    PhoneticLanguage["english"] = "english";
    PhoneticLanguage["french"] = "french";
    PhoneticLanguage["german"] = "german";
    PhoneticLanguage["hebrew"] = "hebrew";
    PhoneticLanguage["hungarian"] = "hungarian";
    PhoneticLanguage["polish"] = "polish";
    PhoneticLanguage["romanian"] = "romanian";
    PhoneticLanguage["russian"] = "russian";
    PhoneticLanguage["spanish"] = "spanish";
})(PhoneticLanguage = exports.PhoneticLanguage || (exports.PhoneticLanguage = {}));
var PhoneticNameType;
(function (PhoneticNameType) {
    PhoneticNameType["generic"] = "generic";
    PhoneticNameType["ashkenazi"] = "ashkenazi";
    PhoneticNameType["sephardic"] = "sephardic";
})(PhoneticNameType = exports.PhoneticNameType || (exports.PhoneticNameType = {}));
var PhoneticRuleType;
(function (PhoneticRuleType) {
    PhoneticRuleType["approx"] = "approx";
    PhoneticRuleType["exact"] = "exact";
})(PhoneticRuleType = exports.PhoneticRuleType || (exports.PhoneticRuleType = {}));
var KeepTypesMode;
(function (KeepTypesMode) {
    KeepTypesMode["include"] = "include";
    KeepTypesMode["exclude"] = "exclude";
})(KeepTypesMode = exports.KeepTypesMode || (exports.KeepTypesMode = {}));
var DelimitedPayloadEncoding;
(function (DelimitedPayloadEncoding) {
    DelimitedPayloadEncoding["int"] = "int";
    DelimitedPayloadEncoding["float"] = "float";
    DelimitedPayloadEncoding["identity"] = "identity";
})(DelimitedPayloadEncoding = exports.DelimitedPayloadEncoding || (exports.DelimitedPayloadEncoding = {}));
var EdgeNGramSide;
(function (EdgeNGramSide) {
    EdgeNGramSide["front"] = "front";
    EdgeNGramSide["back"] = "back";
})(EdgeNGramSide = exports.EdgeNGramSide || (exports.EdgeNGramSide = {}));
var SynonymFormat;
(function (SynonymFormat) {
    SynonymFormat["solr"] = "solr";
    SynonymFormat["wordnet"] = "wordnet";
})(SynonymFormat = exports.SynonymFormat || (exports.SynonymFormat = {}));
var NoriDecompoundMode;
(function (NoriDecompoundMode) {
    NoriDecompoundMode["discard"] = "discard";
    NoriDecompoundMode["none"] = "none";
    NoriDecompoundMode["mixed"] = "mixed";
})(NoriDecompoundMode = exports.NoriDecompoundMode || (exports.NoriDecompoundMode = {}));
var TokenChar;
(function (TokenChar) {
    TokenChar["letter"] = "letter";
    TokenChar["digit"] = "digit";
    TokenChar["whitespace"] = "whitespace";
    TokenChar["punctuation"] = "punctuation";
    TokenChar["symbol"] = "symbol";
})(TokenChar = exports.TokenChar || (exports.TokenChar = {}));
var ClusterStatus;
(function (ClusterStatus) {
    ClusterStatus["green"] = "green";
    ClusterStatus["yellow"] = "yellow";
    ClusterStatus["red"] = "red";
})(ClusterStatus = exports.ClusterStatus || (exports.ClusterStatus = {}));
var AllocationExplainDecision;
(function (AllocationExplainDecision) {
    AllocationExplainDecision["NO"] = "NO";
    AllocationExplainDecision["YES"] = "YES";
    AllocationExplainDecision["THROTTLE"] = "THROTTLE";
    AllocationExplainDecision["ALWAYS"] = "ALWAYS";
})(AllocationExplainDecision = exports.AllocationExplainDecision || (exports.AllocationExplainDecision = {}));
var Decision;
(function (Decision) {
    Decision["yes"] = "yes";
    Decision["no"] = "no";
    Decision["worse_balance"] = "worse_balance";
    Decision["throttled"] = "throttled";
    Decision["awaiting_info"] = "awaiting_info";
    Decision["allocation_delayed"] = "allocation_delayed";
    Decision["no_valid_shard_copy"] = "no_valid_shard_copy";
    Decision["no_attempt"] = "no_attempt";
})(Decision = exports.Decision || (exports.Decision = {}));
var StoreCopy;
(function (StoreCopy) {
    StoreCopy["NONE"] = "NONE";
    StoreCopy["AVAILABLE"] = "AVAILABLE";
    StoreCopy["CORRUPT"] = "CORRUPT";
    StoreCopy["IO_ERROR"] = "IO_ERROR";
    StoreCopy["STALE"] = "STALE";
    StoreCopy["UNKNOWN"] = "UNKNOWN";
})(StoreCopy = exports.StoreCopy || (exports.StoreCopy = {}));
var UnassignedInformationReason;
(function (UnassignedInformationReason) {
    UnassignedInformationReason["INDEX_CREATED"] = "INDEX_CREATED";
    UnassignedInformationReason["CLUSTER_RECOVERED"] = "CLUSTER_RECOVERED";
    UnassignedInformationReason["INDEX_REOPENED"] = "INDEX_REOPENED";
    UnassignedInformationReason["DANGLING_INDEX_IMPORTED"] = "DANGLING_INDEX_IMPORTED";
    UnassignedInformationReason["NEW_INDEX_RESTORED"] = "NEW_INDEX_RESTORED";
    UnassignedInformationReason["EXISTING_INDEX_RESTORED"] = "EXISTING_INDEX_RESTORED";
    UnassignedInformationReason["REPLICA_ADDED"] = "REPLICA_ADDED";
    UnassignedInformationReason["ALLOCATION_FAILED"] = "ALLOCATION_FAILED";
    UnassignedInformationReason["NODE_LEFT"] = "NODE_LEFT";
    UnassignedInformationReason["REROUTE_CANCELLED"] = "REROUTE_CANCELLED";
    UnassignedInformationReason["REINITIALIZED"] = "REINITIALIZED";
    UnassignedInformationReason["REALLOCATED_REPLICA"] = "REALLOCATED_REPLICA";
    UnassignedInformationReason["PRIMARY_FAILED"] = "PRIMARY_FAILED";
    UnassignedInformationReason["FORCED_EMPTY_PRIMARY"] = "FORCED_EMPTY_PRIMARY";
    UnassignedInformationReason["MANUAL_ALLOCATION"] = "MANUAL_ALLOCATION";
})(UnassignedInformationReason = exports.UnassignedInformationReason || (exports.UnassignedInformationReason = {}));
var NodeRole;
(function (NodeRole) {
    NodeRole["master"] = "master";
    NodeRole["data"] = "data";
    NodeRole["client"] = "client";
    NodeRole["ingest"] = "ingest";
    NodeRole["ml"] = "ml";
})(NodeRole = exports.NodeRole || (exports.NodeRole = {}));
var Bytes;
(function (Bytes) {
    Bytes["b"] = "b";
    Bytes["k"] = "k";
    Bytes["kb"] = "kb";
    Bytes["m"] = "m";
    Bytes["mb"] = "mb";
    Bytes["g"] = "g";
    Bytes["gb"] = "gb";
    Bytes["t"] = "t";
    Bytes["tb"] = "tb";
    Bytes["p"] = "p";
    Bytes["pb"] = "pb";
})(Bytes = exports.Bytes || (exports.Bytes = {}));
var Conflicts;
(function (Conflicts) {
    Conflicts["abort"] = "abort";
    Conflicts["proceed"] = "proceed";
})(Conflicts = exports.Conflicts || (exports.Conflicts = {}));
var DefaultOperator;
(function (DefaultOperator) {
    DefaultOperator["AND"] = "AND";
    DefaultOperator["OR"] = "OR";
})(DefaultOperator = exports.DefaultOperator || (exports.DefaultOperator = {}));
var ExpandWildcards;
(function (ExpandWildcards) {
    ExpandWildcards["open"] = "open";
    ExpandWildcards["closed"] = "closed";
    ExpandWildcards["none"] = "none";
    ExpandWildcards["all"] = "all";
})(ExpandWildcards = exports.ExpandWildcards || (exports.ExpandWildcards = {}));
var GeoShapeFormat;
(function (GeoShapeFormat) {
    GeoShapeFormat["GeoJson"] = "GeoJson";
    GeoShapeFormat["WellKnownText"] = "WellKnownText";
})(GeoShapeFormat = exports.GeoShapeFormat || (exports.GeoShapeFormat = {}));
var GroupBy;
(function (GroupBy) {
    GroupBy["nodes"] = "nodes";
    GroupBy["parents"] = "parents";
    GroupBy["none"] = "none";
})(GroupBy = exports.GroupBy || (exports.GroupBy = {}));
var Health;
(function (Health) {
    Health["green"] = "green";
    Health["yellow"] = "yellow";
    Health["red"] = "red";
})(Health = exports.Health || (exports.Health = {}));
var HttpMethod;
(function (HttpMethod) {
    HttpMethod["GET"] = "GET";
    HttpMethod["POST"] = "POST";
    HttpMethod["PUT"] = "PUT";
    HttpMethod["DELETE"] = "DELETE";
    HttpMethod["HEAD"] = "HEAD";
})(HttpMethod = exports.HttpMethod || (exports.HttpMethod = {}));
var Level;
(function (Level) {
    Level["cluster"] = "cluster";
    Level["indices"] = "indices";
    Level["shards"] = "shards";
})(Level = exports.Level || (exports.Level = {}));
var OpType;
(function (OpType) {
    OpType["index"] = "index";
    OpType["create"] = "create";
})(OpType = exports.OpType || (exports.OpType = {}));
var PipelineFailure;
(function (PipelineFailure) {
    PipelineFailure["BadAuthentication"] = "BadAuthentication";
    PipelineFailure["BadResponse"] = "BadResponse";
    PipelineFailure["PingFailure"] = "PingFailure";
    PipelineFailure["SniffFailure"] = "SniffFailure";
    PipelineFailure["CouldNotStartSniffOnStartup"] = "CouldNotStartSniffOnStartup";
    PipelineFailure["MaxTimeoutReached"] = "MaxTimeoutReached";
    PipelineFailure["MaxRetriesReached"] = "MaxRetriesReached";
    PipelineFailure["Unexpected"] = "Unexpected";
    PipelineFailure["BadRequest"] = "BadRequest";
    PipelineFailure["NoNodesAttempted"] = "NoNodesAttempted";
})(PipelineFailure = exports.PipelineFailure || (exports.PipelineFailure = {}));
var PostType;
(function (PostType) {
    PostType["ByteArray"] = "ByteArray";
    PostType["LiteralString"] = "LiteralString";
    PostType["EnumerableOfString"] = "EnumerableOfString";
    PostType["EnumerableOfObject"] = "EnumerableOfObject";
    PostType["Serializable"] = "Serializable";
})(PostType = exports.PostType || (exports.PostType = {}));
var Refresh;
(function (Refresh) {
    Refresh["true"] = "true";
    Refresh["false"] = "false";
    Refresh["wait_for"] = "wait_for";
})(Refresh = exports.Refresh || (exports.Refresh = {}));
var SearchType;
(function (SearchType) {
    SearchType["query_then_fetch"] = "query_then_fetch";
    SearchType["dfs_query_then_fetch"] = "dfs_query_then_fetch";
})(SearchType = exports.SearchType || (exports.SearchType = {}));
var Size;
(function (Size) {
    Size["Raw"] = "Raw";
    Size["k"] = "k";
    Size["m"] = "m";
    Size["g"] = "g";
    Size["t"] = "t";
    Size["p"] = "p";
})(Size = exports.Size || (exports.Size = {}));
var SuggestMode;
(function (SuggestMode) {
    SuggestMode["missing"] = "missing";
    SuggestMode["popular"] = "popular";
    SuggestMode["always"] = "always";
})(SuggestMode = exports.SuggestMode || (exports.SuggestMode = {}));
var ThreadType;
(function (ThreadType) {
    ThreadType["cpu"] = "cpu";
    ThreadType["wait"] = "wait";
    ThreadType["block"] = "block";
})(ThreadType = exports.ThreadType || (exports.ThreadType = {}));
var VersionType;
(function (VersionType) {
    VersionType["internal"] = "internal";
    VersionType["external"] = "external";
    VersionType["external_gte"] = "external_gte";
    VersionType["force"] = "force";
})(VersionType = exports.VersionType || (exports.VersionType = {}));
var WaitForEvents;
(function (WaitForEvents) {
    WaitForEvents["immediate"] = "immediate";
    WaitForEvents["urgent"] = "urgent";
    WaitForEvents["high"] = "high";
    WaitForEvents["normal"] = "normal";
    WaitForEvents["low"] = "low";
    WaitForEvents["languid"] = "languid";
})(WaitForEvents = exports.WaitForEvents || (exports.WaitForEvents = {}));
var WaitForStatus;
(function (WaitForStatus) {
    WaitForStatus["green"] = "green";
    WaitForStatus["yellow"] = "yellow";
    WaitForStatus["red"] = "red";
})(WaitForStatus = exports.WaitForStatus || (exports.WaitForStatus = {}));
var DateMathOperation;
(function (DateMathOperation) {
    DateMathOperation["+"] = "+";
    DateMathOperation["-"] = "-";
})(DateMathOperation = exports.DateMathOperation || (exports.DateMathOperation = {}));
var DateMathTimeUnit;
(function (DateMathTimeUnit) {
    DateMathTimeUnit["s"] = "s";
    DateMathTimeUnit["m"] = "m";
    DateMathTimeUnit["h"] = "h";
    DateMathTimeUnit["d"] = "d";
    DateMathTimeUnit["w"] = "w";
    DateMathTimeUnit["M"] = "M";
    DateMathTimeUnit["y"] = "y";
})(DateMathTimeUnit = exports.DateMathTimeUnit || (exports.DateMathTimeUnit = {}));
var DistanceUnit;
(function (DistanceUnit) {
    DistanceUnit["in"] = "in";
    DistanceUnit["ft"] = "ft";
    DistanceUnit["yd"] = "yd";
    DistanceUnit["mi"] = "mi";
    DistanceUnit["nmi"] = "nmi";
    DistanceUnit["km"] = "km";
    DistanceUnit["m"] = "m";
    DistanceUnit["cm"] = "cm";
    DistanceUnit["mm"] = "mm";
})(DistanceUnit = exports.DistanceUnit || (exports.DistanceUnit = {}));
var GeoDistanceType;
(function (GeoDistanceType) {
    GeoDistanceType["arc"] = "arc";
    GeoDistanceType["plane"] = "plane";
})(GeoDistanceType = exports.GeoDistanceType || (exports.GeoDistanceType = {}));
var GeoShapeRelation;
(function (GeoShapeRelation) {
    GeoShapeRelation["intersects"] = "intersects";
    GeoShapeRelation["disjoint"] = "disjoint";
    GeoShapeRelation["within"] = "within";
    GeoShapeRelation["contains"] = "contains";
})(GeoShapeRelation = exports.GeoShapeRelation || (exports.GeoShapeRelation = {}));
var ShapeRelation;
(function (ShapeRelation) {
    ShapeRelation["intersects"] = "intersects";
    ShapeRelation["disjoint"] = "disjoint";
    ShapeRelation["within"] = "within";
})(ShapeRelation = exports.ShapeRelation || (exports.ShapeRelation = {}));
var TimeUnit;
(function (TimeUnit) {
    TimeUnit["nanos"] = "nanos";
    TimeUnit["micros"] = "micros";
    TimeUnit["ms"] = "ms";
    TimeUnit["s"] = "s";
    TimeUnit["m"] = "m";
    TimeUnit["h"] = "h";
    TimeUnit["d"] = "d";
})(TimeUnit = exports.TimeUnit || (exports.TimeUnit = {}));
var Result;
(function (Result) {
    Result["Error"] = "Error";
    Result["created"] = "created";
    Result["updated"] = "updated";
    Result["deleted"] = "deleted";
    Result["not_found"] = "not_found";
    Result["noop"] = "noop";
})(Result = exports.Result || (exports.Result = {}));
var RecoveryInitialShards;
(function (RecoveryInitialShards) {
    RecoveryInitialShards["quorem"] = "quorem";
    RecoveryInitialShards["quorem-1"] = "quorem-1";
    RecoveryInitialShards["full"] = "full";
    RecoveryInitialShards["full-1"] = "full-1";
})(RecoveryInitialShards = exports.RecoveryInitialShards || (exports.RecoveryInitialShards = {}));
var LogLevel;
(function (LogLevel) {
    LogLevel["error"] = "error";
    LogLevel["warn"] = "warn";
    LogLevel["info"] = "info";
    LogLevel["debug"] = "debug";
    LogLevel["trace"] = "trace";
})(LogLevel = exports.LogLevel || (exports.LogLevel = {}));
var IndexSortMissing;
(function (IndexSortMissing) {
    IndexSortMissing["_first"] = "_first";
    IndexSortMissing["_last"] = "_last";
})(IndexSortMissing = exports.IndexSortMissing || (exports.IndexSortMissing = {}));
var IndexSortMode;
(function (IndexSortMode) {
    IndexSortMode["min"] = "min";
    IndexSortMode["max"] = "max";
})(IndexSortMode = exports.IndexSortMode || (exports.IndexSortMode = {}));
var IndexSortOrder;
(function (IndexSortOrder) {
    IndexSortOrder["asc"] = "asc";
    IndexSortOrder["desc"] = "desc";
})(IndexSortOrder = exports.IndexSortOrder || (exports.IndexSortOrder = {}));
var FileSystemStorageImplementation;
(function (FileSystemStorageImplementation) {
    FileSystemStorageImplementation["simplefs"] = "simplefs";
    FileSystemStorageImplementation["niofs"] = "niofs";
    FileSystemStorageImplementation["mmapfs"] = "mmapfs";
    FileSystemStorageImplementation["default_fs"] = "default_fs";
})(FileSystemStorageImplementation = exports.FileSystemStorageImplementation || (exports.FileSystemStorageImplementation = {}));
var TranslogDurability;
(function (TranslogDurability) {
    TranslogDurability["request"] = "request";
    TranslogDurability["async"] = "async";
})(TranslogDurability = exports.TranslogDurability || (exports.TranslogDurability = {}));
var Normalization;
(function (Normalization) {
    Normalization["no"] = "no";
    Normalization["h1"] = "h1";
    Normalization["h2"] = "h2";
    Normalization["h3"] = "h3";
    Normalization["z"] = "z";
})(Normalization = exports.Normalization || (exports.Normalization = {}));
var DFIIndependenceMeasure;
(function (DFIIndependenceMeasure) {
    DFIIndependenceMeasure["standardized"] = "standardized";
    DFIIndependenceMeasure["saturated"] = "saturated";
    DFIIndependenceMeasure["chisquared"] = "chisquared";
})(DFIIndependenceMeasure = exports.DFIIndependenceMeasure || (exports.DFIIndependenceMeasure = {}));
var DFRAfterEffect;
(function (DFRAfterEffect) {
    DFRAfterEffect["no"] = "no";
    DFRAfterEffect["b"] = "b";
    DFRAfterEffect["l"] = "l";
})(DFRAfterEffect = exports.DFRAfterEffect || (exports.DFRAfterEffect = {}));
var DFRBasicModel;
(function (DFRBasicModel) {
    DFRBasicModel["be"] = "be";
    DFRBasicModel["d"] = "d";
    DFRBasicModel["g"] = "g";
    DFRBasicModel["if"] = "if";
    DFRBasicModel["in"] = "in";
    DFRBasicModel["ine"] = "ine";
    DFRBasicModel["p"] = "p";
})(DFRBasicModel = exports.DFRBasicModel || (exports.DFRBasicModel = {}));
var IBDistribution;
(function (IBDistribution) {
    IBDistribution["ll"] = "ll";
    IBDistribution["spl"] = "spl";
})(IBDistribution = exports.IBDistribution || (exports.IBDistribution = {}));
var IBLambda;
(function (IBLambda) {
    IBLambda["df"] = "df";
    IBLambda["ttf"] = "ttf";
})(IBLambda = exports.IBLambda || (exports.IBLambda = {}));
var ShardStoreAllocation;
(function (ShardStoreAllocation) {
    ShardStoreAllocation["primary"] = "primary";
    ShardStoreAllocation["replica"] = "replica";
    ShardStoreAllocation["unused"] = "unused";
})(ShardStoreAllocation = exports.ShardStoreAllocation || (exports.ShardStoreAllocation = {}));
var ShardRoutingState;
(function (ShardRoutingState) {
    ShardRoutingState["UNASSIGNED"] = "UNASSIGNED";
    ShardRoutingState["INITIALIZING"] = "INITIALIZING";
    ShardRoutingState["STARTED"] = "STARTED";
    ShardRoutingState["RELOCATING"] = "RELOCATING";
})(ShardRoutingState = exports.ShardRoutingState || (exports.ShardRoutingState = {}));
var ConvertProcessorType;
(function (ConvertProcessorType) {
    ConvertProcessorType["integer"] = "integer";
    ConvertProcessorType["long"] = "long";
    ConvertProcessorType["float"] = "float";
    ConvertProcessorType["double"] = "double";
    ConvertProcessorType["string"] = "string";
    ConvertProcessorType["boolean"] = "boolean";
    ConvertProcessorType["auto"] = "auto";
})(ConvertProcessorType = exports.ConvertProcessorType || (exports.ConvertProcessorType = {}));
var DateRounding;
(function (DateRounding) {
    DateRounding["s"] = "s";
    DateRounding["m"] = "m";
    DateRounding["h"] = "h";
    DateRounding["d"] = "d";
    DateRounding["w"] = "w";
    DateRounding["M"] = "M";
    DateRounding["y"] = "y";
})(DateRounding = exports.DateRounding || (exports.DateRounding = {}));
var ShapeType;
(function (ShapeType) {
    ShapeType["geo_shape"] = "geo_shape";
    ShapeType["shape"] = "shape";
})(ShapeType = exports.ShapeType || (exports.ShapeType = {}));
var UserAgentProperty;
(function (UserAgentProperty) {
    UserAgentProperty["NAME"] = "NAME";
    UserAgentProperty["MAJOR"] = "MAJOR";
    UserAgentProperty["MINOR"] = "MINOR";
    UserAgentProperty["PATCH"] = "PATCH";
    UserAgentProperty["OS"] = "OS";
    UserAgentProperty["OS_NAME"] = "OS_NAME";
    UserAgentProperty["OS_MAJOR"] = "OS_MAJOR";
    UserAgentProperty["OS_MINOR"] = "OS_MINOR";
    UserAgentProperty["DEVICE"] = "DEVICE";
    UserAgentProperty["BUILD"] = "BUILD";
})(UserAgentProperty = exports.UserAgentProperty || (exports.UserAgentProperty = {}));
var DynamicMapping;
(function (DynamicMapping) {
    DynamicMapping["strict"] = "strict";
})(DynamicMapping = exports.DynamicMapping || (exports.DynamicMapping = {}));
var TermVectorOption;
(function (TermVectorOption) {
    TermVectorOption["no"] = "no";
    TermVectorOption["yes"] = "yes";
    TermVectorOption["with_offsets"] = "with_offsets";
    TermVectorOption["with_positions"] = "with_positions";
    TermVectorOption["with_positions_offsets"] = "with_positions_offsets";
    TermVectorOption["with_positions_offsets_payloads"] = "with_positions_offsets_payloads";
})(TermVectorOption = exports.TermVectorOption || (exports.TermVectorOption = {}));
var MatchType;
(function (MatchType) {
    MatchType["simple"] = "simple";
    MatchType["regex"] = "regex";
})(MatchType = exports.MatchType || (exports.MatchType = {}));
var FieldType;
(function (FieldType) {
    FieldType["none"] = "none";
    FieldType["geo_point"] = "geo_point";
    FieldType["geo_shape"] = "geo_shape";
    FieldType["ip"] = "ip";
    FieldType["binary"] = "binary";
    FieldType["keyword"] = "keyword";
    FieldType["text"] = "text";
    FieldType["search_as_you_type"] = "search_as_you_type";
    FieldType["date"] = "date";
    FieldType["date_nanos"] = "date_nanos";
    FieldType["boolean"] = "boolean";
    FieldType["completion"] = "completion";
    FieldType["nested"] = "nested";
    FieldType["object"] = "object";
    FieldType["murmur3"] = "murmur3";
    FieldType["token_count"] = "token_count";
    FieldType["percolator"] = "percolator";
    FieldType["integer"] = "integer";
    FieldType["long"] = "long";
    FieldType["short"] = "short";
    FieldType["byte"] = "byte";
    FieldType["float"] = "float";
    FieldType["half_float"] = "half_float";
    FieldType["scaled_float"] = "scaled_float";
    FieldType["double"] = "double";
    FieldType["integer_range"] = "integer_range";
    FieldType["float_range"] = "float_range";
    FieldType["long_range"] = "long_range";
    FieldType["double_range"] = "double_range";
    FieldType["date_range"] = "date_range";
    FieldType["ip_range"] = "ip_range";
    FieldType["alias"] = "alias";
    FieldType["join"] = "join";
    FieldType["rank_feature"] = "rank_feature";
    FieldType["rank_features"] = "rank_features";
    FieldType["flattened"] = "flattened";
    FieldType["shape"] = "shape";
})(FieldType = exports.FieldType || (exports.FieldType = {}));
var NumberType;
(function (NumberType) {
    NumberType["float"] = "float";
    NumberType["half_float"] = "half_float";
    NumberType["scaled_float"] = "scaled_float";
    NumberType["double"] = "double";
    NumberType["integer"] = "integer";
    NumberType["long"] = "long";
    NumberType["short"] = "short";
    NumberType["byte"] = "byte";
})(NumberType = exports.NumberType || (exports.NumberType = {}));
var RangeType;
(function (RangeType) {
    RangeType["integer_range"] = "integer_range";
    RangeType["float_range"] = "float_range";
    RangeType["long_range"] = "long_range";
    RangeType["double_range"] = "double_range";
    RangeType["date_range"] = "date_range";
    RangeType["ip_range"] = "ip_range";
})(RangeType = exports.RangeType || (exports.RangeType = {}));
var IndexOptions;
(function (IndexOptions) {
    IndexOptions["docs"] = "docs";
    IndexOptions["freqs"] = "freqs";
    IndexOptions["positions"] = "positions";
    IndexOptions["offsets"] = "offsets";
})(IndexOptions = exports.IndexOptions || (exports.IndexOptions = {}));
var GeoOrientation;
(function (GeoOrientation) {
    GeoOrientation["ClockWise"] = "ClockWise";
    GeoOrientation["CounterClockWise"] = "CounterClockWise";
})(GeoOrientation = exports.GeoOrientation || (exports.GeoOrientation = {}));
var GeoStrategy;
(function (GeoStrategy) {
    GeoStrategy["recursive"] = "recursive";
    GeoStrategy["term"] = "term";
})(GeoStrategy = exports.GeoStrategy || (exports.GeoStrategy = {}));
var GeoTree;
(function (GeoTree) {
    GeoTree["geohash"] = "geohash";
    GeoTree["quadtree"] = "quadtree";
})(GeoTree = exports.GeoTree || (exports.GeoTree = {}));
var ShapeOrientation;
(function (ShapeOrientation) {
    ShapeOrientation["ClockWise"] = "ClockWise";
    ShapeOrientation["CounterClockWise"] = "CounterClockWise";
})(ShapeOrientation = exports.ShapeOrientation || (exports.ShapeOrientation = {}));
var AllocationEnable;
(function (AllocationEnable) {
    AllocationEnable["all"] = "all";
    AllocationEnable["primaries"] = "primaries";
    AllocationEnable["new_primaries"] = "new_primaries";
    AllocationEnable["none"] = "none";
})(AllocationEnable = exports.AllocationEnable || (exports.AllocationEnable = {}));
var AllowRebalance;
(function (AllowRebalance) {
    AllowRebalance["always"] = "always";
    AllowRebalance["indices_primaries_active"] = "indices_primaries_active";
    AllowRebalance["indices_all_active"] = "indices_all_active";
})(AllowRebalance = exports.AllowRebalance || (exports.AllowRebalance = {}));
var RebalanceEnable;
(function (RebalanceEnable) {
    RebalanceEnable["all"] = "all";
    RebalanceEnable["primaries"] = "primaries";
    RebalanceEnable["replicas"] = "replicas";
    RebalanceEnable["none"] = "none";
})(RebalanceEnable = exports.RebalanceEnable || (exports.RebalanceEnable = {}));
var FielddataLoading;
(function (FielddataLoading) {
    FielddataLoading["eager"] = "eager";
    FielddataLoading["eager_global_ordinals"] = "eager_global_ordinals";
})(FielddataLoading = exports.FielddataLoading || (exports.FielddataLoading = {}));
var GeoPointFielddataFormat;
(function (GeoPointFielddataFormat) {
    GeoPointFielddataFormat["array"] = "array";
    GeoPointFielddataFormat["doc_values"] = "doc_values";
    GeoPointFielddataFormat["compressed"] = "compressed";
    GeoPointFielddataFormat["disabled"] = "disabled";
})(GeoPointFielddataFormat = exports.GeoPointFielddataFormat || (exports.GeoPointFielddataFormat = {}));
var NumericFielddataFormat;
(function (NumericFielddataFormat) {
    NumericFielddataFormat["array"] = "array";
    NumericFielddataFormat["disabled"] = "disabled";
})(NumericFielddataFormat = exports.NumericFielddataFormat || (exports.NumericFielddataFormat = {}));
var StringFielddataFormat;
(function (StringFielddataFormat) {
    StringFielddataFormat["paged_bytes"] = "paged_bytes";
    StringFielddataFormat["disabled"] = "disabled";
})(StringFielddataFormat = exports.StringFielddataFormat || (exports.StringFielddataFormat = {}));
var ScriptLang;
(function (ScriptLang) {
    ScriptLang["painless"] = "painless";
    ScriptLang["expression"] = "expression";
    ScriptLang["mustache"] = "mustache";
})(ScriptLang = exports.ScriptLang || (exports.ScriptLang = {}));
var Operator;
(function (Operator) {
    Operator["and"] = "and";
    Operator["or"] = "or";
})(Operator = exports.Operator || (exports.Operator = {}));
var FunctionBoostMode;
(function (FunctionBoostMode) {
    FunctionBoostMode["multiply"] = "multiply";
    FunctionBoostMode["replace"] = "replace";
    FunctionBoostMode["sum"] = "sum";
    FunctionBoostMode["avg"] = "avg";
    FunctionBoostMode["max"] = "max";
    FunctionBoostMode["min"] = "min";
})(FunctionBoostMode = exports.FunctionBoostMode || (exports.FunctionBoostMode = {}));
var FunctionScoreMode;
(function (FunctionScoreMode) {
    FunctionScoreMode["multiply"] = "multiply";
    FunctionScoreMode["sum"] = "sum";
    FunctionScoreMode["avg"] = "avg";
    FunctionScoreMode["first"] = "first";
    FunctionScoreMode["max"] = "max";
    FunctionScoreMode["min"] = "min";
})(FunctionScoreMode = exports.FunctionScoreMode || (exports.FunctionScoreMode = {}));
var MultiValueMode;
(function (MultiValueMode) {
    MultiValueMode["min"] = "min";
    MultiValueMode["max"] = "max";
    MultiValueMode["avg"] = "avg";
    MultiValueMode["sum"] = "sum";
})(MultiValueMode = exports.MultiValueMode || (exports.MultiValueMode = {}));
var FieldValueFactorModifier;
(function (FieldValueFactorModifier) {
    FieldValueFactorModifier["none"] = "none";
    FieldValueFactorModifier["log"] = "log";
    FieldValueFactorModifier["log1p"] = "log1p";
    FieldValueFactorModifier["log2p"] = "log2p";
    FieldValueFactorModifier["ln"] = "ln";
    FieldValueFactorModifier["ln1p"] = "ln1p";
    FieldValueFactorModifier["ln2p"] = "ln2p";
    FieldValueFactorModifier["square"] = "square";
    FieldValueFactorModifier["sqrt"] = "sqrt";
    FieldValueFactorModifier["reciprocal"] = "reciprocal";
})(FieldValueFactorModifier = exports.FieldValueFactorModifier || (exports.FieldValueFactorModifier = {}));
var TextQueryType;
(function (TextQueryType) {
    TextQueryType["best_fields"] = "best_fields";
    TextQueryType["most_fields"] = "most_fields";
    TextQueryType["cross_fields"] = "cross_fields";
    TextQueryType["phrase"] = "phrase";
    TextQueryType["phrase_prefix"] = "phrase_prefix";
    TextQueryType["bool_prefix"] = "bool_prefix";
})(TextQueryType = exports.TextQueryType || (exports.TextQueryType = {}));
var ZeroTermsQuery;
(function (ZeroTermsQuery) {
    ZeroTermsQuery["all"] = "all";
    ZeroTermsQuery["none"] = "none";
})(ZeroTermsQuery = exports.ZeroTermsQuery || (exports.ZeroTermsQuery = {}));
var SimpleQueryStringFlags;
(function (SimpleQueryStringFlags) {
    SimpleQueryStringFlags["NONE"] = "NONE";
    SimpleQueryStringFlags["AND"] = "AND";
    SimpleQueryStringFlags["OR"] = "OR";
    SimpleQueryStringFlags["NOT"] = "NOT";
    SimpleQueryStringFlags["PREFIX"] = "PREFIX";
    SimpleQueryStringFlags["PHRASE"] = "PHRASE";
    SimpleQueryStringFlags["PRECEDENCE"] = "PRECEDENCE";
    SimpleQueryStringFlags["ESCAPE"] = "ESCAPE";
    SimpleQueryStringFlags["WHITESPACE"] = "WHITESPACE";
    SimpleQueryStringFlags["FUZZY"] = "FUZZY";
    SimpleQueryStringFlags["NEAR"] = "NEAR";
    SimpleQueryStringFlags["SLOP"] = "SLOP";
    SimpleQueryStringFlags["ALL"] = "ALL";
})(SimpleQueryStringFlags = exports.SimpleQueryStringFlags || (exports.SimpleQueryStringFlags = {}));
var GeoValidationMethod;
(function (GeoValidationMethod) {
    GeoValidationMethod["coerce"] = "coerce";
    GeoValidationMethod["ignore_malformed"] = "ignore_malformed";
    GeoValidationMethod["strict"] = "strict";
})(GeoValidationMethod = exports.GeoValidationMethod || (exports.GeoValidationMethod = {}));
var GeoExecution;
(function (GeoExecution) {
    GeoExecution["memory"] = "memory";
    GeoExecution["indexed"] = "indexed";
})(GeoExecution = exports.GeoExecution || (exports.GeoExecution = {}));
var CharacterType;
(function (CharacterType) {
    CharacterType["Whitespace"] = "Whitespace";
    CharacterType["Alpha"] = "Alpha";
    CharacterType["Comment"] = "Comment";
})(CharacterType = exports.CharacterType || (exports.CharacterType = {}));
var TokenType;
(function (TokenType) {
    TokenType["None"] = "None";
    TokenType["Word"] = "Word";
    TokenType["LParen"] = "LParen";
    TokenType["RParen"] = "RParen";
    TokenType["Comma"] = "Comma";
})(TokenType = exports.TokenType || (exports.TokenType = {}));
var ChildScoreMode;
(function (ChildScoreMode) {
    ChildScoreMode["none"] = "none";
    ChildScoreMode["avg"] = "avg";
    ChildScoreMode["sum"] = "sum";
    ChildScoreMode["max"] = "max";
    ChildScoreMode["min"] = "min";
})(ChildScoreMode = exports.ChildScoreMode || (exports.ChildScoreMode = {}));
var NestedScoreMode;
(function (NestedScoreMode) {
    NestedScoreMode["avg"] = "avg";
    NestedScoreMode["sum"] = "sum";
    NestedScoreMode["min"] = "min";
    NestedScoreMode["max"] = "max";
    NestedScoreMode["none"] = "none";
})(NestedScoreMode = exports.NestedScoreMode || (exports.NestedScoreMode = {}));
var RewriteMultiTerm;
(function (RewriteMultiTerm) {
    RewriteMultiTerm["constant_score"] = "constant_score";
    RewriteMultiTerm["scoring_boolean"] = "scoring_boolean";
    RewriteMultiTerm["constant_score_boolean"] = "constant_score_boolean";
    RewriteMultiTerm["top_terms_N"] = "top_terms_N";
    RewriteMultiTerm["top_terms_boost_N"] = "top_terms_boost_N";
    RewriteMultiTerm["top_terms_blended_freqs_N"] = "top_terms_blended_freqs_N";
})(RewriteMultiTerm = exports.RewriteMultiTerm || (exports.RewriteMultiTerm = {}));
var RangeRelation;
(function (RangeRelation) {
    RangeRelation["within"] = "within";
    RangeRelation["contains"] = "contains";
    RangeRelation["intersects"] = "intersects";
})(RangeRelation = exports.RangeRelation || (exports.RangeRelation = {}));
var VisitorScope;
(function (VisitorScope) {
    VisitorScope["Unknown"] = "Unknown";
    VisitorScope["Query"] = "Query";
    VisitorScope["Filter"] = "Filter";
    VisitorScope["Must"] = "Must";
    VisitorScope["MustNot"] = "MustNot";
    VisitorScope["Should"] = "Should";
    VisitorScope["PositiveQuery"] = "PositiveQuery";
    VisitorScope["NegativeQuery"] = "NegativeQuery";
    VisitorScope["Span"] = "Span";
})(VisitorScope = exports.VisitorScope || (exports.VisitorScope = {}));
var BoundaryScanner;
(function (BoundaryScanner) {
    BoundaryScanner["chars"] = "chars";
    BoundaryScanner["sentence"] = "sentence";
    BoundaryScanner["word"] = "word";
})(BoundaryScanner = exports.BoundaryScanner || (exports.BoundaryScanner = {}));
var HighlighterEncoder;
(function (HighlighterEncoder) {
    HighlighterEncoder["default"] = "default";
    HighlighterEncoder["html"] = "html";
})(HighlighterEncoder = exports.HighlighterEncoder || (exports.HighlighterEncoder = {}));
var HighlighterFragmenter;
(function (HighlighterFragmenter) {
    HighlighterFragmenter["simple"] = "simple";
    HighlighterFragmenter["span"] = "span";
})(HighlighterFragmenter = exports.HighlighterFragmenter || (exports.HighlighterFragmenter = {}));
var HighlighterOrder;
(function (HighlighterOrder) {
    HighlighterOrder["score"] = "score";
})(HighlighterOrder = exports.HighlighterOrder || (exports.HighlighterOrder = {}));
var HighlighterTagsSchema;
(function (HighlighterTagsSchema) {
    HighlighterTagsSchema["styled"] = "styled";
})(HighlighterTagsSchema = exports.HighlighterTagsSchema || (exports.HighlighterTagsSchema = {}));
var HighlighterType;
(function (HighlighterType) {
    HighlighterType["plain"] = "plain";
    HighlighterType["fvh"] = "fvh";
    HighlighterType["unified"] = "unified";
})(HighlighterType = exports.HighlighterType || (exports.HighlighterType = {}));
var TotalHitsRelation;
(function (TotalHitsRelation) {
    TotalHitsRelation["eq"] = "eq";
    TotalHitsRelation["gte"] = "gte";
})(TotalHitsRelation = exports.TotalHitsRelation || (exports.TotalHitsRelation = {}));
var ScoreMode;
(function (ScoreMode) {
    ScoreMode["avg"] = "avg";
    ScoreMode["max"] = "max";
    ScoreMode["min"] = "min";
    ScoreMode["multiply"] = "multiply";
    ScoreMode["total"] = "total";
})(ScoreMode = exports.ScoreMode || (exports.ScoreMode = {}));
var NumericType;
(function (NumericType) {
    NumericType["long"] = "long";
    NumericType["double"] = "double";
    NumericType["date"] = "date";
    NumericType["date_nanos"] = "date_nanos";
})(NumericType = exports.NumericType || (exports.NumericType = {}));
var SortMode;
(function (SortMode) {
    SortMode["min"] = "min";
    SortMode["max"] = "max";
    SortMode["sum"] = "sum";
    SortMode["avg"] = "avg";
    SortMode["median"] = "median";
})(SortMode = exports.SortMode || (exports.SortMode = {}));
var SortOrder;
(function (SortOrder) {
    SortOrder["asc"] = "asc";
    SortOrder["desc"] = "desc";
})(SortOrder = exports.SortOrder || (exports.SortOrder = {}));
var SortSpecialField;
(function (SortSpecialField) {
    SortSpecialField["_score"] = "_score";
    SortSpecialField["_doc"] = "_doc";
})(SortSpecialField = exports.SortSpecialField || (exports.SortSpecialField = {}));
var StringDistance;
(function (StringDistance) {
    StringDistance["internal"] = "internal";
    StringDistance["damerau_levenshtein"] = "damerau_levenshtein";
    StringDistance["levenshtein"] = "levenshtein";
    StringDistance["jaro_winkler"] = "jaro_winkler";
    StringDistance["ngram"] = "ngram";
})(StringDistance = exports.StringDistance || (exports.StringDistance = {}));
var SuggestSort;
(function (SuggestSort) {
    SuggestSort["score"] = "score";
    SuggestSort["frequency"] = "frequency";
})(SuggestSort = exports.SuggestSort || (exports.SuggestSort = {}));
var FollowerIndexStatus;
(function (FollowerIndexStatus) {
    FollowerIndexStatus["active"] = "active";
    FollowerIndexStatus["paused"] = "paused";
})(FollowerIndexStatus = exports.FollowerIndexStatus || (exports.FollowerIndexStatus = {}));
var LifecycleOperationMode;
(function (LifecycleOperationMode) {
    LifecycleOperationMode["RUNNING"] = "RUNNING";
    LifecycleOperationMode["STOPPING"] = "STOPPING";
    LifecycleOperationMode["STOPPED"] = "STOPPED";
})(LifecycleOperationMode = exports.LifecycleOperationMode || (exports.LifecycleOperationMode = {}));
var LicenseStatus;
(function (LicenseStatus) {
    LicenseStatus["active"] = "active";
    LicenseStatus["valid"] = "valid";
    LicenseStatus["invalid"] = "invalid";
    LicenseStatus["expired"] = "expired";
})(LicenseStatus = exports.LicenseStatus || (exports.LicenseStatus = {}));
var LicenseType;
(function (LicenseType) {
    LicenseType["missing"] = "missing";
    LicenseType["trial"] = "trial";
    LicenseType["basic"] = "basic";
    LicenseType["standard"] = "standard";
    LicenseType["dev"] = "dev";
    LicenseType["silver"] = "silver";
    LicenseType["gold"] = "gold";
    LicenseType["platinum"] = "platinum";
})(LicenseType = exports.LicenseType || (exports.LicenseType = {}));
var ChunkingMode;
(function (ChunkingMode) {
    ChunkingMode["auto"] = "auto";
    ChunkingMode["manual"] = "manual";
    ChunkingMode["off"] = "off";
})(ChunkingMode = exports.ChunkingMode || (exports.ChunkingMode = {}));
var DatafeedState;
(function (DatafeedState) {
    DatafeedState["started"] = "started";
    DatafeedState["stopped"] = "stopped";
    DatafeedState["starting"] = "starting";
    DatafeedState["stopping"] = "stopping";
})(DatafeedState = exports.DatafeedState || (exports.DatafeedState = {}));
var JobState;
(function (JobState) {
    JobState["closing"] = "closing";
    JobState["closed"] = "closed";
    JobState["opened"] = "opened";
    JobState["failed"] = "failed";
    JobState["opening"] = "opening";
})(JobState = exports.JobState || (exports.JobState = {}));
var MemoryStatus;
(function (MemoryStatus) {
    MemoryStatus["ok"] = "ok";
    MemoryStatus["soft_limit"] = "soft_limit";
    MemoryStatus["hard_limit"] = "hard_limit";
})(MemoryStatus = exports.MemoryStatus || (exports.MemoryStatus = {}));
var AppliesTo;
(function (AppliesTo) {
    AppliesTo["actual"] = "actual";
    AppliesTo["typical"] = "typical";
    AppliesTo["diff_from_typical"] = "diff_from_typical";
    AppliesTo["time"] = "time";
})(AppliesTo = exports.AppliesTo || (exports.AppliesTo = {}));
var ConditionOperator;
(function (ConditionOperator) {
    ConditionOperator["gt"] = "gt";
    ConditionOperator["gte"] = "gte";
    ConditionOperator["lt"] = "lt";
    ConditionOperator["lte"] = "lte";
})(ConditionOperator = exports.ConditionOperator || (exports.ConditionOperator = {}));
var CountFunction;
(function (CountFunction) {
    CountFunction["Count"] = "Count";
    CountFunction["HighCount"] = "HighCount";
    CountFunction["LowCount"] = "LowCount";
})(CountFunction = exports.CountFunction || (exports.CountFunction = {}));
var DistinctCountFunction;
(function (DistinctCountFunction) {
    DistinctCountFunction["DistinctCount"] = "DistinctCount";
    DistinctCountFunction["LowDistinctCount"] = "LowDistinctCount";
    DistinctCountFunction["HighDistinctCount"] = "HighDistinctCount";
})(DistinctCountFunction = exports.DistinctCountFunction || (exports.DistinctCountFunction = {}));
var GeographicFunction;
(function (GeographicFunction) {
    GeographicFunction["LatLong"] = "LatLong";
})(GeographicFunction = exports.GeographicFunction || (exports.GeographicFunction = {}));
var InfoContentFunction;
(function (InfoContentFunction) {
    InfoContentFunction["InfoContent"] = "InfoContent";
    InfoContentFunction["HighInfoContent"] = "HighInfoContent";
    InfoContentFunction["LowInfoContent"] = "LowInfoContent";
})(InfoContentFunction = exports.InfoContentFunction || (exports.InfoContentFunction = {}));
var MetricFunction;
(function (MetricFunction) {
    MetricFunction["Min"] = "Min";
    MetricFunction["Max"] = "Max";
    MetricFunction["Median"] = "Median";
    MetricFunction["HighMedian"] = "HighMedian";
    MetricFunction["LowMedian"] = "LowMedian";
    MetricFunction["Mean"] = "Mean";
    MetricFunction["HighMean"] = "HighMean";
    MetricFunction["LowMean"] = "LowMean";
    MetricFunction["Metric"] = "Metric";
    MetricFunction["Varp"] = "Varp";
    MetricFunction["HighVarp"] = "HighVarp";
    MetricFunction["LowVarp"] = "LowVarp";
})(MetricFunction = exports.MetricFunction || (exports.MetricFunction = {}));
var NonNullSumFunction;
(function (NonNullSumFunction) {
    NonNullSumFunction["NonNullSum"] = "NonNullSum";
    NonNullSumFunction["HighNonNullSum"] = "HighNonNullSum";
    NonNullSumFunction["LowNonNullSum"] = "LowNonNullSum";
})(NonNullSumFunction = exports.NonNullSumFunction || (exports.NonNullSumFunction = {}));
var NonZeroCountFunction;
(function (NonZeroCountFunction) {
    NonZeroCountFunction["NonZeroCount"] = "NonZeroCount";
    NonZeroCountFunction["LowNonZeroCount"] = "LowNonZeroCount";
    NonZeroCountFunction["HighNonZeroCount"] = "HighNonZeroCount";
})(NonZeroCountFunction = exports.NonZeroCountFunction || (exports.NonZeroCountFunction = {}));
var RareFunction;
(function (RareFunction) {
    RareFunction["Rare"] = "Rare";
    RareFunction["FreqRare"] = "FreqRare";
})(RareFunction = exports.RareFunction || (exports.RareFunction = {}));
var RuleAction;
(function (RuleAction) {
    RuleAction["skip_result"] = "skip_result";
    RuleAction["skip_model_update"] = "skip_model_update";
})(RuleAction = exports.RuleAction || (exports.RuleAction = {}));
var RuleFilterType;
(function (RuleFilterType) {
    RuleFilterType["include"] = "include";
    RuleFilterType["exclude"] = "exclude";
})(RuleFilterType = exports.RuleFilterType || (exports.RuleFilterType = {}));
var SumFunction;
(function (SumFunction) {
    SumFunction["Sum"] = "Sum";
    SumFunction["HighSum"] = "HighSum";
    SumFunction["LowSum"] = "LowSum";
})(SumFunction = exports.SumFunction || (exports.SumFunction = {}));
var TimeFunction;
(function (TimeFunction) {
    TimeFunction["TimeOfDay"] = "TimeOfDay";
    TimeFunction["TimeOfWeek"] = "TimeOfWeek";
})(TimeFunction = exports.TimeFunction || (exports.TimeFunction = {}));
var ExcludeFrequent;
(function (ExcludeFrequent) {
    ExcludeFrequent["all"] = "all";
    ExcludeFrequent["none"] = "none";
    ExcludeFrequent["by"] = "by";
    ExcludeFrequent["over"] = "over";
})(ExcludeFrequent = exports.ExcludeFrequent || (exports.ExcludeFrequent = {}));
var DeprecationWarningLevel;
(function (DeprecationWarningLevel) {
    DeprecationWarningLevel["none"] = "none";
    DeprecationWarningLevel["info"] = "info";
    DeprecationWarningLevel["warning"] = "warning";
    DeprecationWarningLevel["critical"] = "critical";
})(DeprecationWarningLevel = exports.DeprecationWarningLevel || (exports.DeprecationWarningLevel = {}));
var IndexingJobState;
(function (IndexingJobState) {
    IndexingJobState["started"] = "started";
    IndexingJobState["indexing"] = "indexing";
    IndexingJobState["stopping"] = "stopping";
    IndexingJobState["stopped"] = "stopped";
    IndexingJobState["aborting"] = "aborting";
})(IndexingJobState = exports.IndexingJobState || (exports.IndexingJobState = {}));
var RollupMetric;
(function (RollupMetric) {
    RollupMetric["min"] = "min";
    RollupMetric["max"] = "max";
    RollupMetric["sum"] = "sum";
    RollupMetric["avg"] = "avg";
    RollupMetric["value_count"] = "value_count";
})(RollupMetric = exports.RollupMetric || (exports.RollupMetric = {}));
var AccessTokenGrantType;
(function (AccessTokenGrantType) {
    AccessTokenGrantType["password"] = "password";
})(AccessTokenGrantType = exports.AccessTokenGrantType || (exports.AccessTokenGrantType = {}));
var AcknowledgementState;
(function (AcknowledgementState) {
    AcknowledgementState["awaits_successful_execution"] = "awaits_successful_execution";
    AcknowledgementState["ackable"] = "ackable";
    AcknowledgementState["acked"] = "acked";
})(AcknowledgementState = exports.AcknowledgementState || (exports.AcknowledgementState = {}));
var ActionType;
(function (ActionType) {
    ActionType["email"] = "email";
    ActionType["webhook"] = "webhook";
    ActionType["index"] = "index";
    ActionType["logging"] = "logging";
    ActionType["slack"] = "slack";
    ActionType["pagerduty"] = "pagerduty";
})(ActionType = exports.ActionType || (exports.ActionType = {}));
var DataAttachmentFormat;
(function (DataAttachmentFormat) {
    DataAttachmentFormat["json"] = "json";
    DataAttachmentFormat["yaml"] = "yaml";
})(DataAttachmentFormat = exports.DataAttachmentFormat || (exports.DataAttachmentFormat = {}));
var EmailPriority;
(function (EmailPriority) {
    EmailPriority["lowest"] = "lowest";
    EmailPriority["low"] = "low";
    EmailPriority["normal"] = "normal";
    EmailPriority["high"] = "high";
    EmailPriority["highest"] = "highest";
})(EmailPriority = exports.EmailPriority || (exports.EmailPriority = {}));
var PagerDutyContextType;
(function (PagerDutyContextType) {
    PagerDutyContextType["link"] = "link";
    PagerDutyContextType["image"] = "image";
})(PagerDutyContextType = exports.PagerDutyContextType || (exports.PagerDutyContextType = {}));
var PagerDutyEventType;
(function (PagerDutyEventType) {
    PagerDutyEventType["trigger"] = "trigger";
    PagerDutyEventType["resolve"] = "resolve";
    PagerDutyEventType["acknowledge"] = "acknowledge";
})(PagerDutyEventType = exports.PagerDutyEventType || (exports.PagerDutyEventType = {}));
var ConditionType;
(function (ConditionType) {
    ConditionType["always"] = "always";
    ConditionType["never"] = "never";
    ConditionType["script"] = "script";
    ConditionType["compare"] = "compare";
    ConditionType["array_compare"] = "array_compare";
})(ConditionType = exports.ConditionType || (exports.ConditionType = {}));
var Quantifier;
(function (Quantifier) {
    Quantifier["some"] = "some";
    Quantifier["all"] = "all";
})(Quantifier = exports.Quantifier || (exports.Quantifier = {}));
var ActionExecutionState;
(function (ActionExecutionState) {
    ActionExecutionState["awaits_execution"] = "awaits_execution";
    ActionExecutionState["checking"] = "checking";
    ActionExecutionState["execution_not_needed"] = "execution_not_needed";
    ActionExecutionState["throttled"] = "throttled";
    ActionExecutionState["executed"] = "executed";
    ActionExecutionState["failed"] = "failed";
    ActionExecutionState["deleted_while_queued"] = "deleted_while_queued";
    ActionExecutionState["not_executed_already_queued"] = "not_executed_already_queued";
})(ActionExecutionState = exports.ActionExecutionState || (exports.ActionExecutionState = {}));
var ActionExecutionMode;
(function (ActionExecutionMode) {
    ActionExecutionMode["simulate"] = "simulate";
    ActionExecutionMode["force_simulate"] = "force_simulate";
    ActionExecutionMode["execute"] = "execute";
    ActionExecutionMode["force_execute"] = "force_execute";
    ActionExecutionMode["skip"] = "skip";
})(ActionExecutionMode = exports.ActionExecutionMode || (exports.ActionExecutionMode = {}));
var Status;
(function (Status) {
    Status["success"] = "success";
    Status["failure"] = "failure";
    Status["simulated"] = "simulated";
    Status["throttled"] = "throttled";
})(Status = exports.Status || (exports.Status = {}));
var ConnectionScheme;
(function (ConnectionScheme) {
    ConnectionScheme["http"] = "http";
    ConnectionScheme["https"] = "https";
})(ConnectionScheme = exports.ConnectionScheme || (exports.ConnectionScheme = {}));
var HttpInputMethod;
(function (HttpInputMethod) {
    HttpInputMethod["head"] = "head";
    HttpInputMethod["get"] = "get";
    HttpInputMethod["post"] = "post";
    HttpInputMethod["put"] = "put";
    HttpInputMethod["delete"] = "delete";
})(HttpInputMethod = exports.HttpInputMethod || (exports.HttpInputMethod = {}));
var InputType;
(function (InputType) {
    InputType["http"] = "http";
    InputType["search"] = "search";
    InputType["simple"] = "simple";
})(InputType = exports.InputType || (exports.InputType = {}));
var ResponseContentType;
(function (ResponseContentType) {
    ResponseContentType["json"] = "json";
    ResponseContentType["yaml"] = "yaml";
    ResponseContentType["text"] = "text";
})(ResponseContentType = exports.ResponseContentType || (exports.ResponseContentType = {}));
var Day;
(function (Day) {
    Day["sunday"] = "sunday";
    Day["monday"] = "monday";
    Day["tuesday"] = "tuesday";
    Day["wednesday"] = "wednesday";
    Day["thursday"] = "thursday";
    Day["friday"] = "friday";
    Day["saturday"] = "saturday";
})(Day = exports.Day || (exports.Day = {}));
var IntervalUnit;
(function (IntervalUnit) {
    IntervalUnit["s"] = "s";
    IntervalUnit["m"] = "m";
    IntervalUnit["h"] = "h";
    IntervalUnit["d"] = "d";
    IntervalUnit["w"] = "w";
})(IntervalUnit = exports.IntervalUnit || (exports.IntervalUnit = {}));
var Month;
(function (Month) {
    Month["january"] = "january";
    Month["february"] = "february";
    Month["march"] = "march";
    Month["april"] = "april";
    Month["may"] = "may";
    Month["june"] = "june";
    Month["july"] = "july";
    Month["august"] = "august";
    Month["september"] = "september";
    Month["october"] = "october";
    Month["november"] = "november";
    Month["december"] = "december";
})(Month = exports.Month || (exports.Month = {}));
var ExecutionPhase;
(function (ExecutionPhase) {
    ExecutionPhase["awaits_execution"] = "awaits_execution";
    ExecutionPhase["started"] = "started";
    ExecutionPhase["input"] = "input";
    ExecutionPhase["condition"] = "condition";
    ExecutionPhase["actions"] = "actions";
    ExecutionPhase["watch_transform"] = "watch_transform";
    ExecutionPhase["aborted"] = "aborted";
    ExecutionPhase["finished"] = "finished";
})(ExecutionPhase = exports.ExecutionPhase || (exports.ExecutionPhase = {}));
var WatcherState;
(function (WatcherState) {
    WatcherState["stopped"] = "stopped";
    WatcherState["starting"] = "starting";
    WatcherState["started"] = "started";
    WatcherState["stopping"] = "stopping";
})(WatcherState = exports.WatcherState || (exports.WatcherState = {}));
//# sourceMappingURL=types.js.map