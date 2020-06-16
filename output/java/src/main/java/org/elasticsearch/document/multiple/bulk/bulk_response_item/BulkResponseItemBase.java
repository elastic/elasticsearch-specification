
package org.elasticsearch.document.multiple.bulk.bulk_response_item;

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
import org.elasticsearch.common_options.hit.*;

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


  static final ParseField OPERATION = new ParseField("operation");
  private String _operation;
  public String getOperation() { return this._operation; }
  public BulkResponseItemBase setOperation(String val) { this._operation = val; return this; }


  static final ParseField PRIMARY_TERM = new ParseField("_primary_term");
  private Long _primaryTerm;
  public Long getPrimaryTerm() { return this._primaryTerm; }
  public BulkResponseItemBase setPrimaryTerm(Long val) { this._primaryTerm = val; return this; }


  static final ParseField RESULT = new ParseField("result");
  private String _result;
  public String getResult() { return this._result; }
  public BulkResponseItemBase setResult(String val) { this._result = val; return this; }


  static final ParseField SEQ_NO = new ParseField("_seq_no");
  private Long _seqNo;
  public Long getSeqNo() { return this._seqNo; }
  public BulkResponseItemBase setSeqNo(Long val) { this._seqNo = val; return this; }


  static final ParseField SHARDS = new ParseField("_shards");
  private ShardStatistics _shards;
  public ShardStatistics getShards() { return this._shards; }
  public BulkResponseItemBase setShards(ShardStatistics val) { this._shards = val; return this; }


  static final ParseField STATUS = new ParseField("status");
  private Integer _status;
  public Integer getStatus() { return this._status; }
  public BulkResponseItemBase setStatus(Integer val) { this._status = val; return this; }


  static final ParseField TYPE = new ParseField("_type");
  private String _type;
  public String getType() { return this._type; }
  public BulkResponseItemBase setType(String val) { this._type = val; return this; }


  static final ParseField VERSION = new ParseField("_version");
  private Long _version;
  public Long getVersion() { return this._version; }
  public BulkResponseItemBase setVersion(Long val) { this._version = val; return this; }


  
  @Override
  public XContentBuilder toXContent(XContentBuilder builder, ToXContent.Params params) throws IOException {
    builder.startObject();
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
    if (_operation != null) {
      builder.field(OPERATION.getPreferredName(), _operation);
    }
    if (_primaryTerm != null) {
      builder.field(PRIMARY_TERM.getPreferredName(), _primaryTerm);
    }
    if (_result != null) {
      builder.field(RESULT.getPreferredName(), _result);
    }
    if (_seqNo != null) {
      builder.field(SEQ_NO.getPreferredName(), _seqNo);
    }
    if (_shards != null) {
      builder.field(SHARDS.getPreferredName());
      _shards.toXContent(builder, params);
    }
    if (_status != null) {
      builder.field(STATUS.getPreferredName(), _status);
    }
    if (_type != null) {
      builder.field(TYPE.getPreferredName(), _type);
    }
    if (_version != null) {
      builder.field(VERSION.getPreferredName(), _version);
    }
    builder.endObject();
    return builder;
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
    PARSER.declareString(BulkResponseItemBase::setOperation, OPERATION);
    PARSER.declareLong(BulkResponseItemBase::setPrimaryTerm, PRIMARY_TERM);
    PARSER.declareString(BulkResponseItemBase::setResult, RESULT);
    PARSER.declareLong(BulkResponseItemBase::setSeqNo, SEQ_NO);
    PARSER.declareObject(BulkResponseItemBase::setShards, (p, t) -> ShardStatistics.PARSER.apply(p, t), SHARDS);
    PARSER.declareInt(BulkResponseItemBase::setStatus, STATUS);
    PARSER.declareString(BulkResponseItemBase::setType, TYPE);
    PARSER.declareLong(BulkResponseItemBase::setVersion, VERSION);
  }

}
