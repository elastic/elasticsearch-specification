
package org.elasticsearch.x_pack.cross_cluster_replication.follow.follow_index_stats;

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

public class FollowIndexReadException  implements XContentable<FollowIndexReadException> {
  
  static final ParseField EXCEPTION = new ParseField("exception");
  private ErrorCause _exception;
  public ErrorCause getException() { return this._exception; }
  public FollowIndexReadException setException(ErrorCause val) { this._exception = val; return this; }

  static final ParseField FROM_SEQ_NO = new ParseField("from_seq_no");
  private long _fromSeqNo;
  private boolean _fromSeqNo$isSet;
  public long getFromSeqNo() { return this._fromSeqNo; }
  public FollowIndexReadException setFromSeqNo(long val) {
    this._fromSeqNo = val;
    _fromSeqNo$isSet = true;
    return this;
  }

  static final ParseField RETRIES = new ParseField("retries");
  private int _retries;
  private boolean _retries$isSet;
  public int getRetries() { return this._retries; }
  public FollowIndexReadException setRetries(int val) {
    this._retries = val;
    _retries$isSet = true;
    return this;
  }


  
  @Override
  public void toXContentInternal(XContentBuilder builder, ToXContent.Params params) throws IOException {
    
    if (_exception != null) {
      builder.field(EXCEPTION.getPreferredName());
      _exception.toXContent(builder, params);
    }
    if (_fromSeqNo$isSet) {
      builder.field(FROM_SEQ_NO.getPreferredName(), _fromSeqNo);
    }
    if (_retries$isSet) {
      builder.field(RETRIES.getPreferredName(), _retries);
    }
  }

  @Override
  public FollowIndexReadException fromXContent(XContentParser parser) throws IOException, XContentParseException {
    return FollowIndexReadException.PARSER.apply(parser, null);
  }

  public static final ObjectParser<FollowIndexReadException, Void> PARSER =
    new ObjectParser<>(FollowIndexReadException.class.getName(), false, FollowIndexReadException::new);

  static {
    PARSER.declareObject(FollowIndexReadException::setException, (p, t) -> ErrorCause.PARSER.apply(p, t), EXCEPTION);
    PARSER.declareLong(FollowIndexReadException::setFromSeqNo, FROM_SEQ_NO);
    PARSER.declareInt(FollowIndexReadException::setRetries, RETRIES);
  }

}
