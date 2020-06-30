
package org.elasticsearch.search.search_template;

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
import org.elasticsearch.common.*;
import org.elasticsearch.common_abstractions.infer.join_field_routing.*;
import org.elasticsearch.common_options.time_unit.*;

public class SearchTemplateRequest  implements XContentable<SearchTemplateRequest> {
  
  static final ParseField ALLOW_NO_INDICES = new ParseField("allow_no_indices");
  private Boolean _allowNoIndices;
  public Boolean getAllowNoIndices() { return this._allowNoIndices; }
  public SearchTemplateRequest setAllowNoIndices(Boolean val) { this._allowNoIndices = val; return this; }


  static final ParseField CCS_MINIMIZE_ROUNDTRIPS = new ParseField("ccs_minimize_roundtrips");
  private Boolean _ccsMinimizeRoundtrips;
  public Boolean getCcsMinimizeRoundtrips() { return this._ccsMinimizeRoundtrips; }
  public SearchTemplateRequest setCcsMinimizeRoundtrips(Boolean val) { this._ccsMinimizeRoundtrips = val; return this; }


  static final ParseField EXPAND_WILDCARDS = new ParseField("expand_wildcards");
  private ExpandWildcards _expandWildcards;
  public ExpandWildcards getExpandWildcards() { return this._expandWildcards; }
  public SearchTemplateRequest setExpandWildcards(ExpandWildcards val) { this._expandWildcards = val; return this; }


  static final ParseField EXPLAIN = new ParseField("explain");
  private Boolean _explain;
  public Boolean getExplain() { return this._explain; }
  public SearchTemplateRequest setExplain(Boolean val) { this._explain = val; return this; }


  static final ParseField IGNORE_THROTTLED = new ParseField("ignore_throttled");
  private Boolean _ignoreThrottled;
  public Boolean getIgnoreThrottled() { return this._ignoreThrottled; }
  public SearchTemplateRequest setIgnoreThrottled(Boolean val) { this._ignoreThrottled = val; return this; }


  static final ParseField IGNORE_UNAVAILABLE = new ParseField("ignore_unavailable");
  private Boolean _ignoreUnavailable;
  public Boolean getIgnoreUnavailable() { return this._ignoreUnavailable; }
  public SearchTemplateRequest setIgnoreUnavailable(Boolean val) { this._ignoreUnavailable = val; return this; }


  static final ParseField PREFERENCE = new ParseField("preference");
  private String _preference;
  public String getPreference() { return this._preference; }
  public SearchTemplateRequest setPreference(String val) { this._preference = val; return this; }


  static final ParseField PROFILE = new ParseField("profile");
  private Boolean _profile;
  public Boolean getProfile() { return this._profile; }
  public SearchTemplateRequest setProfile(Boolean val) { this._profile = val; return this; }


  static final ParseField ROUTING = new ParseField("routing");
  private Routing _routing;
  public Routing getRouting() { return this._routing; }
  public SearchTemplateRequest setRouting(Routing val) { this._routing = val; return this; }


  static final ParseField SCROLL = new ParseField("scroll");
  private Time _scroll;
  public Time getScroll() { return this._scroll; }
  public SearchTemplateRequest setScroll(Time val) { this._scroll = val; return this; }


  static final ParseField SEARCH_TYPE = new ParseField("search_type");
  private SearchType _searchType;
  public SearchType getSearchType() { return this._searchType; }
  public SearchTemplateRequest setSearchType(SearchType val) { this._searchType = val; return this; }


  static final ParseField TOTAL_HITS_AS_INTEGER = new ParseField("total_hits_as_integer");
  private Boolean _totalHitsAsInteger;
  public Boolean getTotalHitsAsInteger() { return this._totalHitsAsInteger; }
  public SearchTemplateRequest setTotalHitsAsInteger(Boolean val) { this._totalHitsAsInteger = val; return this; }


  static final ParseField TYPED_KEYS = new ParseField("typed_keys");
  private Boolean _typedKeys;
  public Boolean getTypedKeys() { return this._typedKeys; }
  public SearchTemplateRequest setTypedKeys(Boolean val) { this._typedKeys = val; return this; }


  static final ParseField ID = new ParseField("id");
  private String _id;
  public String getId() { return this._id; }
  public SearchTemplateRequest setId(String val) { this._id = val; return this; }


  static final ParseField PARAMS = new ParseField("params");
  private NamedContainer<String, Object> _params;
  public NamedContainer<String, Object> getParams() { return this._params; }
  public SearchTemplateRequest setParams(NamedContainer<String, Object> val) { this._params = val; return this; }


  static final ParseField SOURCE = new ParseField("source");
  private String _source;
  public String getSource() { return this._source; }
  public SearchTemplateRequest setSource(String val) { this._source = val; return this; }


  
  @Override
  public XContentBuilder toXContent(XContentBuilder builder, ToXContent.Params params) throws IOException {
    builder.startObject();
    if (_allowNoIndices != null) {
      builder.field(ALLOW_NO_INDICES.getPreferredName(), _allowNoIndices);
    }
    if (_ccsMinimizeRoundtrips != null) {
      builder.field(CCS_MINIMIZE_ROUNDTRIPS.getPreferredName(), _ccsMinimizeRoundtrips);
    }
    if (_expandWildcards != null) {
      builder.field(EXPAND_WILDCARDS.getPreferredName());
      _expandWildcards.toXContent(builder, params);
    }
    if (_explain != null) {
      builder.field(EXPLAIN.getPreferredName(), _explain);
    }
    if (_ignoreThrottled != null) {
      builder.field(IGNORE_THROTTLED.getPreferredName(), _ignoreThrottled);
    }
    if (_ignoreUnavailable != null) {
      builder.field(IGNORE_UNAVAILABLE.getPreferredName(), _ignoreUnavailable);
    }
    if (_preference != null) {
      builder.field(PREFERENCE.getPreferredName(), _preference);
    }
    if (_profile != null) {
      builder.field(PROFILE.getPreferredName(), _profile);
    }
    if (_routing != null) {
      builder.field(ROUTING.getPreferredName());
      _routing.toXContent(builder, params);
    }
    if (_scroll != null) {
      builder.field(SCROLL.getPreferredName());
      _scroll.toXContent(builder, params);
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
    if (_id != null) {
      builder.field(ID.getPreferredName(), _id);
    }
    if (_params != null) {
      builder.field(PARAMS.getPreferredName());
      _params.toXContent(builder, params);
    }
    if (_source != null) {
      builder.field(SOURCE.getPreferredName(), _source);
    }
    builder.endObject();
    return builder;
  }

  @Override
  public SearchTemplateRequest fromXContent(XContentParser parser) throws IOException, XContentParseException {
    return SearchTemplateRequest.PARSER.apply(parser, null);
  }

  public static final ObjectParser<SearchTemplateRequest, Void> PARSER =
    new ObjectParser<>(SearchTemplateRequest.class.getName(), false, SearchTemplateRequest::new);

  static {
    PARSER.declareBoolean(SearchTemplateRequest::setAllowNoIndices, ALLOW_NO_INDICES);
    PARSER.declareBoolean(SearchTemplateRequest::setCcsMinimizeRoundtrips, CCS_MINIMIZE_ROUNDTRIPS);
    PARSER.declareField(SearchTemplateRequest::setExpandWildcards, (p, t) -> ExpandWildcards.PARSER.apply(p), EXPAND_WILDCARDS, ObjectParser.ValueType.STRING_OR_NULL);
    PARSER.declareBoolean(SearchTemplateRequest::setExplain, EXPLAIN);
    PARSER.declareBoolean(SearchTemplateRequest::setIgnoreThrottled, IGNORE_THROTTLED);
    PARSER.declareBoolean(SearchTemplateRequest::setIgnoreUnavailable, IGNORE_UNAVAILABLE);
    PARSER.declareString(SearchTemplateRequest::setPreference, PREFERENCE);
    PARSER.declareBoolean(SearchTemplateRequest::setProfile, PROFILE);
    PARSER.declareObject(SearchTemplateRequest::setRouting, (p, t) -> Routing.createFrom(p), ROUTING);
    PARSER.declareObject(SearchTemplateRequest::setScroll, (p, t) -> Time.PARSER.apply(p, t), SCROLL);
    PARSER.declareField(SearchTemplateRequest::setSearchType, (p, t) -> SearchType.PARSER.apply(p), SEARCH_TYPE, ObjectParser.ValueType.STRING_OR_NULL);
    PARSER.declareBoolean(SearchTemplateRequest::setTotalHitsAsInteger, TOTAL_HITS_AS_INTEGER);
    PARSER.declareBoolean(SearchTemplateRequest::setTypedKeys, TYPED_KEYS);
    PARSER.declareString(SearchTemplateRequest::setId, ID);
    PARSER.declareObject(SearchTemplateRequest::setParams, (p, t) -> new NamedContainer<>(n -> () -> n,XContentParser::binaryValue), PARAMS);
    PARSER.declareString(SearchTemplateRequest::setSource, SOURCE);
  }

}
