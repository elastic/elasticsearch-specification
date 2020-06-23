
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
import org.elasticsearch.internal.*;

public class ShardSequenceNumber  implements XContentable<ShardSequenceNumber> {
  
  static final ParseField GLOBAL_CHECKPOINT = new ParseField("global_checkpoint");
  private Long _globalCheckpoint;
  public Long getGlobalCheckpoint() { return this._globalCheckpoint; }
  public ShardSequenceNumber setGlobalCheckpoint(Long val) { this._globalCheckpoint = val; return this; }


  static final ParseField LOCAL_CHECKPOINT = new ParseField("local_checkpoint");
  private Long _localCheckpoint;
  public Long getLocalCheckpoint() { return this._localCheckpoint; }
  public ShardSequenceNumber setLocalCheckpoint(Long val) { this._localCheckpoint = val; return this; }


  static final ParseField MAX_SEQ_NO = new ParseField("max_seq_no");
  private Long _maxSeqNo;
  public Long getMaxSeqNo() { return this._maxSeqNo; }
  public ShardSequenceNumber setMaxSeqNo(Long val) { this._maxSeqNo = val; return this; }


  
  @Override
  public XContentBuilder toXContent(XContentBuilder builder, ToXContent.Params params) throws IOException {
    builder.startObject();
    if (_globalCheckpoint != null) {
      builder.field(GLOBAL_CHECKPOINT.getPreferredName(), _globalCheckpoint);
    }
    if (_localCheckpoint != null) {
      builder.field(LOCAL_CHECKPOINT.getPreferredName(), _localCheckpoint);
    }
    if (_maxSeqNo != null) {
      builder.field(MAX_SEQ_NO.getPreferredName(), _maxSeqNo);
    }
    builder.endObject();
    return builder;
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
