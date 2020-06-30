
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
import org.elasticsearch.cluster.nodes_stats.*;

public class GarbageCollectionStats  implements XContentable<GarbageCollectionStats> {
  
  static final ParseField COLLECTORS = new ParseField("collectors");
  private NamedContainer<String, GarbageCollectionGenerationStats> _collectors;
  public NamedContainer<String, GarbageCollectionGenerationStats> getCollectors() { return this._collectors; }
  public GarbageCollectionStats setCollectors(NamedContainer<String, GarbageCollectionGenerationStats> val) { this._collectors = val; return this; }


  
  @Override
  public XContentBuilder toXContent(XContentBuilder builder, ToXContent.Params params) throws IOException {
    builder.startObject();
    if (_collectors != null) {
      builder.field(COLLECTORS.getPreferredName());
      _collectors.toXContent(builder, params);
    }
    builder.endObject();
    return builder;
  }

  @Override
  public GarbageCollectionStats fromXContent(XContentParser parser) throws IOException, XContentParseException {
    return GarbageCollectionStats.PARSER.apply(parser, null);
  }

  public static final ObjectParser<GarbageCollectionStats, Void> PARSER =
    new ObjectParser<>(GarbageCollectionStats.class.getName(), false, GarbageCollectionStats::new);

  static {
    PARSER.declareObject(GarbageCollectionStats::setCollectors, (p, t) -> new NamedContainer<>(n -> () -> n,pp -> GarbageCollectionGenerationStats.PARSER.apply(pp, null)), COLLECTORS);
  }

}
