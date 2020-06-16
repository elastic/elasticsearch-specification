
package org.elasticsearch.document.single.index;

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
import org.elasticsearch.common_abstractions.infer.join_field_routing.*;
import org.elasticsearch.common_options.time_unit.*;

public class IndexRequest<TDocument>  implements XContentable<IndexRequest<TDocument>> {
  
  static final ParseField DOCUMENT = new ParseField("document");
  private TDocument _document;
  public TDocument getDocument() { return this._document; }
  public IndexRequest<TDocument> setDocument(TDocument val) { this._document = val; return this; }


  static final ParseField IF_PRIMARY_TERM = new ParseField("if_primary_term");
  private Long _ifPrimaryTerm;
  public Long getIfPrimaryTerm() { return this._ifPrimaryTerm; }
  public IndexRequest<TDocument> setIfPrimaryTerm(Long val) { this._ifPrimaryTerm = val; return this; }


  static final ParseField IF_SEQUENCE_NUMBER = new ParseField("if_sequence_number");
  private Long _ifSequenceNumber;
  public Long getIfSequenceNumber() { return this._ifSequenceNumber; }
  public IndexRequest<TDocument> setIfSequenceNumber(Long val) { this._ifSequenceNumber = val; return this; }


  static final ParseField OP_TYPE = new ParseField("op_type");
  private OpType _opType;
  public OpType getOpType() { return this._opType; }
  public IndexRequest<TDocument> setOpType(OpType val) { this._opType = val; return this; }


  static final ParseField PIPELINE = new ParseField("pipeline");
  private String _pipeline;
  public String getPipeline() { return this._pipeline; }
  public IndexRequest<TDocument> setPipeline(String val) { this._pipeline = val; return this; }


  static final ParseField REFRESH = new ParseField("refresh");
  private Refresh _refresh;
  public Refresh getRefresh() { return this._refresh; }
  public IndexRequest<TDocument> setRefresh(Refresh val) { this._refresh = val; return this; }


  static final ParseField ROUTING = new ParseField("routing");
  private Routing _routing;
  public Routing getRouting() { return this._routing; }
  public IndexRequest<TDocument> setRouting(Routing val) { this._routing = val; return this; }


  static final ParseField TIMEOUT = new ParseField("timeout");
  private Time _timeout;
  public Time getTimeout() { return this._timeout; }
  public IndexRequest<TDocument> setTimeout(Time val) { this._timeout = val; return this; }


  static final ParseField VERSION = new ParseField("version");
  private Long _version;
  public Long getVersion() { return this._version; }
  public IndexRequest<TDocument> setVersion(Long val) { this._version = val; return this; }


  static final ParseField VERSION_TYPE = new ParseField("version_type");
  private VersionType _versionType;
  public VersionType getVersionType() { return this._versionType; }
  public IndexRequest<TDocument> setVersionType(VersionType val) { this._versionType = val; return this; }


  static final ParseField WAIT_FOR_ACTIVE_SHARDS = new ParseField("wait_for_active_shards");
  private String _waitForActiveShards;
  public String getWaitForActiveShards() { return this._waitForActiveShards; }
  public IndexRequest<TDocument> setWaitForActiveShards(String val) { this._waitForActiveShards = val; return this; }


  
  @Override
  public XContentBuilder toXContent(XContentBuilder builder, ToXContent.Params params) throws IOException {
    builder.startObject();
    if (_document != null) {
      builder.field(DOCUMENT.getPreferredName(), _document);
    }
    if (_ifPrimaryTerm != null) {
      builder.field(IF_PRIMARY_TERM.getPreferredName(), _ifPrimaryTerm);
    }
    if (_ifSequenceNumber != null) {
      builder.field(IF_SEQUENCE_NUMBER.getPreferredName(), _ifSequenceNumber);
    }
    if (_opType != null) {
      builder.field(OP_TYPE.getPreferredName());
      _opType.toXContent(builder, params);
    }
    if (_pipeline != null) {
      builder.field(PIPELINE.getPreferredName(), _pipeline);
    }
    if (_refresh != null) {
      builder.field(REFRESH.getPreferredName());
      _refresh.toXContent(builder, params);
    }
    if (_routing != null) {
      builder.field(ROUTING.getPreferredName());
      _routing.toXContent(builder, params);
    }
    if (_timeout != null) {
      builder.field(TIMEOUT.getPreferredName());
      _timeout.toXContent(builder, params);
    }
    if (_version != null) {
      builder.field(VERSION.getPreferredName(), _version);
    }
    if (_versionType != null) {
      builder.field(VERSION_TYPE.getPreferredName());
      _versionType.toXContent(builder, params);
    }
    if (_waitForActiveShards != null) {
      builder.field(WAIT_FOR_ACTIVE_SHARDS.getPreferredName(), _waitForActiveShards);
    }
    builder.endObject();
    return builder;
  }

  @Override
  public IndexRequest fromXContent(XContentParser parser) throws IOException, XContentParseException {
    return IndexRequest.PARSER.apply(parser, null);
  }

  public static final ObjectParser<IndexRequest, Void> PARSER =
    new ObjectParser<>(IndexRequest.class.getName(), false, IndexRequest::new);

  static {
    PARSER.declareObject(IndexRequest::setDocument, (p, t) -> null /* TODO TDocument */, DOCUMENT);
    PARSER.declareLong(IndexRequest::setIfPrimaryTerm, IF_PRIMARY_TERM);
    PARSER.declareLong(IndexRequest::setIfSequenceNumber, IF_SEQUENCE_NUMBER);
    PARSER.declareField(IndexRequest::setOpType, (p, t) -> OpType.PARSER.apply(p), OP_TYPE, ObjectParser.ValueType.STRING_OR_NULL);
    PARSER.declareString(IndexRequest::setPipeline, PIPELINE);
    PARSER.declareField(IndexRequest::setRefresh, (p, t) -> Refresh.PARSER.apply(p), REFRESH, ObjectParser.ValueType.STRING_OR_NULL);
    PARSER.declareObject(IndexRequest::setRouting, (p, t) -> Routing.createFrom(p), ROUTING);
    PARSER.declareObject(IndexRequest::setTimeout, (p, t) -> Time.PARSER.apply(p, t), TIMEOUT);
    PARSER.declareLong(IndexRequest::setVersion, VERSION);
    PARSER.declareField(IndexRequest::setVersionType, (p, t) -> VersionType.PARSER.apply(p), VERSION_TYPE, ObjectParser.ValueType.STRING_OR_NULL);
    PARSER.declareString(IndexRequest::setWaitForActiveShards, WAIT_FOR_ACTIVE_SHARDS);
  }

}
