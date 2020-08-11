
function class_serializer(ns: string) {return function (ns: any){}}
function rest_spec_name(ns: string) {return function (ns: any){}}
function prop_serializer(ns: string) {return function (ns: any, x:any){}}
function request_parameter() {return function (ns: any, x:any){}}
function namespace(ns: string) {return function (ns: any){}}

interface Uri {}
interface String {}
interface Date {}
interface TimeSpan {}
interface SourceDocument {}
@class_serializer("ErrorCauseFormatter")
class ErrorCause {
	additional_properties: Dictionary<string, any>;
	bytes_limit: long;
	bytes_wanted: long;
	caused_by: ErrorCause;
	column: integer;
	failed_shards: ShardFailure[];
	grouped: boolean;
	index: string;
	index_uuid: string;
	language: string;
	licensed_expired_feature: string;
	line: integer;
	phase: string;
	reason: string;
	resource_id: string[];
	resource_type: string;
	script: string;
	script_stack: string[];
	shard: Union<integer, string>;
	stack_trace: string;
	type: string;
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
type Fields = string
type Id = string
type Ids = string
type IndexName = string
type Indices = string
type TypeName = string
type Types = string
type Routing = string
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

@namespace("")
class PlainRequestBase<TParameters> extends RequestBase {
	query_parameters: {
	}
	body: {
		error_trace: boolean;
		filter_path: string[];
		human: boolean;
		pretty: boolean;
		source_query_string: string;
	}
}
