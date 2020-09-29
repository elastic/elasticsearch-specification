
package org.elasticsearch.query_dsl.term_level.fuzzy;

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
import org.elasticsearch.query_dsl.abstractions.query.*;

public class FuzzyQuery extends QueryBase implements XContentable<FuzzyQuery> {
  
  static final ParseField MAX_EXPANSIONS = new ParseField("max_expansions");
  private int _maxExpansions;
  private boolean _maxExpansions$isSet;
  public int getMaxExpansions() { return this._maxExpansions; }
  public FuzzyQuery setMaxExpansions(int val) {
    this._maxExpansions = val;
    _maxExpansions$isSet = true;
    return this;
  }

  static final ParseField PREFIX_LENGTH = new ParseField("prefix_length");
  private int _prefixLength;
  private boolean _prefixLength$isSet;
  public int getPrefixLength() { return this._prefixLength; }
  public FuzzyQuery setPrefixLength(int val) {
    this._prefixLength = val;
    _prefixLength$isSet = true;
    return this;
  }

  static final ParseField REWRITE = new ParseField("rewrite");
  private String _rewrite;
  public String getRewrite() { return this._rewrite; }
  public FuzzyQuery setRewrite(String val) { this._rewrite = val; return this; }

  static final ParseField TRANSPOSITIONS = new ParseField("transpositions");
  private Boolean _transpositions;
  public Boolean getTranspositions() { return this._transpositions; }
  public FuzzyQuery setTranspositions(Boolean val) { this._transpositions = val; return this; }


  
  @Override
  public void toXContentInternal(XContentBuilder builder, ToXContent.Params params) throws IOException {
    super.toXContentInternal(builder, params);
    if (_maxExpansions$isSet) {
      builder.field(MAX_EXPANSIONS.getPreferredName(), _maxExpansions);
    }
    if (_prefixLength$isSet) {
      builder.field(PREFIX_LENGTH.getPreferredName(), _prefixLength);
    }
    if (_rewrite != null) {
      builder.field(REWRITE.getPreferredName(), _rewrite);
    }
    if (_transpositions != null) {
      builder.field(TRANSPOSITIONS.getPreferredName(), _transpositions);
    }
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
    PARSER.declareString(FuzzyQuery::setRewrite, REWRITE);
    PARSER.declareBoolean(FuzzyQuery::setTranspositions, TRANSPOSITIONS);
  }

}
