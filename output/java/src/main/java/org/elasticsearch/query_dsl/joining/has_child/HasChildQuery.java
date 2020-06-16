
package org.elasticsearch.query_dsl.joining.has_child;

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
import org.elasticsearch.search.search.inner_hits.*;
import org.elasticsearch.internal.*;
import org.elasticsearch.query_dsl.abstractions.container.*;
import org.elasticsearch.query_dsl.joining.has_child.*;
import org.elasticsearch.common_abstractions.infer.relation_name.*;

public class HasChildQuery  implements XContentable<HasChildQuery> {
  
  static final ParseField IGNORE_UNMAPPED = new ParseField("ignore_unmapped");
  private Boolean _ignoreUnmapped;
  public Boolean getIgnoreUnmapped() { return this._ignoreUnmapped; }
  public HasChildQuery setIgnoreUnmapped(Boolean val) { this._ignoreUnmapped = val; return this; }


  static final ParseField INNER_HITS = new ParseField("inner_hits");
  private InnerHits _innerHits;
  public InnerHits getInnerHits() { return this._innerHits; }
  public HasChildQuery setInnerHits(InnerHits val) { this._innerHits = val; return this; }


  static final ParseField MAX_CHILDREN = new ParseField("max_children");
  private Integer _maxChildren;
  public Integer getMaxChildren() { return this._maxChildren; }
  public HasChildQuery setMaxChildren(Integer val) { this._maxChildren = val; return this; }


  static final ParseField MIN_CHILDREN = new ParseField("min_children");
  private Integer _minChildren;
  public Integer getMinChildren() { return this._minChildren; }
  public HasChildQuery setMinChildren(Integer val) { this._minChildren = val; return this; }


  static final ParseField QUERY = new ParseField("query");
  private QueryContainer _query;
  public QueryContainer getQuery() { return this._query; }
  public HasChildQuery setQuery(QueryContainer val) { this._query = val; return this; }


  static final ParseField SCORE_MODE = new ParseField("score_mode");
  private ChildScoreMode _scoreMode;
  public ChildScoreMode getScoreMode() { return this._scoreMode; }
  public HasChildQuery setScoreMode(ChildScoreMode val) { this._scoreMode = val; return this; }


  static final ParseField TYPE = new ParseField("type");
  private RelationName _type;
  public RelationName getType() { return this._type; }
  public HasChildQuery setType(RelationName val) { this._type = val; return this; }


  
  @Override
  public XContentBuilder toXContent(XContentBuilder builder, ToXContent.Params params) throws IOException {
    builder.startObject();
    if (_ignoreUnmapped != null) {
      builder.field(IGNORE_UNMAPPED.getPreferredName(), _ignoreUnmapped);
    }
    if (_innerHits != null) {
      builder.field(INNER_HITS.getPreferredName());
      _innerHits.toXContent(builder, params);
    }
    if (_maxChildren != null) {
      builder.field(MAX_CHILDREN.getPreferredName(), _maxChildren);
    }
    if (_minChildren != null) {
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
      builder.field(TYPE.getPreferredName());
      _type.toXContent(builder, params);
    }
    builder.endObject();
    return builder;
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
    PARSER.declareObject(HasChildQuery::setType, (p, t) -> RelationName.createFrom(p), TYPE);
  }

}
