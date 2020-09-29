
package org.elasticsearch.analysis.token_filters;

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

public class NGramTokenFilter extends TokenFilterBase implements XContentable<NGramTokenFilter> {
  
  static final ParseField MAX_GRAM = new ParseField("max_gram");
  private int _maxGram;
  private boolean _maxGram$isSet;
  public int getMaxGram() { return this._maxGram; }
  public NGramTokenFilter setMaxGram(int val) {
    this._maxGram = val;
    _maxGram$isSet = true;
    return this;
  }

  static final ParseField MIN_GRAM = new ParseField("min_gram");
  private int _minGram;
  private boolean _minGram$isSet;
  public int getMinGram() { return this._minGram; }
  public NGramTokenFilter setMinGram(int val) {
    this._minGram = val;
    _minGram$isSet = true;
    return this;
  }


  
  @Override
  public void toXContentInternal(XContentBuilder builder, ToXContent.Params params) throws IOException {
    super.toXContentInternal(builder, params);
    if (_maxGram$isSet) {
      builder.field(MAX_GRAM.getPreferredName(), _maxGram);
    }
    if (_minGram$isSet) {
      builder.field(MIN_GRAM.getPreferredName(), _minGram);
    }
  }

  @Override
  public NGramTokenFilter fromXContent(XContentParser parser) throws IOException, XContentParseException {
    return NGramTokenFilter.PARSER.apply(parser, null);
  }

  public static final ObjectParser<NGramTokenFilter, Void> PARSER =
    new ObjectParser<>(NGramTokenFilter.class.getName(), false, NGramTokenFilter::new);

  static {
    PARSER.declareInt(NGramTokenFilter::setMaxGram, MAX_GRAM);
    PARSER.declareInt(NGramTokenFilter::setMinGram, MIN_GRAM);
  }

}
