
package org.elasticsearch.indices.monitoring.indices_stats;

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

public class ShardCompletion  implements XContentable<ShardCompletion> {
  
  static final ParseField SIZE_IN_BYTES = new ParseField("size_in_bytes");
  private Long _sizeInBytes;
  public Long getSizeInBytes() { return this._sizeInBytes; }
  public ShardCompletion setSizeInBytes(Long val) { this._sizeInBytes = val; return this; }


  
  @Override
  public XContentBuilder toXContent(XContentBuilder builder, ToXContent.Params params) throws IOException {
    builder.startObject();
    if (_sizeInBytes != null) {
      builder.field(SIZE_IN_BYTES.getPreferredName(), _sizeInBytes);
    }
    builder.endObject();
    return builder;
  }

  @Override
  public ShardCompletion fromXContent(XContentParser parser) throws IOException, XContentParseException {
    return ShardCompletion.PARSER.apply(parser, null);
  }

  public static final ObjectParser<ShardCompletion, Void> PARSER =
    new ObjectParser<>(ShardCompletion.class.getName(), false, ShardCompletion::new);

  static {
    PARSER.declareLong(ShardCompletion::setSizeInBytes, SIZE_IN_BYTES);
  }

}
