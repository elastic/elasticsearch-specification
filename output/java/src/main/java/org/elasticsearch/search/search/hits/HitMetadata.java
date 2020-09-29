
package org.elasticsearch.search.search.hits;

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

public class HitMetadata<TDocument>  implements XContentable<HitMetadata> {
  
  static final ParseField ID = new ParseField("_id");
  private String _id;
  public String getId() { return this._id; }
  public HitMetadata<TDocument> setId(String val) { this._id = val; return this; }

  static final ParseField INDEX = new ParseField("_index");
  private String _index;
  public String getIndex() { return this._index; }
  public HitMetadata<TDocument> setIndex(String val) { this._index = val; return this; }

  static final ParseField PRIMARY_TERM = new ParseField("_primary_term");
  private long _primaryTerm;
  private boolean _primaryTerm$isSet;
  public long getPrimaryTerm() { return this._primaryTerm; }
  public HitMetadata<TDocument> setPrimaryTerm(long val) {
    this._primaryTerm = val;
    _primaryTerm$isSet = true;
    return this;
  }

  static final ParseField ROUTING = new ParseField("_routing");
  private String _routing;
  public String getRouting() { return this._routing; }
  public HitMetadata<TDocument> setRouting(String val) { this._routing = val; return this; }

  static final ParseField SEQ_NO = new ParseField("_seq_no");
  private long _seqNo;
  private boolean _seqNo$isSet;
  public long getSeqNo() { return this._seqNo; }
  public HitMetadata<TDocument> setSeqNo(long val) {
    this._seqNo = val;
    _seqNo$isSet = true;
    return this;
  }

  static final ParseField SOURCE = new ParseField("_source");
  private TDocument _source;
  public TDocument getSource() { return this._source; }
  public HitMetadata<TDocument> setSource(TDocument val) { this._source = val; return this; }

  static final ParseField TYPE = new ParseField("_type");
  private String _type;
  public String getType() { return this._type; }
  public HitMetadata<TDocument> setType(String val) { this._type = val; return this; }

  static final ParseField VERSION = new ParseField("_version");
  private long _version;
  private boolean _version$isSet;
  public long getVersion() { return this._version; }
  public HitMetadata<TDocument> setVersion(long val) {
    this._version = val;
    _version$isSet = true;
    return this;
  }


  
  @Override
  public void toXContentInternal(XContentBuilder builder, ToXContent.Params params) throws IOException {
    
    if (_id != null) {
      builder.field(ID.getPreferredName(), _id);
    }
    if (_index != null) {
      builder.field(INDEX.getPreferredName(), _index);
    }
    if (_primaryTerm$isSet) {
      builder.field(PRIMARY_TERM.getPreferredName(), _primaryTerm);
    }
    if (_routing != null) {
      builder.field(ROUTING.getPreferredName(), _routing);
    }
    if (_seqNo$isSet) {
      builder.field(SEQ_NO.getPreferredName(), _seqNo);
    }
    if (_source != null) {
      builder.field(SOURCE.getPreferredName(), _source);
    }
    if (_type != null) {
      builder.field(TYPE.getPreferredName(), _type);
    }
    if (_version$isSet) {
      builder.field(VERSION.getPreferredName(), _version);
    }
  }

  @Override
  public HitMetadata fromXContent(XContentParser parser) throws IOException, XContentParseException {
    return HitMetadata.PARSER.apply(parser, null);
  }

  public static final ObjectParser<HitMetadata, Void> PARSER =
    new ObjectParser<>(HitMetadata.class.getName(), false, HitMetadata::new);

  static {
    PARSER.declareString(HitMetadata::setId, ID);
    PARSER.declareString(HitMetadata::setIndex, INDEX);
    PARSER.declareLong(HitMetadata::setPrimaryTerm, PRIMARY_TERM);
    PARSER.declareString(HitMetadata::setRouting, ROUTING);
    PARSER.declareLong(HitMetadata::setSeqNo, SEQ_NO);
    PARSER.declareObject(HitMetadata::setSource, (p, t) -> null /* TODO TDocument */, SOURCE);
    PARSER.declareString(HitMetadata::setType, TYPE);
    PARSER.declareLong(HitMetadata::setVersion, VERSION);
  }

}
