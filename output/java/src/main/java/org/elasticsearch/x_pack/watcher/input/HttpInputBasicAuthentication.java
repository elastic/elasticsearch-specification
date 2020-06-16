
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


public class HttpInputBasicAuthentication  implements XContentable<HttpInputBasicAuthentication> {
  
  static final ParseField PASSWORD = new ParseField("password");
  private String _password;
  public String getPassword() { return this._password; }
  public HttpInputBasicAuthentication setPassword(String val) { this._password = val; return this; }


  static final ParseField USERNAME = new ParseField("username");
  private String _username;
  public String getUsername() { return this._username; }
  public HttpInputBasicAuthentication setUsername(String val) { this._username = val; return this; }


  
  @Override
  public XContentBuilder toXContent(XContentBuilder builder, ToXContent.Params params) throws IOException {
    builder.startObject();
    if (_password != null) {
      builder.field(PASSWORD.getPreferredName(), _password);
    }
    if (_username != null) {
      builder.field(USERNAME.getPreferredName(), _username);
    }
    builder.endObject();
    return builder;
  }

  @Override
  public HttpInputBasicAuthentication fromXContent(XContentParser parser) throws IOException, XContentParseException {
    return HttpInputBasicAuthentication.PARSER.apply(parser, null);
  }

  public static final ObjectParser<HttpInputBasicAuthentication, Void> PARSER =
    new ObjectParser<>(HttpInputBasicAuthentication.class.getName(), false, HttpInputBasicAuthentication::new);

  static {
    PARSER.declareString(HttpInputBasicAuthentication::setPassword, PASSWORD);
    PARSER.declareString(HttpInputBasicAuthentication::setUsername, USERNAME);
  }

}
