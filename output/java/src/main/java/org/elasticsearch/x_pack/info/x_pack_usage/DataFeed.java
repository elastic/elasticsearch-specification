
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

public class DataFeed  implements XContentable<DataFeed> {
  
  static final ParseField COUNT = new ParseField("count");
  private long _count;
  private boolean _count$isSet;
  public long getCount() { return this._count; }
  public DataFeed setCount(long val) {
    this._count = val;
    _count$isSet = true;
    return this;
  }


  
  @Override
  public void toXContentInternal(XContentBuilder builder, ToXContent.Params params) throws IOException {
    
    if (_count$isSet) {
      builder.field(COUNT.getPreferredName(), _count);
    }
  }

  @Override
  public DataFeed fromXContent(XContentParser parser) throws IOException, XContentParseException {
    return DataFeed.PARSER.apply(parser, null);
  }

  public static final ObjectParser<DataFeed, Void> PARSER =
    new ObjectParser<>(DataFeed.class.getName(), false, DataFeed::new);

  static {
    PARSER.declareLong(DataFeed::setCount, COUNT);
  }

}
