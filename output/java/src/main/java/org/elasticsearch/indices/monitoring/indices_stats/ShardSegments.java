
package org.elasticsearch.indices.monitoring.indices_stats;

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
import org.elasticsearch.indices.monitoring.indices_stats.*;

public class ShardSegments  implements XContentable<ShardSegments> {
  
  static final ParseField COUNT = new ParseField("count");
  private Long _count;
  public Long getCount() { return this._count; }
  public ShardSegments setCount(Long val) { this._count = val; return this; }


  static final ParseField DOC_VALUES_MEMORY_IN_BYTES = new ParseField("doc_values_memory_in_bytes");
  private Long _docValuesMemoryInBytes;
  public Long getDocValuesMemoryInBytes() { return this._docValuesMemoryInBytes; }
  public ShardSegments setDocValuesMemoryInBytes(Long val) { this._docValuesMemoryInBytes = val; return this; }


  static final ParseField FILE_SIZES = new ParseField("file_sizes");
  private NamedContainer<String, ShardFileSizeInfo> _fileSizes;
  public NamedContainer<String, ShardFileSizeInfo> getFileSizes() { return this._fileSizes; }
  public ShardSegments setFileSizes(NamedContainer<String, ShardFileSizeInfo> val) { this._fileSizes = val; return this; }


  static final ParseField FIXED_BIT_SET_MEMORY_IN_BYTES = new ParseField("fixed_bit_set_memory_in_bytes");
  private Long _fixedBitSetMemoryInBytes;
  public Long getFixedBitSetMemoryInBytes() { return this._fixedBitSetMemoryInBytes; }
  public ShardSegments setFixedBitSetMemoryInBytes(Long val) { this._fixedBitSetMemoryInBytes = val; return this; }


  static final ParseField INDEX_WRITER_MEMORY_IN_BYTES = new ParseField("index_writer_memory_in_bytes");
  private Long _indexWriterMemoryInBytes;
  public Long getIndexWriterMemoryInBytes() { return this._indexWriterMemoryInBytes; }
  public ShardSegments setIndexWriterMemoryInBytes(Long val) { this._indexWriterMemoryInBytes = val; return this; }


  static final ParseField MAX_UNSAFE_AUTO_ID_TIMESTAMP = new ParseField("max_unsafe_auto_id_timestamp");
  private Long _maxUnsafeAutoIdTimestamp;
  public Long getMaxUnsafeAutoIdTimestamp() { return this._maxUnsafeAutoIdTimestamp; }
  public ShardSegments setMaxUnsafeAutoIdTimestamp(Long val) { this._maxUnsafeAutoIdTimestamp = val; return this; }


  static final ParseField MEMORY_IN_BYTES = new ParseField("memory_in_bytes");
  private Long _memoryInBytes;
  public Long getMemoryInBytes() { return this._memoryInBytes; }
  public ShardSegments setMemoryInBytes(Long val) { this._memoryInBytes = val; return this; }


  static final ParseField NORMS_MEMORY_IN_BYTES = new ParseField("norms_memory_in_bytes");
  private Long _normsMemoryInBytes;
  public Long getNormsMemoryInBytes() { return this._normsMemoryInBytes; }
  public ShardSegments setNormsMemoryInBytes(Long val) { this._normsMemoryInBytes = val; return this; }


  static final ParseField POINTS_MEMORY_IN_BYTES = new ParseField("points_memory_in_bytes");
  private Long _pointsMemoryInBytes;
  public Long getPointsMemoryInBytes() { return this._pointsMemoryInBytes; }
  public ShardSegments setPointsMemoryInBytes(Long val) { this._pointsMemoryInBytes = val; return this; }


  static final ParseField STORED_FIELDS_MEMORY_IN_BYTES = new ParseField("stored_fields_memory_in_bytes");
  private Long _storedFieldsMemoryInBytes;
  public Long getStoredFieldsMemoryInBytes() { return this._storedFieldsMemoryInBytes; }
  public ShardSegments setStoredFieldsMemoryInBytes(Long val) { this._storedFieldsMemoryInBytes = val; return this; }


  static final ParseField TERMS_MEMORY_IN_BYTES = new ParseField("terms_memory_in_bytes");
  private Long _termsMemoryInBytes;
  public Long getTermsMemoryInBytes() { return this._termsMemoryInBytes; }
  public ShardSegments setTermsMemoryInBytes(Long val) { this._termsMemoryInBytes = val; return this; }


  static final ParseField TERM_VECTORS_MEMORY_IN_BYTES = new ParseField("term_vectors_memory_in_bytes");
  private Long _termVectorsMemoryInBytes;
  public Long getTermVectorsMemoryInBytes() { return this._termVectorsMemoryInBytes; }
  public ShardSegments setTermVectorsMemoryInBytes(Long val) { this._termVectorsMemoryInBytes = val; return this; }


  static final ParseField VERSION_MAP_MEMORY_IN_BYTES = new ParseField("version_map_memory_in_bytes");
  private Long _versionMapMemoryInBytes;
  public Long getVersionMapMemoryInBytes() { return this._versionMapMemoryInBytes; }
  public ShardSegments setVersionMapMemoryInBytes(Long val) { this._versionMapMemoryInBytes = val; return this; }


  
  @Override
  public XContentBuilder toXContent(XContentBuilder builder, ToXContent.Params params) throws IOException {
    builder.startObject();
    if (_count != null) {
      builder.field(COUNT.getPreferredName(), _count);
    }
    if (_docValuesMemoryInBytes != null) {
      builder.field(DOC_VALUES_MEMORY_IN_BYTES.getPreferredName(), _docValuesMemoryInBytes);
    }
    if (_fileSizes != null) {
      builder.field(FILE_SIZES.getPreferredName());
      _fileSizes.toXContent(builder, params);
    }
    if (_fixedBitSetMemoryInBytes != null) {
      builder.field(FIXED_BIT_SET_MEMORY_IN_BYTES.getPreferredName(), _fixedBitSetMemoryInBytes);
    }
    if (_indexWriterMemoryInBytes != null) {
      builder.field(INDEX_WRITER_MEMORY_IN_BYTES.getPreferredName(), _indexWriterMemoryInBytes);
    }
    if (_maxUnsafeAutoIdTimestamp != null) {
      builder.field(MAX_UNSAFE_AUTO_ID_TIMESTAMP.getPreferredName(), _maxUnsafeAutoIdTimestamp);
    }
    if (_memoryInBytes != null) {
      builder.field(MEMORY_IN_BYTES.getPreferredName(), _memoryInBytes);
    }
    if (_normsMemoryInBytes != null) {
      builder.field(NORMS_MEMORY_IN_BYTES.getPreferredName(), _normsMemoryInBytes);
    }
    if (_pointsMemoryInBytes != null) {
      builder.field(POINTS_MEMORY_IN_BYTES.getPreferredName(), _pointsMemoryInBytes);
    }
    if (_storedFieldsMemoryInBytes != null) {
      builder.field(STORED_FIELDS_MEMORY_IN_BYTES.getPreferredName(), _storedFieldsMemoryInBytes);
    }
    if (_termsMemoryInBytes != null) {
      builder.field(TERMS_MEMORY_IN_BYTES.getPreferredName(), _termsMemoryInBytes);
    }
    if (_termVectorsMemoryInBytes != null) {
      builder.field(TERM_VECTORS_MEMORY_IN_BYTES.getPreferredName(), _termVectorsMemoryInBytes);
    }
    if (_versionMapMemoryInBytes != null) {
      builder.field(VERSION_MAP_MEMORY_IN_BYTES.getPreferredName(), _versionMapMemoryInBytes);
    }
    builder.endObject();
    return builder;
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
