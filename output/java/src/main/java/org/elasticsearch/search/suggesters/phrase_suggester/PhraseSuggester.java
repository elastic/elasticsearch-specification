
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
import org.elasticsearch.search.suggesters.phrase_suggester.*;
import org.elasticsearch.internal.*;
import org.elasticsearch.search.suggesters.phrase_suggester.smoothing_model.*;

public class PhraseSuggester  implements XContentable<PhraseSuggester> {
  
  static final ParseField COLLATE = new ParseField("collate");
  private PhraseSuggestCollate _collate;
  public PhraseSuggestCollate getCollate() { return this._collate; }
  public PhraseSuggester setCollate(PhraseSuggestCollate val) { this._collate = val; return this; }

  static final ParseField CONFIDENCE = new ParseField("confidence");
  private double _confidence;
  private boolean _confidence$isSet;
  public double getConfidence() { return this._confidence; }
  public PhraseSuggester setConfidence(double val) {
    this._confidence = val;
    _confidence$isSet = true;
    return this;
  }

  static final ParseField DIRECT_GENERATOR = new ParseField("direct_generator");
  private List<DirectGenerator> _directGenerator;
  public List<DirectGenerator> getDirectGenerator() { return this._directGenerator; }
  public PhraseSuggester setDirectGenerator(List<DirectGenerator> val) { this._directGenerator = val; return this; }

  static final ParseField FORCE_UNIGRAMS = new ParseField("force_unigrams");
  private Boolean _forceUnigrams;
  public Boolean getForceUnigrams() { return this._forceUnigrams; }
  public PhraseSuggester setForceUnigrams(Boolean val) { this._forceUnigrams = val; return this; }

  static final ParseField GRAM_SIZE = new ParseField("gram_size");
  private int _gramSize;
  private boolean _gramSize$isSet;
  public int getGramSize() { return this._gramSize; }
  public PhraseSuggester setGramSize(int val) {
    this._gramSize = val;
    _gramSize$isSet = true;
    return this;
  }

  static final ParseField HIGHLIGHT = new ParseField("highlight");
  private PhraseSuggestHighlight _highlight;
  public PhraseSuggestHighlight getHighlight() { return this._highlight; }
  public PhraseSuggester setHighlight(PhraseSuggestHighlight val) { this._highlight = val; return this; }

  static final ParseField MAX_ERRORS = new ParseField("max_errors");
  private double _maxErrors;
  private boolean _maxErrors$isSet;
  public double getMaxErrors() { return this._maxErrors; }
  public PhraseSuggester setMaxErrors(double val) {
    this._maxErrors = val;
    _maxErrors$isSet = true;
    return this;
  }

  static final ParseField REAL_WORD_ERROR_LIKELIHOOD = new ParseField("real_word_error_likelihood");
  private double _realWordErrorLikelihood;
  private boolean _realWordErrorLikelihood$isSet;
  public double getRealWordErrorLikelihood() { return this._realWordErrorLikelihood; }
  public PhraseSuggester setRealWordErrorLikelihood(double val) {
    this._realWordErrorLikelihood = val;
    _realWordErrorLikelihood$isSet = true;
    return this;
  }

  static final ParseField SEPARATOR = new ParseField("separator");
  private String _separator;
  public String getSeparator() { return this._separator; }
  public PhraseSuggester setSeparator(String val) { this._separator = val; return this; }

  static final ParseField SHARD_SIZE = new ParseField("shard_size");
  private int _shardSize;
  private boolean _shardSize$isSet;
  public int getShardSize() { return this._shardSize; }
  public PhraseSuggester setShardSize(int val) {
    this._shardSize = val;
    _shardSize$isSet = true;
    return this;
  }

  static final ParseField SMOOTHING = new ParseField("smoothing");
  private SmoothingModelContainer _smoothing;
  public SmoothingModelContainer getSmoothing() { return this._smoothing; }
  public PhraseSuggester setSmoothing(SmoothingModelContainer val) { this._smoothing = val; return this; }

  static final ParseField TEXT = new ParseField("text");
  private String _text;
  public String getText() { return this._text; }
  public PhraseSuggester setText(String val) { this._text = val; return this; }

  static final ParseField TOKEN_LIMIT = new ParseField("token_limit");
  private int _tokenLimit;
  private boolean _tokenLimit$isSet;
  public int getTokenLimit() { return this._tokenLimit; }
  public PhraseSuggester setTokenLimit(int val) {
    this._tokenLimit = val;
    _tokenLimit$isSet = true;
    return this;
  }


  
  @Override
  public void toXContentInternal(XContentBuilder builder, ToXContent.Params params) throws IOException {
    
    if (_collate != null) {
      builder.field(COLLATE.getPreferredName());
      _collate.toXContent(builder, params);
    }
    if (_confidence$isSet) {
      builder.field(CONFIDENCE.getPreferredName(), _confidence);
    }
    if (_directGenerator != null) {
      builder.array(DIRECT_GENERATOR.getPreferredName(), _directGenerator);
    }
    if (_forceUnigrams != null) {
      builder.field(FORCE_UNIGRAMS.getPreferredName(), _forceUnigrams);
    }
    if (_gramSize$isSet) {
      builder.field(GRAM_SIZE.getPreferredName(), _gramSize);
    }
    if (_highlight != null) {
      builder.field(HIGHLIGHT.getPreferredName());
      _highlight.toXContent(builder, params);
    }
    if (_maxErrors$isSet) {
      builder.field(MAX_ERRORS.getPreferredName(), _maxErrors);
    }
    if (_realWordErrorLikelihood$isSet) {
      builder.field(REAL_WORD_ERROR_LIKELIHOOD.getPreferredName(), _realWordErrorLikelihood);
    }
    if (_separator != null) {
      builder.field(SEPARATOR.getPreferredName(), _separator);
    }
    if (_shardSize$isSet) {
      builder.field(SHARD_SIZE.getPreferredName(), _shardSize);
    }
    if (_smoothing != null) {
      builder.field(SMOOTHING.getPreferredName());
      _smoothing.toXContent(builder, params);
    }
    if (_text != null) {
      builder.field(TEXT.getPreferredName(), _text);
    }
    if (_tokenLimit$isSet) {
      builder.field(TOKEN_LIMIT.getPreferredName(), _tokenLimit);
    }
  }

  @Override
  public PhraseSuggester fromXContent(XContentParser parser) throws IOException, XContentParseException {
    return PhraseSuggester.PARSER.apply(parser, null);
  }

  public static final ObjectParser<PhraseSuggester, Void> PARSER =
    new ObjectParser<>(PhraseSuggester.class.getName(), false, PhraseSuggester::new);

  static {
    PARSER.declareObject(PhraseSuggester::setCollate, (p, t) -> PhraseSuggestCollate.PARSER.apply(p, t), COLLATE);
    PARSER.declareDouble(PhraseSuggester::setConfidence, CONFIDENCE);
    PARSER.declareObjectArray(PhraseSuggester::setDirectGenerator, (p, t) -> DirectGenerator.PARSER.apply(p, t), DIRECT_GENERATOR);
    PARSER.declareBoolean(PhraseSuggester::setForceUnigrams, FORCE_UNIGRAMS);
    PARSER.declareInt(PhraseSuggester::setGramSize, GRAM_SIZE);
    PARSER.declareObject(PhraseSuggester::setHighlight, (p, t) -> PhraseSuggestHighlight.PARSER.apply(p, t), HIGHLIGHT);
    PARSER.declareDouble(PhraseSuggester::setMaxErrors, MAX_ERRORS);
    PARSER.declareDouble(PhraseSuggester::setRealWordErrorLikelihood, REAL_WORD_ERROR_LIKELIHOOD);
    PARSER.declareString(PhraseSuggester::setSeparator, SEPARATOR);
    PARSER.declareInt(PhraseSuggester::setShardSize, SHARD_SIZE);
    PARSER.declareObject(PhraseSuggester::setSmoothing, (p, t) -> SmoothingModelContainer.PARSER.apply(p, t), SMOOTHING);
    PARSER.declareString(PhraseSuggester::setText, TEXT);
    PARSER.declareInt(PhraseSuggester::setTokenLimit, TOKEN_LIMIT);
  }

}
