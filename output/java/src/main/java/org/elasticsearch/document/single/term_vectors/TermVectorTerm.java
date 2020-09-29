
package org.elasticsearch.document.single.term_vectors;

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
import org.elasticsearch.document.single.term_vectors.*;

public class TermVectorTerm  implements XContentable<TermVectorTerm> {
  
  static final ParseField DOC_FREQ = new ParseField("doc_freq");
  private int _docFreq;
  private boolean _docFreq$isSet;
  public int getDocFreq() { return this._docFreq; }
  public TermVectorTerm setDocFreq(int val) {
    this._docFreq = val;
    _docFreq$isSet = true;
    return this;
  }

  static final ParseField SCORE = new ParseField("score");
  private double _score;
  private boolean _score$isSet;
  public double getScore() { return this._score; }
  public TermVectorTerm setScore(double val) {
    this._score = val;
    _score$isSet = true;
    return this;
  }

  static final ParseField TERM_FREQ = new ParseField("term_freq");
  private int _termFreq;
  private boolean _termFreq$isSet;
  public int getTermFreq() { return this._termFreq; }
  public TermVectorTerm setTermFreq(int val) {
    this._termFreq = val;
    _termFreq$isSet = true;
    return this;
  }

  static final ParseField TOKENS = new ParseField("tokens");
  private List<Token> _tokens;
  public List<Token> getTokens() { return this._tokens; }
  public TermVectorTerm setTokens(List<Token> val) { this._tokens = val; return this; }

  static final ParseField TTF = new ParseField("ttf");
  private int _ttf;
  private boolean _ttf$isSet;
  public int getTtf() { return this._ttf; }
  public TermVectorTerm setTtf(int val) {
    this._ttf = val;
    _ttf$isSet = true;
    return this;
  }


  
  @Override
  public void toXContentInternal(XContentBuilder builder, ToXContent.Params params) throws IOException {
    
    if (_docFreq$isSet) {
      builder.field(DOC_FREQ.getPreferredName(), _docFreq);
    }
    if (_score$isSet) {
      builder.field(SCORE.getPreferredName(), _score);
    }
    if (_termFreq$isSet) {
      builder.field(TERM_FREQ.getPreferredName(), _termFreq);
    }
    if (_tokens != null) {
      builder.array(TOKENS.getPreferredName(), _tokens);
    }
    if (_ttf$isSet) {
      builder.field(TTF.getPreferredName(), _ttf);
    }
  }

  @Override
  public TermVectorTerm fromXContent(XContentParser parser) throws IOException, XContentParseException {
    return TermVectorTerm.PARSER.apply(parser, null);
  }

  public static final ObjectParser<TermVectorTerm, Void> PARSER =
    new ObjectParser<>(TermVectorTerm.class.getName(), false, TermVectorTerm::new);

  static {
    PARSER.declareInt(TermVectorTerm::setDocFreq, DOC_FREQ);
    PARSER.declareDouble(TermVectorTerm::setScore, SCORE);
    PARSER.declareInt(TermVectorTerm::setTermFreq, TERM_FREQ);
    PARSER.declareObjectArray(TermVectorTerm::setTokens, (p, t) -> Token.PARSER.apply(p, t), TOKENS);
    PARSER.declareInt(TermVectorTerm::setTtf, TTF);
  }

}
