
package org.elasticsearch.x_pack.watcher.input;

import java.io.IOException;
import java.util.Date;
import java.util.List;
import java.util.HashMap;
import java.time.Instant;
import java.time.format.DateTimeFormatter;
import org.elasticsearch.Either;
import org.elasticsearch.XContentable;
import org.elasticsearch.NamedContainer;
import org.elasticsearch.common.ParseField;
import org.elasticsearch.common.xcontent.*;
import org.elasticsearch.x_pack.watcher.input.*;
import org.elasticsearch.common_options.time_unit.*;
import org.elasticsearch.internal.*;

public class HttpInputRequest  implements XContentable<HttpInputRequest> {
  
  static final ParseField AUTH = new ParseField("auth");
  private HttpInputAuthentication _auth;
  public HttpInputAuthentication getAuth() { return this._auth; }
  public HttpInputRequest setAuth(HttpInputAuthentication val) { this._auth = val; return this; }


  static final ParseField BODY = new ParseField("body");
  private String _body;
  public String getBody() { return this._body; }
  public HttpInputRequest setBody(String val) { this._body = val; return this; }


  static final ParseField CONNECTION_TIMEOUT = new ParseField("connection_timeout");
  private Time _connectionTimeout;
  public Time getConnectionTimeout() { return this._connectionTimeout; }
  public HttpInputRequest setConnectionTimeout(Time val) { this._connectionTimeout = val; return this; }


  static final ParseField HEADERS = new ParseField("headers");
  private NamedContainer<String, String> _headers;
  public NamedContainer<String, String> getHeaders() { return this._headers; }
  public HttpInputRequest setHeaders(NamedContainer<String, String> val) { this._headers = val; return this; }


  static final ParseField HOST = new ParseField("host");
  private String _host;
  public String getHost() { return this._host; }
  public HttpInputRequest setHost(String val) { this._host = val; return this; }


  static final ParseField METHOD = new ParseField("method");
  private HttpInputMethod _method;
  public HttpInputMethod getMethod() { return this._method; }
  public HttpInputRequest setMethod(HttpInputMethod val) { this._method = val; return this; }


  static final ParseField PARAMS = new ParseField("params");
  private NamedContainer<String, String> _params;
  public NamedContainer<String, String> getParams() { return this._params; }
  public HttpInputRequest setParams(NamedContainer<String, String> val) { this._params = val; return this; }


  static final ParseField PATH = new ParseField("path");
  private String _path;
  public String getPath() { return this._path; }
  public HttpInputRequest setPath(String val) { this._path = val; return this; }


  static final ParseField PORT = new ParseField("port");
  private Integer _port;
  public Integer getPort() { return this._port; }
  public HttpInputRequest setPort(Integer val) { this._port = val; return this; }


  static final ParseField PROXY = new ParseField("proxy");
  private HttpInputProxy _proxy;
  public HttpInputProxy getProxy() { return this._proxy; }
  public HttpInputRequest setProxy(HttpInputProxy val) { this._proxy = val; return this; }


  static final ParseField READ_TIMEOUT = new ParseField("read_timeout");
  private Time _readTimeout;
  public Time getReadTimeout() { return this._readTimeout; }
  public HttpInputRequest setReadTimeout(Time val) { this._readTimeout = val; return this; }


  static final ParseField SCHEME = new ParseField("scheme");
  private ConnectionScheme _scheme;
  public ConnectionScheme getScheme() { return this._scheme; }
  public HttpInputRequest setScheme(ConnectionScheme val) { this._scheme = val; return this; }


  static final ParseField URL = new ParseField("url");
  private String _url;
  public String getUrl() { return this._url; }
  public HttpInputRequest setUrl(String val) { this._url = val; return this; }


  
  @Override
  public XContentBuilder toXContent(XContentBuilder builder, ToXContent.Params params) throws IOException {
    builder.startObject();
    if (_auth != null) {
      builder.field(AUTH.getPreferredName());
      _auth.toXContent(builder, params);
    }
    if (_body != null) {
      builder.field(BODY.getPreferredName(), _body);
    }
    if (_connectionTimeout != null) {
      builder.field(CONNECTION_TIMEOUT.getPreferredName());
      _connectionTimeout.toXContent(builder, params);
    }
    if (_headers != null) {
      builder.field(HEADERS.getPreferredName());
      _headers.toXContent(builder, params);
    }
    if (_host != null) {
      builder.field(HOST.getPreferredName(), _host);
    }
    if (_method != null) {
      builder.field(METHOD.getPreferredName());
      _method.toXContent(builder, params);
    }
    if (_params != null) {
      builder.field(PARAMS.getPreferredName());
      _params.toXContent(builder, params);
    }
    if (_path != null) {
      builder.field(PATH.getPreferredName(), _path);
    }
    if (_port != null) {
      builder.field(PORT.getPreferredName(), _port);
    }
    if (_proxy != null) {
      builder.field(PROXY.getPreferredName());
      _proxy.toXContent(builder, params);
    }
    if (_readTimeout != null) {
      builder.field(READ_TIMEOUT.getPreferredName());
      _readTimeout.toXContent(builder, params);
    }
    if (_scheme != null) {
      builder.field(SCHEME.getPreferredName());
      _scheme.toXContent(builder, params);
    }
    if (_url != null) {
      builder.field(URL.getPreferredName(), _url);
    }
    builder.endObject();
    return builder;
  }

  @Override
  public HttpInputRequest fromXContent(XContentParser parser) throws IOException, XContentParseException {
    return HttpInputRequest.PARSER.apply(parser, null);
  }

  public static final ObjectParser<HttpInputRequest, Void> PARSER =
    new ObjectParser<>(HttpInputRequest.class.getName(), false, HttpInputRequest::new);

  static {
    PARSER.declareObject(HttpInputRequest::setAuth, (p, t) -> HttpInputAuthentication.PARSER.apply(p, t), AUTH);
    PARSER.declareString(HttpInputRequest::setBody, BODY);
    PARSER.declareObject(HttpInputRequest::setConnectionTimeout, (p, t) -> Time.PARSER.apply(p, t), CONNECTION_TIMEOUT);
    PARSER.declareObject(HttpInputRequest::setHeaders, (p, t) -> new NamedContainer<>(n -> () -> n,pp -> pp.text()), HEADERS);
    PARSER.declareString(HttpInputRequest::setHost, HOST);
    PARSER.declareField(HttpInputRequest::setMethod, (p, t) -> HttpInputMethod.PARSER.apply(p), METHOD, ObjectParser.ValueType.STRING_OR_NULL);
    PARSER.declareObject(HttpInputRequest::setParams, (p, t) -> new NamedContainer<>(n -> () -> n,pp -> pp.text()), PARAMS);
    PARSER.declareString(HttpInputRequest::setPath, PATH);
    PARSER.declareInt(HttpInputRequest::setPort, PORT);
    PARSER.declareObject(HttpInputRequest::setProxy, (p, t) -> HttpInputProxy.PARSER.apply(p, t), PROXY);
    PARSER.declareObject(HttpInputRequest::setReadTimeout, (p, t) -> Time.PARSER.apply(p, t), READ_TIMEOUT);
    PARSER.declareField(HttpInputRequest::setScheme, (p, t) -> ConnectionScheme.PARSER.apply(p), SCHEME, ObjectParser.ValueType.STRING_OR_NULL);
    PARSER.declareString(HttpInputRequest::setUrl, URL);
  }

}
