
package org.elasticsearch.modules.indices.recovery;

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

public class IndicesRecoverySettings  implements XContentable<IndicesRecoverySettings> {
  
  static final ParseField COMPRESS = new ParseField("compress");
  private Boolean _compress;
  public Boolean getCompress() { return this._compress; }
  public IndicesRecoverySettings setCompress(Boolean val) { this._compress = val; return this; }


  static final ParseField CONCURRENT_SMALL_FILE_STREAMS = new ParseField("concurrent_small_file_streams");
  private Integer _concurrentSmallFileStreams;
  public Integer getConcurrentSmallFileStreams() { return this._concurrentSmallFileStreams; }
  public IndicesRecoverySettings setConcurrentSmallFileStreams(Integer val) { this._concurrentSmallFileStreams = val; return this; }


  static final ParseField CONCURRENT_STREAMS = new ParseField("concurrent_streams");
  private Integer _concurrentStreams;
  public Integer getConcurrentStreams() { return this._concurrentStreams; }
  public IndicesRecoverySettings setConcurrentStreams(Integer val) { this._concurrentStreams = val; return this; }


  static final ParseField FILE_CHUNK_SIZE = new ParseField("file_chunk_size");
  private String _fileChunkSize;
  public String getFileChunkSize() { return this._fileChunkSize; }
  public IndicesRecoverySettings setFileChunkSize(String val) { this._fileChunkSize = val; return this; }


  static final ParseField MAX_BYTES_PER_SECOND = new ParseField("max_bytes_per_second");
  private String _maxBytesPerSecond;
  public String getMaxBytesPerSecond() { return this._maxBytesPerSecond; }
  public IndicesRecoverySettings setMaxBytesPerSecond(String val) { this._maxBytesPerSecond = val; return this; }


  static final ParseField TRANSLOG_OPERATIONS = new ParseField("translog_operations");
  private Integer _translogOperations;
  public Integer getTranslogOperations() { return this._translogOperations; }
  public IndicesRecoverySettings setTranslogOperations(Integer val) { this._translogOperations = val; return this; }


  static final ParseField TRANSLOG_SIZE = new ParseField("translog_size");
  private String _translogSize;
  public String getTranslogSize() { return this._translogSize; }
  public IndicesRecoverySettings setTranslogSize(String val) { this._translogSize = val; return this; }


  
  @Override
  public XContentBuilder toXContent(XContentBuilder builder, ToXContent.Params params) throws IOException {
    builder.startObject();
    if (_compress != null) {
      builder.field(COMPRESS.getPreferredName(), _compress);
    }
    if (_concurrentSmallFileStreams != null) {
      builder.field(CONCURRENT_SMALL_FILE_STREAMS.getPreferredName(), _concurrentSmallFileStreams);
    }
    if (_concurrentStreams != null) {
      builder.field(CONCURRENT_STREAMS.getPreferredName(), _concurrentStreams);
    }
    if (_fileChunkSize != null) {
      builder.field(FILE_CHUNK_SIZE.getPreferredName(), _fileChunkSize);
    }
    if (_maxBytesPerSecond != null) {
      builder.field(MAX_BYTES_PER_SECOND.getPreferredName(), _maxBytesPerSecond);
    }
    if (_translogOperations != null) {
      builder.field(TRANSLOG_OPERATIONS.getPreferredName(), _translogOperations);
    }
    if (_translogSize != null) {
      builder.field(TRANSLOG_SIZE.getPreferredName(), _translogSize);
    }
    builder.endObject();
    return builder;
  }

  @Override
  public IndicesRecoverySettings fromXContent(XContentParser parser) throws IOException, XContentParseException {
    return IndicesRecoverySettings.PARSER.apply(parser, null);
  }

  public static final ObjectParser<IndicesRecoverySettings, Void> PARSER =
    new ObjectParser<>(IndicesRecoverySettings.class.getName(), false, IndicesRecoverySettings::new);

  static {
    PARSER.declareBoolean(IndicesRecoverySettings::setCompress, COMPRESS);
    PARSER.declareInt(IndicesRecoverySettings::setConcurrentSmallFileStreams, CONCURRENT_SMALL_FILE_STREAMS);
    PARSER.declareInt(IndicesRecoverySettings::setConcurrentStreams, CONCURRENT_STREAMS);
    PARSER.declareString(IndicesRecoverySettings::setFileChunkSize, FILE_CHUNK_SIZE);
    PARSER.declareString(IndicesRecoverySettings::setMaxBytesPerSecond, MAX_BYTES_PER_SECOND);
    PARSER.declareInt(IndicesRecoverySettings::setTranslogOperations, TRANSLOG_OPERATIONS);
    PARSER.declareString(IndicesRecoverySettings::setTranslogSize, TRANSLOG_SIZE);
  }

}
