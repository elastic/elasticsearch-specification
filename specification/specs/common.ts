
function class_serializer(ns: string) {return function (ns: any){}}
function rest_spec_name(ns: string) {return function (ns: any){}}
function prop_serializer(ns: string) {return function (ns: any, x:any){}}
function request_parameter() {return function (ns: any, x:any){}}
function namespace(ns: string) {return function (ns: any){}}

type Uri = string
// this should be `type Date = string`, but `Date` is already defined by TS
// so we shoukd figure out a different name
interface Date {}
type TimeSpan = string
interface SourceDocument {}
@class_serializer("ErrorCauseFormatter")
class ErrorCause {
  type: string;
  reason: string;

  caused_by?: ErrorCause;
  shard?: Union<integer, string>;
  stack_trace?: string;

  bytes_limit?: long;
  bytes_wanted?: long;
  column?: integer;
  col?: integer;
  failed_shards?: ShardFailure[];
  grouped?: boolean;
  index?: string;
  index_uuid?: string;
  language?: string;
  licensed_expired_feature?: string;
  line?: integer;
  max_buckets?: integer;
  phase?: string;
  resource_id?: string[];
  'resource.id'?: string;
  resource_type?: string;
  'resource.type'?: string;
  script?: string;
  script_stack?: string[];
}
@class_serializer("ErrorFormatter")
class MainError extends ErrorCause {
  headers?: Dictionary<string, string>;
  root_cause: ErrorCause[];
}
type short = number
type byte = number
type integer = number
type long = number
type float = number
type double = number

//strongly typed path parameters these are aliases so we can expose documentation
//Some languages that support type alias or typed value types might want to keep these types
//others might rewrite to the underlying valuetypes

// TODO clean up Id and Name variants and make sure all API's use one purposefully
// Id includes numeric support, Name does not
type ScrollId = string
type ScrollIds = string
type CategoryId = string
type ActionIds = string
type Field = string
type Id = string | number
type Ids = string | number | string[]
type IndexName = string
type Indices = string | string[]
type TypeName = string
type TypeNames = string | string[]
type Types = string | string[]
type Routing = string | number
type LongId = string
//TODO encode metrics as API specific enums
type IndexMetrics = string
type Metrics = string | string[]
type Name = string
type Names = string
type NodeIds = string
type PropertyName = string
type RelationName = string
type TaskId = string
type Timestamp = string
type Fuzziness = string | integer
type MultiTermQueryRewrite = string
type GeoTilePrecision = number
type GeoHashPrecision = number
/** Path to field or array of paths. Some API's support wildcards in the path to select multiple fields.  */
type Fields = Field | Field[]


/**
 * The aggregation name as returned from the server. Depending whether typed_keys is specified this could come back
 * in the form of `name#type` instead of simply `name`
 */
type AggregateName = string

/** A reference to a date field with formatting instructions on how to return the date */
class DateField {
  field: Field;
  format?: string;
  include_unmapped?: boolean;
}

/** Rather then documenting `object` this specifies places in the response that depend on the mapping and or request
 * e.g the result of a script can be anything from value types to objects  */
class UserDefinedValue {}

/** Documents a place that can return ANY document from ANY index that can not be directly related back to a generic */
class LazyDocument {}

class LatLon {
  lat: double
  lon: double
}

