
package org.elasticsearch.document.multiple.reindex_on_server;

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
import org.elasticsearch.internal.*;
import org.elasticsearch.common_options.time_unit.*;

public class RemoteSource  implements XContentable<RemoteSource> {
  
  static final ParseField HOST = new ParseField("host");
  private Uri _host;
  public Uri getHost() { return this._host; }
  public RemoteSource setHost(Uri val) { this._host = val; return this; }


  static final ParseField PASSWORD = new ParseField("password");
  private String _password;
  public String getPassword() { return this._password; }
  public RemoteSource setPassword(String val) { this._password = val; return this; }


  static final ParseField USERNAME = new ParseField("username");
  private String _username;
  public String getUsername() { return this._username; }
  public RemoteSource setUsername(String val) { this._username = val; return this; }


  static final ParseField SOCKET_TIMEOUT = new ParseField("socket_timeout");
  private Time _socketTimeout;
  public Time getSocketTimeout() { return this._socketTimeout; }
  public RemoteSource setSocketTimeout(Time val) { this._socketTimeout = val; return this; }


  static final ParseField CONNECT_TIMEOUT = new ParseField("connect_timeout");
  private Time _connectTimeout;
  public Time getConnectTimeout() { return this._connectTimeout; }
  public RemoteSource setConnectTimeout(Time val) { this._connectTimeout = val; return this; }


  
  @Override
  public XContentBuilder toXContent(XContentBuilder builder, ToXContent.Params params) throws IOException {
    builder.startObject();
    if (_host != null) {
      builder.field(HOST.getPreferredName());
      _host.toXContent(builder, params);
    }
    if (_password != null) {
      builder.field(PASSWORD.getPreferredName(), _password);
    }
    if (_username != null) {
      builder.field(USERNAME.getPreferredName(), _username);
    }
    if (_socketTimeout != null) {
      builder.field(SOCKET_TIMEOUT.getPreferredName());
      _socketTimeout.toXContent(builder, params);
    }
    if (_connectTimeout != null) {
      builder.field(CONNECT_TIMEOUT.getPreferredName());
      _connectTimeout.toXContent(builder, params);
    }
    builder.endObject();
    return builder;
  }

  @Override
  public RemoteSource fromXContent(XContentParser parser) throws IOException, XContentParseException {
    return RemoteSource.PARSER.apply(parser, null);
  }

  public static final ObjectParser<RemoteSource, Void> PARSER =
    new ObjectParser<>(RemoteSource.class.getName(), false, RemoteSource::new);

  static {
    PARSER.declareObject(RemoteSource::setHost, (p, t) -> Uri.createFrom(p), HOST);
    PARSER.declareString(RemoteSource::setPassword, PASSWORD);
    PARSER.declareString(RemoteSource::setUsername, USERNAME);
    PARSER.declareObject(RemoteSource::setSocketTimeout, (p, t) -> Time.PARSER.apply(p, t), SOCKET_TIMEOUT);
    PARSER.declareObject(RemoteSource::setConnectTimeout, (p, t) -> Time.PARSER.apply(p, t), CONNECT_TIMEOUT);
  }

}
