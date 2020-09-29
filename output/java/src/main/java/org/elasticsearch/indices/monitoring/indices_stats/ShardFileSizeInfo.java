
package org.elasticsearch.indices.monitoring.indices_stats;

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

public class ShardFileSizeInfo  implements XContentable<ShardFileSizeInfo> {
  
  static final ParseField DESCRIPTION = new ParseField("description");
  private String _description;
  public String getDescription() { return this._description; }
  public ShardFileSizeInfo setDescription(String val) { this._description = val; return this; }

  static final ParseField SIZE_IN_BYTES = new ParseField("size_in_bytes");
  private long _sizeInBytes;
  private boolean _sizeInBytes$isSet;
  public long getSizeInBytes() { return this._sizeInBytes; }
  public ShardFileSizeInfo setSizeInBytes(long val) {
    this._sizeInBytes = val;
    _sizeInBytes$isSet = true;
    return this;
  }


  
  @Override
  public void toXContentInternal(XContentBuilder builder, ToXContent.Params params) throws IOException {
    
    if (_description != null) {
      builder.field(DESCRIPTION.getPreferredName(), _description);
    }
    if (_sizeInBytes$isSet) {
      builder.field(SIZE_IN_BYTES.getPreferredName(), _sizeInBytes);
    }
  }

  @Override
  public ShardFileSizeInfo fromXContent(XContentParser parser) throws IOException, XContentParseException {
    return ShardFileSizeInfo.PARSER.apply(parser, null);
  }

  public static final ObjectParser<ShardFileSizeInfo, Void> PARSER =
    new ObjectParser<>(ShardFileSizeInfo.class.getName(), false, ShardFileSizeInfo::new);

  static {
    PARSER.declareString(ShardFileSizeInfo::setDescription, DESCRIPTION);
    PARSER.declareLong(ShardFileSizeInfo::setSizeInBytes, SIZE_IN_BYTES);
  }

}
