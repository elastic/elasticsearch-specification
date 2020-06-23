
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

public class ShardDocs  implements XContentable<ShardDocs> {
  
  static final ParseField COUNT = new ParseField("count");
  private Long _count;
  public Long getCount() { return this._count; }
  public ShardDocs setCount(Long val) { this._count = val; return this; }


  static final ParseField DELETED = new ParseField("deleted");
  private Long _deleted;
  public Long getDeleted() { return this._deleted; }
  public ShardDocs setDeleted(Long val) { this._deleted = val; return this; }


  
  @Override
  public XContentBuilder toXContent(XContentBuilder builder, ToXContent.Params params) throws IOException {
    builder.startObject();
    if (_count != null) {
      builder.field(COUNT.getPreferredName(), _count);
    }
    if (_deleted != null) {
      builder.field(DELETED.getPreferredName(), _deleted);
    }
    builder.endObject();
    return builder;
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
