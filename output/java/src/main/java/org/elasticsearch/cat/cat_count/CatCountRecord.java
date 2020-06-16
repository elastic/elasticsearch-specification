
package org.elasticsearch.cat.cat_count;

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


public class CatCountRecord  implements XContentable<CatCountRecord> {
  
  static final ParseField COUNT = new ParseField("count");
  private String _count;
  public String getCount() { return this._count; }
  public CatCountRecord setCount(String val) { this._count = val; return this; }


  static final ParseField EPOCH = new ParseField("epoch");
  private String _epoch;
  public String getEpoch() { return this._epoch; }
  public CatCountRecord setEpoch(String val) { this._epoch = val; return this; }


  static final ParseField TIMESTAMP = new ParseField("timestamp");
  private String _timestamp;
  public String getTimestamp() { return this._timestamp; }
  public CatCountRecord setTimestamp(String val) { this._timestamp = val; return this; }


  
  @Override
  public XContentBuilder toXContent(XContentBuilder builder, ToXContent.Params params) throws IOException {
    builder.startObject();
    if (_count != null) {
      builder.field(COUNT.getPreferredName(), _count);
    }
    if (_epoch != null) {
      builder.field(EPOCH.getPreferredName(), _epoch);
    }
    if (_timestamp != null) {
      builder.field(TIMESTAMP.getPreferredName(), _timestamp);
    }
    builder.endObject();
    return builder;
  }

  @Override
  public CatCountRecord fromXContent(XContentParser parser) throws IOException, XContentParseException {
    return CatCountRecord.PARSER.apply(parser, null);
  }

  public static final ObjectParser<CatCountRecord, Void> PARSER =
    new ObjectParser<>(CatCountRecord.class.getName(), false, CatCountRecord::new);

  static {
    PARSER.declareString(CatCountRecord::setCount, COUNT);
    PARSER.declareString(CatCountRecord::setEpoch, EPOCH);
    PARSER.declareString(CatCountRecord::setTimestamp, TIMESTAMP);
  }

}
