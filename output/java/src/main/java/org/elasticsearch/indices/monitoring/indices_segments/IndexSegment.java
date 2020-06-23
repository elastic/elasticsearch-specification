
package org.elasticsearch.indices.monitoring.indices_segments;

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
import org.elasticsearch.indices.monitoring.indices_segments.*;

public class IndexSegment  implements XContentable<IndexSegment> {
  
  static final ParseField SHARDS = new ParseField("shards");
  private NamedContainer<String, ShardsSegment> _shards;
  public NamedContainer<String, ShardsSegment> getShards() { return this._shards; }
  public IndexSegment setShards(NamedContainer<String, ShardsSegment> val) { this._shards = val; return this; }


  
  @Override
  public XContentBuilder toXContent(XContentBuilder builder, ToXContent.Params params) throws IOException {
    builder.startObject();
    if (_shards != null) {
      builder.field(SHARDS.getPreferredName());
      _shards.toXContent(builder, params);
    }
    builder.endObject();
    return builder;
  }

  @Override
  public IndexSegment fromXContent(XContentParser parser) throws IOException, XContentParseException {
    return IndexSegment.PARSER.apply(parser, null);
  }

  public static final ObjectParser<IndexSegment, Void> PARSER =
    new ObjectParser<>(IndexSegment.class.getName(), false, IndexSegment::new);

  static {
    PARSER.declareObject(IndexSegment::setShards, (p, t) -> new NamedContainer<>(n -> () -> n,pp -> ShardsSegment.PARSER.apply(pp, null)), SHARDS);
  }

}
