
function class_serializer (ns: string) { return function (ns: any) {} }
function rest_spec_name (ns: string) { return function (ns: any) {} }
function prop_serializer (ns: string) { return function (ns: any, x:any) {} }
function request_parameter () { return function (ns: any, x:any) {} }
function namespace (ns: string) { return function (ns: any) {} }

interface Uri {}
interface Date {}
interface TimeSpan {}
interface SourceDocument {}
interface short {}
interface byte {}
interface integer {}
interface long {}
interface float {}
interface double {}

@namespace('')
class PlainRequestBase<TParameters> extends RequestBase {
	error_trace: boolean;
	filter_path: string[];
	human: boolean;
	pretty: boolean;
	source_query_string: string;
}
