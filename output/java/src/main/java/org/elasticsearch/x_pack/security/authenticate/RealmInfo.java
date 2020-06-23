
package org.elasticsearch.x_pack.security.authenticate;

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


public class RealmInfo  implements XContentable<RealmInfo> {
  
  static final ParseField NAME = new ParseField("name");
  private String _name;
  public String getName() { return this._name; }
  public RealmInfo setName(String val) { this._name = val; return this; }


  static final ParseField TYPE = new ParseField("type");
  private String _type;
  public String getType() { return this._type; }
  public RealmInfo setType(String val) { this._type = val; return this; }


  
  @Override
  public XContentBuilder toXContent(XContentBuilder builder, ToXContent.Params params) throws IOException {
    builder.startObject();
    if (_name != null) {
      builder.field(NAME.getPreferredName(), _name);
    }
    if (_type != null) {
      builder.field(TYPE.getPreferredName(), _type);
    }
    builder.endObject();
    return builder;
  }

  @Override
  public RealmInfo fromXContent(XContentParser parser) throws IOException, XContentParseException {
    return RealmInfo.PARSER.apply(parser, null);
  }

  public static final ObjectParser<RealmInfo, Void> PARSER =
    new ObjectParser<>(RealmInfo.class.getName(), false, RealmInfo::new);

  static {
    PARSER.declareString(RealmInfo::setName, NAME);
    PARSER.declareString(RealmInfo::setType, TYPE);
  }

}
