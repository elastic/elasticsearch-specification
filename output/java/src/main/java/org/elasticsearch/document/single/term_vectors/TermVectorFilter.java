
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

public class TermVectorFilter  implements XContentable<TermVectorFilter> {
  
  static final ParseField MAX_DOC_FREQ = new ParseField("max_doc_freq");
  private int _maxDocFreq;
  private boolean _maxDocFreq$isSet;
  public int getMaxDocFreq() { return this._maxDocFreq; }
  public TermVectorFilter setMaxDocFreq(int val) {
    this._maxDocFreq = val;
    _maxDocFreq$isSet = true;
    return this;
  }

  static final ParseField MAX_NUM_TERMS = new ParseField("max_num_terms");
  private int _maxNumTerms;
  private boolean _maxNumTerms$isSet;
  public int getMaxNumTerms() { return this._maxNumTerms; }
  public TermVectorFilter setMaxNumTerms(int val) {
    this._maxNumTerms = val;
    _maxNumTerms$isSet = true;
    return this;
  }

  static final ParseField MAX_TERM_FREQ = new ParseField("max_term_freq");
  private int _maxTermFreq;
  private boolean _maxTermFreq$isSet;
  public int getMaxTermFreq() { return this._maxTermFreq; }
  public TermVectorFilter setMaxTermFreq(int val) {
    this._maxTermFreq = val;
    _maxTermFreq$isSet = true;
    return this;
  }

  static final ParseField MAX_WORD_LENGTH = new ParseField("max_word_length");
  private int _maxWordLength;
  private boolean _maxWordLength$isSet;
  public int getMaxWordLength() { return this._maxWordLength; }
  public TermVectorFilter setMaxWordLength(int val) {
    this._maxWordLength = val;
    _maxWordLength$isSet = true;
    return this;
  }

  static final ParseField MIN_DOC_FREQ = new ParseField("min_doc_freq");
  private int _minDocFreq;
  private boolean _minDocFreq$isSet;
  public int getMinDocFreq() { return this._minDocFreq; }
  public TermVectorFilter setMinDocFreq(int val) {
    this._minDocFreq = val;
    _minDocFreq$isSet = true;
    return this;
  }

  static final ParseField MIN_TERM_FREQ = new ParseField("min_term_freq");
  private int _minTermFreq;
  private boolean _minTermFreq$isSet;
  public int getMinTermFreq() { return this._minTermFreq; }
  public TermVectorFilter setMinTermFreq(int val) {
    this._minTermFreq = val;
    _minTermFreq$isSet = true;
    return this;
  }

  static final ParseField MIN_WORD_LENGTH = new ParseField("min_word_length");
  private int _minWordLength;
  private boolean _minWordLength$isSet;
  public int getMinWordLength() { return this._minWordLength; }
  public TermVectorFilter setMinWordLength(int val) {
    this._minWordLength = val;
    _minWordLength$isSet = true;
    return this;
  }


  
  @Override
  public void toXContentInternal(XContentBuilder builder, ToXContent.Params params) throws IOException {
    
    if (_maxDocFreq$isSet) {
      builder.field(MAX_DOC_FREQ.getPreferredName(), _maxDocFreq);
    }
    if (_maxNumTerms$isSet) {
      builder.field(MAX_NUM_TERMS.getPreferredName(), _maxNumTerms);
    }
    if (_maxTermFreq$isSet) {
      builder.field(MAX_TERM_FREQ.getPreferredName(), _maxTermFreq);
    }
    if (_maxWordLength$isSet) {
      builder.field(MAX_WORD_LENGTH.getPreferredName(), _maxWordLength);
    }
    if (_minDocFreq$isSet) {
      builder.field(MIN_DOC_FREQ.getPreferredName(), _minDocFreq);
    }
    if (_minTermFreq$isSet) {
      builder.field(MIN_TERM_FREQ.getPreferredName(), _minTermFreq);
    }
    if (_minWordLength$isSet) {
      builder.field(MIN_WORD_LENGTH.getPreferredName(), _minWordLength);
    }
  }

  @Override
  public TermVectorFilter fromXContent(XContentParser parser) throws IOException, XContentParseException {
    return TermVectorFilter.PARSER.apply(parser, null);
  }

  public static final ObjectParser<TermVectorFilter, Void> PARSER =
    new ObjectParser<>(TermVectorFilter.class.getName(), false, TermVectorFilter::new);

  static {
    PARSER.declareInt(TermVectorFilter::setMaxDocFreq, MAX_DOC_FREQ);
    PARSER.declareInt(TermVectorFilter::setMaxNumTerms, MAX_NUM_TERMS);
    PARSER.declareInt(TermVectorFilter::setMaxTermFreq, MAX_TERM_FREQ);
    PARSER.declareInt(TermVectorFilter::setMaxWordLength, MAX_WORD_LENGTH);
    PARSER.declareInt(TermVectorFilter::setMinDocFreq, MIN_DOC_FREQ);
    PARSER.declareInt(TermVectorFilter::setMinTermFreq, MIN_TERM_FREQ);
    PARSER.declareInt(TermVectorFilter::setMinWordLength, MIN_WORD_LENGTH);
  }

}
