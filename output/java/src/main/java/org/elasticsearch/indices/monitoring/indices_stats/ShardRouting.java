
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
import org.elasticsearch.indices.monitoring.indices_stats.*;

public class ShardRouting  implements XContentable<ShardRouting> {
  
  static final ParseField NODE = new ParseField("node");
  private String _node;
  public String getNode() { return this._node; }
  public ShardRouting setNode(String val) { this._node = val; return this; }


  static final ParseField PRIMARY = new ParseField("primary");
  private Boolean _primary;
  public Boolean getPrimary() { return this._primary; }
  public ShardRouting setPrimary(Boolean val) { this._primary = val; return this; }


  static final ParseField RELOCATING_NODE = new ParseField("relocating_node");
  private String _relocatingNode;
  public String getRelocatingNode() { return this._relocatingNode; }
  public ShardRouting setRelocatingNode(String val) { this._relocatingNode = val; return this; }


  static final ParseField STATE = new ParseField("state");
  private ShardRoutingState _state;
  public ShardRoutingState getState() { return this._state; }
  public ShardRouting setState(ShardRoutingState val) { this._state = val; return this; }


  
  @Override
  public XContentBuilder toXContent(XContentBuilder builder, ToXContent.Params params) throws IOException {
    builder.startObject();
    if (_node != null) {
      builder.field(NODE.getPreferredName(), _node);
    }
    if (_primary != null) {
      builder.field(PRIMARY.getPreferredName(), _primary);
    }
    if (_relocatingNode != null) {
      builder.field(RELOCATING_NODE.getPreferredName(), _relocatingNode);
    }
    if (_state != null) {
      builder.field(STATE.getPreferredName());
      _state.toXContent(builder, params);
    }
    builder.endObject();
    return builder;
  }

  @Override
  public ShardRouting fromXContent(XContentParser parser) throws IOException, XContentParseException {
    return ShardRouting.PARSER.apply(parser, null);
  }

  public static final ObjectParser<ShardRouting, Void> PARSER =
    new ObjectParser<>(ShardRouting.class.getName(), false, ShardRouting::new);

  static {
    PARSER.declareString(ShardRouting::setNode, NODE);
    PARSER.declareBoolean(ShardRouting::setPrimary, PRIMARY);
    PARSER.declareString(ShardRouting::setRelocatingNode, RELOCATING_NODE);
    PARSER.declareField(ShardRouting::setState, (p, t) -> ShardRoutingState.PARSER.apply(p), STATE, ObjectParser.ValueType.STRING_OR_NULL);
  }

}
