
package org.elasticsearch.cat.cat_indices;

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


public class CatIndicesRecord  implements XContentable<CatIndicesRecord> {
  
  static final ParseField DOCS_COUNT = new ParseField("docs.count");
  private String _docsCount;
  public String getDocsCount() { return this._docsCount; }
  public CatIndicesRecord setDocsCount(String val) { this._docsCount = val; return this; }


  static final ParseField DOCS_DELETED = new ParseField("docs.deleted");
  private String _docsDeleted;
  public String getDocsDeleted() { return this._docsDeleted; }
  public CatIndicesRecord setDocsDeleted(String val) { this._docsDeleted = val; return this; }


  static final ParseField HEALTH = new ParseField("health");
  private String _health;
  public String getHealth() { return this._health; }
  public CatIndicesRecord setHealth(String val) { this._health = val; return this; }


  static final ParseField INDEX = new ParseField("index");
  private String _index;
  public String getIndex() { return this._index; }
  public CatIndicesRecord setIndex(String val) { this._index = val; return this; }


  static final ParseField UUID = new ParseField("uuid");
  private String _uuid;
  public String getUuid() { return this._uuid; }
  public CatIndicesRecord setUuid(String val) { this._uuid = val; return this; }


  static final ParseField PRI = new ParseField("pri");
  private String _pri;
  public String getPri() { return this._pri; }
  public CatIndicesRecord setPri(String val) { this._pri = val; return this; }


  static final ParseField PRI_STORE_SIZE = new ParseField("pri.store.size");
  private String _priStoreSize;
  public String getPriStoreSize() { return this._priStoreSize; }
  public CatIndicesRecord setPriStoreSize(String val) { this._priStoreSize = val; return this; }


  static final ParseField REP = new ParseField("rep");
  private String _rep;
  public String getRep() { return this._rep; }
  public CatIndicesRecord setRep(String val) { this._rep = val; return this; }


  static final ParseField STATUS = new ParseField("status");
  private String _status;
  public String getStatus() { return this._status; }
  public CatIndicesRecord setStatus(String val) { this._status = val; return this; }


  static final ParseField STORE_SIZE = new ParseField("store.size");
  private String _storeSize;
  public String getStoreSize() { return this._storeSize; }
  public CatIndicesRecord setStoreSize(String val) { this._storeSize = val; return this; }


  static final ParseField TM = new ParseField("tm");
  private String _tm;
  public String getTm() { return this._tm; }
  public CatIndicesRecord setTm(String val) { this._tm = val; return this; }


  
  @Override
  public XContentBuilder toXContent(XContentBuilder builder, ToXContent.Params params) throws IOException {
    builder.startObject();
    if (_docsCount != null) {
      builder.field(DOCS_COUNT.getPreferredName(), _docsCount);
    }
    if (_docsDeleted != null) {
      builder.field(DOCS_DELETED.getPreferredName(), _docsDeleted);
    }
    if (_health != null) {
      builder.field(HEALTH.getPreferredName(), _health);
    }
    if (_index != null) {
      builder.field(INDEX.getPreferredName(), _index);
    }
    if (_uuid != null) {
      builder.field(UUID.getPreferredName(), _uuid);
    }
    if (_pri != null) {
      builder.field(PRI.getPreferredName(), _pri);
    }
    if (_priStoreSize != null) {
      builder.field(PRI_STORE_SIZE.getPreferredName(), _priStoreSize);
    }
    if (_rep != null) {
      builder.field(REP.getPreferredName(), _rep);
    }
    if (_status != null) {
      builder.field(STATUS.getPreferredName(), _status);
    }
    if (_storeSize != null) {
      builder.field(STORE_SIZE.getPreferredName(), _storeSize);
    }
    if (_tm != null) {
      builder.field(TM.getPreferredName(), _tm);
    }
    builder.endObject();
    return builder;
  }

  @Override
  public CatIndicesRecord fromXContent(XContentParser parser) throws IOException, XContentParseException {
    return CatIndicesRecord.PARSER.apply(parser, null);
  }

  public static final ObjectParser<CatIndicesRecord, Void> PARSER =
    new ObjectParser<>(CatIndicesRecord.class.getName(), false, CatIndicesRecord::new);

  static {
    PARSER.declareString(CatIndicesRecord::setDocsCount, DOCS_COUNT);
    PARSER.declareString(CatIndicesRecord::setDocsDeleted, DOCS_DELETED);
    PARSER.declareString(CatIndicesRecord::setHealth, HEALTH);
    PARSER.declareString(CatIndicesRecord::setIndex, INDEX);
    PARSER.declareString(CatIndicesRecord::setUuid, UUID);
    PARSER.declareString(CatIndicesRecord::setPri, PRI);
    PARSER.declareString(CatIndicesRecord::setPriStoreSize, PRI_STORE_SIZE);
    PARSER.declareString(CatIndicesRecord::setRep, REP);
    PARSER.declareString(CatIndicesRecord::setStatus, STATUS);
    PARSER.declareString(CatIndicesRecord::setStoreSize, STORE_SIZE);
    PARSER.declareString(CatIndicesRecord::setTm, TM);
  }

}
