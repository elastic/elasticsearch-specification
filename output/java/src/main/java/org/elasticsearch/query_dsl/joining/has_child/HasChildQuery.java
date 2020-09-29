
package org.elasticsearch.query_dsl.joining.has_child;

import java.io.IOException;
import java.util.Date;
import java.util.List;
import java.util.HashMap;
import java.time.Instant;
import java.time.format.DateTimeFormatter;
import org.elasticsearch.*;
import org.elasticsearch.common.ParseField;
import org.elasticsearch.common.xcontent.*;
import org.elasticsearch.search.search.inner_hits.*;
import org.elasticsearch.internal.*;
import org.elasticsearch.query_dsl.abstractions.container.*;
import org.elasticsearch.query_dsl.joining.has_child.*;
import org.elasticsearch.query_dsl.abstractions.query.*;

public class HasChildQuery extends QueryBase implements XContentable<HasChildQuery> {
  
  static final ParseField IGNORE_UNMAPPED = new ParseField("ignore_unmapped");
  private Boolean _ignoreUnmapped;
  public Boolean getIgnoreUnmapped() { return this._ignoreUnmapped; }
  public HasChildQuery setIgnoreUnmapped(Boolean val) { this._ignoreUnmapped = val; return this; }

  static final ParseField INNER_HITS = new ParseField("inner_hits");
  private InnerHits _innerHits;
  public InnerHits getInnerHits() { return this._innerHits; }
  public HasChildQuery setInnerHits(InnerHits val) { this._innerHits = val; return this; }

  static final ParseField MAX_CHILDREN = new ParseField("max_children");
  private int _maxChildren;
  private boolean _maxChildren$isSet;
  public int getMaxChildren() { return this._maxChildren; }
  public HasChildQuery setMaxChildren(int val) {
    this._maxChildren = val;
    _maxChildren$isSet = true;
    return this;
  }

  static final ParseField MIN_CHILDREN = new ParseField("min_children");
  private int _minChildren;
  private boolean _minChildren$isSet;
  public int getMinChildren() { return this._minChildren; }
  public HasChildQuery setMinChildren(int val) {
    this._minChildren = val;
    _minChildren$isSet = true;
    return this;
  }

  static final ParseField QUERY = new ParseField("query");
  private QueryContainer _query;
  public QueryContainer getQuery() { return this._query; }
  public HasChildQuery setQuery(QueryContainer val) { this._query = val; return this; }

  static final ParseField SCORE_MODE = new ParseField("score_mode");
  private ChildScoreMode _scoreMode;
  public ChildScoreMode getScoreMode() { return this._scoreMode; }
  public HasChildQuery setScoreMode(ChildScoreMode val) { this._scoreMode = val; return this; }

  static final ParseField TYPE = new ParseField("type");
  private String _type;
  public String getType() { return this._type; }
  public HasChildQuery setType(String val) { this._type = val; return this; }


  
  @Override
  public void toXContentInternal(XContentBuilder builder, ToXContent.Params params) throws IOException {
    super.toXContentInternal(builder, params);
    if (_ignoreUnmapped != null) {
      builder.field(IGNORE_UNMAPPED.getPreferredName(), _ignoreUnmapped);
    }
    if (_innerHits != null) {
      builder.field(INNER_HITS.getPreferredName());
      _innerHits.toXContent(builder, params);
    }
    if (_maxChildren$isSet) {
      builder.field(MAX_CHILDREN.getPreferredName(), _maxChildren);
    }
    if (_minChildren$isSet) {
      builder.field(MIN_CHILDREN.getPreferredName(), _minChildren);
    }
    if (_query != null) {
      builder.field(QUERY.getPreferredName());
      _query.toXContent(builder, params);
    }
    if (_scoreMode != null) {
      builder.field(SCORE_MODE.getPreferredName());
      _scoreMode.toXContent(builder, params);
    }
    if (_type != null) {
      builder.field(TYPE.getPreferredName(), _type);
    }
  }

  @Override
  public HasChildQuery fromXContent(XContentParser parser) throws IOException, XContentParseException {
    return HasChildQuery.PARSER.apply(parser, null);
  }

  public static final ObjectParser<HasChildQuery, Void> PARSER =
    new ObjectParser<>(HasChildQuery.class.getName(), false, HasChildQuery::new);

  static {
    PARSER.declareBoolean(HasChildQuery::setIgnoreUnmapped, IGNORE_UNMAPPED);
    PARSER.declareObject(HasChildQuery::setInnerHits, (p, t) -> InnerHits.PARSER.apply(p, t), INNER_HITS);
    PARSER.declareInt(HasChildQuery::setMaxChildren, MAX_CHILDREN);
    PARSER.declareInt(HasChildQuery::setMinChildren, MIN_CHILDREN);
    PARSER.declareObject(HasChildQuery::setQuery, (p, t) -> QueryContainer.PARSER.apply(p, t), QUERY);
    PARSER.declareField(HasChildQuery::setScoreMode, (p, t) -> ChildScoreMode.PARSER.apply(p), SCORE_MODE, ObjectParser.ValueType.STRING_OR_NULL);
    PARSER.declareString(HasChildQuery::setType, TYPE);
  }

}
