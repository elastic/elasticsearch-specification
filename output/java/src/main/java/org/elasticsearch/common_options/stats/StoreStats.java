
package org.elasticsearch.common_options.stats;

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

public class StoreStats  implements XContentable<StoreStats> {
  
  static final ParseField SIZE = new ParseField("size");
  private String _size;
  public String getSize() { return this._size; }
  public StoreStats setSize(String val) { this._size = val; return this; }

  static final ParseField SIZE_IN_BYTES = new ParseField("size_in_bytes");
  private double _sizeInBytes;
  private boolean _sizeInBytes$isSet;
  public double getSizeInBytes() { return this._sizeInBytes; }
  public StoreStats setSizeInBytes(double val) {
    this._sizeInBytes = val;
    _sizeInBytes$isSet = true;
    return this;
  }


  
  @Override
  public void toXContentInternal(XContentBuilder builder, ToXContent.Params params) throws IOException {
    
    if (_size != null) {
      builder.field(SIZE.getPreferredName(), _size);
    }
    if (_sizeInBytes$isSet) {
      builder.field(SIZE_IN_BYTES.getPreferredName(), _sizeInBytes);
    }
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
