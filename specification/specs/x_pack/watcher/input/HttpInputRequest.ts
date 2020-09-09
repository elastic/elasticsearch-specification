class HttpInputRequest {
  auth: HttpInputAuthentication;
  body: string;
  connection_timeout: Time;
  headers: Dictionary<string, string>;
  host: string;
  method: HttpInputMethod;
  params: Dictionary<string, string>;
  path: string;
  port: integer;
  proxy: HttpInputProxy;
  read_timeout: Time;
  scheme: ConnectionScheme;
  url: string;
}
