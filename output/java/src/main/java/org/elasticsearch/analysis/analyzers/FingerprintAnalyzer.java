
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
import org.elasticsearch.internal.*;
import org.elasticsearch.analysis.*;

public class FingerprintAnalyzer  implements XContentable<FingerprintAnalyzer> {

  static final ParseField MAX_OUTPUT_SIZE = new ParseField("max_output_size");
  private Integer _maxOutputSize;
  public Integer getMaxOutputSize() { return this._maxOutputSize; }
  public FingerprintAnalyzer setMaxOutputSize(Integer val) { this._maxOutputSize = val; return this; }


  static final ParseField PRESERVE_ORIGINAL = new ParseField("preserve_original");
  private Boolean _preserveOriginal;
  public Boolean getPreserveOriginal() { return this._preserveOriginal; }
  public FingerprintAnalyzer setPreserveOriginal(Boolean val) { this._preserveOriginal = val; return this; }


  static final ParseField SEPARATOR = new ParseField("separator");
  private String _separator;
  public String getSeparator() { return this._separator; }
  public FingerprintAnalyzer setSeparator(String val) { this._separator = val; return this; }


  static final ParseField STOPWORDS = new ParseField("stopwords");
  private StopWords _stopwords;
  public StopWords getStopwords() { return this._stopwords; }
  public FingerprintAnalyzer setStopwords(StopWords val) { this._stopwords = val; return this; }


  static final ParseField STOPWORDS_PATH = new ParseField("stopwords_path");
  private String _stopwordsPath;
  public String getStopwordsPath() { return this._stopwordsPath; }
  public FingerprintAnalyzer setStopwordsPath(String val) { this._stopwordsPath = val; return this; }



  @Override
  public XContentBuilder toXContent(XContentBuilder builder, ToXContent.Params params) throws IOException {
    builder.startObject();
    if (_maxOutputSize != null) {
      builder.field(MAX_OUTPUT_SIZE.getPreferredName(), _maxOutputSize);
    }
    if (_preserveOriginal != null) {
      builder.field(PRESERVE_ORIGINAL.getPreferredName(), _preserveOriginal);
    }
    if (_separator != null) {
      builder.field(SEPARATOR.getPreferredName(), _separator);
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
  public FingerprintAnalyzer fromXContent(XContentParser parser) throws IOException, XContentParseException {
    return FingerprintAnalyzer.PARSER.apply(parser, null);
  }

  public static final ObjectParser<FingerprintAnalyzer, Void> PARSER =
    new ObjectParser<>(FingerprintAnalyzer.class.getName(), false, FingerprintAnalyzer::new);

  static {
    PARSER.declareInt(FingerprintAnalyzer::setMaxOutputSize, MAX_OUTPUT_SIZE);
    PARSER.declareBoolean(FingerprintAnalyzer::setPreserveOriginal, PRESERVE_ORIGINAL);
    PARSER.declareString(FingerprintAnalyzer::setSeparator, SEPARATOR);
    PARSER.declareObject(FingerprintAnalyzer::setStopwords, (p, t) -> new StopWords().fromXContent(p), STOPWORDS);
    PARSER.declareString(FingerprintAnalyzer::setStopwordsPath, STOPWORDS_PATH);
  }

}
