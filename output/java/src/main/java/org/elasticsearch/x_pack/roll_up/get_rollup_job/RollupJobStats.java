
package org.elasticsearch.x_pack.roll_up.get_rollup_job;

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

public class RollupJobStats  implements XContentable<RollupJobStats> {
  
  static final ParseField DOCUMENTS_PROCESSED = new ParseField("documents_processed");
  private Long _documentsProcessed;
  public Long getDocumentsProcessed() { return this._documentsProcessed; }
  public RollupJobStats setDocumentsProcessed(Long val) { this._documentsProcessed = val; return this; }


  static final ParseField PAGES_PROCESSED = new ParseField("pages_processed");
  private Long _pagesProcessed;
  public Long getPagesProcessed() { return this._pagesProcessed; }
  public RollupJobStats setPagesProcessed(Long val) { this._pagesProcessed = val; return this; }


  static final ParseField ROLLUPS_INDEXED = new ParseField("rollups_indexed");
  private Long _rollupsIndexed;
  public Long getRollupsIndexed() { return this._rollupsIndexed; }
  public RollupJobStats setRollupsIndexed(Long val) { this._rollupsIndexed = val; return this; }


  static final ParseField TRIGGER_COUNT = new ParseField("trigger_count");
  private Long _triggerCount;
  public Long getTriggerCount() { return this._triggerCount; }
  public RollupJobStats setTriggerCount(Long val) { this._triggerCount = val; return this; }


  static final ParseField SEARCH_FAILURES = new ParseField("search_failures");
  private Long _searchFailures;
  public Long getSearchFailures() { return this._searchFailures; }
  public RollupJobStats setSearchFailures(Long val) { this._searchFailures = val; return this; }


  static final ParseField INDEX_FAILURES = new ParseField("index_failures");
  private Long _indexFailures;
  public Long getIndexFailures() { return this._indexFailures; }
  public RollupJobStats setIndexFailures(Long val) { this._indexFailures = val; return this; }


  static final ParseField INDEX_TIME_IN_MS = new ParseField("index_time_in_ms");
  private Long _indexTimeInMs;
  public Long getIndexTimeInMs() { return this._indexTimeInMs; }
  public RollupJobStats setIndexTimeInMs(Long val) { this._indexTimeInMs = val; return this; }


  static final ParseField INDEX_TOTAL = new ParseField("index_total");
  private Long _indexTotal;
  public Long getIndexTotal() { return this._indexTotal; }
  public RollupJobStats setIndexTotal(Long val) { this._indexTotal = val; return this; }


  static final ParseField SEARCH_TIME_IN_MS = new ParseField("search_time_in_ms");
  private Long _searchTimeInMs;
  public Long getSearchTimeInMs() { return this._searchTimeInMs; }
  public RollupJobStats setSearchTimeInMs(Long val) { this._searchTimeInMs = val; return this; }


  static final ParseField SEARCH_TOTAL = new ParseField("search_total");
  private Long _searchTotal;
  public Long getSearchTotal() { return this._searchTotal; }
  public RollupJobStats setSearchTotal(Long val) { this._searchTotal = val; return this; }


  
  @Override
  public XContentBuilder toXContent(XContentBuilder builder, ToXContent.Params params) throws IOException {
    builder.startObject();
    if (_documentsProcessed != null) {
      builder.field(DOCUMENTS_PROCESSED.getPreferredName(), _documentsProcessed);
    }
    if (_pagesProcessed != null) {
      builder.field(PAGES_PROCESSED.getPreferredName(), _pagesProcessed);
    }
    if (_rollupsIndexed != null) {
      builder.field(ROLLUPS_INDEXED.getPreferredName(), _rollupsIndexed);
    }
    if (_triggerCount != null) {
      builder.field(TRIGGER_COUNT.getPreferredName(), _triggerCount);
    }
    if (_searchFailures != null) {
      builder.field(SEARCH_FAILURES.getPreferredName(), _searchFailures);
    }
    if (_indexFailures != null) {
      builder.field(INDEX_FAILURES.getPreferredName(), _indexFailures);
    }
    if (_indexTimeInMs != null) {
      builder.field(INDEX_TIME_IN_MS.getPreferredName(), _indexTimeInMs);
    }
    if (_indexTotal != null) {
      builder.field(INDEX_TOTAL.getPreferredName(), _indexTotal);
    }
    if (_searchTimeInMs != null) {
      builder.field(SEARCH_TIME_IN_MS.getPreferredName(), _searchTimeInMs);
    }
    if (_searchTotal != null) {
      builder.field(SEARCH_TOTAL.getPreferredName(), _searchTotal);
    }
    builder.endObject();
    return builder;
  }

  @Override
  public RollupJobStats fromXContent(XContentParser parser) throws IOException, XContentParseException {
    return RollupJobStats.PARSER.apply(parser, null);
  }

  public static final ObjectParser<RollupJobStats, Void> PARSER =
    new ObjectParser<>(RollupJobStats.class.getName(), false, RollupJobStats::new);

  static {
    PARSER.declareLong(RollupJobStats::setDocumentsProcessed, DOCUMENTS_PROCESSED);
    PARSER.declareLong(RollupJobStats::setPagesProcessed, PAGES_PROCESSED);
    PARSER.declareLong(RollupJobStats::setRollupsIndexed, ROLLUPS_INDEXED);
    PARSER.declareLong(RollupJobStats::setTriggerCount, TRIGGER_COUNT);
    PARSER.declareLong(RollupJobStats::setSearchFailures, SEARCH_FAILURES);
    PARSER.declareLong(RollupJobStats::setIndexFailures, INDEX_FAILURES);
    PARSER.declareLong(RollupJobStats::setIndexTimeInMs, INDEX_TIME_IN_MS);
    PARSER.declareLong(RollupJobStats::setIndexTotal, INDEX_TOTAL);
    PARSER.declareLong(RollupJobStats::setSearchTimeInMs, SEARCH_TIME_IN_MS);
    PARSER.declareLong(RollupJobStats::setSearchTotal, SEARCH_TOTAL);
  }

}
