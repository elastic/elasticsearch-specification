
package org.elasticsearch.analysis.token_filters.stop;

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
import org.elasticsearch.analysis.*;

public class StopTokenFilter  implements XContentable<StopTokenFilter> {
  
  static final ParseField IGNORE_CASE = new ParseField("ignore_case");
  private Boolean _ignoreCase;
  public Boolean getIgnoreCase() { return this._ignoreCase; }
  public StopTokenFilter setIgnoreCase(Boolean val) { this._ignoreCase = val; return this; }


  static final ParseField REMOVE_TRAILING = new ParseField("remove_trailing");
  private Boolean _removeTrailing;
  public Boolean getRemoveTrailing() { return this._removeTrailing; }
  public StopTokenFilter setRemoveTrailing(Boolean val) { this._removeTrailing = val; return this; }


  static final ParseField STOPWORDS = new ParseField("stopwords");
  private StopWords _stopwords;
  public StopWords getStopwords() { return this._stopwords; }
  public StopTokenFilter setStopwords(StopWords val) { this._stopwords = val; return this; }


  static final ParseField STOPWORDS_PATH = new ParseField("stopwords_path");
  private String _stopwordsPath;
  public String getStopwordsPath() { return this._stopwordsPath; }
  public StopTokenFilter setStopwordsPath(String val) { this._stopwordsPath = val; return this; }


  
  @Override
  public XContentBuilder toXContent(XContentBuilder builder, ToXContent.Params params) throws IOException {
    builder.startObject();
    if (_ignoreCase != null) {
      builder.field(IGNORE_CASE.getPreferredName(), _ignoreCase);
    }
    if (_removeTrailing != null) {
      builder.field(REMOVE_TRAILING.getPreferredName(), _removeTrailing);
    }
    if (_stopwords != null) {
      builder.field(STOPWORDS.getPreferredName());
      _stopwords.toXContent(builder, params);
    }
    if (_stopwordsPath != null) {
      builder.field(STOPWORDS_PATH.getPreferredName(), _stopwordsPath);
    }
    builder.endObject();
    return builder;
  }

  @Override
  public StopTokenFilter fromXContent(XContentParser parser) throws IOException, XContentParseException {
    return StopTokenFilter.PARSER.apply(parser, null);
  }

  public static final ObjectParser<StopTokenFilter, Void> PARSER =
    new ObjectParser<>(StopTokenFilter.class.getName(), false, StopTokenFilter::new);

  static {
    PARSER.declareBoolean(StopTokenFilter::setIgnoreCase, IGNORE_CASE);
    PARSER.declareBoolean(StopTokenFilter::setRemoveTrailing, REMOVE_TRAILING);
    PARSER.declareObject(StopTokenFilter::setStopwords, (p, t) -> new StopWords().fromXContent(p), STOPWORDS);
    PARSER.declareString(StopTokenFilter::setStopwordsPath, STOPWORDS_PATH);
  }

}
