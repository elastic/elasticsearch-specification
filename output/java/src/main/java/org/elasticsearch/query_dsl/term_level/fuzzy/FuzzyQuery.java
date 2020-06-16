
package org.elasticsearch.query_dsl.term_level.fuzzy;

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
import org.elasticsearch.query_dsl.multi_term_query_rewrite.*;

public class FuzzyQuery  implements XContentable<FuzzyQuery> {
  
  static final ParseField MAX_EXPANSIONS = new ParseField("max_expansions");
  private Integer _maxExpansions;
  public Integer getMaxExpansions() { return this._maxExpansions; }
  public FuzzyQuery setMaxExpansions(Integer val) { this._maxExpansions = val; return this; }


  static final ParseField PREFIX_LENGTH = new ParseField("prefix_length");
  private Integer _prefixLength;
  public Integer getPrefixLength() { return this._prefixLength; }
  public FuzzyQuery setPrefixLength(Integer val) { this._prefixLength = val; return this; }


  static final ParseField REWRITE = new ParseField("rewrite");
  private MultiTermQueryRewrite _rewrite;
  public MultiTermQueryRewrite getRewrite() { return this._rewrite; }
  public FuzzyQuery setRewrite(MultiTermQueryRewrite val) { this._rewrite = val; return this; }


  static final ParseField TRANSPOSITIONS = new ParseField("transpositions");
  private Boolean _transpositions;
  public Boolean getTranspositions() { return this._transpositions; }
  public FuzzyQuery setTranspositions(Boolean val) { this._transpositions = val; return this; }


  
  @Override
  public XContentBuilder toXContent(XContentBuilder builder, ToXContent.Params params) throws IOException {
    builder.startObject();
    if (_maxExpansions != null) {
      builder.field(MAX_EXPANSIONS.getPreferredName(), _maxExpansions);
    }
    if (_prefixLength != null) {
      builder.field(PREFIX_LENGTH.getPreferredName(), _prefixLength);
    }
    if (_rewrite != null) {
      builder.field(REWRITE.getPreferredName());
      _rewrite.toXContent(builder, params);
    }
    if (_transpositions != null) {
      builder.field(TRANSPOSITIONS.getPreferredName(), _transpositions);
    }
    builder.endObject();
    return builder;
  }

  @Override
  public FuzzyQuery fromXContent(XContentParser parser) throws IOException, XContentParseException {
    return FuzzyQuery.PARSER.apply(parser, null);
  }

  public static final ObjectParser<FuzzyQuery, Void> PARSER =
    new ObjectParser<>(FuzzyQuery.class.getName(), false, FuzzyQuery::new);

  static {
    PARSER.declareInt(FuzzyQuery::setMaxExpansions, MAX_EXPANSIONS);
    PARSER.declareInt(FuzzyQuery::setPrefixLength, PREFIX_LENGTH);
    PARSER.declareObject(FuzzyQuery::setRewrite, (p, t) -> MultiTermQueryRewrite.PARSER.apply(p, t), REWRITE);
    PARSER.declareBoolean(FuzzyQuery::setTranspositions, TRANSPOSITIONS);
  }

}
