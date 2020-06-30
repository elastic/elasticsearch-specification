
package org.elasticsearch.x_pack.info.x_pack_usage;

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

public class RoleMappingUsage  implements XContentable<RoleMappingUsage> {
  
  static final ParseField ENABLED = new ParseField("enabled");
  private Integer _enabled;
  public Integer getEnabled() { return this._enabled; }
  public RoleMappingUsage setEnabled(Integer val) { this._enabled = val; return this; }


  static final ParseField SIZE = new ParseField("size");
  private Integer _size;
  public Integer getSize() { return this._size; }
  public RoleMappingUsage setSize(Integer val) { this._size = val; return this; }


  
  @Override
  public XContentBuilder toXContent(XContentBuilder builder, ToXContent.Params params) throws IOException {
    builder.startObject();
    if (_enabled != null) {
      builder.field(ENABLED.getPreferredName(), _enabled);
    }
    if (_size != null) {
      builder.field(SIZE.getPreferredName(), _size);
    }
    builder.endObject();
    return builder;
  }

  @Override
  public RoleMappingUsage fromXContent(XContentParser parser) throws IOException, XContentParseException {
    return RoleMappingUsage.PARSER.apply(parser, null);
  }

  public static final ObjectParser<RoleMappingUsage, Void> PARSER =
    new ObjectParser<>(RoleMappingUsage.class.getName(), false, RoleMappingUsage::new);

  static {
    PARSER.declareInt(RoleMappingUsage::setEnabled, ENABLED);
    PARSER.declareInt(RoleMappingUsage::setSize, SIZE);
  }

}
