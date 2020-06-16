
package org.elasticsearch.analysis.analyzers;

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

public class StopAnalyzer  implements XContentable<StopAnalyzer> {
  
  static final ParseField STOPWORDS = new ParseField("stopwords");
  private StopWords _stopwords;
  public StopWords getStopwords() { return this._stopwords; }
  public StopAnalyzer setStopwords(StopWords val) { this._stopwords = val; return this; }


  static final ParseField STOPWORDS_PATH = new ParseField("stopwords_path");
  private String _stopwordsPath;
  public String getStopwordsPath() { return this._stopwordsPath; }
  public StopAnalyzer setStopwordsPath(String val) { this._stopwordsPath = val; return this; }


  
  @Override
  public XContentBuilder toXContent(XContentBuilder builder, ToXContent.Params params) throws IOException {
    builder.startObject();
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
  public StopAnalyzer fromXContent(XContentParser parser) throws IOException, XContentParseException {
    return StopAnalyzer.PARSER.apply(parser, null);
  }

  public static final ObjectParser<StopAnalyzer, Void> PARSER =
    new ObjectParser<>(StopAnalyzer.class.getName(), false, StopAnalyzer::new);

  static {
    PARSER.declareObject(StopAnalyzer::setStopwords, (p, t) -> new StopWords().fromXContent(p), STOPWORDS);
    PARSER.declareString(StopAnalyzer::setStopwordsPath, STOPWORDS_PATH);
  }

}
