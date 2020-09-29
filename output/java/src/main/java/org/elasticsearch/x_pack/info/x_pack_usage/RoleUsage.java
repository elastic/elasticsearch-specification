
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

public class RoleUsage  implements XContentable<RoleUsage> {
  
  static final ParseField DLS = new ParseField("dls");
  private Boolean _dls;
  public Boolean getDls() { return this._dls; }
  public RoleUsage setDls(Boolean val) { this._dls = val; return this; }

  static final ParseField FLS = new ParseField("fls");
  private Boolean _fls;
  public Boolean getFls() { return this._fls; }
  public RoleUsage setFls(Boolean val) { this._fls = val; return this; }

  static final ParseField SIZE = new ParseField("size");
  private long _size;
  private boolean _size$isSet;
  public long getSize() { return this._size; }
  public RoleUsage setSize(long val) {
    this._size = val;
    _size$isSet = true;
    return this;
  }


  
  @Override
  public void toXContentInternal(XContentBuilder builder, ToXContent.Params params) throws IOException {
    
    if (_dls != null) {
      builder.field(DLS.getPreferredName(), _dls);
    }
    if (_fls != null) {
      builder.field(FLS.getPreferredName(), _fls);
    }
    if (_size$isSet) {
      builder.field(SIZE.getPreferredName(), _size);
    }
  }

  @Override
  public RoleUsage fromXContent(XContentParser parser) throws IOException, XContentParseException {
    return RoleUsage.PARSER.apply(parser, null);
  }

  public static final ObjectParser<RoleUsage, Void> PARSER =
    new ObjectParser<>(RoleUsage.class.getName(), false, RoleUsage::new);

  static {
    PARSER.declareBoolean(RoleUsage::setDls, DLS);
    PARSER.declareBoolean(RoleUsage::setFls, FLS);
    PARSER.declareLong(RoleUsage::setSize, SIZE);
  }

}
