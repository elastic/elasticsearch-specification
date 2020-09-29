
package org.elasticsearch.query_dsl.joining.has_parent;

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
import org.elasticsearch.query_dsl.abstractions.query.*;

public class HasParentQuery extends QueryBase implements XContentable<HasParentQuery> {
  
  static final ParseField IGNORE_UNMAPPED = new ParseField("ignore_unmapped");
  private Boolean _ignoreUnmapped;
  public Boolean getIgnoreUnmapped() { return this._ignoreUnmapped; }
  public HasParentQuery setIgnoreUnmapped(Boolean val) { this._ignoreUnmapped = val; return this; }

  static final ParseField INNER_HITS = new ParseField("inner_hits");
  private InnerHits _innerHits;
  public InnerHits getInnerHits() { return this._innerHits; }
  public HasParentQuery setInnerHits(InnerHits val) { this._innerHits = val; return this; }

  static final ParseField PARENT_TYPE = new ParseField("parent_type");
  private String _parentType;
  public String getParentType() { return this._parentType; }
  public HasParentQuery setParentType(String val) { this._parentType = val; return this; }

  static final ParseField QUERY = new ParseField("query");
  private QueryContainer _query;
  public QueryContainer getQuery() { return this._query; }
  public HasParentQuery setQuery(QueryContainer val) { this._query = val; return this; }

  static final ParseField SCORE = new ParseField("score");
  private Boolean _score;
  public Boolean getScore() { return this._score; }
  public HasParentQuery setScore(Boolean val) { this._score = val; return this; }


  
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
    if (_parentType != null) {
      builder.field(PARENT_TYPE.getPreferredName(), _parentType);
    }
    if (_query != null) {
      builder.field(QUERY.getPreferredName());
      _query.toXContent(builder, params);
    }
    if (_score != null) {
      builder.field(SCORE.getPreferredName(), _score);
    }
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
    PARSER.declareString(HasParentQuery::setParentType, PARENT_TYPE);
    PARSER.declareObject(HasParentQuery::setQuery, (p, t) -> QueryContainer.PARSER.apply(p, t), QUERY);
    PARSER.declareBoolean(HasParentQuery::setScore, SCORE);
  }

}
