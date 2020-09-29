
package org.elasticsearch.indices.monitoring.indices_segments;

import java.io.IOException;
import java.util.Date;
import java.util.List;
import java.util.HashMap;
import java.time.Instant;
import java.time.format.DateTimeFormatter;
import org.elasticsearch.*;
import org.elasticsearch.common.ParseField;
import org.elasticsearch.common.xcontent.*;
import org.elasticsearch.indices.monitoring.indices_segments.*;
import org.elasticsearch.common_options.hit.*;
import org.elasticsearch.common_abstractions.response.*;

public class SegmentsResponse extends ResponseBase<SegmentsResponse> implements XContentable<SegmentsResponse> {
  
  static final ParseField INDICES = new ParseField("indices");
  private NamedContainer<String, IndexSegment> _indices;
  public NamedContainer<String, IndexSegment> getIndices() { return this._indices; }
  public SegmentsResponse setIndices(NamedContainer<String, IndexSegment> val) { this._indices = val; return this; }

  static final ParseField SHARDS = new ParseField("_shards");
  private ShardStatistics _shards;
  public ShardStatistics getShards() { return this._shards; }
  public SegmentsResponse setShards(ShardStatistics val) { this._shards = val; return this; }


  
  @Override
  public void toXContentInternal(XContentBuilder builder, ToXContent.Params params) throws IOException {
    super.toXContentInternal(builder, params);
    if (_indices != null) {
      builder.field(INDICES.getPreferredName());
      _indices.toXContent(builder, params);
    }
    if (_shards != null) {
      builder.field(SHARDS.getPreferredName());
      _shards.toXContent(builder, params);
    }
  }

  @Override
  public SegmentsResponse fromXContent(XContentParser parser) throws IOException, XContentParseException {
    return SegmentsResponse.PARSER.apply(parser, null);
  }

  public static final ObjectParser<SegmentsResponse, Void> PARSER =
    new ObjectParser<>(SegmentsResponse.class.getName(), false, SegmentsResponse::new);

  static {
    PARSER.declareObject(SegmentsResponse::setIndices, (p, t) -> new NamedContainer<>(n -> () -> n,pp -> IndexSegment.PARSER.apply(pp, null)), INDICES);
    PARSER.declareObject(SegmentsResponse::setShards, (p, t) -> ShardStatistics.PARSER.apply(p, t), SHARDS);
  }

}
