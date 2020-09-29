
package org.elasticsearch.query_dsl.specialized.more_like_this;

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
import org.elasticsearch.query_dsl.specialized.more_like_this.like.*;
import org.elasticsearch.common_options.minimum_should_match.*;
import org.elasticsearch.analysis.*;
import org.elasticsearch.common.*;
import org.elasticsearch.query_dsl.abstractions.query.*;

public class MoreLikeThisQuery extends QueryBase implements XContentable<MoreLikeThisQuery> {
  
  static final ParseField ANALYZER = new ParseField("analyzer");
  private String _analyzer;
  public String getAnalyzer() { return this._analyzer; }
  public MoreLikeThisQuery setAnalyzer(String val) { this._analyzer = val; return this; }

  static final ParseField BOOST_TERMS = new ParseField("boost_terms");
  private double _boostTerms;
  private boolean _boostTerms$isSet;
  public double getBoostTerms() { return this._boostTerms; }
  public MoreLikeThisQuery setBoostTerms(double val) {
    this._boostTerms = val;
    _boostTerms$isSet = true;
    return this;
  }

  static final ParseField FIELDS = new ParseField("fields");
  private List<String> _fields;
  public List<String> getFields() { return this._fields; }
  public MoreLikeThisQuery setFields(List<String> val) { this._fields = val; return this; }

  static final ParseField INCLUDE = new ParseField("include");
  private Boolean _include;
  public Boolean getInclude() { return this._include; }
  public MoreLikeThisQuery setInclude(Boolean val) { this._include = val; return this; }

  static final ParseField LIKE = new ParseField("like");
  private List<Like> _like;
  public List<Like> getLike() { return this._like; }
  public MoreLikeThisQuery setLike(List<Like> val) { this._like = val; return this; }

  static final ParseField MAX_DOC_FREQ = new ParseField("max_doc_freq");
  private int _maxDocFreq;
  private boolean _maxDocFreq$isSet;
  public int getMaxDocFreq() { return this._maxDocFreq; }
  public MoreLikeThisQuery setMaxDocFreq(int val) {
    this._maxDocFreq = val;
    _maxDocFreq$isSet = true;
    return this;
  }

  static final ParseField MAX_QUERY_TERMS = new ParseField("max_query_terms");
  private int _maxQueryTerms;
  private boolean _maxQueryTerms$isSet;
  public int getMaxQueryTerms() { return this._maxQueryTerms; }
  public MoreLikeThisQuery setMaxQueryTerms(int val) {
    this._maxQueryTerms = val;
    _maxQueryTerms$isSet = true;
    return this;
  }

  static final ParseField MAX_WORD_LENGTH = new ParseField("max_word_length");
  private int _maxWordLength;
  private boolean _maxWordLength$isSet;
  public int getMaxWordLength() { return this._maxWordLength; }
  public MoreLikeThisQuery setMaxWordLength(int val) {
    this._maxWordLength = val;
    _maxWordLength$isSet = true;
    return this;
  }

  static final ParseField MIN_DOC_FREQ = new ParseField("min_doc_freq");
  private int _minDocFreq;
  private boolean _minDocFreq$isSet;
  public int getMinDocFreq() { return this._minDocFreq; }
  public MoreLikeThisQuery setMinDocFreq(int val) {
    this._minDocFreq = val;
    _minDocFreq$isSet = true;
    return this;
  }

  static final ParseField MINIMUM_SHOULD_MATCH = new ParseField("minimum_should_match");
  private MinimumShouldMatch _minimumShouldMatch;
  public MinimumShouldMatch getMinimumShouldMatch() { return this._minimumShouldMatch; }
  public MoreLikeThisQuery setMinimumShouldMatch(MinimumShouldMatch val) { this._minimumShouldMatch = val; return this; }

  static final ParseField MIN_TERM_FREQ = new ParseField("min_term_freq");
  private int _minTermFreq;
  private boolean _minTermFreq$isSet;
  public int getMinTermFreq() { return this._minTermFreq; }
  public MoreLikeThisQuery setMinTermFreq(int val) {
    this._minTermFreq = val;
    _minTermFreq$isSet = true;
    return this;
  }

  static final ParseField MIN_WORD_LENGTH = new ParseField("min_word_length");
  private int _minWordLength;
  private boolean _minWordLength$isSet;
  public int getMinWordLength() { return this._minWordLength; }
  public MoreLikeThisQuery setMinWordLength(int val) {
    this._minWordLength = val;
    _minWordLength$isSet = true;
    return this;
  }

  static final ParseField PER_FIELD_ANALYZER = new ParseField("per_field_analyzer");
  private NamedContainer<String, String> _perFieldAnalyzer;
  public NamedContainer<String, String> getPerFieldAnalyzer() { return this._perFieldAnalyzer; }
  public MoreLikeThisQuery setPerFieldAnalyzer(NamedContainer<String, String> val) { this._perFieldAnalyzer = val; return this; }

  static final ParseField ROUTING = new ParseField("routing");
  private Routing _routing;
  public Routing getRouting() { return this._routing; }
  public MoreLikeThisQuery setRouting(Routing val) { this._routing = val; return this; }

  static final ParseField STOP_WORDS = new ParseField("stop_words");
  private StopWords _stopWords;
  public StopWords getStopWords() { return this._stopWords; }
  public MoreLikeThisQuery setStopWords(StopWords val) { this._stopWords = val; return this; }

  static final ParseField UNLIKE = new ParseField("unlike");
  private List<Like> _unlike;
  public List<Like> getUnlike() { return this._unlike; }
  public MoreLikeThisQuery setUnlike(List<Like> val) { this._unlike = val; return this; }

  static final ParseField VERSION = new ParseField("version");
  private long _version;
  private boolean _version$isSet;
  public long getVersion() { return this._version; }
  public MoreLikeThisQuery setVersion(long val) {
    this._version = val;
    _version$isSet = true;
    return this;
  }

  static final ParseField VERSION_TYPE = new ParseField("version_type");
  private VersionType _versionType;
  public VersionType getVersionType() { return this._versionType; }
  public MoreLikeThisQuery setVersionType(VersionType val) { this._versionType = val; return this; }


  
  @Override
  public void toXContentInternal(XContentBuilder builder, ToXContent.Params params) throws IOException {
    super.toXContentInternal(builder, params);
    if (_analyzer != null) {
      builder.field(ANALYZER.getPreferredName(), _analyzer);
    }
    if (_boostTerms$isSet) {
      builder.field(BOOST_TERMS.getPreferredName(), _boostTerms);
    }
    if (_fields != null) {
      builder.array(FIELDS.getPreferredName(), _fields);
    }
    if (_include != null) {
      builder.field(INCLUDE.getPreferredName(), _include);
    }
    if (_like != null) {
      builder.array(LIKE.getPreferredName(), _like);
    }
    if (_maxDocFreq$isSet) {
      builder.field(MAX_DOC_FREQ.getPreferredName(), _maxDocFreq);
    }
    if (_maxQueryTerms$isSet) {
      builder.field(MAX_QUERY_TERMS.getPreferredName(), _maxQueryTerms);
    }
    if (_maxWordLength$isSet) {
      builder.field(MAX_WORD_LENGTH.getPreferredName(), _maxWordLength);
    }
    if (_minDocFreq$isSet) {
      builder.field(MIN_DOC_FREQ.getPreferredName(), _minDocFreq);
    }
    if (_minimumShouldMatch != null) {
      builder.field(MINIMUM_SHOULD_MATCH.getPreferredName());
      _minimumShouldMatch.toXContent(builder, params);
    }
    if (_minTermFreq$isSet) {
      builder.field(MIN_TERM_FREQ.getPreferredName(), _minTermFreq);
    }
    if (_minWordLength$isSet) {
      builder.field(MIN_WORD_LENGTH.getPreferredName(), _minWordLength);
    }
    if (_perFieldAnalyzer != null) {
      builder.field(PER_FIELD_ANALYZER.getPreferredName());
      _perFieldAnalyzer.toXContent(builder, params);
    }
    if (_routing != null) {
      builder.field(ROUTING.getPreferredName());
      _routing.toXContent(builder, params);
    }
    if (_stopWords != null) {
      builder.field(STOP_WORDS.getPreferredName());
      _stopWords.toXContent(builder, params);
    }
    if (_unlike != null) {
      builder.array(UNLIKE.getPreferredName(), _unlike);
    }
    if (_version$isSet) {
      builder.field(VERSION.getPreferredName(), _version);
    }
    if (_versionType != null) {
      builder.field(VERSION_TYPE.getPreferredName());
      _versionType.toXContent(builder, params);
    }
  }

  @Override
  public MoreLikeThisQuery fromXContent(XContentParser parser) throws IOException, XContentParseException {
    return MoreLikeThisQuery.PARSER.apply(parser, null);
  }

  public static final ObjectParser<MoreLikeThisQuery, Void> PARSER =
    new ObjectParser<>(MoreLikeThisQuery.class.getName(), false, MoreLikeThisQuery::new);

  static {
    PARSER.declareString(MoreLikeThisQuery::setAnalyzer, ANALYZER);
    PARSER.declareDouble(MoreLikeThisQuery::setBoostTerms, BOOST_TERMS);
    PARSER.declareStringArray(MoreLikeThisQuery::setFields, FIELDS);
    PARSER.declareBoolean(MoreLikeThisQuery::setInclude, INCLUDE);
    PARSER.declareObjectArray(MoreLikeThisQuery::setLike, (p, t) -> Like.PARSER.apply(p, t), LIKE);
    PARSER.declareInt(MoreLikeThisQuery::setMaxDocFreq, MAX_DOC_FREQ);
    PARSER.declareInt(MoreLikeThisQuery::setMaxQueryTerms, MAX_QUERY_TERMS);
    PARSER.declareInt(MoreLikeThisQuery::setMaxWordLength, MAX_WORD_LENGTH);
    PARSER.declareInt(MoreLikeThisQuery::setMinDocFreq, MIN_DOC_FREQ);
    PARSER.declareObject(MoreLikeThisQuery::setMinimumShouldMatch, (p, t) -> MinimumShouldMatch.PARSER.apply(p, t), MINIMUM_SHOULD_MATCH);
    PARSER.declareInt(MoreLikeThisQuery::setMinTermFreq, MIN_TERM_FREQ);
    PARSER.declareInt(MoreLikeThisQuery::setMinWordLength, MIN_WORD_LENGTH);
    PARSER.declareObject(MoreLikeThisQuery::setPerFieldAnalyzer, (p, t) -> new NamedContainer<>(n -> () -> n,pp -> pp.text()), PER_FIELD_ANALYZER);
    PARSER.declareObject(MoreLikeThisQuery::setRouting, (p, t) -> Routing.createFrom(p), ROUTING);
    PARSER.declareObject(MoreLikeThisQuery::setStopWords, (p, t) -> StopWords.PARSER.apply(p, t), STOP_WORDS);
    PARSER.declareObjectArray(MoreLikeThisQuery::setUnlike, (p, t) -> Like.PARSER.apply(p, t), UNLIKE);
    PARSER.declareLong(MoreLikeThisQuery::setVersion, VERSION);
    PARSER.declareField(MoreLikeThisQuery::setVersionType, (p, t) -> VersionType.PARSER.apply(p), VERSION_TYPE, ObjectParser.ValueType.STRING_OR_NULL);
  }

}
