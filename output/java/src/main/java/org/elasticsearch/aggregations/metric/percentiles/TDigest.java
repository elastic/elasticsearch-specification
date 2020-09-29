
package org.elasticsearch.aggregations.metric.percentiles;

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

public class TDigest  implements XContentable<TDigest> {
  
  static final ParseField COMPRESSION = new ParseField("compression");
  private int _compression;
  private boolean _compression$isSet;
  public int getCompression() { return this._compression; }
  public TDigest setCompression(int val) {
    this._compression = val;
    _compression$isSet = true;
    return this;
  }


  
  @Override
  public void toXContentInternal(XContentBuilder builder, ToXContent.Params params) throws IOException {
    
    if (_compression$isSet) {
      builder.field(COMPRESSION.getPreferredName(), _compression);
    }
  }

  @Override
  public TDigest fromXContent(XContentParser parser) throws IOException, XContentParseException {
    return TDigest.PARSER.apply(parser, null);
  }

  public static final ObjectParser<TDigest, Void> PARSER =
    new ObjectParser<>(TDigest.class.getName(), false, TDigest::new);

  static {
    PARSER.declareInt(TDigest::setCompression, COMPRESSION);
  }

}
