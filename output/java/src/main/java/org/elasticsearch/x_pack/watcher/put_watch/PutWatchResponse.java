
package org.elasticsearch.x_pack.watcher.put_watch;

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

public class PutWatchResponse  implements XContentable<PutWatchResponse> {
  
  static final ParseField CREATED = new ParseField("created");
  private Boolean _created;
  public Boolean getCreated() { return this._created; }
  public PutWatchResponse setCreated(Boolean val) { this._created = val; return this; }


  static final ParseField ID = new ParseField("_id");
  private String _id;
  public String getId() { return this._id; }
  public PutWatchResponse setId(String val) { this._id = val; return this; }


  static final ParseField VERSION = new ParseField("_version");
  private Integer _version;
  public Integer getVersion() { return this._version; }
  public PutWatchResponse setVersion(Integer val) { this._version = val; return this; }


  static final ParseField SEQ_NO = new ParseField("_seq_no");
  private Long _seqNo;
  public Long getSeqNo() { return this._seqNo; }
  public PutWatchResponse setSeqNo(Long val) { this._seqNo = val; return this; }


  static final ParseField PRIMARY_TERM = new ParseField("_primary_term");
  private Long _primaryTerm;
  public Long getPrimaryTerm() { return this._primaryTerm; }
  public PutWatchResponse setPrimaryTerm(Long val) { this._primaryTerm = val; return this; }


  
  @Override
  public XContentBuilder toXContent(XContentBuilder builder, ToXContent.Params params) throws IOException {
    builder.startObject();
    if (_created != null) {
      builder.field(CREATED.getPreferredName(), _created);
    }
    if (_id != null) {
      builder.field(ID.getPreferredName(), _id);
    }
    if (_version != null) {
      builder.field(VERSION.getPreferredName(), _version);
    }
    if (_seqNo != null) {
      builder.field(SEQ_NO.getPreferredName(), _seqNo);
    }
    if (_primaryTerm != null) {
      builder.field(PRIMARY_TERM.getPreferredName(), _primaryTerm);
    }
    builder.endObject();
    return builder;
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
    PARSER.declareInt(PutWatchResponse::setVersion, VERSION);
    PARSER.declareLong(PutWatchResponse::setSeqNo, SEQ_NO);
    PARSER.declareLong(PutWatchResponse::setPrimaryTerm, PRIMARY_TERM);
  }

}
