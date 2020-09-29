
package org.elasticsearch.common;

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

public class ShardFailure  implements XContentable<ShardFailure> {
  
  static final ParseField INDEX = new ParseField("index");
  private String _index;
  public String getIndex() { return this._index; }
  public ShardFailure setIndex(String val) { this._index = val; return this; }

  static final ParseField NODE = new ParseField("node");
  private String _node;
  public String getNode() { return this._node; }
  public ShardFailure setNode(String val) { this._node = val; return this; }

  static final ParseField REASON = new ParseField("reason");
  private ErrorCause _reason;
  public ErrorCause getReason() { return this._reason; }
  public ShardFailure setReason(ErrorCause val) { this._reason = val; return this; }

  static final ParseField SHARD = new ParseField("shard");
  private int _shard;
  private boolean _shard$isSet;
  public int getShard() { return this._shard; }
  public ShardFailure setShard(int val) {
    this._shard = val;
    _shard$isSet = true;
    return this;
  }

  static final ParseField STATUS = new ParseField("status");
  private String _status;
  public String getStatus() { return this._status; }
  public ShardFailure setStatus(String val) { this._status = val; return this; }


  
  @Override
  public void toXContentInternal(XContentBuilder builder, ToXContent.Params params) throws IOException {
    
    if (_index != null) {
      builder.field(INDEX.getPreferredName(), _index);
    }
    if (_node != null) {
      builder.field(NODE.getPreferredName(), _node);
    }
    if (_reason != null) {
      builder.field(REASON.getPreferredName());
      _reason.toXContent(builder, params);
    }
    if (_shard$isSet) {
      builder.field(SHARD.getPreferredName(), _shard);
    }
    if (_status != null) {
      builder.field(STATUS.getPreferredName(), _status);
    }
  }

  @Override
  public ShardFailure fromXContent(XContentParser parser) throws IOException, XContentParseException {
    return ShardFailure.PARSER.apply(parser, null);
  }

  public static final ObjectParser<ShardFailure, Void> PARSER =
    new ObjectParser<>(ShardFailure.class.getName(), false, ShardFailure::new);

  static {
    PARSER.declareString(ShardFailure::setIndex, INDEX);
    PARSER.declareString(ShardFailure::setNode, NODE);
    PARSER.declareObject(ShardFailure::setReason, (p, t) -> ErrorCause.PARSER.apply(p, t), REASON);
    PARSER.declareInt(ShardFailure::setShard, SHARD);
    PARSER.declareString(ShardFailure::setStatus, STATUS);
  }

}
