
package org.elasticsearch.x_pack.transform.get_transform_stats;

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
import org.elasticsearch.x_pack.transform.get_transform_stats.*;

public class TransformStats  implements XContentable<TransformStats> {
  
  static final ParseField ID = new ParseField("id");
  private String _id;
  public String getId() { return this._id; }
  public TransformStats setId(String val) { this._id = val; return this; }


  static final ParseField STATE = new ParseField("state");
  private String _state;
  public String getState() { return this._state; }
  public TransformStats setState(String val) { this._state = val; return this; }


  static final ParseField REASON = new ParseField("reason");
  private String _reason;
  public String getReason() { return this._reason; }
  public TransformStats setReason(String val) { this._reason = val; return this; }


  static final ParseField NODE = new ParseField("node");
  private NodeAttributes _node;
  public NodeAttributes getNode() { return this._node; }
  public TransformStats setNode(NodeAttributes val) { this._node = val; return this; }


  static final ParseField STATS = new ParseField("stats");
  private TransformIndexerStats _stats;
  public TransformIndexerStats getStats() { return this._stats; }
  public TransformStats setStats(TransformIndexerStats val) { this._stats = val; return this; }


  static final ParseField CHECKPOINTING = new ParseField("checkpointing");
  private TransformCheckpointingInfo _checkpointing;
  public TransformCheckpointingInfo getCheckpointing() { return this._checkpointing; }
  public TransformStats setCheckpointing(TransformCheckpointingInfo val) { this._checkpointing = val; return this; }


  
  @Override
  public XContentBuilder toXContent(XContentBuilder builder, ToXContent.Params params) throws IOException {
    builder.startObject();
    if (_id != null) {
      builder.field(ID.getPreferredName(), _id);
    }
    if (_state != null) {
      builder.field(STATE.getPreferredName(), _state);
    }
    if (_reason != null) {
      builder.field(REASON.getPreferredName(), _reason);
    }
    if (_node != null) {
      builder.field(NODE.getPreferredName());
      _node.toXContent(builder, params);
    }
    if (_stats != null) {
      builder.field(STATS.getPreferredName());
      _stats.toXContent(builder, params);
    }
    if (_checkpointing != null) {
      builder.field(CHECKPOINTING.getPreferredName());
      _checkpointing.toXContent(builder, params);
    }
    builder.endObject();
    return builder;
  }

  @Override
  public TransformStats fromXContent(XContentParser parser) throws IOException, XContentParseException {
    return TransformStats.PARSER.apply(parser, null);
  }

  public static final ObjectParser<TransformStats, Void> PARSER =
    new ObjectParser<>(TransformStats.class.getName(), false, TransformStats::new);

  static {
    PARSER.declareString(TransformStats::setId, ID);
    PARSER.declareString(TransformStats::setState, STATE);
    PARSER.declareString(TransformStats::setReason, REASON);
    PARSER.declareObject(TransformStats::setNode, (p, t) -> NodeAttributes.PARSER.apply(p, t), NODE);
    PARSER.declareObject(TransformStats::setStats, (p, t) -> TransformIndexerStats.PARSER.apply(p, t), STATS);
    PARSER.declareObject(TransformStats::setCheckpointing, (p, t) -> TransformCheckpointingInfo.PARSER.apply(p, t), CHECKPOINTING);
  }

}
