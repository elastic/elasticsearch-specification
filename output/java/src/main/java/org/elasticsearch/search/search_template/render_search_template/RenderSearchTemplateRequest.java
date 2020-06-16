
package org.elasticsearch.search.search_template.render_search_template;

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


public class RenderSearchTemplateRequest  implements XContentable<RenderSearchTemplateRequest> {
  
  static final ParseField FILE = new ParseField("file");
  private String _file;
  public String getFile() { return this._file; }
  public RenderSearchTemplateRequest setFile(String val) { this._file = val; return this; }


  static final ParseField PARAMS = new ParseField("params");
  private NamedContainer<String, Object> _params;
  public NamedContainer<String, Object> getParams() { return this._params; }
  public RenderSearchTemplateRequest setParams(NamedContainer<String, Object> val) { this._params = val; return this; }


  static final ParseField SOURCE = new ParseField("source");
  private String _source;
  public String getSource() { return this._source; }
  public RenderSearchTemplateRequest setSource(String val) { this._source = val; return this; }


  
  @Override
  public XContentBuilder toXContent(XContentBuilder builder, ToXContent.Params params) throws IOException {
    builder.startObject();
    if (_file != null) {
      builder.field(FILE.getPreferredName(), _file);
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
  public RenderSearchTemplateRequest fromXContent(XContentParser parser) throws IOException, XContentParseException {
    return RenderSearchTemplateRequest.PARSER.apply(parser, null);
  }

  public static final ObjectParser<RenderSearchTemplateRequest, Void> PARSER =
    new ObjectParser<>(RenderSearchTemplateRequest.class.getName(), false, RenderSearchTemplateRequest::new);

  static {
    PARSER.declareString(RenderSearchTemplateRequest::setFile, FILE);
    PARSER.declareObject(RenderSearchTemplateRequest::setParams, (p, t) -> new NamedContainer<>(n -> () -> n,XContentParser::binaryValue), PARAMS);
    PARSER.declareString(RenderSearchTemplateRequest::setSource, SOURCE);
  }

}
