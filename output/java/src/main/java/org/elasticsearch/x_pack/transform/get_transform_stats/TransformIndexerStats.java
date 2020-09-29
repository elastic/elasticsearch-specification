
package org.elasticsearch.x_pack.transform.get_transform_stats;

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

public class TransformIndexerStats  implements XContentable<TransformIndexerStats> {
  
  static final ParseField DOCUMENTS_INDEXED = new ParseField("documents_indexed");
  private long _documentsIndexed;
  private boolean _documentsIndexed$isSet;
  public long getDocumentsIndexed() { return this._documentsIndexed; }
  public TransformIndexerStats setDocumentsIndexed(long val) {
    this._documentsIndexed = val;
    _documentsIndexed$isSet = true;
    return this;
  }

  static final ParseField DOCUMENTS_PROCESSED = new ParseField("documents_processed");
  private long _documentsProcessed;
  private boolean _documentsProcessed$isSet;
  public long getDocumentsProcessed() { return this._documentsProcessed; }
  public TransformIndexerStats setDocumentsProcessed(long val) {
    this._documentsProcessed = val;
    _documentsProcessed$isSet = true;
    return this;
  }

  static final ParseField EXPONENTIAL_AVG_CHECKPOINT_DURATION_MS = new ParseField("exponential_avg_checkpoint_duration_ms");
  private double _exponentialAvgCheckpointDurationMs;
  private boolean _exponentialAvgCheckpointDurationMs$isSet;
  public double getExponentialAvgCheckpointDurationMs() { return this._exponentialAvgCheckpointDurationMs; }
  public TransformIndexerStats setExponentialAvgCheckpointDurationMs(double val) {
    this._exponentialAvgCheckpointDurationMs = val;
    _exponentialAvgCheckpointDurationMs$isSet = true;
    return this;
  }

  static final ParseField EXPONENTIAL_AVG_DOCUMENTS_INDEXED = new ParseField("exponential_avg_documents_indexed");
  private double _exponentialAvgDocumentsIndexed;
  private boolean _exponentialAvgDocumentsIndexed$isSet;
  public double getExponentialAvgDocumentsIndexed() { return this._exponentialAvgDocumentsIndexed; }
  public TransformIndexerStats setExponentialAvgDocumentsIndexed(double val) {
    this._exponentialAvgDocumentsIndexed = val;
    _exponentialAvgDocumentsIndexed$isSet = true;
    return this;
  }

  static final ParseField EXPONENTIAL_AVG_DOCUMENTS_PROCESSED = new ParseField("exponential_avg_documents_processed");
  private double _exponentialAvgDocumentsProcessed;
  private boolean _exponentialAvgDocumentsProcessed$isSet;
  public double getExponentialAvgDocumentsProcessed() { return this._exponentialAvgDocumentsProcessed; }
  public TransformIndexerStats setExponentialAvgDocumentsProcessed(double val) {
    this._exponentialAvgDocumentsProcessed = val;
    _exponentialAvgDocumentsProcessed$isSet = true;
    return this;
  }

  static final ParseField INDEX_FAILURES = new ParseField("index_failures");
  private long _indexFailures;
  private boolean _indexFailures$isSet;
  public long getIndexFailures() { return this._indexFailures; }
  public TransformIndexerStats setIndexFailures(long val) {
    this._indexFailures = val;
    _indexFailures$isSet = true;
    return this;
  }

  static final ParseField INDEX_TIME_IN_MS = new ParseField("index_time_in_ms");
  private long _indexTimeInMs;
  private boolean _indexTimeInMs$isSet;
  public long getIndexTimeInMs() { return this._indexTimeInMs; }
  public TransformIndexerStats setIndexTimeInMs(long val) {
    this._indexTimeInMs = val;
    _indexTimeInMs$isSet = true;
    return this;
  }

  static final ParseField INDEX_TOTAL = new ParseField("index_total");
  private long _indexTotal;
  private boolean _indexTotal$isSet;
  public long getIndexTotal() { return this._indexTotal; }
  public TransformIndexerStats setIndexTotal(long val) {
    this._indexTotal = val;
    _indexTotal$isSet = true;
    return this;
  }

  static final ParseField PAGES_PROCESSED = new ParseField("pages_processed");
  private long _pagesProcessed;
  private boolean _pagesProcessed$isSet;
  public long getPagesProcessed() { return this._pagesProcessed; }
  public TransformIndexerStats setPagesProcessed(long val) {
    this._pagesProcessed = val;
    _pagesProcessed$isSet = true;
    return this;
  }

  static final ParseField PROCESSING_TIME_IN_MS = new ParseField("processing_time_in_ms");
  private long _processingTimeInMs;
  private boolean _processingTimeInMs$isSet;
  public long getProcessingTimeInMs() { return this._processingTimeInMs; }
  public TransformIndexerStats setProcessingTimeInMs(long val) {
    this._processingTimeInMs = val;
    _processingTimeInMs$isSet = true;
    return this;
  }

  static final ParseField PROCESSING_TOTAL = new ParseField("processing_total");
  private long _processingTotal;
  private boolean _processingTotal$isSet;
  public long getProcessingTotal() { return this._processingTotal; }
  public TransformIndexerStats setProcessingTotal(long val) {
    this._processingTotal = val;
    _processingTotal$isSet = true;
    return this;
  }

  static final ParseField SEARCH_FAILURES = new ParseField("search_failures");
  private long _searchFailures;
  private boolean _searchFailures$isSet;
  public long getSearchFailures() { return this._searchFailures; }
  public TransformIndexerStats setSearchFailures(long val) {
    this._searchFailures = val;
    _searchFailures$isSet = true;
    return this;
  }

  static final ParseField SEARCH_TIME_IN_MS = new ParseField("search_time_in_ms");
  private long _searchTimeInMs;
  private boolean _searchTimeInMs$isSet;
  public long getSearchTimeInMs() { return this._searchTimeInMs; }
  public TransformIndexerStats setSearchTimeInMs(long val) {
    this._searchTimeInMs = val;
    _searchTimeInMs$isSet = true;
    return this;
  }

  static final ParseField SEARCH_TOTAL = new ParseField("search_total");
  private long _searchTotal;
  private boolean _searchTotal$isSet;
  public long getSearchTotal() { return this._searchTotal; }
  public TransformIndexerStats setSearchTotal(long val) {
    this._searchTotal = val;
    _searchTotal$isSet = true;
    return this;
  }

  static final ParseField TRIGGER_COUNT = new ParseField("trigger_count");
  private long _triggerCount;
  private boolean _triggerCount$isSet;
  public long getTriggerCount() { return this._triggerCount; }
  public TransformIndexerStats setTriggerCount(long val) {
    this._triggerCount = val;
    _triggerCount$isSet = true;
    return this;
  }


  
  @Override
  public void toXContentInternal(XContentBuilder builder, ToXContent.Params params) throws IOException {
    
    if (_documentsIndexed$isSet) {
      builder.field(DOCUMENTS_INDEXED.getPreferredName(), _documentsIndexed);
    }
    if (_documentsProcessed$isSet) {
      builder.field(DOCUMENTS_PROCESSED.getPreferredName(), _documentsProcessed);
    }
    if (_exponentialAvgCheckpointDurationMs$isSet) {
      builder.field(EXPONENTIAL_AVG_CHECKPOINT_DURATION_MS.getPreferredName(), _exponentialAvgCheckpointDurationMs);
    }
    if (_exponentialAvgDocumentsIndexed$isSet) {
      builder.field(EXPONENTIAL_AVG_DOCUMENTS_INDEXED.getPreferredName(), _exponentialAvgDocumentsIndexed);
    }
    if (_exponentialAvgDocumentsProcessed$isSet) {
      builder.field(EXPONENTIAL_AVG_DOCUMENTS_PROCESSED.getPreferredName(), _exponentialAvgDocumentsProcessed);
    }
    if (_indexFailures$isSet) {
      builder.field(INDEX_FAILURES.getPreferredName(), _indexFailures);
    }
    if (_indexTimeInMs$isSet) {
      builder.field(INDEX_TIME_IN_MS.getPreferredName(), _indexTimeInMs);
    }
    if (_indexTotal$isSet) {
      builder.field(INDEX_TOTAL.getPreferredName(), _indexTotal);
    }
    if (_pagesProcessed$isSet) {
      builder.field(PAGES_PROCESSED.getPreferredName(), _pagesProcessed);
    }
    if (_processingTimeInMs$isSet) {
      builder.field(PROCESSING_TIME_IN_MS.getPreferredName(), _processingTimeInMs);
    }
    if (_processingTotal$isSet) {
      builder.field(PROCESSING_TOTAL.getPreferredName(), _processingTotal);
    }
    if (_searchFailures$isSet) {
      builder.field(SEARCH_FAILURES.getPreferredName(), _searchFailures);
    }
    if (_searchTimeInMs$isSet) {
      builder.field(SEARCH_TIME_IN_MS.getPreferredName(), _searchTimeInMs);
    }
    if (_searchTotal$isSet) {
      builder.field(SEARCH_TOTAL.getPreferredName(), _searchTotal);
    }
    if (_triggerCount$isSet) {
      builder.field(TRIGGER_COUNT.getPreferredName(), _triggerCount);
    }
  }

  @Override
  public TransformIndexerStats fromXContent(XContentParser parser) throws IOException, XContentParseException {
    return TransformIndexerStats.PARSER.apply(parser, null);
  }

  public static final ObjectParser<TransformIndexerStats, Void> PARSER =
    new ObjectParser<>(TransformIndexerStats.class.getName(), false, TransformIndexerStats::new);

  static {
    PARSER.declareLong(TransformIndexerStats::setDocumentsIndexed, DOCUMENTS_INDEXED);
    PARSER.declareLong(TransformIndexerStats::setDocumentsProcessed, DOCUMENTS_PROCESSED);
    PARSER.declareDouble(TransformIndexerStats::setExponentialAvgCheckpointDurationMs, EXPONENTIAL_AVG_CHECKPOINT_DURATION_MS);
    PARSER.declareDouble(TransformIndexerStats::setExponentialAvgDocumentsIndexed, EXPONENTIAL_AVG_DOCUMENTS_INDEXED);
    PARSER.declareDouble(TransformIndexerStats::setExponentialAvgDocumentsProcessed, EXPONENTIAL_AVG_DOCUMENTS_PROCESSED);
    PARSER.declareLong(TransformIndexerStats::setIndexFailures, INDEX_FAILURES);
    PARSER.declareLong(TransformIndexerStats::setIndexTimeInMs, INDEX_TIME_IN_MS);
    PARSER.declareLong(TransformIndexerStats::setIndexTotal, INDEX_TOTAL);
    PARSER.declareLong(TransformIndexerStats::setPagesProcessed, PAGES_PROCESSED);
    PARSER.declareLong(TransformIndexerStats::setProcessingTimeInMs, PROCESSING_TIME_IN_MS);
    PARSER.declareLong(TransformIndexerStats::setProcessingTotal, PROCESSING_TOTAL);
    PARSER.declareLong(TransformIndexerStats::setSearchFailures, SEARCH_FAILURES);
    PARSER.declareLong(TransformIndexerStats::setSearchTimeInMs, SEARCH_TIME_IN_MS);
    PARSER.declareLong(TransformIndexerStats::setSearchTotal, SEARCH_TOTAL);
    PARSER.declareLong(TransformIndexerStats::setTriggerCount, TRIGGER_COUNT);
  }

}
