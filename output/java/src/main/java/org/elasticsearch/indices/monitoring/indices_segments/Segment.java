
package org.elasticsearch.indices.monitoring.indices_segments;

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

public class Segment  implements XContentable<Segment> {
  
  static final ParseField ATTRIBUTES = new ParseField("attributes");
  private NamedContainer<String, String> _attributes;
  public NamedContainer<String, String> getAttributes() { return this._attributes; }
  public Segment setAttributes(NamedContainer<String, String> val) { this._attributes = val; return this; }


  static final ParseField COMMITTED = new ParseField("committed");
  private Boolean _committed;
  public Boolean getCommitted() { return this._committed; }
  public Segment setCommitted(Boolean val) { this._committed = val; return this; }


  static final ParseField COMPOUND = new ParseField("compound");
  private Boolean _compound;
  public Boolean getCompound() { return this._compound; }
  public Segment setCompound(Boolean val) { this._compound = val; return this; }


  static final ParseField DELETED_DOCS = new ParseField("deleted_docs");
  private Long _deletedDocs;
  public Long getDeletedDocs() { return this._deletedDocs; }
  public Segment setDeletedDocs(Long val) { this._deletedDocs = val; return this; }


  static final ParseField GENERATION = new ParseField("generation");
  private Integer _generation;
  public Integer getGeneration() { return this._generation; }
  public Segment setGeneration(Integer val) { this._generation = val; return this; }


  static final ParseField MEMORY_IN_BYTES = new ParseField("memory_in_bytes");
  private Double _memoryInBytes;
  public Double getMemoryInBytes() { return this._memoryInBytes; }
  public Segment setMemoryInBytes(Double val) { this._memoryInBytes = val; return this; }


  static final ParseField SEARCH = new ParseField("search");
  private Boolean _search;
  public Boolean getSearch() { return this._search; }
  public Segment setSearch(Boolean val) { this._search = val; return this; }


  static final ParseField SIZE_IN_BYTES = new ParseField("size_in_bytes");
  private Double _sizeInBytes;
  public Double getSizeInBytes() { return this._sizeInBytes; }
  public Segment setSizeInBytes(Double val) { this._sizeInBytes = val; return this; }


  static final ParseField NUM_DOCS = new ParseField("num_docs");
  private Long _numDocs;
  public Long getNumDocs() { return this._numDocs; }
  public Segment setNumDocs(Long val) { this._numDocs = val; return this; }


  static final ParseField VERSION = new ParseField("version");
  private String _version;
  public String getVersion() { return this._version; }
  public Segment setVersion(String val) { this._version = val; return this; }


  
  @Override
  public XContentBuilder toXContent(XContentBuilder builder, ToXContent.Params params) throws IOException {
    builder.startObject();
    if (_attributes != null) {
      builder.field(ATTRIBUTES.getPreferredName());
      _attributes.toXContent(builder, params);
    }
    if (_committed != null) {
      builder.field(COMMITTED.getPreferredName(), _committed);
    }
    if (_compound != null) {
      builder.field(COMPOUND.getPreferredName(), _compound);
    }
    if (_deletedDocs != null) {
      builder.field(DELETED_DOCS.getPreferredName(), _deletedDocs);
    }
    if (_generation != null) {
      builder.field(GENERATION.getPreferredName(), _generation);
    }
    if (_memoryInBytes != null) {
      builder.field(MEMORY_IN_BYTES.getPreferredName(), _memoryInBytes);
    }
    if (_search != null) {
      builder.field(SEARCH.getPreferredName(), _search);
    }
    if (_sizeInBytes != null) {
      builder.field(SIZE_IN_BYTES.getPreferredName(), _sizeInBytes);
    }
    if (_numDocs != null) {
      builder.field(NUM_DOCS.getPreferredName(), _numDocs);
    }
    if (_version != null) {
      builder.field(VERSION.getPreferredName(), _version);
    }
    builder.endObject();
    return builder;
  }

  @Override
  public Segment fromXContent(XContentParser parser) throws IOException, XContentParseException {
    return Segment.PARSER.apply(parser, null);
  }

  public static final ObjectParser<Segment, Void> PARSER =
    new ObjectParser<>(Segment.class.getName(), false, Segment::new);

  static {
    PARSER.declareObject(Segment::setAttributes, (p, t) -> new NamedContainer<>(n -> () -> n,pp -> pp.text()), ATTRIBUTES);
    PARSER.declareBoolean(Segment::setCommitted, COMMITTED);
    PARSER.declareBoolean(Segment::setCompound, COMPOUND);
    PARSER.declareLong(Segment::setDeletedDocs, DELETED_DOCS);
    PARSER.declareInt(Segment::setGeneration, GENERATION);
    PARSER.declareDouble(Segment::setMemoryInBytes, MEMORY_IN_BYTES);
    PARSER.declareBoolean(Segment::setSearch, SEARCH);
    PARSER.declareDouble(Segment::setSizeInBytes, SIZE_IN_BYTES);
    PARSER.declareLong(Segment::setNumDocs, NUM_DOCS);
    PARSER.declareString(Segment::setVersion, VERSION);
  }

}
