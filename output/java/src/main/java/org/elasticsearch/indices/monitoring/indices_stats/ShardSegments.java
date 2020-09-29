
package org.elasticsearch.indices.monitoring.indices_stats;

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
import org.elasticsearch.indices.monitoring.indices_stats.*;

public class ShardSegments  implements XContentable<ShardSegments> {
  
  static final ParseField COUNT = new ParseField("count");
  private long _count;
  private boolean _count$isSet;
  public long getCount() { return this._count; }
  public ShardSegments setCount(long val) {
    this._count = val;
    _count$isSet = true;
    return this;
  }

  static final ParseField DOC_VALUES_MEMORY_IN_BYTES = new ParseField("doc_values_memory_in_bytes");
  private long _docValuesMemoryInBytes;
  private boolean _docValuesMemoryInBytes$isSet;
  public long getDocValuesMemoryInBytes() { return this._docValuesMemoryInBytes; }
  public ShardSegments setDocValuesMemoryInBytes(long val) {
    this._docValuesMemoryInBytes = val;
    _docValuesMemoryInBytes$isSet = true;
    return this;
  }

  static final ParseField FILE_SIZES = new ParseField("file_sizes");
  private NamedContainer<String, ShardFileSizeInfo> _fileSizes;
  public NamedContainer<String, ShardFileSizeInfo> getFileSizes() { return this._fileSizes; }
  public ShardSegments setFileSizes(NamedContainer<String, ShardFileSizeInfo> val) { this._fileSizes = val; return this; }

  static final ParseField FIXED_BIT_SET_MEMORY_IN_BYTES = new ParseField("fixed_bit_set_memory_in_bytes");
  private long _fixedBitSetMemoryInBytes;
  private boolean _fixedBitSetMemoryInBytes$isSet;
  public long getFixedBitSetMemoryInBytes() { return this._fixedBitSetMemoryInBytes; }
  public ShardSegments setFixedBitSetMemoryInBytes(long val) {
    this._fixedBitSetMemoryInBytes = val;
    _fixedBitSetMemoryInBytes$isSet = true;
    return this;
  }

  static final ParseField INDEX_WRITER_MEMORY_IN_BYTES = new ParseField("index_writer_memory_in_bytes");
  private long _indexWriterMemoryInBytes;
  private boolean _indexWriterMemoryInBytes$isSet;
  public long getIndexWriterMemoryInBytes() { return this._indexWriterMemoryInBytes; }
  public ShardSegments setIndexWriterMemoryInBytes(long val) {
    this._indexWriterMemoryInBytes = val;
    _indexWriterMemoryInBytes$isSet = true;
    return this;
  }

  static final ParseField MAX_UNSAFE_AUTO_ID_TIMESTAMP = new ParseField("max_unsafe_auto_id_timestamp");
  private long _maxUnsafeAutoIdTimestamp;
  private boolean _maxUnsafeAutoIdTimestamp$isSet;
  public long getMaxUnsafeAutoIdTimestamp() { return this._maxUnsafeAutoIdTimestamp; }
  public ShardSegments setMaxUnsafeAutoIdTimestamp(long val) {
    this._maxUnsafeAutoIdTimestamp = val;
    _maxUnsafeAutoIdTimestamp$isSet = true;
    return this;
  }

  static final ParseField MEMORY_IN_BYTES = new ParseField("memory_in_bytes");
  private long _memoryInBytes;
  private boolean _memoryInBytes$isSet;
  public long getMemoryInBytes() { return this._memoryInBytes; }
  public ShardSegments setMemoryInBytes(long val) {
    this._memoryInBytes = val;
    _memoryInBytes$isSet = true;
    return this;
  }

  static final ParseField NORMS_MEMORY_IN_BYTES = new ParseField("norms_memory_in_bytes");
  private long _normsMemoryInBytes;
  private boolean _normsMemoryInBytes$isSet;
  public long getNormsMemoryInBytes() { return this._normsMemoryInBytes; }
  public ShardSegments setNormsMemoryInBytes(long val) {
    this._normsMemoryInBytes = val;
    _normsMemoryInBytes$isSet = true;
    return this;
  }

  static final ParseField POINTS_MEMORY_IN_BYTES = new ParseField("points_memory_in_bytes");
  private long _pointsMemoryInBytes;
  private boolean _pointsMemoryInBytes$isSet;
  public long getPointsMemoryInBytes() { return this._pointsMemoryInBytes; }
  public ShardSegments setPointsMemoryInBytes(long val) {
    this._pointsMemoryInBytes = val;
    _pointsMemoryInBytes$isSet = true;
    return this;
  }

  static final ParseField STORED_FIELDS_MEMORY_IN_BYTES = new ParseField("stored_fields_memory_in_bytes");
  private long _storedFieldsMemoryInBytes;
  private boolean _storedFieldsMemoryInBytes$isSet;
  public long getStoredFieldsMemoryInBytes() { return this._storedFieldsMemoryInBytes; }
  public ShardSegments setStoredFieldsMemoryInBytes(long val) {
    this._storedFieldsMemoryInBytes = val;
    _storedFieldsMemoryInBytes$isSet = true;
    return this;
  }

  static final ParseField TERMS_MEMORY_IN_BYTES = new ParseField("terms_memory_in_bytes");
  private long _termsMemoryInBytes;
  private boolean _termsMemoryInBytes$isSet;
  public long getTermsMemoryInBytes() { return this._termsMemoryInBytes; }
  public ShardSegments setTermsMemoryInBytes(long val) {
    this._termsMemoryInBytes = val;
    _termsMemoryInBytes$isSet = true;
    return this;
  }

  static final ParseField TERM_VECTORS_MEMORY_IN_BYTES = new ParseField("term_vectors_memory_in_bytes");
  private long _termVectorsMemoryInBytes;
  private boolean _termVectorsMemoryInBytes$isSet;
  public long getTermVectorsMemoryInBytes() { return this._termVectorsMemoryInBytes; }
  public ShardSegments setTermVectorsMemoryInBytes(long val) {
    this._termVectorsMemoryInBytes = val;
    _termVectorsMemoryInBytes$isSet = true;
    return this;
  }

  static final ParseField VERSION_MAP_MEMORY_IN_BYTES = new ParseField("version_map_memory_in_bytes");
  private long _versionMapMemoryInBytes;
  private boolean _versionMapMemoryInBytes$isSet;
  public long getVersionMapMemoryInBytes() { return this._versionMapMemoryInBytes; }
  public ShardSegments setVersionMapMemoryInBytes(long val) {
    this._versionMapMemoryInBytes = val;
    _versionMapMemoryInBytes$isSet = true;
    return this;
  }


  
  @Override
  public void toXContentInternal(XContentBuilder builder, ToXContent.Params params) throws IOException {
    
    if (_count$isSet) {
      builder.field(COUNT.getPreferredName(), _count);
    }
    if (_docValuesMemoryInBytes$isSet) {
      builder.field(DOC_VALUES_MEMORY_IN_BYTES.getPreferredName(), _docValuesMemoryInBytes);
    }
    if (_fileSizes != null) {
      builder.field(FILE_SIZES.getPreferredName());
      _fileSizes.toXContent(builder, params);
    }
    if (_fixedBitSetMemoryInBytes$isSet) {
      builder.field(FIXED_BIT_SET_MEMORY_IN_BYTES.getPreferredName(), _fixedBitSetMemoryInBytes);
    }
    if (_indexWriterMemoryInBytes$isSet) {
      builder.field(INDEX_WRITER_MEMORY_IN_BYTES.getPreferredName(), _indexWriterMemoryInBytes);
    }
    if (_maxUnsafeAutoIdTimestamp$isSet) {
      builder.field(MAX_UNSAFE_AUTO_ID_TIMESTAMP.getPreferredName(), _maxUnsafeAutoIdTimestamp);
    }
    if (_memoryInBytes$isSet) {
      builder.field(MEMORY_IN_BYTES.getPreferredName(), _memoryInBytes);
    }
    if (_normsMemoryInBytes$isSet) {
      builder.field(NORMS_MEMORY_IN_BYTES.getPreferredName(), _normsMemoryInBytes);
    }
    if (_pointsMemoryInBytes$isSet) {
      builder.field(POINTS_MEMORY_IN_BYTES.getPreferredName(), _pointsMemoryInBytes);
    }
    if (_storedFieldsMemoryInBytes$isSet) {
      builder.field(STORED_FIELDS_MEMORY_IN_BYTES.getPreferredName(), _storedFieldsMemoryInBytes);
    }
    if (_termsMemoryInBytes$isSet) {
      builder.field(TERMS_MEMORY_IN_BYTES.getPreferredName(), _termsMemoryInBytes);
    }
    if (_termVectorsMemoryInBytes$isSet) {
      builder.field(TERM_VECTORS_MEMORY_IN_BYTES.getPreferredName(), _termVectorsMemoryInBytes);
    }
    if (_versionMapMemoryInBytes$isSet) {
      builder.field(VERSION_MAP_MEMORY_IN_BYTES.getPreferredName(), _versionMapMemoryInBytes);
    }
  }

  @Override
  public ShardSegments fromXContent(XContentParser parser) throws IOException, XContentParseException {
    return ShardSegments.PARSER.apply(parser, null);
  }

  public static final ObjectParser<ShardSegments, Void> PARSER =
    new ObjectParser<>(ShardSegments.class.getName(), false, ShardSegments::new);

  static {
    PARSER.declareLong(ShardSegments::setCount, COUNT);
    PARSER.declareLong(ShardSegments::setDocValuesMemoryInBytes, DOC_VALUES_MEMORY_IN_BYTES);
    PARSER.declareObject(ShardSegments::setFileSizes, (p, t) -> new NamedContainer<>(n -> () -> n,pp -> ShardFileSizeInfo.PARSER.apply(pp, null)), FILE_SIZES);
    PARSER.declareLong(ShardSegments::setFixedBitSetMemoryInBytes, FIXED_BIT_SET_MEMORY_IN_BYTES);
    PARSER.declareLong(ShardSegments::setIndexWriterMemoryInBytes, INDEX_WRITER_MEMORY_IN_BYTES);
    PARSER.declareLong(ShardSegments::setMaxUnsafeAutoIdTimestamp, MAX_UNSAFE_AUTO_ID_TIMESTAMP);
    PARSER.declareLong(ShardSegments::setMemoryInBytes, MEMORY_IN_BYTES);
    PARSER.declareLong(ShardSegments::setNormsMemoryInBytes, NORMS_MEMORY_IN_BYTES);
    PARSER.declareLong(ShardSegments::setPointsMemoryInBytes, POINTS_MEMORY_IN_BYTES);
    PARSER.declareLong(ShardSegments::setStoredFieldsMemoryInBytes, STORED_FIELDS_MEMORY_IN_BYTES);
    PARSER.declareLong(ShardSegments::setTermsMemoryInBytes, TERMS_MEMORY_IN_BYTES);
    PARSER.declareLong(ShardSegments::setTermVectorsMemoryInBytes, TERM_VECTORS_MEMORY_IN_BYTES);
    PARSER.declareLong(ShardSegments::setVersionMapMemoryInBytes, VERSION_MAP_MEMORY_IN_BYTES);
  }

}
