
package org.elasticsearch.ingest;

import java.io.IOException;
import java.util.Date;
import java.util.List;
import java.util.HashMap;
import java.time.Instant;
import java.time.format.DateTimeFormatter;
import org.elasticsearch.*;
import org.elasticsearch.common.ParseField;
import org.elasticsearch.common.xcontent.*;
import org.elasticsearch.ingest.processors.plugins.*;
import org.elasticsearch.ingest.*;
import org.elasticsearch.ingest.processors.*;

public class ProcessorContainer  implements XContentable<ProcessorContainer> {
  
  static final ParseField ATTACHMENT = new ParseField("attachment");
  private AttachmentProcessor _attachment;
  public AttachmentProcessor getAttachment() { return this._attachment; }
  public ProcessorContainer setAttachment(AttachmentProcessor val) { this._attachment = val; return this; }

  static final ParseField APPEND = new ParseField("append");
  private AppendProcessor _append;
  public AppendProcessor getAppend() { return this._append; }
  public ProcessorContainer setAppend(AppendProcessor val) { this._append = val; return this; }

  static final ParseField CSV = new ParseField("csv");
  private CsvProcessor _csv;
  public CsvProcessor getCsv() { return this._csv; }
  public ProcessorContainer setCsv(CsvProcessor val) { this._csv = val; return this; }

  static final ParseField CONVERT = new ParseField("convert");
  private ConvertProcessor _convert;
  public ConvertProcessor getConvert() { return this._convert; }
  public ProcessorContainer setConvert(ConvertProcessor val) { this._convert = val; return this; }

  static final ParseField DATE = new ParseField("date");
  private DateProcessor _date;
  public DateProcessor getDate() { return this._date; }
  public ProcessorContainer setDate(DateProcessor val) { this._date = val; return this; }

  static final ParseField DATE_INDEX_NAME = new ParseField("date_index_name");
  private DateIndexNameProcessor _dateIndexName;
  public DateIndexNameProcessor getDateIndexName() { return this._dateIndexName; }
  public ProcessorContainer setDateIndexName(DateIndexNameProcessor val) { this._dateIndexName = val; return this; }

  static final ParseField DOT_EXPANDER = new ParseField("dot_expander");
  private DotExpanderProcessor _dotExpander;
  public DotExpanderProcessor getDotExpander() { return this._dotExpander; }
  public ProcessorContainer setDotExpander(DotExpanderProcessor val) { this._dotExpander = val; return this; }

  static final ParseField ENRICH = new ParseField("enrich");
  private EnrichProcessor _enrich;
  public EnrichProcessor getEnrich() { return this._enrich; }
  public ProcessorContainer setEnrich(EnrichProcessor val) { this._enrich = val; return this; }

  static final ParseField FAIL = new ParseField("fail");
  private FailProcessor _fail;
  public FailProcessor getFail() { return this._fail; }
  public ProcessorContainer setFail(FailProcessor val) { this._fail = val; return this; }

  static final ParseField FOREACH = new ParseField("foreach");
  private ForeachProcessor _foreach;
  public ForeachProcessor getForeach() { return this._foreach; }
  public ProcessorContainer setForeach(ForeachProcessor val) { this._foreach = val; return this; }

  static final ParseField JSON = new ParseField("json");
  private JsonProcessor _json;
  public JsonProcessor getJson() { return this._json; }
  public ProcessorContainer setJson(JsonProcessor val) { this._json = val; return this; }

  static final ParseField USER_AGENT = new ParseField("user_agent");
  private UserAgentProcessor _userAgent;
  public UserAgentProcessor getUserAgent() { return this._userAgent; }
  public ProcessorContainer setUserAgent(UserAgentProcessor val) { this._userAgent = val; return this; }

  static final ParseField KV = new ParseField("kv");
  private KeyValueProcessor _kv;
  public KeyValueProcessor getKv() { return this._kv; }
  public ProcessorContainer setKv(KeyValueProcessor val) { this._kv = val; return this; }

  static final ParseField GEOIP = new ParseField("geoip");
  private GeoIpProcessor _geoip;
  public GeoIpProcessor getGeoip() { return this._geoip; }
  public ProcessorContainer setGeoip(GeoIpProcessor val) { this._geoip = val; return this; }

  static final ParseField GROK = new ParseField("grok");
  private GrokProcessor _grok;
  public GrokProcessor getGrok() { return this._grok; }
  public ProcessorContainer setGrok(GrokProcessor val) { this._grok = val; return this; }

  static final ParseField GSUB = new ParseField("gsub");
  private GsubProcessor _gsub;
  public GsubProcessor getGsub() { return this._gsub; }
  public ProcessorContainer setGsub(GsubProcessor val) { this._gsub = val; return this; }

  static final ParseField JOIN = new ParseField("join");
  private JoinProcessor _join;
  public JoinProcessor getJoin() { return this._join; }
  public ProcessorContainer setJoin(JoinProcessor val) { this._join = val; return this; }

  static final ParseField LOWERCASE = new ParseField("lowercase");
  private LowercaseProcessor _lowercase;
  public LowercaseProcessor getLowercase() { return this._lowercase; }
  public ProcessorContainer setLowercase(LowercaseProcessor val) { this._lowercase = val; return this; }

  static final ParseField REMOVE = new ParseField("remove");
  private RemoveProcessor _remove;
  public RemoveProcessor getRemove() { return this._remove; }
  public ProcessorContainer setRemove(RemoveProcessor val) { this._remove = val; return this; }

  static final ParseField RENAME = new ParseField("rename");
  private RenameProcessor _rename;
  public RenameProcessor getRename() { return this._rename; }
  public ProcessorContainer setRename(RenameProcessor val) { this._rename = val; return this; }

  static final ParseField SCRIPT = new ParseField("script");
  private ScriptProcessor _script;
  public ScriptProcessor getScript() { return this._script; }
  public ProcessorContainer setScript(ScriptProcessor val) { this._script = val; return this; }

  static final ParseField SET = new ParseField("set");
  private SetProcessor _set;
  public SetProcessor getSet() { return this._set; }
  public ProcessorContainer setSet(SetProcessor val) { this._set = val; return this; }

  static final ParseField SORT = new ParseField("sort");
  private SortProcessor _sort;
  public SortProcessor getSort() { return this._sort; }
  public ProcessorContainer setSort(SortProcessor val) { this._sort = val; return this; }

  static final ParseField SPLIT = new ParseField("split");
  private SplitProcessor _split;
  public SplitProcessor getSplit() { return this._split; }
  public ProcessorContainer setSplit(SplitProcessor val) { this._split = val; return this; }

  static final ParseField TRIM = new ParseField("trim");
  private TrimProcessor _trim;
  public TrimProcessor getTrim() { return this._trim; }
  public ProcessorContainer setTrim(TrimProcessor val) { this._trim = val; return this; }

  static final ParseField UPPERCASE = new ParseField("uppercase");
  private UppercaseProcessor _uppercase;
  public UppercaseProcessor getUppercase() { return this._uppercase; }
  public ProcessorContainer setUppercase(UppercaseProcessor val) { this._uppercase = val; return this; }

  static final ParseField URLDECODE = new ParseField("urldecode");
  private UrlDecodeProcessor _urldecode;
  public UrlDecodeProcessor getUrldecode() { return this._urldecode; }
  public ProcessorContainer setUrldecode(UrlDecodeProcessor val) { this._urldecode = val; return this; }

  static final ParseField BYTES = new ParseField("bytes");
  private BytesProcessor _bytes;
  public BytesProcessor getBytes() { return this._bytes; }
  public ProcessorContainer setBytes(BytesProcessor val) { this._bytes = val; return this; }

  static final ParseField DISSECT = new ParseField("dissect");
  private DissectProcessor _dissect;
  public DissectProcessor getDissect() { return this._dissect; }
  public ProcessorContainer setDissect(DissectProcessor val) { this._dissect = val; return this; }

  static final ParseField SET_SECURITY_USER = new ParseField("set_security_user");
  private SetSecurityUserProcessor _setSecurityUser;
  public SetSecurityUserProcessor getSetSecurityUser() { return this._setSecurityUser; }
  public ProcessorContainer setSetSecurityUser(SetSecurityUserProcessor val) { this._setSecurityUser = val; return this; }

  static final ParseField PIPELINE = new ParseField("pipeline");
  private PipelineProcessor _pipeline;
  public PipelineProcessor getPipeline() { return this._pipeline; }
  public ProcessorContainer setPipeline(PipelineProcessor val) { this._pipeline = val; return this; }

  static final ParseField DROP = new ParseField("drop");
  private DropProcessor _drop;
  public DropProcessor getDrop() { return this._drop; }
  public ProcessorContainer setDrop(DropProcessor val) { this._drop = val; return this; }

  static final ParseField CIRCLE = new ParseField("circle");
  private CircleProcessor _circle;
  public CircleProcessor getCircle() { return this._circle; }
  public ProcessorContainer setCircle(CircleProcessor val) { this._circle = val; return this; }


  
  @Override
  public void toXContentInternal(XContentBuilder builder, ToXContent.Params params) throws IOException {
    
    if (_attachment != null) {
      builder.field(ATTACHMENT.getPreferredName());
      _attachment.toXContent(builder, params);
    }
    if (_append != null) {
      builder.field(APPEND.getPreferredName());
      _append.toXContent(builder, params);
    }
    if (_csv != null) {
      builder.field(CSV.getPreferredName());
      _csv.toXContent(builder, params);
    }
    if (_convert != null) {
      builder.field(CONVERT.getPreferredName());
      _convert.toXContent(builder, params);
    }
    if (_date != null) {
      builder.field(DATE.getPreferredName());
      _date.toXContent(builder, params);
    }
    if (_dateIndexName != null) {
      builder.field(DATE_INDEX_NAME.getPreferredName());
      _dateIndexName.toXContent(builder, params);
    }
    if (_dotExpander != null) {
      builder.field(DOT_EXPANDER.getPreferredName());
      _dotExpander.toXContent(builder, params);
    }
    if (_enrich != null) {
      builder.field(ENRICH.getPreferredName());
      _enrich.toXContent(builder, params);
    }
    if (_fail != null) {
      builder.field(FAIL.getPreferredName());
      _fail.toXContent(builder, params);
    }
    if (_foreach != null) {
      builder.field(FOREACH.getPreferredName());
      _foreach.toXContent(builder, params);
    }
    if (_json != null) {
      builder.field(JSON.getPreferredName());
      _json.toXContent(builder, params);
    }
    if (_userAgent != null) {
      builder.field(USER_AGENT.getPreferredName());
      _userAgent.toXContent(builder, params);
    }
    if (_kv != null) {
      builder.field(KV.getPreferredName());
      _kv.toXContent(builder, params);
    }
    if (_geoip != null) {
      builder.field(GEOIP.getPreferredName());
      _geoip.toXContent(builder, params);
    }
    if (_grok != null) {
      builder.field(GROK.getPreferredName());
      _grok.toXContent(builder, params);
    }
    if (_gsub != null) {
      builder.field(GSUB.getPreferredName());
      _gsub.toXContent(builder, params);
    }
    if (_join != null) {
      builder.field(JOIN.getPreferredName());
      _join.toXContent(builder, params);
    }
    if (_lowercase != null) {
      builder.field(LOWERCASE.getPreferredName());
      _lowercase.toXContent(builder, params);
    }
    if (_remove != null) {
      builder.field(REMOVE.getPreferredName());
      _remove.toXContent(builder, params);
    }
    if (_rename != null) {
      builder.field(RENAME.getPreferredName());
      _rename.toXContent(builder, params);
    }
    if (_script != null) {
      builder.field(SCRIPT.getPreferredName());
      _script.toXContent(builder, params);
    }
    if (_set != null) {
      builder.field(SET.getPreferredName());
      _set.toXContent(builder, params);
    }
    if (_sort != null) {
      builder.field(SORT.getPreferredName());
      _sort.toXContent(builder, params);
    }
    if (_split != null) {
      builder.field(SPLIT.getPreferredName());
      _split.toXContent(builder, params);
    }
    if (_trim != null) {
      builder.field(TRIM.getPreferredName());
      _trim.toXContent(builder, params);
    }
    if (_uppercase != null) {
      builder.field(UPPERCASE.getPreferredName());
      _uppercase.toXContent(builder, params);
    }
    if (_urldecode != null) {
      builder.field(URLDECODE.getPreferredName());
      _urldecode.toXContent(builder, params);
    }
    if (_bytes != null) {
      builder.field(BYTES.getPreferredName());
      _bytes.toXContent(builder, params);
    }
    if (_dissect != null) {
      builder.field(DISSECT.getPreferredName());
      _dissect.toXContent(builder, params);
    }
    if (_setSecurityUser != null) {
      builder.field(SET_SECURITY_USER.getPreferredName());
      _setSecurityUser.toXContent(builder, params);
    }
    if (_pipeline != null) {
      builder.field(PIPELINE.getPreferredName());
      _pipeline.toXContent(builder, params);
    }
    if (_drop != null) {
      builder.field(DROP.getPreferredName());
      _drop.toXContent(builder, params);
    }
    if (_circle != null) {
      builder.field(CIRCLE.getPreferredName());
      _circle.toXContent(builder, params);
    }
  }

  @Override
  public ProcessorContainer fromXContent(XContentParser parser) throws IOException, XContentParseException {
    return ProcessorContainer.PARSER.apply(parser, null);
  }

  public static final ObjectParser<ProcessorContainer, Void> PARSER =
    new ObjectParser<>(ProcessorContainer.class.getName(), false, ProcessorContainer::new);

  static {
    PARSER.declareObject(ProcessorContainer::setAttachment, (p, t) -> AttachmentProcessor.PARSER.apply(p, t), ATTACHMENT);
    PARSER.declareObject(ProcessorContainer::setAppend, (p, t) -> AppendProcessor.PARSER.apply(p, t), APPEND);
    PARSER.declareObject(ProcessorContainer::setCsv, (p, t) -> CsvProcessor.PARSER.apply(p, t), CSV);
    PARSER.declareObject(ProcessorContainer::setConvert, (p, t) -> ConvertProcessor.PARSER.apply(p, t), CONVERT);
    PARSER.declareObject(ProcessorContainer::setDate, (p, t) -> DateProcessor.PARSER.apply(p, t), DATE);
    PARSER.declareObject(ProcessorContainer::setDateIndexName, (p, t) -> DateIndexNameProcessor.PARSER.apply(p, t), DATE_INDEX_NAME);
    PARSER.declareObject(ProcessorContainer::setDotExpander, (p, t) -> DotExpanderProcessor.PARSER.apply(p, t), DOT_EXPANDER);
    PARSER.declareObject(ProcessorContainer::setEnrich, (p, t) -> EnrichProcessor.PARSER.apply(p, t), ENRICH);
    PARSER.declareObject(ProcessorContainer::setFail, (p, t) -> FailProcessor.PARSER.apply(p, t), FAIL);
    PARSER.declareObject(ProcessorContainer::setForeach, (p, t) -> ForeachProcessor.PARSER.apply(p, t), FOREACH);
    PARSER.declareObject(ProcessorContainer::setJson, (p, t) -> JsonProcessor.PARSER.apply(p, t), JSON);
    PARSER.declareObject(ProcessorContainer::setUserAgent, (p, t) -> UserAgentProcessor.PARSER.apply(p, t), USER_AGENT);
    PARSER.declareObject(ProcessorContainer::setKv, (p, t) -> KeyValueProcessor.PARSER.apply(p, t), KV);
    PARSER.declareObject(ProcessorContainer::setGeoip, (p, t) -> GeoIpProcessor.PARSER.apply(p, t), GEOIP);
    PARSER.declareObject(ProcessorContainer::setGrok, (p, t) -> GrokProcessor.PARSER.apply(p, t), GROK);
    PARSER.declareObject(ProcessorContainer::setGsub, (p, t) -> GsubProcessor.PARSER.apply(p, t), GSUB);
    PARSER.declareObject(ProcessorContainer::setJoin, (p, t) -> JoinProcessor.PARSER.apply(p, t), JOIN);
    PARSER.declareObject(ProcessorContainer::setLowercase, (p, t) -> LowercaseProcessor.PARSER.apply(p, t), LOWERCASE);
    PARSER.declareObject(ProcessorContainer::setRemove, (p, t) -> RemoveProcessor.PARSER.apply(p, t), REMOVE);
    PARSER.declareObject(ProcessorContainer::setRename, (p, t) -> RenameProcessor.PARSER.apply(p, t), RENAME);
    PARSER.declareObject(ProcessorContainer::setScript, (p, t) -> ScriptProcessor.PARSER.apply(p, t), SCRIPT);
    PARSER.declareObject(ProcessorContainer::setSet, (p, t) -> SetProcessor.PARSER.apply(p, t), SET);
    PARSER.declareObject(ProcessorContainer::setSort, (p, t) -> SortProcessor.PARSER.apply(p, t), SORT);
    PARSER.declareObject(ProcessorContainer::setSplit, (p, t) -> SplitProcessor.PARSER.apply(p, t), SPLIT);
    PARSER.declareObject(ProcessorContainer::setTrim, (p, t) -> TrimProcessor.PARSER.apply(p, t), TRIM);
    PARSER.declareObject(ProcessorContainer::setUppercase, (p, t) -> UppercaseProcessor.PARSER.apply(p, t), UPPERCASE);
    PARSER.declareObject(ProcessorContainer::setUrldecode, (p, t) -> UrlDecodeProcessor.PARSER.apply(p, t), URLDECODE);
    PARSER.declareObject(ProcessorContainer::setBytes, (p, t) -> BytesProcessor.PARSER.apply(p, t), BYTES);
    PARSER.declareObject(ProcessorContainer::setDissect, (p, t) -> DissectProcessor.PARSER.apply(p, t), DISSECT);
    PARSER.declareObject(ProcessorContainer::setSetSecurityUser, (p, t) -> SetSecurityUserProcessor.PARSER.apply(p, t), SET_SECURITY_USER);
    PARSER.declareObject(ProcessorContainer::setPipeline, (p, t) -> PipelineProcessor.PARSER.apply(p, t), PIPELINE);
    PARSER.declareObject(ProcessorContainer::setDrop, (p, t) -> DropProcessor.PARSER.apply(p, t), DROP);
    PARSER.declareObject(ProcessorContainer::setCircle, (p, t) -> CircleProcessor.PARSER.apply(p, t), CIRCLE);
  }

}
