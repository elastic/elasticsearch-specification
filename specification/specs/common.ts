
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
@class_serializer("ErrorFormatter")
class MainError extends ErrorCause {
	headers: Dictionary<string, string>;
	root_cause: ErrorCause[];
}
interface short {}
interface byte {}
interface integer {}
interface long {}
interface float {}
interface double {}

class ScrollId extends String {}
class ScrollIds extends String {}
class CategoryId extends String {}
class ActionIds extends String {}

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
