
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

public class TransformProgress  implements XContentable<TransformProgress> {
  
  static final ParseField TOTAL_DOCS = new ParseField("total_docs");
  private Long _totalDocs;
  public Long getTotalDocs() { return this._totalDocs; }
  public TransformProgress setTotalDocs(Long val) { this._totalDocs = val; return this; }


  static final ParseField DOCS_REMAINING = new ParseField("docs_remaining");
  private Long _docsRemaining;
  public Long getDocsRemaining() { return this._docsRemaining; }
  public TransformProgress setDocsRemaining(Long val) { this._docsRemaining = val; return this; }


  static final ParseField PERCENT_COMPLETE = new ParseField("percent_complete");
  private Double _percentComplete;
  public Double getPercentComplete() { return this._percentComplete; }
  public TransformProgress setPercentComplete(Double val) { this._percentComplete = val; return this; }


  static final ParseField DOCS_PROCESSED = new ParseField("docs_processed");
  private Long _docsProcessed;
  public Long getDocsProcessed() { return this._docsProcessed; }
  public TransformProgress setDocsProcessed(Long val) { this._docsProcessed = val; return this; }


  static final ParseField DOCS_INDEXED = new ParseField("docs_indexed");
  private Long _docsIndexed;
  public Long getDocsIndexed() { return this._docsIndexed; }
  public TransformProgress setDocsIndexed(Long val) { this._docsIndexed = val; return this; }


  
  @Override
  public XContentBuilder toXContent(XContentBuilder builder, ToXContent.Params params) throws IOException {
    builder.startObject();
    if (_totalDocs != null) {
      builder.field(TOTAL_DOCS.getPreferredName(), _totalDocs);
    }
    if (_docsRemaining != null) {
      builder.field(DOCS_REMAINING.getPreferredName(), _docsRemaining);
    }
    if (_percentComplete != null) {
      builder.field(PERCENT_COMPLETE.getPreferredName(), _percentComplete);
    }
    if (_docsProcessed != null) {
      builder.field(DOCS_PROCESSED.getPreferredName(), _docsProcessed);
    }
    if (_docsIndexed != null) {
      builder.field(DOCS_INDEXED.getPreferredName(), _docsIndexed);
    }
    builder.endObject();
    return builder;
  }

  @Override
  public TransformProgress fromXContent(XContentParser parser) throws IOException, XContentParseException {
    return TransformProgress.PARSER.apply(parser, null);
  }

  public static final ObjectParser<TransformProgress, Void> PARSER =
    new ObjectParser<>(TransformProgress.class.getName(), false, TransformProgress::new);

  static {
    PARSER.declareLong(TransformProgress::setTotalDocs, TOTAL_DOCS);
    PARSER.declareLong(TransformProgress::setDocsRemaining, DOCS_REMAINING);
    PARSER.declareDouble(TransformProgress::setPercentComplete, PERCENT_COMPLETE);
    PARSER.declareLong(TransformProgress::setDocsProcessed, DOCS_PROCESSED);
    PARSER.declareLong(TransformProgress::setDocsIndexed, DOCS_INDEXED);
  }

}
