
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


public class ShardSegmentRouting  implements XContentable<ShardSegmentRouting> {
  
  static final ParseField NODE = new ParseField("node");
  private String _node;
  public String getNode() { return this._node; }
  public ShardSegmentRouting setNode(String val) { this._node = val; return this; }


  static final ParseField PRIMARY = new ParseField("primary");
  private Boolean _primary;
  public Boolean getPrimary() { return this._primary; }
  public ShardSegmentRouting setPrimary(Boolean val) { this._primary = val; return this; }


  static final ParseField STATE = new ParseField("state");
  private String _state;
  public String getState() { return this._state; }
  public ShardSegmentRouting setState(String val) { this._state = val; return this; }


  
  @Override
  public XContentBuilder toXContent(XContentBuilder builder, ToXContent.Params params) throws IOException {
    builder.startObject();
    if (_node != null) {
      builder.field(NODE.getPreferredName(), _node);
    }
    if (_primary != null) {
      builder.field(PRIMARY.getPreferredName(), _primary);
    }
    if (_state != null) {
      builder.field(STATE.getPreferredName(), _state);
    }
    builder.endObject();
    return builder;
  }

  @Override
  public ShardSegmentRouting fromXContent(XContentParser parser) throws IOException, XContentParseException {
    return ShardSegmentRouting.PARSER.apply(parser, null);
  }

  public static final ObjectParser<ShardSegmentRouting, Void> PARSER =
    new ObjectParser<>(ShardSegmentRouting.class.getName(), false, ShardSegmentRouting::new);

  static {
    PARSER.declareString(ShardSegmentRouting::setNode, NODE);
    PARSER.declareBoolean(ShardSegmentRouting::setPrimary, PRIMARY);
    PARSER.declareString(ShardSegmentRouting::setState, STATE);
  }

}
