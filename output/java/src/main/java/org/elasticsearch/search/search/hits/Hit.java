
package org.elasticsearch.search.search.hits;

import java.io.IOException;
import java.util.Date;
import java.util.List;
import java.util.HashMap;
import java.time.Instant;
import java.time.format.DateTimeFormatter;
import org.elasticsearch.*;
import org.elasticsearch.common.ParseField;
import org.elasticsearch.common.xcontent.*;
import org.elasticsearch.search.explain.*;
import org.elasticsearch.common_abstractions.lazy_document.*;
import org.elasticsearch.search.search.hits.*;
import org.elasticsearch.internal.*;

public class Hit<TDocument>  implements XContentable<Hit> {
  
  static final ParseField EXPLANATION = new ParseField("_explanation");
  private Explanation _explanation;
  public Explanation getExplanation() { return this._explanation; }
  public Hit<TDocument> setExplanation(Explanation val) { this._explanation = val; return this; }

  static final ParseField FIELDS = new ParseField("fields");
  private NamedContainer<String, LazyDocument> _fields;
  public NamedContainer<String, LazyDocument> getFields() { return this._fields; }
  public Hit<TDocument> setFields(NamedContainer<String, LazyDocument> val) { this._fields = val; return this; }

  static final ParseField HIGHLIGHT = new ParseField("highlight");
  private NamedContainer<String, List<String>> _highlight;
  public NamedContainer<String, List<String>> getHighlight() { return this._highlight; }
  public Hit<TDocument> setHighlight(NamedContainer<String, List<String>> val) { this._highlight = val; return this; }

  static final ParseField INNER_HITS = new ParseField("inner_hits");
  private NamedContainer<String, InnerHitsResult> _innerHits;
  public NamedContainer<String, InnerHitsResult> getInnerHits() { return this._innerHits; }
  public Hit<TDocument> setInnerHits(NamedContainer<String, InnerHitsResult> val) { this._innerHits = val; return this; }

  static final ParseField MATCHED_QUERIES = new ParseField("matched_queries");
  private List<String> _matchedQueries;
  public List<String> getMatchedQueries() { return this._matchedQueries; }
  public Hit<TDocument> setMatchedQueries(List<String> val) { this._matchedQueries = val; return this; }

  static final ParseField NESTED = new ParseField("_nested");
  private NestedIdentity _nested;
  public NestedIdentity getNested() { return this._nested; }
  public Hit<TDocument> setNested(NestedIdentity val) { this._nested = val; return this; }

  static final ParseField SCORE = new ParseField("_score");
  private double _score;
  private boolean _score$isSet;
  public double getScore() { return this._score; }
  public Hit<TDocument> setScore(double val) {
    this._score = val;
    _score$isSet = true;
    return this;
  }

  static final ParseField SORT = new ParseField("sort");
  private List<Object> _sort;
  public List<Object> getSort() { return this._sort; }
  public Hit<TDocument> setSort(List<Object> val) { this._sort = val; return this; }


  
  @Override
  public void toXContentInternal(XContentBuilder builder, ToXContent.Params params) throws IOException {
    
    if (_explanation != null) {
      builder.field(EXPLANATION.getPreferredName());
      _explanation.toXContent(builder, params);
    }
    if (_fields != null) {
      builder.field(FIELDS.getPreferredName());
      _fields.toXContent(builder, params);
    }
    if (_highlight != null) {
      builder.field(HIGHLIGHT.getPreferredName());
      _highlight.toXContent(builder, params);
    }
    if (_innerHits != null) {
      builder.field(INNER_HITS.getPreferredName());
      _innerHits.toXContent(builder, params);
    }
    if (_matchedQueries != null) {
      builder.array(MATCHED_QUERIES.getPreferredName(), _matchedQueries);
    }
    if (_nested != null) {
      builder.field(NESTED.getPreferredName());
      _nested.toXContent(builder, params);
    }
    if (_score$isSet) {
      builder.field(SCORE.getPreferredName(), _score);
    }
    if (_sort != null) {
      builder.array(SORT.getPreferredName(), _sort);
    }
  }

  @Override
  public Hit fromXContent(XContentParser parser) throws IOException, XContentParseException {
    return Hit.PARSER.apply(parser, null);
  }

  public static final ObjectParser<Hit, Void> PARSER =
    new ObjectParser<>(Hit.class.getName(), false, Hit::new);

  static {
    PARSER.declareObject(Hit::setExplanation, (p, t) -> Explanation.PARSER.apply(p, t), EXPLANATION);
    PARSER.declareObject(Hit::setFields, (p, t) -> new NamedContainer<>(n -> () -> n,pp -> LazyDocument.PARSER.apply(pp, null)), FIELDS);
    PARSER.declareObject(Hit::setHighlight, (p, t) -> new NamedContainer<>(n -> () -> n,null /* TODO List<String> */), HIGHLIGHT);
    PARSER.declareObject(Hit::setInnerHits, (p, t) -> new NamedContainer<>(n -> () -> n,pp -> InnerHitsResult.PARSER.apply(pp, null)), INNER_HITS);
    PARSER.declareStringArray(Hit::setMatchedQueries, MATCHED_QUERIES);
    PARSER.declareObject(Hit::setNested, (p, t) -> NestedIdentity.PARSER.apply(p, t), NESTED);
    PARSER.declareDouble(Hit::setScore, SCORE);
    PARSER.declareObjectArray(Hit::setSort, (p, t) -> p.objectText(), SORT);
  }

}
