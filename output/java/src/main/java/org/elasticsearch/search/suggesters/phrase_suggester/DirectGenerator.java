
package org.elasticsearch.search.suggesters.phrase_suggester;

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
import org.elasticsearch.common.*;

public class DirectGenerator  implements XContentable<DirectGenerator> {
  
  static final ParseField FIELD = new ParseField("field");
  private String _field;
  public String getField() { return this._field; }
  public DirectGenerator setField(String val) { this._field = val; return this; }

  static final ParseField MAX_EDITS = new ParseField("max_edits");
  private int _maxEdits;
  private boolean _maxEdits$isSet;
  public int getMaxEdits() { return this._maxEdits; }
  public DirectGenerator setMaxEdits(int val) {
    this._maxEdits = val;
    _maxEdits$isSet = true;
    return this;
  }

  static final ParseField MAX_INSPECTIONS = new ParseField("max_inspections");
  private float _maxInspections;
  private boolean _maxInspections$isSet;
  public float getMaxInspections() { return this._maxInspections; }
  public DirectGenerator setMaxInspections(float val) {
    this._maxInspections = val;
    _maxInspections$isSet = true;
    return this;
  }

  static final ParseField MAX_TERM_FREQ = new ParseField("max_term_freq");
  private float _maxTermFreq;
  private boolean _maxTermFreq$isSet;
  public float getMaxTermFreq() { return this._maxTermFreq; }
  public DirectGenerator setMaxTermFreq(float val) {
    this._maxTermFreq = val;
    _maxTermFreq$isSet = true;
    return this;
  }

  static final ParseField MIN_DOC_FREQ = new ParseField("min_doc_freq");
  private float _minDocFreq;
  private boolean _minDocFreq$isSet;
  public float getMinDocFreq() { return this._minDocFreq; }
  public DirectGenerator setMinDocFreq(float val) {
    this._minDocFreq = val;
    _minDocFreq$isSet = true;
    return this;
  }

  static final ParseField MIN_WORD_LENGTH = new ParseField("min_word_length");
  private int _minWordLength;
  private boolean _minWordLength$isSet;
  public int getMinWordLength() { return this._minWordLength; }
  public DirectGenerator setMinWordLength(int val) {
    this._minWordLength = val;
    _minWordLength$isSet = true;
    return this;
  }

  static final ParseField POST_FILTER = new ParseField("post_filter");
  private String _postFilter;
  public String getPostFilter() { return this._postFilter; }
  public DirectGenerator setPostFilter(String val) { this._postFilter = val; return this; }

  static final ParseField PRE_FILTER = new ParseField("pre_filter");
  private String _preFilter;
  public String getPreFilter() { return this._preFilter; }
  public DirectGenerator setPreFilter(String val) { this._preFilter = val; return this; }

  static final ParseField PREFIX_LENGTH = new ParseField("prefix_length");
  private int _prefixLength;
  private boolean _prefixLength$isSet;
  public int getPrefixLength() { return this._prefixLength; }
  public DirectGenerator setPrefixLength(int val) {
    this._prefixLength = val;
    _prefixLength$isSet = true;
    return this;
  }

  static final ParseField SIZE = new ParseField("size");
  private int _size;
  private boolean _size$isSet;
  public int getSize() { return this._size; }
  public DirectGenerator setSize(int val) {
    this._size = val;
    _size$isSet = true;
    return this;
  }

  static final ParseField SUGGEST_MODE = new ParseField("suggest_mode");
  private SuggestMode _suggestMode;
  public SuggestMode getSuggestMode() { return this._suggestMode; }
  public DirectGenerator setSuggestMode(SuggestMode val) { this._suggestMode = val; return this; }


  
  @Override
  public void toXContentInternal(XContentBuilder builder, ToXContent.Params params) throws IOException {
    
    if (_field != null) {
      builder.field(FIELD.getPreferredName(), _field);
    }
    if (_maxEdits$isSet) {
      builder.field(MAX_EDITS.getPreferredName(), _maxEdits);
    }
    if (_maxInspections$isSet) {
      builder.field(MAX_INSPECTIONS.getPreferredName(), _maxInspections);
    }
    if (_maxTermFreq$isSet) {
      builder.field(MAX_TERM_FREQ.getPreferredName(), _maxTermFreq);
    }
    if (_minDocFreq$isSet) {
      builder.field(MIN_DOC_FREQ.getPreferredName(), _minDocFreq);
    }
    if (_minWordLength$isSet) {
      builder.field(MIN_WORD_LENGTH.getPreferredName(), _minWordLength);
    }
    if (_postFilter != null) {
      builder.field(POST_FILTER.getPreferredName(), _postFilter);
    }
    if (_preFilter != null) {
      builder.field(PRE_FILTER.getPreferredName(), _preFilter);
    }
    if (_prefixLength$isSet) {
      builder.field(PREFIX_LENGTH.getPreferredName(), _prefixLength);
    }
    if (_size$isSet) {
      builder.field(SIZE.getPreferredName(), _size);
    }
    if (_suggestMode != null) {
      builder.field(SUGGEST_MODE.getPreferredName());
      _suggestMode.toXContent(builder, params);
    }
  }

  @Override
  public DirectGenerator fromXContent(XContentParser parser) throws IOException, XContentParseException {
    return DirectGenerator.PARSER.apply(parser, null);
  }

  public static final ObjectParser<DirectGenerator, Void> PARSER =
    new ObjectParser<>(DirectGenerator.class.getName(), false, DirectGenerator::new);

  static {
    PARSER.declareString(DirectGenerator::setField, FIELD);
    PARSER.declareInt(DirectGenerator::setMaxEdits, MAX_EDITS);
    PARSER.declareFloat(DirectGenerator::setMaxInspections, MAX_INSPECTIONS);
    PARSER.declareFloat(DirectGenerator::setMaxTermFreq, MAX_TERM_FREQ);
    PARSER.declareFloat(DirectGenerator::setMinDocFreq, MIN_DOC_FREQ);
    PARSER.declareInt(DirectGenerator::setMinWordLength, MIN_WORD_LENGTH);
    PARSER.declareString(DirectGenerator::setPostFilter, POST_FILTER);
    PARSER.declareString(DirectGenerator::setPreFilter, PRE_FILTER);
    PARSER.declareInt(DirectGenerator::setPrefixLength, PREFIX_LENGTH);
    PARSER.declareInt(DirectGenerator::setSize, SIZE);
    PARSER.declareField(DirectGenerator::setSuggestMode, (p, t) -> SuggestMode.PARSER.apply(p), SUGGEST_MODE, ObjectParser.ValueType.STRING_OR_NULL);
  }

}
