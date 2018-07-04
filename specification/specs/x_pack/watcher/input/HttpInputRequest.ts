class HttpInputRequest {
	scheme: ConnectionScheme;
	port: integer;
	host: string;
	path: string;
	method: HttpInputMethod;
	headers: Dictionary<string, string>;
	params: Dictionary<string, string>;
	url: string;
	auth: HttpInputAuthentication;
	proxy: HttpInputProxy;
	connection_timeout: Time;
	read_timeout: Time;
	body: string;
}
