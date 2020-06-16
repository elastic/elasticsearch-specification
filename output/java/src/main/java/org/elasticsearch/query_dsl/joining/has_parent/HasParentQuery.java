
package org.elasticsearch.query_dsl.joining.has_parent;

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
import org.elasticsearch.common_abstractions.infer.relation_name.*;
import org.elasticsearch.query_dsl.abstractions.container.*;

public class HasParentQuery  implements XContentable<HasParentQuery> {
  
  static final ParseField IGNORE_UNMAPPED = new ParseField("ignore_unmapped");
  private Boolean _ignoreUnmapped;
  public Boolean getIgnoreUnmapped() { return this._ignoreUnmapped; }
  public HasParentQuery setIgnoreUnmapped(Boolean val) { this._ignoreUnmapped = val; return this; }


  static final ParseField INNER_HITS = new ParseField("inner_hits");
  private InnerHits _innerHits;
  public InnerHits getInnerHits() { return this._innerHits; }
  public HasParentQuery setInnerHits(InnerHits val) { this._innerHits = val; return this; }


  static final ParseField PARENT_TYPE = new ParseField("parent_type");
  private RelationName _parentType;
  public RelationName getParentType() { return this._parentType; }
  public HasParentQuery setParentType(RelationName val) { this._parentType = val; return this; }


  static final ParseField QUERY = new ParseField("query");
  private QueryContainer _query;
  public QueryContainer getQuery() { return this._query; }
  public HasParentQuery setQuery(QueryContainer val) { this._query = val; return this; }


  static final ParseField SCORE = new ParseField("score");
  private Boolean _score;
  public Boolean getScore() { return this._score; }
  public HasParentQuery setScore(Boolean val) { this._score = val; return this; }


  
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
    if (_parentType != null) {
      builder.field(PARENT_TYPE.getPreferredName());
      _parentType.toXContent(builder, params);
    }
    if (_query != null) {
      builder.field(QUERY.getPreferredName());
      _query.toXContent(builder, params);
    }
    if (_score != null) {
      builder.field(SCORE.getPreferredName(), _score);
    }
    builder.endObject();
    return builder;
  }

  @Override
  public HasParentQuery fromXContent(XContentParser parser) throws IOException, XContentParseException {
    return HasParentQuery.PARSER.apply(parser, null);
  }

  public static final ObjectParser<HasParentQuery, Void> PARSER =
    new ObjectParser<>(HasParentQuery.class.getName(), false, HasParentQuery::new);

  static {
    PARSER.declareBoolean(HasParentQuery::setIgnoreUnmapped, IGNORE_UNMAPPED);
    PARSER.declareObject(HasParentQuery::setInnerHits, (p, t) -> InnerHits.PARSER.apply(p, t), INNER_HITS);
    PARSER.declareObject(HasParentQuery::setParentType, (p, t) -> RelationName.createFrom(p), PARENT_TYPE);
    PARSER.declareObject(HasParentQuery::setQuery, (p, t) -> QueryContainer.PARSER.apply(p, t), QUERY);
    PARSER.declareBoolean(HasParentQuery::setScore, SCORE);
  }

}
