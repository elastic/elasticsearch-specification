
package org.elasticsearch.indices.alias_management.put_alias;

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
import org.elasticsearch.common_abstractions.infer.join_field_routing.*;
import org.elasticsearch.common_options.time_unit.*;

public class PutAliasRequest  implements XContentable<PutAliasRequest> {
  
  static final ParseField FILTER = new ParseField("filter");
  private QueryContainer _filter;
  public QueryContainer getFilter() { return this._filter; }
  public PutAliasRequest setFilter(QueryContainer val) { this._filter = val; return this; }


  static final ParseField INDEX_ROUTING = new ParseField("index_routing");
  private Routing _indexRouting;
  public Routing getIndexRouting() { return this._indexRouting; }
  public PutAliasRequest setIndexRouting(Routing val) { this._indexRouting = val; return this; }


  static final ParseField IS_WRITE_INDEX = new ParseField("is_write_index");
  private Boolean _isWriteIndex;
  public Boolean getIsWriteIndex() { return this._isWriteIndex; }
  public PutAliasRequest setIsWriteIndex(Boolean val) { this._isWriteIndex = val; return this; }


  static final ParseField ROUTING = new ParseField("routing");
  private Routing _routing;
  public Routing getRouting() { return this._routing; }
  public PutAliasRequest setRouting(Routing val) { this._routing = val; return this; }


  static final ParseField SEARCH_ROUTING = new ParseField("search_routing");
  private Routing _searchRouting;
  public Routing getSearchRouting() { return this._searchRouting; }
  public PutAliasRequest setSearchRouting(Routing val) { this._searchRouting = val; return this; }


  static final ParseField MASTER_TIMEOUT = new ParseField("master_timeout");
  private Time _masterTimeout;
  public Time getMasterTimeout() { return this._masterTimeout; }
  public PutAliasRequest setMasterTimeout(Time val) { this._masterTimeout = val; return this; }


  static final ParseField TIMEOUT = new ParseField("timeout");
  private Time _timeout;
  public Time getTimeout() { return this._timeout; }
  public PutAliasRequest setTimeout(Time val) { this._timeout = val; return this; }


  
  @Override
  public XContentBuilder toXContent(XContentBuilder builder, ToXContent.Params params) throws IOException {
    builder.startObject();
    if (_filter != null) {
      builder.field(FILTER.getPreferredName());
      _filter.toXContent(builder, params);
    }
    if (_indexRouting != null) {
      builder.field(INDEX_ROUTING.getPreferredName());
      _indexRouting.toXContent(builder, params);
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
    if (_masterTimeout != null) {
      builder.field(MASTER_TIMEOUT.getPreferredName());
      _masterTimeout.toXContent(builder, params);
    }
    if (_timeout != null) {
      builder.field(TIMEOUT.getPreferredName());
      _timeout.toXContent(builder, params);
    }
    builder.endObject();
    return builder;
  }

  @Override
  public PutAliasRequest fromXContent(XContentParser parser) throws IOException, XContentParseException {
    return PutAliasRequest.PARSER.apply(parser, null);
  }

  public static final ObjectParser<PutAliasRequest, Void> PARSER =
    new ObjectParser<>(PutAliasRequest.class.getName(), false, PutAliasRequest::new);

  static {
    PARSER.declareObject(PutAliasRequest::setFilter, (p, t) -> QueryContainer.PARSER.apply(p, t), FILTER);
    PARSER.declareObject(PutAliasRequest::setIndexRouting, (p, t) -> Routing.createFrom(p), INDEX_ROUTING);
    PARSER.declareBoolean(PutAliasRequest::setIsWriteIndex, IS_WRITE_INDEX);
    PARSER.declareObject(PutAliasRequest::setRouting, (p, t) -> Routing.createFrom(p), ROUTING);
    PARSER.declareObject(PutAliasRequest::setSearchRouting, (p, t) -> Routing.createFrom(p), SEARCH_ROUTING);
    PARSER.declareObject(PutAliasRequest::setMasterTimeout, (p, t) -> Time.PARSER.apply(p, t), MASTER_TIMEOUT);
    PARSER.declareObject(PutAliasRequest::setTimeout, (p, t) -> Time.PARSER.apply(p, t), TIMEOUT);
  }

}
