
package org.elasticsearch.indices.alias_management;

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
import org.elasticsearch.query_dsl.abstractions.container.*;

public class AliasDefinition  implements XContentable<AliasDefinition> {
  
  static final ParseField FILTER = new ParseField("filter");
  private QueryContainer _filter;
  public QueryContainer getFilter() { return this._filter; }
  public AliasDefinition setFilter(QueryContainer val) { this._filter = val; return this; }


  static final ParseField INDEX_ROUTING = new ParseField("index_routing");
  private String _indexRouting;
  public String getIndexRouting() { return this._indexRouting; }
  public AliasDefinition setIndexRouting(String val) { this._indexRouting = val; return this; }


  static final ParseField IS_WRITE_INDEX = new ParseField("is_write_index");
  private Boolean _isWriteIndex;
  public Boolean getIsWriteIndex() { return this._isWriteIndex; }
  public AliasDefinition setIsWriteIndex(Boolean val) { this._isWriteIndex = val; return this; }


  static final ParseField ROUTING = new ParseField("routing");
  private String _routing;
  public String getRouting() { return this._routing; }
  public AliasDefinition setRouting(String val) { this._routing = val; return this; }


  static final ParseField SEARCH_ROUTING = new ParseField("search_routing");
  private String _searchRouting;
  public String getSearchRouting() { return this._searchRouting; }
  public AliasDefinition setSearchRouting(String val) { this._searchRouting = val; return this; }


  
  @Override
  public XContentBuilder toXContent(XContentBuilder builder, ToXContent.Params params) throws IOException {
    builder.startObject();
    if (_filter != null) {
      builder.field(FILTER.getPreferredName());
      _filter.toXContent(builder, params);
    }
    if (_indexRouting != null) {
      builder.field(INDEX_ROUTING.getPreferredName(), _indexRouting);
    }
    if (_isWriteIndex != null) {
      builder.field(IS_WRITE_INDEX.getPreferredName(), _isWriteIndex);
    }
    if (_routing != null) {
      builder.field(ROUTING.getPreferredName(), _routing);
    }
    if (_searchRouting != null) {
      builder.field(SEARCH_ROUTING.getPreferredName(), _searchRouting);
    }
    builder.endObject();
    return builder;
  }

  @Override
  public AliasDefinition fromXContent(XContentParser parser) throws IOException, XContentParseException {
    return AliasDefinition.PARSER.apply(parser, null);
  }

  public static final ObjectParser<AliasDefinition, Void> PARSER =
    new ObjectParser<>(AliasDefinition.class.getName(), false, AliasDefinition::new);

  static {
    PARSER.declareObject(AliasDefinition::setFilter, (p, t) -> QueryContainer.PARSER.apply(p, t), FILTER);
    PARSER.declareString(AliasDefinition::setIndexRouting, INDEX_ROUTING);
    PARSER.declareBoolean(AliasDefinition::setIsWriteIndex, IS_WRITE_INDEX);
    PARSER.declareString(AliasDefinition::setRouting, ROUTING);
    PARSER.declareString(AliasDefinition::setSearchRouting, SEARCH_ROUTING);
  }

}
