
package org.elasticsearch.cluster.nodes_stats;

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

public class GarbageCollectionGenerationStats  implements XContentable<GarbageCollectionGenerationStats> {
  
  static final ParseField COLLECTION_COUNT = new ParseField("collection_count");
  private Long _collectionCount;
  public Long getCollectionCount() { return this._collectionCount; }
  public GarbageCollectionGenerationStats setCollectionCount(Long val) { this._collectionCount = val; return this; }


  static final ParseField COLLECTION_TIME = new ParseField("collection_time");
  private String _collectionTime;
  public String getCollectionTime() { return this._collectionTime; }
  public GarbageCollectionGenerationStats setCollectionTime(String val) { this._collectionTime = val; return this; }


  static final ParseField COLLECTION_TIME_IN_MILLIS = new ParseField("collection_time_in_millis");
  private Long _collectionTimeInMillis;
  public Long getCollectionTimeInMillis() { return this._collectionTimeInMillis; }
  public GarbageCollectionGenerationStats setCollectionTimeInMillis(Long val) { this._collectionTimeInMillis = val; return this; }


  
  @Override
  public XContentBuilder toXContent(XContentBuilder builder, ToXContent.Params params) throws IOException {
    builder.startObject();
    if (_collectionCount != null) {
      builder.field(COLLECTION_COUNT.getPreferredName(), _collectionCount);
    }
    if (_collectionTime != null) {
      builder.field(COLLECTION_TIME.getPreferredName(), _collectionTime);
    }
    if (_collectionTimeInMillis != null) {
      builder.field(COLLECTION_TIME_IN_MILLIS.getPreferredName(), _collectionTimeInMillis);
    }
    builder.endObject();
    return builder;
  }

  @Override
  public GarbageCollectionGenerationStats fromXContent(XContentParser parser) throws IOException, XContentParseException {
    return GarbageCollectionGenerationStats.PARSER.apply(parser, null);
  }

  public static final ObjectParser<GarbageCollectionGenerationStats, Void> PARSER =
    new ObjectParser<>(GarbageCollectionGenerationStats.class.getName(), false, GarbageCollectionGenerationStats::new);

  static {
    PARSER.declareLong(GarbageCollectionGenerationStats::setCollectionCount, COLLECTION_COUNT);
    PARSER.declareString(GarbageCollectionGenerationStats::setCollectionTime, COLLECTION_TIME);
    PARSER.declareLong(GarbageCollectionGenerationStats::setCollectionTimeInMillis, COLLECTION_TIME_IN_MILLIS);
  }

}
