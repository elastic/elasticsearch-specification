
package org.elasticsearch.indices.monitoring.indices_stats;

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

public class ShardSequenceNumber  implements XContentable<ShardSequenceNumber> {
  
  static final ParseField GLOBAL_CHECKPOINT = new ParseField("global_checkpoint");
  private long _globalCheckpoint;
  private boolean _globalCheckpoint$isSet;
  public long getGlobalCheckpoint() { return this._globalCheckpoint; }
  public ShardSequenceNumber setGlobalCheckpoint(long val) {
    this._globalCheckpoint = val;
    _globalCheckpoint$isSet = true;
    return this;
  }

  static final ParseField LOCAL_CHECKPOINT = new ParseField("local_checkpoint");
  private long _localCheckpoint;
  private boolean _localCheckpoint$isSet;
  public long getLocalCheckpoint() { return this._localCheckpoint; }
  public ShardSequenceNumber setLocalCheckpoint(long val) {
    this._localCheckpoint = val;
    _localCheckpoint$isSet = true;
    return this;
  }

  static final ParseField MAX_SEQ_NO = new ParseField("max_seq_no");
  private long _maxSeqNo;
  private boolean _maxSeqNo$isSet;
  public long getMaxSeqNo() { return this._maxSeqNo; }
  public ShardSequenceNumber setMaxSeqNo(long val) {
    this._maxSeqNo = val;
    _maxSeqNo$isSet = true;
    return this;
  }


  
  @Override
  public void toXContentInternal(XContentBuilder builder, ToXContent.Params params) throws IOException {
    
    if (_globalCheckpoint$isSet) {
      builder.field(GLOBAL_CHECKPOINT.getPreferredName(), _globalCheckpoint);
    }
    if (_localCheckpoint$isSet) {
      builder.field(LOCAL_CHECKPOINT.getPreferredName(), _localCheckpoint);
    }
    if (_maxSeqNo$isSet) {
      builder.field(MAX_SEQ_NO.getPreferredName(), _maxSeqNo);
    }
  }

  @Override
  public ShardSequenceNumber fromXContent(XContentParser parser) throws IOException, XContentParseException {
    return ShardSequenceNumber.PARSER.apply(parser, null);
  }

  public static final ObjectParser<ShardSequenceNumber, Void> PARSER =
    new ObjectParser<>(ShardSequenceNumber.class.getName(), false, ShardSequenceNumber::new);

  static {
    PARSER.declareLong(ShardSequenceNumber::setGlobalCheckpoint, GLOBAL_CHECKPOINT);
    PARSER.declareLong(ShardSequenceNumber::setLocalCheckpoint, LOCAL_CHECKPOINT);
    PARSER.declareLong(ShardSequenceNumber::setMaxSeqNo, MAX_SEQ_NO);
  }

}
