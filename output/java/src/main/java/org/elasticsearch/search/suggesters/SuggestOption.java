
package org.elasticsearch.search.suggesters;

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
import org.elasticsearch.search.suggesters.context_suggester.*;
import org.elasticsearch.query_dsl.geo.*;
import org.elasticsearch.internal.*;
import org.elasticsearch.common_abstractions.lazy_document.*;
import org.elasticsearch.common_abstractions.infer.index_name.*;

public class SuggestOption<TDocument>  implements XContentable<SuggestOption<TDocument>> {
  
  static final ParseField COLLATE_MATCH = new ParseField("collate_match");
  private Boolean _collateMatch;
  public Boolean getCollateMatch() { return this._collateMatch; }
  public SuggestOption<TDocument> setCollateMatch(Boolean val) { this._collateMatch = val; return this; }


  static final ParseField CONTEXTS = new ParseField("contexts");
  private NamedContainer<String, List<Context>> _contexts;
  public NamedContainer<String, List<Context>> getContexts() { return this._contexts; }
  public SuggestOption<TDocument> setContexts(NamedContainer<String, List<Context>> val) { this._contexts = val; return this; }


  static final ParseField SCORE = new ParseField("_score");
  private Double _score;
  public Double getScore() { return this._score; }
  public SuggestOption<TDocument> setScore(Double val) { this._score = val; return this; }


  static final ParseField FIELDS = new ParseField("fields");
  private NamedContainer<String, LazyDocument> _fields;
  public NamedContainer<String, LazyDocument> getFields() { return this._fields; }
  public SuggestOption<TDocument> setFields(NamedContainer<String, LazyDocument> val) { this._fields = val; return this; }


  static final ParseField FREQ = new ParseField("freq");
  private Long _freq;
  public Long getFreq() { return this._freq; }
  public SuggestOption<TDocument> setFreq(Long val) { this._freq = val; return this; }


  static final ParseField HIGHLIGHTED = new ParseField("highlighted");
  private String _highlighted;
  public String getHighlighted() { return this._highlighted; }
  public SuggestOption<TDocument> setHighlighted(String val) { this._highlighted = val; return this; }


  static final ParseField ID = new ParseField("_id");
  private String _id;
  public String getId() { return this._id; }
  public SuggestOption<TDocument> setId(String val) { this._id = val; return this; }


  static final ParseField INDEX = new ParseField("_index");
  private IndexName _index;
  public IndexName getIndex() { return this._index; }
  public SuggestOption<TDocument> setIndex(IndexName val) { this._index = val; return this; }


  static final ParseField SCORE = new ParseField("score");
  private Double _score;
  public Double getScore() { return this._score; }
  public SuggestOption<TDocument> setScore(Double val) { this._score = val; return this; }


  static final ParseField SOURCE = new ParseField("_source");
  private TDocument _source;
  public TDocument getSource() { return this._source; }
  public SuggestOption<TDocument> setSource(TDocument val) { this._source = val; return this; }


  static final ParseField TEXT = new ParseField("text");
  private String _text;
  public String getText() { return this._text; }
  public SuggestOption<TDocument> setText(String val) { this._text = val; return this; }


  
  @Override
  public XContentBuilder toXContent(XContentBuilder builder, ToXContent.Params params) throws IOException {
    builder.startObject();
    if (_collateMatch != null) {
      builder.field(COLLATE_MATCH.getPreferredName(), _collateMatch);
    }
    if (_contexts != null) {
      builder.field(CONTEXTS.getPreferredName());
      _contexts.toXContent(builder, params);
    }
    if (_score != null) {
      builder.field(SCORE.getPreferredName(), _score);
    }
    if (_fields != null) {
      builder.field(FIELDS.getPreferredName());
      _fields.toXContent(builder, params);
    }
    if (_freq != null) {
      builder.field(FREQ.getPreferredName(), _freq);
    }
    if (_highlighted != null) {
      builder.field(HIGHLIGHTED.getPreferredName(), _highlighted);
    }
    if (_id != null) {
      builder.field(ID.getPreferredName(), _id);
    }
    if (_index != null) {
      builder.field(INDEX.getPreferredName());
      _index.toXContent(builder, params);
    }
    if (_score != null) {
      builder.field(SCORE.getPreferredName(), _score);
    }
    if (_source != null) {
      builder.field(SOURCE.getPreferredName(), _source);
    }
    if (_text != null) {
      builder.field(TEXT.getPreferredName(), _text);
    }
    builder.endObject();
    return builder;
  }

  @Override
  public SuggestOption fromXContent(XContentParser parser) throws IOException, XContentParseException {
    return SuggestOption.PARSER.apply(parser, null);
  }

  public static final ObjectParser<SuggestOption, Void> PARSER =
    new ObjectParser<>(SuggestOption.class.getName(), false, SuggestOption::new);

  static {
    PARSER.declareBoolean(SuggestOption::setCollateMatch, COLLATE_MATCH);
    PARSER.declareObject(SuggestOption::setContexts, (p, t) -> new NamedContainer<>(n -> () -> n,null /* TODO List<Context> */), CONTEXTS);
    PARSER.declareDouble(SuggestOption::setScore, SCORE);
    PARSER.declareObject(SuggestOption::setFields, (p, t) -> new NamedContainer<>(n -> () -> n,pp -> LazyDocument.PARSER.apply(pp, null)), FIELDS);
    PARSER.declareLong(SuggestOption::setFreq, FREQ);
    PARSER.declareString(SuggestOption::setHighlighted, HIGHLIGHTED);
    PARSER.declareString(SuggestOption::setId, ID);
    PARSER.declareObject(SuggestOption::setIndex, (p, t) -> IndexName.createFrom(p), INDEX);
    PARSER.declareDouble(SuggestOption::setScore, SCORE);
    PARSER.declareObject(SuggestOption::setSource, (p, t) -> null /* TODO TDocument */, SOURCE);
    PARSER.declareString(SuggestOption::setText, TEXT);
  }

}
