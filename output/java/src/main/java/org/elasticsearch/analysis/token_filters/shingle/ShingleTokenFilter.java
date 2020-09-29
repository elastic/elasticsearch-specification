
package org.elasticsearch.analysis.token_filters.shingle;

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
import org.elasticsearch.analysis.token_filters.*;

public class ShingleTokenFilter extends TokenFilterBase implements XContentable<ShingleTokenFilter> {
  
  static final ParseField FILLER_TOKEN = new ParseField("filler_token");
  private String _fillerToken;
  public String getFillerToken() { return this._fillerToken; }
  public ShingleTokenFilter setFillerToken(String val) { this._fillerToken = val; return this; }

  static final ParseField MAX_SHINGLE_SIZE = new ParseField("max_shingle_size");
  private int _maxShingleSize;
  private boolean _maxShingleSize$isSet;
  public int getMaxShingleSize() { return this._maxShingleSize; }
  public ShingleTokenFilter setMaxShingleSize(int val) {
    this._maxShingleSize = val;
    _maxShingleSize$isSet = true;
    return this;
  }

  static final ParseField MIN_SHINGLE_SIZE = new ParseField("min_shingle_size");
  private int _minShingleSize;
  private boolean _minShingleSize$isSet;
  public int getMinShingleSize() { return this._minShingleSize; }
  public ShingleTokenFilter setMinShingleSize(int val) {
    this._minShingleSize = val;
    _minShingleSize$isSet = true;
    return this;
  }

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
  public void toXContentInternal(XContentBuilder builder, ToXContent.Params params) throws IOException {
    super.toXContentInternal(builder, params);
    if (_fillerToken != null) {
      builder.field(FILLER_TOKEN.getPreferredName(), _fillerToken);
    }
    if (_maxShingleSize$isSet) {
      builder.field(MAX_SHINGLE_SIZE.getPreferredName(), _maxShingleSize);
    }
    if (_minShingleSize$isSet) {
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
