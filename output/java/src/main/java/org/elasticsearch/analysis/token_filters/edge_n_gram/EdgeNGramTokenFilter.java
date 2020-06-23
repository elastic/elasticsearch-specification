
package org.elasticsearch.analysis.token_filters.edge_n_gram;

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
import org.elasticsearch.analysis.token_filters.edge_n_gram.*;

public class EdgeNGramTokenFilter  implements XContentable<EdgeNGramTokenFilter> {
  
  static final ParseField MAX_GRAM = new ParseField("max_gram");
  private Integer _maxGram;
  public Integer getMaxGram() { return this._maxGram; }
  public EdgeNGramTokenFilter setMaxGram(Integer val) { this._maxGram = val; return this; }


  static final ParseField MIN_GRAM = new ParseField("min_gram");
  private Integer _minGram;
  public Integer getMinGram() { return this._minGram; }
  public EdgeNGramTokenFilter setMinGram(Integer val) { this._minGram = val; return this; }


  static final ParseField SIDE = new ParseField("side");
  private EdgeNGramSide _side;
  public EdgeNGramSide getSide() { return this._side; }
  public EdgeNGramTokenFilter setSide(EdgeNGramSide val) { this._side = val; return this; }


  
  @Override
  public XContentBuilder toXContent(XContentBuilder builder, ToXContent.Params params) throws IOException {
    builder.startObject();
    if (_maxGram != null) {
      builder.field(MAX_GRAM.getPreferredName(), _maxGram);
    }
    if (_minGram != null) {
      builder.field(MIN_GRAM.getPreferredName(), _minGram);
    }
    if (_side != null) {
      builder.field(SIDE.getPreferredName());
      _side.toXContent(builder, params);
    }
    builder.endObject();
    return builder;
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
