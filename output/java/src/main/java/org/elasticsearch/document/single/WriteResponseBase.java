
package org.elasticsearch.document.single;

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
import org.elasticsearch.document.*;
import org.elasticsearch.common_options.hit.*;
import org.elasticsearch.common_abstractions.response.*;

public class WriteResponseBase extends ResponseBase<WriteResponseBase> implements XContentable<WriteResponseBase> {
  
  static final ParseField ID = new ParseField("_id");
  private String _id;
  public String getId() { return this._id; }
  public WriteResponseBase setId(String val) { this._id = val; return this; }

  static final ParseField INDEX = new ParseField("_index");
  private String _index;
  public String getIndex() { return this._index; }
  public WriteResponseBase setIndex(String val) { this._index = val; return this; }

  static final ParseField PRIMARY_TERM = new ParseField("_primary_term");
  private long _primaryTerm;
  private boolean _primaryTerm$isSet;
  public long getPrimaryTerm() { return this._primaryTerm; }
  public WriteResponseBase setPrimaryTerm(long val) {
    this._primaryTerm = val;
    _primaryTerm$isSet = true;
    return this;
  }

  static final ParseField RESULT = new ParseField("result");
  private Result _result;
  public Result getResult() { return this._result; }
  public WriteResponseBase setResult(Result val) { this._result = val; return this; }

  static final ParseField SEQ_NO = new ParseField("_seq_no");
  private long _seqNo;
  private boolean _seqNo$isSet;
  public long getSeqNo() { return this._seqNo; }
  public WriteResponseBase setSeqNo(long val) {
    this._seqNo = val;
    _seqNo$isSet = true;
    return this;
  }

  static final ParseField SHARDS = new ParseField("_shards");
  private ShardStatistics _shards;
  public ShardStatistics getShards() { return this._shards; }
  public WriteResponseBase setShards(ShardStatistics val) { this._shards = val; return this; }

  static final ParseField TYPE = new ParseField("_type");
  private String _type;
  public String getType() { return this._type; }
  public WriteResponseBase setType(String val) { this._type = val; return this; }

  static final ParseField VERSION = new ParseField("_version");
  private long _version;
  private boolean _version$isSet;
  public long getVersion() { return this._version; }
  public WriteResponseBase setVersion(long val) {
    this._version = val;
    _version$isSet = true;
    return this;
  }

  static final ParseField FORCED_REFRESH = new ParseField("forced_refresh");
  private Boolean _forcedRefresh;
  public Boolean getForcedRefresh() { return this._forcedRefresh; }
  public WriteResponseBase setForcedRefresh(Boolean val) { this._forcedRefresh = val; return this; }


  
  @Override
  public void toXContentInternal(XContentBuilder builder, ToXContent.Params params) throws IOException {
    super.toXContentInternal(builder, params);
    if (_id != null) {
      builder.field(ID.getPreferredName(), _id);
    }
    if (_index != null) {
      builder.field(INDEX.getPreferredName(), _index);
    }
    if (_primaryTerm$isSet) {
      builder.field(PRIMARY_TERM.getPreferredName(), _primaryTerm);
    }
    if (_result != null) {
      builder.field(RESULT.getPreferredName());
      _result.toXContent(builder, params);
    }
    if (_seqNo$isSet) {
      builder.field(SEQ_NO.getPreferredName(), _seqNo);
    }
    if (_shards != null) {
      builder.field(SHARDS.getPreferredName());
      _shards.toXContent(builder, params);
    }
    if (_type != null) {
      builder.field(TYPE.getPreferredName(), _type);
    }
    if (_version$isSet) {
      builder.field(VERSION.getPreferredName(), _version);
    }
    if (_forcedRefresh != null) {
      builder.field(FORCED_REFRESH.getPreferredName(), _forcedRefresh);
    }
  }

  @Override
  public WriteResponseBase fromXContent(XContentParser parser) throws IOException, XContentParseException {
    return WriteResponseBase.PARSER.apply(parser, null);
  }

  public static final ObjectParser<WriteResponseBase, Void> PARSER =
    new ObjectParser<>(WriteResponseBase.class.getName(), false, WriteResponseBase::new);

  static {
    PARSER.declareString(WriteResponseBase::setId, ID);
    PARSER.declareString(WriteResponseBase::setIndex, INDEX);
    PARSER.declareLong(WriteResponseBase::setPrimaryTerm, PRIMARY_TERM);
    PARSER.declareField(WriteResponseBase::setResult, (p, t) -> Result.PARSER.apply(p), RESULT, ObjectParser.ValueType.STRING_OR_NULL);
    PARSER.declareLong(WriteResponseBase::setSeqNo, SEQ_NO);
    PARSER.declareObject(WriteResponseBase::setShards, (p, t) -> ShardStatistics.PARSER.apply(p, t), SHARDS);
    PARSER.declareString(WriteResponseBase::setType, TYPE);
    PARSER.declareLong(WriteResponseBase::setVersion, VERSION);
    PARSER.declareBoolean(WriteResponseBase::setForcedRefresh, FORCED_REFRESH);
  }

}
