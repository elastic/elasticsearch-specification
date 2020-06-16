
package org.elasticsearch.query_dsl.full_text.intervals;

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
import org.elasticsearch.common_options.fuzziness.*;
import org.elasticsearch.common_abstractions.infer.field.*;

public class IntervalsFuzzy  implements XContentable<IntervalsFuzzy> {
  
  static final ParseField ANALYZER = new ParseField("analyzer");
  private String _analyzer;
  public String getAnalyzer() { return this._analyzer; }
  public IntervalsFuzzy setAnalyzer(String val) { this._analyzer = val; return this; }


  static final ParseField PREFIX_LENGTH = new ParseField("prefix_length");
  private Integer _prefixLength;
  public Integer getPrefixLength() { return this._prefixLength; }
  public IntervalsFuzzy setPrefixLength(Integer val) { this._prefixLength = val; return this; }


  static final ParseField TRANSPOSITIONS = new ParseField("transpositions");
  private Boolean _transpositions;
  public Boolean getTranspositions() { return this._transpositions; }
  public IntervalsFuzzy setTranspositions(Boolean val) { this._transpositions = val; return this; }


  static final ParseField FUZZINESS = new ParseField("fuzziness");
  private Fuzziness _fuzziness;
  public Fuzziness getFuzziness() { return this._fuzziness; }
  public IntervalsFuzzy setFuzziness(Fuzziness val) { this._fuzziness = val; return this; }


  static final ParseField TERM = new ParseField("term");
  private String _term;
  public String getTerm() { return this._term; }
  public IntervalsFuzzy setTerm(String val) { this._term = val; return this; }


  static final ParseField USE_FIELD = new ParseField("use_field");
  private Field _useField;
  public Field getUseField() { return this._useField; }
  public IntervalsFuzzy setUseField(Field val) { this._useField = val; return this; }


  
  @Override
  public XContentBuilder toXContent(XContentBuilder builder, ToXContent.Params params) throws IOException {
    builder.startObject();
    if (_analyzer != null) {
      builder.field(ANALYZER.getPreferredName(), _analyzer);
    }
    if (_prefixLength != null) {
      builder.field(PREFIX_LENGTH.getPreferredName(), _prefixLength);
    }
    if (_transpositions != null) {
      builder.field(TRANSPOSITIONS.getPreferredName(), _transpositions);
    }
    if (_fuzziness != null) {
      builder.field(FUZZINESS.getPreferredName());
      _fuzziness.toXContent(builder, params);
    }
    if (_term != null) {
      builder.field(TERM.getPreferredName(), _term);
    }
    if (_useField != null) {
      builder.field(USE_FIELD.getPreferredName());
      _useField.toXContent(builder, params);
    }
    builder.endObject();
    return builder;
  }

  @Override
  public IntervalsFuzzy fromXContent(XContentParser parser) throws IOException, XContentParseException {
    return IntervalsFuzzy.PARSER.apply(parser, null);
  }

  public static final ObjectParser<IntervalsFuzzy, Void> PARSER =
    new ObjectParser<>(IntervalsFuzzy.class.getName(), false, IntervalsFuzzy::new);

  static {
    PARSER.declareString(IntervalsFuzzy::setAnalyzer, ANALYZER);
    PARSER.declareInt(IntervalsFuzzy::setPrefixLength, PREFIX_LENGTH);
    PARSER.declareBoolean(IntervalsFuzzy::setTranspositions, TRANSPOSITIONS);
    PARSER.declareObject(IntervalsFuzzy::setFuzziness, (p, t) -> Fuzziness.PARSER.apply(p, t), FUZZINESS);
    PARSER.declareString(IntervalsFuzzy::setTerm, TERM);
    PARSER.declareObject(IntervalsFuzzy::setUseField, (p, t) -> Field.createFrom(p), USE_FIELD);
  }

}
