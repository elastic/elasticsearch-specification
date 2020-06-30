
package org.elasticsearch.cat.cat_node_attributes;

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

public class CatNodeAttributesRecord  implements XContentable<CatNodeAttributesRecord> {
  
  static final ParseField ATTR = new ParseField("attr");
  private String _attr;
  public String getAttr() { return this._attr; }
  public CatNodeAttributesRecord setAttr(String val) { this._attr = val; return this; }


  static final ParseField HOST = new ParseField("host");
  private String _host;
  public String getHost() { return this._host; }
  public CatNodeAttributesRecord setHost(String val) { this._host = val; return this; }


  static final ParseField ID = new ParseField("id");
  private String _id;
  public String getId() { return this._id; }
  public CatNodeAttributesRecord setId(String val) { this._id = val; return this; }


  static final ParseField IP = new ParseField("ip");
  private String _ip;
  public String getIp() { return this._ip; }
  public CatNodeAttributesRecord setIp(String val) { this._ip = val; return this; }


  static final ParseField NODE = new ParseField("node");
  private String _node;
  public String getNode() { return this._node; }
  public CatNodeAttributesRecord setNode(String val) { this._node = val; return this; }


  static final ParseField PORT = new ParseField("port");
  private Long _port;
  public Long getPort() { return this._port; }
  public CatNodeAttributesRecord setPort(Long val) { this._port = val; return this; }


  static final ParseField PID = new ParseField("pid");
  private Long _pid;
  public Long getPid() { return this._pid; }
  public CatNodeAttributesRecord setPid(Long val) { this._pid = val; return this; }


  static final ParseField VALUE = new ParseField("value");
  private String _value;
  public String getValue() { return this._value; }
  public CatNodeAttributesRecord setValue(String val) { this._value = val; return this; }


  
  @Override
  public XContentBuilder toXContent(XContentBuilder builder, ToXContent.Params params) throws IOException {
    builder.startObject();
    if (_attr != null) {
      builder.field(ATTR.getPreferredName(), _attr);
    }
    if (_host != null) {
      builder.field(HOST.getPreferredName(), _host);
    }
    if (_id != null) {
      builder.field(ID.getPreferredName(), _id);
    }
    if (_ip != null) {
      builder.field(IP.getPreferredName(), _ip);
    }
    if (_node != null) {
      builder.field(NODE.getPreferredName(), _node);
    }
    if (_port != null) {
      builder.field(PORT.getPreferredName(), _port);
    }
    if (_pid != null) {
      builder.field(PID.getPreferredName(), _pid);
    }
    if (_value != null) {
      builder.field(VALUE.getPreferredName(), _value);
    }
    builder.endObject();
    return builder;
  }

  @Override
  public CatNodeAttributesRecord fromXContent(XContentParser parser) throws IOException, XContentParseException {
    return CatNodeAttributesRecord.PARSER.apply(parser, null);
  }

  public static final ObjectParser<CatNodeAttributesRecord, Void> PARSER =
    new ObjectParser<>(CatNodeAttributesRecord.class.getName(), false, CatNodeAttributesRecord::new);

  static {
    PARSER.declareString(CatNodeAttributesRecord::setAttr, ATTR);
    PARSER.declareString(CatNodeAttributesRecord::setHost, HOST);
    PARSER.declareString(CatNodeAttributesRecord::setId, ID);
    PARSER.declareString(CatNodeAttributesRecord::setIp, IP);
    PARSER.declareString(CatNodeAttributesRecord::setNode, NODE);
    PARSER.declareLong(CatNodeAttributesRecord::setPort, PORT);
    PARSER.declareLong(CatNodeAttributesRecord::setPid, PID);
    PARSER.declareString(CatNodeAttributesRecord::setValue, VALUE);
  }

}
