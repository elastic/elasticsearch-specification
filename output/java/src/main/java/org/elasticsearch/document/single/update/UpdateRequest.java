
package org.elasticsearch.document.single.update;

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
import org.elasticsearch.common_options.scripting.*;
import org.elasticsearch.search.search.source_filtering.*;
import org.elasticsearch.internal.*;
import org.elasticsearch.common.*;
import org.elasticsearch.common_abstractions.infer.join_field_routing.*;
import org.elasticsearch.common_options.time_unit.*;

public class UpdateRequest<TDocument, TPartialDocument>  implements XContentable<UpdateRequest<TDocument, TPartialDocument>> {
  
  static final ParseField DETECT_NOOP = new ParseField("detect_noop");
  private Boolean _detectNoop;
  public Boolean getDetectNoop() { return this._detectNoop; }
  public UpdateRequest<TDocument, TPartialDocument> setDetectNoop(Boolean val) { this._detectNoop = val; return this; }


  static final ParseField DOC = new ParseField("doc");
  private TPartialDocument _doc;
  public TPartialDocument getDoc() { return this._doc; }
  public UpdateRequest<TDocument, TPartialDocument> setDoc(TPartialDocument val) { this._doc = val; return this; }


  static final ParseField DOC_AS_UPSERT = new ParseField("doc_as_upsert");
  private Boolean _docAsUpsert;
  public Boolean getDocAsUpsert() { return this._docAsUpsert; }
  public UpdateRequest<TDocument, TPartialDocument> setDocAsUpsert(Boolean val) { this._docAsUpsert = val; return this; }


  static final ParseField SCRIPT = new ParseField("script");
  private Script _script;
  public Script getScript() { return this._script; }
  public UpdateRequest<TDocument, TPartialDocument> setScript(Script val) { this._script = val; return this; }


  static final ParseField SCRIPTED_UPSERT = new ParseField("scripted_upsert");
  private Boolean _scriptedUpsert;
  public Boolean getScriptedUpsert() { return this._scriptedUpsert; }
  public UpdateRequest<TDocument, TPartialDocument> setScriptedUpsert(Boolean val) { this._scriptedUpsert = val; return this; }


  static final ParseField SOURCE = new ParseField("_source");
  private Either<Boolean, SourceFilter> _source;
  public Either<Boolean, SourceFilter> getSource() { return this._source; }
  public UpdateRequest<TDocument, TPartialDocument> setSource(Either<Boolean, SourceFilter> val) { this._source = val; return this; }


  static final ParseField UPSERT = new ParseField("upsert");
  private TDocument _upsert;
  public TDocument getUpsert() { return this._upsert; }
  public UpdateRequest<TDocument, TPartialDocument> setUpsert(TDocument val) { this._upsert = val; return this; }


  static final ParseField IF_PRIMARY_TERM = new ParseField("if_primary_term");
  private Long _ifPrimaryTerm;
  public Long getIfPrimaryTerm() { return this._ifPrimaryTerm; }
  public UpdateRequest<TDocument, TPartialDocument> setIfPrimaryTerm(Long val) { this._ifPrimaryTerm = val; return this; }


  static final ParseField IF_SEQUENCE_NUMBER = new ParseField("if_sequence_number");
  private Long _ifSequenceNumber;
  public Long getIfSequenceNumber() { return this._ifSequenceNumber; }
  public UpdateRequest<TDocument, TPartialDocument> setIfSequenceNumber(Long val) { this._ifSequenceNumber = val; return this; }


  static final ParseField LANG = new ParseField("lang");
  private String _lang;
  public String getLang() { return this._lang; }
  public UpdateRequest<TDocument, TPartialDocument> setLang(String val) { this._lang = val; return this; }


  static final ParseField REFRESH = new ParseField("refresh");
  private Refresh _refresh;
  public Refresh getRefresh() { return this._refresh; }
  public UpdateRequest<TDocument, TPartialDocument> setRefresh(Refresh val) { this._refresh = val; return this; }


  static final ParseField RETRY_ON_CONFLICT = new ParseField("retry_on_conflict");
  private Long _retryOnConflict;
  public Long getRetryOnConflict() { return this._retryOnConflict; }
  public UpdateRequest<TDocument, TPartialDocument> setRetryOnConflict(Long val) { this._retryOnConflict = val; return this; }


  static final ParseField ROUTING = new ParseField("routing");
  private Routing _routing;
  public Routing getRouting() { return this._routing; }
  public UpdateRequest<TDocument, TPartialDocument> setRouting(Routing val) { this._routing = val; return this; }


  static final ParseField SOURCE_ENABLED = new ParseField("source_enabled");
  private Boolean _sourceEnabled;
  public Boolean getSourceEnabled() { return this._sourceEnabled; }
  public UpdateRequest<TDocument, TPartialDocument> setSourceEnabled(Boolean val) { this._sourceEnabled = val; return this; }


  static final ParseField TIMEOUT = new ParseField("timeout");
  private Time _timeout;
  public Time getTimeout() { return this._timeout; }
  public UpdateRequest<TDocument, TPartialDocument> setTimeout(Time val) { this._timeout = val; return this; }


  static final ParseField WAIT_FOR_ACTIVE_SHARDS = new ParseField("wait_for_active_shards");
  private String _waitForActiveShards;
  public String getWaitForActiveShards() { return this._waitForActiveShards; }
  public UpdateRequest<TDocument, TPartialDocument> setWaitForActiveShards(String val) { this._waitForActiveShards = val; return this; }


  
  @Override
  public XContentBuilder toXContent(XContentBuilder builder, ToXContent.Params params) throws IOException {
    builder.startObject();
    if (_detectNoop != null) {
      builder.field(DETECT_NOOP.getPreferredName(), _detectNoop);
    }
    if (_doc != null) {
      builder.field(DOC.getPreferredName(), _doc);
    }
    if (_docAsUpsert != null) {
      builder.field(DOC_AS_UPSERT.getPreferredName(), _docAsUpsert);
    }
    if (_script != null) {
      builder.field(SCRIPT.getPreferredName());
      _script.toXContent(builder, params);
    }
    if (_scriptedUpsert != null) {
      builder.field(SCRIPTED_UPSERT.getPreferredName(), _scriptedUpsert);
    }
    if (_source != null) {
      builder.field(SOURCE.getPreferredName());
      _source.map(builder::value, r-> r.toXContent(builder, params));
    }
    if (_upsert != null) {
      builder.field(UPSERT.getPreferredName(), _upsert);
    }
    if (_ifPrimaryTerm != null) {
      builder.field(IF_PRIMARY_TERM.getPreferredName(), _ifPrimaryTerm);
    }
    if (_ifSequenceNumber != null) {
      builder.field(IF_SEQUENCE_NUMBER.getPreferredName(), _ifSequenceNumber);
    }
    if (_lang != null) {
      builder.field(LANG.getPreferredName(), _lang);
    }
    if (_refresh != null) {
      builder.field(REFRESH.getPreferredName());
      _refresh.toXContent(builder, params);
    }
    if (_retryOnConflict != null) {
      builder.field(RETRY_ON_CONFLICT.getPreferredName(), _retryOnConflict);
    }
    if (_routing != null) {
      builder.field(ROUTING.getPreferredName());
      _routing.toXContent(builder, params);
    }
    if (_sourceEnabled != null) {
      builder.field(SOURCE_ENABLED.getPreferredName(), _sourceEnabled);
    }
    if (_timeout != null) {
      builder.field(TIMEOUT.getPreferredName());
      _timeout.toXContent(builder, params);
    }
    if (_waitForActiveShards != null) {
      builder.field(WAIT_FOR_ACTIVE_SHARDS.getPreferredName(), _waitForActiveShards);
    }
    builder.endObject();
    return builder;
  }

  @Override
  public UpdateRequest fromXContent(XContentParser parser) throws IOException, XContentParseException {
    return UpdateRequest.PARSER.apply(parser, null);
  }

  public static final ObjectParser<UpdateRequest, Void> PARSER =
    new ObjectParser<>(UpdateRequest.class.getName(), false, UpdateRequest::new);

  static {
    PARSER.declareBoolean(UpdateRequest::setDetectNoop, DETECT_NOOP);
    PARSER.declareObject(UpdateRequest::setDoc, (p, t) -> null /* TODO TPartialDocument */, DOC);
    PARSER.declareBoolean(UpdateRequest::setDocAsUpsert, DOC_AS_UPSERT);
    PARSER.declareObject(UpdateRequest::setScript, (p, t) -> Script.PARSER.apply(p, t), SCRIPT);
    PARSER.declareBoolean(UpdateRequest::setScriptedUpsert, SCRIPTED_UPSERT);
    PARSER.declareObject(UpdateRequest::setSource, (p, t) ->  new Either<Boolean, SourceFilter>() /* TODO UnionOf */, SOURCE);
    PARSER.declareObject(UpdateRequest::setUpsert, (p, t) -> null /* TODO TDocument */, UPSERT);
    PARSER.declareLong(UpdateRequest::setIfPrimaryTerm, IF_PRIMARY_TERM);
    PARSER.declareLong(UpdateRequest::setIfSequenceNumber, IF_SEQUENCE_NUMBER);
    PARSER.declareString(UpdateRequest::setLang, LANG);
    PARSER.declareField(UpdateRequest::setRefresh, (p, t) -> Refresh.PARSER.apply(p), REFRESH, ObjectParser.ValueType.STRING_OR_NULL);
    PARSER.declareLong(UpdateRequest::setRetryOnConflict, RETRY_ON_CONFLICT);
    PARSER.declareObject(UpdateRequest::setRouting, (p, t) -> Routing.createFrom(p), ROUTING);
    PARSER.declareBoolean(UpdateRequest::setSourceEnabled, SOURCE_ENABLED);
    PARSER.declareObject(UpdateRequest::setTimeout, (p, t) -> Time.PARSER.apply(p, t), TIMEOUT);
    PARSER.declareString(UpdateRequest::setWaitForActiveShards, WAIT_FOR_ACTIVE_SHARDS);
  }

}
