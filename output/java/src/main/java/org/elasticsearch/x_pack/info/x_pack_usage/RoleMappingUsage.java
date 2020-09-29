
package org.elasticsearch.x_pack.info.x_pack_usage;

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

public class RoleMappingUsage  implements XContentable<RoleMappingUsage> {
  
  static final ParseField ENABLED = new ParseField("enabled");
  private int _enabled;
  private boolean _enabled$isSet;
  public int getEnabled() { return this._enabled; }
  public RoleMappingUsage setEnabled(int val) {
    this._enabled = val;
    _enabled$isSet = true;
    return this;
  }

  static final ParseField SIZE = new ParseField("size");
  private int _size;
  private boolean _size$isSet;
  public int getSize() { return this._size; }
  public RoleMappingUsage setSize(int val) {
    this._size = val;
    _size$isSet = true;
    return this;
  }


  
  @Override
  public void toXContentInternal(XContentBuilder builder, ToXContent.Params params) throws IOException {
    
    if (_enabled$isSet) {
      builder.field(ENABLED.getPreferredName(), _enabled);
    }
    if (_size$isSet) {
      builder.field(SIZE.getPreferredName(), _size);
    }
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
