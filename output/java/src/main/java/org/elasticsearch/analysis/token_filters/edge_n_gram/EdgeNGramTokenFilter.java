
package org.elasticsearch.analysis.token_filters.edge_n_gram;

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
import org.elasticsearch.analysis.token_filters.edge_n_gram.*;
import org.elasticsearch.analysis.token_filters.*;

public class EdgeNGramTokenFilter extends TokenFilterBase implements XContentable<EdgeNGramTokenFilter> {
  
  static final ParseField MAX_GRAM = new ParseField("max_gram");
  private int _maxGram;
  private boolean _maxGram$isSet;
  public int getMaxGram() { return this._maxGram; }
  public EdgeNGramTokenFilter setMaxGram(int val) {
    this._maxGram = val;
    _maxGram$isSet = true;
    return this;
  }

  static final ParseField MIN_GRAM = new ParseField("min_gram");
  private int _minGram;
  private boolean _minGram$isSet;
  public int getMinGram() { return this._minGram; }
  public EdgeNGramTokenFilter setMinGram(int val) {
    this._minGram = val;
    _minGram$isSet = true;
    return this;
  }

  static final ParseField SIDE = new ParseField("side");
  private EdgeNGramSide _side;
  public EdgeNGramSide getSide() { return this._side; }
  public EdgeNGramTokenFilter setSide(EdgeNGramSide val) { this._side = val; return this; }


  
  @Override
  public void toXContentInternal(XContentBuilder builder, ToXContent.Params params) throws IOException {
    super.toXContentInternal(builder, params);
    if (_maxGram$isSet) {
      builder.field(MAX_GRAM.getPreferredName(), _maxGram);
    }
    if (_minGram$isSet) {
      builder.field(MIN_GRAM.getPreferredName(), _minGram);
    }
    if (_side != null) {
      builder.field(SIDE.getPreferredName());
      _side.toXContent(builder, params);
    }
  }

  @Override
  public EdgeNGramTokenFilter fromXContent(XContentParser parser) throws IOException, XContentParseException {
    return EdgeNGramTokenFilter.PARSER.apply(parser, null);
  }

  public static final ObjectParser<EdgeNGramTokenFilter, Void> PARSER =
    new ObjectParser<>(EdgeNGramTokenFilter.class.getName(), false, EdgeNGramTokenFilter::new);

  static {
    PARSER.declareInt(EdgeNGramTokenFilter::setMaxGram, MAX_GRAM);
    PARSER.declareInt(EdgeNGramTokenFilter::setMinGram, MIN_GRAM);
    PARSER.declareField(EdgeNGramTokenFilter::setSide, (p, t) -> EdgeNGramSide.PARSER.apply(p), SIDE, ObjectParser.ValueType.STRING_OR_NULL);
  }

}
