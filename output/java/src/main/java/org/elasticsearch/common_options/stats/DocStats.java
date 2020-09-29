
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

public class DocStats  implements XContentable<DocStats> {
  
  static final ParseField COUNT = new ParseField("count");
  private long _count;
  private boolean _count$isSet;
  public long getCount() { return this._count; }
  public DocStats setCount(long val) {
    this._count = val;
    _count$isSet = true;
    return this;
  }

  static final ParseField DELETED = new ParseField("deleted");
  private long _deleted;
  private boolean _deleted$isSet;
  public long getDeleted() { return this._deleted; }
  public DocStats setDeleted(long val) {
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
  public DocStats fromXContent(XContentParser parser) throws IOException, XContentParseException {
    return DocStats.PARSER.apply(parser, null);
  }

  public static final ObjectParser<DocStats, Void> PARSER =
    new ObjectParser<>(DocStats.class.getName(), false, DocStats::new);

  static {
    PARSER.declareLong(DocStats::setCount, COUNT);
    PARSER.declareLong(DocStats::setDeleted, DELETED);
  }

}
