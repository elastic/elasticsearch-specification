
package org.elasticsearch.cluster.nodes_stats;

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

public class GarbageCollectionGenerationStats  implements XContentable<GarbageCollectionGenerationStats> {
  
  static final ParseField COLLECTION_COUNT = new ParseField("collection_count");
  private long _collectionCount;
  private boolean _collectionCount$isSet;
  public long getCollectionCount() { return this._collectionCount; }
  public GarbageCollectionGenerationStats setCollectionCount(long val) {
    this._collectionCount = val;
    _collectionCount$isSet = true;
    return this;
  }

  static final ParseField COLLECTION_TIME = new ParseField("collection_time");
  private String _collectionTime;
  public String getCollectionTime() { return this._collectionTime; }
  public GarbageCollectionGenerationStats setCollectionTime(String val) { this._collectionTime = val; return this; }

  static final ParseField COLLECTION_TIME_IN_MILLIS = new ParseField("collection_time_in_millis");
  private long _collectionTimeInMillis;
  private boolean _collectionTimeInMillis$isSet;
  public long getCollectionTimeInMillis() { return this._collectionTimeInMillis; }
  public GarbageCollectionGenerationStats setCollectionTimeInMillis(long val) {
    this._collectionTimeInMillis = val;
    _collectionTimeInMillis$isSet = true;
    return this;
  }


  
  @Override
  public void toXContentInternal(XContentBuilder builder, ToXContent.Params params) throws IOException {
    
    if (_collectionCount$isSet) {
      builder.field(COLLECTION_COUNT.getPreferredName(), _collectionCount);
    }
    if (_collectionTime != null) {
      builder.field(COLLECTION_TIME.getPreferredName(), _collectionTime);
    }
    if (_collectionTimeInMillis$isSet) {
      builder.field(COLLECTION_TIME_IN_MILLIS.getPreferredName(), _collectionTimeInMillis);
    }
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
