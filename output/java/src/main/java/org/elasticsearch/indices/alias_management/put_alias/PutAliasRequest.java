
package org.elasticsearch.indices.alias_management.put_alias;

import java.io.IOException;
import java.util.Date;
import java.util.List;
import java.util.HashMap;
import java.time.Instant;
import java.time.format.DateTimeFormatter;
import org.elasticsearch.*;
import org.elasticsearch.common.ParseField;
import org.elasticsearch.common.xcontent.*;
import org.elasticsearch.common_options.time_unit.*;
import org.elasticsearch.query_dsl.abstractions.container.*;
import org.elasticsearch.internal.*;
import org.elasticsearch.common_abstractions.request.*;

public class PutAliasRequest extends RequestBase<PutAliasRequest> implements XContentable<PutAliasRequest> {
  
  static final ParseField MASTER_TIMEOUT = new ParseField("master_timeout");
  private String _masterTimeout;
  public String getMasterTimeout() { return this._masterTimeout; }
  public PutAliasRequest setMasterTimeout(String val) { this._masterTimeout = val; return this; }

  static final ParseField TIMEOUT = new ParseField("timeout");
  private String _timeout;
  public String getTimeout() { return this._timeout; }
  public PutAliasRequest setTimeout(String val) { this._timeout = val; return this; }

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


  
  @Override
  public void toXContentInternal(XContentBuilder builder, ToXContent.Params params) throws IOException {
    super.toXContentInternal(builder, params);
    if (_masterTimeout != null) {
      builder.field(MASTER_TIMEOUT.getPreferredName(), _masterTimeout);
    }
    if (_timeout != null) {
      builder.field(TIMEOUT.getPreferredName(), _timeout);
    }
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
  }

  @Override
  public PutAliasRequest fromXContent(XContentParser parser) throws IOException, XContentParseException {
    return PutAliasRequest.PARSER.apply(parser, null);
  }

  public static final ObjectParser<PutAliasRequest, Void> PARSER =
    new ObjectParser<>(PutAliasRequest.class.getName(), false, PutAliasRequest::new);

  static {
    PARSER.declareString(PutAliasRequest::setMasterTimeout, MASTER_TIMEOUT);
    PARSER.declareString(PutAliasRequest::setTimeout, TIMEOUT);
    PARSER.declareObject(PutAliasRequest::setFilter, (p, t) -> QueryContainer.PARSER.apply(p, t), FILTER);
    PARSER.declareObject(PutAliasRequest::setIndexRouting, (p, t) -> Routing.createFrom(p), INDEX_ROUTING);
    PARSER.declareBoolean(PutAliasRequest::setIsWriteIndex, IS_WRITE_INDEX);
    PARSER.declareObject(PutAliasRequest::setRouting, (p, t) -> Routing.createFrom(p), ROUTING);
    PARSER.declareObject(PutAliasRequest::setSearchRouting, (p, t) -> Routing.createFrom(p), SEARCH_ROUTING);
  }

}
