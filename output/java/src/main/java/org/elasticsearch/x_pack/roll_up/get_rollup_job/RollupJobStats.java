
package org.elasticsearch.x_pack.roll_up.get_rollup_job;

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

public class RollupJobStats  implements XContentable<RollupJobStats> {
  
  static final ParseField DOCUMENTS_PROCESSED = new ParseField("documents_processed");
  private long _documentsProcessed;
  private boolean _documentsProcessed$isSet;
  public long getDocumentsProcessed() { return this._documentsProcessed; }
  public RollupJobStats setDocumentsProcessed(long val) {
    this._documentsProcessed = val;
    _documentsProcessed$isSet = true;
    return this;
  }

  static final ParseField INDEX_FAILURES = new ParseField("index_failures");
  private long _indexFailures;
  private boolean _indexFailures$isSet;
  public long getIndexFailures() { return this._indexFailures; }
  public RollupJobStats setIndexFailures(long val) {
    this._indexFailures = val;
    _indexFailures$isSet = true;
    return this;
  }

  static final ParseField INDEX_TIME_IN_MS = new ParseField("index_time_in_ms");
  private long _indexTimeInMs;
  private boolean _indexTimeInMs$isSet;
  public long getIndexTimeInMs() { return this._indexTimeInMs; }
  public RollupJobStats setIndexTimeInMs(long val) {
    this._indexTimeInMs = val;
    _indexTimeInMs$isSet = true;
    return this;
  }

  static final ParseField INDEX_TOTAL = new ParseField("index_total");
  private long _indexTotal;
  private boolean _indexTotal$isSet;
  public long getIndexTotal() { return this._indexTotal; }
  public RollupJobStats setIndexTotal(long val) {
    this._indexTotal = val;
    _indexTotal$isSet = true;
    return this;
  }

  static final ParseField PAGES_PROCESSED = new ParseField("pages_processed");
  private long _pagesProcessed;
  private boolean _pagesProcessed$isSet;
  public long getPagesProcessed() { return this._pagesProcessed; }
  public RollupJobStats setPagesProcessed(long val) {
    this._pagesProcessed = val;
    _pagesProcessed$isSet = true;
    return this;
  }

  static final ParseField ROLLUPS_INDEXED = new ParseField("rollups_indexed");
  private long _rollupsIndexed;
  private boolean _rollupsIndexed$isSet;
  public long getRollupsIndexed() { return this._rollupsIndexed; }
  public RollupJobStats setRollupsIndexed(long val) {
    this._rollupsIndexed = val;
    _rollupsIndexed$isSet = true;
    return this;
  }

  static final ParseField SEARCH_FAILURES = new ParseField("search_failures");
  private long _searchFailures;
  private boolean _searchFailures$isSet;
  public long getSearchFailures() { return this._searchFailures; }
  public RollupJobStats setSearchFailures(long val) {
    this._searchFailures = val;
    _searchFailures$isSet = true;
    return this;
  }

  static final ParseField SEARCH_TIME_IN_MS = new ParseField("search_time_in_ms");
  private long _searchTimeInMs;
  private boolean _searchTimeInMs$isSet;
  public long getSearchTimeInMs() { return this._searchTimeInMs; }
  public RollupJobStats setSearchTimeInMs(long val) {
    this._searchTimeInMs = val;
    _searchTimeInMs$isSet = true;
    return this;
  }

  static final ParseField SEARCH_TOTAL = new ParseField("search_total");
  private long _searchTotal;
  private boolean _searchTotal$isSet;
  public long getSearchTotal() { return this._searchTotal; }
  public RollupJobStats setSearchTotal(long val) {
    this._searchTotal = val;
    _searchTotal$isSet = true;
    return this;
  }

  static final ParseField TRIGGER_COUNT = new ParseField("trigger_count");
  private long _triggerCount;
  private boolean _triggerCount$isSet;
  public long getTriggerCount() { return this._triggerCount; }
  public RollupJobStats setTriggerCount(long val) {
    this._triggerCount = val;
    _triggerCount$isSet = true;
    return this;
  }


  
  @Override
  public void toXContentInternal(XContentBuilder builder, ToXContent.Params params) throws IOException {
    
    if (_documentsProcessed$isSet) {
      builder.field(DOCUMENTS_PROCESSED.getPreferredName(), _documentsProcessed);
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
    if (_rollupsIndexed$isSet) {
      builder.field(ROLLUPS_INDEXED.getPreferredName(), _rollupsIndexed);
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
  public RollupJobStats fromXContent(XContentParser parser) throws IOException, XContentParseException {
    return RollupJobStats.PARSER.apply(parser, null);
  }

  public static final ObjectParser<RollupJobStats, Void> PARSER =
    new ObjectParser<>(RollupJobStats.class.getName(), false, RollupJobStats::new);

  static {
    PARSER.declareLong(RollupJobStats::setDocumentsProcessed, DOCUMENTS_PROCESSED);
    PARSER.declareLong(RollupJobStats::setIndexFailures, INDEX_FAILURES);
    PARSER.declareLong(RollupJobStats::setIndexTimeInMs, INDEX_TIME_IN_MS);
    PARSER.declareLong(RollupJobStats::setIndexTotal, INDEX_TOTAL);
    PARSER.declareLong(RollupJobStats::setPagesProcessed, PAGES_PROCESSED);
    PARSER.declareLong(RollupJobStats::setRollupsIndexed, ROLLUPS_INDEXED);
    PARSER.declareLong(RollupJobStats::setSearchFailures, SEARCH_FAILURES);
    PARSER.declareLong(RollupJobStats::setSearchTimeInMs, SEARCH_TIME_IN_MS);
    PARSER.declareLong(RollupJobStats::setSearchTotal, SEARCH_TOTAL);
    PARSER.declareLong(RollupJobStats::setTriggerCount, TRIGGER_COUNT);
  }

}
