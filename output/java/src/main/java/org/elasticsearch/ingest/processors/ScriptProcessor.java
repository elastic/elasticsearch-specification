
package org.elasticsearch.ingest.processors;

import java.io.IOException;
import java.util.Date;
import java.util.List;
import java.util.HashMap;
import java.time.Instant;
import java.time.format.DateTimeFormatter;
import org.elasticsearch.*;
import org.elasticsearch.common.ParseField;
import org.elasticsearch.common.xcontent.*;
import org.elasticsearch.ingest.*;

public class ScriptProcessor extends ProcessorBase implements XContentable<ScriptProcessor> {
  
  static final ParseField ID = new ParseField("id");
  private String _id;
  public String getId() { return this._id; }
  public ScriptProcessor setId(String val) { this._id = val; return this; }

  static final ParseField LANG = new ParseField("lang");
  private String _lang;
  public String getLang() { return this._lang; }
  public ScriptProcessor setLang(String val) { this._lang = val; return this; }

  static final ParseField PARAMS = new ParseField("params");
  private NamedContainer<String, Object> _params;
  public NamedContainer<String, Object> getParams() { return this._params; }
  public ScriptProcessor setParams(NamedContainer<String, Object> val) { this._params = val; return this; }

  static final ParseField SOURCE = new ParseField("source");
  private String _source;
  public String getSource() { return this._source; }
  public ScriptProcessor setSource(String val) { this._source = val; return this; }


  
  @Override
  public void toXContentInternal(XContentBuilder builder, ToXContent.Params params) throws IOException {
    super.toXContentInternal(builder, params);
    if (_id != null) {
      builder.field(ID.getPreferredName(), _id);
    }
    if (_lang != null) {
      builder.field(LANG.getPreferredName(), _lang);
    }
    if (_params != null) {
      builder.field(PARAMS.getPreferredName());
      _params.toXContent(builder, params);
    }
    if (_source != null) {
      builder.field(SOURCE.getPreferredName(), _source);
    }
  }

  @Override
  public ScriptProcessor fromXContent(XContentParser parser) throws IOException, XContentParseException {
    return ScriptProcessor.PARSER.apply(parser, null);
  }

  public static final ObjectParser<ScriptProcessor, Void> PARSER =
    new ObjectParser<>(ScriptProcessor.class.getName(), false, ScriptProcessor::new);

  static {
    PARSER.declareString(ScriptProcessor::setId, ID);
    PARSER.declareString(ScriptProcessor::setLang, LANG);
    PARSER.declareObject(ScriptProcessor::setParams, (p, t) -> new NamedContainer<>(n -> () -> n,XContentParser::binaryValue), PARAMS);
    PARSER.declareString(ScriptProcessor::setSource, SOURCE);
  }

}
