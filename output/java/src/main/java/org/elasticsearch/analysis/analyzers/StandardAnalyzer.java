
package org.elasticsearch.analysis.analyzers;

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
import org.elasticsearch.analysis.*;
import org.elasticsearch.analysis.analyzers.*;

public class StandardAnalyzer extends AnalyzerBase implements XContentable<StandardAnalyzer> {
  
  static final ParseField MAX_TOKEN_LENGTH = new ParseField("max_token_length");
  private int _maxTokenLength;
  private boolean _maxTokenLength$isSet;
  public int getMaxTokenLength() { return this._maxTokenLength; }
  public StandardAnalyzer setMaxTokenLength(int val) {
    this._maxTokenLength = val;
    _maxTokenLength$isSet = true;
    return this;
  }

  static final ParseField STOPWORDS = new ParseField("stopwords");
  private StopWords _stopwords;
  public StopWords getStopwords() { return this._stopwords; }
  public StandardAnalyzer setStopwords(StopWords val) { this._stopwords = val; return this; }


  
  @Override
  public void toXContentInternal(XContentBuilder builder, ToXContent.Params params) throws IOException {
    super.toXContentInternal(builder, params);
    if (_maxTokenLength$isSet) {
      builder.field(MAX_TOKEN_LENGTH.getPreferredName(), _maxTokenLength);
    }
    if (_stopwords != null) {
      builder.field(STOPWORDS.getPreferredName());
      _stopwords.toXContent(builder, params);
    }
  }

  @Override
  public StandardAnalyzer fromXContent(XContentParser parser) throws IOException, XContentParseException {
    return StandardAnalyzer.PARSER.apply(parser, null);
  }

  public static final ObjectParser<StandardAnalyzer, Void> PARSER =
    new ObjectParser<>(StandardAnalyzer.class.getName(), false, StandardAnalyzer::new);

  static {
    PARSER.declareInt(StandardAnalyzer::setMaxTokenLength, MAX_TOKEN_LENGTH);
    PARSER.declareObject(StandardAnalyzer::setStopwords, (p, t) -> StopWords.PARSER.apply(p, t), STOPWORDS);
  }

}
