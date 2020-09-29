
package org.elasticsearch.query_dsl.full_text.intervals;

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

public class IntervalsFuzzy  implements XContentable<IntervalsFuzzy> {
  
  static final ParseField ANALYZER = new ParseField("analyzer");
  private String _analyzer;
  public String getAnalyzer() { return this._analyzer; }
  public IntervalsFuzzy setAnalyzer(String val) { this._analyzer = val; return this; }

  static final ParseField FUZZINESS = new ParseField("fuzziness");
  private Fuzziness _fuzziness;
  public Fuzziness getFuzziness() { return this._fuzziness; }
  public IntervalsFuzzy setFuzziness(Fuzziness val) { this._fuzziness = val; return this; }

  static final ParseField PREFIX_LENGTH = new ParseField("prefix_length");
  private int _prefixLength;
  private boolean _prefixLength$isSet;
  public int getPrefixLength() { return this._prefixLength; }
  public IntervalsFuzzy setPrefixLength(int val) {
    this._prefixLength = val;
    _prefixLength$isSet = true;
    return this;
  }

  static final ParseField TERM = new ParseField("term");
  private String _term;
  public String getTerm() { return this._term; }
  public IntervalsFuzzy setTerm(String val) { this._term = val; return this; }

  static final ParseField TRANSPOSITIONS = new ParseField("transpositions");
  private Boolean _transpositions;
  public Boolean getTranspositions() { return this._transpositions; }
  public IntervalsFuzzy setTranspositions(Boolean val) { this._transpositions = val; return this; }

  static final ParseField USE_FIELD = new ParseField("use_field");
  private String _useField;
  public String getUseField() { return this._useField; }
  public IntervalsFuzzy setUseField(String val) { this._useField = val; return this; }


  
  @Override
  public void toXContentInternal(XContentBuilder builder, ToXContent.Params params) throws IOException {
    
    if (_analyzer != null) {
      builder.field(ANALYZER.getPreferredName(), _analyzer);
    }
    if (_fuzziness != null) {
      builder.field(FUZZINESS.getPreferredName());
      _fuzziness.toXContent(builder, params);
    }
    if (_prefixLength$isSet) {
      builder.field(PREFIX_LENGTH.getPreferredName(), _prefixLength);
    }
    if (_term != null) {
      builder.field(TERM.getPreferredName(), _term);
    }
    if (_transpositions != null) {
      builder.field(TRANSPOSITIONS.getPreferredName(), _transpositions);
    }
    if (_useField != null) {
      builder.field(USE_FIELD.getPreferredName(), _useField);
    }
  }

  @Override
  public IntervalsFuzzy fromXContent(XContentParser parser) throws IOException, XContentParseException {
    return IntervalsFuzzy.PARSER.apply(parser, null);
  }

  public static final ObjectParser<IntervalsFuzzy, Void> PARSER =
    new ObjectParser<>(IntervalsFuzzy.class.getName(), false, IntervalsFuzzy::new);

  static {
    PARSER.declareString(IntervalsFuzzy::setAnalyzer, ANALYZER);
    PARSER.declareObject(IntervalsFuzzy::setFuzziness, (p, t) -> Fuzziness.PARSER.apply(p, t), FUZZINESS);
    PARSER.declareInt(IntervalsFuzzy::setPrefixLength, PREFIX_LENGTH);
    PARSER.declareString(IntervalsFuzzy::setTerm, TERM);
    PARSER.declareBoolean(IntervalsFuzzy::setTranspositions, TRANSPOSITIONS);
    PARSER.declareString(IntervalsFuzzy::setUseField, USE_FIELD);
  }

}
