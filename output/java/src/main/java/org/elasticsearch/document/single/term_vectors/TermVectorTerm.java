
package org.elasticsearch.document.single.term_vectors;

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
import org.elasticsearch.document.single.term_vectors.*;

public class TermVectorTerm  implements XContentable<TermVectorTerm> {
  
  static final ParseField DOC_FREQ = new ParseField("doc_freq");
  private Integer _docFreq;
  public Integer getDocFreq() { return this._docFreq; }
  public TermVectorTerm setDocFreq(Integer val) { this._docFreq = val; return this; }


  static final ParseField TERM_FREQ = new ParseField("term_freq");
  private Integer _termFreq;
  public Integer getTermFreq() { return this._termFreq; }
  public TermVectorTerm setTermFreq(Integer val) { this._termFreq = val; return this; }


  static final ParseField SCORE = new ParseField("score");
  private Double _score;
  public Double getScore() { return this._score; }
  public TermVectorTerm setScore(Double val) { this._score = val; return this; }


  static final ParseField TOKENS = new ParseField("tokens");
  private List<Token> _tokens;
  public List<Token> getTokens() { return this._tokens; }
  public TermVectorTerm setTokens(List<Token> val) { this._tokens = val; return this; }


  static final ParseField TTF = new ParseField("ttf");
  private Integer _ttf;
  public Integer getTtf() { return this._ttf; }
  public TermVectorTerm setTtf(Integer val) { this._ttf = val; return this; }


  
  @Override
  public XContentBuilder toXContent(XContentBuilder builder, ToXContent.Params params) throws IOException {
    builder.startObject();
    if (_docFreq != null) {
      builder.field(DOC_FREQ.getPreferredName(), _docFreq);
    }
    if (_termFreq != null) {
      builder.field(TERM_FREQ.getPreferredName(), _termFreq);
    }
    if (_score != null) {
      builder.field(SCORE.getPreferredName(), _score);
    }
    if (_tokens != null) {
      builder.array(TOKENS.getPreferredName(), _tokens);
    }
    if (_ttf != null) {
      builder.field(TTF.getPreferredName(), _ttf);
    }
    builder.endObject();
    return builder;
  }

  @Override
  public TermVectorTerm fromXContent(XContentParser parser) throws IOException, XContentParseException {
    return TermVectorTerm.PARSER.apply(parser, null);
  }

  public static final ObjectParser<TermVectorTerm, Void> PARSER =
    new ObjectParser<>(TermVectorTerm.class.getName(), false, TermVectorTerm::new);

  static {
    PARSER.declareInt(TermVectorTerm::setDocFreq, DOC_FREQ);
    PARSER.declareInt(TermVectorTerm::setTermFreq, TERM_FREQ);
    PARSER.declareDouble(TermVectorTerm::setScore, SCORE);
    PARSER.declareObjectArray(TermVectorTerm::setTokens, (p, t) -> Token.PARSER.apply(p, t), TOKENS);
    PARSER.declareInt(TermVectorTerm::setTtf, TTF);
  }

}
