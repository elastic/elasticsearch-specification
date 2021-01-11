
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
  shard: Union<integer, string>;
  stack_trace: string;
  type: string;

  bytes_limit: long;
  bytes_wanted: long;
  caused_by: ErrorCause;
  column: integer;
  col: integer;
  failed_shards: ShardFailure[];
  grouped: boolean;
  index: string;
  index_uuid: string;
  language: string;
  licensed_expired_feature: string;
  line: integer;
  max_buckets: integer;
  phase: string;
  reason: string;
  resource_id: string[];
  'resource.id': string;
  resource_type: string;
  'resource.type': string;
  script: string;
  script_stack: string[];
}
@class_serializer("ErrorFormatter")
class MainError extends ErrorCause {
  headers: Dictionary<string, string>;
  root_cause: ErrorCause[];
}
type short = number
type byte = number
type integer = number
type long = number
type float = number
type double = number

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
type Types = string | string[]
type Routing = string | number
type LongId = string
type IndexMetrics = string
type Metrics = string
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

/** A reference to a date field with formatting instructions on how to return the date */
class DateField {
  field: Field;
  format: string;
}

class UserDefinedValue {}

class LatLon {
  lat: double
  lon: double
}

