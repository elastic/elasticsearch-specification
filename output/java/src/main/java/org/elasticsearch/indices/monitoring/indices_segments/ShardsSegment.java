
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
import org.elasticsearch.internal.*;
import org.elasticsearch.indices.monitoring.indices_segments.*;

public class ShardsSegment  implements XContentable<ShardsSegment> {
  
  static final ParseField NUM_COMMITTED_SEGMENTS = new ParseField("num_committed_segments");
  private int _numCommittedSegments;
  private boolean _numCommittedSegments$isSet;
  public int getNumCommittedSegments() { return this._numCommittedSegments; }
  public ShardsSegment setNumCommittedSegments(int val) {
    this._numCommittedSegments = val;
    _numCommittedSegments$isSet = true;
    return this;
  }

  static final ParseField ROUTING = new ParseField("routing");
  private ShardSegmentRouting _routing;
  public ShardSegmentRouting getRouting() { return this._routing; }
  public ShardsSegment setRouting(ShardSegmentRouting val) { this._routing = val; return this; }

  static final ParseField NUM_SEARCH_SEGMENTS = new ParseField("num_search_segments");
  private int _numSearchSegments;
  private boolean _numSearchSegments$isSet;
  public int getNumSearchSegments() { return this._numSearchSegments; }
  public ShardsSegment setNumSearchSegments(int val) {
    this._numSearchSegments = val;
    _numSearchSegments$isSet = true;
    return this;
  }

  static final ParseField SEGMENTS = new ParseField("segments");
  private NamedContainer<String, Segment> _segments;
  public NamedContainer<String, Segment> getSegments() { return this._segments; }
  public ShardsSegment setSegments(NamedContainer<String, Segment> val) { this._segments = val; return this; }


  
  @Override
  public void toXContentInternal(XContentBuilder builder, ToXContent.Params params) throws IOException {
    
    if (_numCommittedSegments$isSet) {
      builder.field(NUM_COMMITTED_SEGMENTS.getPreferredName(), _numCommittedSegments);
    }
    if (_routing != null) {
      builder.field(ROUTING.getPreferredName());
      _routing.toXContent(builder, params);
    }
    if (_numSearchSegments$isSet) {
      builder.field(NUM_SEARCH_SEGMENTS.getPreferredName(), _numSearchSegments);
    }
    if (_segments != null) {
      builder.field(SEGMENTS.getPreferredName());
      _segments.toXContent(builder, params);
    }
  }

  @Override
  public ShardsSegment fromXContent(XContentParser parser) throws IOException, XContentParseException {
    return ShardsSegment.PARSER.apply(parser, null);
  }

  public static final ObjectParser<ShardsSegment, Void> PARSER =
    new ObjectParser<>(ShardsSegment.class.getName(), false, ShardsSegment::new);

  static {
    PARSER.declareInt(ShardsSegment::setNumCommittedSegments, NUM_COMMITTED_SEGMENTS);
    PARSER.declareObject(ShardsSegment::setRouting, (p, t) -> ShardSegmentRouting.PARSER.apply(p, t), ROUTING);
    PARSER.declareInt(ShardsSegment::setNumSearchSegments, NUM_SEARCH_SEGMENTS);
    PARSER.declareObject(ShardsSegment::setSegments, (p, t) -> new NamedContainer<>(n -> () -> n,pp -> Segment.PARSER.apply(pp, null)), SEGMENTS);
  }

}
