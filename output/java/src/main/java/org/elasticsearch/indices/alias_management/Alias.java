
package org.elasticsearch.indices.alias_management;

import java.io.IOException;
import java.util.Date;
import java.util.List;
import java.util.HashMap;
import java.time.Instant;
import java.time.format.DateTimeFormatter;
import org.elasticsearch.*;
import org.elasticsearch.common.ParseField;
import org.elasticsearch.common.xcontent.*;
import org.elasticsearch.query_dsl.abstractions.container.*;
import org.elasticsearch.internal.*;

public class Alias  implements XContentable<Alias> {
  
  static final ParseField FILTER = new ParseField("filter");
  private QueryContainer _filter;
  public QueryContainer getFilter() { return this._filter; }
  public Alias setFilter(QueryContainer val) { this._filter = val; return this; }

  static final ParseField INDEX_ROUTING = new ParseField("index_routing");
  private Routing _indexRouting;
  public Routing getIndexRouting() { return this._indexRouting; }
  public Alias setIndexRouting(Routing val) { this._indexRouting = val; return this; }

  static final ParseField IS_HIDDEN = new ParseField("is_hidden");
  private Boolean _isHidden;
  public Boolean getIsHidden() { return this._isHidden; }
  public Alias setIsHidden(Boolean val) { this._isHidden = val; return this; }

  static final ParseField IS_WRITE_INDEX = new ParseField("is_write_index");
  private Boolean _isWriteIndex;
  public Boolean getIsWriteIndex() { return this._isWriteIndex; }
  public Alias setIsWriteIndex(Boolean val) { this._isWriteIndex = val; return this; }

  static final ParseField ROUTING = new ParseField("routing");
  private Routing _routing;
  public Routing getRouting() { return this._routing; }
  public Alias setRouting(Routing val) { this._routing = val; return this; }

  static final ParseField SEARCH_ROUTING = new ParseField("search_routing");
  private Routing _searchRouting;
  public Routing getSearchRouting() { return this._searchRouting; }
  public Alias setSearchRouting(Routing val) { this._searchRouting = val; return this; }


  
  @Override
  public void toXContentInternal(XContentBuilder builder, ToXContent.Params params) throws IOException {
    
    if (_filter != null) {
      builder.field(FILTER.getPreferredName());
      _filter.toXContent(builder, params);
    }
    if (_indexRouting != null) {
      builder.field(INDEX_ROUTING.getPreferredName());
      _indexRouting.toXContent(builder, params);
    }
    if (_isHidden != null) {
      builder.field(IS_HIDDEN.getPreferredName(), _isHidden);
    }
    if (_isWriteIndex != null) {
      builder.field(IS_WRITE_INDEX.getPreferredName(), _isWriteIndex);
    }
    if (_routing != null) {
      builder.field(ROUTING.getPreferredName());
      _routing.toXContent(builder, params);
    }
    if (_searchRouting != null) {
      builder.field(SEARCH_ROUTING.getPreferredName());
      _searchRouting.toXContent(builder, params);
    }
  }

  @Override
  public Alias fromXContent(XContentParser parser) throws IOException, XContentParseException {
    return Alias.PARSER.apply(parser, null);
  }

  public static final ObjectParser<Alias, Void> PARSER =
    new ObjectParser<>(Alias.class.getName(), false, Alias::new);

  static {
    PARSER.declareObject(Alias::setFilter, (p, t) -> QueryContainer.PARSER.apply(p, t), FILTER);
    PARSER.declareObject(Alias::setIndexRouting, (p, t) -> Routing.createFrom(p), INDEX_ROUTING);
    PARSER.declareBoolean(Alias::setIsHidden, IS_HIDDEN);
    PARSER.declareBoolean(Alias::setIsWriteIndex, IS_WRITE_INDEX);
    PARSER.declareObject(Alias::setRouting, (p, t) -> Routing.createFrom(p), ROUTING);
    PARSER.declareObject(Alias::setSearchRouting, (p, t) -> Routing.createFrom(p), SEARCH_ROUTING);
  }

}
