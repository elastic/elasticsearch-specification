
package org.elasticsearch.search.multi_search_template;

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
import org.elasticsearch.internal.*;
import org.elasticsearch.common.*;
import org.elasticsearch.search.search_template.*;

public class MultiSearchTemplateRequest  implements XContentable<MultiSearchTemplateRequest> {
  
  static final ParseField CCS_MINIMIZE_ROUNDTRIPS = new ParseField("ccs_minimize_roundtrips");
  private Boolean _ccsMinimizeRoundtrips;
  public Boolean getCcsMinimizeRoundtrips() { return this._ccsMinimizeRoundtrips; }
  public MultiSearchTemplateRequest setCcsMinimizeRoundtrips(Boolean val) { this._ccsMinimizeRoundtrips = val; return this; }


  static final ParseField MAX_CONCURRENT_SEARCHES = new ParseField("max_concurrent_searches");
  private Long _maxConcurrentSearches;
  public Long getMaxConcurrentSearches() { return this._maxConcurrentSearches; }
  public MultiSearchTemplateRequest setMaxConcurrentSearches(Long val) { this._maxConcurrentSearches = val; return this; }


  static final ParseField SEARCH_TYPE = new ParseField("search_type");
  private SearchType _searchType;
  public SearchType getSearchType() { return this._searchType; }
  public MultiSearchTemplateRequest setSearchType(SearchType val) { this._searchType = val; return this; }


  static final ParseField TOTAL_HITS_AS_INTEGER = new ParseField("total_hits_as_integer");
  private Boolean _totalHitsAsInteger;
  public Boolean getTotalHitsAsInteger() { return this._totalHitsAsInteger; }
  public MultiSearchTemplateRequest setTotalHitsAsInteger(Boolean val) { this._totalHitsAsInteger = val; return this; }


  static final ParseField TYPED_KEYS = new ParseField("typed_keys");
  private Boolean _typedKeys;
  public Boolean getTypedKeys() { return this._typedKeys; }
  public MultiSearchTemplateRequest setTypedKeys(Boolean val) { this._typedKeys = val; return this; }


  static final ParseField OPERATIONS = new ParseField("operations");
  private NamedContainer<String, SearchTemplateRequest> _operations;
  public NamedContainer<String, SearchTemplateRequest> getOperations() { return this._operations; }
  public MultiSearchTemplateRequest setOperations(NamedContainer<String, SearchTemplateRequest> val) { this._operations = val; return this; }


  
  @Override
  public XContentBuilder toXContent(XContentBuilder builder, ToXContent.Params params) throws IOException {
    builder.startObject();
    if (_ccsMinimizeRoundtrips != null) {
      builder.field(CCS_MINIMIZE_ROUNDTRIPS.getPreferredName(), _ccsMinimizeRoundtrips);
    }
    if (_maxConcurrentSearches != null) {
      builder.field(MAX_CONCURRENT_SEARCHES.getPreferredName(), _maxConcurrentSearches);
    }
    if (_searchType != null) {
      builder.field(SEARCH_TYPE.getPreferredName());
      _searchType.toXContent(builder, params);
    }
    if (_totalHitsAsInteger != null) {
      builder.field(TOTAL_HITS_AS_INTEGER.getPreferredName(), _totalHitsAsInteger);
    }
    if (_typedKeys != null) {
      builder.field(TYPED_KEYS.getPreferredName(), _typedKeys);
    }
    if (_operations != null) {
      builder.field(OPERATIONS.getPreferredName());
      _operations.toXContent(builder, params);
    }
    builder.endObject();
    return builder;
  }

  @Override
  public MultiSearchTemplateRequest fromXContent(XContentParser parser) throws IOException, XContentParseException {
    return MultiSearchTemplateRequest.PARSER.apply(parser, null);
  }

  public static final ObjectParser<MultiSearchTemplateRequest, Void> PARSER =
    new ObjectParser<>(MultiSearchTemplateRequest.class.getName(), false, MultiSearchTemplateRequest::new);

  static {
    PARSER.declareBoolean(MultiSearchTemplateRequest::setCcsMinimizeRoundtrips, CCS_MINIMIZE_ROUNDTRIPS);
    PARSER.declareLong(MultiSearchTemplateRequest::setMaxConcurrentSearches, MAX_CONCURRENT_SEARCHES);
    PARSER.declareField(MultiSearchTemplateRequest::setSearchType, (p, t) -> SearchType.PARSER.apply(p), SEARCH_TYPE, ObjectParser.ValueType.STRING_OR_NULL);
    PARSER.declareBoolean(MultiSearchTemplateRequest::setTotalHitsAsInteger, TOTAL_HITS_AS_INTEGER);
    PARSER.declareBoolean(MultiSearchTemplateRequest::setTypedKeys, TYPED_KEYS);
    PARSER.declareObject(MultiSearchTemplateRequest::setOperations, (p, t) -> new NamedContainer<>(n -> () -> n,pp -> SearchTemplateRequest.PARSER.apply(pp, null)), OPERATIONS);
  }

}
