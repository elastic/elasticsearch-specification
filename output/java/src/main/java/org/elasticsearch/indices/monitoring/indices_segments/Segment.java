
package org.elasticsearch.indices.monitoring.indices_segments;

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
  private long _deletedDocs;
  private boolean _deletedDocs$isSet;
  public long getDeletedDocs() { return this._deletedDocs; }
  public Segment setDeletedDocs(long val) {
    this._deletedDocs = val;
    _deletedDocs$isSet = true;
    return this;
  }

  static final ParseField GENERATION = new ParseField("generation");
  private int _generation;
  private boolean _generation$isSet;
  public int getGeneration() { return this._generation; }
  public Segment setGeneration(int val) {
    this._generation = val;
    _generation$isSet = true;
    return this;
  }

  static final ParseField MEMORY_IN_BYTES = new ParseField("memory_in_bytes");
  private double _memoryInBytes;
  private boolean _memoryInBytes$isSet;
  public double getMemoryInBytes() { return this._memoryInBytes; }
  public Segment setMemoryInBytes(double val) {
    this._memoryInBytes = val;
    _memoryInBytes$isSet = true;
    return this;
  }

  static final ParseField SEARCH = new ParseField("search");
  private Boolean _search;
  public Boolean getSearch() { return this._search; }
  public Segment setSearch(Boolean val) { this._search = val; return this; }

  static final ParseField SIZE_IN_BYTES = new ParseField("size_in_bytes");
  private double _sizeInBytes;
  private boolean _sizeInBytes$isSet;
  public double getSizeInBytes() { return this._sizeInBytes; }
  public Segment setSizeInBytes(double val) {
    this._sizeInBytes = val;
    _sizeInBytes$isSet = true;
    return this;
  }

  static final ParseField NUM_DOCS = new ParseField("num_docs");
  private long _numDocs;
  private boolean _numDocs$isSet;
  public long getNumDocs() { return this._numDocs; }
  public Segment setNumDocs(long val) {
    this._numDocs = val;
    _numDocs$isSet = true;
    return this;
  }

  static final ParseField VERSION = new ParseField("version");
  private String _version;
  public String getVersion() { return this._version; }
  public Segment setVersion(String val) { this._version = val; return this; }


  
  @Override
  public void toXContentInternal(XContentBuilder builder, ToXContent.Params params) throws IOException {
    
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
    if (_deletedDocs$isSet) {
      builder.field(DELETED_DOCS.getPreferredName(), _deletedDocs);
    }
    if (_generation$isSet) {
      builder.field(GENERATION.getPreferredName(), _generation);
    }
    if (_memoryInBytes$isSet) {
      builder.field(MEMORY_IN_BYTES.getPreferredName(), _memoryInBytes);
    }
    if (_search != null) {
      builder.field(SEARCH.getPreferredName(), _search);
    }
    if (_sizeInBytes$isSet) {
      builder.field(SIZE_IN_BYTES.getPreferredName(), _sizeInBytes);
    }
    if (_numDocs$isSet) {
      builder.field(NUM_DOCS.getPreferredName(), _numDocs);
    }
    if (_version != null) {
      builder.field(VERSION.getPreferredName(), _version);
    }
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
