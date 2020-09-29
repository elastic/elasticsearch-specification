
package org.elasticsearch.search.explain;

import java.io.IOException;
import java.util.Date;
import java.util.List;
import java.util.HashMap;
import java.time.Instant;
import java.time.format.DateTimeFormatter;
import org.elasticsearch.*;
import org.elasticsearch.common.ParseField;
import org.elasticsearch.common.xcontent.*;
import org.elasticsearch.common_abstractions.lazy_document.*;
import org.elasticsearch.internal.*;

public class InlineGet<TDocument>  implements XContentable<InlineGet> {
  
  static final ParseField FIELDS = new ParseField("fields");
  private NamedContainer<String, LazyDocument> _fields;
  public NamedContainer<String, LazyDocument> getFields() { return this._fields; }
  public InlineGet<TDocument> setFields(NamedContainer<String, LazyDocument> val) { this._fields = val; return this; }

  static final ParseField FOUND = new ParseField("found");
  private Boolean _found;
  public Boolean getFound() { return this._found; }
  public InlineGet<TDocument> setFound(Boolean val) { this._found = val; return this; }

  static final ParseField SEQ_NO = new ParseField("_seq_no");
  private long _seqNo;
  private boolean _seqNo$isSet;
  public long getSeqNo() { return this._seqNo; }
  public InlineGet<TDocument> setSeqNo(long val) {
    this._seqNo = val;
    _seqNo$isSet = true;
    return this;
  }

  static final ParseField PRIMARY_TERM = new ParseField("_primary_term");
  private long _primaryTerm;
  private boolean _primaryTerm$isSet;
  public long getPrimaryTerm() { return this._primaryTerm; }
  public InlineGet<TDocument> setPrimaryTerm(long val) {
    this._primaryTerm = val;
    _primaryTerm$isSet = true;
    return this;
  }

  static final ParseField SOURCE = new ParseField("_source");
  private TDocument _source;
  public TDocument getSource() { return this._source; }
  public InlineGet<TDocument> setSource(TDocument val) { this._source = val; return this; }


  
  @Override
  public void toXContentInternal(XContentBuilder builder, ToXContent.Params params) throws IOException {
    
    if (_fields != null) {
      builder.field(FIELDS.getPreferredName());
      _fields.toXContent(builder, params);
    }
    if (_found != null) {
      builder.field(FOUND.getPreferredName(), _found);
    }
    if (_seqNo$isSet) {
      builder.field(SEQ_NO.getPreferredName(), _seqNo);
    }
    if (_primaryTerm$isSet) {
      builder.field(PRIMARY_TERM.getPreferredName(), _primaryTerm);
    }
    if (_source != null) {
      builder.field(SOURCE.getPreferredName(), _source);
    }
  }

  @Override
  public InlineGet fromXContent(XContentParser parser) throws IOException, XContentParseException {
    return InlineGet.PARSER.apply(parser, null);
  }

  public static final ObjectParser<InlineGet, Void> PARSER =
    new ObjectParser<>(InlineGet.class.getName(), false, InlineGet::new);

  static {
    PARSER.declareObject(InlineGet::setFields, (p, t) -> new NamedContainer<>(n -> () -> n,pp -> LazyDocument.PARSER.apply(pp, null)), FIELDS);
    PARSER.declareBoolean(InlineGet::setFound, FOUND);
    PARSER.declareLong(InlineGet::setSeqNo, SEQ_NO);
    PARSER.declareLong(InlineGet::setPrimaryTerm, PRIMARY_TERM);
    PARSER.declareObject(InlineGet::setSource, (p, t) -> null /* TODO TDocument */, SOURCE);
  }

}
