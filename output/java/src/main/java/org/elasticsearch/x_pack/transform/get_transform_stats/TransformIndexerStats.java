
package org.elasticsearch.x_pack.transform.get_transform_stats;

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

public class TransformIndexerStats  implements XContentable<TransformIndexerStats> {
  
  static final ParseField EXPONENTIAL_AVG_CHECKPOINT_DURATION_MS = new ParseField("exponential_avg_checkpoint_duration_ms");
  private Double _exponentialAvgCheckpointDurationMs;
  public Double getExponentialAvgCheckpointDurationMs() { return this._exponentialAvgCheckpointDurationMs; }
  public TransformIndexerStats setExponentialAvgCheckpointDurationMs(Double val) { this._exponentialAvgCheckpointDurationMs = val; return this; }


  static final ParseField EXPONENTIAL_AVG_DOCUMENTS_INDEXED = new ParseField("exponential_avg_documents_indexed");
  private Double _exponentialAvgDocumentsIndexed;
  public Double getExponentialAvgDocumentsIndexed() { return this._exponentialAvgDocumentsIndexed; }
  public TransformIndexerStats setExponentialAvgDocumentsIndexed(Double val) { this._exponentialAvgDocumentsIndexed = val; return this; }


  static final ParseField EXPONENTIAL_AVG_DOCUMENTS_PROCESSED = new ParseField("exponential_avg_documents_processed");
  private Double _exponentialAvgDocumentsProcessed;
  public Double getExponentialAvgDocumentsProcessed() { return this._exponentialAvgDocumentsProcessed; }
  public TransformIndexerStats setExponentialAvgDocumentsProcessed(Double val) { this._exponentialAvgDocumentsProcessed = val; return this; }


  static final ParseField PAGES_PROCESSED = new ParseField("pages_processed");
  private Long _pagesProcessed;
  public Long getPagesProcessed() { return this._pagesProcessed; }
  public TransformIndexerStats setPagesProcessed(Long val) { this._pagesProcessed = val; return this; }


  static final ParseField DOCUMENTS_PROCESSED = new ParseField("documents_processed");
  private Long _documentsProcessed;
  public Long getDocumentsProcessed() { return this._documentsProcessed; }
  public TransformIndexerStats setDocumentsProcessed(Long val) { this._documentsProcessed = val; return this; }


  static final ParseField DOCUMENTS_INDEXED = new ParseField("documents_indexed");
  private Long _documentsIndexed;
  public Long getDocumentsIndexed() { return this._documentsIndexed; }
  public TransformIndexerStats setDocumentsIndexed(Long val) { this._documentsIndexed = val; return this; }


  static final ParseField TRIGGER_COUNT = new ParseField("trigger_count");
  private Long _triggerCount;
  public Long getTriggerCount() { return this._triggerCount; }
  public TransformIndexerStats setTriggerCount(Long val) { this._triggerCount = val; return this; }


  static final ParseField INDEX_TIME_IN_MS = new ParseField("index_time_in_ms");
  private Long _indexTimeInMs;
  public Long getIndexTimeInMs() { return this._indexTimeInMs; }
  public TransformIndexerStats setIndexTimeInMs(Long val) { this._indexTimeInMs = val; return this; }


  static final ParseField SEARCH_TIME_IN_MS = new ParseField("search_time_in_ms");
  private Long _searchTimeInMs;
  public Long getSearchTimeInMs() { return this._searchTimeInMs; }
  public TransformIndexerStats setSearchTimeInMs(Long val) { this._searchTimeInMs = val; return this; }


  static final ParseField PROCESSING_TIME_IN_MS = new ParseField("processing_time_in_ms");
  private Long _processingTimeInMs;
  public Long getProcessingTimeInMs() { return this._processingTimeInMs; }
  public TransformIndexerStats setProcessingTimeInMs(Long val) { this._processingTimeInMs = val; return this; }


  static final ParseField INDEX_TOTAL = new ParseField("index_total");
  private Long _indexTotal;
  public Long getIndexTotal() { return this._indexTotal; }
  public TransformIndexerStats setIndexTotal(Long val) { this._indexTotal = val; return this; }


  static final ParseField SEARCH_TOTAL = new ParseField("search_total");
  private Long _searchTotal;
  public Long getSearchTotal() { return this._searchTotal; }
  public TransformIndexerStats setSearchTotal(Long val) { this._searchTotal = val; return this; }


  static final ParseField PROCESSING_TOTAL = new ParseField("processing_total");
  private Long _processingTotal;
  public Long getProcessingTotal() { return this._processingTotal; }
  public TransformIndexerStats setProcessingTotal(Long val) { this._processingTotal = val; return this; }


  static final ParseField SEARCH_FAILURES = new ParseField("search_failures");
  private Long _searchFailures;
  public Long getSearchFailures() { return this._searchFailures; }
  public TransformIndexerStats setSearchFailures(Long val) { this._searchFailures = val; return this; }


  static final ParseField INDEX_FAILURES = new ParseField("index_failures");
  private Long _indexFailures;
  public Long getIndexFailures() { return this._indexFailures; }
  public TransformIndexerStats setIndexFailures(Long val) { this._indexFailures = val; return this; }


  
  @Override
  public XContentBuilder toXContent(XContentBuilder builder, ToXContent.Params params) throws IOException {
    builder.startObject();
    if (_exponentialAvgCheckpointDurationMs != null) {
      builder.field(EXPONENTIAL_AVG_CHECKPOINT_DURATION_MS.getPreferredName(), _exponentialAvgCheckpointDurationMs);
    }
    if (_exponentialAvgDocumentsIndexed != null) {
      builder.field(EXPONENTIAL_AVG_DOCUMENTS_INDEXED.getPreferredName(), _exponentialAvgDocumentsIndexed);
    }
    if (_exponentialAvgDocumentsProcessed != null) {
      builder.field(EXPONENTIAL_AVG_DOCUMENTS_PROCESSED.getPreferredName(), _exponentialAvgDocumentsProcessed);
    }
    if (_pagesProcessed != null) {
      builder.field(PAGES_PROCESSED.getPreferredName(), _pagesProcessed);
    }
    if (_documentsProcessed != null) {
      builder.field(DOCUMENTS_PROCESSED.getPreferredName(), _documentsProcessed);
    }
    if (_documentsIndexed != null) {
      builder.field(DOCUMENTS_INDEXED.getPreferredName(), _documentsIndexed);
    }
    if (_triggerCount != null) {
      builder.field(TRIGGER_COUNT.getPreferredName(), _triggerCount);
    }
    if (_indexTimeInMs != null) {
      builder.field(INDEX_TIME_IN_MS.getPreferredName(), _indexTimeInMs);
    }
    if (_searchTimeInMs != null) {
      builder.field(SEARCH_TIME_IN_MS.getPreferredName(), _searchTimeInMs);
    }
    if (_processingTimeInMs != null) {
      builder.field(PROCESSING_TIME_IN_MS.getPreferredName(), _processingTimeInMs);
    }
    if (_indexTotal != null) {
      builder.field(INDEX_TOTAL.getPreferredName(), _indexTotal);
    }
    if (_searchTotal != null) {
      builder.field(SEARCH_TOTAL.getPreferredName(), _searchTotal);
    }
    if (_processingTotal != null) {
      builder.field(PROCESSING_TOTAL.getPreferredName(), _processingTotal);
    }
    if (_searchFailures != null) {
      builder.field(SEARCH_FAILURES.getPreferredName(), _searchFailures);
    }
    if (_indexFailures != null) {
      builder.field(INDEX_FAILURES.getPreferredName(), _indexFailures);
    }
    builder.endObject();
    return builder;
  }

  @Override
  public TransformIndexerStats fromXContent(XContentParser parser) throws IOException, XContentParseException {
    return TransformIndexerStats.PARSER.apply(parser, null);
  }

  public static final ObjectParser<TransformIndexerStats, Void> PARSER =
    new ObjectParser<>(TransformIndexerStats.class.getName(), false, TransformIndexerStats::new);

  static {
    PARSER.declareDouble(TransformIndexerStats::setExponentialAvgCheckpointDurationMs, EXPONENTIAL_AVG_CHECKPOINT_DURATION_MS);
    PARSER.declareDouble(TransformIndexerStats::setExponentialAvgDocumentsIndexed, EXPONENTIAL_AVG_DOCUMENTS_INDEXED);
    PARSER.declareDouble(TransformIndexerStats::setExponentialAvgDocumentsProcessed, EXPONENTIAL_AVG_DOCUMENTS_PROCESSED);
    PARSER.declareLong(TransformIndexerStats::setPagesProcessed, PAGES_PROCESSED);
    PARSER.declareLong(TransformIndexerStats::setDocumentsProcessed, DOCUMENTS_PROCESSED);
    PARSER.declareLong(TransformIndexerStats::setDocumentsIndexed, DOCUMENTS_INDEXED);
    PARSER.declareLong(TransformIndexerStats::setTriggerCount, TRIGGER_COUNT);
    PARSER.declareLong(TransformIndexerStats::setIndexTimeInMs, INDEX_TIME_IN_MS);
    PARSER.declareLong(TransformIndexerStats::setSearchTimeInMs, SEARCH_TIME_IN_MS);
    PARSER.declareLong(TransformIndexerStats::setProcessingTimeInMs, PROCESSING_TIME_IN_MS);
    PARSER.declareLong(TransformIndexerStats::setIndexTotal, INDEX_TOTAL);
    PARSER.declareLong(TransformIndexerStats::setSearchTotal, SEARCH_TOTAL);
    PARSER.declareLong(TransformIndexerStats::setProcessingTotal, PROCESSING_TOTAL);
    PARSER.declareLong(TransformIndexerStats::setSearchFailures, SEARCH_FAILURES);
    PARSER.declareLong(TransformIndexerStats::setIndexFailures, INDEX_FAILURES);
  }

}
