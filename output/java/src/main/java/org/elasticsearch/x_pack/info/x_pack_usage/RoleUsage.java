
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
  private Long _size;
  public Long getSize() { return this._size; }
  public RoleUsage setSize(Long val) { this._size = val; return this; }


  
  @Override
  public XContentBuilder toXContent(XContentBuilder builder, ToXContent.Params params) throws IOException {
    builder.startObject();
    if (_dls != null) {
      builder.field(DLS.getPreferredName(), _dls);
    }
    if (_fls != null) {
      builder.field(FLS.getPreferredName(), _fls);
    }
    if (_size != null) {
      builder.field(SIZE.getPreferredName(), _size);
    }
    builder.endObject();
    return builder;
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
