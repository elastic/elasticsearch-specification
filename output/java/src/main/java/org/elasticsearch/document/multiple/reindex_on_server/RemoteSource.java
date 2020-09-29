
package org.elasticsearch.document.multiple.reindex_on_server;

import java.io.IOException;
import java.util.Date;
import java.util.List;
import java.util.HashMap;
import java.time.Instant;
import java.time.format.DateTimeFormatter;
import org.elasticsearch.*;
import org.elasticsearch.common.ParseField;
import org.elasticsearch.common.xcontent.*;
import org.elasticsearch.common_options.time_unit.*;
import org.elasticsearch.internal.*;

public class RemoteSource  implements XContentable<RemoteSource> {
  
  static final ParseField CONNECT_TIMEOUT = new ParseField("connect_timeout");
  private String _connectTimeout;
  public String getConnectTimeout() { return this._connectTimeout; }
  public RemoteSource setConnectTimeout(String val) { this._connectTimeout = val; return this; }

  static final ParseField HOST = new ParseField("host");
  private String _host;
  public String getHost() { return this._host; }
  public RemoteSource setHost(String val) { this._host = val; return this; }

  static final ParseField PASSWORD = new ParseField("password");
  private String _password;
  public String getPassword() { return this._password; }
  public RemoteSource setPassword(String val) { this._password = val; return this; }

  static final ParseField SOCKET_TIMEOUT = new ParseField("socket_timeout");
  private String _socketTimeout;
  public String getSocketTimeout() { return this._socketTimeout; }
  public RemoteSource setSocketTimeout(String val) { this._socketTimeout = val; return this; }

  static final ParseField USERNAME = new ParseField("username");
  private String _username;
  public String getUsername() { return this._username; }
  public RemoteSource setUsername(String val) { this._username = val; return this; }


  
  @Override
  public void toXContentInternal(XContentBuilder builder, ToXContent.Params params) throws IOException {
    
    if (_connectTimeout != null) {
      builder.field(CONNECT_TIMEOUT.getPreferredName(), _connectTimeout);
    }
    if (_host != null) {
      builder.field(HOST.getPreferredName(), _host);
    }
    if (_password != null) {
      builder.field(PASSWORD.getPreferredName(), _password);
    }
    if (_socketTimeout != null) {
      builder.field(SOCKET_TIMEOUT.getPreferredName(), _socketTimeout);
    }
    if (_username != null) {
      builder.field(USERNAME.getPreferredName(), _username);
    }
  }

  @Override
  public RemoteSource fromXContent(XContentParser parser) throws IOException, XContentParseException {
    return RemoteSource.PARSER.apply(parser, null);
  }

  public static final ObjectParser<RemoteSource, Void> PARSER =
    new ObjectParser<>(RemoteSource.class.getName(), false, RemoteSource::new);

  static {
    PARSER.declareString(RemoteSource::setConnectTimeout, CONNECT_TIMEOUT);
    PARSER.declareString(RemoteSource::setHost, HOST);
    PARSER.declareString(RemoteSource::setPassword, PASSWORD);
    PARSER.declareString(RemoteSource::setSocketTimeout, SOCKET_TIMEOUT);
    PARSER.declareString(RemoteSource::setUsername, USERNAME);
  }

}
