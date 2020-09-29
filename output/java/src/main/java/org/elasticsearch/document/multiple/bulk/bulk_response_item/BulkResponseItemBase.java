
package org.elasticsearch.document.multiple.bulk.bulk_response_item;

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
import org.elasticsearch.common_options.hit.*;
import org.elasticsearch.document.single.get.*;
import org.elasticsearch.common_abstractions.lazy_document.*;
import org.elasticsearch.common_abstractions.response.*;

public class BulkResponseItemBase  implements XContentable<BulkResponseItemBase> {
  
  static final ParseField ERROR = new ParseField("error");
  private MainError _error;
  public MainError getError() { return this._error; }
  public BulkResponseItemBase setError(MainError val) { this._error = val; return this; }

  static final ParseField ID = new ParseField("_id");
  private String _id;
  public String getId() { return this._id; }
  public BulkResponseItemBase setId(String val) { this._id = val; return this; }

  static final ParseField INDEX = new ParseField("_index");
  private String _index;
  public String getIndex() { return this._index; }
  public BulkResponseItemBase setIndex(String val) { this._index = val; return this; }

  static final ParseField PRIMARY_TERM = new ParseField("_primary_term");
  private long _primaryTerm;
  private boolean _primaryTerm$isSet;
  public long getPrimaryTerm() { return this._primaryTerm; }
  public BulkResponseItemBase setPrimaryTerm(long val) {
    this._primaryTerm = val;
    _primaryTerm$isSet = true;
    return this;
  }

  static final ParseField RESULT = new ParseField("result");
  private String _result;
  public String getResult() { return this._result; }
  public BulkResponseItemBase setResult(String val) { this._result = val; return this; }

  static final ParseField SEQ_NO = new ParseField("_seq_no");
  private long _seqNo;
  private boolean _seqNo$isSet;
  public long getSeqNo() { return this._seqNo; }
  public BulkResponseItemBase setSeqNo(long val) {
    this._seqNo = val;
    _seqNo$isSet = true;
    return this;
  }

  static final ParseField SHARDS = new ParseField("_shards");
  private ShardStatistics _shards;
  public ShardStatistics getShards() { return this._shards; }
  public BulkResponseItemBase setShards(ShardStatistics val) { this._shards = val; return this; }

  static final ParseField STATUS = new ParseField("status");
  private int _status;
  private boolean _status$isSet;
  public int getStatus() { return this._status; }
  public BulkResponseItemBase setStatus(int val) {
    this._status = val;
    _status$isSet = true;
    return this;
  }

  static final ParseField TYPE = new ParseField("_type");
  private String _type;
  public String getType() { return this._type; }
  public BulkResponseItemBase setType(String val) { this._type = val; return this; }

  static final ParseField VERSION = new ParseField("_version");
  private long _version;
  private boolean _version$isSet;
  public long getVersion() { return this._version; }
  public BulkResponseItemBase setVersion(long val) {
    this._version = val;
    _version$isSet = true;
    return this;
  }

  static final ParseField FORCED_REFRESH = new ParseField("forced_refresh");
  private Boolean _forcedRefresh;
  public Boolean getForcedRefresh() { return this._forcedRefresh; }
  public BulkResponseItemBase setForcedRefresh(Boolean val) { this._forcedRefresh = val; return this; }

  static final ParseField GET = new ParseField("get");
  private GetResponse<LazyDocument> _get;
  public GetResponse<LazyDocument> getGet() { return this._get; }
  public BulkResponseItemBase setGet(GetResponse<LazyDocument> val) { this._get = val; return this; }


  
  @Override
  public void toXContentInternal(XContentBuilder builder, ToXContent.Params params) throws IOException {
    
    if (_error != null) {
      builder.field(ERROR.getPreferredName());
      _error.toXContent(builder, params);
    }
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
      builder.field(RESULT.getPreferredName(), _result);
    }
    if (_seqNo$isSet) {
      builder.field(SEQ_NO.getPreferredName(), _seqNo);
    }
    if (_shards != null) {
      builder.field(SHARDS.getPreferredName());
      _shards.toXContent(builder, params);
    }
    if (_status$isSet) {
      builder.field(STATUS.getPreferredName(), _status);
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
    if (_get != null) {
      builder.field(GET.getPreferredName());
      _get.toXContent(builder, params);
    }
  }

  @Override
  public BulkResponseItemBase fromXContent(XContentParser parser) throws IOException, XContentParseException {
    return BulkResponseItemBase.PARSER.apply(parser, null);
  }

  public static final ObjectParser<BulkResponseItemBase, Void> PARSER =
    new ObjectParser<>(BulkResponseItemBase.class.getName(), false, BulkResponseItemBase::new);

  static {
    PARSER.declareObject(BulkResponseItemBase::setError, (p, t) -> MainError.PARSER.apply(p, t), ERROR);
    PARSER.declareString(BulkResponseItemBase::setId, ID);
    PARSER.declareString(BulkResponseItemBase::setIndex, INDEX);
    PARSER.declareLong(BulkResponseItemBase::setPrimaryTerm, PRIMARY_TERM);
    PARSER.declareString(BulkResponseItemBase::setResult, RESULT);
    PARSER.declareLong(BulkResponseItemBase::setSeqNo, SEQ_NO);
    PARSER.declareObject(BulkResponseItemBase::setShards, (p, t) -> ShardStatistics.PARSER.apply(p, t), SHARDS);
    PARSER.declareInt(BulkResponseItemBase::setStatus, STATUS);
    PARSER.declareString(BulkResponseItemBase::setType, TYPE);
    PARSER.declareLong(BulkResponseItemBase::setVersion, VERSION);
    PARSER.declareBoolean(BulkResponseItemBase::setForcedRefresh, FORCED_REFRESH);
    GetResponse<LazyDocument> _get = new GetResponse<LazyDocument>();
    PARSER.declareObject(BulkResponseItemBase::setGet, (p, t) -> _get.PARSER.apply(p, t), GET);
  }

}
