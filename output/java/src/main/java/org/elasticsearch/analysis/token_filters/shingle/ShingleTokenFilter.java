
package org.elasticsearch.analysis.token_filters.shingle;

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

public class ShingleTokenFilter  implements XContentable<ShingleTokenFilter> {
  
  static final ParseField FILLER_TOKEN = new ParseField("filler_token");
  private String _fillerToken;
  public String getFillerToken() { return this._fillerToken; }
  public ShingleTokenFilter setFillerToken(String val) { this._fillerToken = val; return this; }


  static final ParseField MAX_SHINGLE_SIZE = new ParseField("max_shingle_size");
  private Integer _maxShingleSize;
  public Integer getMaxShingleSize() { return this._maxShingleSize; }
  public ShingleTokenFilter setMaxShingleSize(Integer val) { this._maxShingleSize = val; return this; }


  static final ParseField MIN_SHINGLE_SIZE = new ParseField("min_shingle_size");
  private Integer _minShingleSize;
  public Integer getMinShingleSize() { return this._minShingleSize; }
  public ShingleTokenFilter setMinShingleSize(Integer val) { this._minShingleSize = val; return this; }


  static final ParseField OUTPUT_UNIGRAMS = new ParseField("output_unigrams");
  private Boolean _outputUnigrams;
  public Boolean getOutputUnigrams() { return this._outputUnigrams; }
  public ShingleTokenFilter setOutputUnigrams(Boolean val) { this._outputUnigrams = val; return this; }


  static final ParseField OUTPUT_UNIGRAMS_IF_NO_SHINGLES = new ParseField("output_unigrams_if_no_shingles");
  private Boolean _outputUnigramsIfNoShingles;
  public Boolean getOutputUnigramsIfNoShingles() { return this._outputUnigramsIfNoShingles; }
  public ShingleTokenFilter setOutputUnigramsIfNoShingles(Boolean val) { this._outputUnigramsIfNoShingles = val; return this; }


  static final ParseField TOKEN_SEPARATOR = new ParseField("token_separator");
  private String _tokenSeparator;
  public String getTokenSeparator() { return this._tokenSeparator; }
  public ShingleTokenFilter setTokenSeparator(String val) { this._tokenSeparator = val; return this; }


  
  @Override
  public XContentBuilder toXContent(XContentBuilder builder, ToXContent.Params params) throws IOException {
    builder.startObject();
    if (_fillerToken != null) {
      builder.field(FILLER_TOKEN.getPreferredName(), _fillerToken);
    }
    if (_maxShingleSize != null) {
      builder.field(MAX_SHINGLE_SIZE.getPreferredName(), _maxShingleSize);
    }
    if (_minShingleSize != null) {
      builder.field(MIN_SHINGLE_SIZE.getPreferredName(), _minShingleSize);
    }
    if (_outputUnigrams != null) {
      builder.field(OUTPUT_UNIGRAMS.getPreferredName(), _outputUnigrams);
    }
    if (_outputUnigramsIfNoShingles != null) {
      builder.field(OUTPUT_UNIGRAMS_IF_NO_SHINGLES.getPreferredName(), _outputUnigramsIfNoShingles);
    }
    if (_tokenSeparator != null) {
      builder.field(TOKEN_SEPARATOR.getPreferredName(), _tokenSeparator);
    }
    builder.endObject();
    return builder;
  }

  @Override
  public ShingleTokenFilter fromXContent(XContentParser parser) throws IOException, XContentParseException {
    return ShingleTokenFilter.PARSER.apply(parser, null);
  }

  public static final ObjectParser<ShingleTokenFilter, Void> PARSER =
    new ObjectParser<>(ShingleTokenFilter.class.getName(), false, ShingleTokenFilter::new);

  static {
    PARSER.declareString(ShingleTokenFilter::setFillerToken, FILLER_TOKEN);
    PARSER.declareInt(ShingleTokenFilter::setMaxShingleSize, MAX_SHINGLE_SIZE);
    PARSER.declareInt(ShingleTokenFilter::setMinShingleSize, MIN_SHINGLE_SIZE);
    PARSER.declareBoolean(ShingleTokenFilter::setOutputUnigrams, OUTPUT_UNIGRAMS);
    PARSER.declareBoolean(ShingleTokenFilter::setOutputUnigramsIfNoShingles, OUTPUT_UNIGRAMS_IF_NO_SHINGLES);
    PARSER.declareString(ShingleTokenFilter::setTokenSeparator, TOKEN_SEPARATOR);
  }

}
