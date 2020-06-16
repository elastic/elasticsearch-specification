
package org.elasticsearch.cat.cat_plugins;

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


public class CatPluginsRecord  implements XContentable<CatPluginsRecord> {
  
  static final ParseField COMPONENT = new ParseField("component");
  private String _component;
  public String getComponent() { return this._component; }
  public CatPluginsRecord setComponent(String val) { this._component = val; return this; }


  static final ParseField DESCRIPTION = new ParseField("description");
  private String _description;
  public String getDescription() { return this._description; }
  public CatPluginsRecord setDescription(String val) { this._description = val; return this; }


  static final ParseField ID = new ParseField("id");
  private String _id;
  public String getId() { return this._id; }
  public CatPluginsRecord setId(String val) { this._id = val; return this; }


  static final ParseField ISOLATION = new ParseField("isolation");
  private String _isolation;
  public String getIsolation() { return this._isolation; }
  public CatPluginsRecord setIsolation(String val) { this._isolation = val; return this; }


  static final ParseField NAME = new ParseField("name");
  private String _name;
  public String getName() { return this._name; }
  public CatPluginsRecord setName(String val) { this._name = val; return this; }


  static final ParseField TYPE = new ParseField("type");
  private String _type;
  public String getType() { return this._type; }
  public CatPluginsRecord setType(String val) { this._type = val; return this; }


  static final ParseField URL = new ParseField("url");
  private String _url;
  public String getUrl() { return this._url; }
  public CatPluginsRecord setUrl(String val) { this._url = val; return this; }


  static final ParseField VERSION = new ParseField("version");
  private String _version;
  public String getVersion() { return this._version; }
  public CatPluginsRecord setVersion(String val) { this._version = val; return this; }


  
  @Override
  public XContentBuilder toXContent(XContentBuilder builder, ToXContent.Params params) throws IOException {
    builder.startObject();
    if (_component != null) {
      builder.field(COMPONENT.getPreferredName(), _component);
    }
    if (_description != null) {
      builder.field(DESCRIPTION.getPreferredName(), _description);
    }
    if (_id != null) {
      builder.field(ID.getPreferredName(), _id);
    }
    if (_isolation != null) {
      builder.field(ISOLATION.getPreferredName(), _isolation);
    }
    if (_name != null) {
      builder.field(NAME.getPreferredName(), _name);
    }
    if (_type != null) {
      builder.field(TYPE.getPreferredName(), _type);
    }
    if (_url != null) {
      builder.field(URL.getPreferredName(), _url);
    }
    if (_version != null) {
      builder.field(VERSION.getPreferredName(), _version);
    }
    builder.endObject();
    return builder;
  }

  @Override
  public CatPluginsRecord fromXContent(XContentParser parser) throws IOException, XContentParseException {
    return CatPluginsRecord.PARSER.apply(parser, null);
  }

  public static final ObjectParser<CatPluginsRecord, Void> PARSER =
    new ObjectParser<>(CatPluginsRecord.class.getName(), false, CatPluginsRecord::new);

  static {
    PARSER.declareString(CatPluginsRecord::setComponent, COMPONENT);
    PARSER.declareString(CatPluginsRecord::setDescription, DESCRIPTION);
    PARSER.declareString(CatPluginsRecord::setId, ID);
    PARSER.declareString(CatPluginsRecord::setIsolation, ISOLATION);
    PARSER.declareString(CatPluginsRecord::setName, NAME);
    PARSER.declareString(CatPluginsRecord::setType, TYPE);
    PARSER.declareString(CatPluginsRecord::setUrl, URL);
    PARSER.declareString(CatPluginsRecord::setVersion, VERSION);
  }

}
