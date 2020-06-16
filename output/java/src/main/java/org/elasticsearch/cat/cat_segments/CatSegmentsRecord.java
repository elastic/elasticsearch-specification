
package org.elasticsearch.cat.cat_segments;

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


public class CatSegmentsRecord  implements XContentable<CatSegmentsRecord> {
  
  static final ParseField COMMITTED = new ParseField("committed");
  private String _committed;
  public String getCommitted() { return this._committed; }
  public CatSegmentsRecord setCommitted(String val) { this._committed = val; return this; }


  static final ParseField COMPOUND = new ParseField("compound");
  private String _compound;
  public String getCompound() { return this._compound; }
  public CatSegmentsRecord setCompound(String val) { this._compound = val; return this; }


  static final ParseField DOCS_COUNT = new ParseField("docs.count");
  private String _docsCount;
  public String getDocsCount() { return this._docsCount; }
  public CatSegmentsRecord setDocsCount(String val) { this._docsCount = val; return this; }


  static final ParseField DOCS_DELETED = new ParseField("docs.deleted");
  private String _docsDeleted;
  public String getDocsDeleted() { return this._docsDeleted; }
  public CatSegmentsRecord setDocsDeleted(String val) { this._docsDeleted = val; return this; }


  static final ParseField GENERATION = new ParseField("generation");
  private String _generation;
  public String getGeneration() { return this._generation; }
  public CatSegmentsRecord setGeneration(String val) { this._generation = val; return this; }


  static final ParseField ID = new ParseField("id");
  private String _id;
  public String getId() { return this._id; }
  public CatSegmentsRecord setId(String val) { this._id = val; return this; }


  static final ParseField INDEX = new ParseField("index");
  private String _index;
  public String getIndex() { return this._index; }
  public CatSegmentsRecord setIndex(String val) { this._index = val; return this; }


  static final ParseField IP = new ParseField("ip");
  private String _ip;
  public String getIp() { return this._ip; }
  public CatSegmentsRecord setIp(String val) { this._ip = val; return this; }


  static final ParseField PRIREP = new ParseField("prirep");
  private String _prirep;
  public String getPrirep() { return this._prirep; }
  public CatSegmentsRecord setPrirep(String val) { this._prirep = val; return this; }


  static final ParseField SEARCHABLE = new ParseField("searchable");
  private String _searchable;
  public String getSearchable() { return this._searchable; }
  public CatSegmentsRecord setSearchable(String val) { this._searchable = val; return this; }


  static final ParseField SEGMENT = new ParseField("segment");
  private String _segment;
  public String getSegment() { return this._segment; }
  public CatSegmentsRecord setSegment(String val) { this._segment = val; return this; }


  static final ParseField SHARD = new ParseField("shard");
  private String _shard;
  public String getShard() { return this._shard; }
  public CatSegmentsRecord setShard(String val) { this._shard = val; return this; }


  static final ParseField SIZE = new ParseField("size");
  private String _size;
  public String getSize() { return this._size; }
  public CatSegmentsRecord setSize(String val) { this._size = val; return this; }


  static final ParseField SIZE_MEMORY = new ParseField("size.memory");
  private String _sizeMemory;
  public String getSizeMemory() { return this._sizeMemory; }
  public CatSegmentsRecord setSizeMemory(String val) { this._sizeMemory = val; return this; }


  static final ParseField VERSION = new ParseField("version");
  private String _version;
  public String getVersion() { return this._version; }
  public CatSegmentsRecord setVersion(String val) { this._version = val; return this; }


  
  @Override
  public XContentBuilder toXContent(XContentBuilder builder, ToXContent.Params params) throws IOException {
    builder.startObject();
    if (_committed != null) {
      builder.field(COMMITTED.getPreferredName(), _committed);
    }
    if (_compound != null) {
      builder.field(COMPOUND.getPreferredName(), _compound);
    }
    if (_docsCount != null) {
      builder.field(DOCS_COUNT.getPreferredName(), _docsCount);
    }
    if (_docsDeleted != null) {
      builder.field(DOCS_DELETED.getPreferredName(), _docsDeleted);
    }
    if (_generation != null) {
      builder.field(GENERATION.getPreferredName(), _generation);
    }
    if (_id != null) {
      builder.field(ID.getPreferredName(), _id);
    }
    if (_index != null) {
      builder.field(INDEX.getPreferredName(), _index);
    }
    if (_ip != null) {
      builder.field(IP.getPreferredName(), _ip);
    }
    if (_prirep != null) {
      builder.field(PRIREP.getPreferredName(), _prirep);
    }
    if (_searchable != null) {
      builder.field(SEARCHABLE.getPreferredName(), _searchable);
    }
    if (_segment != null) {
      builder.field(SEGMENT.getPreferredName(), _segment);
    }
    if (_shard != null) {
      builder.field(SHARD.getPreferredName(), _shard);
    }
    if (_size != null) {
      builder.field(SIZE.getPreferredName(), _size);
    }
    if (_sizeMemory != null) {
      builder.field(SIZE_MEMORY.getPreferredName(), _sizeMemory);
    }
    if (_version != null) {
      builder.field(VERSION.getPreferredName(), _version);
    }
    builder.endObject();
    return builder;
  }

  @Override
  public CatSegmentsRecord fromXContent(XContentParser parser) throws IOException, XContentParseException {
    return CatSegmentsRecord.PARSER.apply(parser, null);
  }

  public static final ObjectParser<CatSegmentsRecord, Void> PARSER =
    new ObjectParser<>(CatSegmentsRecord.class.getName(), false, CatSegmentsRecord::new);

  static {
    PARSER.declareString(CatSegmentsRecord::setCommitted, COMMITTED);
    PARSER.declareString(CatSegmentsRecord::setCompound, COMPOUND);
    PARSER.declareString(CatSegmentsRecord::setDocsCount, DOCS_COUNT);
    PARSER.declareString(CatSegmentsRecord::setDocsDeleted, DOCS_DELETED);
    PARSER.declareString(CatSegmentsRecord::setGeneration, GENERATION);
    PARSER.declareString(CatSegmentsRecord::setId, ID);
    PARSER.declareString(CatSegmentsRecord::setIndex, INDEX);
    PARSER.declareString(CatSegmentsRecord::setIp, IP);
    PARSER.declareString(CatSegmentsRecord::setPrirep, PRIREP);
    PARSER.declareString(CatSegmentsRecord::setSearchable, SEARCHABLE);
    PARSER.declareString(CatSegmentsRecord::setSegment, SEGMENT);
    PARSER.declareString(CatSegmentsRecord::setShard, SHARD);
    PARSER.declareString(CatSegmentsRecord::setSize, SIZE);
    PARSER.declareString(CatSegmentsRecord::setSizeMemory, SIZE_MEMORY);
    PARSER.declareString(CatSegmentsRecord::setVersion, VERSION);
  }

}
