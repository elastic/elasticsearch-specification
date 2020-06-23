
package org.elasticsearch.x_pack.info.x_pack_usage;

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
import org.elasticsearch.x_pack.info.x_pack_usage.*;

public class XPackUsageResponse  implements XContentable<XPackUsageResponse> {
  
  static final ParseField SQL = new ParseField("sql");
  private SqlUsage _sql;
  public SqlUsage getSql() { return this._sql; }
  public XPackUsageResponse setSql(SqlUsage val) { this._sql = val; return this; }


  static final ParseField ROLLUP = new ParseField("rollup");
  private XPackUsage _rollup;
  public XPackUsage getRollup() { return this._rollup; }
  public XPackUsageResponse setRollup(XPackUsage val) { this._rollup = val; return this; }


  static final ParseField DATA_FRAME = new ParseField("data_frame");
  private XPackUsage _dataFrame;
  public XPackUsage getDataFrame() { return this._dataFrame; }
  public XPackUsageResponse setDataFrame(XPackUsage val) { this._dataFrame = val; return this; }


  static final ParseField FLATTENED = new ParseField("flattened");
  private FlattenedUsage _flattened;
  public FlattenedUsage getFlattened() { return this._flattened; }
  public XPackUsageResponse setFlattened(FlattenedUsage val) { this._flattened = val; return this; }


  static final ParseField DATA_SCIENCE = new ParseField("data_science");
  private XPackUsage _dataScience;
  public XPackUsage getDataScience() { return this._dataScience; }
  public XPackUsageResponse setDataScience(XPackUsage val) { this._dataScience = val; return this; }


  static final ParseField ILM = new ParseField("ilm");
  private IlmUsage _ilm;
  public IlmUsage getIlm() { return this._ilm; }
  public XPackUsageResponse setIlm(IlmUsage val) { this._ilm = val; return this; }


  static final ParseField CCR = new ParseField("ccr");
  private CcrUsage _ccr;
  public CcrUsage getCcr() { return this._ccr; }
  public XPackUsageResponse setCcr(CcrUsage val) { this._ccr = val; return this; }


  static final ParseField WATCHER = new ParseField("watcher");
  private AlertingUsage _watcher;
  public AlertingUsage getWatcher() { return this._watcher; }
  public XPackUsageResponse setWatcher(AlertingUsage val) { this._watcher = val; return this; }


  static final ParseField GRAPH = new ParseField("graph");
  private XPackUsage _graph;
  public XPackUsage getGraph() { return this._graph; }
  public XPackUsageResponse setGraph(XPackUsage val) { this._graph = val; return this; }


  static final ParseField LOGSTASH = new ParseField("logstash");
  private XPackUsage _logstash;
  public XPackUsage getLogstash() { return this._logstash; }
  public XPackUsageResponse setLogstash(XPackUsage val) { this._logstash = val; return this; }


  static final ParseField ML = new ParseField("ml");
  private MachineLearningUsage _ml;
  public MachineLearningUsage getMl() { return this._ml; }
  public XPackUsageResponse setMl(MachineLearningUsage val) { this._ml = val; return this; }


  static final ParseField MONITORING = new ParseField("monitoring");
  private MonitoringUsage _monitoring;
  public MonitoringUsage getMonitoring() { return this._monitoring; }
  public XPackUsageResponse setMonitoring(MonitoringUsage val) { this._monitoring = val; return this; }


  static final ParseField SECURITY = new ParseField("security");
  private SecurityUsage _security;
  public SecurityUsage getSecurity() { return this._security; }
  public XPackUsageResponse setSecurity(SecurityUsage val) { this._security = val; return this; }


  static final ParseField TRANSFORM = new ParseField("transform");
  private XPackUsage _transform;
  public XPackUsage getTransform() { return this._transform; }
  public XPackUsageResponse setTransform(XPackUsage val) { this._transform = val; return this; }


  static final ParseField VECTORS = new ParseField("vectors");
  private VectorUsage _vectors;
  public VectorUsage getVectors() { return this._vectors; }
  public XPackUsageResponse setVectors(VectorUsage val) { this._vectors = val; return this; }


  static final ParseField VOTING_ONLY = new ParseField("voting_only");
  private XPackUsage _votingOnly;
  public XPackUsage getVotingOnly() { return this._votingOnly; }
  public XPackUsageResponse setVotingOnly(XPackUsage val) { this._votingOnly = val; return this; }


  static final ParseField SLM = new ParseField("slm");
  private SlmUsage _slm;
  public SlmUsage getSlm() { return this._slm; }
  public XPackUsageResponse setSlm(SlmUsage val) { this._slm = val; return this; }


  static final ParseField ENRICH = new ParseField("enrich");
  private XPackUsage _enrich;
  public XPackUsage getEnrich() { return this._enrich; }
  public XPackUsageResponse setEnrich(XPackUsage val) { this._enrich = val; return this; }


  
  @Override
  public XContentBuilder toXContent(XContentBuilder builder, ToXContent.Params params) throws IOException {
    builder.startObject();
    if (_sql != null) {
      builder.field(SQL.getPreferredName());
      _sql.toXContent(builder, params);
    }
    if (_rollup != null) {
      builder.field(ROLLUP.getPreferredName());
      _rollup.toXContent(builder, params);
    }
    if (_dataFrame != null) {
      builder.field(DATA_FRAME.getPreferredName());
      _dataFrame.toXContent(builder, params);
    }
    if (_flattened != null) {
      builder.field(FLATTENED.getPreferredName());
      _flattened.toXContent(builder, params);
    }
    if (_dataScience != null) {
      builder.field(DATA_SCIENCE.getPreferredName());
      _dataScience.toXContent(builder, params);
    }
    if (_ilm != null) {
      builder.field(ILM.getPreferredName());
      _ilm.toXContent(builder, params);
    }
    if (_ccr != null) {
      builder.field(CCR.getPreferredName());
      _ccr.toXContent(builder, params);
    }
    if (_watcher != null) {
      builder.field(WATCHER.getPreferredName());
      _watcher.toXContent(builder, params);
    }
    if (_graph != null) {
      builder.field(GRAPH.getPreferredName());
      _graph.toXContent(builder, params);
    }
    if (_logstash != null) {
      builder.field(LOGSTASH.getPreferredName());
      _logstash.toXContent(builder, params);
    }
    if (_ml != null) {
      builder.field(ML.getPreferredName());
      _ml.toXContent(builder, params);
    }
    if (_monitoring != null) {
      builder.field(MONITORING.getPreferredName());
      _monitoring.toXContent(builder, params);
    }
    if (_security != null) {
      builder.field(SECURITY.getPreferredName());
      _security.toXContent(builder, params);
    }
    if (_transform != null) {
      builder.field(TRANSFORM.getPreferredName());
      _transform.toXContent(builder, params);
    }
    if (_vectors != null) {
      builder.field(VECTORS.getPreferredName());
      _vectors.toXContent(builder, params);
    }
    if (_votingOnly != null) {
      builder.field(VOTING_ONLY.getPreferredName());
      _votingOnly.toXContent(builder, params);
    }
    if (_slm != null) {
      builder.field(SLM.getPreferredName());
      _slm.toXContent(builder, params);
    }
    if (_enrich != null) {
      builder.field(ENRICH.getPreferredName());
      _enrich.toXContent(builder, params);
    }
    builder.endObject();
    return builder;
  }

  @Override
  public XPackUsageResponse fromXContent(XContentParser parser) throws IOException, XContentParseException {
    return XPackUsageResponse.PARSER.apply(parser, null);
  }

  public static final ObjectParser<XPackUsageResponse, Void> PARSER =
    new ObjectParser<>(XPackUsageResponse.class.getName(), false, XPackUsageResponse::new);

  static {
    PARSER.declareObject(XPackUsageResponse::setSql, (p, t) -> SqlUsage.PARSER.apply(p, t), SQL);
    PARSER.declareObject(XPackUsageResponse::setRollup, (p, t) -> XPackUsage.PARSER.apply(p, t), ROLLUP);
    PARSER.declareObject(XPackUsageResponse::setDataFrame, (p, t) -> XPackUsage.PARSER.apply(p, t), DATA_FRAME);
    PARSER.declareObject(XPackUsageResponse::setFlattened, (p, t) -> FlattenedUsage.PARSER.apply(p, t), FLATTENED);
    PARSER.declareObject(XPackUsageResponse::setDataScience, (p, t) -> XPackUsage.PARSER.apply(p, t), DATA_SCIENCE);
    PARSER.declareObject(XPackUsageResponse::setIlm, (p, t) -> IlmUsage.PARSER.apply(p, t), ILM);
    PARSER.declareObject(XPackUsageResponse::setCcr, (p, t) -> CcrUsage.PARSER.apply(p, t), CCR);
    PARSER.declareObject(XPackUsageResponse::setWatcher, (p, t) -> AlertingUsage.PARSER.apply(p, t), WATCHER);
    PARSER.declareObject(XPackUsageResponse::setGraph, (p, t) -> XPackUsage.PARSER.apply(p, t), GRAPH);
    PARSER.declareObject(XPackUsageResponse::setLogstash, (p, t) -> XPackUsage.PARSER.apply(p, t), LOGSTASH);
    PARSER.declareObject(XPackUsageResponse::setMl, (p, t) -> MachineLearningUsage.PARSER.apply(p, t), ML);
    PARSER.declareObject(XPackUsageResponse::setMonitoring, (p, t) -> MonitoringUsage.PARSER.apply(p, t), MONITORING);
    PARSER.declareObject(XPackUsageResponse::setSecurity, (p, t) -> SecurityUsage.PARSER.apply(p, t), SECURITY);
    PARSER.declareObject(XPackUsageResponse::setTransform, (p, t) -> XPackUsage.PARSER.apply(p, t), TRANSFORM);
    PARSER.declareObject(XPackUsageResponse::setVectors, (p, t) -> VectorUsage.PARSER.apply(p, t), VECTORS);
    PARSER.declareObject(XPackUsageResponse::setVotingOnly, (p, t) -> XPackUsage.PARSER.apply(p, t), VOTING_ONLY);
    PARSER.declareObject(XPackUsageResponse::setSlm, (p, t) -> SlmUsage.PARSER.apply(p, t), SLM);
    PARSER.declareObject(XPackUsageResponse::setEnrich, (p, t) -> XPackUsage.PARSER.apply(p, t), ENRICH);
  }

}
