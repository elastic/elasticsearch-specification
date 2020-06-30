
package org.elasticsearch.query_dsl.specialized.more_like_this;

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
import org.elasticsearch.common_abstractions.infer.field.*;
import org.elasticsearch.query_dsl.specialized.more_like_this.like.*;
import org.elasticsearch.common_options.minimum_should_match.*;
import org.elasticsearch.common_abstractions.infer.join_field_routing.*;
import org.elasticsearch.analysis.*;
import org.elasticsearch.common.*;

public class MoreLikeThisQuery  implements XContentable<MoreLikeThisQuery> {
  
  static final ParseField ANALYZER = new ParseField("analyzer");
  private String _analyzer;
  public String getAnalyzer() { return this._analyzer; }
  public MoreLikeThisQuery setAnalyzer(String val) { this._analyzer = val; return this; }


  static final ParseField BOOST_TERMS = new ParseField("boost_terms");
  private Double _boostTerms;
  public Double getBoostTerms() { return this._boostTerms; }
  public MoreLikeThisQuery setBoostTerms(Double val) { this._boostTerms = val; return this; }


  static final ParseField FIELDS = new ParseField("fields");
  private List<Field> _fields;
  public List<Field> getFields() { return this._fields; }
  public MoreLikeThisQuery setFields(List<Field> val) { this._fields = val; return this; }


  static final ParseField INCLUDE = new ParseField("include");
  private Boolean _include;
  public Boolean getInclude() { return this._include; }
  public MoreLikeThisQuery setInclude(Boolean val) { this._include = val; return this; }


  static final ParseField LIKE = new ParseField("like");
  private List<Like> _like;
  public List<Like> getLike() { return this._like; }
  public MoreLikeThisQuery setLike(List<Like> val) { this._like = val; return this; }


  static final ParseField MAX_DOC_FREQ = new ParseField("max_doc_freq");
  private Integer _maxDocFreq;
  public Integer getMaxDocFreq() { return this._maxDocFreq; }
  public MoreLikeThisQuery setMaxDocFreq(Integer val) { this._maxDocFreq = val; return this; }


  static final ParseField MAX_QUERY_TERMS = new ParseField("max_query_terms");
  private Integer _maxQueryTerms;
  public Integer getMaxQueryTerms() { return this._maxQueryTerms; }
  public MoreLikeThisQuery setMaxQueryTerms(Integer val) { this._maxQueryTerms = val; return this; }


  static final ParseField MAX_WORD_LENGTH = new ParseField("max_word_length");
  private Integer _maxWordLength;
  public Integer getMaxWordLength() { return this._maxWordLength; }
  public MoreLikeThisQuery setMaxWordLength(Integer val) { this._maxWordLength = val; return this; }


  static final ParseField MIN_DOC_FREQ = new ParseField("min_doc_freq");
  private Integer _minDocFreq;
  public Integer getMinDocFreq() { return this._minDocFreq; }
  public MoreLikeThisQuery setMinDocFreq(Integer val) { this._minDocFreq = val; return this; }


  static final ParseField MINIMUM_SHOULD_MATCH = new ParseField("minimum_should_match");
  private MinimumShouldMatch _minimumShouldMatch;
  public MinimumShouldMatch getMinimumShouldMatch() { return this._minimumShouldMatch; }
  public MoreLikeThisQuery setMinimumShouldMatch(MinimumShouldMatch val) { this._minimumShouldMatch = val; return this; }


  static final ParseField MIN_TERM_FREQ = new ParseField("min_term_freq");
  private Integer _minTermFreq;
  public Integer getMinTermFreq() { return this._minTermFreq; }
  public MoreLikeThisQuery setMinTermFreq(Integer val) { this._minTermFreq = val; return this; }


  static final ParseField MIN_WORD_LENGTH = new ParseField("min_word_length");
  private Integer _minWordLength;
  public Integer getMinWordLength() { return this._minWordLength; }
  public MoreLikeThisQuery setMinWordLength(Integer val) { this._minWordLength = val; return this; }


  static final ParseField PER_FIELD_ANALYZER = new ParseField("per_field_analyzer");
  private NamedContainer<Field, String> _perFieldAnalyzer;
  public NamedContainer<Field, String> getPerFieldAnalyzer() { return this._perFieldAnalyzer; }
  public MoreLikeThisQuery setPerFieldAnalyzer(NamedContainer<Field, String> val) { this._perFieldAnalyzer = val; return this; }


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
  private Long _version;
  public Long getVersion() { return this._version; }
  public MoreLikeThisQuery setVersion(Long val) { this._version = val; return this; }


  static final ParseField VERSION_TYPE = new ParseField("version_type");
  private VersionType _versionType;
  public VersionType getVersionType() { return this._versionType; }
  public MoreLikeThisQuery setVersionType(VersionType val) { this._versionType = val; return this; }


  
  @Override
  public XContentBuilder toXContent(XContentBuilder builder, ToXContent.Params params) throws IOException {
    builder.startObject();
    if (_analyzer != null) {
      builder.field(ANALYZER.getPreferredName(), _analyzer);
    }
    if (_boostTerms != null) {
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
    if (_maxDocFreq != null) {
      builder.field(MAX_DOC_FREQ.getPreferredName(), _maxDocFreq);
    }
    if (_maxQueryTerms != null) {
      builder.field(MAX_QUERY_TERMS.getPreferredName(), _maxQueryTerms);
    }
    if (_maxWordLength != null) {
      builder.field(MAX_WORD_LENGTH.getPreferredName(), _maxWordLength);
    }
    if (_minDocFreq != null) {
      builder.field(MIN_DOC_FREQ.getPreferredName(), _minDocFreq);
    }
    if (_minimumShouldMatch != null) {
      builder.field(MINIMUM_SHOULD_MATCH.getPreferredName());
      _minimumShouldMatch.toXContent(builder, params);
    }
    if (_minTermFreq != null) {
      builder.field(MIN_TERM_FREQ.getPreferredName(), _minTermFreq);
    }
    if (_minWordLength != null) {
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
    if (_version != null) {
      builder.field(VERSION.getPreferredName(), _version);
    }
    if (_versionType != null) {
      builder.field(VERSION_TYPE.getPreferredName());
      _versionType.toXContent(builder, params);
    }
    builder.endObject();
    return builder;
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
    PARSER.declareObjectArray(MoreLikeThisQuery::setFields, (p, t) -> Field.createFrom(p), FIELDS);
    PARSER.declareBoolean(MoreLikeThisQuery::setInclude, INCLUDE);
    PARSER.declareObjectArray(MoreLikeThisQuery::setLike, (p, t) -> new Like().fromXContent(p), LIKE);
    PARSER.declareInt(MoreLikeThisQuery::setMaxDocFreq, MAX_DOC_FREQ);
    PARSER.declareInt(MoreLikeThisQuery::setMaxQueryTerms, MAX_QUERY_TERMS);
    PARSER.declareInt(MoreLikeThisQuery::setMaxWordLength, MAX_WORD_LENGTH);
    PARSER.declareInt(MoreLikeThisQuery::setMinDocFreq, MIN_DOC_FREQ);
    PARSER.declareObject(MoreLikeThisQuery::setMinimumShouldMatch, (p, t) -> new MinimumShouldMatch().fromXContent(p), MINIMUM_SHOULD_MATCH);
    PARSER.declareInt(MoreLikeThisQuery::setMinTermFreq, MIN_TERM_FREQ);
    PARSER.declareInt(MoreLikeThisQuery::setMinWordLength, MIN_WORD_LENGTH);
    PARSER.declareObject(MoreLikeThisQuery::setPerFieldAnalyzer, (p, t) -> new NamedContainer<>(n -> () -> new Field(n),pp -> pp.text()), PER_FIELD_ANALYZER);
    PARSER.declareObject(MoreLikeThisQuery::setRouting, (p, t) -> Routing.createFrom(p), ROUTING);
    PARSER.declareObject(MoreLikeThisQuery::setStopWords, (p, t) -> new StopWords().fromXContent(p), STOP_WORDS);
    PARSER.declareObjectArray(MoreLikeThisQuery::setUnlike, (p, t) -> new Like().fromXContent(p), UNLIKE);
    PARSER.declareLong(MoreLikeThisQuery::setVersion, VERSION);
    PARSER.declareField(MoreLikeThisQuery::setVersionType, (p, t) -> VersionType.PARSER.apply(p), VERSION_TYPE, ObjectParser.ValueType.STRING_OR_NULL);
  }

}
