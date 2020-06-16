
package org.elasticsearch.document.single;

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
import org.elasticsearch.document.*;
import org.elasticsearch.common_options.hit.*;

public class WriteResponseBase  implements XContentable<WriteResponseBase> {
  
  static final ParseField ID = new ParseField("_id");
  private String _id;
  public String getId() { return this._id; }
  public WriteResponseBase setId(String val) { this._id = val; return this; }


  static final ParseField INDEX = new ParseField("_index");
  private String _index;
  public String getIndex() { return this._index; }
  public WriteResponseBase setIndex(String val) { this._index = val; return this; }


  static final ParseField PRIMARY_TERM = new ParseField("_primary_term");
  private Long _primaryTerm;
  public Long getPrimaryTerm() { return this._primaryTerm; }
  public WriteResponseBase setPrimaryTerm(Long val) { this._primaryTerm = val; return this; }


  static final ParseField RESULT = new ParseField("result");
  private Result _result;
  public Result getResult() { return this._result; }
  public WriteResponseBase setResult(Result val) { this._result = val; return this; }


  static final ParseField SEQ_NO = new ParseField("_seq_no");
  private Long _seqNo;
  public Long getSeqNo() { return this._seqNo; }
  public WriteResponseBase setSeqNo(Long val) { this._seqNo = val; return this; }


  static final ParseField SHARDS = new ParseField("_shards");
  private ShardStatistics _shards;
  public ShardStatistics getShards() { return this._shards; }
  public WriteResponseBase setShards(ShardStatistics val) { this._shards = val; return this; }


  static final ParseField TYPE = new ParseField("_type");
  private String _type;
  public String getType() { return this._type; }
  public WriteResponseBase setType(String val) { this._type = val; return this; }


  static final ParseField VERSION = new ParseField("_version");
  private Long _version;
  public Long getVersion() { return this._version; }
  public WriteResponseBase setVersion(Long val) { this._version = val; return this; }


  
  @Override
  public XContentBuilder toXContent(XContentBuilder builder, ToXContent.Params params) throws IOException {
    builder.startObject();
    if (_id != null) {
      builder.field(ID.getPreferredName(), _id);
    }
    if (_index != null) {
      builder.field(INDEX.getPreferredName(), _index);
    }
    if (_primaryTerm != null) {
      builder.field(PRIMARY_TERM.getPreferredName(), _primaryTerm);
    }
    if (_result != null) {
      builder.field(RESULT.getPreferredName());
      _result.toXContent(builder, params);
    }
    if (_seqNo != null) {
      builder.field(SEQ_NO.getPreferredName(), _seqNo);
    }
    if (_shards != null) {
      builder.field(SHARDS.getPreferredName());
      _shards.toXContent(builder, params);
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
  }

}
