
package org.elasticsearch.x_pack.watcher.put_watch;

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
import org.elasticsearch.common_abstractions.response.*;

public class PutWatchResponse extends ResponseBase<PutWatchResponse> implements XContentable<PutWatchResponse> {
  
  static final ParseField CREATED = new ParseField("created");
  private Boolean _created;
  public Boolean getCreated() { return this._created; }
  public PutWatchResponse setCreated(Boolean val) { this._created = val; return this; }

  static final ParseField ID = new ParseField("_id");
  private String _id;
  public String getId() { return this._id; }
  public PutWatchResponse setId(String val) { this._id = val; return this; }

  static final ParseField PRIMARY_TERM = new ParseField("_primary_term");
  private long _primaryTerm;
  private boolean _primaryTerm$isSet;
  public long getPrimaryTerm() { return this._primaryTerm; }
  public PutWatchResponse setPrimaryTerm(long val) {
    this._primaryTerm = val;
    _primaryTerm$isSet = true;
    return this;
  }

  static final ParseField SEQ_NO = new ParseField("_seq_no");
  private long _seqNo;
  private boolean _seqNo$isSet;
  public long getSeqNo() { return this._seqNo; }
  public PutWatchResponse setSeqNo(long val) {
    this._seqNo = val;
    _seqNo$isSet = true;
    return this;
  }

  static final ParseField VERSION = new ParseField("_version");
  private int _version;
  private boolean _version$isSet;
  public int getVersion() { return this._version; }
  public PutWatchResponse setVersion(int val) {
    this._version = val;
    _version$isSet = true;
    return this;
  }


  
  @Override
  public void toXContentInternal(XContentBuilder builder, ToXContent.Params params) throws IOException {
    super.toXContentInternal(builder, params);
    if (_created != null) {
      builder.field(CREATED.getPreferredName(), _created);
    }
    if (_id != null) {
      builder.field(ID.getPreferredName(), _id);
    }
    if (_primaryTerm$isSet) {
      builder.field(PRIMARY_TERM.getPreferredName(), _primaryTerm);
    }
    if (_seqNo$isSet) {
      builder.field(SEQ_NO.getPreferredName(), _seqNo);
    }
    if (_version$isSet) {
      builder.field(VERSION.getPreferredName(), _version);
    }
  }

  @Override
  public PutWatchResponse fromXContent(XContentParser parser) throws IOException, XContentParseException {
    return PutWatchResponse.PARSER.apply(parser, null);
  }

  public static final ObjectParser<PutWatchResponse, Void> PARSER =
    new ObjectParser<>(PutWatchResponse.class.getName(), false, PutWatchResponse::new);

  static {
    PARSER.declareBoolean(PutWatchResponse::setCreated, CREATED);
    PARSER.declareString(PutWatchResponse::setId, ID);
    PARSER.declareLong(PutWatchResponse::setPrimaryTerm, PRIMARY_TERM);
    PARSER.declareLong(PutWatchResponse::setSeqNo, SEQ_NO);
    PARSER.declareInt(PutWatchResponse::setVersion, VERSION);
  }

}
