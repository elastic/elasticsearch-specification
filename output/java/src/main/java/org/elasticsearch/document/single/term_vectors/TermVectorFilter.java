
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

public class TermVectorFilter  implements XContentable<TermVectorFilter> {
  
  static final ParseField MAX_DOC_FREQ = new ParseField("max_doc_freq");
  private Integer _maxDocFreq;
  public Integer getMaxDocFreq() { return this._maxDocFreq; }
  public TermVectorFilter setMaxDocFreq(Integer val) { this._maxDocFreq = val; return this; }


  static final ParseField MAX_NUM_TERMS = new ParseField("max_num_terms");
  private Integer _maxNumTerms;
  public Integer getMaxNumTerms() { return this._maxNumTerms; }
  public TermVectorFilter setMaxNumTerms(Integer val) { this._maxNumTerms = val; return this; }


  static final ParseField MAX_TERM_FREQ = new ParseField("max_term_freq");
  private Integer _maxTermFreq;
  public Integer getMaxTermFreq() { return this._maxTermFreq; }
  public TermVectorFilter setMaxTermFreq(Integer val) { this._maxTermFreq = val; return this; }


  static final ParseField MAX_WORD_LENGTH = new ParseField("max_word_length");
  private Integer _maxWordLength;
  public Integer getMaxWordLength() { return this._maxWordLength; }
  public TermVectorFilter setMaxWordLength(Integer val) { this._maxWordLength = val; return this; }


  static final ParseField MIN_DOC_FREQ = new ParseField("min_doc_freq");
  private Integer _minDocFreq;
  public Integer getMinDocFreq() { return this._minDocFreq; }
  public TermVectorFilter setMinDocFreq(Integer val) { this._minDocFreq = val; return this; }


  static final ParseField MIN_TERM_FREQ = new ParseField("min_term_freq");
  private Integer _minTermFreq;
  public Integer getMinTermFreq() { return this._minTermFreq; }
  public TermVectorFilter setMinTermFreq(Integer val) { this._minTermFreq = val; return this; }


  static final ParseField MIN_WORD_LENGTH = new ParseField("min_word_length");
  private Integer _minWordLength;
  public Integer getMinWordLength() { return this._minWordLength; }
  public TermVectorFilter setMinWordLength(Integer val) { this._minWordLength = val; return this; }


  
  @Override
  public XContentBuilder toXContent(XContentBuilder builder, ToXContent.Params params) throws IOException {
    builder.startObject();
    if (_maxDocFreq != null) {
      builder.field(MAX_DOC_FREQ.getPreferredName(), _maxDocFreq);
    }
    if (_maxNumTerms != null) {
      builder.field(MAX_NUM_TERMS.getPreferredName(), _maxNumTerms);
    }
    if (_maxTermFreq != null) {
      builder.field(MAX_TERM_FREQ.getPreferredName(), _maxTermFreq);
    }
    if (_maxWordLength != null) {
      builder.field(MAX_WORD_LENGTH.getPreferredName(), _maxWordLength);
    }
    if (_minDocFreq != null) {
      builder.field(MIN_DOC_FREQ.getPreferredName(), _minDocFreq);
    }
    if (_minTermFreq != null) {
      builder.field(MIN_TERM_FREQ.getPreferredName(), _minTermFreq);
    }
    if (_minWordLength != null) {
      builder.field(MIN_WORD_LENGTH.getPreferredName(), _minWordLength);
    }
    builder.endObject();
    return builder;
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
