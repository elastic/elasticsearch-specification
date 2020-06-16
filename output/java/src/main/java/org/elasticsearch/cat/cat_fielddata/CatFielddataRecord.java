
package org.elasticsearch.cat.cat_fielddata;

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


public class CatFielddataRecord  implements XContentable<CatFielddataRecord> {
  
  static final ParseField FIELD = new ParseField("field");
  private String _field;
  public String getField() { return this._field; }
  public CatFielddataRecord setField(String val) { this._field = val; return this; }


  static final ParseField HOST = new ParseField("host");
  private String _host;
  public String getHost() { return this._host; }
  public CatFielddataRecord setHost(String val) { this._host = val; return this; }


  static final ParseField ID = new ParseField("id");
  private String _id;
  public String getId() { return this._id; }
  public CatFielddataRecord setId(String val) { this._id = val; return this; }


  static final ParseField IP = new ParseField("ip");
  private String _ip;
  public String getIp() { return this._ip; }
  public CatFielddataRecord setIp(String val) { this._ip = val; return this; }


  static final ParseField NODE = new ParseField("node");
  private String _node;
  public String getNode() { return this._node; }
  public CatFielddataRecord setNode(String val) { this._node = val; return this; }


  static final ParseField SIZE = new ParseField("size");
  private String _size;
  public String getSize() { return this._size; }
  public CatFielddataRecord setSize(String val) { this._size = val; return this; }


  
  @Override
  public XContentBuilder toXContent(XContentBuilder builder, ToXContent.Params params) throws IOException {
    builder.startObject();
    if (_field != null) {
      builder.field(FIELD.getPreferredName(), _field);
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
    if (_size != null) {
      builder.field(SIZE.getPreferredName(), _size);
    }
    builder.endObject();
    return builder;
  }

  @Override
  public CatFielddataRecord fromXContent(XContentParser parser) throws IOException, XContentParseException {
    return CatFielddataRecord.PARSER.apply(parser, null);
  }

  public static final ObjectParser<CatFielddataRecord, Void> PARSER =
    new ObjectParser<>(CatFielddataRecord.class.getName(), false, CatFielddataRecord::new);

  static {
    PARSER.declareString(CatFielddataRecord::setField, FIELD);
    PARSER.declareString(CatFielddataRecord::setHost, HOST);
    PARSER.declareString(CatFielddataRecord::setId, ID);
    PARSER.declareString(CatFielddataRecord::setIp, IP);
    PARSER.declareString(CatFielddataRecord::setNode, NODE);
    PARSER.declareString(CatFielddataRecord::setSize, SIZE);
  }

}
