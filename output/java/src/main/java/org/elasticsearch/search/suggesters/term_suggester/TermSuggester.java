
package org.elasticsearch.search.suggesters.term_suggester;

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
import org.elasticsearch.search.suggesters.term_suggester.*;
import org.elasticsearch.common.*;

public class TermSuggester  implements XContentable<TermSuggester> {
  
  static final ParseField LOWERCASE_TERMS = new ParseField("lowercase_terms");
  private Boolean _lowercaseTerms;
  public Boolean getLowercaseTerms() { return this._lowercaseTerms; }
  public TermSuggester setLowercaseTerms(Boolean val) { this._lowercaseTerms = val; return this; }

  static final ParseField MAX_EDITS = new ParseField("max_edits");
  private int _maxEdits;
  private boolean _maxEdits$isSet;
  public int getMaxEdits() { return this._maxEdits; }
  public TermSuggester setMaxEdits(int val) {
    this._maxEdits = val;
    _maxEdits$isSet = true;
    return this;
  }

  static final ParseField MAX_INSPECTIONS = new ParseField("max_inspections");
  private int _maxInspections;
  private boolean _maxInspections$isSet;
  public int getMaxInspections() { return this._maxInspections; }
  public TermSuggester setMaxInspections(int val) {
    this._maxInspections = val;
    _maxInspections$isSet = true;
    return this;
  }

  static final ParseField MAX_TERM_FREQ = new ParseField("max_term_freq");
  private float _maxTermFreq;
  private boolean _maxTermFreq$isSet;
  public float getMaxTermFreq() { return this._maxTermFreq; }
  public TermSuggester setMaxTermFreq(float val) {
    this._maxTermFreq = val;
    _maxTermFreq$isSet = true;
    return this;
  }

  static final ParseField MIN_DOC_FREQ = new ParseField("min_doc_freq");
  private float _minDocFreq;
  private boolean _minDocFreq$isSet;
  public float getMinDocFreq() { return this._minDocFreq; }
  public TermSuggester setMinDocFreq(float val) {
    this._minDocFreq = val;
    _minDocFreq$isSet = true;
    return this;
  }

  static final ParseField MIN_WORD_LENGTH = new ParseField("min_word_length");
  private int _minWordLength;
  private boolean _minWordLength$isSet;
  public int getMinWordLength() { return this._minWordLength; }
  public TermSuggester setMinWordLength(int val) {
    this._minWordLength = val;
    _minWordLength$isSet = true;
    return this;
  }

  static final ParseField PREFIX_LENGTH = new ParseField("prefix_length");
  private int _prefixLength;
  private boolean _prefixLength$isSet;
  public int getPrefixLength() { return this._prefixLength; }
  public TermSuggester setPrefixLength(int val) {
    this._prefixLength = val;
    _prefixLength$isSet = true;
    return this;
  }

  static final ParseField SHARD_SIZE = new ParseField("shard_size");
  private int _shardSize;
  private boolean _shardSize$isSet;
  public int getShardSize() { return this._shardSize; }
  public TermSuggester setShardSize(int val) {
    this._shardSize = val;
    _shardSize$isSet = true;
    return this;
  }

  static final ParseField SORT = new ParseField("sort");
  private SuggestSort _sort;
  public SuggestSort getSort() { return this._sort; }
  public TermSuggester setSort(SuggestSort val) { this._sort = val; return this; }

  static final ParseField STRING_DISTANCE = new ParseField("string_distance");
  private StringDistance _stringDistance;
  public StringDistance getStringDistance() { return this._stringDistance; }
  public TermSuggester setStringDistance(StringDistance val) { this._stringDistance = val; return this; }

  static final ParseField SUGGEST_MODE = new ParseField("suggest_mode");
  private SuggestMode _suggestMode;
  public SuggestMode getSuggestMode() { return this._suggestMode; }
  public TermSuggester setSuggestMode(SuggestMode val) { this._suggestMode = val; return this; }

  static final ParseField TEXT = new ParseField("text");
  private String _text;
  public String getText() { return this._text; }
  public TermSuggester setText(String val) { this._text = val; return this; }


  
  @Override
  public void toXContentInternal(XContentBuilder builder, ToXContent.Params params) throws IOException {
    
    if (_lowercaseTerms != null) {
      builder.field(LOWERCASE_TERMS.getPreferredName(), _lowercaseTerms);
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
    if (_prefixLength$isSet) {
      builder.field(PREFIX_LENGTH.getPreferredName(), _prefixLength);
    }
    if (_shardSize$isSet) {
      builder.field(SHARD_SIZE.getPreferredName(), _shardSize);
    }
    if (_sort != null) {
      builder.field(SORT.getPreferredName());
      _sort.toXContent(builder, params);
    }
    if (_stringDistance != null) {
      builder.field(STRING_DISTANCE.getPreferredName());
      _stringDistance.toXContent(builder, params);
    }
    if (_suggestMode != null) {
      builder.field(SUGGEST_MODE.getPreferredName());
      _suggestMode.toXContent(builder, params);
    }
    if (_text != null) {
      builder.field(TEXT.getPreferredName(), _text);
    }
  }

  @Override
  public TermSuggester fromXContent(XContentParser parser) throws IOException, XContentParseException {
    return TermSuggester.PARSER.apply(parser, null);
  }

  public static final ObjectParser<TermSuggester, Void> PARSER =
    new ObjectParser<>(TermSuggester.class.getName(), false, TermSuggester::new);

  static {
    PARSER.declareBoolean(TermSuggester::setLowercaseTerms, LOWERCASE_TERMS);
    PARSER.declareInt(TermSuggester::setMaxEdits, MAX_EDITS);
    PARSER.declareInt(TermSuggester::setMaxInspections, MAX_INSPECTIONS);
    PARSER.declareFloat(TermSuggester::setMaxTermFreq, MAX_TERM_FREQ);
    PARSER.declareFloat(TermSuggester::setMinDocFreq, MIN_DOC_FREQ);
    PARSER.declareInt(TermSuggester::setMinWordLength, MIN_WORD_LENGTH);
    PARSER.declareInt(TermSuggester::setPrefixLength, PREFIX_LENGTH);
    PARSER.declareInt(TermSuggester::setShardSize, SHARD_SIZE);
    PARSER.declareField(TermSuggester::setSort, (p, t) -> SuggestSort.PARSER.apply(p), SORT, ObjectParser.ValueType.STRING_OR_NULL);
    PARSER.declareField(TermSuggester::setStringDistance, (p, t) -> StringDistance.PARSER.apply(p), STRING_DISTANCE, ObjectParser.ValueType.STRING_OR_NULL);
    PARSER.declareField(TermSuggester::setSuggestMode, (p, t) -> SuggestMode.PARSER.apply(p), SUGGEST_MODE, ObjectParser.ValueType.STRING_OR_NULL);
    PARSER.declareString(TermSuggester::setText, TEXT);
  }

}
