
package org.elasticsearch.x_pack.watcher.input;

import java.io.IOException;
import java.util.Date;
import java.util.List;
import java.util.HashMap;
import java.time.Instant;
import java.time.format.DateTimeFormatter;
import org.elasticsearch.*;
import org.elasticsearch.common.ParseField;
import org.elasticsearch.common.xcontent.*;
import org.elasticsearch.internal.*;

public class HttpInputProxy  implements XContentable<HttpInputProxy> {
  
  static final ParseField HOST = new ParseField("host");
  private String _host;
  public String getHost() { return this._host; }
  public HttpInputProxy setHost(String val) { this._host = val; return this; }

  static final ParseField PORT = new ParseField("port");
  private int _port;
  private boolean _port$isSet;
  public int getPort() { return this._port; }
  public HttpInputProxy setPort(int val) {
    this._port = val;
    _port$isSet = true;
    return this;
  }


  
  @Override
  public void toXContentInternal(XContentBuilder builder, ToXContent.Params params) throws IOException {
    
    if (_host != null) {
      builder.field(HOST.getPreferredName(), _host);
    }
    if (_port$isSet) {
      builder.field(PORT.getPreferredName(), _port);
    }
  }

  @Override
  public HttpInputProxy fromXContent(XContentParser parser) throws IOException, XContentParseException {
    return HttpInputProxy.PARSER.apply(parser, null);
  }

  public static final ObjectParser<HttpInputProxy, Void> PARSER =
    new ObjectParser<>(HttpInputProxy.class.getName(), false, HttpInputProxy::new);

  static {
    PARSER.declareString(HttpInputProxy::setHost, HOST);
    PARSER.declareInt(HttpInputProxy::setPort, PORT);
  }

}
