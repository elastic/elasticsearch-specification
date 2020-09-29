
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

public class ShardDocs  implements XContentable<ShardDocs> {
  
  static final ParseField COUNT = new ParseField("count");
  private long _count;
  private boolean _count$isSet;
  public long getCount() { return this._count; }
  public ShardDocs setCount(long val) {
    this._count = val;
    _count$isSet = true;
    return this;
  }

  static final ParseField DELETED = new ParseField("deleted");
  private long _deleted;
  private boolean _deleted$isSet;
  public long getDeleted() { return this._deleted; }
  public ShardDocs setDeleted(long val) {
    this._deleted = val;
    _deleted$isSet = true;
    return this;
  }


  
  @Override
  public void toXContentInternal(XContentBuilder builder, ToXContent.Params params) throws IOException {
    
    if (_count$isSet) {
      builder.field(COUNT.getPreferredName(), _count);
    }
    if (_deleted$isSet) {
      builder.field(DELETED.getPreferredName(), _deleted);
    }
  }

  @Override
  public ShardDocs fromXContent(XContentParser parser) throws IOException, XContentParseException {
    return ShardDocs.PARSER.apply(parser, null);
  }

  public static final ObjectParser<ShardDocs, Void> PARSER =
    new ObjectParser<>(ShardDocs.class.getName(), false, ShardDocs::new);

  static {
    PARSER.declareLong(ShardDocs::setCount, COUNT);
    PARSER.declareLong(ShardDocs::setDeleted, DELETED);
  }

}
