
package org.elasticsearch.common_options.stats;

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

public class StoreStats  implements XContentable<StoreStats> {
  
  static final ParseField SIZE = new ParseField("size");
  private String _size;
  public String getSize() { return this._size; }
  public StoreStats setSize(String val) { this._size = val; return this; }


  static final ParseField SIZE_IN_BYTES = new ParseField("size_in_bytes");
  private Double _sizeInBytes;
  public Double getSizeInBytes() { return this._sizeInBytes; }
  public StoreStats setSizeInBytes(Double val) { this._sizeInBytes = val; return this; }


  
  @Override
  public XContentBuilder toXContent(XContentBuilder builder, ToXContent.Params params) throws IOException {
    builder.startObject();
    if (_size != null) {
      builder.field(SIZE.getPreferredName(), _size);
    }
    if (_sizeInBytes != null) {
      builder.field(SIZE_IN_BYTES.getPreferredName(), _sizeInBytes);
    }
    builder.endObject();
    return builder;
  }

  @Override
  public StoreStats fromXContent(XContentParser parser) throws IOException, XContentParseException {
    return StoreStats.PARSER.apply(parser, null);
  }

  public static final ObjectParser<StoreStats, Void> PARSER =
    new ObjectParser<>(StoreStats.class.getName(), false, StoreStats::new);

  static {
    PARSER.declareString(StoreStats::setSize, SIZE);
    PARSER.declareDouble(StoreStats::setSizeInBytes, SIZE_IN_BYTES);
  }

}
