
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

public class TransformProgress  implements XContentable<TransformProgress> {
  
  static final ParseField DOCS_INDEXED = new ParseField("docs_indexed");
  private long _docsIndexed;
  private boolean _docsIndexed$isSet;
  public long getDocsIndexed() { return this._docsIndexed; }
  public TransformProgress setDocsIndexed(long val) {
    this._docsIndexed = val;
    _docsIndexed$isSet = true;
    return this;
  }

  static final ParseField DOCS_PROCESSED = new ParseField("docs_processed");
  private long _docsProcessed;
  private boolean _docsProcessed$isSet;
  public long getDocsProcessed() { return this._docsProcessed; }
  public TransformProgress setDocsProcessed(long val) {
    this._docsProcessed = val;
    _docsProcessed$isSet = true;
    return this;
  }

  static final ParseField DOCS_REMAINING = new ParseField("docs_remaining");
  private long _docsRemaining;
  private boolean _docsRemaining$isSet;
  public long getDocsRemaining() { return this._docsRemaining; }
  public TransformProgress setDocsRemaining(long val) {
    this._docsRemaining = val;
    _docsRemaining$isSet = true;
    return this;
  }

  static final ParseField PERCENT_COMPLETE = new ParseField("percent_complete");
  private double _percentComplete;
  private boolean _percentComplete$isSet;
  public double getPercentComplete() { return this._percentComplete; }
  public TransformProgress setPercentComplete(double val) {
    this._percentComplete = val;
    _percentComplete$isSet = true;
    return this;
  }

  static final ParseField TOTAL_DOCS = new ParseField("total_docs");
  private long _totalDocs;
  private boolean _totalDocs$isSet;
  public long getTotalDocs() { return this._totalDocs; }
  public TransformProgress setTotalDocs(long val) {
    this._totalDocs = val;
    _totalDocs$isSet = true;
    return this;
  }


  
  @Override
  public void toXContentInternal(XContentBuilder builder, ToXContent.Params params) throws IOException {
    
    if (_docsIndexed$isSet) {
      builder.field(DOCS_INDEXED.getPreferredName(), _docsIndexed);
    }
    if (_docsProcessed$isSet) {
      builder.field(DOCS_PROCESSED.getPreferredName(), _docsProcessed);
    }
    if (_docsRemaining$isSet) {
      builder.field(DOCS_REMAINING.getPreferredName(), _docsRemaining);
    }
    if (_percentComplete$isSet) {
      builder.field(PERCENT_COMPLETE.getPreferredName(), _percentComplete);
    }
    if (_totalDocs$isSet) {
      builder.field(TOTAL_DOCS.getPreferredName(), _totalDocs);
    }
  }

  @Override
  public TransformProgress fromXContent(XContentParser parser) throws IOException, XContentParseException {
    return TransformProgress.PARSER.apply(parser, null);
  }

  public static final ObjectParser<TransformProgress, Void> PARSER =
    new ObjectParser<>(TransformProgress.class.getName(), false, TransformProgress::new);

  static {
    PARSER.declareLong(TransformProgress::setDocsIndexed, DOCS_INDEXED);
    PARSER.declareLong(TransformProgress::setDocsProcessed, DOCS_PROCESSED);
    PARSER.declareLong(TransformProgress::setDocsRemaining, DOCS_REMAINING);
    PARSER.declareDouble(TransformProgress::setPercentComplete, PERCENT_COMPLETE);
    PARSER.declareLong(TransformProgress::setTotalDocs, TOTAL_DOCS);
  }

}
