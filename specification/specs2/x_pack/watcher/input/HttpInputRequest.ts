class HttpInputRequest {
	scheme: ConnectionScheme;
	port: integer;
	host: string;
	path: string;
	method: HttpInputMethod;
	headers: Map<string, string>;
	params: Map<string, string>;
	url: string;
	auth: HttpInputAuthentication;
	proxy: HttpInputProxy;
	connection_timeout: Time;
	read_timeout: Time;
	body: string;
}
